(window.webpackJsonp=window.webpackJsonp||[]).push([[26,3,6,12,19],{335:function(t,e,r){"use strict";r.r(e);r(18);var n={name:"case",props:["data","modClass","all","arrow"]},l=r(5),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card",class:!!t.modClass&&t.modClass},[e("nuxt-link",{attrs:{to:"/"}},[e("span",{staticClass:"card__top"},[t.data.name||t.data.date?e("span",{staticClass:"card__top-info"},[t.data.name?e("span",[t._v(t._s(t.data.name))]):t._e(),t._v(" "),t.data.date?e("span",[t._v(t._s(t.data.date))]):t._e()]):t._e(),t._v(" "),e("span",{staticClass:"card__title"},[t._v(t._s(t.data.title))]),t._v(" "),e("span",{staticClass:"card__task"},[t._v(t._s(t.data.task))])]),t._v(" "),t.data.image?e("span",{staticClass:"card__image",style:"background-image: url(".concat(r(336),");")}):t._e(),t._v(" "),t.data.desc?e("span",{staticClass:"card__description"},[t._v(t._s(t.data.desc))]):t._e(),t._v(" "),t.data.all?e("span",{staticClass:"card__all"},[t._v(t._s(t.data.btn))]):t._e(),t._v(" "),t.arrow||t.data.all?e("span",{staticClass:"arrow-btn arrow-btn--reverse"},[e("svg",{attrs:{viewBox:"0 0 140 59",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{staticClass:"line",attrs:{d:"M0 30L138 30"}}),t._v(" "),e("path",{attrs:{d:"M111.602 58.4746L139.013 30.179L111.602 0.99912"}})])]):t._e(),t._v(" "),e("span",{staticClass:"button"},[t._v("Читать статью")])])],1)}),[],!1,null,null,null);e.default=component.exports},336:function(t,e,r){t.exports=r.p+"img/myforti.29bb529.jpg"},337:function(t,e,r){"use strict";r.r(e);var n=r(10),l=(r(67),r(68),r(16),r(32),{name:"hero",data:function(){return{timer:null}},methods:{animTitle:function(){var title=document.querySelector("[data-title]"),t=1;if(!title)return!1;var e=title.querySelectorAll("span span");if(!e&&!e.length)return!1;this.timer=setInterval((function(){e.forEach((function(t){t.classList.remove("_show"),t.classList.remove("_hide")})),e[t>0?t-1:e.length-1].classList.add("_hide"),e[t].classList.add("_show"),t>=e.length-1?t=0:t++}),3e3)}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick((function(){t.animTitle()}));case 2:case"end":return e.stop()}}),e)})))()},destroyed:function(){this.timer&&clearInterval(this.timer)}}),o=r(5),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"hero"},[e("div",{staticClass:"container container--fix"},[e("div",{staticClass:"hero__inner"},[e("div",{staticClass:"hero__left"},[t._t("left")],2),t._v(" "),e("div",{staticClass:"hero__right"},[t._t("right")],2)])]),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.default=component.exports},347:function(t,e,r){"use strict";r.r(e);var n={name:"carousel-other",data:function(){return{options:{slidesPerView:2,loop:!0},cases:[{title:"Myforti",task:"Разработка интернет-магазина по продаже высокотехнологичного оборудования",desc:"MyForti — новый бренд, занимающийся продажей и интеграцией оборудования для кибербезопасности от компании Fortnet. Нашей задачей было создать портал, который сможет конкурировать с существующими на рынке интернет-магазинами. Для того чтобы осуществить задумку владельцев, мы должны были создать сайт, который будет удобнее, технологичнее и красивее, чем у конкурентов",image:"~/assets/img/cases/myforti.jpg",mod:"card--case",id:0,arrow:!0},{title:"BuyTheDip.ch",task:"Создание сайтов",desc:"Сайт buythedip.ch — масштабная платформа для потенциальных инвесторов. Площадка интегрирована с различными биржами и выдает актуальную информацию о стоимости криптовалюты в любой момент времени. А еще — здесь есть полезный блог и тематические новостные ленты.",image:"~/assets/img/cases/btd.jpg",mod:"card--case",id:1,arrow:!0},{title:"МакПак",task:"Дизайн и брендинг",desc:"МакПак — бренд в название которого вложена сама суть продукта — бумажные пакеты из макулатуры. Экологичность, возобновляемсоть и дружелюбность — те принципы, которых мы придерживались в процессе разработки логотипа и фирменного стиля для этой компании.",image:"~/assets/img/cases/makpak.jpg",mod:"card--case",id:2,arrow:!0},{title:"TARP Aviation",task:"Дизайн и брендинг",desc:"Что такое частная авиация? Это комфорт, безопасность, пунктуальность и высочайшее качество обслуживания. За разработкой логотипа и айдентики к нам обратилась Австрийская компания «TARP aviation». Аббревиатура TARP — Transport Aviation Reliable Partner. Именно этими принципами мы постарались вдохновиться и создать по-настоящему премиальный и стильный бренд.",image:"~/assets/img/cases/tarp-aviation.jpg",mod:"card--case",id:3,arrow:!0},{title:"FWC",task:"Яркий логотип для креативной и прогрессивной компании",desc:"FWC — компания с тремя ключевыми компетенциями: видеопрдакшн, эвент–менеджмет и организация онлайн–трансляций. Мы постарались разработать логотип, который будет отражать ключевые ценности бренда и будет современным и стильным.",image:"~/assets/img/cases/fwc.jpg",mod:"card--case",id:4,arrow:!0}]}},methods:{swiperNext:function(){this.swiper.slideNext(300)},swiperPrev:function(){this.swiper.slidePrev(300)}},props:["title","modClass"],components:{card:r(335).default}},l=r(5),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"other",class:!!t.modClass&&t.modClass},[e("div",{staticClass:"container"},[e("div",{staticClass:"other__slider"},[e("h2",[t._v(t._s(t.title))]),t._v(" "),e("div",{directives:[{name:"swiper",rawName:"v-swiper:swiper",value:t.options,expression:"options",arg:"swiper"}],staticClass:"swiper"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.cases,(function(t){return e("div",{key:t.id,staticClass:"swiper-slide"},[e("div",{staticClass:"other__slide"},[e("card",{attrs:{data:t,arrow:!0,modClass:"card--case"}})],1)])})),0)]),t._v(" "),e("div",{staticClass:"swiper-navigation"},[e("button",{staticClass:"swiper-navigation-prev",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.swiperPrev.apply(null,arguments)}}},[e("svg",{attrs:{viewBox:"0 0 63 59",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M62.0161 30.1787L1.88791 30.1787"}}),t._v(" "),e("path",{attrs:{d:"M28.4146 58.4756L1.00316 30.18L28.4146 1.0001"}})])]),t._v(" "),e("button",{staticClass:"swiper-navigation-next",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.swiperNext.apply(null,arguments)}}},[e("svg",{attrs:{viewBox:"0 0 63 59",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M62.0161 30.1787L1.88791 30.1787"}}),t._v(" "),e("path",{attrs:{d:"M28.4146 58.4756L1.00316 30.18L28.4146 1.0001"}})])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:r(335).default})},361:function(t,e,r){"use strict";r.r(e);var n={name:"blog-section",data:function(){return{articles:[{title:"6 правил эффективной рекламы",task:"Рано или поздно каждый бизнесмен задумывается о брендинге. Кто-то разрабатывает бренд еще lor oaoasdk  jasjdi jaijw d",image:"~/assets/img/blog/1.jpg",date:"18.11.2017",name:"Роман Тишкин",id:0},{title:"6 правил эффективной рекламы",task:"Рано или поздно каждый бизнесмен задумывается о брендинге. Кто-то разрабатывает бренд еще lor oaoasdk  jasjdi jaijw d",image:"~/assets/img/blog/1.jpg",date:"18.11.2017",name:"Роман Тишкин",id:1},{title:"6 правил эффективной рекламы",task:"Рано или поздно каждый бизнесмен задумывается о брендинге. Кто-то разрабатывает бренд еще lor oaoasdk  jasjdi jaijw d",image:"~/assets/img/blog/1.jpg",date:"18.11.2017",name:"Роман Тишкин",id:2},{title:"6 правил эффективной рекламы",task:"Рано или поздно каждый бизнесмен задумывается о брендинге. Кто-то разрабатывает бренд еще lor oaoasdk  jasjdi jaijw d",image:"~/assets/img/blog/1.jpg",date:"18.11.2017",name:"Роман Тишкин",id:3},{title:"6 правил эффективной рекламы",task:"Рано или поздно каждый бизнесмен задумывается о брендинге. Кто-то разрабатывает бренд еще lor oaoasdk  jasjdi jaijw d",image:"~/assets/img/blog/1.jpg",date:"18.11.2017",name:"Роман Тишкин",id:4},{title:"6 правил эффективной рекламы",task:"Рано или поздно каждый бизнесмен задумывается о брендинге. Кто-то разрабатывает бренд еще lor oaoasdk  jasjdi jaijw d",image:"~/assets/img/blog/1.jpg",date:"18.11.2017",name:"Роман Тишкин",id:5}]}},components:{card:r(335).default}},l=r(5),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"blog"},[e("div",{staticClass:"container"},[e("div",{staticClass:"blog__grid"},t._l(t.articles,(function(article){return e("div",{key:article.id,staticClass:"blog__item"},[e("card",{attrs:{data:article,modClass:"card--blog"}})],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:r(335).default})},372:function(t,e,r){"use strict";r.r(e);var n=r(147),l=r(337),o=r(361),d=r(347),c=r(149),_={name:"design-page",components:{Topline:n.default,Hero:l.default,Blog:o.default,Carousel:d.default,socialList:c.default}},v=r(5),component=Object(v.a)(_,(function(){var t=this,e=t._self._c;return e("div",[e("Topline",{attrs:{path:[{name:"блог"}]}}),t._v(" "),e("Hero",{scopedSlots:t._u([{key:"left",fn:function(){return[e("h2",[t._v("блог")])]},proxy:!0},{key:"right",fn:function(){return[e("h4",[t._v("Где еще пишем?")]),t._v(" "),e("div",{staticClass:"contacts"},[e("social-list")],1)]},proxy:!0}])}),t._v(" "),e("Blog"),t._v(" "),e("Carousel",{attrs:{title:"кейсы"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Topline:r(147).default})}}]);