function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequired7c6=s),s("eZevs"),s("gjiCh"),s("1VOaQ"),s("5Jgp0"),s("2nhTy");var i=s("2shzp");var o=s("eZevs"),r=(o=s("eZevs"),s("2nhTy"));const c={searchForm:document.querySelector(".header-search-form"),gallery:document.querySelector(".gallery"),searchMessage:document.querySelector(".header-message"),page:document.querySelector('a[data-page="home"]'),paginationCont:document.getElementById("tui-pagination-container")};let l;const d=new class{async fetchMovie(){try{const t="https://api.themoviedb.org/3/search/movie/",n=await e(i).get(t,{params:{api_key:"d2c21f22a2d4ccc40e22a6b0b1329764",query:this.inputValue,page:this.page}});return this.incrementPage(),n.data}catch(e){console.log(e.message)}}async getGenre(){try{const t="https://api.themoviedb.org/3/genre/movie/list?&language=en-US`";return(await e(i).get(t,{params:{api_key:"d2c21f22a2d4ccc40e22a6b0b1329764"}})).data}catch(e){console.log(e.message)}}incrementPage(){this.page+=1}resetPage(){this.page=1}get value(){return this.inputValue}set value(e){this.inputValue=e}constructor(){this.inputValue="",this.page=1,this.genres=""}};async function g(e){c.gallery.innerHTML="",c.searchMessage.classList.add("is-hidden"),console.log();const t=e.results.map((({id:e,poster_path:t,title:n,release_date:a,genre_ids:s})=>{const i=a.slice(0,4);return`\n      <li class="card-set__item" id="${e}">\n      <a href='#' id='${e}' class="card-link">\n      <picture>\n                    <source srcset="\n                    http://image.tmdb.org/t/p/w780/${t} 1x,\n                   http://image.tmdb.org/t/p/original/${t} 2x" media="(min-width: 1280px)" type="image/jpeg" />\n                    <source srcset="\n                    http://image.tmdb.org/t/p/w342/${t} 1x,\n                    http://image.tmdb.org/t/p/w500/${t} 2x" media="(min-width: 768px)" type="image/jpeg" />\n                    <source srcset="\n                    http://image.tmdb.org/t/p/w185/${t} 1x,\n                    http://image.tmdb.org/t/p/w342/${t} 2x" media="(max-width: 480px)" type="image/jpeg" />\n         <img id="${e}\n          loading="lazy"\n          src="http://image.tmdb.org/t/p/w342/${t}"\n          alt="${n}"\n          class="card-set__img "/>\n      </picture>\n     \n      <h3 class="card-set__title">${n}</h3>\n      <div class="card-set__description" id="${e}">\n      <span class="card-set__genre" id="${e}"> ${function(e,t){let n=[];return e.forEach((e=>{const a=t.find((t=>e===t.id));a&&n.push(a.name)})),n}(s,o.GENRES_FULL_INFO).join(", ")} &nbsp| ${i}</span>\n        </div>\n      </a>\n      </li>\n      `})).join("");(0,o.addToHTML)(t)}c.searchForm.addEventListener("submit",(async function(e){try{if(e.preventDefault(),e.stopPropagation(),c.paginationCont.classList.remove("is-hidden"),c.gallery.innerHTML="",d.resetPage(),console.log(e.currentTarget.elements.searchQuery.value),d.value=e.currentTarget.elements.searchQuery.value,""===d.value)return c.searchMessage.classList.remove("is-hidden"),c.paginationCont.classList.add("is-hidden"),c.searchMessage.innerHTML="I can`t find an empty request. Please input something.",void(c.gallery.innerHTML="");if(""!==d.value){const e=await d.fetchMovie(d.value);console.log("fetch",e),l=e.total_results,console.log(l),r.pagination.reset(l),await g(e)}if(0===l)return c.searchMessage.classList.remove("is-hidden"),c.paginationCont.classList.add("is-hidden"),c.searchMessage.innerHTML="Search result not successful. Enter the correct movie name and try again.",void(c.gallery.innerHTML="");e.target.reset()}catch(e){console.log(e)}})),r.pagination.on("afterMove",(e=>{const t=e.page;console.log(t),console.log(d.page),d.page=t,async function(){if(""!==d.value){const e=await d.fetchMovie(d.value);console.log("fetch in render",e),await g(e)}}()}));const p=document.querySelector(".back-to-top");p.addEventListener("click",(function(){document.body.scrollIntoView({behavior:"smooth"})})),window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?p.style.display="block":p.style.display="none"},s("aNDbS"),s("dDKeO");
//# sourceMappingURL=index.4d817bca.js.map
