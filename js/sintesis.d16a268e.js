(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["sintesis","chunk-4e410830"],{"0666":function(t,e,n){},"13f0":function(t,e,n){"use strict";n("450b")},"159b":function(t,e,n){var a=n("da84"),o=n("fdbc"),s=n("17c2"),i=n("9112");for(var r in o){var c=a[r],l=c&&c.prototype;if(l&&l.forEach!==s)try{i(l,"forEach",s)}catch(u){l.forEach=s}}},"17c2":function(t,e,n){"use strict";var a=n("b727").forEach,o=n("a640"),s=o("forEach");t.exports=s?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},3079:function(t,e,n){"use strict";n("0666")},"335e":function(t,e,n){t.exports=n.p+"img/sintesis.9de273ff.svg"},"3cd8":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid banner-interno"},[n("div",{staticClass:"banner-interno__fondo"}),n("div",{staticClass:"container"},[n("div",{staticClass:"banner-interno__titulo py-5"},[n("h3",{staticClass:"text-uppercase",domProps:{innerHTML:t._s("Unidad "+t.globalData.numeroUnidad+". "+t.globalData.tituloUnidad)}}),n("h2",{staticClass:"mb-0 text-uppercase",domProps:{innerHTML:t._s(t.subTitulo)}})])])])},o=[],s={name:"BannerInterno",props:{titulo:{type:String,default:""},subTitulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},i=s,r=(n("8385"),n("2877")),c=Object(r["a"])(i,a,o,!1,null,null,null);e["default"]=c.exports},"450b":function(t,e,n){},"52e5":function(t,e,n){t.exports=n.p+"img/cc.58a75e32.svg"},"60c7":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"curso-main-container creditos-vista"},[n("BannerInterno",{attrs:{subTitulo:"SÍNTESIS"}}),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[a("p",{staticClass:"mb-5",attrs:{"data-aos":"fade-up"}},[t._v("La Unidad 1: Fundamentos de la bioética en el contexto global, introduce los principios esenciales de la bioética y su relevancia en un mundo interconectado. Esta unidad explora conceptos clave como la justicia, la autonomía, la beneficencia y la no maleficencia, enmarcados en el impacto de la globalización, los dilemas éticos contemporáneos y su relación con la sostenibilidad, la equidad social y los derechos humanos. Proporciona una base teórica sólida para reflexionar sobre los desafíos éticos que surgen de los avances científicos, tecnológicos y económicos, promoviendo una comprensión integral que capacite a los estudiantes para aplicar estos principios en su práctica profesional y en la construcción de un futuro ético y sostenible.")]),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-12 mb-5"},[a("figure",{staticClass:"bg-color-sintesis p-5 brounded"},[a("img",{attrs:{src:n("335e"),alt:""}})])])])])}],s=(n("d3b7"),n("159b"),n("3cd8")),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"container footer tarjeta p-3 px-sm-5 py-sm-4",class:[t.allRound&&"footer__all-round"]},[n("div",{staticClass:"row align-items-center justify-content-center"},[t._m(0),n("div",{staticClass:"col-12 col-sm"},[n("p",{staticClass:"mb-2 text-small"},[t._v("Este material puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de la licencia que el trabajo original.")]),n("p",{staticClass:"mb-0 text-small"},[t._v(" Base v"+t._s(t.versiones.base)+" - Paquete v"+t._s(t.versiones.pkg))])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-auto mb-2 mb-sm-0"},[a("img",{attrs:{src:n("52e5")}})])}],c={name:"Footer",props:{allRound:{type:Boolean,default:!1}},computed:{versiones:function(){return{base:this.$package.version,pkg:this.$package.dependencies["ecored-base-pkg"]}}}},l=c,u=(n("13f0"),n("2877")),d=Object(u["a"])(l,i,r,!1,null,null,null),f=d.exports,p={name:"Creditos",components:{BannerInterno:s["default"],Footer:f},data:function(){return{configTitulos:{liderEquipo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",contenidoInstruccional:"CONTENIDO INSTRUCCIONAL",desarrolloProducto:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",gestoresRepositorio:"GESTORES DE REPOSITORIO"}}},computed:{creditosData:function(){return this.$config.creditos},creditosAdicionales:function(){return this.$config.creditosAdicionales}},methods:{renderText:function(t){var e="";return Array.isArray(t)?t.forEach((function(t,n){e+=(n?"<br/>":"")+t})):e+=t,e}}},b=p,m=(n("3079"),Object(u["a"])(b,a,o,!1,null,null,null));e["default"]=m.exports},"65f0":function(t,e,n){var a=n("861d"),o=n("e8b5"),s=n("b622"),i=s("species");t.exports=function(t,e){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?a(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},8385:function(t,e,n){"use strict";n("d36b")},a640:function(t,e,n){"use strict";var a=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&a((function(){n.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,n){var a=n("0366"),o=n("44ad"),s=n("7b0b"),i=n("50c4"),r=n("65f0"),c=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,u=4==t,d=6==t,f=7==t,p=5==t||d;return function(b,m,v,g){for(var h,E,y=s(b),C=o(y),_=a(m,v,3),x=i(C.length),S=0,I=g||r,O=e?I(b,x):n||f?I(b,0):void 0;x>S;S++)if((p||S in C)&&(h=C[S],E=_(h,S,y),t))if(e)O[S]=E;else if(E)switch(t){case 3:return!0;case 5:return h;case 6:return S;case 2:c.call(O,h)}else switch(t){case 4:return!1;case 7:c.call(O,h)}return d?-1:l||u?u:O}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},d36b:function(t,e,n){},e8b5:function(t,e,n){var a=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}}}]);
//# sourceMappingURL=sintesis.d16a268e.js.map