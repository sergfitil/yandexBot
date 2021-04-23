    // ==UserScript==
        // @name         bot for yandex
        // @namespace    bot for yandex
        // @version      0.1
        // @description  try to take over the world!
        // @author       You
        // @match        https://yandex.ru/*
        // @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
        // @match        https://crushdrummers.ru/*
        // @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
        // @grant        none
        // ==/UserScript==
        function getCookie(name) {
            let matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }
        let sites = {
            "xn----7sbab5aqcbiddtdj1e1g.xn--p1ai": ["Гобой", "Флейта", "Как звучить флейта", "Фагот", "Кларнет"],
            "crushdrummers.ru": ["барабанное шоу crush", "crushDrummers", "шоу барабанщиков crush"]//Создаем объект с ключом в виде названия сайта и значением в виде ключевых слов
        }
        let site = Object.keys(sites)[Math.floor(Math.random() * Object.keys(sites).length)];//Создаем переменную с ключем для выбора сайта рандомным способом
        let keywordsAll = sites[site];//У объекта берем ключ и кладем в пременную ключевые слова
        let keyword = keywordsAll[Math.floor(Math.random() * keywordsAll.length)];// Кладем в переменную ключевое слово выбранное рандомным способом
        let btnK = document.querySelector(".button_theme_search");
        let yandexInput = document.getElementById("text")
        if (btnK != undefined) {
            document.cookie = "site=" + site;//Сохраняем cookie на сайте поисковика
            let i = 0;
            let timerId = setInterval(function () {
                yandexInput.value += keyword[i++]
                if (keyword.length == i) {
                    clearInterval(timerId);
                    btnK.click();
                }
            }, 500);// Набираем поисковое слово через интервал по буквам 
        } else if (location.hostname === "yandex.ru") {
            let links = document.links;
            let goToTheNextPage = true;
            let currentPage = document.querySelectorAll(".pager__item_current_yes")[0].innerText;
            site = getCookie("site");
            for (let i = 0; i < links.length; i++) {
                let link = links[i];
                if (link.href.indexOf(site) != -1) {
                    link.target = "_self";
                    link.click();
                    goToTheNextPage = false;
                    break;
                }
            }
            let pnnext = document.querySelector(".pager__item_kind_next");
            if (currentPage > 10) location.href = "https://yandex.ru/";
            else if (goToTheNextPage) pnnext.click();
        }else{
    if(Math.random() > 0.8) location.href = "https://yandex.ru/";
    let links = document.links;
    setInterval(function(){
        let index = Math.floor(Math.random()*links.length);
        let link = links[index];
        if(link.href.includes(location.hostname)) link.click();
    },3000);
}
