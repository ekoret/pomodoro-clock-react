(this["webpackJsonppomodoro-clock-react"]=this["webpackJsonppomodoro-clock-react"]||[]).push([[0],{13:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),s=c(7),i=c.n(s),o=c(4),u=c(1),a=c(3),j=c(0);function b(e){var t=e.clockTime,c=e.currentClockRef,n=t[c.current].minutes<10?"0".concat(t[c.current].minutes):t[c.current].minutes,r=t[c.current].seconds<10?"0".concat(t[c.current].seconds):t[c.current].seconds,s="work"===c.current?t.break:t.work,i=s.minutes<10?"0".concat(s.minutes):s.minutes,o=s.seconds<10?"0".concat(s.seconds):s.seconds,u="work"===c.current?"Break":"Work";return Object(j.jsxs)("div",{className:"display",children:[Object(j.jsxs)("div",{className:"main-display",children:[Object(j.jsx)("div",{className:"minutes",children:Object(j.jsx)("h2",{children:n})}),Object(j.jsx)("span",{children:":"}),Object(j.jsx)("div",{className:"seconds",children:Object(j.jsx)("h2",{children:r})})]}),Object(j.jsxs)("div",{className:"other-clock",children:[Object(j.jsxs)("h6",{children:[u," set as"]}),Object(j.jsx)("h4",{children:"".concat(i," : ").concat(o)})]})]})}function l(e){var t=e.isRunning,c=e.setIsRunning,n=e.setClockTime,r=e.customSettingsRef,s=e.currentClockRef,i=e.viewSettings,o=e.setViewSettings,a=t?"Pause":"Start";return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"controls",children:[Object(j.jsxs)("div",{className:"clock-controls",children:[Object(j.jsx)("button",{onClick:function(){return c(!t)},className:"start-pause",type:"button",children:a}),Object(j.jsx)("button",{onClick:function(){c(!1),n(Object(u.a)(Object(u.a)({},r.current),{},{currentClock:s.current}))},className:"reset",type:"button",children:"Reset"})]}),Object(j.jsx)("button",{onClick:function(){return o(!i)},className:"settings-button",type:"button",children:"Settings"})]})})}function d(e){var t=e.setClockTime,c=e.customSettingsRef,n=e.setViewSettings,r=function(e){e.preventDefault();var n=new FormData(e.target).values(),r=Object(a.a)(n,2),s=r[0],i=r[1];"work-form"===e.target.id?c.current=Object(u.a)(Object(u.a)({},c.current),{},{work:{minutes:parseInt(s),seconds:parseInt(i)}}):c.current=Object(u.a)(Object(u.a)({},c.current),{},{break:{minutes:parseInt(s),seconds:parseInt(i)}}),t(c.current)};return Object(j.jsxs)("div",{className:"settings fadeIn",children:[Object(j.jsx)("h2",{children:"Custom Settings"}),Object(j.jsxs)("div",{className:"forms-container",children:[Object(j.jsxs)("form",{id:"work-form",onSubmit:function(e){return r(e)},children:[Object(j.jsx)("h3",{children:"Work Time"}),Object(j.jsx)("label",{children:"Enter Minutes"}),Object(j.jsx)("input",{name:"custom-minutes",type:"number",pattern:"\\d*",required:!0}),Object(j.jsx)("label",{children:"Enter Seconds"}),Object(j.jsx)("input",{name:"custom-seconds",type:"number",pattern:"\\d*",required:!0}),Object(j.jsx)("button",{type:"submit",children:"Submit"})]}),Object(j.jsxs)("form",{id:"break-form",onSubmit:function(e){return r(e)},children:[Object(j.jsx)("h3",{children:"Break Time"}),Object(j.jsx)("label",{children:"Enter Minutes"}),Object(j.jsx)("input",{name:"custom-minutes",type:"number",pattern:"\\d*",required:!0}),Object(j.jsx)("label",{children:"Enter Seconds"}),Object(j.jsx)("input",{name:"custom-seconds",type:"number",pattern:"\\d*",required:!0}),Object(j.jsx)("button",{type:"submit",children:"Submit"})]})]}),Object(j.jsx)("button",{className:"cancel-button",onClick:function(){n(!1)},type:"button",children:"Close"})]})}function m(){var e={currentClock:"work",work:{minutes:0,seconds:3},break:{minutes:0,seconds:5}},t=Object(n.useState)(!1),c=Object(a.a)(t,2),r=c[0],s=c[1],i=Object(n.useState)(e),m=Object(a.a)(i,2),O=m[0],k=m[1],h=Object(n.useRef)(e),x=Object(n.useRef)(O.currentClock),f=Object(n.useState)(!1),p=Object(a.a)(f,2),w=p[0],v=p[1],S=w&&Object(j.jsx)(d,{setClockTime:k,customSettingsRef:h,setViewSettings:v,viewSettings:w});Object(n.useEffect)((function(){if(r){var e=setInterval((function(){0===O[x.current].seconds?0!==O[x.current].minutes?k(Object(u.a)(Object(u.a)({},O),{},Object(o.a)({},x.current,{minutes:O[x.current].minutes-1,seconds:59}))):(s(!1),"work"===O.currentClock?(x.current="break",k(Object(u.a)(Object(u.a)({},O),{},{work:h.current.work,currentClock:"break"}))):(x.current="work",k(Object(u.a)(Object(u.a)({},O),{},{break:h.current.break,currentClock:"work"})))):k(Object(u.a)(Object(u.a)({},O),{},Object(o.a)({},x.current,Object(u.a)(Object(u.a)({},O[x.current]),{},{seconds:O[x.current].seconds-1}))))}),1e3);return function(){return clearInterval(e)}}}),[r,O]);var g=function(e){var t=e.target.id;t="work-switch"===t?"work":"break",s(!1),x.current=t,k(Object(u.a)(Object(u.a)({},h.current),{},{currentClock:x.current}))};return Object(j.jsxs)("div",{className:"clock-container",children:[Object(j.jsxs)("div",{className:"clock-switch",children:[Object(j.jsx)("button",{id:"work-switch",onClick:function(e){return g(e)},type:"button",children:"Work"}),Object(j.jsx)("button",{id:"break-switch",onClick:function(e){return g(e)},type:"button",children:"Break"})]}),Object(j.jsxs)("h4",{children:["It's currently ",x.current," time"]}),Object(j.jsx)(b,{clockTime:O,currentClockRef:x}),Object(j.jsx)("div",{className:"notice"}),Object(j.jsx)(l,{isRunning:r,setIsRunning:s,setClockTime:k,customSettingsRef:h,currentClockRef:x,viewSettings:w,setViewSettings:v}),S]})}c(6);function O(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Simple Pomodoro"}),Object(j.jsx)(m,{})]})}i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))},6:function(e,t,c){}},[[13,1,2]]]);
//# sourceMappingURL=main.7e29566b.chunk.js.map