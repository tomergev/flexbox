(this.webpackJsonpflexbox=this.webpackJsonpflexbox||[]).push([[0],{13:function(e,t,r){e.exports=r(31)},18:function(e,t,r){},19:function(e,t,r){},20:function(e,t,r){},21:function(e,t,r){},31:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(6),c=r.n(o),l=(r(18),r(19),r(10)),u=r(1),s=r(4),i=r(7),m=r(8),b=r(11),p=r(9),f=r(12),O=(r(20),r(21),r(3)),g=r.n(O),d=function(e,t){var r=e.color,n=e.numberOfSquares,o={background:r,borderColor:"white",borderStyle:"solid",flexBasis:"".concat(100/n,"%")};return a.a.createElement("div",Object.assign({style:o},{className:"square",key:g.a.generate()}))},v=function(e,t,r){var n=e.color,o=e.numberOfSquares,c=g.a.generate(),l=Array(o).fill({color:n,numberOfSquares:o}).map(d);return a.a.createElement("div",{key:c,style:{display:"flex",flexWrap:"wrap"},className:t>=r.length-1?"fadeIn":""},l)},E=function(e){function t(){return Object(i.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.rows.map(v);return a.a.createElement(a.a.Fragment,null,e)}}]),t}(a.a.PureComponent),h=function(e){var t=e.onClick,r=e.onChange,n=e.formState,o=n.colorInput,c=n.numberOfSquaresInput,l=n.showRangeErrorMessage;return a.a.createElement("div",{className:"gridContainer"},a.a.createElement("div",{className:"gridItem"},a.a.createElement("label",null,"Color"),a.a.createElement("select",Object.assign({name:"color",id:"colorInput"},{onChange:r},{value:o}),a.a.createElement("option",{value:"Green"},"Green"),a.a.createElement("option",{value:"Blue"},"Blue"),a.a.createElement("option",{value:"Red"},"Red"),a.a.createElement("option",{value:"Yellow"},"Yellow"),a.a.createElement("option",{value:"Black"},"Black"),a.a.createElement("option",{value:"Purple"},"Purple"),a.a.createElement("option",{value:"Orange"},"Orange"))),a.a.createElement("div",{className:"gridItem"},a.a.createElement("label",null,"Number of Squares"),a.a.createElement("input",Object.assign({name:"numberOfSquaresInput",value:c,id:"numberOfSquaresInput"},{onChange:r},{type:"number",min:"0",max:"30"})),l&&a.a.createElement("div",{className:"gridContainer",style:{color:"red"}},a.a.createElement("div",{className:"gridItem"},"The number inputed must be between 1 and 30"))),a.a.createElement("div",{className:"gridItem"},a.a.createElement("button",Object.assign({onClick:t},{disabled:l}),"Create New Row")))};function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(r,!0).forEach((function(t){Object(u.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(){var e=Object(n.useState)([{color:"green",numberOfSquares:5}]),t=Object(s.a)(e,2),r=t[0],o=t[1],c=Object(n.useState)({colorInput:"Green",numberOfSquaresInput:5,showRangeErrorMessage:!1}),i=Object(s.a)(c,2),m=i[0],b=i[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(E,{rows:r}),a.a.createElement(h,{onClick:function(e){return o([].concat(Object(l.a)(r),[{color:m.colorInput,numberOfSquares:Math.floor(+m.numberOfSquaresInput)||1}]))},onChange:function(e){var t,r,n=e.target.id,a=e.target.value;"numberOfSquaresInput"===n&&(+a>30.01||+a<-.01)?b(w({},m,(t={},Object(u.a)(t,n,a),Object(u.a)(t,"showRangeErrorMessage",!0),t))):b(w({},m,(r={},Object(u.a)(r,n,a),Object(u.a)(r,"showRangeErrorMessage",!1),r)))},formState:m}))},S=function(){return a.a.createElement(y,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(30);c.a.render(a.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.6fb38af1.chunk.js.map