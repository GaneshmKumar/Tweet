/*
* @Author: GaNeShKuMaRm
* @Date:   2017-04-24 22:32:40
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-04-25 14:37:24
*/

'use strict';
chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
    chrome.tabs.create({url: encodeURI('https://twitter.com/intent/tweet?text=' + selection[0])});
    window.close();
});

