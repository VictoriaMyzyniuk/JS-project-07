var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in i){var r=i[e];delete i[e];var l={id:e,exports:{}};return t[e]=l,r.call(l.exports,l,l.exports),l.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},e.parcelRequired7c6=r),r("gjiCh"),r("1VOaQ"),r("2nhTy");var l=r("jpF15");let n=[],a=[];const s=document.querySelector(".library-list"),c=document.querySelector(".library--btn__watched"),o=document.querySelector(".library--btn__queue");function d(e){console.log(e),s.innerHTML=(0,l.default)(e)}c.addEventListener("click",(function(){s.innerHTML=" ",o.classList.remove("library--btn--active"),c.classList.add("library--btn--active"),n=JSON.parse(localStorage.getItem("watchedMovies"));if(null===n||"[]"===n){const e='<div class="container empty-library"> \n        <img class="empty-library__img" src="images/empty_library.jpg" alt="watched is empty" />\n        <p class="empty-library__title">NO MOVIES IN WATCHED!</p>\n        </div>';s.innerHTML=e}else d(n)})),o.addEventListener("click",(function(){s.innerHTML=" ",c.classList.remove("library--btn--active"),o.classList.add("library--btn--active"),a=JSON.parse(localStorage.getItem("queueMovies"));if(null===a||"[]"===a){const e='<div class="container empty-library"> \n        <img class="empty-library__img" src="images/empty_library.jpg" alt="queue is empty" />\n        <p class="empty-library__title">NO MOVIES TO WATCH IN QUEUE!</p>\n        </div>';s.innerHTML=e}else d(a)})),function(){s.innerHTML=" ",n=JSON.parse(localStorage.getItem("watchedMovies")),a=JSON.parse(localStorage.getItem("queueMovies"));const e=null===n,t=null===a;if(e&&t){const e='<div class="empty-library"> \n    <img class="empty-library__img" src="./images/header-in-desktop.jpg" alt="library is empty" />\n    <p class="empty-library__title">YOUR LIBRARY IS EMPTY!</p>\n    </div>';s.innerHTML=e}t||d(a);e||d(n)}(),r("cMCHv");
//# sourceMappingURL=library.9cdd7c9f.js.map
