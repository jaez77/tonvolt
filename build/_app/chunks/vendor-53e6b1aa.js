function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let i,s;function f(t,n){return i||(i=document.createElement("a")),i.href=n,t===i.href}function a(t,n,e,o){if(t){const r=l(t,n,e,o);return t[0](r)}}function l(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function d(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function h(t,n,e,o,r,c){if(r){const u=l(n,e,o,c);t.p(u,r)}}function p(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function $(t,n){t.appendChild(n)}function g(t,n,e){t.insertBefore(n,e||null)}function m(t){t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function x(){return b(" ")}function _(){return b("")}function k(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function w(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function E(t){s=t}function v(){if(!s)throw new Error("Function called outside component initialization");return s}function j(t){v().$$.on_mount.push(t)}function A(t){v().$$.after_update.push(t)}function z(t,n){v().$$.context.set(t,n)}const S=[],C=[],N=[],O=[],q=Promise.resolve();let B=!1;function M(t){N.push(t)}let T=!1;const D=new Set;function F(){if(!T){T=!0;do{for(let t=0;t<S.length;t+=1){const n=S[t];E(n),P(n.$$)}for(E(null),S.length=0;C.length;)C.pop()();for(let t=0;t<N.length;t+=1){const n=N[t];D.has(n)||(D.add(n),n())}N.length=0}while(S.length);for(;O.length;)O.pop()();B=!1,T=!1,D.clear()}}function P(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(M)}}const G=new Set;let H;function I(){H={r:0,c:[],p:H}}function J(){H.r||r(H.c),H=H.p}function K(t,n){t&&t.i&&(G.delete(t),t.i(n))}function L(t,n,e,o){if(t&&t.o){if(G.has(t))return;G.add(t),H.c.push((()=>{G.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function Q(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const u=t[c],i=n[c];if(i){for(const t in u)t in i||(o[t]=1);for(const t in i)r[t]||(e[t]=i[t],r[t]=1);t[c]=i}else for(const t in u)r[t]=1}for(const u in o)u in e||(e[u]=void 0);return e}function R(t){return"object"==typeof t&&null!==t?t:{}}function U(t){t&&t.c()}function V(t,n,o,u){const{fragment:i,on_mount:s,on_destroy:f,after_update:a}=t.$$;i&&i.m(n,o),u||M((()=>{const n=s.map(e).filter(c);f?f.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(M)}function W(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function X(t,n){-1===t.$$.dirty[0]&&(S.push(t),B||(B=!0,q.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Y(n,e,c,u,i,f,a,l=[-1]){const d=s;E(n);const h=n.$$={fragment:null,ctx:null,props:f,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:e.context||[]),callbacks:o(),dirty:l,skip_bound:!1,root:e.target||d.$$.root};a&&a(h.root);let p=!1;if(h.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return h.ctx&&i(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),p&&X(n,t)),e})):[],h.update(),p=!0,r(h.before_update),h.fragment=!!u&&u(h.ctx),e.target){if(e.hydrate){const t=($=e.target,Array.from($.childNodes));h.fragment&&h.fragment.l(t),t.forEach(m)}else h.fragment&&h.fragment.c();e.intro&&K(n.$$.fragment),V(n,e.target,e.anchor,e.customElement),F()}var $;E(d)}class Z{$destroy(){W(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const tt=[];function nt(n,e=t){let o;const r=new Set;function c(t){if(u(n,t)&&(n=t,o)){const t=!tt.length;for(const e of r)e[1](),tt.push(e,n);if(t){for(let t=0;t<tt.length;t+=2)tt[t][0](tt[t+1]);tt.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(u,i=t){const s=[u,i];return r.add(s),1===r.size&&(o=e(c)||t),u(n),()=>{r.delete(s),0===r.size&&(o(),o=null)}}}}export{p as A,d as B,$ as C,t as D,f as E,Z as S,k as a,g as b,w as c,m as d,y as e,U as f,x as g,_ as h,Y as i,Q as j,R as k,I as l,V as m,L as n,W as o,J as p,K as q,z as r,u as s,b as t,A as u,j as v,n as w,nt as x,a as y,h as z};