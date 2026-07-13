const DEBUG = false;
function log(...args) {
  if (DEBUG) console.log("[editor-live-sync]", ...args);
}

log("editor live sync loaded");

export {};
