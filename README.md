## Settings

1. Chrome -> Extensions (chrome://extensions) -> Tampermonkey -> Details -> Allow access to file URLs -> Enabled 
2. User Script

```
// ==UserScript==
// @name         Khanmigo with WebNN Whisper on NPU
// @namespace    https://www.khanmigo.ai
// @version      2024-04-07
// @description  Replace Khanmigo AI with WebNN Whisper on NPU
// @author       WebNN Team
// @match        https://www.khanmigo.ai/
// @require      file:///C://workspace/GitHub/khanmigo-webnn-whisper/webnn-whisper.js
// @require      file:///C://workspace/GitHub/khanmigo-webnn-whisper/khanmogo-webnn.js
// @icon         https://ibelem.github.io/onnxruntime-web-demo/demos/whisper-base/static/favicon/android-chrome-192x192.png
// @grant        none
// ==/UserScript==
```