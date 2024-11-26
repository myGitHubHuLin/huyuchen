import {
  EditorSimpleWorker,
  SimpleWorkerServer
} from "./chunk-KQPWQXVO.js";

// node_modules/monaco-editor/esm/vs/editor/editor.worker.js
var initialized = false;
function initialize(foreignModule) {
  if (initialized) {
    return;
  }
  initialized = true;
  const simpleWorker = new SimpleWorkerServer((msg) => {
    globalThis.postMessage(msg);
  }, (host) => new EditorSimpleWorker(host, foreignModule));
  globalThis.onmessage = (e) => {
    simpleWorker.onmessage(e.data);
  };
}
globalThis.onmessage = (e) => {
  if (!initialized) {
    initialize(null);
  }
};

export {
  initialize
};
//# sourceMappingURL=chunk-JFMSWAOD.js.map
