(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{663:function(t,e,n){var content=n(701);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("c80c9bfa",content,!0,{sourceMap:!1})},700:function(t,e,n){"use strict";n(663)},701:function(t,e,n){var o=n(40)(!1);o.push([t.i,".terms[data-v-66c1446d]{min-height:100vh}.title-terms[data-v-66c1446d]{height:80px;display:flex;align-items:center;justify-content:center;width:100%}.title[data-v-66c1446d]{text-align:center;text-decoration:underline}.terms-content[data-v-66c1446d]{margin:20px;padding:10px}",""]),t.exports=o},718:function(t,e,n){"use strict";n.r(e);var o={layout:"headerbar",data:function(){return{story:{content:{}}}},mounted:function(){var t=this;this.$storybridge.on("input",(function(e){e.story.id===t.story.id&&(t.story.content=e.story.content)})),this.$storybridge.on(["published","change"],(function(e){t.$nuxt.$router.go({path:t.$nuxt.$router.currentRoute,force:!0})}))},asyncData:function(t){return t.app.$storyapi.get("cdn/stories/voorwaarden",{version:"published"}).then((function(t){return t.data})).catch((function(e){e.response?(console.error(e.resonse.data),t.error({statusCode:e.response.status,message:e.response.data})):(console.error(e),t.error({statusCode:404,message:"Failed to receive content from api"}))}))}},r=(n(700),n(18)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"terms"},[n("div",{staticClass:"title-terms"},[n("h1",{staticClass:"title"},[t._v(t._s(t.story.content.title))])]),t._v(" "),n("section",{staticClass:"terms-content",domProps:{innerHTML:t._s(t.$options.filters.markdown(t.story.content.content))}})])}),[],!1,null,"66c1446d",null);e.default=component.exports}}]);