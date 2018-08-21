// ==UserScript==
// @name         Remify & Cornify The Daily WTF
// @namespace    https://github.com/Hugovdberg
// @homepageURL  https://github.com/Hugovdberg/UserScripts
// @homepageURL  https://github.com/Hugovdberg/UserScripts/issues
// @version      0.2.2
// @description  Show comments in the article body and highlight the cornify spans.
// @author       Hugovdberg
// @copyright    2018, Hugo van den Berg
// @license      GPL v3
// @match        thedailywtf.com/*
// @grant        none
// ==/UserScript==
// ==OpenUserJS==
// @author Hugovdberg
// ==/OpenUserJS==

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