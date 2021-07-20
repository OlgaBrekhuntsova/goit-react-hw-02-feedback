(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,a){t.exports={dataStatistics:"Statistics_dataStatistics__1pdQu"}},,,,,function(t,e,a){t.exports={buttonList:"FeedbackOptions_buttonList__1vmh-",btn:"FeedbackOptions_btn__2WqTf",btnItem:"FeedbackOptions_btnItem__1z5Rj"}},,,function(t,e,a){t.exports={container:"Container_container__3WhFI"}},function(t,e,a){t.exports={title:"Section_title__1mkET"}},function(t){t.exports=JSON.parse('[{"label":"Good","bgC":"green","bgCHover":"rgb(1, 95, 1)"},{"label":"Neutral","bgC":"grey","bgCHover":"rgb(71, 70, 70)"},{"label":"Bad","bgC":"tomato","bgCHover":"rgb(207, 81, 58)"}]')},function(t,e,a){t.exports={notificationWarning:"Notification_notificationWarning__AX-q7"}},,,,,,function(t,e,a){},,,function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),c=a(9),i=a.n(c),o=(a(19),a(3)),r=a(4),b=a(6),l=a(5),d=a(10),u=a.n(d),j=a(0),h=function(t){var e=t.children;return Object(j.jsxs)("div",{className:u.a.container,children:[" ",e]})},g=a(11),v=a.n(g),f=function(t){var e=t.title,a=t.children;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:v.a.title,children:e}),a]})},O=a(2),p=a.n(O),x=function(t){Object(b.a)(a,t);var e=Object(l.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var t=this.props,e=t.good,a=t.neutral,n=t.bad,s=t.total,c=t.positivePercentage;return Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["Good: ",Object(j.jsx)("span",{className:p.a.dataStatistics,children:e})]}),Object(j.jsxs)("li",{children:["Neutral: ",Object(j.jsx)("span",{className:p.a.dataStatistics,children:a})]}),Object(j.jsxs)("li",{children:["Bad: ",Object(j.jsx)("span",{className:p.a.dataStatistics,children:n})]}),Object(j.jsxs)("li",{children:["Total: ",Object(j.jsx)("span",{className:p.a.dataStatistics,children:s})]}),Object(j.jsxs)("li",{children:["Positive feedback: ",Object(j.jsxs)("span",{className:p.a.dataStatistics,children:[c,"%"]})]})]})}}]),a}(n.Component);x.defaultProps={total:0,positivePercentage:"No data"};var k=x,m=a(14),_=a(7),N=a.n(_),S=function(t){var e=t.options,a=t.onLeaveFeedback;function s(t){var e=t.label,s=t.bgC,c=t.bgCHover,i=Object(n.useState)(s),o=Object(m.a)(i,2),r=o[0],b=o[1],l={background:"".concat(r)},d=function(t){b(t)};return Object(j.jsx)("button",{type:"button",className:N.a.btn,style:l,onMouseEnter:function(){return d(c)},onMouseLeave:function(){return d(s)},data_content:e,onClick:a,children:e})}return Object(j.jsx)("ul",{className:N.a.buttonList,children:e.map((function(t){var e=t.label,a=t.bgC,n=t.bgCHover;return Object(j.jsxs)("li",{className:N.a.btnItem,children:["   ",s({label:e,bgC:a,bgCHover:n})]},e)}))})},C=a(12),F=a(13),y=a.n(F),P=function(t){var e=t.message;return Object(j.jsx)("p",{className:y.a.notificationWarning,children:e})};P.defaultProps={message:"Something went wrong. Try to give feedback"};var w=P,L=function(t){Object(b.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={good:0,neutral:0,bad:0},t.onLeaveFeedback=function(e){switch(e.target.attributes.data_content.value){case"Good":var a=t.state.good;t.setState({good:a+1});break;case"Bad":var n=t.state.bad;t.setState({bad:n+1});break;default:var s=t.state.neutral;t.setState({neutral:s+1})}},t}return Object(r.a)(a,[{key:"countTotalFeedback",value:function(){return this.state.good+this.state.neutral+this.state.bad}},{key:"countPositiveFeedbackPercentage",value:function(){return(Math.round(this.state.good/(this.state.good+this.state.neutral+this.state.bad)*1e4)/100).toFixed(2)}},{key:"render",value:function(){return Object(j.jsxs)(h,{children:[Object(j.jsx)(f,{title:"Please leave feedback",children:Object(j.jsx)(S,{options:C,onLeaveFeedback:this.onLeaveFeedback})}),Object(j.jsx)(f,{title:"Statistics",children:this.countTotalFeedback()>0?Object(j.jsx)(k,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(j.jsx)(w,{message:"No feedback given"})})]})}}]),a}(n.Component);a(21);i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.122bf6f4.chunk.js.map