(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(e,t,a){"use strict";a.r(t);a(148);var n=a(0),r=a.n(n),o=a(149),l=(a(35),a(7)),i=a.n(l),s=a(153),c=function(e){function t(t){var a;return(a=e.call(this,t)||this).copyText=function(e){return e.preventDefault(),a.refs.input.select(),document.execCommand("copy"),!1},a.state={url:"https://nelsontky.github.io/let-it-go/"+a.props.name.replace(/\s/g,"")},a}return i()(t,e),t.prototype.render=function(){var e=r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("h4",{style:{color:"white"}},"Share"),r.a.createElement("hr",{style:{border:"1px solid white"}}),"Love/Hate ",r.a.createElement("strong",null,this.props.name),"? Share your Let It Go experience on social media! ",r.a.createElement("br",null),"(psst... try not to look suspicious in the toilet with your phone ok?)",r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("form",{onSubmit:this.copyText},r.a.createElement("input",{ref:"input",type:"text",value:this.state.url,readonly:!0}),r.a.createElement("input",{type:"submit",value:"Copy"})),r.a.createElement("iframe",{src:"https://www.facebook.com/plugins/share_button.php?href="+this.state.url+"&layout=button&size=small&width=58&height=20&appId",width:"60",height:"20",style:{border:"none",overflow:"hidden"},scrolling:"no",frameborder:"0",allowTransparency:"true",allow:"encrypted-media",title:"fb"}),r.a.createElement("iframe",{height:"20",width:"62",style:{border:"none",overflow:"hidden"},scrolling:"no",frameborder:"0",allowTransparency:"true",allow:"encrypted-media",src:"https://platform.twitter.com/widgets/tweet_button.html?url="+this.state.url,title:"tweet"})));return r.a.createElement(s.a,{content:e,trigger:"click",placement:"bottom",interactive:!0,arrow:!0},r.a.createElement("img",{style:{verticalAlign:"bottom"},src:"https://material.io/tools/icons/static/icons/twotone-share-24px.svg",alt:""}))},t}(r.a.Component),u=a(151),p=a(152),m=!0,h=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var a=t.prototype;return a.componentWillUnmount=function(){clearInterval(this.timerID)},a.getGeoLocation=function(){var e=this;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(t){e.locationMarker.setPosition({lat:t.coords.latitude,lng:t.coords.longitude}),e.accuracyRadius.setCenter(e.locationMarker.getPosition()),e.accuracyRadius.setRadius(t.coords.accuracy)},function(){m=!1},{enableHighAccuracy:!0}):m=!1,this.forceUpdate()},a.componentDidMount=function(){var e=this;this.timerID=setInterval(function(){return e.getGeoLocation()},1e3),this.map=new window.google.maps.Map(document.getElementById("map"),{center:{lat:this.props.lat,lng:this.props.lon},zoom:17,gestureHandling:"cooperative"}),new window.google.maps.Marker({position:{lat:this.props.lat,lng:this.props.lon},map:this.map}),this.locationMarker=new window.google.maps.Marker({map:this.map,icon:"https://i.imgur.com/Rw0L7jC.png",position:{lat:this.props.lat,lng:this.props.lon}}),this.accuracyRadius=new window.google.maps.Circle({map:this.map,center:{lat:this.props.lat,lng:this.props.lon},radius:0,fillColor:"#00F",fillOpacity:.2,strokeWeight:0});var t=this;var a=document.createElement("div");new function(e,a){var n=document.createElement("div");n.style.backgroundColor="#fff",n.style.border="2px solid #fff",n.style.borderRadius="3px",n.style.boxShadow="0 2px 6px rgba(0,0,0,.3)",n.style.cursor="pointer",n.style.textAlign="center",n.style.marginBottom="22px",n.style.height="31px",n.title="Click to recenter the map to location",e.appendChild(n);var r=document.createElement("div");r.innerHTML="<img src='https://i.imgur.com/raFRca2.png' />",n.appendChild(r),n.addEventListener("click",function(){t.getGeoLocation(),a.setCenter(t.locationMarker.getPosition())})}(a,this.map),a.index=1,this.map.controls[window.google.maps.ControlPosition.LEFT_BOTTOM].push(a)},a.render=function(){return r.a.createElement("div",null,!m&&r.a.createElement(p.a,null),r.a.createElement("div",{id:"map",style:{width:"100%",height:300}}))},t}(r.a.Component),d=a(165),g=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=[];null!==this.props.maleYaw&&e.push({pitch:0,yaw:this.props.maleYaw,type:"info",text:"Male"}),null!==this.props.femaleYaw&&e.push({pitch:0,yaw:this.props.femaleYaw,type:"info",text:"Female"}),null!==this.props.handicappedYaw&&e.push({pitch:0,yaw:this.props.handicappedYaw,type:"info",text:"Handicapped"}),null!==this.props.waterCoolerYaw&&e.push({pitch:0,yaw:this.props.waterCoolerYaw,type:"info",text:"Water Cooler"}),window.pannellum.viewer("panorama",{type:"equirectangular",panorama:this.props.paranomaUrl,yaw:this.props.startingYaw,vaov:45,maxPitch:0,minPitch:0,autoLoad:!0,hotSpots:e})},a.render=function(){return r.a.createElement("div",null,r.a.createElement(d.Helmet,null,r.a.createElement("link",{rel:"stylesheet",href:"https://cdn.pannellum.org/2.4/pannellum.css"})),r.a.createElement("div",{id:"panorama",style:{width:"100%",height:200}}))},t}(r.a.Component);a.d(t,"query",function(){return f});t.default=function(e){var t=e.data,a=t.toilets.name,n=t.toilets.lat,l=t.toilets.lon,i=t.toilets.paranoma.url,s=t.toilets.paranoma.startingYaw,p=t.toilets.paranoma.maleYaw,m=t.toilets.paranoma.femaleYaw,d=t.toilets.paranoma.handicappedYaw,f=t.toilets.paranoma.waterCoolerYaw;function w(e){return{textDecoration:e(t.toilets)?"":"line-through",color:e(t.toilets)?"":"gray"}}return r.a.createElement(o.a,{main:!1},r.a.createElement("h3",null,a),r.a.createElement(c,{name:a}),r.a.createElement(h,{lat:n,lon:l}),r.a.createElement(g,{name:a,paranomaUrl:i,startingYaw:s,maleYaw:p,femaleYaw:m,handicappedYaw:d,waterCoolerYaw:f}),r.a.createElement("h4",null,"At a glance"),r.a.createElement("ul",{style:{listStyle:"none"}},r.a.createElement("li",{style:w(u.d)},r.a.createElement("i",{className:"em-svg em-man-raising-hand"}),"Has Male toilet"),r.a.createElement("li",{style:w(u.b)},r.a.createElement("i",{className:"em-svg em-woman-raising-hand"}),"Has Female toilet"),r.a.createElement("li",{style:w(u.c)},r.a.createElement("i",{className:"em-svg em-wheelchair"}),"Is handicap accessible (Add in seperate or not seperate)"),r.a.createElement("li",{style:w(u.h)},r.a.createElement("i",{class:"em-svg em-potable_water"}),"Has water cooler"),r.a.createElement("li",{style:w(u.g)},r.a.createElement("i",{class:"em-svg em-shower"}),"Has shower heads"),r.a.createElement("li",{style:w(u.f)},r.a.createElement("i",{class:"em-svg em-sweat_drops"}),"Has hose")))};var f="1114840014"},145:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},146:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(153);t.a=function(e){return r.a.createElement(o.a,{content:e.content,arrow:!0,trigger:"click",placement:"bottom",interactive:!0},r.a.createElement("img",{style:{verticalAlign:"middle"},src:"https://material.io/tools/icons/static/icons/baseline-help_outline-24px.svg",alt:""}))}},147:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(4),l=a.n(o),i=a(33),s=a.n(i);a.d(t,"a",function(){return s.a});a(145),r.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func},149:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(147);t.a=function(e){return r.a.createElement("div",{style:{margin:"3rem auto",maxWidth:650,padding:"0 1rem"}},!e.main&&r.a.createElement(o.a,{to:"/"},"Back"),e.main&&r.a.createElement("h1",null,"Let It Go"),e.children)}},150:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),l=a.n(o),i=a(58),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},151:function(e,t,a){"use strict";a.d(t,"e",function(){return n}),a.d(t,"d",function(){return o}),a.d(t,"b",function(){return l}),a.d(t,"c",function(){return i}),a.d(t,"f",function(){return s}),a.d(t,"g",function(){return c}),a.d(t,"h",function(){return u}),a.d(t,"a",function(){return r});a(154),a(156);function n(e,t,a,n){if(null===e||null===a||null===t||null===n)return"Location not available";var r=(a-e)*(Math.PI/180),o=(n-t)*(Math.PI/180),l=Math.sin(r/2)*Math.sin(r/2)+Math.cos(e*(Math.PI/180))*Math.cos(a*(Math.PI/180))*Math.sin(o/2)*Math.sin(o/2),i=6371e3*(2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l)));return Math.round(i)}function r(e){return Number.isInteger(e)?e+"m":e}function o(e){return null!=e.paranoma.maleYaw}function l(e){return null!=e.paranoma.femaleYaw}function i(e){return null!=e.paranoma.handicappedYaw}function s(e){return e.facilities.hose}function c(e){return e.facilities.showerHeads}function u(e){return null!=e.paranoma.waterCoolerYaw}},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(146),l=r.a.createElement("div",{style:{textAlign:"left"}},"Check that you have:",r.a.createElement("ul",null,r.a.createElement("li",null,"Enabled your device's GPS settings",r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{style:{textShadow:"none"},href:"https://support.google.com/accounts/answer/3467281",rel:"noopener noreferrer",target:"_blank"},"Android")),r.a.createElement("li",null,r.a.createElement("a",{style:{textShadow:"none"},href:"https://support.apple.com/en-us/HT207092",rel:"noopener noreferrer",target:"_blank"},"iOS")),r.a.createElement("li",null,"Reload this page after enabling GPS settings"))),r.a.createElement("li",null,"Allowed your browser and this website the neccessary permissions to read your location",r.a.createElement("ul",null,r.a.createElement("li",null,"Press allow when a similar prompt as below appears"),r.a.createElement("li",null,"If such a prompt does not appear, reload the page")))),r.a.createElement("img",{src:"https://raw.githubusercontent.com/nelsontky/let-it-go/master/assets/misc/locationHelp.png",alt:""}));t.a=function(){return r.a.createElement("p",null,"Location not detected ",r.a.createElement(o.a,{content:l}))}}}]);
//# sourceMappingURL=component---src-templates-toilet-js-6f58bae811eb57c14fb7.js.map