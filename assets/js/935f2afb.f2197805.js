"use strict";(self.webpackChunkscribe=self.webpackChunkscribe||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Getting started","href":"/docosaurus-scribe/docs/start","docId":"start"},{"type":"category","label":"Scribe\'s CLI tool","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/docosaurus-scribe/docs/cli-tool/overview","docId":"cli-tool/overview"},{"type":"link","label":"Diving Deeper","href":"/docosaurus-scribe/docs/cli-tool/diving-deeper","docId":"cli-tool/diving-deeper"},{"type":"link","label":"bom Command","href":"/docosaurus-scribe/docs/cli-tool/bom-command","docId":"cli-tool/bom-command"},{"type":"link","label":"find Command","href":"/docosaurus-scribe/docs/cli-tool/find-command","docId":"cli-tool/find-command"},{"type":"link","label":"sign Command","href":"/docosaurus-scribe/docs/cli-tool/sign-command","docId":"cli-tool/sign-command"},{"type":"link","label":"verify Command","href":"/docosaurus-scribe/docs/cli-tool/verify-command","docId":"cli-tool/verify-command"}]},{"type":"link","label":"Checking the SBOM for CVEs","href":"/docosaurus-scribe/docs/check_cves","docId":"check_cves"},{"type":"link","label":"FAQ","href":"/docosaurus-scribe/docs/faq","docId":"faq"},{"type":"link","label":"Tutorial Intro","href":"/docosaurus-scribe/docs/intro","docId":"intro"},{"type":"category","label":"Tutorial - Basics","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Create a Page","href":"/docosaurus-scribe/docs/tutorial-basics/create-a-page","docId":"tutorial-basics/create-a-page"},{"type":"link","label":"Create a Document","href":"/docosaurus-scribe/docs/tutorial-basics/create-a-document","docId":"tutorial-basics/create-a-document"},{"type":"link","label":"Create a Blog Post","href":"/docosaurus-scribe/docs/tutorial-basics/create-a-blog-post","docId":"tutorial-basics/create-a-blog-post"},{"type":"link","label":"Markdown Features","href":"/docosaurus-scribe/docs/tutorial-basics/markdown-features","docId":"tutorial-basics/markdown-features"},{"type":"link","label":"Deploy your site","href":"/docosaurus-scribe/docs/tutorial-basics/deploy-your-site","docId":"tutorial-basics/deploy-your-site"},{"type":"link","label":"Congratulations!","href":"/docosaurus-scribe/docs/tutorial-basics/congratulations","docId":"tutorial-basics/congratulations"}]},{"type":"category","label":"Tutorial - Extras","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Manage Docs Versions","href":"/docosaurus-scribe/docs/tutorial-extras/manage-docs-versions","docId":"tutorial-extras/manage-docs-versions"},{"type":"link","label":"Translate your site","href":"/docosaurus-scribe/docs/tutorial-extras/translate-your-site","docId":"tutorial-extras/translate-your-site"}]}]},"docs":{"check_cves":{"id":"check_cves","title":"Checking the SBOM for CVEs","description":"In order to scan the resulting SBOM for CVEs you can use Grype. Grype is an open-source tool that can provide static CVE analysis on your SBOM. Grype does not require an internet connection to work \u2013 it uses a list of known CVEs that is included with the tool when you first download it. In an integrated environment (connected to the internet), Grype checks on each run if there are new CVEs to add to its DB. To avoid this check you can add a .grype.yaml configuration file where updating the DB is marked as false:","sidebar":"tutorialSidebar"},"cli-tool/bom-command":{"id":"cli-tool/bom-command","title":"bom Command","description":"The \u2018bom\u2019 command is used to create an SBOM, statement, or attestation of the directory or docker image it\u2019s targeting. Other than the command\u2019s target it can accept various flags.","sidebar":"tutorialSidebar"},"cli-tool/diving-deeper":{"id":"cli-tool/diving-deeper","title":"Diving Deeper","description":"The Scribe CLI tool can do several things:","sidebar":"tutorialSidebar"},"cli-tool/find-command":{"id":"cli-tool/find-command","title":"find Command","description":"You can use the \u2018find\u2019 command to search for an existing SBOM, statement, or attestation either in the Scribe CLI default cache or in a path you specify.","sidebar":"tutorialSidebar"},"cli-tool/overview":{"id":"cli-tool/overview","title":"Overview","description":"The Scribe CLI tool is designed to allow you to create a full Software Bill of Materials (SBOM) of any docker image or file folder you have access to, down to the file level. There will be no more hidden files or dependencies in any of the packages or images you are working with.","sidebar":"tutorialSidebar"},"cli-tool/sign-command":{"id":"cli-tool/sign-command","title":"sign Command","description":"You can use the \u2018sign\u2019 command to cryptographically sign a statement created by Scribe\'s CLI tool and turn it into an attestation. The command accepts as a target a specific SBOM or statement file.","sidebar":"tutorialSidebar"},"cli-tool/verify-command":{"id":"cli-tool/verify-command","title":"verify Command","description":"You can use the \u2018verify\u2019 command to check a .sig file created by bomber and check that its signature is valid. As part of the check you\u2019ll be able to see the signer\u2019s email address or other credential used in the siging \u2013 GitHub or Microsoft credential. This assumes the use of the default signing mechanism using the online sigstore library. The verification uses cosign so you need to be online to verify an attestation. It\u2019s possible to change the configuration file to use different methods of signing. To learn more go to the configuration file chapter.","sidebar":"tutorialSidebar"},"faq":{"id":"faq","title":"FAQ","description":"What\'s integrity","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Tutorial Intro","description":"Let\'s discover Docusaurus in less than 5 minutes.","sidebar":"tutorialSidebar"},"start":{"id":"start","title":"Getting started","description":"Scribe is a solution for DevSecOps teams and Security teams who want to govern security of software in the development process. Scribe enables you to collect and share evidence about the security level of these processes. You can share such evidence with stakeholders who are responsible for the internal deployment or with external consumers of your software. For example, with Scribe you can analyze and share the Software Bill of Materials (SBOM) of your product with your customers.","sidebar":"tutorialSidebar"},"tutorial-basics/congratulations":{"id":"tutorial-basics/congratulations","title":"Congratulations!","description":"You have just learned the basics of Docusaurus and made some changes to the initial template.","sidebar":"tutorialSidebar"},"tutorial-basics/create-a-blog-post":{"id":"tutorial-basics/create-a-blog-post","title":"Create a Blog Post","description":"Docusaurus creates a page for each blog post, but also a blog index page, a tag system, an RSS feed...","sidebar":"tutorialSidebar"},"tutorial-basics/create-a-document":{"id":"tutorial-basics/create-a-document","title":"Create a Document","description":"Documents are groups of pages connected through:","sidebar":"tutorialSidebar"},"tutorial-basics/create-a-page":{"id":"tutorial-basics/create-a-page","title":"Create a Page","description":"Add Markdown or React files to src/pages to create a standalone page:","sidebar":"tutorialSidebar"},"tutorial-basics/deploy-your-site":{"id":"tutorial-basics/deploy-your-site","title":"Deploy your site","description":"Docusaurus is a static-site-generator (also called Jamstack).","sidebar":"tutorialSidebar"},"tutorial-basics/markdown-features":{"id":"tutorial-basics/markdown-features","title":"Markdown Features","description":"Docusaurus supports Markdown and a few additional features.","sidebar":"tutorialSidebar"},"tutorial-extras/manage-docs-versions":{"id":"tutorial-extras/manage-docs-versions","title":"Manage Docs Versions","description":"Docusaurus can manage multiple versions of your docs.","sidebar":"tutorialSidebar"},"tutorial-extras/translate-your-site":{"id":"tutorial-extras/translate-your-site","title":"Translate your site","description":"Let\'s translate docs/intro.md to French.","sidebar":"tutorialSidebar"}}}')}}]);