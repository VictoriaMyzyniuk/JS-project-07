var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var i=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,i.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){t[e]=n},e.parcelRequired7c6=i),i("gjiCh"),i("1VOaQ"),i("2nhTy");var r=i("eZevs");let l=[],a=[];const s=document.querySelector(".library-list"),c=document.querySelector(".library--btn__watched"),o=document.querySelector(".library--btn__queue");function d(e){console.log(e),s.innerHTML=e.map((e=>{const{poster_path:n,title:t,id:i,genres:r,release_date:l,vote_average:a}=e,s=a.toFixed(1);return`\n      <li class="card-set__item" id="${i}">\n      <a href='#' id='${i}' class="card-link">\n      <img id="${i}"\n          loading="lazy"\n          src="https://image.tmdb.org/t/p/original${n}"\n          alt="${t}"\n          class="card-set__img "\n          \n      />\n    \n      <h3 class="card-set__title">${t}</h3>\n      <div class="card-set__description" id="${i}">\n      <span class="card-set__genre flex" id="${i}">\n          ${r.map((e=>e.name)).join(", ")} &nbsp| ${l.slice(0,4)}\n          <span class="vote"> ${s}</span>\n      </span>\n      \n      </div>\n      </a>\n      </li>\n      `})).join("");const n=document.querySelectorAll(".card-set__item");n.forEach((e=>e.removeEventListener("click",r.onGalleryClick))),n.forEach((e=>e.addEventListener("click",r.onGalleryClick)))}c.addEventListener("click",(function(){s.innerHTML=" ",o.classList.remove("library--btn--active"),c.classList.add("library--btn--active"),l=JSON.parse(localStorage.getItem("watchedMovies"));if(null===l||"[]"===l){const e='<div class="container empty-library">\n        <p class="empty-library__title">NO MOVIES IN WATCHED!</p>\n        </div>';s.innerHTML=e}else d(l)})),o.addEventListener("click",(function(){s.innerHTML=" ",c.classList.remove("library--btn--active"),o.classList.add("library--btn--active"),a=JSON.parse(localStorage.getItem("queueMovies"));if(null===a||"[]"===a){const e='<div class="container empty-library"> \n        <p class="empty-library__title">NO MOVIES TO WATCH IN QUEUE!</p>\n        </div>';s.innerHTML=e}else d(a)})),function(){s.innerHTML=" ",l=JSON.parse(localStorage.getItem("watchedMovies")),a=JSON.parse(localStorage.getItem("queueMovies"));const e=null===l,n=null===a;if(e&&n){s.classList.remove("gallery");const e='<div class="empty-library"> \n    <p class="empty-library__title">YOUR LIBRARY IS EMPTY!</p>\n    </div>';s.innerHTML=e}n||d(a);e||d(l)}(),i("aNDbS"),i("dDKeO");
//# sourceMappingURL=library.1bf11e27.js.map
