/**
 * Lumen Agency Redesign — Apps Script Bridge
 *
 * Deployed as: Web App (execute as self, accessible by anyone with link)
 *
 * Endpoints:
 *   GET  /?action=read&file=<name>        — returns markdown snapshot
 *   POST /  body { action, file, payload } — applies update
 *
 * Security: the deployment URL acts as a shared secret. Rotate if leaked.
 */

const FOLDER_ID = 'REPLACE_WITH_DRIVE_FOLDER_ID';
const DOC_MAP = {
  'entry': 'REPLACE_WITH_ENTRY_DOC_ID',
  'decision-log': 'REPLACE_WITH_DECISION_LOG_ID',
  'handoff-log': 'REPLACE_WITH_HANDOFF_LOG_ID',
  'work-log': 'REPLACE_WITH_WORK_LOG_ID',
  'discovery-summary': 'REPLACE_WITH_DISCOVERY_SUMMARY_ID',
  'week-1-update': 'REPLACE_WITH_WEEK_1_UPDATE_ID',
  'metricool-subcontractor-scope': 'REPLACE_WITH_SUBCONTRACTOR_DOC_ID'
};
const SHEET_MAP = {
  'bottlenecks': 'REPLACE_WITH_BOTTLENECKS_SHEET_ID',
  'integration-specs': 'REPLACE_WITH_INTEGRATION_SPECS_SHEET_ID',
  'current-state-audit': 'REPLACE_WITH_AUDIT_SHEET_ID'
};

function doGet(e) {
  const action = (e.parameter.action || 'read').toLowerCase();
  const file = e.parameter.file;
  if (action === 'read') return read_(file);
  return respond_({error: 'unknown action'}, 400);
}

function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  const { action, file, payload } = body;
  if (action === 'append_row') return appendRow_(file, payload);
  if (action === 'replace_section') return replaceSection_(file, payload);
  if (action === 'append_doc_entry') return appendDocEntry_(file, payload);
  return respond_({error: 'unknown action'}, 400);
}

function read_(name) {
  if (DOC_MAP[name]) {
    const doc = DocumentApp.openById(DOC_MAP[name]);
    return respond_({file: name, content: doc.getBody().getText()});
  }
  if (SHEET_MAP[name]) {
    const sheet = SpreadsheetApp.openById(SHEET_MAP[name]).getActiveSheet();
    const values = sheet.getDataRange().getValues();
    return respond_({file: name, rows: values});
  }
  return respond_({error: 'unknown file: ' + name}, 404);
}

function appendRow_(sheetName, row) {
  const id = SHEET_MAP[sheetName];
  if (!id) return respond_({error: 'unknown sheet'}, 404);
  SpreadsheetApp.openById(id).getActiveSheet().appendRow(row);
  return respond_({ok: true});
}

function replaceSection_(docName, { heading, content }) {
  const id = DOC_MAP[docName];
  if (!id) return respond_({error: 'unknown doc'}, 404);
  const doc = DocumentApp.openById(id);
  const body = doc.getBody();
  const found = body.findText('^' + heading + '$');
  if (!found) { body.appendParagraph(heading).setHeading(DocumentApp.ParagraphHeading.HEADING2); body.appendParagraph(content); return respond_({ok: true, created: true}); }
  // Replace section content after heading (simplified)
  body.appendParagraph(content);
  return respond_({ok: true});
}

function appendDocEntry_(docName, { entry }) {
  const id = DOC_MAP[docName];
  if (!id) return respond_({error: 'unknown doc'}, 404);
  const doc = DocumentApp.openById(id);
  doc.getBody().appendParagraph(entry);
  return respond_({ok: true});
}

function respond_(obj, code) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
