'use strict';

let searchBtn = document.getElementById('search');
let clearBtn = document.getElementById('clear');
let site = document.getElementById('site');
let total = document.getElementById('total');

searchBtn.onclick = () => {
    // console.log(site.value);
    if(site.value){
        chrome.history.search({text: site.value, maxResults: 100}, function(data) {
            total.innerHTML = data.length;
            data.forEach(page => {
                console.log(page);
            });
        });
    }else {
        document.getElementById('total-main').innerHTML = "Enter something";
    }
};

clearBtn.onclick = () => {
    chrome.history.search({text: site.value, maxResults: 100}, function(data) {
        data.forEach(page => {
            chrome.history.deleteUrl({
                url: page.url
            }, () => {
                document.getElementById('total-main').innerHTML = "Cleared";
            });
        });
    });
};
