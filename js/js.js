var drt = document.createElement("div");
drt.innerHTML = "<a href='javascript:window.scrollTo(0,0);'>返回顶部</a>"
drt.id = "div-return-top";
document.body.insertBefore(drt, document.body.firstChild);
/* var DX1_D = document.getElementsByName("DX1_D")[0];
 if (DX1_D) {
     DX1_D.value = 10;
 } else {
     alert("没有找到投注点")
 }*/

/*setInterval(function () {
    console.log(jsons)
},1000);*/

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.status == "ok"){
            console.log(request.greeting);
        }
        sendResponse({"state": "ok"});
    }
);
