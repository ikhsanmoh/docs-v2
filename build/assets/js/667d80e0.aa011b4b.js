(self.webpackChunkosmicsx=self.webpackChunkosmicsx||[]).push([[6870],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,o(o({ref:e},u),{},{components:n})):r.createElement(m,o({ref:e},u))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2446:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},s="Installation",c={unversionedId:"getting-started/installation",id:"version-0.6/getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"Quick start guide for installing OsmiCSX. You need install OsmiCSX on your project directory.",source:"@site/versioned_docs/version-0.6/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",editUrl:"https://github.com/OsmiCSX/docs-v2/versioned_docs/version-0.6/getting-started/installation.md",version:"0.6",lastUpdatedAt:1625388521,formattedLastUpdatedAt:"7/4/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-0.6/tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Configuration",permalink:"/docs/getting-started/configuration"}},u=[{value:"Installation via NPM",id:"installation-via-npm",children:[]},{value:"Installation via Yarn",id:"installation-via-yarn",children:[]}],p={toc:u};function d(t){var e=t.components,n=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Quick start guide for installing OsmiCSX. You need install OsmiCSX on your project directory."),(0,a.kt)("h2",{id:"installation-via-npm"},"Installation via NPM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save osmicsx\n")),(0,a.kt)("h2",{id:"installation-via-yarn"},"Installation via Yarn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add osmicsx\n")))}d.isMDXComponent=!0}}]);