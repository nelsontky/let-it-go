(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(e,t,a){"use strict";a.r(t);a(148);var n=a(0),r=a.n(n),i=a(150),s=a(7),l=a.n(s),o=a(151),c=a(146),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={localWindow:null},a}l()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setState({localWindow:window})},a.render=function(){var e=this;return null==this.state.localWindow?r.a.createElement(o.a,{to:"/"},"Back"):null==this.state.localWindow.history.state?r.a.createElement(o.a,{to:"/"},"Back"):r.a.createElement("button",{onClick:function(){return e.state.localWindow.history.back()},style:c.b("#1ca086","100%")},"Back")},t}(r.a.Component),h=(a(36),a(157)),p=function(e){function t(t){var a;return(a=e.call(this,t)||this).copyText=function(e){return e.preventDefault(),a.refs.input.select(),document.execCommand("copy"),!1},a.state={url:"https://nelsontky.github.io/let-it-go/"+a.props.name.replace(/\s/g,"")},a}return l()(t,e),t.prototype.render=function(){var e=r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("h4",{style:{color:"white"}},"Share"),r.a.createElement("hr",{style:{border:"1px solid white"}}),"Love/Hate ",r.a.createElement("strong",null,this.props.name),"? Share your Let It Go experience on social media! ",r.a.createElement("br",null),"(psst... try not to look suspicious in the toilet with your phone ok?)",r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("form",{onSubmit:this.copyText},r.a.createElement("input",{ref:"input",type:"text",value:this.state.url,readOnly:!0}),r.a.createElement("input",{type:"submit",value:"Copy"})),r.a.createElement("iframe",{src:"https://www.facebook.com/plugins/share_button.php?href="+this.state.url+"&layout=button&size=small&width=58&height=20&appId",width:"60",height:"20",style:{border:"none",overflow:"hidden"},scrolling:"no",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media",title:"fb"}),r.a.createElement("iframe",{height:"20",width:"62",style:{border:"none",overflow:"hidden"},scrolling:"no",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media",src:"https://platform.twitter.com/widgets/tweet_button.html?url="+this.state.url,title:"tweet"})));return r.a.createElement(h.a,{content:e,trigger:"click",placement:"bottom",interactive:!0,arrow:!0},r.a.createElement("img",{style:{verticalAlign:"bottom"},src:"https://material.io/tools/icons/static/icons/twotone-share-24px.svg",alt:""}))},t}(r.a.Component),d=a(34),m=a.n(d),f=a(153),g=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isLocationAvailable:!1},a.watchLocation=a.watchLocation.bind(m()(a)),a}l()(t,e);var a=t.prototype;return a.componentWillUnmount=function(){navigator.geolocation.clearWatch(this.id)},a.watchLocation=function(){var e=this;navigator.geolocation?this.id=navigator.geolocation.watchPosition(function(t){e.locationMarker.setPosition({lat:t.coords.latitude,lng:t.coords.longitude}),e.setState({isLocationAvailable:!0}),e.accuracyRadius.setCenter(e.locationMarker.getPosition()),e.accuracyRadius.setRadius(t.coords.accuracy)},function(){e.setState({isLocationAvailable:!1})},{enableHighAccuracy:!0}):this.setState({isLocationAvailable:!1})},a.componentDidMount=function(){this.watchLocation(),this.map=new window.google.maps.Map(document.getElementById("map"),{center:{lat:this.props.lat,lng:this.props.lon},zoom:17,gestureHandling:"cooperative"}),new window.google.maps.Marker({position:{lat:this.props.lat,lng:this.props.lon},map:this.map}),this.locationMarker=new window.google.maps.Marker({map:this.map,icon:"https://i.imgur.com/Rw0L7jC.png",position:{lat:this.props.lat,lng:this.props.lon}}),this.accuracyRadius=new window.google.maps.Circle({map:this.map,center:{lat:this.props.lat,lng:this.props.lon},radius:0,fillColor:"#00F",fillOpacity:.2,strokeWeight:0});var e=this;var t=document.createElement("div");new function(t,a){var n=document.createElement("div");n.style.backgroundColor="#fff",n.style.border="2px solid #fff",n.style.borderRadius="3px",n.style.boxShadow="0 2px 6px rgba(0,0,0,.3)",n.style.cursor="pointer",n.style.textAlign="center",n.style.marginBottom="22px",n.style.height="31px",n.title="Click to recenter the map to location",t.appendChild(n);var r=document.createElement("div");r.innerHTML="<img src='https://i.imgur.com/raFRca2.png' />",n.appendChild(r),n.addEventListener("click",function(){a.setCenter(e.locationMarker.getPosition())})}(t,this.map),t.index=1,this.map.controls[window.google.maps.ControlPosition.LEFT_BOTTOM].push(t)},a.render=function(){return r.a.createElement("div",null,!this.state.isLocationAvailable&&r.a.createElement(f.a,null),r.a.createElement("div",{id:"map",style:{width:"100%",height:300}}))},t}(r.a.Component),w=a(149),v=function(e){function t(){return e.apply(this,arguments)||this}l()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=[];null!==this.props.maleYaw&&e.push({pitch:0,yaw:this.props.maleYaw,type:"info",text:"Male"}),null!==this.props.femaleYaw&&e.push({pitch:0,yaw:this.props.femaleYaw,type:"info",text:"Female"}),null!==this.props.handicappedYaw&&e.push({pitch:0,yaw:this.props.handicappedYaw,type:"info",text:"Handicapped"}),null!==this.props.waterCoolerYaw&&e.push({pitch:0,yaw:this.props.waterCoolerYaw,type:"info",text:"Water Cooler"}),window.pannellum.viewer("panorama",{type:"equirectangular",panorama:this.props.paranomaUrl,yaw:this.props.startingYaw,vaov:45,maxPitch:0,minPitch:0,autoLoad:!0,hotSpots:e})},a.render=function(){return r.a.createElement("div",null,r.a.createElement(w.Helmet,null,r.a.createElement("link",{rel:"stylesheet",href:"https://cdn.pannellum.org/2.4/pannellum.css"})),r.a.createElement("div",{id:"panorama",style:{width:"100%",height:200}}))},t}(r.a.Component),y=(a(162),a(163));a(166),a(182);var E,b={apiKey:"AIzaSyCmdA27Yq_H79ugY2uCSzNNZV_JuzBxh0Q",authDomain:"let-it-go-e6229.firebaseapp.com",databaseURL:"https://let-it-go-e6229.firebaseio.com",projectId:"let-it-go-e6229",storageBucket:"let-it-go-e6229.appspot.com",messagingSenderId:"917575844853",appId:"1:917575844853:web:88ec0cbe059a0d43"},S=function(){if(E)return E;y.initializeApp(b),this.db=y.firestore(),this.auth=y.auth(),this.firebase=y,E=this},C=function(e){function t(t){var a;return(a=e.call(this,t)||this).isClicked=a.isClicked.bind(m()(a)),a}l()(t,e);var a=t.prototype;return a.isClicked=function(e){return this.props.starsState[e]?{color:"orange"}:{}},a.render=function(){return r.a.createElement("div",null,r.a.createElement("i",{id:"0",className:"fas fa-star",style:this.isClicked(0),onClick:this.props.handleStarClick}),r.a.createElement("i",{id:"1",className:"fas fa-star",style:this.isClicked(1),onClick:this.props.handleStarClick}),r.a.createElement("i",{id:"2",className:"fas fa-star",style:this.isClicked(2),onClick:this.props.handleStarClick}),r.a.createElement("i",{id:"3",className:"fas fa-star",style:this.isClicked(3),onClick:this.props.handleStarClick}),r.a.createElement("i",{id:"4",className:"fas fa-star",style:this.isClicked(4),onClick:this.props.handleStarClick}))},t}(r.a.Component),k=function(e){function t(t){var a;return(a=e.call(this,t)||this).isClicked=a.isClicked.bind(m()(a)),a}l()(t,e);var a=t.prototype;return a.isClicked=function(e){return e<this.props.score?{color:"orange",fontSize:"80%"}:{fontSize:"80%"}},a.render=function(){return r.a.createElement("span",null,r.a.createElement("i",{id:"0",className:"fas fa-star",style:this.isClicked(0)}),r.a.createElement("i",{id:"1",className:"fas fa-star",style:this.isClicked(1)}),r.a.createElement("i",{id:"2",className:"fas fa-star",style:this.isClicked(2)}),r.a.createElement("i",{id:"3",className:"fas fa-star",style:this.isClicked(3)}),r.a.createElement("i",{id:"4",className:"fas fa-star",style:this.isClicked(4)}))},t}(r.a.Component),x=a(156),R=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=function(){a.state.review.length>a.len?a.setState({review:a.props.review.slice(0,a.len)}):a.setState({review:a.props.review})},a.len=240,a.state={review:a.props.review.slice(0,a.len),isTooLong:a.props.review.length>a.len,sortBy:"newest"},a}return l()(t,e),t.prototype.render=function(){return r.a.createElement("div",{key:this.props.review},this.props.review.length>this.len&&this.state.review.length<=this.len?this.state.review+"...":this.state.review,this.state.isTooLong&&r.a.createElement("div",null,r.a.createElement("button",{style:c.b("#1ca086","60%"),onClick:this.onClick},this.state.review.length>this.len?"Show less":"Show more")))},t}(r.a.Component),M=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){return r.a.createElement("span",null,r.a.createElement("img",{src:this.props.children.photoURL,alt:this.props.children.name,width:36,height:36,style:{verticalAlign:"top"}}),r.a.createElement("strong",{style:{color:"blue",fontSize:"80%"}}," "+this.props.children.name),null!=this.props.handleEdit&&r.a.createElement("span",{style:{color:"gray",fontSize:"80%"}}," • ",r.a.createElement("button",{onClick:this.props.handleEdit,style:c.b("red","100%")},"Edit")),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement(k,{score:this.props.children.score}),r.a.createElement("span",{style:{color:"gray",fontSize:"80%"}}," "+c.g(this.props.children.date))),r.a.createElement("br",null),r.a.createElement(R,{review:this.props.children.review}))},t}(r.a.Component),L=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={reviews:[],otherReviews:[],isSignedIn:!1,myReview:"",reviewsLoading:!0,starsState:[!1,!1,!1,!1,!1],pageNumber:1,inputBoxShown:!0},a.starsKey=0,a.paginateKey=0,a.handleChange=a.handleChange.bind(m()(a)),a.handleSubmit=a.handleSubmit.bind(m()(a)),a.handleEdit=a.handleEdit.bind(m()(a)),a.handleStarClick=a.handleStarClick.bind(m()(a)),a.handleSort=a.handleSort.bind(m()(a)),a.handlePageChange=a.handlePageChange.bind(m()(a)),a}l()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;if(this.firebase=new S,this.db=this.firebase.db,this.auth=this.firebase.auth,null==this.firebase.ui){var t=a(185);this.firebase.ui=new t.auth.AuthUI(this.auth)}this.snapshot=this.db.collection("reviews").doc(this.props.name).collection("users").onSnapshot(function(t){var a=[];t.forEach(function(e){a.push(e.data().review)}),a.sort(function(e,t){return t.date.toDate()-e.date.toDate()}),e.setState({reviews:a,reviewsLoading:!1,inputBoxShown:null!=e.auth.currentUser&&1!==a.filter(function(t){return t.uid===e.auth.currentUser.uid}).length,otherReviews:null==e.auth.currentUser?a:a.filter(function(t){return t.uid!==e.auth.currentUser.uid})})}),this.uiConfig={signInOptions:[this.firebase.firebase.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}},this.firebase.ui.start("#firebaseui-auth-container",this.uiConfig),this.stopAuthListener=this.auth.onAuthStateChanged(function(t){e.setState({isSignedIn:!!t,otherReviews:null==e.auth.currentUser?e.state.reviews:e.state.reviews.filter(function(t){return t.uid!==e.auth.currentUser.uid})})})},n.handleChange=function(e){this.setState({myReview:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),this.db.collection("reviews").doc(this.props.name).collection("users").doc(this.auth.currentUser.uid).set({review:{name:this.auth.currentUser.displayName,photoURL:this.auth.currentUser.photoURL,review:this.state.myReview,date:new Date,uid:this.auth.currentUser.uid,score:c.i(this.state.starsState)}}),this.setState({myReview:"",starsState:[!1,!1,!1,!1,!1],sortBy:"newest",pageNumber:1})},n.handleEdit=function(){var e=this;console.log("edit");var t=this.state.reviews.filter(function(t){return t.uid===e.auth.currentUser.uid})[0];this.setState({myReview:t.review,starsState:[!0,!0,!0,!0,!0].map(function(e,a){return a<t.score}),inputBoxShown:!0})},n.handleStarClick=function(e){var t=this.state.starsState.slice().map(function(t,a){return a<=parseInt(e.target.id)});this.setState({starsState:t})},n.handleSort=function(e){var t=this,a=this.state.reviews.slice();"newest"===e.target.value?a.sort(function(e,t){return t.date.toDate()-e.date.toDate()}):"lowest"===e.target.value?a.sort(function(e,t){return e.score-t.score}):a.sort(function(e,t){return t.score-e.score}),this.setState({reviews:a,sortBy:e.target.value,pageNumber:1,otherReviews:null==this.auth.currentUser?a:a.filter(function(e){return e.uid!==t.auth.currentUser.uid})})},n.handlePageChange=function(e){this.setState({pageNumber:parseInt(e.target.id)})},n.componentWillUnmount=function(){this.snapshot(),this.stopAuthListener()},n.render=function(){var e=this;return r.a.createElement("div",null,r.a.createElement(w.Helmet,null,r.a.createElement("link",{type:"text/css",rel:"stylesheet",href:"https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css"}),r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"})),r.a.createElement("h4",null,"Reviews"),!this.state.isSignedIn&&r.a.createElement("div",null,r.a.createElement("div",{id:"firebaseui-auth-container"}),r.a.createElement("p",{style:{fontSize:"0.7em",color:"gray",textAlign:"center"}},"Sign in with Google to post a review!")),this.state.isSignedIn&&!this.state.reviewsLoading&&r.a.createElement("div",null,r.a.createElement("p",null,"Welcome ",this.auth.currentUser.displayName,"! You are now signed-in!"," ",r.a.createElement("button",{onClick:function(){e.auth.signOut(),window.location.reload()}},"Sign-out")),this.state.inputBoxShown&&!this.state.reviewsLoading?r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(C,{handleStarClick:this.handleStarClick,starsState:this.state.starsState,key:this.starsKey++}),r.a.createElement("textarea",{style:{width:"100%",resize:"none",height:"75px"},value:this.state.myReview,onChange:this.handleChange,placeholder:"Write a review..."}),r.a.createElement("input",{type:"submit",value:"Submit",disabled:""===this.state.myReview.trim()||0===c.i(this.state.starsState)})):r.a.createElement("div",{style:{borderStyle:"solid",borderColor:"grey",borderWidth:"1px"}},r.a.createElement(M,{handleEdit:this.handleEdit},this.state.reviews.filter(function(t){return t.uid===e.auth.currentUser.uid})[0]))),r.a.createElement("br",null),!this.state.reviewsLoading&&0!==this.state.otherReviews.length&&r.a.createElement("div",null,r.a.createElement("label",null,"Sort by:"," ",r.a.createElement("select",{value:this.state.sortBy,onChange:this.handleSort},r.a.createElement("option",{value:"newest"},"Newest"),r.a.createElement("option",{value:"highest"},"Highest Rating"),r.a.createElement("option",{value:"lowest"},"Lowest Rating")))),r.a.createElement("table",{style:{tableLayout:"fixed"}},0===this.state.otherReviews.length?r.a.createElement("tbody",null,r.a.createElement("tr",{key:1},r.a.createElement("td",null,this.state.reviewsLoading?r.a.createElement("p",null,"Reviews are loading..."):r.a.createElement("p",null,"No reviews (yet!)")))):r.a.createElement(x.a,{key:this.paginateKey++,pageSize:8,pageNumber:this.state.pageNumber,handlePageChange:this.handlePageChange,columns:1},this.state.otherReviews.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement(M,null,e)))}))))},t}(r.a.Component);a.d(t,"query",function(){return N});t.default=function(e){var t=e.data,a=t.toilets.name,n=t.toilets.lat,s=t.toilets.lon,l=t.toilets.paranoma.url,o=t.toilets.paranoma.startingYaw,h=t.toilets.paranoma.maleYaw,d=t.toilets.paranoma.femaleYaw,m=t.toilets.paranoma.handicappedYaw,f=t.toilets.paranoma.waterCoolerYaw;function y(e){return{textDecoration:e(t.toilets)?"":"line-through",color:e(t.toilets)?"":"gray"}}return r.a.createElement(i.a,{main:!1},r.a.createElement(w.Helmet,null,r.a.createElement("title",null,a)),r.a.createElement(u,null),r.a.createElement("h3",null,a),r.a.createElement(p,{name:a}),r.a.createElement(g,{lat:n,lon:s}),r.a.createElement(v,{name:a,paranomaUrl:l,startingYaw:o,maleYaw:h,femaleYaw:d,handicappedYaw:m,waterCoolerYaw:f}),r.a.createElement("h4",null,"At a glance"),r.a.createElement("ul",{style:{listStyle:"none"}},r.a.createElement("li",{style:y(c.e)},r.a.createElement("i",{className:"em-svg em-man-raising-hand"}),"Has Male toilet"),r.a.createElement("li",{style:y(c.c)},r.a.createElement("i",{className:"em-svg em-woman-raising-hand"}),"Has Female toilet"),r.a.createElement("li",{style:y(c.d)},r.a.createElement("i",{className:"em-svg em-wheelchair"}),c.d(t.toilets)?c.f(t.toilets)?"Is handicapped accessible (Has seperate handicapped toilet)":"Is handicapped accessible (Handicapped cubicle inside toilet)":"Is handicapped accessible"),r.a.createElement("li",{style:y(c.l)},r.a.createElement("i",{className:"em-svg em-potable_water"}),"Has water cooler"),r.a.createElement("li",{style:y(c.k)},r.a.createElement("i",{className:"em-svg em-shower"}),"Has shower heads"),r.a.createElement("li",{style:y(c.j)},r.a.createElement("i",{className:"em-svg em-sweat_drops"}),"Has hose")),r.a.createElement(L,{name:a}))};var N="228515960"},145:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},146:function(e,t,a){"use strict";a.d(t,"h",function(){return n}),a.d(t,"e",function(){return i}),a.d(t,"c",function(){return s}),a.d(t,"d",function(){return l}),a.d(t,"f",function(){return o}),a.d(t,"j",function(){return c}),a.d(t,"k",function(){return u}),a.d(t,"l",function(){return h}),a.d(t,"a",function(){return r}),a.d(t,"b",function(){return p}),a.d(t,"g",function(){return d}),a.d(t,"i",function(){return m});a(158),a(160);function n(e,t,a,n){if(null===e||null===a||null===t||null===n)return"Location not available";var r=(a-e)*(Math.PI/180),i=(n-t)*(Math.PI/180),s=Math.sin(r/2)*Math.sin(r/2)+Math.cos(e*(Math.PI/180))*Math.cos(a*(Math.PI/180))*Math.sin(i/2)*Math.sin(i/2),l=6371e3*(2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s)));return Math.round(l)}function r(e){return Number.isInteger(e)?e+"m":e}function i(e){return null!=e.paranoma.maleYaw}function s(e){return null!=e.paranoma.femaleYaw}function l(e){return e.facilities.handicapped}function o(e){return null!=e.paranoma.handicappedYaw}function c(e){return e.facilities.hose}function u(e){return e.facilities.showerHeads}function h(e){return null!=e.paranoma.waterCoolerYaw}function p(e,t){return{backgroundColor:"transparent",border:"none",cursor:"pointer",textDecoration:"underline",display:"inline",margin:"0",padding:"0",color:e,fontSize:t}}function d(e){var t=Math.abs(e.toDate()-Date.now());if(t<1e3)return"Now";if(t<6e4){var a=Math.floor(t/1e3);return 1===a?a+" second ago":a+" seconds ago"}if(t<36e5){var n=Math.floor(t/6e4);return 1===n?n+" minute ago":n+" minutes ago"}if(t<864e5){var r=Math.floor(t/36e5);return 1===r?r+" hour ago":r+" hours ago"}if(t<6048e5){var i=Math.floor(t/864e5);return 1===i?i+" day ago":i+" days ago"}if(t<2628e6){var s=Math.floor(t/6048e5);return 1===s?s+" week ago":s+" weeks ago"}if(t<3154e7){var l=Math.floor(t/2628e6);return 1===l?l+" month ago":l+" months ago"}return"Posted on "+e.toDate().toLocaleString("default",{day:"numeric",month:"long",year:"numeric"})}function m(e){return e.filter(function(e){return e}).length}},147:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(157);t.a=function(e){return r.a.createElement(i.a,{content:e.content,arrow:!0,trigger:"click",placement:"bottom",interactive:!0},r.a.createElement("img",{style:{verticalAlign:"middle"},src:"https://material.io/tools/icons/static/icons/baseline-help_outline-24px.svg",alt:""}))}},150:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",{style:{margin:"3rem auto",maxWidth:650,padding:"0 1rem"}},e.children)}},151:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),s=a.n(i),l=a(33),o=a.n(l);a.d(t,"a",function(){return o.a});a(145),r.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},152:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),l=a(58),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},153:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(147),s=r.a.createElement("div",{style:{textAlign:"left"}},"Check that you have:",r.a.createElement("ul",null,r.a.createElement("li",null,"Enabled your device's GPS settings",r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{style:{textShadow:"none"},href:"https://support.google.com/accounts/answer/3467281",rel:"noopener noreferrer",target:"_blank"},"Android")),r.a.createElement("li",null,r.a.createElement("a",{style:{textShadow:"none"},href:"https://support.apple.com/en-us/HT207092",rel:"noopener noreferrer",target:"_blank"},"iOS")),r.a.createElement("li",null,"Reload this page after enabling GPS settings"))),r.a.createElement("li",null,"Allowed your browser and this website the neccessary permissions to read your location",r.a.createElement("ul",null,r.a.createElement("li",null,"Press allow when a similar prompt as below appears"),r.a.createElement("li",null,"If such a prompt does not appear, reload the page")))),r.a.createElement("img",{src:"https://raw.githubusercontent.com/nelsontky/let-it-go/master/assets/misc/locationHelp.png",alt:""}));t.a=function(){return r.a.createElement("p",null,"Location loading/not available",r.a.createElement(i.a,{content:s}))}},156:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),s=a.n(i),l=function(e){function t(t){var a;(a=e.call(this,t)||this).pageSize=a.props.pageSize>a.props.children.length?a.props.children.length:a.props.pageSize,a.pageButtons=[];for(var n=0;n<Math.ceil(a.props.children.length/a.pageSize);n++)a.pageButtons.push(n+1);return a.pages=a.props.children.reduce(function(e,t,n){return n%a.pageSize==0?(e.push([t]),e):(e[e.length-1].push(t),e)},[]),a}return r()(t,e),t.prototype.render=function(){var e=this;return s.a.createElement("tbody",null,this.pages[this.props.pageNumber-1],this.pageSize<this.props.children.length&&s.a.createElement("tr",null,s.a.createElement("td",{colSpan:this.props.columns,style:{border:"0",textAlign:"center"}},this.pageButtons.map(function(t,a){return s.a.createElement("button",{onClick:e.props.handlePageChange,id:a+1,key:a+1,disabled:e.props.pageNumber===a+1},t)}))))},t}(s.a.Component);t.a=l}}]);
//# sourceMappingURL=component---src-templates-toilet-js-17e70bed6260a45b3c58.js.map