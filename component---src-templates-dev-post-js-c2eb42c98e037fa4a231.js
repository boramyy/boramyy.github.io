(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{157:function(t,e,a){"use strict";a.r(e);var n=a(7),i=a.n(n),o=a(0),r=a.n(o),l=a(158),c=a(160),p=(a(34),a(177),a(178)),s=a.n(p),m=a(161),d=function(t){function e(e){var a;return(a=t.call(this,e)||this).fetchGitData=function(){var t=this;s.a.get("https://api.github.com/users/"+this.state.user.id).then(function(e){var a=e.data,n=a.name,i=a.avatar_url,o=a.html_url;t.setState({user:Object.assign({},t.state.user,{name:n,img:i,url:o})})})},a.state={user:{id:"boramyy",email:"boramyy@gmail.com",name:"",img:"",url:""}},a}i()(e,t);var a=e.prototype;return a.componentDidMount=function(){this.fetchGitData()},a.render=function(){var t=l.a.div.withConfig({componentId:"n96cw1-0"})(["display:flex;align-items:center;margin:15px 50px 100px;padding:50px;border:1px solid #ccc;box-shadow:15px 15px 0 0 rgba(0,0,0,0.1);@media (max-width:768px){margin:15px 0 70px;padding:30px;}@media (max-width:414px){padding:22px;}"]),e=l.a.img.withConfig({componentId:"n96cw1-1"})(["width:100px;height:auto;border-radius:50%;vertical-align:middle;@media (max-width:414px){width:90px;}"]),a=l.a.div.withConfig({componentId:"n96cw1-2"})(["display:inline-block;margin-left:30px;@media (max-width:414px){margin-left:15px;}"]),n=l.a.div.withConfig({componentId:"n96cw1-3"})(["font-size:20px;font-weight:bold;color:#111;@media (max-width:414px){margin-top:10px;font-size:18px;}"]),i=l.a.div.withConfig({componentId:"n96cw1-4"})(["margin-top:20px;svg{margin-right:8px;margin-bottom:-2px;path{fill:#444;}}@media (max-width:414px){font-size:14px;}"]),o=l.a.a.withConfig({componentId:"n96cw1-5"})(["display:block;padding-top:6px;padding-bottom:6px;text-decoration:none;"]);return r.a.createElement(t,null,r.a.createElement(m.a,{text:"글쓴이"}),r.a.createElement(e,{src:this.state.user.img,alt:this.state.user.name}),r.a.createElement(a,null,r.a.createElement(n,null,this.state.user.name),r.a.createElement(i,null,r.a.createElement(o,{href:this.state.user.url,target:"_blank"},r.a.createElement("svg",{viewBox:"0 0 32 32",width:"16",height:"16"},r.a.createElement("path",{d:"M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"})),this.state.user.id),r.a.createElement(o,{href:"mailto:"+this.state.user.email,target:"_blank"},r.a.createElement("svg",{viewBox:"0 0 14 16",width:"14",height:"16"},r.a.createElement("path",{fillRule:"evenodd",d:"M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"})),this.state.user.email))))},e}(r.a.Component),g=a(166),h=a(164);a.d(e,"pageQuery",function(){return f});var x=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,i=a.next,o=Object(l.a)(g.a).withConfig({componentId:"sc-3cxgx0-0"})(["padding:50px 12%;@media (max-width:414px){padding:0 30px 50px;}"]),p=l.a.div.withConfig({componentId:"sc-3cxgx0-1"})(["overflow:hidden;margin-top:100px;margin-bottom:120px;@media (max-width:414px){margin-bottom:80px;}"]),s=l.a.h2.withConfig({componentId:"sc-3cxgx0-2"})(["float:left;width:50%;margin-top:0;margin-right:15%;color:#111;@media (max-width:414px){margin-bottom:0;}"]),m=l.a.div.withConfig({componentId:"sc-3cxgx0-3"})(["float:left;width:35%;margin-top:10px;font-size:15px;font-weight:100;"]),x=l.a.div.withConfig({componentId:"sc-3cxgx0-4"})(["margin-bottom:15px;"]),f=l.a.span.withConfig({componentId:"sc-3cxgx0-5"})(["display:inline-block;margin-right:15px;line-height:30px;"]),u=l.a.span.withConfig({componentId:"sc-3cxgx0-6"})(["line-height:30px;"]),w=l.a.div.withConfig({componentId:"sc-3cxgx0-7"})(['padding-bottom:120px;color:#444;letter-spacing:0;word-spacing:2px;p{font-size:18px;font-family:"Nanum Gothic",san-serif;line-height:2.4;letter-spacing:-0.4px;}hr{margin-top:50px;border:0;border-top:1px solid #bbb;}img,video{display:block;margin:30px auto;}.gatsby-resp-image-wrapper{margin:50px auto;}em{display:block;font-size:16px;text-align:center;font-style:italic;font-weight:100;}a{font-size:18px;color:#51b6e0;&:hover{color:#77d7ff}}ul,ol{margin-top:15px;margin-bottom:15px;padding-left:20px;li{font-family:"Nanum Gothic",san-serif;font-size:18px;line-height:2.2;}}ul{li{list-style:inside;}}ol{li{margin-left:20px;padding-left:8px;list-style:decimal;}}blockquote{margin-top:50px;margin-bottom:100px;padding:35px 50px;font-size:0.9em;line-height:1.8;border:1px solid #ccc;box-shadow:15px 15px 0 0 rgba(0,0,0,0.1);h2,h3,h4,h5,h6{margin-top:15px;}p,li{font-size:16px;}}.anchor{svg{margin-top:14px;margin-left:-5px;}}.gatsby-resp-image-link + em{margin-top:-30px;margin-bottom:30px;}@media (max-width:414px){h3:first-child{margin-top:0;}}']),v=l.a.div.withConfig({componentId:"sc-3cxgx0-8"})(["overflow:hidden;display:block;width:100%;"]),b=Object(l.a)(c.a).withConfig({componentId:"sc-3cxgx0-9"})(["display:flex;width:50%;height:120px;font-size:20px;line-height:1.6;align-items:center;&.prev{float:left;justify-content:flex-start;svg{margin-right:50px;-webkit-transform:rotate(180deg);transform:rotate(180deg);}}&.next{float:right;justify-content:flex-end;svg{margin-left:50px;}}&:hover{color:#ff6db6;svg{fill:#ff6db6;}}svg{width:50px;height:50px;fill:#333;}@media (max-width:414px){float:none;width:100%;height:auto;min-height:80px;padding:0 15px;font-size:18px;svg{width:25px;height:25px;}&.prev{svg{margin-right:25px;}}&.next{svg{margin-left:25px;}}}"]);return r.a.createElement(o,{location:this.props.location,title:e},r.a.createElement(h.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),r.a.createElement(p,null,r.a.createElement(s,null,t.frontmatter.title),r.a.createElement(m,null,r.a.createElement(function(t){var e=t.tags;return e?r.a.createElement(x,null,e.map(function(t,e){return r.a.createElement(f,{key:e},t)})):null},{tags:t.frontmatter.tags}),r.a.createElement(u,null,t.frontmatter.date))),r.a.createElement(w,{dangerouslySetInnerHTML:{__html:t.html}}),r.a.createElement(d,null),r.a.createElement(v,null,n&&r.a.createElement(b,{className:"prev",to:n.fields.slug,rel:"prev"},r.a.createElement("svg",{x:"0px",y:"0px",viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd"},r.a.createElement("path",{d:"M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"}))," ",n.frontmatter.title),i&&r.a.createElement(b,{className:"next",to:i.fields.slug,rel:"next"},i.frontmatter.title," ",r.a.createElement("svg",{x:"0px",y:"0px",viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd"},r.a.createElement("path",{d:"M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"})))))},e}(r.a.Component),f=(e.default=x,"1423441065")},159:function(t,e,a){var n;t.exports=(n=a(163))&&n.default||n},160:function(t,e,a){"use strict";var n=a(0),i=a.n(n),o=a(4),r=a.n(o),l=a(33),c=a.n(l);a.d(e,"a",function(){return c.a});a(159),i.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func},161:function(t,e,a){"use strict";var n=a(7),i=a.n(n),o=a(0),r=a.n(o),l=a(158),c=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){var t=l.a.strong.withConfig({componentId:"sc-1oc7sgy-0"})(["overflow:hidden;position:absolute;width:0;height:0;line-height:0;color:transparent;"]);return r.a.createElement(t,null,this.props.text)},e}(r.a.Component);e.a=c},163:function(t,e,a){"use strict";a.r(e);a(34);var n=a(0),i=a.n(n),o=a(4),r=a.n(o),l=a(55),c=a(2),p=function(t){var e=t.location,a=c.default.getResourcesForPathnameSync(e.pathname);return a?i.a.createElement(l.a,Object.assign({location:e,pageResources:a},a.json)):null};p.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},e.default=p},164:function(t,e,a){"use strict";var n=a(165),i=a(0),o=a.n(i),r=a(4),l=a.n(r),c=a(168),p=a.n(c);function s(t){var e=t.description,a=t.lang,i=t.meta,r=t.keywords,l=t.title,c=n.data.site,s=e||c.siteMetadata.description;return o.a.createElement(p.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s",meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"og:image",content:c.siteMetadata.image},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:s}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(i)})}s.defaultProps={lang:"en",meta:[],keywords:[],description:""},s.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},e.a=s},165:function(t){t.exports={data:{site:{siteMetadata:{title:"boram kim, developer",description:"A starter blog demonstrating what Gatsby can do.",author:"boramkim"}}}}},166:function(t,e,a){"use strict";a(167);var n=a(7),i=a.n(n),o=a(0),r=a.n(o),l=a(161),c=a(158),p=a(160),s=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){var t=this.props.className,e=c.a.header.withConfig({componentId:"sc-1ahigr0-0"})(["padding-top:60px;&.fixed{position:fixed;top:0;right:0;left:0;z-index:999;}@media (max-width:414px){background-color:#fff;&.container{padding:25px 35px;}}"]),a=c.a.nav.withConfig({componentId:"sc-1ahigr0-1"})(["float:right;height:30px;@media (max-width:414px){a{font-size:18px;}}"]),n=Object(c.a)(p.a).withConfig({componentId:"sc-1ahigr0-2"})(["display:block;float:left;margin-left:20px;padding:5px;font-size:15px;font-weight:100;color:inherit;text-decoration:none;box-shadow:none;&:hover{color:#000;}&.on{position:relative;font-weight:400;color:#111;svg{stroke-width:1.5px;}}"]),i=c.a.h1.withConfig({componentId:"sc-1ahigr0-3"})(["display:block;float:left;a{margin-left:0;}@media (max-width:414px){a{svg{width:22px;height:22px;}&.on{svg{stroke-width:1.5px;}}}}"]),o=c.a.a.withConfig({componentId:"sc-1ahigr0-4"})(["display:block;float:left;margin-left:20px;padding:5px;font-family:'Noto Sans KR',san-serif;fill:#777;text-decoration:none;svg{display:block;vertical-align:middle}&:hover{fill:#000;}"]);return r.a.createElement(e,{className:"container clear "+t},r.a.createElement(l.a,{text:"Boram Kim"}),r.a.createElement(i,{id:"logo"},r.a.createElement(n,{to:"/",className:"logo",activeClassName:"on"},r.a.createElement("svg",{width:"18px",height:"18px",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 25 25",style:{enableBackground:"new 0 0 25 25",stroke:"#111",fill:"none"},xmlSpace:"preserve"},r.a.createElement("g",null,r.a.createElement("path",{d:"M7.6,22.8c-0.5,0-1-0.1-1.5-0.2c-1.4-0.4-2.4-1.1-2.8-2.1c-0.3-0.8-0.2-1.8,0.2-2.9c0.7-1.8,3.7-5.1,5.9-6.7 c-0.1,0-0.1,0.1-0.2,0.1c-1.4,0.6-3.6,1.5-5.1,0.9c-0.7-0.3-1.3-0.9-1.6-1.8c-1.1-2.9-0.4-5.1,2-6.7c1.3-0.8,2.7-1,3.9-0.6 c1.4,0.5,2.4,1.9,2.9,3.7c0,0.1,0,0.1-0.1,0.2c-0.1,0-0.1,0-0.2-0.1c-0.4-1.7-1.4-3-2.7-3.5C7.2,2.5,5.9,2.7,4.7,3.5 C2.4,5,1.7,7.2,2.7,10c0.3,0.8,0.8,1.4,1.5,1.7c1.5,0.6,3.6-0.3,4.9-0.9c0.6-0.3,1.1-0.5,1.4-0.5c0.1,0,0.1,0,0.1,0.1 c0,0.1,0,0.1-0.1,0.1c-2.1,1-6,5.1-6.8,7.2c-0.4,1.1-0.5,2-0.2,2.7c0.4,0.9,1.3,1.6,2.6,2c1.7,0.4,4,0.1,5.2-1.5 c0.6-0.9,0.8-2.1,0.9-3.2c0.1-1.2,0.2-2.4,0.2-3.5c0.1-2,0.1-4.1,0.6-6.1c0.3-1.5,0.8-2.7,1.6-3.5l0,0c0.8-1,2.2-2.6,4.6-2.3 c1.7,0.2,3.2,1.6,3.6,3.3c0.4,1.7-0.3,3.3-1.8,4.4c-1.3,0.9-3.1,0.8-4.6,0.8c-0.8,0-1.7,0-2.3,0.1c3.1,2.1,6.5,6.4,7.8,10 c0,0.1,0,0.1-0.1,0.2c-0.1,0-0.1,0-0.2-0.1c-1.4-3.6-4.9-8-7.9-10c0,0-0.1-0.1-0.1-0.1c0,0,0-0.1,0.1-0.1c0.7-0.2,1.6-0.2,2.6-0.2 c1.5,0,3.2,0.1,4.5-0.8c1.5-1,2.1-2.5,1.7-4.1c-0.4-1.7-1.8-2.9-3.4-3.1c-2.3-0.3-3.6,1.2-4.4,2.2l0,0c-0.7,0.8-1.2,1.9-1.5,3.4 c-0.4,2-0.5,4-0.6,6c0,1.2-0.1,2.4-0.2,3.6c-0.1,1.1-0.3,2.3-1,3.3C10.6,22.3,9,22.8,7.6,22.8z"}))))),r.a.createElement(a,null,r.a.createElement(n,{to:"/dev",className:"nav-item",activeClassName:"on",partiallyActive:!0},"dev"),r.a.createElement(n,{to:"/prj",className:"nav-item",activeClassName:"on",partiallyActive:!0},"prj"),r.a.createElement(o,{href:"https://github.com/boramyy",className:["nav-item","link"],target:"blank"},r.a.createElement("svg",{viewBox:"0 0 32 32",width:"16",height:"16"},r.a.createElement("path",{d:"M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"}))),r.a.createElement(o,{href:"mailto:boramyyo@gmail.com",className:["nav-item","link"]},r.a.createElement("svg",{viewBox:"0 0 14 16",width:"14",height:"16"},r.a.createElement("path",{fillRule:"evenodd",d:"M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"})))))},e}(r.a.Component),m=function(t){function e(){return t.apply(this,arguments)||this}i()(e,t);var a=e.prototype;return a.componentDidMount=function(){window.document.documentElement.classList.remove("scrollSmooth")},a.render=function(){var t=this.props,e=t.children,a=t.className,n=c.a.main.withConfig({componentId:"q2ro87-0"})(["display:block;"]),i=c.a.footer.withConfig({componentId:"q2ro87-1"})(["padding-bottom:35px;font-size:12px;text-align:right;&.fixed{position:fixed;right:0;bottom:0;}"]);return r.a.createElement("div",{className:this.props.scrollSmooth?"scroll-smooth":""},r.a.createElement(s,{className:this.props.fixed?"fixed":""}),r.a.createElement(n,{className:a},e),r.a.createElement(i,{className:"container"+(this.props.fixed?" fixed":"")},"Copyright 2019. boramkim All rights reserved."))},e}(r.a.Component);e.a=m}}]);
//# sourceMappingURL=component---src-templates-dev-post-js-c2eb42c98e037fa4a231.js.map