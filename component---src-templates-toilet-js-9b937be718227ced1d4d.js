(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(e,t,a){"use strict";a.r(t);a(147);var n=a(0),r=a.n(n),i=a(150),l=(a(35),a(7)),o=a.n(l),s=a(156),c=function(e){function t(t){var a;return(a=e.call(this,t)||this).copyText=function(e){return e.preventDefault(),a.refs.input.select(),document.execCommand("copy"),!1},a.state={url:"https://nelsontky.github.io/let-it-go/"+a.props.name.replace(/\s/g,"")},a}return o()(t,e),t.prototype.render=function(){var e=r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("h4",{style:{color:"white"}},"Share"),r.a.createElement("hr",{style:{border:"1px solid white"}}),"Love/Hate ",r.a.createElement("strong",null,this.props.name),"? Share your Let It Go experience on social media! ",r.a.createElement("br",null),"(psst... try not to look suspicious in the toilet with your phone ok?)",r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("form",{onSubmit:this.copyText},r.a.createElement("input",{ref:"input",type:"text",value:this.state.url,readOnly:!0}),r.a.createElement("input",{type:"submit",value:"Copy"})),r.a.createElement("iframe",{src:"https://www.facebook.com/plugins/share_button.php?href="+this.state.url+"&layout=button&size=small&width=58&height=20&appId",width:"60",height:"20",style:{border:"none",overflow:"hidden"},scrolling:"no",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media",title:"fb"}),r.a.createElement("iframe",{height:"20",width:"62",style:{border:"none",overflow:"hidden"},scrolling:"no",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media",src:"https://platform.twitter.com/widgets/tweet_button.html?url="+this.state.url,title:"tweet"})));return r.a.createElement(s.a,{content:e,trigger:"click",placement:"bottom",interactive:!0,arrow:!0},r.a.createElement("img",{style:{verticalAlign:"bottom"},src:"https://material.io/tools/icons/static/icons/twotone-share-24px.svg",alt:""}))},t}(r.a.Component),u=a(152),m=a(153),h=!0,p=(r.a.Component,a(149)),d=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=[];null!==this.props.maleYaw&&e.push({pitch:0,yaw:this.props.maleYaw,type:"info",text:"Male"}),null!==this.props.femaleYaw&&e.push({pitch:0,yaw:this.props.femaleYaw,type:"info",text:"Female"}),null!==this.props.handicappedYaw&&e.push({pitch:0,yaw:this.props.handicappedYaw,type:"info",text:"Handicapped"}),null!==this.props.waterCoolerYaw&&e.push({pitch:0,yaw:this.props.waterCoolerYaw,type:"info",text:"Water Cooler"}),window.pannellum.viewer("panorama",{type:"equirectangular",panorama:this.props.paranomaUrl,yaw:this.props.startingYaw,vaov:45,maxPitch:0,minPitch:0,autoLoad:!0,hotSpots:e})},a.render=function(){return r.a.createElement("div",null,r.a.createElement(p.Helmet,null,r.a.createElement("link",{rel:"stylesheet",href:"https://cdn.pannellum.org/2.4/pannellum.css"})),r.a.createElement("div",{id:"panorama",style:{width:"100%",height:200}}))},t}(r.a.Component),f=a(36),w=a.n(f),g=a(161);a(178);a(164),a(181);var v,y={apiKey:"AIzaSyAm31tTHPuaSkBR1Ff7pYAavUX6K1DlZ5g",authDomain:"let-it-go-ce90f.firebaseapp.com",databaseURL:"https://let-it-go-ce90f.firebaseio.com",projectId:"let-it-go-ce90f",storageBucket:"let-it-go-ce90f.appspot.com",messagingSenderId:"243397254091",appId:"1:243397254091:web:bede1631a9ce7f43"},E=function(){if(v)return v;g.initializeApp(y),this.db=g.firestore(),this.auth=g.auth(),this.firebase=g,v=this},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=function(){a.state.review.length>80?a.setState({review:a.props.review.slice(0,80)}):a.setState({review:a.props.review})},a.state={review:a.props.review.slice(0,80),isTooLong:a.props.review.length>80},a}return o()(t,e),t.prototype.render=function(){return r.a.createElement("div",null,this.props.review.length>80&&this.state.review.length<=80?this.state.review+"...":this.state.review,this.state.isTooLong&&r.a.createElement("div",null,r.a.createElement("button",{style:{backgroundColor:"transparent",border:"none",cursor:"pointer",textDecoration:"underline",display:"inline",margin:"0",padding:"0",color:"#1ca086",fontSize:"60%"},onClick:this.onClick},this.state.review.length>80?"Show less":"Show more")))},t}(r.a.Component),S=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={reviews:[],isSignedIn:!1,myReview:""},a.handleChange=a.handleChange.bind(w()(a)),a.handleSubmit=a.handleSubmit.bind(w()(a)),a}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.firebase=new E,this.db=this.firebase.db,this.auth=this.firebase.auth,this.ui=this.firebase.ui,this.db.collection("toilets").doc(this.props.name).onSnapshot(function(t){e.setState({reviews:t.data().reviews})}),this.uiConfig={signInOptions:[this.firebase.firebase.auth.GoogleAuthProvider.PROVIDER_ID],signInFlow:"popup",callbacks:{signInSuccessWithAuthResult:function(){return!1}}},this.ui.start("#firebaseui-auth-container",this.uiConfig),this.auth.onAuthStateChanged(function(t){e.setState({isSignedIn:!!t})})},a.handleChange=function(e){this.setState({myReview:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),this.db.collection("toilets").doc(this.props.name).set({reviews:this.firebase.firebase.firestore.FieldValue.arrayUnion({name:this.auth.currentUser.displayName,review:this.state.myReview,date:new Date})},{merge:!0}),this.setState({myReview:""})},a.render=function(){var e=this;return r.a.createElement("div",null,r.a.createElement(p.Helmet,null,r.a.createElement("link",{type:"text/css",rel:"stylesheet",href:"https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css"})),r.a.createElement("h4",null,"Reviews"),!this.state.isSignedIn&&r.a.createElement("div",null,r.a.createElement("div",{id:"firebaseui-auth-container"}),r.a.createElement("p",{style:{fontSize:"0.7em",color:"gray",textAlign:"center"}},"Sign in with Google to post a review!")),this.state.isSignedIn&&r.a.createElement("div",null,r.a.createElement("p",null,"Welcome ",this.auth.currentUser.displayName,"! You are now signed-in!"," ",r.a.createElement("button",{onClick:function(){e.auth.signOut(),window.location.reload()}},"Sign-out")),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Review:",r.a.createElement("textarea",{style:{width:"100%",resize:"none",height:"75px"},value:this.state.myReview,onChange:this.handleChange})),r.a.createElement("input",{type:"submit",value:"Submit",disabled:""===this.state.myReview.trim()}))),r.a.createElement("table",{style:{tableLayout:"fixed"}},r.a.createElement("tbody",null,0===this.state.reviews.length?r.a.createElement("tr",{key:1},r.a.createElement("td",null,r.a.createElement("p",null,"No reviews (yet!)"))):this.state.reviews.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement("strong",{style:{color:"blue",fontSize:"80%"}},e.name),r.a.createElement("span",{style:{color:"gray",fontSize:"80%"}}," • "+e.date.toDate().toLocaleString("default",{day:"numeric",month:"long",year:"numeric",hour:"numeric",minute:"numeric"})),r.a.createElement("br",null),r.a.createElement(b,{review:e.review})))}).reverse())))},t}(r.a.Component);a.d(t,"query",function(){return x});t.default=function(e){var t=e.data,a=t.toilets.name,n=(t.toilets.lat,t.toilets.lon,t.toilets.paranoma.url),l=t.toilets.paranoma.startingYaw,o=t.toilets.paranoma.maleYaw,s=t.toilets.paranoma.femaleYaw,m=t.toilets.paranoma.handicappedYaw,h=t.toilets.paranoma.waterCoolerYaw;function f(e){return{textDecoration:e(t.toilets)?"":"line-through",color:e(t.toilets)?"":"gray"}}return r.a.createElement(i.a,{main:!1},r.a.createElement(p.Helmet,null,r.a.createElement("title",null,a)),r.a.createElement("h3",null,a),r.a.createElement(c,{name:a}),r.a.createElement(d,{name:a,paranomaUrl:n,startingYaw:l,maleYaw:o,femaleYaw:s,handicappedYaw:m,waterCoolerYaw:h}),r.a.createElement("h4",null,"At a glance"),r.a.createElement("ul",{style:{listStyle:"none"}},r.a.createElement("li",{style:f(u.d)},r.a.createElement("i",{className:"em-svg em-man-raising-hand"}),"Has Male toilet"),r.a.createElement("li",{style:f(u.b)},r.a.createElement("i",{className:"em-svg em-woman-raising-hand"}),"Has Female toilet"),r.a.createElement("li",{style:f(u.c)},r.a.createElement("i",{className:"em-svg em-wheelchair"}),u.c(t.toilets)?u.e(t.toilets)?"Is handicapped accessible (Has seperate handicapped toilet)":"Is handicapped accessible (Handicapped cubicle inside toilet)":"Is handicapped accessible"),r.a.createElement("li",{style:f(u.i)},r.a.createElement("i",{className:"em-svg em-potable_water"}),"Has water cooler"),r.a.createElement("li",{style:f(u.h)},r.a.createElement("i",{className:"em-svg em-shower"}),"Has shower heads"),r.a.createElement("li",{style:f(u.g)},r.a.createElement("i",{className:"em-svg em-sweat_drops"}),"Has hose")),r.a.createElement(S,{name:a}))};var x="228515960"},145:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},146:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(156);t.a=function(e){return r.a.createElement(i.a,{content:e.content,arrow:!0,trigger:"click",placement:"bottom",interactive:!0},r.a.createElement("img",{style:{verticalAlign:"middle"},src:"https://material.io/tools/icons/static/icons/baseline-help_outline-24px.svg",alt:""}))}},148:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(33),s=a.n(o);a.d(t,"a",function(){return s.a});a(145),r.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func},150:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(148);t.a=function(e){return r.a.createElement("div",{style:{margin:"3rem auto",maxWidth:650,padding:"0 1rem"}},!e.main&&r.a.createElement(i.a,{to:"/"},"Back"),e.main&&r.a.createElement("h1",null,"Let It Go"),e.children)}},151:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(58),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},152:function(e,t,a){"use strict";a.d(t,"f",function(){return n}),a.d(t,"d",function(){return i}),a.d(t,"b",function(){return l}),a.d(t,"c",function(){return o}),a.d(t,"e",function(){return s}),a.d(t,"g",function(){return c}),a.d(t,"h",function(){return u}),a.d(t,"i",function(){return m}),a.d(t,"a",function(){return r});a(157),a(159);function n(e,t,a,n){if(null===e||null===a||null===t||null===n)return"Location not available";var r=(a-e)*(Math.PI/180),i=(n-t)*(Math.PI/180),l=Math.sin(r/2)*Math.sin(r/2)+Math.cos(e*(Math.PI/180))*Math.cos(a*(Math.PI/180))*Math.sin(i/2)*Math.sin(i/2),o=6371e3*(2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l)));return Math.round(o)}function r(e){return Number.isInteger(e)?e+"m":e}function i(e){return null!=e.paranoma.maleYaw}function l(e){return null!=e.paranoma.femaleYaw}function o(e){return e.facilities.handicapped}function s(e){return null!=e.paranoma.handicappedYaw}function c(e){return e.facilities.hose}function u(e){return e.facilities.showerHeads}function m(e){return null!=e.paranoma.waterCoolerYaw}},153:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(146),l=r.a.createElement("div",{style:{textAlign:"left"}},"Check that you have:",r.a.createElement("ul",null,r.a.createElement("li",null,"Enabled your device's GPS settings",r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{style:{textShadow:"none"},href:"https://support.google.com/accounts/answer/3467281",rel:"noopener noreferrer",target:"_blank"},"Android")),r.a.createElement("li",null,r.a.createElement("a",{style:{textShadow:"none"},href:"https://support.apple.com/en-us/HT207092",rel:"noopener noreferrer",target:"_blank"},"iOS")),r.a.createElement("li",null,"Reload this page after enabling GPS settings"))),r.a.createElement("li",null,"Allowed your browser and this website the neccessary permissions to read your location",r.a.createElement("ul",null,r.a.createElement("li",null,"Press allow when a similar prompt as below appears"),r.a.createElement("li",null,"If such a prompt does not appear, reload the page")))),r.a.createElement("img",{src:"https://raw.githubusercontent.com/nelsontky/let-it-go/master/assets/misc/locationHelp.png",alt:""}));t.a=function(){return r.a.createElement("p",null,"Location not detected ",r.a.createElement(i.a,{content:l}))}}}]);
//# sourceMappingURL=component---src-templates-toilet-js-9b937be718227ced1d4d.js.map