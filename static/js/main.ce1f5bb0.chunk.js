(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],{190:function(e,t,n){},384:function(e,t,n){},385:function(e,t,n){},386:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),i=n.n(c),s=(n(190),n(185)),l=n(184),o=n(30),u=n(31),j=n(34),p=n(33),b=n(29),h=n.n(b),O=(n(53),n(22)),f=n.n(O),v=(n(40),n(70)),x=n(10),d=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.nextStep()},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props;e.values,e.handleChange;return Object(x.jsx)(h.a,{children:Object(x.jsxs)(r.a.Fragment,{children:[Object(x.jsx)("h4",{children:"Select Verification Proof"}),Object(x.jsx)(v.a,{label:"Aadhaar Card",primary:!0,onClick:this.continue}),Object(x.jsx)("br",{}),Object(x.jsx)(v.a,{label:"Passport",primary:!0,onClick:this.continue}),Object(x.jsx)("br",{}),Object(x.jsx)(v.a,{label:"Driving licence",primary:!0,size:"large",onClick:this.continue})]})})}}]),n}(a.Component),g=n(32),m=n.n(g),C=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.values,n=e.handleChange;return Object(x.jsx)(h.a,{children:Object(x.jsxs)(r.a.Fragment,{children:[Object(x.jsx)(f.a,{hintText:"Enter ID number",floatingLabelText:"ID number",onChange:n("Occupation"),defaultValue:t.Occupation}),Object(x.jsx)("br",{}),Object(x.jsx)(m.a,{label:"Continue",primary:!0,style:y.button,onClick:this.continue}),Object(x.jsx)(m.a,{label:"Back",primary:!1,style:y.button,onClick:this.back})]})})}}]),n}(a.Component),y={button:{margin:15}},S=C,k=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props;e.values,e.handleChange;return Object(x.jsx)(h.a,{children:Object(x.jsxs)(r.a.Fragment,{children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:"upload file"}),Object(x.jsx)("input",{type:"file",name:"img"})]}),Object(x.jsx)("br",{}),Object(x.jsx)(m.a,{label:"Continue",primary:!0,style:D.button,onClick:this.continue}),Object(x.jsx)(m.a,{label:"Back",primary:!1,style:D.button,onClick:this.back})]})})}}]),n}(a.Component),D={button:{margin:15}},w=k,N=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={step:1},e.nextStep=function(){var t=e.state.step;e.setState({step:t+1})},e.prevStep=function(){var t=e.state.step;e.setState({step:t-1})},e.handleChange=function(t){return function(n){e.setState(Object(l.a)({},t,n.target.value))}},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.step,t=this.state,n={firstName:t.firstName,lastName:t.lastName};switch(e){case 1:return Object(x.jsx)(d,{nextStep:this.nextStep,handleChange:this.handleChange,values:n});case 2:return Object(x.jsx)(S,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,values:n});case 3:return Object(x.jsx)(w,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,values:n});case 4:return Object(x.jsxs)("h3",{children:["Success ",Object(x.jsx)("h5",{children:"we will verify soon..."})]})}}}]),n}(a.Component);n(384);var F=function(e){return e.trigger?Object(x.jsx)("div",{className:"popup",children:Object(x.jsxs)("div",{className:"popup-inner",children:[Object(x.jsx)(N,{}),Object(x.jsx)("button",{className:"close-btn",onClick:function(){return e.setTrigger(!1)},children:"close"}),e.children]})}):""};n(385);var A=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("br",{}),Object(x.jsx)("button",{className:"main-button",onClick:function(){return r(!0)},children:"E KYC Details"}),Object(x.jsx)(F,{trigger:n,setTrigger:r})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,387)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(A,{})}),document.getElementById("root")),T()}},[[386,1,2]]]);
//# sourceMappingURL=main.ce1f5bb0.chunk.js.map