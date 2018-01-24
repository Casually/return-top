var flag = {
    begin : 0,
    change : 0
};//当前未开始
setInterval(function(){
    httpRequest("http://192.168.31.252:8079/webSeven/system/login/signIn.jso",function (json) {
        console.log(json);
        chrome.tabs.onUpdated.addListener(function (tabId, changeInfo,tab) {
            console.log(tabId)
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
                    console.log(response.state);
                });
            });
        })
    })
}, 3000)

function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            // JSON解析器不会执行攻击者设计的脚本.
            var resp = JSON.parse(xhr.responseText);
            callback(resp);
        }
    };
    xhr.send();
}