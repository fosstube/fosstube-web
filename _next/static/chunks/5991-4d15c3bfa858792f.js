(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5991],{38663:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(56339),o=n(28973),a=n(65403),i=n(33501),u=n(7811),l=n(860),s=n(23483),c=n(13606),f=n(36126),d=n(58804),p=n(41090),m=n(49940),y=n(92905);function v(e){return(0,y.Z)("MuiLink",e)}let g=(0,m.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var h=n(17276),b=n(56918);let S={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},O=e=>S[e]||e;var w=({theme:e,ownerState:t})=>{let n=O(t.color),r=(0,h.DW)(e,`palette.${n}`,!1)||t.color,o=(0,h.DW)(e,`palette.${n}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:(0,b.Fq)(r,.4)},A=n(7062);let j=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],x=e=>{let{classes:t,component:n,focusVisible:r,underline:o}=e,a={root:["root",`underline${(0,l.Z)(o)}`,"button"===n&&"button",r&&"focusVisible"]};return(0,u.Z)(a,v,t)},D=(0,s.ZP)(p.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`underline${(0,l.Z)(n.underline)}`],"button"===n.component&&t.button]}})(({theme:e,ownerState:t})=>(0,o.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:w({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${g.focusVisible}`]:{outline:"auto"}})),P=a.forwardRef(function(e,t){let n=(0,c.Z)({props:e,name:"MuiLink"}),{className:u,color:l="primary",component:s="a",onBlur:p,onFocus:m,TypographyClasses:y,underline:v="always",variant:g="inherit",sx:h}=n,b=(0,r.Z)(n,j),{isFocusVisibleRef:O,onBlur:w,onFocus:P,ref:Z}=(0,f.Z)(),[R,L]=a.useState(!1),E=(0,d.Z)(t,Z),C=(0,o.Z)({},n,{color:l,component:s,focusVisible:R,underline:v,variant:g}),T=x(C);return(0,A.jsx)(D,(0,o.Z)({color:l,className:(0,i.Z)(T.root,u),classes:y,component:s,onBlur:e=>{w(e),!1===O.current&&L(!1),p&&p(e)},onFocus:e=>{P(e),!0===O.current&&L(!0),m&&m(e)},ref:E,ownerState:C,variant:g,sx:[...Object.keys(S).includes(l)?[]:[{color:l}],...Array.isArray(h)?h:[h]]},b))});var Z=P},41090:function(e,t,n){"use strict";n.d(t,{Z:function(){return A}});var r=n(56339),o=n(28973),a=n(65403),i=n(33501),u=n(35807),l=n(7811),s=n(23483),c=n(13606),f=n(860),d=n(49940),p=n(92905);function m(e){return(0,p.Z)("MuiTypography",e)}(0,d.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var y=n(7062);let v=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=e=>{let{align:t,gutterBottom:n,noWrap:r,paragraph:o,variant:a,classes:i}=e,u={root:["root",a,"inherit"!==e.align&&`align${(0,f.Z)(t)}`,n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return(0,l.Z)(u,m,i)},h=(0,s.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t[`align${(0,f.Z)(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,o.Z)({margin:0},"inherit"===t.variant&&{font:"inherit"},"inherit"!==t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},S={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},O=e=>S[e]||e,w=a.forwardRef(function(e,t){let n=(0,c.Z)({props:e,name:"MuiTypography"}),a=O(n.color),l=(0,u.Z)((0,o.Z)({},n,{color:a})),{align:s="inherit",className:f,component:d,gutterBottom:p=!1,noWrap:m=!1,paragraph:S=!1,variant:w="body1",variantMapping:A=b}=l,j=(0,r.Z)(l,v),x=(0,o.Z)({},l,{align:s,color:a,className:f,component:d,gutterBottom:p,noWrap:m,paragraph:S,variant:w,variantMapping:A}),D=d||(S?"p":A[w]||b[w])||"span",P=g(x);return(0,y.jsx)(h,(0,o.Z)({as:D,ref:t,ownerState:x,className:(0,i.Z)(P.root,f)},j))});var A=w},23852:function(e,t,n){!function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(t),a=r(n);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){var r,o;r=t,o=n[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(r))in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var c=["animationData","loop","autoplay","initialSegment","onComplete","onLoopComplete","onEnterFrame","onSegmentStart","onConfigReady","onDataReady","onDataFailed","onLoadedImages","onDOMLoaded","onDestroy","lottieRef","renderer","name","assetsPath","rendererSettings"],f=function(e,t){var r=e.animationData,i=e.loop,f=e.autoplay,d=e.initialSegment,p=e.onComplete,m=e.onLoopComplete,y=e.onEnterFrame,v=e.onSegmentStart,g=e.onConfigReady,h=e.onDataReady,b=e.onDataFailed,S=e.onLoadedImages,O=e.onDOMLoaded,w=e.onDestroy;e.lottieRef,e.renderer,e.name,e.assetsPath,e.rendererSettings;var A=l(e,c),j=n.useState(!1),x=function(e){if(Array.isArray(e))return e}(j)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,u=[],l=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw o}}return u}}(j,2)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}}(j,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),D=x[0],P=x[1],Z=n.useRef(),R=n.useRef(null),L=function(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(R.current){null===(t=Z.current)||void 0===t||t.destroy();var r=u(u(u({},e),n),{},{container:R.current});return Z.current=o.default.loadAnimation(r),P(!!Z.current),function(){var e;null===(e=Z.current)||void 0===e||e.destroy(),Z.current=void 0}}};return n.useEffect(function(){var e=L();return function(){return null==e?void 0:e()}},[r,i]),n.useEffect(function(){Z.current&&(Z.current.autoplay=!!f)},[f]),n.useEffect(function(){if(Z.current){if(!d){Z.current.resetSegments(!0);return}Array.isArray(d)&&d.length&&((Z.current.currentRawFrame<d[0]||Z.current.currentRawFrame>d[1])&&(Z.current.currentRawFrame=d[0]),Z.current.setSegment(d[0],d[1]))}},[d]),n.useEffect(function(){var e=[{name:"complete",handler:p},{name:"loopComplete",handler:m},{name:"enterFrame",handler:y},{name:"segmentStart",handler:v},{name:"config_ready",handler:g},{name:"data_ready",handler:h},{name:"data_failed",handler:b},{name:"loaded_images",handler:S},{name:"DOMLoaded",handler:O},{name:"destroy",handler:w}].filter(function(e){return null!=e.handler});if(e.length){var t=e.map(function(e){var t;return null===(t=Z.current)||void 0===t||t.addEventListener(e.name,e.handler),function(){var t;null===(t=Z.current)||void 0===t||t.removeEventListener(e.name,e.handler)}});return function(){t.forEach(function(e){return e()})}}},[p,m,y,v,g,h,b,S,O,w]),{View:a.default.createElement("div",u({style:t,ref:R},A)),play:function(){var e;null===(e=Z.current)||void 0===e||e.play()},stop:function(){var e;null===(e=Z.current)||void 0===e||e.stop()},pause:function(){var e;null===(e=Z.current)||void 0===e||e.pause()},setSpeed:function(e){var t;null===(t=Z.current)||void 0===t||t.setSpeed(e)},goToAndStop:function(e,t){var n;null===(n=Z.current)||void 0===n||n.goToAndStop(e,t)},goToAndPlay:function(e,t){var n;null===(n=Z.current)||void 0===n||n.goToAndPlay(e,t)},setDirection:function(e){var t;null===(t=Z.current)||void 0===t||t.setDirection(e)},playSegments:function(e,t){var n;null===(n=Z.current)||void 0===n||n.playSegments(e,t)},setSubframe:function(e){var t;null===(t=Z.current)||void 0===t||t.setSubframe(e)},getDuration:function(e){var t;return null===(t=Z.current)||void 0===t?void 0:t.getDuration(e)},destroy:function(){var e;null===(e=Z.current)||void 0===e||e.destroy(),Z.current=void 0},animationContainerRef:R,animationLoaded:D,animationItem:Z.current}},d=function(e){var t=e.wrapperRef,r=e.animationItem,o=e.mode,a=e.actions;n.useEffect(function(){var e,n,i,u,l,s=t.current;if(s&&r&&a.length)switch(r.stop(),o){case"scroll":return e=null,n=function(){var t,n,o,i=(n=(t=s.getBoundingClientRect()).top,o=t.height,(window.innerHeight-n)/(window.innerHeight+o)),u=a.find(function(e){var t=e.visibility;return t&&i>=t[0]&&i<=t[1]});if(u){if("seek"===u.type&&u.visibility&&2===u.frames.length){var l=u.frames[0]+Math.ceil((i-u.visibility[0])/(u.visibility[1]-u.visibility[0])*u.frames[1]);r.goToAndStop(l-r.firstFrame-1,!0)}"loop"===u.type&&(null===e?(r.playSegments(u.frames,!0),e=u.frames):e!==u.frames?(r.playSegments(u.frames,!0),e=u.frames):r.isPaused&&(r.playSegments(u.frames,!0),e=u.frames)),"play"===u.type&&r.isPaused&&(r.resetSegments(!0),r.play()),"stop"===u.type&&r.goToAndStop(u.frames[0]-r.firstFrame-1,!0)}},document.addEventListener("scroll",n),function(){document.removeEventListener("scroll",n)};case"cursor":return i=function(e,t){var n=e,o=t;if(-1!==n&&-1!==o){var i,u,l,c,f=(i=n,u=o,c=(l=s.getBoundingClientRect()).top,{x:(i-l.left)/l.width,y:(u-c)/l.height});n=f.x,o=f.y}var d=a.find(function(e){var t=e.position;return t&&Array.isArray(t.x)&&Array.isArray(t.y)?n>=t.x[0]&&n<=t.x[1]&&o>=t.y[0]&&o<=t.y[1]:!(!t||Number.isNaN(t.x)||Number.isNaN(t.y))&&n===t.x&&o===t.y});if(d){if("seek"===d.type&&d.position&&Array.isArray(d.position.x)&&Array.isArray(d.position.y)&&2===d.frames.length){var p=(n-d.position.x[0])/(d.position.x[1]-d.position.x[0]),m=(o-d.position.y[0])/(d.position.y[1]-d.position.y[0]);r.playSegments(d.frames,!0),r.goToAndStop(Math.ceil((p+m)/2*(d.frames[1]-d.frames[0])),!0)}"loop"===d.type&&r.playSegments(d.frames,!0),"play"===d.type&&(r.isPaused&&r.resetSegments(!1),r.playSegments(d.frames)),"stop"===d.type&&r.goToAndStop(d.frames[0],!0)}},u=function(e){i(e.clientX,e.clientY)},l=function(){i(-1,-1)},s.addEventListener("mousemove",u),s.addEventListener("mouseout",l),function(){s.removeEventListener("mousemove",u),s.removeEventListener("mouseout",l)}}},[o,r])},p=function(e){var t=e.actions,n=e.mode,r=e.lottieObj,o=r.animationItem,a=r.View;return d({actions:t,animationItem:o,mode:n,wrapperRef:r.animationContainerRef}),a},m=["style","interactivity"];Object.defineProperty(e,"LottiePlayer",{enumerable:!0,get:function(){return o.default}}),e.default=function(e){var t,r,o,a=e.style,i=e.interactivity,u=f(l(e,m),a),s=u.View,c=u.play,d=u.stop,y=u.pause,v=u.setSpeed,g=u.goToAndStop,h=u.goToAndPlay,b=u.setDirection,S=u.playSegments,O=u.setSubframe,w=u.getDuration,A=u.destroy,j=u.animationContainerRef,x=u.animationLoaded,D=u.animationItem;return n.useEffect(function(){e.lottieRef&&(e.lottieRef.current={play:c,stop:d,pause:y,setSpeed:v,goToAndPlay:h,goToAndStop:g,setDirection:b,playSegments:S,setSubframe:O,getDuration:w,destroy:A,animationContainerRef:j,animationLoaded:x,animationItem:D})},[null===(t=e.lottieRef)||void 0===t?void 0:t.current]),p({lottieObj:{View:s,play:c,stop:d,pause:y,setSpeed:v,goToAndStop:g,goToAndPlay:h,setDirection:b,playSegments:S,setSubframe:O,getDuration:w,destroy:A,animationContainerRef:j,animationLoaded:x,animationItem:D},actions:null!==(r=null==i?void 0:i.actions)&&void 0!==r?r:[],mode:null!==(o=null==i?void 0:i.mode)&&void 0!==o?o:"scroll"})},e.useLottie=f,e.useLottieInteractivity=p,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(29442),n(65403))},16367:function(e,t){"use strict";function n(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}}]);