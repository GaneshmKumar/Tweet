/*
* @Author: GaNeShKuMaRm
* @Date:   2017-04-24 22:32:40
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-04-25 13:59:22
*/

'use strict';


/*function process(current)
{
    var currentDomain = current.split('//')[1].split('/')[0];
    localStorage["current"] = current;
    if(currentDomain == "mail.google.com" || currentDomain == "www.gmail.com")
    {
        chrome.tabs.update({url: "login.html"});
        window.close();
    }
}

function getCurrentTab(e) {
    chrome.tabs.query({ currentWindow: true, active: true}, function (tabs) {
        var current = tabs[0].url;
        process(current);
    });
}

chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
       getCurrentTab();
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    var password = document.getElementById('password').value;
    if(password == 'ganesh')
    {
        chrome.tabs.update({url: localStorage["current"]});
    }
    else
    {
        alert('Wrong Password');
    }
});
*/

chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
    chrome.tabs.create({url: encodeURI('https://twitter.com/intent/tweet?text=' + selection[0])});
    window.close();
});

