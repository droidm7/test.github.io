(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3],{335:function(t,e,r){"use strict";r.r(e);r(18);var n={name:"case",props:["data","modClass","all","arrow"]},l=r(5),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card",class:!!t.modClass&&t.modClass},[e("nuxt-link",{attrs:{to:"/"}},[e("span",{staticClass:"card__top"},[t.data.name||t.data.date?e("span",{staticClass:"card__top-info"},[t.data.name?e("span",[t._v(t._s(t.data.name))]):t._e(),t._v(" "),t.data.date?e("span",[t._v(t._s(t.data.date))]):t._e()]):t._e(),t._v(" "),e("span",{staticClass:"card__title"},[t._v(t._s(t.data.title))]),t._v(" "),e("span",{staticClass:"card__task"},[t._v(t._s(t.data.task))])]),t._v(" "),t.data.image?e("span",{staticClass:"card__image",style:"background-image: url(".concat(r(336),");")}):t._e(),t._v(" "),t.data.desc?e("span",{staticClass:"card__description"},[t._v(t._s(t.data.desc))]):t._e(),t._v(" "),t.data.all?e("span",{staticClass:"card__all"},[t._v(t._s(t.data.btn))]):t._e(),t._v(" "),t.arrow||t.data.all?e("span",{staticClass:"arrow-btn arrow-btn--reverse"},[e("svg",{attrs:{viewBox:"0 0 140 59",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{staticClass:"line",attrs:{d:"M0 30L138 30"}}),t._v(" "),e("path",{attrs:{d:"M111.602 58.4746L139.013 30.179L111.602 0.99912"}})])]):t._e(),t._v(" "),e("span",{staticClass:"button"},[t._v("Читать статью")])])],1)}),[],!1,null,null,null);e.default=component.exports},336:function(t,e,r){t.exports=r.p+"img/myforti.29bb529.jpg"},347:function(t,e,r){"use strict";r.r(e);var n={name:"carousel-other",data:function(){return{options:{slidesPerView:2,loop:!0},cases:[{title:"Myforti",task:"Разработка интернет-магазина по продаже высокотехнологичного оборудования",desc:"MyForti — новый бренд, занимающийся продажей и интеграцией оборудования для кибербезопасности от компании Fortnet. Нашей задачей было создать портал, который сможет конкурировать с существующими на рынке интернет-магазинами. Для того чтобы осуществить задумку владельцев, мы должны были создать сайт, который будет удобнее, технологичнее и красивее, чем у конкурентов",image:"~/assets/img/cases/myforti.jpg",mod:"card--case",id:0,arrow:!0},{title:"BuyTheDip.ch",task:"Создание сайтов",desc:"Сайт buythedip.ch — масштабная платформа для потенциальных инвесторов. Площадка интегрирована с различными биржами и выдает актуальную информацию о стоимости криптовалюты в любой момент времени. А еще — здесь есть полезный блог и тематические новостные ленты.",image:"~/assets/img/cases/btd.jpg",mod:"card--case",id:1,arrow:!0},{title:"МакПак",task:"Дизайн и брендинг",desc:"МакПак — бренд в название которого вложена сама суть продукта — бумажные пакеты из макулатуры. Экологичность, возобновляемсоть и дружелюбность — те принципы, которых мы придерживались в процессе разработки логотипа и фирменного стиля для этой компании.",image:"~/assets/img/cases/makpak.jpg",mod:"card--case",id:2,arrow:!0},{title:"TARP Aviation",task:"Дизайн и брендинг",desc:"Что такое частная авиация? Это комфорт, безопасность, пунктуальность и высочайшее качество обслуживания. За разработкой логотипа и айдентики к нам обратилась Австрийская компания «TARP aviation». Аббревиатура TARP — Transport Aviation Reliable Partner. Именно этими принципами мы постарались вдохновиться и создать по-настоящему премиальный и стильный бренд.",image:"~/assets/img/cases/tarp-aviation.jpg",mod:"card--case",id:3,arrow:!0},{title:"FWC",task:"Яркий логотип для креативной и прогрессивной компании",desc:"FWC — компания с тремя ключевыми компетенциями: видеопрдакшн, эвент–менеджмет и организация онлайн–трансляций. Мы постарались разработать логотип, который будет отражать ключевые ценности бренда и будет современным и стильным.",image:"~/assets/img/cases/fwc.jpg",mod:"card--case",id:4,arrow:!0}]}},methods:{swiperNext:function(){this.swiper.slideNext(300)},swiperPrev:function(){this.swiper.slidePrev(300)}},props:["title","modClass"],components:{card:r(335).default}},l=r(5),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"other",class:!!t.modClass&&t.modClass},[e("div",{staticClass:"container"},[e("div",{staticClass:"other__slider"},[e("h2",[t._v(t._s(t.title))]),t._v(" "),e("div",{directives:[{name:"swiper",rawName:"v-swiper:swiper",value:t.options,expression:"options",arg:"swiper"}],staticClass:"swiper"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.cases,(function(t){return e("div",{key:t.id,staticClass:"swiper-slide"},[e("div",{staticClass:"other__slide"},[e("card",{attrs:{data:t,arrow:!0,modClass:"card--case"}})],1)])})),0)]),t._v(" "),e("div",{staticClass:"swiper-navigation"},[e("button",{staticClass:"swiper-navigation-prev",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.swiperPrev.apply(null,arguments)}}},[e("svg",{attrs:{viewBox:"0 0 63 59",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M62.0161 30.1787L1.88791 30.1787"}}),t._v(" "),e("path",{attrs:{d:"M28.4146 58.4756L1.00316 30.18L28.4146 1.0001"}})])]),t._v(" "),e("button",{staticClass:"swiper-navigation-next",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.swiperNext.apply(null,arguments)}}},[e("svg",{attrs:{viewBox:"0 0 63 59",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M62.0161 30.1787L1.88791 30.1787"}}),t._v(" "),e("path",{attrs:{d:"M28.4146 58.4756L1.00316 30.18L28.4146 1.0001"}})])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:r(335).default})}}]);