// ==UserScript==
// @name          bot for yandex
// @namespace    bot for yandex
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

 let keywordsAll = ["Гобой","Флейта","Как звучит флейта","Кларнет","Фагот"];
        let keyword = keywordsAll[Math.floor(Math.random()*keywordsAll.length)];
        let btnK = document.querySelector(".button_theme_search");
        if (btnK != undefined) {
            document.getElementById("text").value = keyword;
            btnK.click();
        } else {
            let links = document.links;
            let goToTheNextPage = true;
            let currentPage = document.querySelectorAll(".pager__item_current_yes")[0].innerText;
            for (let i = 0; i < links.length; i++) {
                let link = links[i];
                if (link.href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") != -1) {
                    link.click();
                    goToTheNextPage = false;
                    break;
                }
            }
            let pnnext = document.querySelector(".pager__item_kind_next")
            if (currentPage > 10) location.href = "https://yandex.ru/"
            else if (goToTheNextPage) pnnext.click();
        }
