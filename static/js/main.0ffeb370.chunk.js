(this["webpackJsonpkosbog.github.io"]=this["webpackJsonpkosbog.github.io"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('{"menu":["about","skills","experience","education","contacts"],"images":[{"section":"about","url":"app/assets/images/self/self2.jpg"},{"section":"welcome","url":"app/assets/images/self/self.png"},{"section":"logo","url":"app/assets/images/self/logo.png"}],"about":["From childhood I didn\'t dream about that I will sit at the computer and write a code - I wanted to become a professional football player. I even played for the school football team, yeah!.. But, my \\"football career\\" ended when I started studying at the university. I have a fancy for web development in the second year of study. Thereat in simple textpad I created my first HTML page and connected my first CSS file to it. It was an unforgettable feeling!"],"skills":[{"name":"javascript","value":"75","color":"orange","description":"Experience in AngularJS, React, ReactNative, Redux, MobX / Using bundles like Webpack, Gulp / Working with Firebase "},{"name":"html","value":"92","color":"yellow","description":"HTML5 / Correct document structure / Writing a semantic layout / Using tags like <article>, <main>, <section>, <figure> etc."},{"name":"css","value":"84","color":"sea","description":"Using SASS,LESS / Practise in BEM methodology / In friendship with transformation and animation / Love flex-box / Bootstrap"}],"experience":[{"company":{"name":"PMG Projektraum","description":"Kyiv, Ukraine"},"time":"05.2018 - present","position":"Front-end Developer","responsibility":["Work with React, TypeScript, Webpack;","Create new modules (dashboard, communications (emails),  admin apnel etc.);","State Management with MobX"],"color":"yellow"},{"company":{"name":"Lucky Labs","description":"Riga, Latvia"},"time":"11.2017 - 05.2018","position":"Front-end Developer","responsibility":["Application development with React Native (Android, iOS);","State Management with MobX"],"color":"sea"},{"company":{"name":"Private Dev","description":"Kyiv, Ukraine"},"time":"07.2016 - 10.2017","position":"Front-end Developer","responsibility":["Development of projects on AngularJS, their further support and addition of new modules/features;","Work with REST API;","Build projects using Webpack or Gulp (setup/create config file);","Development of landings of different complexity (statics/adaptive/dynamic);","Experience with different libraries like jQuery, Hammer.js, Velocity.js etc."],"color":"orange"},{"company":{"name":"PROMO.UA","description":"Kyiv, Ukraine"},"time":"08.2015 - 07.2016","position":"HTML-coder","responsibility":["Layout of pages for different websites;","Development of landings (+ placing on the client\'s website);","Work in admin panel (hosting, ftp): editing of page design, including and editing of texts and meta tags);","Advice to clients about the optimization of code;","Work with various CMS-systems (WordPress, OpenCart, Magento and others);","During the work, according to my recommendations, a new type of product was created - \\"light-landing\\" and standards for page layout, which led to increased demand for the product and increased sales."],"color":"green"}],"portfolio":[],"education":[{"name":"National Aviation University","time":"2014-2015","position":"Specialist of \u201cAdministrative management in the field of information security\u201d","location":"Kyiv, Ukraine","color":"yellow"},{"name":"National Aviation University","time":"2010-2014","position":"Bachelor of \u201cManagement of information security\u201d","location":"Kyiv, Ukraine","color":"orange"}],"contacts":[{"primary":true,"type":"e-mail","value":"badykos@gmail.com","url":"mailto:badykos@gmail.com?subject=We checkout your CV!"},{"primary":true,"type":"phone","value":"+380636445455","url":null},{"primary":false,"type":"skype","value":"badykos","url":null},{"primary":true,"type":"linkedin","value":"Bohdan Kosytskyi","url":"//www.linkedin.com/in/bogdan-kosytskyy/"},{"primary":true,"type":"github","value":"@kosbog","url":"//github.com/kosbog"},{"primary":false,"type":"location","value":"Ukraine, Kyiv","url":null}]}')},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(19),s=n.n(c),o=n(7),r=n(8),l=n(10),d=n(9),u=n(20),m=n(2),p=n(14),j=n(11),b={isBadBrowser:null,get about(){return j.about},get menu(){return j.menu},get skills(){return j.skills},get experience(){return j.experience},get portfolio(){return j.portfolio},get education(){return j.education},get contacts(){return j.contacts},get images(){return j.images},get browser(){return O()}};var h=function(e){var t=document.getElementsByClassName("experience__responsibility")[e],n=document.getElementsByClassName("experience__full")[e];t.classList.toggle("experience__responsibility-expand"),n.classList.toggle("experience__full-rotate")},f=function(){var e=window.scrollY,t=Object(p.a)(document.getElementsByClassName("section")),n=0;null===t||void 0===t||t.forEach((function(t,a){t.offsetTop<=e&&(n=a)})),x(n)},v=function(e){console.log("*** Scroll to #".concat(e," ***")),document.getElementsByClassName(e)[0].scrollIntoView({block:"start",behavior:"smooth"})},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Object(p.a)(document.querySelectorAll("a.nav__item"));t.forEach((function(e){e.classList.remove("active-menu")})),t[e].classList.add("active-menu")},O=function(){var e=!!document.documentMode,t=!e&&!!window.StyleMedia,n=window.navigator.userAgent.indexOf("Opera Mini")>-1;return!!e||!!t||!!n},y=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];window.scrollTo(0,0);var t=document.getElementsByTagName("html")[0];e?t.classList.add("no-scroll"):t.classList.remove("no-scroll")},g=function(){var e=document.getElementsByTagName("progress")[0],t=document.getElementsByTagName("nav")[0].clientHeight,n=document.getElementsByClassName("container")[0].children,a=Array.from(n).map((function(e){return e.clientHeight})).reduce((function(e,t){return e+t})),i=window.scrollY/(a-window.innerHeight-t)*100;e.setAttribute("value",i)},_=n(0),N=function(){for(var e=0,t=[];e<10;)t.push(Object(_.jsx)("li",{className:"bar_".concat(e+1)},"bar_".concat(e+1))),e++;return Object(_.jsx)("div",{className:"preloader__loader--lines",children:Object(_.jsx)("ul",{children:t})})},k=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={phrase:""},a.phraseTimer=null,a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.phraseGenerator=setTimeout((function(){e.setState({phrase:"Loading..."})}),300)}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.phraseGenerator)}},{key:"render",value:function(){return Object(_.jsxs)("div",{className:"preloader",children:[Object(_.jsx)("div",{className:"preloader__loader",children:Object(_.jsx)(N,{})}),Object(_.jsx)("div",{className:"preloader__phrase",children:this.state.phrase})]})}}]),n}(i.a.Component),w=function(e){var t=e.children,n=e.className;return Object(_.jsx)("section",{className:"section ".concat(n),children:Object(_.jsx)("div",{className:"wrapper ".concat(n,"__wrapper"),children:t})})},C=n.p+"static/media/self.d39a26d5.png",B=function(e){var t=e.api.about;return Object(_.jsxs)(w,{className:"about",children:[Object(_.jsx)("h2",{className:"section-header",children:"About"}),Object(_.jsxs)("div",{className:"about__description about--self",children:[Object(_.jsx)("div",{className:"about__image",children:Object(_.jsx)("img",{src:C,alt:""})}),Object(_.jsxs)("div",{className:"about__bio",children:[Object(_.jsxs)("h3",{children:["Hello everyone, I'm ",Object(_.jsx)("span",{children:"Bohdan Kosytskyi"}),Object(_.jsx)("br",{}),"front-end developer"]}),Object(_.jsx)("p",{children:t})]})]})]})},E=function(e){var t=e.item,n=t.name,a=t.color,i=t.description;return Object(_.jsxs)("div",{className:"skills__item",children:[Object(_.jsx)("h4",{className:"".concat(a,"-color"),children:n}),Object(_.jsx)("p",{children:i}),Object(_.jsxs)("div",{className:"skills__percent ".concat(a,"-color"),children:[Object(_.jsx)("div",{className:"skills__level ".concat(a,"-bg")}),Object(_.jsx)("div",{className:"skills__value"})]})]})},S=function(e){var t=e.api.skills.map((function(e,t){return Object(_.jsx)(E,{item:e},t)}));return Object(_.jsxs)(w,{className:"skills",children:[Object(_.jsx)("h2",{className:"section-header",children:"Skills"}),Object(_.jsx)("div",{className:"skills__container",children:t})]})},L=function(e){e.index;var t=e.item,n=(e.fullExperience,t.company),a=t.time,i=t.position,c=t.responsibility,s=t.color;return Object(_.jsxs)("div",{className:"experience__item",children:[Object(_.jsx)("div",{className:"experience__position ".concat(s,"-bg-pseudo"),children:Object(_.jsxs)("div",{className:"position__wrapper ".concat(s,"-color"),children:[Object(_.jsx)("span",{className:"position__item position--name",children:i}),Object(_.jsx)("span",{className:"position__item position--time",children:a})]})}),Object(_.jsxs)("div",{className:"experience__company",children:[Object(_.jsx)("span",{className:"company__item company--name",children:n.name}),Object(_.jsx)("span",{className:"company__item company--info",children:n.description})]}),Object(_.jsx)("div",{className:"experience__responsibility-expand",children:Object(_.jsx)("ul",{className:"responsibility__list",children:c.map((function(e,t){return Object(_.jsx)("li",{className:"".concat(s,"-bg-pseudo"),children:e},t)}))})})]})},M=function(e){var t=e.api,n=e.fullExperience,a=t.experience.map((function(e,t){return Object(_.jsx)(L,{index:t,item:e,fullExperience:n},t)}));return Object(_.jsxs)(w,{className:"experience",children:[Object(_.jsx)("h2",{className:"section-header",children:"Experience"}),Object(_.jsx)("div",{className:"experience__container",children:a})]})},A=function(e){var t=e.item,n=t.name,a=t.time,i=t.position,c=t.location,s=t.color;return Object(_.jsxs)("div",{className:"education__item",children:[Object(_.jsx)("div",{className:"education__position ".concat(s,"-bg-pseudo"),children:Object(_.jsxs)("div",{className:"position__wrapper ".concat(s,"-color"),children:[Object(_.jsx)("span",{className:"position__item position--name",children:i}),Object(_.jsx)("span",{className:"position__item position--time",children:a})]})}),Object(_.jsxs)("div",{className:"education__university",children:[Object(_.jsx)("span",{className:"university__item university--name",children:n}),Object(_.jsx)("span",{className:"university__item university--info",children:c})]})]})},T=function(e){var t=e.api.education.map((function(e,t){return Object(_.jsx)(A,{item:e},t)}));return Object(_.jsxs)(w,{className:"education",children:[Object(_.jsx)("h2",{className:"section-header",children:"education"}),Object(_.jsx)("div",{className:"education__container",children:t})]})},F=function(e){var t=e.item,n=e.checkContact,a=e.currentContact,i=t.type,c=t.value,s=t.url;return Object(_.jsxs)("div",{className:"contacts__item type__item ",children:[Object(_.jsx)("input",{className:"type__input",id:i,type:"radio",name:i,value:i,checked:a===i,onChange:n}),Object(_.jsxs)("label",{htmlFor:i,className:"type__label",children:[Object(_.jsx)("span",{className:"type__name",children:i}),s?Object(_.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",className:"type__value",children:c}):Object(_.jsx)("span",{className:"type__value",children:c}),Object(_.jsx)("div",{className:"type__icon",children:Object(_.jsx)("span",{className:"icon icon-".concat(i)})})]})]})},I=function(e){var t=e.api,n=e.checkContact,a=e.currentContact,i=t.contacts.filter((function(e){return!0===e.primary}));return Object(_.jsxs)(w,{className:"contacts",children:[Object(_.jsx)("h2",{className:"section-header",children:"contacts"}),Object(_.jsxs)("div",{className:"contacts__container",children:[Object(_.jsx)("div",{className:"mb-lg",children:'You can contact me by e-mail or phone. Also, you can find me on GitHub and in the social network "LinkedIn". All information for communication you will find below'}),Object(_.jsx)("div",{className:"contacts__type",children:i.map((function(e,t){return Object(_.jsx)(F,{item:e,checkContact:n,currentContact:a},t)}))}),Object(_.jsx)("div",{className:"contacts__cv",children:Object(_.jsxs)("div",{className:"cv",children:[Object(_.jsxs)("p",{className:"cv__text",children:["And download my CV",Object(_.jsx)("span",{className:"cv__extension",children:"(.pdf)"})]}),Object(_.jsx)("a",{className:"cv__link",href:"/app/data/CV_Bohdan_Kosytskyi.pdf",download:"CV_Bogdan_Kosytskyi",children:"Download"})]})})]})]})},U=n.p+"static/media/logo.7a845e7f.png",D=function(e){var t=e.scrollToElement,n=e.api.menu;return Object(_.jsx)("nav",{className:"nav",children:Object(_.jsxs)("div",{className:"nav__container",children:[Object(_.jsx)("div",{className:"nav__logo",children:Object(_.jsx)("img",{src:U,alt:""})}),Object(_.jsx)("div",{className:"nav__menu",children:n.map((function(e,n){return Object(_.jsx)("a",{className:"nav__item",onClick:function(){t(e),x(n)},children:e},e)}))})]})})},W=function(){return Object(_.jsx)("footer",{children:Object(_.jsx)("div",{className:"wrapper footer__wrapper",children:Object(_.jsxs)("div",{className:"footer__info",children:[Object(_.jsx)("span",{className:"current-year"})," Bohdan Kosytskyi"]})})})},H=function(){return Object(_.jsx)("div",{className:"browser",children:Object(_.jsxs)("div",{className:"browser__container",children:[Object(_.jsx)("p",{children:"Oops... :("}),Object(_.jsx)("p",{children:"Sorry, your browser is not supported."})]})})},K=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(_.jsx)("progress",{value:!0,max:"100"})}}]),n}(a.Component),P=K,R=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).initSetupApp=function(){a.setState({loading:"fulfilled"}),y(!1),x(),function(e){var t=document.getElementsByClassName("skills__level"),n=document.getElementsByClassName("skills__value"),a=b.skills.map((function(e,t){return e.value})),i=0,c=0;Object(p.a)(t).forEach((function(e){e.style.width="".concat(a[c]-7,"%"),c+=1})),Object(p.a)(n).forEach((function(e){for(var t=function(t){setTimeout((function(){e.innerHTML="".concat(t,"%")}),33*t)},n=0;n<=a[i];n++)t(n);i+=1}))}(),function(){var e=(new Date).getFullYear();document.getElementsByClassName("current-year")[0].innerHTML="@".concat(e)}()},a.showMorePortfolio=function(){a.setState({portfolioFull:a.state.portfolioFull+3})},a.checkContact=function(e){a.setState({currentContact:e.target.value})},a.renderContent=function(){return Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)(D,{scrollToElement:v,api:b}),Object(_.jsx)(B,{api:b}),Object(_.jsx)(S,{api:b}),Object(_.jsx)(M,{api:b,fullExperience:h}),Object(_.jsx)(T,{api:b}),Object(_.jsx)(I,{api:b,checkContact:a.checkContact,currentContact:a.state.currentContact}),Object(_.jsx)(W,{})]})},a.state={portfolioFull:3,currentContact:"",loading:"pending",isBadBrowser:b.browser},y(),a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.onload=function(){document.addEventListener("scroll",g),document.addEventListener("scroll",f),document.getElementsByClassName("preloader")[0].classList.add("hideMe"),e.state.isBadBrowser?e.setState({loading:"error"}):e.initSetupApp()}}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",g)}},{key:"render",value:function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(P,{}),Object(_.jsx)(k,{}),this.state.isBadBrowser?Object(_.jsx)(H,{}):this.renderContent()]})}}]),n}(i.a.Component),G=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(_.jsx)("div",{children:"404"})}}]),n}(i.a.Component),V=G,J=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(_.jsx)(u.a,{children:Object(_.jsxs)(m.c,{children:[Object(_.jsx)(m.a,{exact:!0,path:"/",component:R}),Object(_.jsx)(m.a,{component:V})]})})}}]),n}(i.a.Component),Y=J,X=(n(33),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))});s.a.render(Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)(Y,{})}),document.getElementById("root")),X()}},[[34,1,2]]]);
//# sourceMappingURL=main.0ffeb370.chunk.js.map