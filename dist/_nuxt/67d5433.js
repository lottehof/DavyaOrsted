(window.webpackJsonp=window.webpackJsonp||[]).push([[29,3],{602:function(t,e,n){var content=n(634);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("6cec3088",content,!0,{sourceMap:!1})},633:function(t,e,n){"use strict";n(602)},634:function(t,e,n){var o=n(40)(!1);o.push([t.i,".post-preview[data-v-354b7062]{width:350px;margin-bottom:50px;position:relative;padding:0;box-shadow:0 8px 24px rgba(149,157,165,.2)}.post-preview-title[data-v-354b7062]{font-size:24px;color:#3e4b51;padding-top:30px;text-align:center}.post-preview-thumbnail[data-v-354b7062]{background-position:50%;background-size:cover;width:350px;min-height:250px}.post-preview-content[data-v-354b7062]{height:100%;margin-bottom:10px}.post-preview-text[data-v-354b7062]{width:100%;height:100%;margin-top:20px;padding:16px 20px 20px 30px;line-height:2.43;letter-spacing:.7px}.post-preview-button[data-v-354b7062]{text-align:center;font-size:20px;height:50px;background-color:#4c565c;color:#fff;font-weight:500;bottom:0}a[data-v-354b7062]{text-decoration:none;color:#000}p[data-v-354b7062]{white-space:pre-line;margin-bottom:0}@media (min-width:768px){.post-preview[data-v-354b7062]{width:300px;height:auto}.post-preview-thumbnail[data-v-354b7062]{width:300px}}@media (min-width:1400px){.post-preview[data-v-354b7062],.post-preview-thumbnail[data-v-354b7062]{width:350px}}",""]),t.exports=o},659:function(t,e,n){var content=n(693);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("7967328b",content,!0,{sourceMap:!1})},672:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,required:!0},excerpt:{type:String,required:!0},thumbnailImage:{type:String,required:!0},id:{type:String,required:!0},price:{type:String,required:!0}}},c=(n(633),n(18)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"post-preview"},[n("div",{staticClass:"post-preview-container"},[n("div",{staticClass:"post-preview-thumbnail",style:{backgroundImage:"url("+t.thumbnailImage+")"}}),t._v(" "),n("div",{staticClass:"title"},[n("h1",{staticClass:"post-preview-title"},[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"post-preview-content"},[n("p",{staticClass:"post-preview-text"},[t._v(t._s(t.excerpt))])]),t._v(" "),n("p",{staticClass:"post-preview-button"},[t._v("€"+t._s(t.price))])])])}),[],!1,null,"354b7062",null);e.default=component.exports},692:function(t,e,n){"use strict";n(659)},693:function(t,e,n){var o=n(40)(!1);o.push([t.i,".occasions[data-v-8c6c450e]{min-height:100vh;width:100vw}.container-top-border[data-v-8c6c450e]{width:100vw;height:45px;background-color:#3e4b51}.geen-aanbod[data-v-8c6c450e],.occasions-title[data-v-8c6c450e]{text-align:center;margin-top:40px}.preview[data-v-8c6c450e]{margin:10px}.geen-aanbod[data-v-8c6c450e]{margin-top:80px;font-size:20px;padding:16px 20px 20px 30px}.email[data-v-8c6c450e]{display:flex;align-items:center;justify-content:center;margin-bottom:20px;height:40px}input[data-v-8c6c450e]{font-size:18px;padding:10px 10px 10px 5px;display:block;border:none;border-bottom:1px solid #3e4b51}.button[data-v-8c6c450e],input[data-v-8c6c450e]{width:200px;margin:0 auto}.button[data-v-8c6c450e]{background-color:#4c565c;color:#fff;font-size:16px;height:40px;border-radius:5px;display:flex;align-items:center;justify-content:center}.button[data-v-8c6c450e]:hover{background-color:#fff;color:#4c565c;border:1px solid #4c565c}.occasion-container[data-v-8c6c450e]{display:flex;margin:0 auto;width:80%;flex-flow:row wrap;justify-content:space-around;justify-content:center;align-items:center}@media (min-width:1390px){.container-top-border[data-v-8c6c450e]{height:55px}input[data-v-8c6c450e]{margin:0}.email[data-v-8c6c450e]{margin-right:20px}.form-flex[data-v-8c6c450e]{display:flex;justify-content:center}}@media (min-width:1800px){.container-top-border[data-v-8c6c450e]{height:65px}}",""]),t.exports=o},714:function(t,e,n){"use strict";n.r(e);n(205),n(331),n(7);var o={layout:"headerbar",components:{OccassionsPreview:n(672).default},asyncData:function(t){return t.app.$storyapi.get("cdn/stories",{version:"published",starts_with:"occasions/"}).then((function(t){return console.log(t),{occasionposts:t.data.stories.map((function(t){return{id:t.slug,title:t.content.title,previewText:t.content.description,thumbnailUrl:t.content.thumbnail,price:t.content.price}}))}}))}},c=(n(692),n(18)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"occasions"},[n("h1",{staticClass:"occasions-title"},[t._v("Occasions")]),t._v(" "),0===t.occasionposts.length?n("div",[n("p",{staticClass:"geen-aanbod"},[t._v("Momenteel hebben wij geen occasion aanbod voor u.\n    Wilt u op de hoogte blijven van ons aanbod, laat dan hier uw e-mail achter\n    ")]),t._v(" "),t._m(0)]):t._e(),t._v(" "),n("section",{staticClass:"occasion-container"},t._l(t.occasionposts,(function(t){return n("OccassionsPreview",{key:t.id,staticClass:"preview",attrs:{title:t.title,excerpt:t.previewText,thumbnailImage:t.thumbnailUrl,price:t.price,id:t.id}})})),1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mc_embed_signup"}},[n("form",{staticClass:"validate",attrs:{action:"https://app.us1.list-manage.com/subscribe/post?u=7366f87e6c3f60d49a9d7ef07&id=14e7f66ee5",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank",novalidate:""}},[n("div",{staticClass:"form-flex",attrs:{id:"mc_embed_signup_scroll"}},[n("input",{staticClass:"email",attrs:{type:"email",value:"",name:"EMAIL",id:"mce-EMAIL",placeholder:"email address",required:""}}),t._v(" "),n("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[n("input",{attrs:{type:"text",name:"b_7366f87e6c3f60d49a9d7ef07_14e7f66ee5",tabindex:"-1",value:""}})]),t._v(" "),n("div",{staticClass:"clear"},[n("input",{staticClass:"button",attrs:{type:"submit",value:"Hou me op de hoogte",name:"subscribe",id:"mc-embedded-subscribe"}})])])])])}],!1,null,"8c6c450e",null);e.default=component.exports}}]);