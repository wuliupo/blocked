function setDOMInfo(info = '') {
    var blocked = document.getElementById('blocked');
    var li = document.createElement('li');
    if (info.words) {
        li.innerHTML = 'words: ' + info.words + ' -> ' + info.host;
    } else if (info.domain) {
        li.innerHTML = 'domain: ' + info.domain + ' -> ' + info.url;
    } else if (info) {
        li.innerHTML = 'blocked: ' + info;
    }

    blocked.appendChild(li);
}
window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('blocked').innerHTML = '';
    chrome.browserAction.setBadgeText({text: ''});
});
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    var blocked = request && request.blocked;
    blocked && setDOMInfo(blocked);
    sendResponse('Received' +JSON.stringify(request));
});
