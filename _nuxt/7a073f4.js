(window.webpackJsonp=window.webpackJsonp||[]).push([[18,23],{350:function(t,n,e){"use strict";e.r(n);var r=e(10),v=(e(67),{name:"button-up",methods:{scrollUp:function(){var t=this.$refs.button;window.addEventListener("scroll",(function(){window.pageYOffset>=window.outerHeight/2?t.classList.add("scroll-icon--up"):t.classList.remove("scroll-icon--up")})),t.addEventListener("click",(function(){window.scroll({top:0,left:0,behavior:"smooth"})}))}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$nextTick((function(){t.scrollUp()}));case 2:case"end":return n.stop()}}),n)})))()}}),_=e(5),component=Object(_.a)(v,(function(){var t=this,n=t._self._c;return n("button",{ref:"button",staticClass:"scroll-icon",attrs:{type:"button"}},[n("svg",{attrs:{viewBox:"0 0 45 69",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("rect",{attrs:{x:"1",y:"1",width:"42.6903",height:"67",rx:"21.3451"}}),t._v(" "),n("g",[n("path",{attrs:{d:"M22.3457 13.4531L22.3457 33.6124"}}),t._v(" "),n("path",{attrs:{d:"M12.8594 24.7188L22.3461 33.909L32.1293 24.7188"}})])])])}),[],!1,null,null,null);n.default=component.exports},354:function(t,n,e){t.exports=e.p+"img/design.6cd944f.png"},355:function(t,n,e){t.exports=e.p+"img/web.338b135.png"},356:function(t,n,e){t.exports=e.p+"img/marketing.d00e036.png"},357:function(t,n,e){t.exports=e.p+"img/smm.e4b1510.png"},358:function(t,n,e){t.exports=e.p+"img/cases.e4b1510.png"},368:function(t,n,e){"use strict";e.r(n);var r=e(10),v=(e(67),e(16),e(32),e(350)),_=e(150),c=e(48),l={name:"header-section",methods:{showNavImage:function(){var t=this.$refs.header.querySelectorAll("[data-link]"),n=this.$refs.imageBox.querySelectorAll("img"),nav=this.$refs.nav;if(!(t&&t.length&&n&&n.length&&nav))return!1;t.forEach((function(t,i){t.addEventListener("mouseenter",(function(){n[i].classList.add("_show"),nav.classList.add("nav--hover")})),t.addEventListener("mouseleave",(function(){n[i].classList.remove("_show"),nav.classList.remove("nav--hover")}))}))}},components:{switchLang:_.default,buttonUp:v.default,contacts:c.default},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$nextTick((function(){t.showNavImage()}));case 2:case"end":return n.stop()}}),n)})))()}},o=e(5),component=Object(o.a)(l,(function(){var t=this,n=t._self._c;return n("header",{ref:"header",staticClass:"header"},[n("div",{staticClass:"header__inner"},[n("contacts"),t._v(" "),n("nav",{ref:"nav",staticClass:"nav"},[n("div",{staticClass:"nav__sections"},[n("div",{staticClass:"nav__item",attrs:{"data-link":""}},[n("nuxt-link",{attrs:{to:"/design"}},[t._v("дизайн")]),t._v(" "),t._m(0)],1),t._v(" "),n("div",{staticClass:"nav__item",attrs:{"data-link":""}},[n("nuxt-link",{attrs:{to:"/web"}},[t._v("web")]),t._v(" "),t._m(1)],1),t._v(" "),n("div",{staticClass:"nav__item",attrs:{"data-link":""}},[n("nuxt-link",{attrs:{to:"/marketing"}},[t._v("маркетинг")]),t._v(" "),t._m(2)],1),t._v(" "),n("div",{staticClass:"nav__item",attrs:{"data-link":""}},[n("nuxt-link",{attrs:{to:"/smm"}},[t._v("smm")]),t._v(" "),t._m(3)],1),t._v(" "),n("div",{staticClass:"nav__item",attrs:{"data-link":""}},[n("nuxt-link",{attrs:{to:"/cases"}},[t._v("кейсы")])],1)]),t._v(" "),n("div",{staticClass:"nav__list"},[n("div",{staticClass:"nav__item"},[n("nuxt-link",{attrs:{to:"/team"}},[t._v("команда")])],1),t._v(" "),n("div",{staticClass:"nav__item"},[n("nuxt-link",{attrs:{to:"/clients"}},[t._v("клиенты")])],1),t._v(" "),n("div",{staticClass:"nav__item"},[n("nuxt-link",{attrs:{to:"/jobs"}},[t._v("вакансии")])],1),t._v(" "),n("div",{staticClass:"nav__item"},[n("nuxt-link",{attrs:{to:"/contacts"}},[t._v("контакты")])],1),t._v(" "),n("div",{staticClass:"nav__item"},[n("nuxt-link",{attrs:{to:"/blog"}},[t._v("бложик")])],1)])]),t._v(" "),n("button-up"),t._v(" "),n("div",{ref:"imageBox",staticClass:"header__image-container"},[n("img",{attrs:{src:e(354),alt:""}}),t._v(" "),n("img",{attrs:{src:e(355),alt:""}}),t._v(" "),n("img",{attrs:{src:e(356),alt:""}}),t._v(" "),n("img",{attrs:{src:e(357),alt:""}}),t._v(" "),n("img",{attrs:{src:e(358),alt:""}})])],1)])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"nav__sublist"},[n("div",{staticClass:"nav__subitem"},[n("a",{attrs:{href:"#"}},[t._v("логотип")])]),t._v(" "),n("div",{staticClass:"nav__subitem"},[n("a",{attrs:{href:"#"}},[t._v("фирменный стиль")])]),t._v(" "),n("div",{staticClass:"nav__subitem"},[n("a",{attrs:{href:"#"}},[t._v("брендинг")])]),t._v(" "),n("div",{staticClass:"nav__subitem"},[n("a",{attrs:{href:"#"}},[t._v("упаковка")])])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"nav__sublist"},[n("div",{staticClass:"nav__subitem"},[n("a",{attrs:{href:"#"}},[t._v("лендинг")])]),t._v(" "),n("div",{staticClass:"nav__subitem"},[n("a",{attrs:{href:"#"}},[t._v("сайт-визитка")])]),t._v(" "),n("div",{staticClass:"nav__subitem"},[n("a",{attrs:{href:"#"}},[t._v("имиджевый сайт")])]),t._v(" "),n("div",{staticClass:"nav__subitem"},[n("a",{attrs:{href:"#"}},[t._v("интернет-магазин")])])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"nav__sublist"},[n("div",{staticClass:"nav__subitem"},[n("a",{attrs:{href:"#"}},[t._v("Рекламные кампании")])]),t._v(" "),n("div",{staticClass:"nav__subitem"},[n("a",{attrs:{href:"#"}},[t._v("Маркетинговые исследования")])]),t._v(" "),n("div",{staticClass:"nav__subitem"},[n("a",{attrs:{href:"#"}},[t._v("Key visual")])]),t._v(" "),n("div",{staticClass:"nav__subitem"},[n("a",{attrs:{href:"#"}},[t._v("Таргетированная реклама")])])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"nav__sublist"},[n("div",{staticClass:"nav__subitem"},[n("a",{attrs:{href:"#"}},[t._v("Social media marketing")])]),t._v(" "),n("div",{staticClass:"nav__subitem"},[n("a",{attrs:{href:"#"}},[t._v("контент-план")])]),t._v(" "),n("div",{staticClass:"nav__subitem"},[n("a",{attrs:{href:"#"}},[t._v("дизайн аккаунтов")])]),t._v(" "),n("div",{staticClass:"nav__subitem"},[n("a",{attrs:{href:"#"}},[t._v("Таргетированная реклама")])])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{Contacts:e(48).default})}}]);