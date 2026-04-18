/**
 * Project-Doc-Skill — Deliverable Architecture Bridge (Apps Script)
 *
 * One paste handles both setup AND runtime. Two usages:
 *
 *   1. First-time setup (run once, manually, from Apps Script editor):
 *        - Paste this entire file into a new Apps Script project
 *        - Edit PROJECT_CONFIG below to match your project
 *        - Run setupScaffold() → creates folder tree, empty Docs/Sheets,
 *          stores file IDs in Script Properties
 *        - Review the Logger output to confirm everything was created
 *        - Deploy as Web App (execute as self, accessible by anyone
 *          with link) → copy deployment URL for session retrieval
 *
 *   2. Runtime (LLM hits the deployed URL during sessions):
 *        GET  /?action=read&file=<name>   — returns file contents
 *        POST /  body { action, file, payload }  — applies update
 *
 * Security: the deployment URL acts as a shared secret. Rotate if leaked.
 */

// =====================================================================
// PROJECT CONFIG — edit this block per project, then run setupScaffold()
// =====================================================================

const PROJECT_CONFIG = {
  rootName: 'Job Search',

  // Subfolders created under root. Path segments use '/' for nesting.
  subfolders: [
    '01-Upwork',
    '02-General-Jobs',
    '03-Process',
    '03-Process/Writing-Samples',
    '04-Queue',
    '05-Formats',
    '_System',
  ],

  // Empty Google Docs to create. Key is the lookup name used at runtime.
  docs: {
    'entry':                    { folder: '',           title: 'Entry' },
    'current-state':            { folder: '',           title: 'Current State' },
    'decision-log':             { folder: '',           title: 'Decision Log' },
    'handoff-log':              { folder: '',           title: 'Handoff Log' },
    'profile':                  { folder: '01-Upwork',  title: 'Profile' },
    'portfolio':                { folder: '01-Upwork',  title: 'Portfolio' },
    'strategy':                 { folder: '01-Upwork',  title: 'Strategy' },
    'income-strategy':          { folder: '01-Upwork',  title: 'Income Strategy' },
    'job-search-prompt':        { folder: '03-Process', title: 'Job Search Prompt' },
    'prepare-application':      { folder: '03-Process', title: 'Prepare Application Prompt' },
    'cover-letter-style-guide': { folder: '03-Process', title: 'Cover Letter Style Guide' },
    'job-listing-format':       { folder: '05-Formats', title: 'Job Listing Format' },
    'writing-sample-format':    { folder: '05-Formats', title: 'Writing Sample Format' },
  },

  // Empty Google Sheets to create.
  sheets: {
    'flagged-jobs':       { folder: '04-Queue',  title: 'Flagged Jobs' },
    'portfolio-summary':  { folder: '01-Upwork', title: 'Portfolio Summary' },
  },
};

// =====================================================================
// SETUP — run this once manually after pasting
// =====================================================================

function setupScaffold() {
  const props = PropertiesService.getScriptProperties();
  const created = { folders: {}, docs: {}, sheets: {} };

  // 1. Root folder
  const root = findOrCreateRootFolder_(PROJECT_CONFIG.rootName);
  created.folders[''] = root.getId();
  Logger.log('Root folder: ' + root.getName() + ' (' + root.getId() + ')');

  // 2. Subfolders (supports nested paths like '03-Process/Writing-Samples')
  PROJECT_CONFIG.subfolders.forEach(path => {
    const folder = ensureFolderPath_(root, path);
    created.folders[path] = folder.getId();
    Logger.log('Folder: ' + path + ' (' + folder.getId() + ')');
  });

  // 3. Empty Docs
  Object.entries(PROJECT_CONFIG.docs).forEach(([key, spec]) => {
    const parent = created.folders[spec.folder] ?
      DriveApp.getFolderById(created.folders[spec.folder]) : root;
    const doc = findOrCreateDoc_(spec.title, parent);
    created.docs[key] = doc.getId();
    Logger.log('Doc: ' + key + ' → ' + spec.title + ' (' + doc.getId() + ')');
  });

  // 4. Empty Sheets
  Object.entries(PROJECT_CONFIG.sheets).forEach(([key, spec]) => {
    const parent = created.folders[spec.folder] ?
      DriveApp.getFolderById(created.folders[spec.folder]) : root;
    const sheet = findOrCreateSheet_(spec.title, parent);
    created.sheets[key] = sheet.getId();
    Logger.log('Sheet: ' + key + ' → ' + spec.title + ' (' + sheet.getId() + ')');
  });

  // 5. Persist all IDs in Script Properties for runtime lookup
  props.setProperty('FOLDER_MAP', JSON.stringify(created.folders));
  props.setProperty('DOC_MAP',    JSON.stringify(created.docs));
  props.setProperty('SHEET_MAP',  JSON.stringify(created.sheets));

  Logger.log('---');
  Logger.log('Setup complete. Scaffold: ' +
    Object.keys(created.folders).length + ' folders, ' +
    Object.keys(created.docs).length + ' docs, ' +
    Object.keys(created.sheets).length + ' sheets.');
  Logger.log('Next: Deploy → New deployment → Web app (execute as self, ' +
    'anyone with link). Copy the deployment URL.');

  return created;
}

