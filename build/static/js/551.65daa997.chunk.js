(self.webpackChunkproperty_app=self.webpackChunkproperty_app||[]).push([[551],{2775:function(n,e,t){"use strict";t.d(e,{v:function(){return u}});t(2791);var r=t(184);function u(n){var e=n.className,t=n.icon,u=n.quantity;return(0,r.jsxs)("div",{className:e,children:[t,(0,r.jsx)("p",{children:u})]})}},7551:function(n,e,t){"use strict";t.r(e);var r=t(7402),u=t(4151),i=t(7247),c=t(3823),o=t(3504),s=(t(2791),t(2775)),a=t(3527),l=t(8687),d=t(184);e.default=(0,l.$j)(null,(function(n){return{removeFromSaved:function(e){return n((0,r.YH)(e))},loadCurrentItem:function(e){return n((0,r.jw)(e))}}}))((function(n){var e=n.itemData,t=n.removeFromSaved,r=n.loadCurrentItem;return(0,d.jsxs)("div",{className:"listViewCardCont",children:[(0,d.jsx)("img",{src:"/property-app/images/properties/"+e.imgs[0],alt:e.imgAlt,className:"listViewPropertyImg"}),(0,d.jsxs)("div",{className:"listViewInfoCont savedInfoCont",children:[(0,d.jsx)("p",{className:"listViewPrice",children:e.displayPrice}),(0,d.jsxs)("p",{className:"listViewTagline",children:[e.bedrooms," bed ",e.type," for sale"]}),(0,d.jsxs)("div",{className:"roomTypes",children:[(0,d.jsx)(s.v,{className:"indiRoomType",icon:(0,d.jsx)(c.Z,{}),quantity:e.bedrooms}),(0,d.jsx)(s.v,{className:"indiRoomType",icon:(0,d.jsx)(u.Z,{}),quantity:e.bathrooms}),(0,d.jsx)(s.v,{className:"indiRoomType",icon:(0,d.jsx)(a.Z,{}),quantity:e.livingRooms})]}),(0,d.jsx)("p",{className:"listViewDesc",children:e.propertyDesc}),(0,d.jsxs)("div",{className:"savedBtnsContainer",children:[(0,d.jsx)(o.rU,{to:"/property-profile/".concat(e.id),className:"savedMoreBtn btn",onClick:function(){return r(e)},children:"find out more"}),(0,d.jsx)("button",{className:"btn deleteBtn",onClick:function(){return t(e.id)},children:(0,d.jsx)(i.Z,{})})]})]})]})}))},7402:function(n,e,t){"use strict";t.d(e,{IV:function(){return u},SO:function(){return a},YH:function(){return i},dt:function(){return o},jw:function(){return c},rS:function(){return s},ue:function(){return l}});var r=t(6953),u=function(n){return{type:r.$J,payload:{id:n}}},i=function(n){return{type:r.Go,payload:{id:n}}},c=function(n){return{type:r.tM,payload:n}},o=function(n){return{type:r.py,payload:n}},s=function(n){return{type:r.t8,payload:n}},a=function(n){return{type:r.tj,payload:n}},l=function(n){return{type:r.Br,payload:n}}},4151:function(n,e,t){"use strict";var r=t(4836);e.Z=void 0;var u=r(t(5649)),i=t(184),c=(0,u.default)([(0,i.jsx)("circle",{cx:"7",cy:"7",r:"2"},"0"),(0,i.jsx)("path",{d:"M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.51l1.25-1.25c.15-.15.36-.24.58-.24.46 0 .83.37.83.83V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.31-.15-.65-.23-1-.23C6 10.01 5 11.01 5 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6h-2z"},"1")],"Bathtub");e.Z=c},7247:function(n,e,t){"use strict";var r=t(4836);e.Z=void 0;var u=r(t(5649)),i=t(184),c=(0,u.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=c},3823:function(n,e,t){"use strict";var r=t(4836);e.Z=void 0;var u=r(t(5649)),i=t(184),c=(0,u.default)((0,i.jsx)("path",{d:"M20 10V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L4 19h1l.67-2h12.67l.66 2h1l.67-2H22v-5c0-1.1-.9-2-2-2zm-9 0H6V7h5v3zm7 0h-5V7h5v3z"}),"KingBed");e.Z=c},3527:function(n,e,t){"use strict";var r=t(4836);e.Z=void 0;var u=r(t(5649)),i=t(184),c=(0,u.default)((0,i.jsx)("path",{d:"M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.89-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.52 2 2.81V14h12v-2.03c0-1.3.84-2.4 2-2.81V7c0-1.1-.9-2-2-2z"}),"Weekend");e.Z=c},5649:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(8610)},1260:function(n,e,t){"use strict";var r=t(8949);e.Z=r.Z},8610:function(n,e,t){"use strict";t.r(e),t.d(e,{capitalize:function(){return u.Z},createChainedFunction:function(){return i.Z},createSvgIcon:function(){return c.Z},debounce:function(){return o.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return a.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return f},setRef:function(){return p},unstable_ClassNameGenerator:function(){return b},unstable_useEnhancedEffect:function(){return v.Z},unstable_useId:function(){return m.Z},unsupportedProp:function(){return h},useControlled:function(){return y.Z},useEventCallback:function(){return Z.Z},useForkRef:function(){return j.Z},useIsFocusVisible:function(){return x.Z}});var r=t(5902),u=t(4036),i=t(1260),c=t(4223),o=t(3199);var s=function(n,e){return function(){return null}},a=t(9103),l=t(8301),d=t(7602);t(7462);var f=function(n,e){return function(){return null}},p=t(2971).Z,v=t(162),m=t(7384);var h=function(n,e,t,r,u){return null},y=t(8278),Z=t(9683),j=t(2071),x=t(8221),b={configure:function(n){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.Z.configure(n)}}},7384:function(n,e,t){"use strict";var r=t(6248);e.Z=r.Z},6248:function(n,e,t){"use strict";var r;t.d(e,{Z:function(){return s}});var u=t(9439),i=t(2791),c=0;var o=(r||(r=t.t(i,2))).useId;function s(n){if(void 0!==o){var e=o();return null!=n?n:e}return function(n){var e=i.useState(n),t=(0,u.Z)(e,2),r=t[0],o=t[1],s=n||r;return i.useEffect((function(){null==r&&o("mui-".concat(c+=1))}),[r]),s}(n)}},4836:function(n){n.exports=function(n){return n&&n.__esModule?n:{default:n}},n.exports.__esModule=!0,n.exports.default=n.exports}}]);
//# sourceMappingURL=551.65daa997.chunk.js.map