(this["webpackJsonpproperty-app"]=this["webpackJsonpproperty-app"]||[]).push([[5],{33:function(e,t,r){},41:function(e,t,r){"use strict";r.r(t);var a=r(0),o=r(14),n=r.n(o),s=r(15),c=r(2),i=(r(33),r(16)),d=r(4),p=Object(a.lazy)((function(){return r.e(15).then(r.bind(null,503))})),l=Object(a.lazy)((function(){return Promise.all([r.e(0),r.e(2),r.e(17)]).then(r.bind(null,526))})),u=Object(a.lazy)((function(){return r.e(16).then(r.bind(null,515))})),m=Object(a.lazy)((function(){return Promise.all([r.e(0),r.e(2),r.e(1),r.e(9),r.e(13)]).then(r.bind(null,527))})),h=Object(a.lazy)((function(){return r.e(18).then(r.bind(null,519))}));var b=Object(i.b)((function(e){return{currentItem:e.save.currentItem}}))((function(e){var t=e.currentItem;return Object(d.jsx)(s.a,{children:Object(d.jsxs)(a.Suspense,{fallback:Object(d.jsx)("div",{}),children:[Object(d.jsx)(p,{}),Object(d.jsxs)(c.d,{children:[Object(d.jsx)(c.b,{exact:!0,path:"/property-app",component:l}),Object(d.jsx)(c.b,{exact:!0,path:"/map-view",component:u}),Object(d.jsx)(c.b,{exact:!0,path:"/saved",component:h}),t?Object(d.jsx)(c.b,{exact:!0,path:"/property-profile/:id",component:m}):Object(d.jsx)(c.a,{to:"/property-app"})]})]})})})),y=(r(40),r(10)),j=r(28),f=r(3),g=r(9),O={properties:[{id:"0",lat:"51.232712",lng:"-0.540188",imgs:["property-1-1.jpg"],imgAlt:"property 1 image",displayPrice:"\xa31,000,000",price:1e6,propertyDesc:"Modern and stylish house with floor to ceiling windows to make the most of the spectacular views across the countryside. Plenty of outside space and an outdoor swimming pool.",type:"detached house",bedrooms:6,bathrooms:3,livingRooms:2,address:"an address, somewhere",features:["garden","swimming pool","underfloor heating","cinema room","state of the art kitchen"]},{id:"1",lat:"51.233130",lng:"-0.592020",imgs:["property-2-1.jpg"],imgAlt:"property 2 image",displayPrice:"\xa3750,000",price:75e4,propertyDesc:"New build semi-detached family house for sale. Close to excellent schools and transport links. Situated in a quiet cul-de-sac.",type:"semi-detached house",bedrooms:5,bathrooms:2,livingRooms:1,address:"an address, somewhere",features:["garden","swimming pool","underfloor heating","cinema room","state of the art kitchen"]},{id:"2",lat:"51.206777",lng:"-0.546255",imgs:["property-3-1.jpg","property-3-2.jpg"],imgAlt:"property 3 image",displayPrice:"\xa3600,000",price:6e5,propertyDesc:"Charming detached clapboard house with white picket fence. The house and wrap-around garden boast plenty of character.",type:"detached house",bedrooms:3,bathrooms:2,livingRooms:1,address:"an address, somewhere",features:["garden","swimming pool","underfloor heating","cinema room","state of the art kitchen"]},{id:"3",lat:"51.206777",lng:"-0.563556",imgs:["property-4-1.jpg"],imgAlt:"property 4 image",displayPrice:"\xa3100,000",price:1e5,propertyDesc:"Cosy 1 bedroom detatched property featuring a complete lack of plumbing.",type:"detached house",bedrooms:1,bathrooms:0,livingRooms:1,address:"an address, somewhere",features:["detached","quiet area","plenty of outside space"]},{id:"4",lat:"51.221523",lng:"-0.596995",imgs:["property-5-1.jpg"],imgAlt:"property 5 image",displayPrice:"\xa3200,000",price:2e5,propertyDesc:"Detached house with plenty of character. In need of some repair.",type:"detached house",bedrooms:1,bathrooms:1,livingRooms:1,address:"an address, somewhere",features:["glass in almost all windows","quirky character","plenty of outside space"]}],savedItems:[],currentItem:null,minPrice:0,maxPrice:1e6,minBedrooms:1,maxBedrooms:10},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.a:var r=e.properties.find((function(e){return e.id===t.payload.id})),a=e.savedItems.find((function(e){return e.id===t.payload.id}));return Object(f.a)(Object(f.a)({},e),{},{savedItems:a?e.savedItems.map((function(e){return e.id===t.payload.id?Object(f.a)(Object(f.a)({},e),{},{qty:e.qty+1}):e})):[].concat(Object(j.a)(e.savedItems),[Object(f.a)(Object(f.a)({},r),{},{qty:1})])});case g.g:return Object(f.a)(Object(f.a)({},e),{},{savedItems:e.savedItems.filter((function(e){return e.id!==t.payload.id}))});case g.f:return Object(f.a)(Object(f.a)({},e),{},{currentItem:t.payload});case g.e:return Object(f.a)(Object(f.a)({},e),{},{minPrice:t.payload});case g.c:return Object(f.a)(Object(f.a)({},e),{},{maxPrice:t.payload});case g.d:return Object(f.a)(Object(f.a)({},e),{},{minBedrooms:t.payload});case g.b:return Object(f.a)(Object(f.a)({},e),{},{maxBedrooms:t.payload});default:return e}},w=Object(y.combineReducers)({save:v}),x=r(27);var I=Object(y.createStore)(w,function(){try{var e=localStorage.getItem("persistantState");if(null===e)return;return JSON.parse(e)}catch(t){return void console.warn(t)}}(),Object(x.composeWithDevTools)());I.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("persistantState",t)}catch(r){console.warn(r)}}(I.getState())}));var E=I;n.a.render(Object(d.jsx)(i.a,{store:E,children:Object(d.jsx)(s.a,{children:Object(d.jsx)(b,{})})}),document.getElementById("root"))},9:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"g",(function(){return o})),r.d(t,"f",(function(){return n})),r.d(t,"e",(function(){return s})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return i})),r.d(t,"b",(function(){return d}));var a="ADD_TO_SAVED",o="REMOVE_FROM_SAVED",n="LOAD_CURRENT_ITEM",s="GET_MINPRICE_VALUE",c="GET_MAXPRICE_VALUE",i="GET_MINBEDS_VALUE",d="GET_MAXBEDS_VALUE"}},[[41,6,8]]]);
//# sourceMappingURL=main.8607c45b.chunk.js.map