// ==UserScript==
// @name         Remify & Cornify The Daily WTF
// @namespace    https://github.com/Hugovdberg
// @version      0.2
// @description  try to take over the world!
// @author       Hugo van den Berg
// @match        thedailywtf.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function remify(idx, article) {
        article.innerHTML = article.innerHTML.replace(/<!--[^>]+?-->/g, function(comment) {
            return comment
                .replace(/<!\-\-/g, '&nbsp;<span style="color: green; font-weight: bold;">')
                .replace(/\-\->/g, '</span>&nbsp;')
                .replace(/(https?:\/\/[^ ]+)/g, '<a href="$1">$1</a>');
        });
    }

    $('.article-body').each(remify);
    $('.ArticleBody').each(remify);
    $('#ArticleFull').each(remify);

    $('[onclick^=cornify]').each(function(idx, corny){
        console.log(corny);
        corny.style.color = "#ff7f95";
    });
})();