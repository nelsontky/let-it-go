(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{144:function(t,e,a){"use strict";a.r(e);a(147);var n=a(0),o=a.n(n),i=a(148),r=a(7),l=a.n(r),s=!0,p=function(t){function e(){return t.apply(this,arguments)||this}l()(e,t);var a=e.prototype;return a.componentWillUnmount=function(){clearInterval(this.timerID)},a.getGeoLocation=function(){var t=this;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){t.locationMarker.setPosition({lat:e.coords.latitude,lng:e.coords.longitude}),t.accuracyRadius.setCenter(t.locationMarker.getPosition()),t.accuracyRadius.setRadius(e.coords.accuracy)},function(){s=!1,t.forceUpdate()},{enableHighAccuracy:!0}):(s=!1,this.forceUpdate())},a.componentDidMount=function(){var t=this;this.timerID=setInterval(function(){return t.getGeoLocation()},1e3),this.map=new window.google.maps.Map(document.getElementById("map"),{center:{lat:this.props.lat,lng:this.props.lon},zoom:17}),new window.google.maps.Marker({position:{lat:this.props.lat,lng:this.props.lon},map:this.map}),this.locationMarker=new window.google.maps.Marker({map:this.map,icon:"https://i.imgur.com/Rw0L7jC.png",position:{lat:this.props.lat,lng:this.props.lon}}),this.accuracyRadius=new window.google.maps.Circle({map:this.map,center:{lat:this.props.lat,lng:this.props.lon},radius:0,fillColor:"#00F",fillOpacity:.2,strokeWeight:0});var e=this;var a=document.createElement("div");new function(t,a){var n=document.createElement("div");n.style.backgroundColor="#fff",n.style.border="2px solid #fff",n.style.borderRadius="3px",n.style.boxShadow="0 2px 6px rgba(0,0,0,.3)",n.style.cursor="pointer",n.style.textAlign="center",n.style.marginBottom="22px",n.style.height="31px",n.title="Click to recenter the map to location",t.appendChild(n);var o=document.createElement("div");o.innerHTML="<img src='https://i.imgur.com/raFRca2.png' />",n.appendChild(o),n.addEventListener("click",function(){e.getGeoLocation(),a.setCenter(e.locationMarker.getPosition())})}(a,this.map),a.index=1,this.map.controls[window.google.maps.ControlPosition.LEFT_BOTTOM].push(a)},a.render=function(){return o.a.createElement("div",null,!s&&o.a.createElement("p",null,"Location services not working! (Add help popup, convert to component)"),o.a.createElement("div",{id:"map",style:{width:"100%",height:300}}))},e}(o.a.Component),c=a(151),u=function(t){function e(){return t.apply(this,arguments)||this}l()(e,t);var a=e.prototype;return a.componentDidMount=function(){var t=[];null!==this.props.maleYaw&&t.push({pitch:0,yaw:this.props.maleYaw,type:"info",text:"Male"}),null!==this.props.femaleYaw&&t.push({pitch:0,yaw:this.props.femaleYaw,type:"info",text:"Female"}),null!==this.props.handicappedYaw&&t.push({pitch:0,yaw:this.props.handicappedYaw,type:"info",text:"Handicapped"}),null!==this.props.waterCoolerYaw&&t.push({pitch:0,yaw:this.props.waterCoolerYaw,type:"info",text:"Water Cooler"}),window.pannellum.viewer("panorama",{type:"equirectangular",panorama:this.props.paranomaUrl,yaw:this.props.startingYaw,vaov:45,maxPitch:0,minPitch:0,autoLoad:!0,hotSpots:t})},a.render=function(){return o.a.createElement("div",null,o.a.createElement(c.Helmet,null,o.a.createElement("link",{rel:"stylesheet",href:"https://cdn.pannellum.org/2.4/pannellum.css"})),o.a.createElement("div",{id:"panorama",style:{width:"100%",height:200}}))},e}(o.a.Component);a.d(e,"query",function(){return m});e.default=function(t){var e=t.data,a=e.toilets.name,n=e.toilets.lat,r=e.toilets.lon,l=e.toilets.paranoma.url,s=e.toilets.paranoma.startingYaw,c=e.toilets.paranoma.maleYaw,m=e.toilets.paranoma.femaleYaw,d=e.toilets.paranoma.handicappedYaw,h=e.toilets.paranoma.waterCoolerYaw;return o.a.createElement(i.a,{main:!1},o.a.createElement("h3",null,a),o.a.createElement(p,{lat:n,lon:r}),o.a.createElement(u,{name:a,paranomaUrl:l,startingYaw:s,maleYaw:c,femaleYaw:m,handicappedYaw:d,waterCoolerYaw:h}),o.a.createElement("p",null,"Todo"))};var m="1114840014"},145:function(t,e,a){var n;t.exports=(n=a(149))&&n.default||n},146:function(t,e,a){"use strict";var n=a(0),o=a.n(n),i=a(4),r=a.n(i),l=a(33),s=a.n(l);a.d(e,"a",function(){return s.a});a(145),o.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func},148:function(t,e,a){"use strict";var n=a(0),o=a.n(n),i=a(146);e.a=function(t){return o.a.createElement("div",{style:{margin:"3rem auto",maxWidth:650,padding:"0 1rem"}},!t.main&&o.a.createElement(i.a,{to:"/"},"Back"),t.main&&o.a.createElement("h1",null,"Let It Go"),t.children)}},149:function(t,e,a){"use strict";a.r(e);a(34);var n=a(0),o=a.n(n),i=a(4),r=a.n(i),l=a(56),s=a(2),p=function(t){var e=t.location,a=s.default.getResourcesForPathnameSync(e.pathname);return a?o.a.createElement(l.a,Object.assign({location:e,pageResources:a},a.json)):null};p.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},e.default=p}}]);
//# sourceMappingURL=component---src-templates-toilet-js-4e85fee741da69374903.js.map