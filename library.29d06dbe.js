!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var l={id:e,exports:{}};return i[e]=l,t.call(l.exports,l,l.exports),l.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,i){r[e]=i},e.parcelRequired7c6=t),t("kvC6y"),t("dsadE"),t("jcFG7");var l=t("hDovU"),a=[],n=[],s=document.querySelector(".library-list"),c=document.querySelector(".library--btn__watched"),o=document.querySelector(".library--btn__queue");function d(e){console.log(e),s.innerHTML=(0,l.default)(e)}c.addEventListener("click",(function(){if(s.innerHTML=" ",o.classList.remove("library--btn--active"),c.classList.add("library--btn--active"),null===(a=JSON.parse(localStorage.getItem("watchedMovies")))||"[]"===a){s.innerHTML='<div class="container empty-library"> \n        <img class="empty-library__img" src="images/empty_library.jpg" alt="watched is empty" />\n        <p class="empty-library__title">NO MOVIES IN WATCHED!</p>\n        </div>'}else d(a)})),o.addEventListener("click",(function(){if(s.innerHTML=" ",c.classList.remove("library--btn--active"),o.classList.add("library--btn--active"),null===(n=JSON.parse(localStorage.getItem("queueMovies")))||"[]"===n){s.innerHTML='<div class="container empty-library"> \n        <img class="empty-library__img" src="images/empty_library.jpg" alt="queue is empty" />\n        <p class="empty-library__title">NO MOVIES TO WATCH IN QUEUE!</p>\n        </div>'}else d(n)})),function(){s.innerHTML=" ",a=JSON.parse(localStorage.getItem("watchedMovies")),n=JSON.parse(localStorage.getItem("queueMovies"));var e=null===a,i=null===n;if(e&&i){s.innerHTML='<div class="empty-library"> \n    <img class="empty-library__img" src="./images/header-in-desktop.jpg" alt="library is empty" />\n    <p class="empty-library__title">YOUR LIBRARY IS EMPTY!</p>\n    </div>'}i||d(n);e||d(a)}(),t("guMgY")}();
//# sourceMappingURL=library.29d06dbe.js.map
