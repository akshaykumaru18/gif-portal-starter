(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,n){},108:function(e,t,n){},112:function(e,t){},113:function(e,t){},140:function(e,t){},141:function(e,t){},164:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n.n(a),c=n(92),o=n.n(c),s=(n(104),n(1)),i=n.n(s),u=n(3),l=n(9),m=n(93),p=n.n(m),f=(n(108),n(48)),d=n(7),b=n(24),g=n(97),y="https://twitter.com/".concat("akshuAkshay18"),v=b.d.SystemProgram,w=(b.d.Keypair,Object.values(g._keypair.secretKey)),h=new Uint8Array(w),k=b.d.Keypair.fromSecretKey(h),x=new d.PublicKey(f.metadata.address),E=Object(d.clusterApiUrl)("devnet"),S="processed",K=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),s=Object(l.a)(o,2),m=s[0],g=s[1],w=Object(a.useState)([]),h=Object(l.a)(w,2),K=h[0],N=h[1],O=function(){var e=Object(u.a)(i.a.mark(function e(){var t,n,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=window,!(n=t.solana)){e.next=11;break}if(!n.isPhantom){e.next=9;break}return e.next=6,n.connect({onlyIfTrusted:!0});case 6:a=e.sent,console.log("Connected with Public Key:",a.publicKey.toString()),c(a.publicKey.toString());case 9:e.next=12;break;case 11:alert("Go get your phantom wallet");case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}},e,null,[[0,14]])}));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)(function(){var e=function(){var e=Object(u.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return window.addEventListener("load",e),function(){return window.removeEventListener("load",e)}},[]);var j=function(){var e=Object(u.a)(i.a.mark(function e(){var t,n,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=C(),n=new b.a(f,x,t),e.next=5,n.account.baseAccount.fetch(k.publicKey);case 5:a=e.sent,console.log("Got the account",a),N(a.gifList),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error in getGifList: ",e.t0),N(null);case 14:case"end":return e.stop()}},e,null,[[0,10]])}));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)(function(){n&&(console.log("Fetching GIF list..."),j())},[n]);var A=function(){var e=Object(u.a)(i.a.mark(function e(){var t,n,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window,!(n=t.solana)){e.next=7;break}return e.next=4,n.connect();case 4:a=e.sent,console.log("Connected with Public Key:",a.publicKey.toString()),c(a.publicKey.toString());case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),G=function(e){var t=e.target.value;g(t)},I=function(){var e=Object(u.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==m.length){e.next=3;break}return console.log("No gif link given!"),e.abrupt("return");case 3:return g(""),console.log("Gif link:",m),e.prev=5,t=C(),n=new b.a(f,x,t),e.next=10,n.rpc.addGif(m,{accounts:{baseAccount:k.publicKey,user:t.wallet.publicKey}});case 10:return console.log("GIF successfully sent to program",m),e.next=13,j();case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.log("Error sending GIF:",e.t0);case 18:case"end":return e.stop()}},e,null,[[5,15]])}));return function(){return e.apply(this,arguments)}}(),C=function(){var e=new d.Connection(E,S);return new b.b(e,window.solana,S)},L=function(){var e=Object(u.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=C(),n=new b.a(f,x,t),console.log("ping"),e.next=6,n.rpc.startStuffOff({accounts:{baseAccount:k.publicKey,user:t.wallet.publicKey,systemProgram:v.programId},signers:[k]});case 6:return console.log("Created a new BaseAccount w/ address:",k.publicKey.toString()),e.next=9,j();case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Error creating BaseAccount account:",e.t0);case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:n?"authed-container":"container"},r.a.createElement("div",{className:"header-container"},r.a.createElement("p",{className:"header"},"\ud83d\uddbc Meme Arena"),r.a.createElement("p",{className:"header"},r.a.createElement("u",null,"Make community laugh & earn ")),r.a.createElement("p",{className:"sub-text"},"Show you creativity, by making fun memes and earn for the laughs you get :)"),!n&&r.a.createElement("button",{className:"cta-button connect-wallet-button",onClick:A},"Connect to Wallet"),n&&(null===K?r.a.createElement("div",{className:"connected-container"},r.a.createElement("button",{className:"cta-button submit-gif-button",onClick:L},"Do One-Time Initialization For GIF Program Account")):r.a.createElement("div",{className:"connected-container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),I()}},r.a.createElement("input",{type:"text",placeholder:"Enter gif link!",value:m,onChange:G}),r.a.createElement("button",{type:"submit",className:"cta-button submit-gif-button"},"Submit")),r.a.createElement("div",{className:"gif-grid"},K.map(function(e,t){return r.a.createElement("div",{className:"gif-item",key:t},r.a.createElement("img",{src:e.gifLink}))}))))),r.a.createElement("div",{className:"footer-container"},r.a.createElement("img",{alt:"Twitter Logo",className:"twitter-logo",src:p.a}),r.a.createElement("a",{className:"footer-text",href:y,target:"_blank",rel:"noreferrer"},"built by @".concat("akshuAkshay18")))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root"))},48:function(e){e.exports={version:"0.1.0",name:"myepicproject",instructions:[{name:"startStuffOff",accounts:[{name:"baseAccount",isMut:!0,isSigner:!0},{name:"user",isMut:!0,isSigner:!0},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[]},{name:"addGif",accounts:[{name:"baseAccount",isMut:!0,isSigner:!1},{name:"user",isMut:!0,isSigner:!0}],args:[{name:"gifLink",type:"string"}]}],accounts:[{name:"BaseAccount",type:{kind:"struct",fields:[{name:"totalGifs",type:"u64"},{name:"gifList",type:{vec:{defined:"ItemStruct"}}}]}}],types:[{name:"ItemStruct",type:{kind:"struct",fields:[{name:"gifLink",type:"string"},{name:"userAddress",type:"publicKey"}]}}],metadata:{address:"A4isarDN655y4JXMvF3GCtx5WdgSeNpa9h5K3jy871py"}}},93:function(e,t,n){e.exports=n.p+"static/media/twitter-logo.5c97ee2a.svg"},97:function(e){e.exports={_keypair:{publicKey:{0:47,1:212,2:7,3:54,4:231,5:154,6:11,7:3,8:149,9:205,10:73,11:215,12:99,13:31,14:0,15:153,16:238,17:4,18:71,19:165,20:247,21:162,22:234,23:217,24:231,25:251,26:181,27:230,28:6,29:139,30:102,31:133},secretKey:{0:110,1:71,2:200,3:190,4:149,5:19,6:15,7:8,8:156,9:117,10:39,11:46,12:227,13:195,14:153,15:86,16:91,17:48,18:235,19:148,20:0,21:226,22:94,23:213,24:84,25:176,26:55,27:174,28:184,29:244,30:102,31:114,32:47,33:212,34:7,35:54,36:231,37:154,38:11,39:3,40:149,41:205,42:73,43:215,44:99,45:31,46:0,47:153,48:238,49:4,50:71,51:165,52:247,53:162,54:234,55:217,56:231,57:251,58:181,59:230,60:6,61:139,62:102,63:133}}}},99:function(e,t,n){e.exports=n(164)}},[[99,2,1]]]);
//# sourceMappingURL=main.cc02f19c.chunk.js.map