(this["webpackJsonpproperty-app"]=this["webpackJsonpproperty-app"]||[]).push([[15],{332:function(e,r,o){"use strict";o.r(r);var t=o(5),a=o(50),i=o(207),n=o(210),l=o(234),s=o(218),c=o(0),m=o.n(c),p=o(12),u=[{value:"priceHighToLow",label:"Price - High to Low"},{value:"priceLowToHigh",label:"Price - Low to High"},{value:"bedsHighToLow",label:"Bedrooms - High to Low"},{value:"bedsLowToHigh",label:"Bedrooms - Low to High"}];var d=Object(c.lazy)((function(){return o.e(2).then(o.bind(null,276))})),b=Object(c.lazy)((function(){return o.e(3).then(o.bind(null,265))})),h=Object(c.lazy)((function(){return o.e(10).then(o.bind(null,330))}));r.default=Object(p.b)((function(e){return{properties:e.save.properties,minPrice:e.save.minPrice,maxPrice:e.save.maxPrice,minBedrooms:e.save.minBedrooms,maxBedrooms:e.save.maxBedrooms}}))((function(e){var r=e.properties,o=e.minPrice,p=e.maxPrice,v=e.minBedrooms,f=e.maxBedrooms,g={margin:Object(a.a)().spacing(1),minWidth:120},w=m.a.useState(r),L=Object(t.a)(w,2),H=(L[0],L[1]);return m.a.createElement("div",{className:"appContainer"},m.a.createElement(c.Suspense,{fallback:m.a.createElement("div",null)},m.a.createElement(d,null),m.a.createElement("div",null,m.a.createElement(b,null),m.a.createElement("div",{className:"listViewList"},m.a.createElement(i.a,{sx:g},m.a.createElement(n.a,{id:"demo-simple-select-label"},"Sort By:"),m.a.createElement(l.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",defaultValue:"bedsHighToLow",onChange:function(e){!function(e,r,o){"priceHighToLow"===e?o({sortedProperties:r.sort((function(e,r){return r.price>e.price?1:e.price>r.price?-1:0}))}):"priceLowToHigh"===e?o({sortedProperties:r.sort((function(e,r){return e.price>r.price?1:r.price>e.price?-1:0}))}):"bedsHighToLow"===e?o({sortedProperties:r.sort((function(e,r){return r.bedrooms>e.bedrooms?1:e.bedrooms>r.bedrooms?-1:0}))}):"bedsLowToHigh"===e&&o({sortedProperties:r.sort((function(e,r){return e.bedrooms>r.bedrooms?1:r.bedrooms>e.bedrooms?-1:0}))})}(e.target.value,r,H)}},u.map((function(e,r){return m.a.createElement(s.a,{key:r,value:e.value},e.label)})))),r.map((function(e){return r=e.price,t=e.bedrooms,r>=o&&r<=p&&t>=v&&t<=f&&m.a.createElement(h,{key:e.id,propertyData:e});var r,t}))))))}))}}]);
//# sourceMappingURL=15.6d71925f.chunk.js.map