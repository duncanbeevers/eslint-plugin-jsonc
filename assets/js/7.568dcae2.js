(window.webpackJsonp=window.webpackJsonp||[]).push([[7,11,12],{154:function(e,t,s){},164:function(e,t,s){"use strict";s(154)},169:function(e,t,s){"use strict";s.r(t);var r=s(165),n=s(156),o=s.n(n),i={name:"EslintPluginEditor",components:{EslintEditor:r.a},model:{prop:"code"},props:{code:{type:String,default:""},fix:{type:Boolean},rules:{type:Object,default:()=>({})},dark:{type:Boolean},language:{type:String,default:"json"},fileName:{type:String,default:"a.json"},parser:{type:String,default:"jsonc-eslint-parser"}},data:()=>({eslint4b:null,jsoncESLintParser:null,vueESLintParser:null,format:{insertSpaces:!0,tabSize:2}}),computed:{config(){return{globals:{ArrayBuffer:!1,DataView:!1,Float32Array:!1,Float64Array:!1,Int16Array:!1,Int32Array:!1,Int8Array:!1,Map:!1,Promise:!1,Proxy:!1,Reflect:!1,Set:!1,Symbol:!1,Uint16Array:!1,Uint32Array:!1,Uint8Array:!1,Uint8ClampedArray:!1,WeakMap:!1,WeakSet:!1,Atomics:!1,SharedArrayBuffer:!1},rules:this.rules,parser:this.parser,parserOptions:{sourceType:"script",ecmaVersion:2021}}},linter(){if(!this.eslint4b||!this.jsoncESLintParser||!this.vueESLintParser)return null;const e=new(0,this.eslint4b);e.defineParser("jsonc-eslint-parser",this.jsoncESLintParser),e.defineParser("vue-eslint-parser",this.vueESLintParser);for(const t of Object.keys(o.a.rules)){const s=o.a.rules[t];e.defineRule(s.meta.docs.ruleId,s)}return e}},async mounted(){const[{default:e},t,r]=await Promise.all([Promise.resolve().then(s.t.bind(null,600,7)),Promise.resolve().then(s.t.bind(null,166,7)).then(()=>Promise.resolve().then(s.t.bind(null,159,7))),Promise.resolve().then(s.t.bind(null,166,7)).then(()=>Promise.all([s.e(6),s.e(65)]).then(s.t.bind(null,722,7)))]);this.eslint4b=e,this.jsoncESLintParser=t,this.vueESLintParser=r;const n=this.$refs.editor;n.$watch("monaco",()=>{const{monaco:e}=n;e.languages.typescript.typescriptDefaults.setDiagnosticsOptions({validate:!1}),e.languages.typescript.javascriptDefaults.setDiagnosticsOptions({validate:!1})}),n.$watch("codeEditor",()=>{n.codeEditor&&n.codeEditor.onDidChangeModelDecorations(()=>this.onDidChangeModelDecorations(n.codeEditor))}),n.$watch("fixedCodeEditor",()=>{n.fixedCodeEditor&&n.fixedCodeEditor.onDidChangeModelDecorations(()=>this.onDidChangeModelDecorations(n.fixedCodeEditor))})},methods:{onDidChangeModelDecorations(e){const{monaco:t}=this.$refs.editor,s=e.getModel();t.editor.setModelMarkers(s,"json",[])}}},l=(s(164),s(6)),a=Object(l.a)(i,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("eslint-editor",{ref:"editor",staticClass:"eslint-code-block",attrs:{linter:e.linter,config:e.config,code:e.code,language:e.language,filename:e.fileName,dark:e.dark,format:e.format,fix:e.fix},on:{input:function(t){return e.$emit("input",t)},change:function(t){return e.$emit("change",t)}}})}),[],!1,null,"893a6a2c",null);t.default=a.exports},174:function(e,t,s){},175:function(e,t,s){},179:function(e,t,s){"use strict";s.d(t,"b",(function(){return u})),s.d(t,"a",(function(){return d}));var r=s(178),n=s(156),o=s.n(n);const i={jsonc:"eslint-plugin-jsonc","eslint-core-rules@Possible Errors":"ESLint core rules(Possible Errors)","eslint-core-rules@Best Practices":"ESLint core rules(Best Practices)","eslint-core-rules@Strict Mode":"ESLint core rules(Strict Mode)","eslint-core-rules@Variables":"ESLint core rules(Variables)","eslint-core-rules@Node.js and CommonJS":"ESLint core rules(Node.js and CommonJS)","eslint-core-rules@Stylistic Issues":"ESLint core rules(Stylistic Issues)","eslint-core-rules@ECMAScript 6":"ESLint core rules(ECMAScript 6)"},l={jsonc:2,"eslint-core-rules@Possible Errors":6,"eslint-core-rules@Best Practices":7,"eslint-core-rules@Strict Mode":8,"eslint-core-rules@Variables":9,"eslint-core-rules@Node.js and CommonJS":10,"eslint-core-rules@Stylistic Issues":11,"eslint-core-rules@ECMAScript 6":12},a={jsonc:"eslint-plugin-jsonc__category"},c=[];for(const e of Object.keys(o.a.rules)){const t=o.a.rules[e];t.meta.docs.category="jsonc",c.push({classes:"eslint-plugin-jsonc__rule",category:"jsonc",ruleId:t.meta.docs.ruleId,url:t.meta.docs.url,initChecked:l[t.meta.docs.category]<=3})}for(const e of Object.keys(r)){const t=r[e];c.push({category:"eslint-core-rules@"+t.meta.docs.category,fallbackTitle:`ESLint core rules(${t.meta.docs.category})`,ruleId:e,url:t.meta.docs.url,initChecked:!1})}c.sort((e,t)=>e.ruleId>t.ruleId?1:e.ruleId<t.ruleId?-1:0);const u=[];for(const e of c){const t=i[e.category]||e.fallbackTitle;let s=u.find(e=>e.title===t);s||(s={classes:a[e.category],category:e.category,categoryOrder:l[e.category],title:t,rules:[]},u.push(s)),s.rules.push(e)}u.sort((e,t)=>e.categoryOrder>t.categoryOrder?1:e.categoryOrder<t.categoryOrder?-1:e.title>t.title?1:e.title<t.title?-1:0);const d=c.reduce((e,t)=>("jsonc/auto"===t.ruleId||("vue/no-parsing-error"===t.ruleId?e[t.ruleId]="error":e[t.ruleId]=t.initChecked?"error":"off"),e),{})},512:function(e,t,s){"use strict";s(174)},513:function(e,t,s){"use strict";s(175)},567:function(e,t,s){},572:function(e,t,s){"use strict";s.r(t);var r={name:"PgEditor",components:{EslintPluginEditor:s(169).default},props:{value:{type:String,default:""},rules:{type:Object,default:()=>({})},messages:{type:Array,default:()=>[]}}},n=s(6),o=Object(n.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("eslint-plugin-editor",{ref:"editor",attrs:{code:e.value,rules:e.rules,fix:"",dark:""},on:{input:function(t){return e.$emit("input",t)},change:function(t){return e.$emit("change",t)}}})}),[],!1,null,null,null);t.default=o.exports},573:function(e,t,s){"use strict";s.r(t);var r=s(179),n={name:"RulesSettings",props:{rules:{type:Object,required:!0}},data:()=>({categories:r.b}),watch:{},methods:{filterRules:e=>e.filter(e=>"jsonc/auto"!==e.ruleId),onAllClick(e,t){const s=Object.assign({},this.rules);for(const r of this.filterRules(e.rules))t.target.checked?s[r.ruleId]="error":delete s[r.ruleId];this.$emit("update:rules",s)},onClick(e,t){const s=Object.assign({},this.rules);t.target.checked?s[e]="error":delete s[e],this.$emit("update:rules",s)},isErrorState(e){return"error"===this.rules[e]||2===this.rules[e]}}},o=(s(512),s(6)),i=Object(o.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"rules-settings"},[s("ul",{staticClass:"categories"},e._l(e.categories,(function(t){return s("li",{key:t.title,staticClass:"category",class:t.classes},[s("div",{staticClass:"category-title-wrapper"},[s("label",{staticClass:"category-title"},[s("input",{attrs:{type:"checkbox"},domProps:{checked:e.filterRules(t.rules).every((function(t){return e.isErrorState(t.ruleId)})),indeterminate:!e.filterRules(t.rules).every((function(t){return e.isErrorState(t.ruleId)}))&&!e.filterRules(t.rules).every((function(t){return!e.isErrorState(t.ruleId)}))},on:{input:function(s){return e.onAllClick(t,s)}}}),e._v("\n                    "+e._s(t.title)+"\n                ")])]),e._v(" "),s("ul",{staticClass:"rules"},e._l(e.filterRules(t.rules),(function(t){return s("li",{key:t.ruleId,staticClass:"rule",class:t.classes},[s("label",[s("input",{attrs:{type:"checkbox"},domProps:{checked:e.isErrorState(t.ruleId)},on:{input:function(s){return e.onClick(t.ruleId,s)}}}),e._v("\n                        "+e._s(t.ruleId)+"\n                    ")]),e._v(" "),s("a",{attrs:{href:t.url,target:"_blank"}},[s("svg",{staticClass:"icon outbound",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"}},[s("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),e._v(" "),s("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])])])})),0)])})),0)])}),[],!1,null,"3b8c96a1",null);t.default=i.exports},574:function(e,t,s){"use strict";s.r(t);let r=null;var n={name:"SnsBar",mounted(){r&&clearTimeout(r),r=setTimeout(()=>{!function(e,t,s){const[r]=e.getElementsByTagName(t);if(e.getElementById(s))return;const n=e.createElement(t);n.id=s,n.src="https://buttons.github.io/buttons.js",r.parentNode.insertBefore(n,r)}(document,"script","gh-buttons"),function(e,t,s){const[r]=e.getElementsByTagName(t);if(e.getElementById(s))return;const n=e.createElement(t);n.id=s,n.src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.10",r.parentNode.insertBefore(n,r)}(document,"script","facebook-jssdk"),function(e,t,s){const[r]=e.getElementsByTagName(t),n=/^http:/u.test(e.location)?"http":"https";if(!e.getElementById(s)){const o=e.createElement(t);o.id=s,o.src=n+"://platform.twitter.com/widgets.js",r.parentNode.insertBefore(o,r)}}(document,"script","twitter-wjs")},500)}},o=(s(513),s(6)),i=Object(o.a)(n,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"sns-bar"},[t("div",{staticClass:"sns"},[t("a",{staticClass:"github-button",attrs:{href:"https://github.com/ota-meshi/eslint-plugin-jsonc","data-show-count":"true","aria-label":"Star ota-meshi/eslint-plugin-jsonc on GitHub"}},[this._v("Star")]),this._v(" "),t("a",{staticClass:"twitter-share-button",attrs:{href:"https://twitter.com/share","data-url":"https://ota-meshi.github.io/eslint-plugin-jsonc/","data-text":"eslint-plugin-jsonc"}},[this._v("Tweet")]),this._v(" "),t("div",{staticClass:"fb-like",attrs:{"data-href":"https://ota-meshi.github.io/eslint-plugin-jsonc/","data-layout":"button_count","data-action":"like","data-size":"small","data-show-faces":"false","data-share":"true"}}),this._v(" "),t("a",{attrs:{href:"https://www.npmjs.com/package/eslint-plugin-jsonc"}},[t("img",{attrs:{src:"https://img.shields.io/npm/v/eslint-plugin-jsonc.svg",alt:"npm"}})])])])}],!1,null,"65ce9032",null);t.default=i.exports},687:function(e,t,s){"use strict";s(567)},725:function(e,t,s){"use strict";s.r(t);var r=s(178),n=s(156),o=s.n(n),i=s(572),l=s(573),a=s(574),c=s(561),u=s.n(c);function d(e){const t={code:void 0,rules:void 0};if(""===e)return t;try{const s=!e.startsWith("eyJj"),r=window.atob(e),n=s?u.a.inflate(r,{to:"string"}):r,o=JSON.parse(n);if("object"==typeof o&&null!=o&&("string"==typeof o.code&&(t.code=o.code),"object"==typeof o.rules&&null!=o.rules)){t.rules={};for(const e of Object.keys(o.rules))t.rules[e]=2===o.rules[e]?"error":"off"}}catch(e){console.error(e)}return t}var f=s(179);const h=JSON.stringify({foo:"bar"},null,4),g={};for(const e of Object.keys(o.a.rules)){const t=o.a.rules[e];g[t.meta.docs.ruleId]=t.meta.docs.url}for(const e of Object.keys(r)){const t=r[e];g[e]=t.meta.docs.url}var p={name:"PlaygroundBlock",components:{PgEditor:i.default,RulesSettings:l.default,SnsBar:a.default},data(){const e=d("undefined"!=typeof window&&window.location.hash.slice(1)||"");return{code:e.code||h,rules:e.rules||Object.assign({},f.a),messages:[]}},computed:{serializedString(){const e=h,t=f.a;return function(e){const t={code:e.code,rules:e.rules?(s=e.rules,Object.keys(s).reduce((e,t)=>("error"===s[t]&&(e[t]=2),e),{})):void 0};var s;const r=JSON.stringify(t),n=u.a.deflate(r,{to:"string"}),o="undefined"!=typeof window&&window.btoa(n)||n;return console.log(`The compress rate of serialized string: ${(100*o.length/r.length).toFixed(1)}% (${r.length}B → ${o.length}B)`),o}({code:e===this.code?void 0:this.code,rules:function(e,t){const s=Object.keys(e).filter(t=>"off"!==e[t]),r=Object.keys(t).filter(e=>"off"!==t[e]);if(s.length!==r.length)return!1;for(const r of s)if(e[r]!==t[r])return!1;return!0}(t,this.rules)?void 0:this.rules})}},watch:{serializedString(e){"undefined"!=typeof window&&window.location.replace("#"+e)}},mounted(){"undefined"!=typeof window&&window.addEventListener("hashchange",this.onUrlHashChange)},beforeDestroey(){"undefined"!=typeof window&&window.removeEventListener("hashchange",this.onUrlHashChange)},methods:{onChange({messages:e}){this.messages=e},getURL:e=>g[e]||"",onUrlHashChange(){const e="undefined"!=typeof window&&window.location.hash.slice(1)||"";if(e!==this.serializedString){const t=d(e);this.code=t.code||h,this.rules=t.rules||Object.assign({},f.a),this.script=t.script}}}},m=(s(687),s(6)),y=Object(m.a)(p,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app"},[s("sns-bar"),e._v(" "),s("div",{staticClass:"main-content"},[s("rules-settings",{ref:"settings",staticClass:"rules-settings",attrs:{rules:e.rules},on:{"update:rules":function(t){e.rules=t}}}),e._v(" "),s("div",{staticClass:"editor-content"},[s("pg-editor",{staticClass:"eslint-playground",attrs:{rules:e.rules},on:{change:e.onChange},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),e._v(" "),s("div",{staticClass:"messages"},[s("ol",e._l(e.messages,(function(t,r){return s("li",{key:t.line+":"+t.column+":"+t.ruleId+"@"+r,staticClass:"message"},[e._v("\n                        ["+e._s(t.line)+":"+e._s(t.column)+"]:\n                        "+e._s(t.message)+" ("),s("a",{attrs:{href:e.getURL(t.ruleId),target:"_blank"}},[e._v("\n                            "+e._s(t.ruleId)+" ")]),e._v(")\n                    ")])})),0)])],1)],1)],1)}),[],!1,null,"a120486a",null);t.default=y.exports}}]);