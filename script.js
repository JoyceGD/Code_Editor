  function run(){
            let htmlCode = document.getElementById("html-code");
            let cssCode = document.getElementById("css-code");
            let jsCode = document.getElementById("JavaScript");
            let output = document.getElementById("output");
            let html=htmlCode.value;
            output.contentDocument.body.innerHTML=html+"<style>"+cssCode.value+"</style>";
            output.contentWindow.eval(jsCode.value);
        };