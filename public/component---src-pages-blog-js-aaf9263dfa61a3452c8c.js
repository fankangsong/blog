(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{161:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return s}),a.d(t,"pageQuery",function(){return u});var n=a(0),r=a.n(n),i=a(164),c=a(171),l=a(169);a(182);function o(e){var t=e.list;return r.a.createElement("ul",{className:"blog-list-container"},t.map(function(e){var t=e.node,a=t.frontmatter,n=t.excerpt,c=t.id,l=a.title,o=a.date,s=a.path;return r.a.createElement("li",{key:c},r.a.createElement(i.a,{to:s,className:"title"},l),r.a.createElement("span",{className:"date"},o),r.a.createElement("p",{className:"desc"},n))}))}function s(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(c.a,null,r.a.createElement(l.a,{title:"博客列表"}),r.a.createElement(o,{list:t}))}var u="3473231669"},164:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(5),c=a.n(i),l=a(40),o=a.n(l);a.d(t,"a",function(){return o.a});a(165);var s=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,c=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,c&&i(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||i,staticQueryData:e})})};d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},165:function(e,t,a){var n;e.exports=(n=a(167))&&n.default||n},166:function(e){e.exports={data:{site:{siteMetadata:{title:"fer"}}}}},167:function(e,t,a){"use strict";a.r(t);a(41);var n=a(0),r=a.n(n),i=a(5),c=a.n(i),l=a(64),o=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},168:function(e,t,a){e.exports=a.p+"static/avatar-c09b78756730f7f3bea995ee2a10cb08.png"},169:function(e,t,a){"use strict";var n=a(170),r=a(0),i=a.n(r),c=a(5),l=a.n(c),o=a(175),s=a.n(o);function u(e){var t=e.description,a=e.lang,r=e.meta,c=e.title,l=n.data.site,o=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:c},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:o}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=u},170:function(e){e.exports={data:{site:{siteMetadata:{title:"fer",description:"fer 的个人网站",author:"@fankangsong"}}}}},171:function(e,t,a){"use strict";var n=a(166),r=a(0),i=a.n(r),c=a(5),l=a.n(c),o=a(164),s=(a(172),a(168)),u=a.n(s),d=function(e){e.siteTitle;return i.a.createElement("header",{className:"site-header"},i.a.createElement(o.a,{to:"/",className:"logo-link"},i.a.createElement("img",{className:"logo",src:u.a,alt:""})),i.a.createElement("ul",{className:"navigator"},i.a.createElement("li",null,i.a.createElement(o.a,{to:"/blog"},"Blog")),i.a.createElement("li",null,i.a.createElement(o.a,{to:"/about"},"About"))))};d.propTypes={siteTitle:l.a.string},d.defaultProps={siteTitle:""};var m=d,p=(a(173),function(){var e=(new Date).getFullYear();return i.a.createElement("footer",{className:"site-footer"},"© ",e," imfer.me")}),f=(a(174),function(e){var t=e.children;return i.a.createElement(o.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement(p,null)))},data:n})});f.propTypes={children:l.a.node.isRequired};t.a=f}}]);
//# sourceMappingURL=component---src-pages-blog-js-aaf9263dfa61a3452c8c.js.map