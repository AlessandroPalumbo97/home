(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/Ken.14a9a590.png"},35:function(e,t,a){e.exports=a.p+"static/media/face0.d70d791e.png"},45:function(e,t,a){e.exports=a.p+"static/media/nervousCardx2.e835a5cd.png"},46:function(e,t,a){e.exports=a.p+"static/media/nervous_fighter.43f0a258.zip"},47:function(e,t,a){e.exports=a.p+"static/media/auroraCardx2.f737264c.png"},50:function(e,t,a){e.exports=a.p+"static/media/0.78cde3f4.png"},51:function(e,t,a){e.exports=a.p+"static/media/1.3f6774e5.png"},52:function(e,t,a){e.exports=a.p+"static/media/2.27124d78.png"},53:function(e,t,a){e.exports=a.p+"static/media/3.7fcb5550.png"},54:function(e,t,a){e.exports=a.p+"static/media/4.5fa128e7.png"},55:function(e,t,a){e.exports=a.p+"static/media/face1.392a9416.png"},57:function(e,t,a){e.exports=a.p+"static/media/draw1.a6e6eaf6.png"},58:function(e,t,a){e.exports=a.p+"static/media/draw2.33bc2cf0.png"},59:function(e,t,a){e.exports=a.p+"static/media/building1.8e9ee3f5.jpeg"},60:function(e,t,a){e.exports=a.p+"static/media/building2.e089af28.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/render1.856fc021.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/aurora.4a5a6e9e.png"},63:function(e,t,a){e.exports=a.p+"static/media/AP_logo_hot.8ff41fce.svg"},66:function(e,t,a){e.exports=a(85)},71:function(e,t,a){},72:function(e,t,a){},78:function(e,t,a){e.exports=a.p+"static/media/render2.16f2ae0e.jpg"},85:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(23),r=a.n(l),o=(a(71),a(11)),s=a(14),c=a(13),m=a(12),u=a(24),d=a(9),p=a(16),f=a(26),b=a(65),h=(a(72),a(42)),g=a(10),E=a(6),v=a(43),y=a.n(v);var N=function(){return i.a.createElement("footer",null,i.a.createElement(p.a,{id:"my-footer",fluid:!0},i.a.createElement(g.a,{className:"border-top text-center text-light pt-4 pb-4"},i.a.createElement(E.a,{className:"p-0 mt-auto mb-auto font-reross-quad ",md:4,sm:12},i.a.createElement("h4",{className:"my-auto"},"Alessandro Palumbo")),i.a.createElement(E.a,{className:"p-0 mt-auto mb-auto",md:4,sm:12}),i.a.createElement(E.a,{className:"p-0 mt-auto mb-auto font-novel-sans",md:4,sm:12},i.a.createElement("span",null,"You can find me at: "),i.a.createElement("br",null),i.a.createElement(y.a,{email:"mr.alessandropalumbo@gmail.com",obfuscate:!0},"mr.alessandropalumbo@gmail.com")))))},x=a(44),k=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isMobile:window.innerWidth<1200},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){e.setState({isMobile:window.innerWidth<1200})}),!1)}},{key:"render",value:function(){return i.a.createElement(x.a,{className:"bg-transparent jumbotron-fluid p-0"},i.a.createElement(p.a,{fluid:!0},i.a.createElement(g.a,{className:"justify-content-center pt-5 pb-2"},i.a.createElement(E.a,{md:8,sm:12},this.props.title&&i.a.createElement("h1",{className:"title font-reross-quad"},this.props.title),this.props.subTitle&&i.a.createElement("h3",{className:"subtitle"},this.props.subTitle),this.props.text&&i.a.createElement("h3",{className:"lead mt-4 font-weight-light"},this.props.text)))))}}]),a}(i.a.Component),S=a(22),q=a(39);var w=function(e){var t=Object(q.b)({opacity:1,from:{opacity:0}});return console.log(e.id),i.a.createElement(q.a.div,{className:"my-card-info",style:t},i.a.createElement("p",{className:"my-card-title font-reross-quad"},e.title),i.a.createElement("p",{className:"my-card-sub-title"},e.subTitle),e.downloadable?i.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"Download"):i.a.createElement("a",{href:e.link,rel:"noopener noreferrer"},"View"))};var j=function(e){return i.a.createElement("div",{className:"d-inline-block my-card",onClick:function(t){return e.click(e.item)}},i.a.createElement("img",{className:"my-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&i.a.createElement(w,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link,downloadable:e.item.downloadable}))},R=a(45),T=a.n(R),O=a(46),C=a.n(O),B=a(47),L=a.n(B),A=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(S.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return i.a.createElement(j,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"Nervous Fighter!",subTitle:"My BETA version of a stickman fighter",imgSrc:T.a,link:C.a,selected:!1,downloadable:!0},{id:1,title:"Aurora",subTitle:"3D printed robot dog!",imgSrc:L.a,link:"/projects/aurora",selected:!1,downloadable:!1}]},n}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement(g.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(i.a.Component);var M=function(e){return i.a.createElement("div",null,i.a.createElement(k,{title:e.title,subTitle:e.subTitle,text:e.text}),i.a.createElement(A,null))};var P=function(e){return i.a.createElement(p.a,{fluid:!0},i.a.createElement(g.a,{className:"justify-content-center"},i.a.createElement(E.a,{md:8},e.children)))};var F=function(e){return i.a.createElement("div",null,i.a.createElement(k,{title:e.title,subTitle:e.subTitle}),i.a.createElement(P,null,i.a.createElement("p",null,'My name is Alessandro Palumbo, but people use to call me just Alex or "P"'),i.a.createElement("p",null,"Need a bit more time to fill this page sorry \ud83d\ude05")))},D=a(48),H=a.n(D),I=a(49),U=a(56),W=a(34),_=a.n(W),z=a(50),J=a.n(z),V=a(51),Y=a.n(V),K=a(52),$=a.n(K),G=a(53),Q=a.n(G),X=a(54),Z=a.n(X),ee=a(35),te=a.n(ee),ae=a(55),ne=a.n(ae),ie=i.a.Component,le=i.a.createElement(I.a,{icon:U.a}),re=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).rollBoth=function(){n.rollFace(),n.rollBody()},n.rollFace=function(){n.setState({rolling:!0}),setTimeout((function(){n.setState({rolling:!1})}),700);var e=n.triggerFaceSlotRotation(n.faceSlotRef.current);n.setState({face:e})},n.triggerFaceSlotRotation=function(e){var t=e.children,i=n.avoidFaceDuplicateOption();console.log(i);var l,r=t[i];return l=-r.offsetTop,e.style.top="".concat(l,"px"),a.defaultProps.faces[i]},n.avoidFaceDuplicateOption=function(){for(var e=Math.floor(Math.random()*a.defaultProps.faces.length);e===n.state.lastFaceOption;)e=Math.floor(Math.random()*a.defaultProps.faces.length);return n.setState({lastFaceOption:e}),setTimeout((function(){"block"!==n.captureBtnRef.current.style.display&&(n.captureBtnRef.current.style.display="block",n.captureLabelRef.current.style.display="block")}),600),e},n.rollBody=function(){n.setState({rolling:!0}),setTimeout((function(){n.setState({rolling:!1})}),700);var e=n.triggerBodySlotRotation(n.bodySlotRef.current);n.setState({slot:e})},n.triggerBodySlotRotation=function(e){var t,i=e.children,l=n.avoidBodyDuplicateOption(),r=i[l];return t=2-r.offsetTop,e.style.top="".concat(t,"px"),a.defaultProps.dresses[l]},n.avoidBodyDuplicateOption=function(){for(var e=Math.floor(Math.random()*a.defaultProps.dresses.length);e===n.state.lastOption||0===e;)e=Math.floor(Math.random()*a.defaultProps.dresses.length);return n.setState({lastOption:e}),setTimeout((function(){n.setState({name:a.defaultProps.names[e]}),"block"!==n.captureBtnRef.current.style.display&&(n.captureBtnRef.current.style.display="block",n.captureLabelRef.current.style.display="block")}),600),e},n.screenshot=function(){n.screenshotNameRef.current.style.display="block";var e=document.getElementById("capture");H()(e,{y:250}).then((function(e){null!=n.state.name?n.saveAs(e.toDataURL("image/png"),n.state.name+".png"):n.saveAs(e.toDataURL("image/png"),"Salvini.png"),window.location.reload()}))},n.saveAs=function(e,t){var a=document.createElement("a");"string"===typeof a.download?(a.href=e,a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a)):window.open(e)},n.state={slot:_.a,face:te.a,name:null,rolling:!1,lastBodyOption:null,lastFaceOption:null},n.faceSlotRef=i.a.createRef(),n.bodySlotRef=i.a.createRef(),n.captureBtnRef=i.a.createRef(),n.captureLabelRef=i.a.createRef(),n.screenshotNameRef=i.a.createRef(),n}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"SlotMachine text-center"},i.a.createElement(g.a,null,i.a.createElement(E.a,{md:6,sm:12},i.a.createElement("div",{id:"capture"},i.a.createElement("div",{id:"face-slot"},i.a.createElement("section",{className:"face-section"},i.a.createElement("div",{className:"slot-container",ref:this.faceSlotRef},a.defaultProps.faces.map((function(e,t){return i.a.createElement("div",{key:t},i.a.createElement("img",{className:"salvini-face",src:e,alt:"salvini's face"}))}))))),i.a.createElement("div",{id:"body-slot"},i.a.createElement("section",{className:"body-section"},i.a.createElement("div",{className:"slot-container",ref:this.bodySlotRef},a.defaultProps.dresses.map((function(e,t){return i.a.createElement("div",{key:t},i.a.createElement("img",{className:"salvini-dress",src:e,alt:"salvini's dress"}))}))))),i.a.createElement("h1",{id:"screenshot-name",className:"display-3",ref:this.screenshotNameRef},this.state.name))),i.a.createElement(E.a,{className:"my-auto font-weight-bolder",md:6,sm:12},i.a.createElement("h2",{className:"my-4 display-4"},this.state.name),i.a.createElement("div",{className:this.state.rolling?"roll-face mx-auto my-2":"roll-face rolling mx-auto my-2",onClick:this.state.rolling?void 0:this.rollFace,disabled:this.state.rolling},this.state.rolling?"Rolling...":"ROLL FACE"),i.a.createElement("div",{className:this.state.rolling?"roll-body mx-auto my-2":"roll-body rolling mx-auto my-2",onClick:this.state.rolling?void 0:this.rollBody,disabled:this.state.rolling},this.state.rolling?"Rolling...":"ROLL BODY"),i.a.createElement("div",{className:this.state.rolling?"roll mx-auto my-2":"roll rolling mx-auto my-2",onClick:this.state.rolling?void 0:this.rollBoth,disabled:this.state.rolling},this.state.rolling?"Rolling...":"ROLL BOTH"),i.a.createElement("div",{className:"screenshot mx-auto mt-4",onClick:this.screenshot,ref:this.captureBtnRef,disabled:this.state.rolling,target:"_self"},"SAVE HIM ",le),i.a.createElement("p",{ref:this.captureLabelRef,className:"screenshot-label text-muted"},"Desktop only"))))}}]),a}(ie);re.defaultProps={faces:[te.a,ne.a],dresses:[_.a,J.a,Y.a,$.a,Q.a,Z.a],names:["","Spock-vini","S.W.A.Tvini","Salvini carramba","Salvini ufficiale","Salvini pulotto"]};var oe=re;var se=function(e){return i.a.createElement(p.a,{fluid:!0},i.a.createElement(g.a,null,i.a.createElement(E.a,{className:"bg-danger flag",sm:12,md:4}),i.a.createElement(E.a,{className:"bg-light flag",sm:12,md:4}),i.a.createElement(E.a,{className:"bg-success flag",sm:12,md:4})),i.a.createElement(k,{title:e.title,subTitle:e.subTitle}),i.a.createElement(oe,null))},ce=a(57),me=a.n(ce),ue=a(58),de=a.n(ue),pe=a(59),fe=a.n(pe),be=a(60),he=a.n(be),ge=a(61),Ee=a.n(ge),ve=(a(78),a(62)),ye=a.n(ve);var Ne=function(e){return i.a.createElement("div",null,i.a.createElement(k,{title:e.title,subTitle:e.subTitle,text:e.text}),i.a.createElement(g.a,{className:"justify-content-right my-5"},i.a.createElement(E.a,{sm:12,md:8,className:"p-0"},i.a.createElement("img",{className:"aurora-pic",src:me.a,alt:"aurora\\'s draw 1"})),i.a.createElement(E.a,{sm:12,md:4,className:"p-4 my-auto"},i.a.createElement("p",null,"First thoughts were about the lonliness, the feeling of solitude..."),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),i.a.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."))),i.a.createElement(g.a,{className:"justify-content-center my-5"},i.a.createElement(E.a,{sm:12,md:4,className:"p-4 my-auto"},i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),i.a.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.")),i.a.createElement(E.a,{sm:12,md:8,className:"p-0"},i.a.createElement("img",{className:"aurora-pic",src:de.a,alt:"aurora\\'s draw 2"}))),i.a.createElement(g.a,{className:"my-5"},i.a.createElement(E.a,{className:"p-0",sm:12,md:6},i.a.createElement("img",{className:"aurora-pic d-inline-block",src:fe.a,alt:"aurora\\'s build process 1"})),i.a.createElement(E.a,{className:"p-0",sm:12,md:6},i.a.createElement("img",{className:"aurora-pic d-inline-block",src:he.a,alt:"aurora\\'s build process 2"}))),i.a.createElement(g.a,{className:"justify-content-center my-5"},i.a.createElement(E.a,{sm:12,md:8,className:"p-0"},i.a.createElement("img",{className:"aurora-pic",src:Ee.a,alt:"aurora\\'s render 1"})),i.a.createElement(E.a,{sm:12,md:4,className:"p-4 my-auto"},i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),i.a.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."))),i.a.createElement(g.a,{className:"justify-content-center mt-5"},i.a.createElement(E.a,{sm:12,md:4,className:"p-4 my-auto"},i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),i.a.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.")),i.a.createElement(E.a,{sm:12,md:8,className:"p-0"},i.a.createElement("img",{className:"aurora-pic",src:ye.a,alt:"aurora\\'s render 2"}))))},xe=a(63),ke=a.n(xe),Se=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={title:"Alessandro Palumbo",bgTypes:["cobweb","circle","square"],navClass:["font-reross-quad border-bottom","font-reross-quad border-bottom navbar-dark","font-reross-quad border-bottom"],navLinkClass:["nav-link","nav-link text-light","nav-link"],headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Salvinification",path:"/salvinification"},{title:"Aurora",path:"/projects/aurora"}],home:{title:"Alessandro Palumbo",subtitle:"Welcome to my crazy place \ud83e\udd2a",text:"Check out my projects below, contact me, or just have fun playing Salvinification"},about:{title:"Hi there!",subtitle:"Nice to meet you \ud83d\ude01"},salvinification:{title:"Salvinification 2.0",subTitle:"Have fun changing our favourite superhero's dresses"},aurora:{title:"Aurora",subTitle:"Aurora is a robotic dog, thought and originated from scratch"}},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.title="Alessandro Palumbo"}},{key:"render",value:function(){var e=this,t=Math.floor(Math.random()*this.state.bgTypes.length),a=this.state.bgTypes[t];return i.a.createElement(u.a,null,i.a.createElement(p.a,{id:"my-main-wrapper",className:"p-0",fluid:!0},i.a.createElement(f.a,{className:this.state.navClass[t],bg:"transparent",expand:"md"},i.a.createElement(f.a.Brand,null,i.a.createElement(u.b,{to:"/"},i.a.createElement("img",{id:"nav-logo",src:ke.a,alt:"Il mio logo"}))),i.a.createElement(f.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),i.a.createElement(f.a.Collapse,{id:"navbar-toggle"},i.a.createElement(b.a,{className:"ml-auto"},i.a.createElement(u.b,{className:this.state.navLinkClass[t],to:"/"},"Home"),i.a.createElement(u.b,{className:this.state.navLinkClass[t],to:"/about"},"About"),i.a.createElement(u.b,{className:this.state.navLinkClass[t],to:"/salvinification"},"Salvinification"))),i.a.createElement(h.a,{color:"#000000",type:a,num:15,bg:!0})),i.a.createElement(d.a,{path:"/",exact:!0,render:function(){return i.a.createElement(M,{title:e.state.home.title,subTitle:e.state.home.subtitle,text:e.state.home.text})}}),i.a.createElement(d.a,{path:"/about",exact:!0,render:function(){return i.a.createElement(F,{title:e.state.about.title,subTitle:e.state.about.subtitle})}}),i.a.createElement(d.a,{path:"/salvinification",exact:!0,render:function(){return i.a.createElement(se,{title:e.state.salvinification.title,subTitle:e.state.salvinification.subTitle})}}),i.a.createElement(d.a,{path:"/projects/aurora",exact:!0,render:function(){return i.a.createElement(Ne,{title:e.state.aurora.title,subTitle:e.state.aurora.subTitle,text:e.state.aurora.text})}})),i.a.createElement(N,{fluid:!0}))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(84);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.d6c72dbc.chunk.js.map