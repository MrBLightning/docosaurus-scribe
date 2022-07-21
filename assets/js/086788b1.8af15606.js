"use strict";(self.webpackChunkscribe=self.webpackChunkscribe||[]).push([[119],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,b=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(b,a(a({ref:t},u),{},{components:r})):n.createElement(b,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},192:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={sidebar_position:3},l="Other CI Systems",s={unversionedId:"ci-integration/general",id:"ci-integration/general",title:"Other CI Systems",description:"In order to integrate our tools into any other CI pipeline you'll need to download the two tools, gensbom and valint. Once you have the tools you can implement their CLI commands in any any pipeline you want.",source:"@site/docs/ci-integration/general.md",sourceDirName:"ci-integration",slug:"/ci-integration/general",permalink:"/docosaurus-scribe/docs/ci-integration/general",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Jenkins",permalink:"/docosaurus-scribe/docs/ci-integration/jenkins"},next:{title:"Detecting CVEs",permalink:"/docosaurus-scribe/docs/cves"}},u={},p=[{value:"Download the tools",id:"download-the-tools",level:2},{value:"Get the <em>SBOMs</em>",id:"get-the-sboms",level:2},{value:"Get the integrity report",id:"get-the-integrity-report",level:2}],m={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"other-ci-systems"},"Other CI Systems"),(0,i.kt)("p",null,"In order to integrate our tools into any other CI pipeline you'll need to download the two tools, gensbom and valint. Once you have the tools you can implement their CLI commands in any any pipeline you want."),(0,i.kt)("h2",{id:"download-the-tools"},"Download the tools"),(0,i.kt)("p",null,"Get the gensbom tool"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl https://www.scribesecurity.com/getscribe | sh\n")),(0,i.kt)("p",null,"Get the valint tool"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl https://www.scribesecurity.com/getscribe | sh\n")),(0,i.kt)("h2",{id:"get-the-sboms"},"Get the ",(0,i.kt)("em",{parentName:"h2"},"SBOMs")),(0,i.kt)("p",null,"Generate an ",(0,i.kt)("em",{parentName:"p"},"SBOM")," for your source code. The credentials can be copied from your ",(0,i.kt)("a",{href:"https://mui.production.scribesecurity.com/install-scribe"},"CLI page"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gensbom bom dir:<path> --scribe.clientid=****** -P --scribe.clientsecret=****** --name=scribe -E -f -v\n")),(0,i.kt)("p",null,"Generate an ",(0,i.kt)("em",{parentName:"p"},"SBOM")," for your final image."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gensbom bom <your_docker_repository:tag> --scribe.clientid=****** -P --scribe.clientsecret=****** --name=scribe -E -f -v\n")),(0,i.kt)("h2",{id:"get-the-integrity-report"},"Get the integrity report"),(0,i.kt)("p",null,"In this example the report will be downloaded into 'scribe/valint'. The credentials can be copied from your ",(0,i.kt)("a",{href:"https://mui.production.scribesecurity.com/install-scribe"},"CLI page"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"valint report -U \\\n --scribe.clientid=****** -P --scribe.clientsecret=****** --output-directory scribe/valint -vv\n")))}d.isMDXComponent=!0}}]);