function findOrCreateRootFolder_(name) {
  const it = DriveApp.getFoldersByName(name);
  return it.hasNext() ? it.next() : DriveApp.createFolder(name);
}

function ensureFolderPath_(root, path) {
  const segs = path.split('/').filter(s => s);
  let cur = root;
  segs.forEach(seg => {
    const it = cur.getFoldersByName(seg);
    cur = it.hasNext() ? it.next() : cur.createFolder(seg);
  });
  return cur;
}

function findOrCreateDoc_(title, parent) {
  const it = parent.getFilesByName(title);
  if (it.hasNext()) return DocumentApp.openByUrl(it.next().getUrl());
  const doc = DocumentApp.create(title);
  const file = DriveApp.getFileById(doc.getId());
  parent.addFile(file);
  DriveApp.getRootFolder().removeFile(file);
  return doc;
}

function findOrCreateSheet_(title, parent) {
  const it = parent.getFilesByName(title);
  if (it.hasNext()) return SpreadsheetApp.openByUrl(it.next().getUrl());
  const ss = SpreadsheetApp.create(title);
  const file = DriveApp.getFileById(ss.getId());
  parent.addFile(file);
  DriveApp.getRootFolder().removeFile(file);
  return ss;
}

// =====================================================================
// RUNTIME — reads/writes during LLM sessions
// =====================================================================

function docMap_()   { return JSON.parse(PropertiesService.getScriptProperties().getProperty('DOC_MAP')   || '{}'); }
function sheetMap_() { return JSON.parse(PropertiesService.getScriptProperties().getProperty('SHEET_MAP') || '{}'); }

function doGet(e) {
  const action = (e.parameter.action || 'read').toLowerCase();
  const file = e.parameter.file;
  if (action === 'read') return read_(file);
  if (action === 'list') return listFiles_();
  return respond_({error: 'unknown action'}, 400);
}

function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  const { action, file, payload } = body;
  if (action === 'append_row')       return appendRow_(file, payload);
  if (action === 'replace_section')  return replaceSection_(file, payload);
  if (action === 'append_doc_entry') return appendDocEntry_(file, payload);
  return respond_({error: 'unknown action'}, 400);
}

function read_(name) {
  const docs = docMap_(), sheets = sheetMap_();
  if (docs[name]) {
    const doc = DocumentApp.openById(docs[name]);
    return respond_({file: name, content: doc.getBody().getText()});
  }
  if (sheets[name]) {
    const sheet = SpreadsheetApp.openById(sheets[name]).getActiveSheet();
    return respond_({file: name, rows: sheet.getDataRange().getValues()});
  }
  return respond_({error: 'unknown file: ' + name}, 404);
}

function listFiles_() {
  return respond_({
    docs: Object.keys(docMap_()),
    sheets: Object.keys(sheetMap_()),
  });
}

function appendRow_(sheetName, row) {
  const id = sheetMap_()[sheetName];
  if (!id) return respond_({error: 'unknown sheet'}, 404);
  SpreadsheetApp.openById(id).getActiveSheet().appendRow(row);
  return respond_({ok: true});
}

function replaceSection_(docName, { heading, content }) {
  const id = docMap_()[docName];
  if (!id) return respond_({error: 'unknown doc'}, 404);
  const doc = DocumentApp.openById(id);
  const body = doc.getBody();
  const found = body.findText('^' + heading + '$');
  if (!found) {
    body.appendParagraph(heading).setHeading(DocumentApp.ParagraphHeading.HEADING2);
    body.appendParagraph(content);
    return respond_({ok: true, created: true});
  }
  body.appendParagraph(content);
  return respond_({ok: true});
}

function appendDocEntry_(docName, { entry }) {
  const id = docMap_()[docName];
  if (!id) return respond_({error: 'unknown doc'}, 404);
  DocumentApp.openById(id).getBody().appendParagraph(entry);
  return respond_({ok: true});
}

function respond_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
