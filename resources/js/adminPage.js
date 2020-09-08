function fitIframeContent(){
    var iframe = document.getElementById("feature-iframe");
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}