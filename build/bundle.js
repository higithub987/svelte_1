var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function i(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function l(){return s(" ")}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function d(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let p;function h(t){p=t}function m(t){(function(){if(!p)throw new Error("Function called outside component initialization");return p})().$$.on_mount.push(t)}const $=[],g=[],y=[],b=[],_=Promise.resolve();let x=!1;function v(t){y.push(t)}let w=!1;const k=new Set;function E(){if(!w){w=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];h(e),A(e.$$)}for(h(null),$.length=0;g.length;)g.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];k.has(e)||(k.add(e),e())}y.length=0}while($.length);for(;b.length;)b.pop()();x=!1,w=!1,k.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}const S=new Set;function T(t,e){-1===t.$$.dirty[0]&&($.push(t),x||(x=!0,_.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(u,c,a,s,l,f,d,m=[-1]){const $=p;h(u);const g=u.$$={fragment:null,ctx:null,props:f,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||($?$.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:c.target||$.$$.root};d&&d(g.root);let y=!1;if(g.ctx=a?a(u,c.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&l(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),y&&T(u,t)),e})):[],g.update(),y=!0,o(g.before_update),g.fragment=!!s&&s(g.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);g.fragment&&g.fragment.l(t),t.forEach(i)}else g.fragment&&g.fragment.c();c.intro&&((b=u.$$.fragment)&&b.i&&(S.delete(b),b.i(_))),function(t,n,u,c){const{fragment:i,on_mount:a,on_destroy:s,after_update:l}=t.$$;i&&i.m(n,u),c||v((()=>{const n=a.map(e).filter(r);s?s.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(v)}(u,c.target,c.anchor,c.customElement),E()}var b,_;h($)}function N(e){let n,o,r,u,p,h,m,$,g,y,b,_;return{c(){n=a("main"),o=a("h1"),r=s("Hello "),u=s(e[0]),p=s("!"),h=l(),m=a("p"),m.innerHTML='Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to\n    learn how to build Svelte apps.',$=l(),g=a("p"),y=s("This page has been open for "),b=s(e[1]),_=s("s."),f(o,"class","svelte-1e9puaw"),f(n,"class","svelte-1e9puaw")},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e),c(n,o),c(o,r),c(o,u),c(o,p),c(n,h),c(n,m),c(n,$),c(n,g),c(g,y),c(g,b),c(g,_)},p(t,[e]){1&e&&d(u,t[0]),2&e&&d(b,t[1])},i:t,o:t,d(t){t&&i(n)}}}function O(t,e,n){let{name:o}=e,r=0;return m((()=>{const t=setInterval((()=>{n(1,r++,r)}),1e3);return()=>{clearInterval(t)}})),t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o,r]}const C=new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),j(this,t,O,N,u,{name:0})}}({target:document.body,props:{name:"world"}});return"undefined"!=typeof module&&module.hot&&("undefined"!=typeof module&&module.hot.dispose((()=>{C.$destroy()})),"undefined"!=typeof module&&module.hot.accept()),C}();
//# sourceMappingURL=bundle.js.map
