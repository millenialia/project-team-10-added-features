!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){a[t]=e},e.parcelRequired7c6=o),o("b3EoS"),o("3PD8C"),o("6VMVE"),o("ekC86");var i=o("eUV6u"),c=o("4WFAO"),l=o("b3EoS"),r=document.querySelector(".category-list"),s=document.querySelector(".load");(0,i.fetchAllCategories)().then((function(t){console.log(t);var e=t.map((function(t){var e=t.list_name;return'<li class="category-list-item global-list light-theme theme-switch">'.concat(e,"</li>")})).join("");r.insertAdjacentHTML("beforeend",e);var n=document.querySelectorAll(".category-list-item");n.forEach((function(t){t.addEventListener("click",(function(){n.forEach((function(t){return t.classList.remove("active")})),this.classList.add("active")}))})),"light"===c.shopping_info.theme?(0,l.renderTheme)("light"):(0,l.renderTheme)("dark"),s.classList.add("unvisible")})).catch((function(t){console.log(t)})),o("eUV6u"),o("hDfHX"),o("eUV6u");var d=o("bpxeT"),u=o("2TvXO"),h=(i=o("eUV6u"),o("6VMVE"));c=o("4WFAO"),l=o("b3EoS");var g=document.querySelector(".category-list"),b=document.querySelector(".tb-container"),p=document.querySelector(".heading-primary"),f=document.querySelector("#allctgr");function m(){return(m=t(d)(t(u).mark((function e(n){var a,o,c,l,r,s,d;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.target.textContent,o=f.textContent,a!==o){t.next=6;break}b.innerHTML="",(0,i.fetchTopBooks)().then(y),l=(c="Best Sellers Books").split(" ").splice(0,c.split(" ").length-1).join(" "),r=c.split(" ")[c.split(" ").length-1],p.innerHTML="".concat(l,' <span class="colored-heading">').concat(r,"</span>"),t.next=15;break;case 6:return s=a.split(" ").splice(0,a.split(" ").length-1).join(" "),d=a.split(" ")[a.split(" ").length-1],p.innerHTML="".concat(s,' <span class="colored-heading">').concat(d,"</span>"),p.classList.add("ctg-maintitle"),b.classList.add("flex-container"),t.next=13,(0,i.fetchBooksByExactCategory)(a);case 13:v(t.sent);case 15:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function v(t){var e=t.data;b.innerHTML="";var n=e.map((function(t){var e=t.author,n=t.title,a=t.book_image,o=t._id;return'\n          <li class="flex-container-item">\n            <a href=# class="global-link" data-id="'.concat(o,'">\n              <div class="tb-book-card">\n                <img class="tb-book-img img" src="').concat(a,'" alt="').concat(n,'" loading="lazy">\n                <p class="tb-book-title light-theme theme-switch global-p">').concat(n,'</p>\n                <p class="tb-book-author global-p">').concat(e,"</p>\n              </div>\n            </a>\n          </li>")})).join("");b.innerHTML=n}g.addEventListener("click",(function(t){return m.apply(this,arguments)}));var k=document.querySelector(".no-books-card");function y(t){if(0==t.data.length)k.classList.remove("is-hidden");else{var e=t.data.map((function(t){var e=t.list_name,n=t.books.map((function(t){var e=t.author,n=t.title,a=t.book_image,o=t._id;return'\n          <li class="flex-container-item">\n            <a href=# class="global-link" data-id="'.concat(o,'">\n              <div class="tb-book-card">\n                <img class="tb-book-img img" src="').concat(a,'" alt="').concat(n,'" loading="lazy">\n                <p class="tb-book-title light-theme theme-switch global-p">').concat(n,'</p>\n                <p class="tb-book-author global-p">').concat(e,"</p>\n              </div>\n            </a>\n          </li>\n          ")})).join("");return"\n      <li class=\"tb-category-container\">\n        <h2 class='tb-category global-title'>".concat(e,"</h2>\n        <div class='tb-books-container'>\n          <ul class=\"global-list flex-container\">\n            ").concat(n,'\n          </ul>\n        </div>\n        <button class="tb-button global-button light-theme theme-switch">See more</button>\n      </li>\n      ')})).join("");b.insertAdjacentHTML("beforeend",e),"light"===c.shopping_info.theme?(0,l.renderTheme)("light"):(0,l.renderTheme)("dark"),(0,h.modalWindow)()}}function x(){return(x=t(d)(t(u).mark((function e(n){var a,o;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.target.matches("button")){t.next=8;break}return a=n.target.closest(".tb-category-container").firstChild.nextSibling.textContent,o=n.target.closest(".tb-category-container").firstChild.nextSibling.nextSibling.nextSibling,t.next=5,(0,i.fetchBooksByExactCategory)(a);case 5:L(t.sent,o),n.target.classList.add("is-hidden");case 8:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function L(t,e){var n=t.data.map((function(t){var e=t.author,n=t.title,a=t.book_image,o=t._id;return'\n          <li class="flex-container-item">\n            <a href=# class="global-link" data-id="'.concat(o,'">\n              <div class="tb-book-card">\n                <img class="tb-book-img img" src="').concat(a,'" alt="').concat(n,'" loading="lazy">\n                <p class="tb-book-title light-theme theme-switch global-p">').concat(n,'</p>\n                <p class="tb-book-author global-p">').concat(e,"</p>\n              </div>\n            </a>\n          </li>")})).join(""),a='<ul class="global-list flex-container">\n            '.concat(n,"\n          </ul>");e.innerHTML=a}(0,i.fetchTopBooks)().then(y),b.addEventListener("click",(function(t){return x.apply(this,arguments)})),o("4WFAO"),o("afu5w")}();
//# sourceMappingURL=index.db47edf7.js.map
