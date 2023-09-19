"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4329],{72055:function(e,t,n){n.d(t,{i:function(){return c}});var r=n(65403),l=n(65424),o=n(24613),u=n(7062);function i(e){let t=[],n=[];return Array.from(e.querySelectorAll('input,select,textarea,a[href],button,[tabindex],audio[controls],video[controls],[contenteditable]:not([contenteditable="false"])')).forEach((e,r)=>{let l=function(e){let t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:t}(e);-1===l||e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type||!e.name)return!1;let t=t=>e.ownerDocument.querySelector(`input[type="radio"]${t}`),n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}(e)||(0===l?t.push(e):n.push({documentOrder:r,tabIndex:l,node:e}))}),n.sort((e,t)=>e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex).map(e=>e.node).concat(t)}function a(){return!0}function c(e){let{children:t,disableAutoFocus:n=!1,disableEnforceFocus:c=!1,disableRestoreFocus:s=!1,getTabbable:d=i,isEnabled:f=a,open:m}=e,p=r.useRef(!1),h=r.useRef(null),v=r.useRef(null),y=r.useRef(null),g=r.useRef(null),E=r.useRef(!1),b=r.useRef(null),Z=(0,l.Z)(t.ref,b),R=r.useRef(null);r.useEffect(()=>{m&&b.current&&(E.current=!n)},[n,m]),r.useEffect(()=>{if(!m||!b.current)return;let e=(0,o.Z)(b.current);return!b.current.contains(e.activeElement)&&(b.current.hasAttribute("tabIndex")||b.current.setAttribute("tabIndex","-1"),E.current&&b.current.focus()),()=>{s||(y.current&&y.current.focus&&(p.current=!0,y.current.focus()),y.current=null)}},[m]),r.useEffect(()=>{if(!m||!b.current)return;let e=(0,o.Z)(b.current),t=t=>{R.current=t,!c&&f()&&"Tab"===t.key&&e.activeElement===b.current&&t.shiftKey&&(p.current=!0,v.current&&v.current.focus())},n=()=>{let t=b.current;if(null===t)return;if(!e.hasFocus()||!f()||p.current){p.current=!1;return}if(t.contains(e.activeElement)||c&&e.activeElement!==h.current&&e.activeElement!==v.current)return;if(e.activeElement!==g.current)g.current=null;else if(null!==g.current)return;if(!E.current)return;let n=[];if((e.activeElement===h.current||e.activeElement===v.current)&&(n=d(b.current)),n.length>0){var r,l;let e=!!((null==(r=R.current)?void 0:r.shiftKey)&&(null==(l=R.current)?void 0:l.key)==="Tab"),t=n[0],o=n[n.length-1];"string"!=typeof t&&"string"!=typeof o&&(e?o.focus():t.focus())}else t.focus()};e.addEventListener("focusin",n),e.addEventListener("keydown",t,!0);let r=setInterval(()=>{e.activeElement&&"BODY"===e.activeElement.tagName&&n()},50);return()=>{clearInterval(r),e.removeEventListener("focusin",n),e.removeEventListener("keydown",t,!0)}},[n,c,s,f,m,d]);let x=e=>{null===y.current&&(y.current=e.relatedTarget),E.current=!0};return(0,u.jsxs)(r.Fragment,{children:[(0,u.jsx)("div",{tabIndex:m?0:-1,onFocus:x,ref:h,"data-testid":"sentinelStart"}),r.cloneElement(t,{ref:Z,onFocus:e=>{null===y.current&&(y.current=e.relatedTarget),E.current=!0,g.current=e.target;let n=t.props.onFocus;n&&n(e)}}),(0,u.jsx)("div",{tabIndex:m?0:-1,onFocus:x,ref:v,"data-testid":"sentinelEnd"})]})}},83405:function(e,t,n){n.d(t,{h:function(){return c}});var r=n(65403),l=n(69082),o=n(65424),u=n(24028),i=n(41526),a=n(7062);let c=r.forwardRef(function(e,t){let{children:n,container:c,disablePortal:s=!1}=e,[d,f]=r.useState(null),m=(0,o.Z)(r.isValidElement(n)?n.ref:null,t);return((0,u.Z)(()=>{!s&&f(("function"==typeof c?c():c)||document.body)},[c,s]),(0,u.Z)(()=>{if(d&&!s)return(0,i.Z)(t,d),()=>{(0,i.Z)(t,null)}},[t,d,s]),s)?r.isValidElement(n)?r.cloneElement(n,{ref:m}):(0,a.jsx)(r.Fragment,{children:n}):(0,a.jsx)(r.Fragment,{children:d?l.createPortal(n,d):d})})},9005:function(e,t,n){n.d(t,{G:function(){return u},g:function(){return s}});var r=n(24613),l=n(90564),o=n(26926);function u(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function i(e){return parseInt((0,l.Z)(e).getComputedStyle(e).paddingRight,10)||0}function a(e,t,n,r,l){let o=[t,n,...r];[].forEach.call(e.children,e=>{let t=-1===o.indexOf(e),n=!function(e){let t=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),n="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return t||n}(e);t&&n&&u(e,l)})}function c(e,t){let n=-1;return e.some((e,r)=>!!t(e)&&(n=r,!0)),n}class s{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(e,t){let n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&u(e.modalRef,!1);let r=function(e){let t=[];return[].forEach.call(e.children,e=>{"true"===e.getAttribute("aria-hidden")&&t.push(e)}),t}(t);a(t,e.mount,e.modalRef,r,!0);let l=c(this.containers,e=>e.container===t);return -1!==l?this.containers[l].modals.push(e):this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:r}),n}mount(e,t){let n=c(this.containers,t=>-1!==t.modals.indexOf(e)),u=this.containers[n];u.restore||(u.restore=function(e,t){let n=[],u=e.container;if(!t.disableScrollLock){let e;if(function(e){let t=(0,r.Z)(e);return t.body===e?(0,l.Z)(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(u)){let e=(0,o.Z)((0,r.Z)(u));n.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${i(u)+e}px`;let t=(0,r.Z)(u).querySelectorAll(".mui-fixed");[].forEach.call(t,t=>{n.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight=`${i(t)+e}px`})}if(u.parentNode instanceof DocumentFragment)e=(0,r.Z)(u).body;else{let t=u.parentElement,n=(0,l.Z)(u);e=(null==t?void 0:t.nodeName)==="HTML"&&"scroll"===n.getComputedStyle(t).overflowY?t:u}n.push({value:e.style.overflow,property:"overflow",el:e},{value:e.style.overflowX,property:"overflow-x",el:e},{value:e.style.overflowY,property:"overflow-y",el:e}),e.style.overflow="hidden"}return()=>{n.forEach(({value:e,el:t,property:n})=>{e?t.style.setProperty(n,e):t.style.removeProperty(n)})}}(u,t))}remove(e,t=!0){let n=this.modals.indexOf(e);if(-1===n)return n;let r=c(this.containers,t=>-1!==t.modals.indexOf(e)),l=this.containers[r];if(l.modals.splice(l.modals.indexOf(e),1),this.modals.splice(n,1),0===l.modals.length)l.restore&&l.restore(),e.modalRef&&u(e.modalRef,t),a(l.container,e.mount,e.modalRef,l.hiddenSiblings,!1),this.containers.splice(r,1);else{let e=l.modals[l.modals.length-1];e.modalRef&&u(e.modalRef,!1)}return n}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}},19182:function(e,t,n){n.d(t,{d:function(){return f}});var r=n(28973),l=n(65403),o=n(65424),u=n(24613),i=n(34039),a=n(155),c=n(79360),s=n(9005);let d=new s.g;function f(e){let{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:f=!1,manager:m=d,closeAfterTransition:p=!1,onTransitionEnter:h,onTransitionExited:v,children:y,onClose:g,open:E,rootRef:b}=e,Z=l.useRef({}),R=l.useRef(null),x=l.useRef(null),N=(0,o.Z)(x,b),[T,I]=l.useState(!E),O=!!y&&y.props.hasOwnProperty("in"),k=!0;("false"===e["aria-hidden"]||!1===e["aria-hidden"])&&(k=!1);let w=()=>(0,u.Z)(R.current),P=()=>(Z.current.modalRef=x.current,Z.current.mount=R.current,Z.current),S=()=>{m.mount(P(),{disableScrollLock:f}),x.current&&(x.current.scrollTop=0)},A=(0,i.Z)(()=>{let e=("function"==typeof t?t():t)||w().body;m.add(P(),e),x.current&&S()}),C=l.useCallback(()=>m.isTopModal(P()),[m]),L=(0,i.Z)(e=>{R.current=e,e&&(E&&C()?S():x.current&&(0,s.G)(x.current,k))}),j=l.useCallback(()=>{m.remove(P(),k)},[k,m]);l.useEffect(()=>()=>{j()},[j]),l.useEffect(()=>{E?A():O&&p||j()},[E,j,O,p,A]);let D=e=>t=>{var r;null==(r=e.onKeyDown)||r.call(e,t),"Escape"===t.key&&C()&&!n&&(t.stopPropagation(),g&&g(t,"escapeKeyDown"))},F=e=>t=>{var n;null==(n=e.onClick)||n.call(e,t),t.target===t.currentTarget&&g&&g(t,"backdropClick")};return{getRootProps:(t={})=>{let n=(0,c._)(e);delete n.onTransitionEnter,delete n.onTransitionExited;let l=(0,r.Z)({},n,t);return(0,r.Z)({role:"presentation"},l,{onKeyDown:D(l),ref:N})},getBackdropProps:(e={})=>(0,r.Z)({"aria-hidden":!0},e,{onClick:F(e),open:E}),getTransitionProps:()=>({onEnter:(0,a.Z)(()=>{I(!1),h&&h()},null==y?void 0:y.props.onEnter),onExited:(0,a.Z)(()=>{I(!0),v&&v(),p&&j()},null==y?void 0:y.props.onExited)}),rootRef:N,portalRef:L,isTopModal:C,exited:T,hasTransition:O}}},91168:function(e,t,n){n.d(t,{$:function(){return o}});var r=n(28973),l=n(53533);function o(e,t,n){return void 0===e||(0,l.X)(e)?t:(0,r.Z)({},t,{ownerState:(0,r.Z)({},t.ownerState,n)})}},79360:function(e,t,n){n.d(t,{_:function(){return r}});function r(e,t=[]){if(void 0===e)return{};let n={};return Object.keys(e).filter(n=>n.match(/^on[A-Z]/)&&"function"==typeof e[n]&&!t.includes(n)).forEach(t=>{n[t]=e[t]}),n}},53533:function(e,t,n){n.d(t,{X:function(){return r}});function r(e){return"string"==typeof e}},94376:function(e,t,n){n.d(t,{L:function(){return i}});var r=n(28973),l=n(33501),o=n(79360);function u(e){if(void 0===e)return{};let t={};return Object.keys(e).filter(t=>!(t.match(/^on[A-Z]/)&&"function"==typeof e[t])).forEach(n=>{t[n]=e[n]}),t}function i(e){let{getSlotProps:t,additionalProps:n,externalSlotProps:i,externalForwardedProps:a,className:c}=e;if(!t){let e=(0,l.Z)(null==a?void 0:a.className,null==i?void 0:i.className,c,null==n?void 0:n.className),t=(0,r.Z)({},null==n?void 0:n.style,null==a?void 0:a.style,null==i?void 0:i.style),o=(0,r.Z)({},n,a,i);return e.length>0&&(o.className=e),Object.keys(t).length>0&&(o.style=t),{props:o,internalRef:void 0}}let s=(0,o._)((0,r.Z)({},a,i)),d=u(i),f=u(a),m=t(s),p=(0,l.Z)(null==m?void 0:m.className,null==n?void 0:n.className,c,null==a?void 0:a.className,null==i?void 0:i.className),h=(0,r.Z)({},null==m?void 0:m.style,null==n?void 0:n.style,null==a?void 0:a.style,null==i?void 0:i.style),v=(0,r.Z)({},m,n,f,d);return p.length>0&&(v.className=p),Object.keys(h).length>0&&(v.style=h),{props:v,internalRef:m.ref}}},64496:function(e,t,n){n.d(t,{x:function(){return r}});function r(e,t,n){return"function"==typeof e?e(t,n):e}},25534:function(e,t,n){n.d(t,{y:function(){return s}});var r=n(28973),l=n(56339),o=n(65424),u=n(91168),i=n(94376),a=n(64496);let c=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function s(e){var t;let{elementType:n,externalSlotProps:s,ownerState:d,skipResolvingSlotProps:f=!1}=e,m=(0,l.Z)(e,c),p=f?{}:(0,a.x)(s,d),{props:h,internalRef:v}=(0,i.L)((0,r.Z)({},m,{externalSlotProps:p})),y=(0,o.Z)(v,null==p?void 0:p.ref,null==(t=e.additionalProps)?void 0:t.ref),g=(0,u.$)(n,(0,r.Z)({},h,{ref:y}),d);return g}}}]);