(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{144:function(e,t,a){"use strict";a.r(t);a(35),a(181),a(147);var n=a(36),l=a.n(n),r=a(7),i=a.n(r),c=a(0),s=a.n(c),o=a(150),u=a(146),h=s.a.createElement("div",{style:{textAlign:"left"}},"Legend:",s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("i",{className:"em-svg em-man-raising-hand"}),": Has male toilet"),s.a.createElement("li",null,s.a.createElement("i",{className:"em-svg em-woman-raising-hand"}),": Has female toilet"),s.a.createElement("li",null,s.a.createElement("i",{className:"em-svg em-wheelchair"}),": Is handicapped accessible (Includes seperate handicapped toilets or those inside toilets as a larger cubicle)"))),m=function(){return s.a.createElement(u.a,{content:h})},d=s.a.createElement("div",{style:{textAlign:"left"}},"Choosing an option will remove any toilet without the chosen feature from the list. Multiple selections will make criteria more stringent.",s.a.createElement("br",null),'E.g. Selecting "Male" and "Has Water Cooler" will only show toilets that has Male toilets and has a water cooler nearby.'),p=function(){return s.a.createElement(u.a,{content:d})},f=a(153),g=a(148),E=a(152),y=a(149);a.d(t,"default",function(){return b}),a.d(t,"query",function(){return k});var C=!1,b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={toilets:a.props.data.allToilets.nodes.slice(0),myLat:null,myLon:null,sortBy:"name",isFilterHidden:!0,maleChecked:!1,femaleChecked:!1,handicappedChecked:!1,waterCoolerChecked:!1,showerHeadsChecked:!1,hoseChecked:!1},a.sortByDistance=a.sortByDistance.bind(l()(a)),a.compareDistance=a.compareDistance.bind(l()(a)),a.sortByName=a.sortByName.bind(l()(a)),a.updatePosition=a.updatePosition.bind(l()(a)),a.handleChange=a.handleChange.bind(l()(a)),a.handleClick=a.handleClick.bind(l()(a)),a.handleFilterChange=a.handleFilterChange.bind(l()(a)),a.isShown=a.isShown.bind(l()(a)),a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){C=!1,this.updatePosition()},a.handleChange=function(e){this.setState({sortBy:e.target.value}),"name"===e.target.value?this.sortByName():this.sortByDistance()},a.handleClick=function(){this.setState({isFilterHidden:!this.state.isFilterHidden})},a.handleFilterChange=function(e){var t;this.setState(((t={})[e.target.name]=!this.state[e.target.name],t))},a.sortByDistance=function(){var e=this.state.toilets.slice(0);e.sort(this.compareDistance),this.setState({toilets:e})},a.compareDistance=function(e,t){return E.f(e.lat,e.lon,this.state.myLat,this.state.myLon)-E.f(t.lat,t.lon,this.state.myLat,this.state.myLon)},a.sortByName=function(){var e=this.state.toilets.slice(0);e.sort(function(e,t){return e.name.localeCompare(t.name)}),this.setState({toilets:e})},a.isShown=function(e){return(!this.state.maleChecked||E.d(e))&&(!this.state.femaleChecked||E.b(e))&&(!this.state.handicappedChecked||E.c(e))&&(!this.state.showerHeadsChecked||E.h(e))&&(!this.state.hoseChecked||E.g(e))&&(!this.state.waterCoolerChecked||E.i(e))},a.updatePosition=function(){var e=this;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(t){e.setState({myLat:t.coords.latitude,myLon:t.coords.longitude,sortBy:"distance"}),C=!0,e.sortByDistance()},function(){C=!1},{enableHighAccuracy:!0}):C=!1,this.forceUpdate()},a.render=function(){var e=this,t={fontSize:"calc(0.6em + 0.5vw)"};return s.a.createElement(o.a,{main:!0},s.a.createElement(y.Helmet,null,s.a.createElement("title",null,"Let It Go")),s.a.createElement("div",{style:{float:"right"}},s.a.createElement("label",null,"Sort by:",s.a.createElement("select",{value:this.state.sortBy,onChange:this.handleChange},s.a.createElement("option",{value:"name"},"Name"),C&&s.a.createElement("option",{value:"distance"},"Distance")))),s.a.createElement("button",{onClick:this.handleClick},this.state.isFilterHidden?"Filter":"Hide"),!this.state.isFilterHidden&&s.a.createElement("div",null,s.a.createElement("p",null,"Show only",s.a.createElement(p,null),":"),s.a.createElement("label",null,s.a.createElement("input",{name:"maleChecked",type:"checkbox",checked:this.state.maleChecked,onChange:this.handleFilterChange}),"Male"),s.a.createElement("br",null),s.a.createElement("label",null,s.a.createElement("input",{name:"femaleChecked",type:"checkbox",checked:this.state.femaleChecked,onChange:this.handleFilterChange}),"Female"),s.a.createElement("br",null),s.a.createElement("label",null,s.a.createElement("input",{name:"handicappedChecked",type:"checkbox",checked:this.state.handicappedChecked,onChange:this.handleFilterChange}),"Handicapped accessible"),s.a.createElement("br",null),s.a.createElement("label",null,s.a.createElement("input",{name:"showerHeadsChecked",type:"checkbox",checked:this.state.showerHeadsChecked,onChange:this.handleFilterChange}),"Has Shower Heads"),s.a.createElement("br",null),s.a.createElement("label",null,s.a.createElement("input",{name:"hoseChecked",type:"checkbox",checked:this.state.hoseChecked,onChange:this.handleFilterChange}),"Has Hoses"),s.a.createElement("br",null),s.a.createElement("label",null,s.a.createElement("input",{name:"waterCoolerChecked",type:"checkbox",checked:this.state.waterCoolerChecked,onChange:this.handleFilterChange}),"Has Water Cooler"),s.a.createElement("br",null)),!C&&s.a.createElement(f.a,null),s.a.createElement("table",{style:{tableLayout:"fixed"}},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Name",C&&s.a.createElement("div",{style:{color:"gray",fontSize:"80%"}},"Distance")),s.a.createElement("th",{style:{textAlign:"center"}},"Types",s.a.createElement(m,null)))),s.a.createElement("tbody",null,this.state.toilets.filter(this.isShown).map(function(a,n){return s.a.createElement("tr",{key:n},s.a.createElement("td",null,s.a.createElement(g.a,{to:"/"+a.name.replace(/\s/g,"")},a.name),s.a.createElement("br",null),C&&s.a.createElement("span",{style:{color:"gray",fontSize:"80%"}},E.a(E.f(e.state.myLat,e.state.myLon,a.lat,a.lon)))),s.a.createElement("td",{style:{textAlign:"center"}},E.d(a)&&s.a.createElement("i",{className:"em-svg em-man-raising-hand",style:t}),E.b(a)&&s.a.createElement("i",{className:"em-svg em-woman-raising-hand",style:t}),E.c(a)&&s.a.createElement("i",{className:"em-svg em-wheelchair",style:t})))}))))},t}(s.a.Component),k="2088500780"},145:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},146:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(156);t.a=function(e){return l.a.createElement(r.a,{content:e.content,arrow:!0,trigger:"click",placement:"bottom",interactive:!0},l.a.createElement("img",{style:{verticalAlign:"middle"},src:"https://material.io/tools/icons/static/icons/baseline-help_outline-24px.svg",alt:""}))}},148:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(4),i=a.n(r),c=a(33),s=a.n(c);a.d(t,"a",function(){return s.a});a(145),l.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},150:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(148);t.a=function(e){return l.a.createElement("div",{style:{margin:"3rem auto",maxWidth:650,padding:"0 1rem"}},!e.main&&l.a.createElement(r.a,{to:"/"},"Back"),e.main&&l.a.createElement("h1",null,"Let It Go"),e.children)}},151:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),l=a.n(n),r=a(4),i=a.n(r),c=a(58),s=a(2),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?l.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},152:function(e,t,a){"use strict";a.d(t,"f",function(){return n}),a.d(t,"d",function(){return r}),a.d(t,"b",function(){return i}),a.d(t,"c",function(){return c}),a.d(t,"e",function(){return s}),a.d(t,"g",function(){return o}),a.d(t,"h",function(){return u}),a.d(t,"i",function(){return h}),a.d(t,"a",function(){return l});a(157),a(159);function n(e,t,a,n){if(null===e||null===a||null===t||null===n)return"Location not available";var l=(a-e)*(Math.PI/180),r=(n-t)*(Math.PI/180),i=Math.sin(l/2)*Math.sin(l/2)+Math.cos(e*(Math.PI/180))*Math.cos(a*(Math.PI/180))*Math.sin(r/2)*Math.sin(r/2),c=6371e3*(2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i)));return Math.round(c)}function l(e){return Number.isInteger(e)?e+"m":e}function r(e){return null!=e.paranoma.maleYaw}function i(e){return null!=e.paranoma.femaleYaw}function c(e){return e.facilities.handicapped}function s(e){return null!=e.paranoma.handicappedYaw}function o(e){return e.facilities.hose}function u(e){return e.facilities.showerHeads}function h(e){return null!=e.paranoma.waterCoolerYaw}},153:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(146),i=l.a.createElement("div",{style:{textAlign:"left"}},"Check that you have:",l.a.createElement("ul",null,l.a.createElement("li",null,"Enabled your device's GPS settings",l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{style:{textShadow:"none"},href:"https://support.google.com/accounts/answer/3467281",rel:"noopener noreferrer",target:"_blank"},"Android")),l.a.createElement("li",null,l.a.createElement("a",{style:{textShadow:"none"},href:"https://support.apple.com/en-us/HT207092",rel:"noopener noreferrer",target:"_blank"},"iOS")),l.a.createElement("li",null,"Reload this page after enabling GPS settings"))),l.a.createElement("li",null,"Allowed your browser and this website the neccessary permissions to read your location",l.a.createElement("ul",null,l.a.createElement("li",null,"Press allow when a similar prompt as below appears"),l.a.createElement("li",null,"If such a prompt does not appear, reload the page")))),l.a.createElement("img",{src:"https://raw.githubusercontent.com/nelsontky/let-it-go/master/assets/misc/locationHelp.png",alt:""}));t.a=function(){return l.a.createElement("p",null,"Location not detected ",l.a.createElement(r.a,{content:i}))}},181:function(e,t,a){"use strict";var n=a(12),l=a(27),r=a(28),i=a(19),c=[].sort,s=[1,2,3];n(n.P+n.F*(i(function(){s.sort(void 0)})||!i(function(){s.sort(null)})||!a(182)(c)),"Array",{sort:function(e){return void 0===e?c.call(r(this)):c.call(r(this),l(e))}})},182:function(e,t,a){"use strict";var n=a(19);e.exports=function(e,t){return!!e&&n(function(){t?e.call(null,function(){},1):e.call(null)})}}}]);
//# sourceMappingURL=component---src-pages-index-js-6bb5159b4e1af03ae6bb.js.map