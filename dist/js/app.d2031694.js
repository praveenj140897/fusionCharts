(function(e){function t(t){for(var n,u,l=t[0],i=t[1],c=t[2],p=0,f=[];p<l.length;p++)u=l[p],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&f.push(r[u][0]),r[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);s&&s(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,l=1;l<a.length;l++){var i=a[l];0!==r[i]&&(n=!1)}n&&(o.splice(t--,1),e=u(u.s=a[0]))}return e}var n={},r={app:0},o=[];function u(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.m=e,u.c=n,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(a,n,function(t){return e[t]}.bind(null,n));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],u={name:"App",components:{}},l=u,i=(a("034f"),a("2877")),c=Object(i["a"])(l,r,o,!1,null,null,null),s=c.exports,p=a("8c4f"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("router-link",{attrs:{to:"/page2"}},[e._v("Page 2")]),a("fusioncharts",{attrs:{type:e.type,width:e.width,height:e.height,dataFormat:e.dataFormat,dataSource:e.dataSource}})],1)},d=[],h=a("27e3"),b=a.n(h),v=a("8f68"),m=a.n(v),y=a("f273"),g=a.n(y),w=a("5206"),O=a.n(w),S={chart:{caption:"Recommended Portfolio Split",subCaption:"For a net Worth of $1M",showValues:"1",showPercentInTooltip:"0",numberPrefix:"$",enableMultiSlicing:"1",theme:"fusion"},data:[{label:"Equity",value:"300000"},{label:"Debt",value:"230000"},{label:"Bullion",value:"180000"},{label:"Real-estate",value:"270000"},{label:"Insurance",value:"200000"}]},j=S;n["a"].use(b.a,m.a,g.a,O.a);var x={name:"Page1",data:function(){return{type:"pie2d",width:"500",height:"300",dataSource:j,dataFormat:"json"}}},P=x,_=Object(i["a"])(P,f,d,!1,null,null,null),M=_.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("router-link",{attrs:{to:"/"}},[e._v("Page 1")]),a("fusioncharts",{attrs:{type:e.type,width:e.width,height:e.height,dataFormat:e.dataFormat,dataSource:e.dataSource}})],1)},$=[],k={chart:{caption:"Countries with most Oil Reserves [2017-18]",subCaption:"In MMbbl = One Million Barrels",xAxisName:"Country",yAxisName:"Reserves (MMbbl)",numberSuffix:"K",theme:"fusion"},data:[{label:"Venuzuela",value:"290"},{label:"Saudi",value:"260"},{label:"Canada",value:"190"},{label:"Iran",value:"140"},{label:"Russia",value:"115"}]},C=k;n["a"].use(b.a,m.a,g.a,O.a);var R={name:"Page2",data:function(){return{type:"column2d",renderAt:"chart-container",width:"550",height:"350",dataFormat:"json",dataSource:C}}},A=R,E=Object(i["a"])(A,F,$,!1,null,null,null),I=E.exports,T=[{path:"/",component:M},{path:"/page2",component:I}],B=T;n["a"].use(p["a"]),n["a"].config.productionTip=!1;var J=new p["a"]({mode:"history",routes:B});new n["a"]({router:J,render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.d2031694.js.map