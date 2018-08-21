// ==UserScript==
// @name         Remify & Cornify The Daily WTF
// @namespace    https://github.com/Hugovdberg
// @homepageURL  https://github.com/Hugovdberg/UserScripts
// @homepageURL  https://github.com/Hugovdberg/UserScripts/issues
// @updateURL    https://openuserjs.org/meta/Hugovdberg/Remify_Cornify_The_Daily_WTF.meta.js
// @version      0.2.4
// @description  Show comments in the article body and highlight the cornify spans.
// @author       Hugovdberg
// @copyright    2018, Hugo van den Berg
// @license      GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
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