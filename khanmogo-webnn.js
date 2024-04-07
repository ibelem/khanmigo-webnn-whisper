const init = async () => {
    console.log('Imported from VS Code');
    await runONNX();
}

(async () => {
    const ortPackage = document.createElement("script");
    ortPackage.type = "text/javascript";
    ortPackage.src = "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.18.0-dev.20240311-5479124834/dist/ort.all.min.js";
    document.head.appendChild(ortPackage);
    // ortPackage.onload = async () => {
    //     await init();
    // }

    let getKhamigo = document.getElementById('3');
    getKhamigo.setAttribute('href', '#');
    getKhamigo.removeAttribute('target');
    getKhamigo.addEventListener('click', init, false);
})();