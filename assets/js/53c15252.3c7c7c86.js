"use strict";(self.webpackChunkscribe=self.webpackChunkscribe||[]).push([[48],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return b}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(t),b=i,d=m["".concat(c,".").concat(b)]||m[b]||p[b]||o;return t?r.createElement(d,s(s({ref:n},u),{},{components:t})):r.createElement(d,s({ref:n},u))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6858:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return b}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),s=["components"],a={sidebar_position:2},c="Jenkins",l={unversionedId:"ci-integration/jenkins",id:"ci-integration/jenkins",title:"Jenkins",description:"Important to note that this is for Jenkins over Kubernetes only.",source:"@site/docs/ci-integration/jenkins.md",sourceDirName:"ci-integration",slug:"/ci-integration/jenkins",permalink:"/docosaurus-scribe/docs/ci-integration/jenkins",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"GitHub Actions",permalink:"/docosaurus-scribe/docs/ci-integration/github-actions"},next:{title:"Other CI Systems",permalink:"/docosaurus-scribe/docs/ci-integration/general"}},u={},p=[{value:"Scribe integrity report - full pipeline",id:"scribe-integrity-report---full-pipeline",level:2}],m={toc:p};function b(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jenkins"},"Jenkins"),(0,o.kt)("p",null,"Important to note that this is for Jenkins over Kubernetes only."),(0,o.kt)("h2",{id:"scribe-integrity-report---full-pipeline"},"Scribe integrity report - full pipeline"),(0,o.kt)("p",null,"Full workflow example, uploading evidence using gensbom and downloading the report using valint.\nIn this example the final step is to attach the report and evidence to your pipeline run."),(0,o.kt)("p",null,"This example pipeline YAML file does a checkout on a docker image, creates an ",(0,o.kt)("em",{parentName:"p"},"SBOM")," for it from the local repository, creates another ",(0,o.kt)("em",{parentName:"p"},"SBOM")," from the docker image and, finally, downloads the integrity report from the Scribe backend. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pipeline {\n  agent {\n    kubernetes {\n      yamlFile 'jenkins/k8s/scribe-test/KubernetesPod.yaml'\n    }\n  }\n  stages {\n    stage('checkout-bom') {\n      steps {        \n        container('git') {\n          # this is an example of the repository this pipeline is running on. replace with your own repository\n          sh 'git clone -b v1.0.0-alpha.4 --single-branch https://github.com/mongo-express/mongo-express.git mongo-express-scm'\n        }\n        \n        container('gensbom') {\n          # these credentials can be copied from your CLI page: https://mui.production.scribesecurity.com/install-scribe\n          withCredentials([usernamePassword(credentialsId: 'scribe-staging-auth-id', usernameVariable: 'SCRIBE_CLIENT_ID', passwordVariable: 'SCRIBE_CLIENT_SECRET')]) {\n            # this stage creats the first SBOM\n            sh '''\n            # this SBOM is created on the local directory, it's running on the source code of the image\n            gensbom bom dir:mongo-express-scm \\\n            --context-type jenkins \\\n            --output-directory ./scribe/gensbom \\\n             -E -U $SCRIBE_CLIENT_ID -P $SCRIBE_CLIENT_SECRET \\\n             --scribe.loginurl=https://scribesecurity-staging.us.auth0.com --scribe.auth0.audience=api.staging.scribesecurity.com --scribe.url https://api.staging.scribesecurity.com \\\n            -vv'''\n          }\n        }\n      }\n    }\n\n    stage('image-bom') {\n      steps {\n        container('gensbom') {\n           # these credentials can be copied from your CLI page: https://mui.production.scribesecurity.com/install-scribe\n           withCredentials([usernamePassword(credentialsId: 'scribe-staging-auth-id', usernameVariable: 'SCRIBE_CLIENT_ID', passwordVariable: 'SCRIBE_CLIENT_SECRET')]) { \n            # this stage creats the second SBOM \n            sh '''\n            # this SBOM is created on the docker image, it's running on the uploaded image of this repository\n            gensbom bom mongo-express:1.0.0-alpha.4 \\\n            --context-type jenkins \\\n            --output-directory ./scribe/gensbom \\\n            -E -U $SCRIBE_CLIENT_ID -P $SCRIBE_CLIENT_SECRET \\\n            --scribe.loginurl=https://scribesecurity-staging.us.auth0.com --scribe.auth0.audience=api.staging.scribesecurity.com --scribe.url https://api.staging.scribesecurity.com \\\n            -vv'''\n          }\n        }\n      }\n    }\n\n    stage('download-report') {\n      steps {\n        container('valint') {\n           # these credentials can be copied from your CLI page: https://mui.production.scribesecurity.com/install-scribe\n           withCredentials([usernamePassword(credentialsId: 'scribe-staging-auth-id', usernameVariable: 'SCRIBE_CLIENT_ID', passwordVariable: 'SCRIBE_CLIENT_SECRET')]) {\n            # this stage downloads the integrity report from Scribe's backend   \n            sh '''\n            valint report \\\n            # the default location for the report to be downloaded here is 'scribe/valint'\n            -U $SCRIBE_CLIENT_ID -P $SCRIBE_CLIENT_SECRET --output-directory scribe/valint \\\n            --scribe.loginurl=https://scribesecurity-staging.us.auth0.com --scribe.auth.audience=api.staging.scribesecurity.com --scribe.url https://api.staging.scribesecurity.com \\\n            -vv'''\n          }\n          publish()\n        }\n      }\n    }\n  }\n}\n")),(0,o.kt)("p",null,"This example uses Jenkins over k8s plugin,",(0,o.kt)("br",{parentName:"p"}),"\n","Pod template needs these definitions to work"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"metadata:\n  labels:\n    some-label: jsl-scribe-test\nspec:\n  containers:\n  - name: jnlp\n    env:\n    - name: CONTAINER_ENV_VAR\n      value: jnlp\n  - name: bomber\n    # taking the image from scribesecuriy means you don't need to have a local version\n    image: scribesecuriy.jfrog.io/scribe-docker-public-local/bomber:latest \n    command:\n    - cat\n    tty: true\n  - name: valint\n    # taking the image from scribesecuriy means you don't need to have a local version\n    image: scribesecuriy.jfrog.io/scribe-docker-public-local/valint:latest\n    command:\n    - cat\n    tty: true\n  - name: git\n    image: alpine/git\n    command:\n      - cat\n    tty: true\n")))}b.isMDXComponent=!0}}]);