(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,a){t.exports={statisticsList:"Statistics_statisticsList__1JwV3",dataStatistics:"Statistics_dataStatistics__1pdQu"}},,,,,function(t,e,a){t.exports={buttonList:"FeedbackOptions_buttonList__1vmh-",btn:"FeedbackOptions_btn__2WqTf",btnItem:"FeedbackOptions_btnItem__1z5Rj"}},,,function(t,e,a){t.exports={container:"Container_container__3WhFI"}},function(t,e,a){t.exports={title:"Section_title__1mkET"}},function(t){t.exports=JSON.parse('[{"label":"Good","bgC":"green","bgCHover":"rgb(1, 95, 1)"},{"label":"Neutral","bgC":"grey","bgCHover":"rgb(71, 70, 70)"},{"label":"Bad","bgC":"tomato","bgCHover":"rgb(207, 81, 58)"}]')},function(t,e,a){t.exports={notificationWarning:"Notification_notificationWarning__AX-q7"}},,,,,,function(t,e,a){},,,function(t,e,a){"use strict";a.r(e);var n=a(1),i=a.n(n),s=a(9),c=a.n(s),o=(a(19),a(3)),r=a(4),l=a(6),b=a(5),d=a(10),u=a.n(d),j=a(0),h=function(t){var e=t.children;return Object(j.jsxs)("div",{className:u.a.container,children:[" ",e]})},g=a(11),p=a.n(g),f=function(t){var e=t.title,a=t.children;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:p.a.title,children:e}),a]})},v=a(2),O=a.n(v),x=function(t){Object(l.a)(a,t);var e=Object(b.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var t=this.props,e=t.good,a=t.neutral,n=t.bad,i=t.total,s=t.positivePercentage;return Object(j.jsxs)("ul",{className:O.a.statisticsList,children:[Object(j.jsxs)("li",{children:["Good: ",Object(j.jsx)("span",{className:O.a.dataStatistics,children:e})]}),Object(j.jsxs)("li",{children:["Neutral: ",Object(j.jsx)("span",{className:O.a.dataStatistics,children:a})]}),Object(j.jsxs)("li",{children:["Bad: ",Object(j.jsx)("span",{className:O.a.dataStatistics,children:n})]}),Object(j.jsxs)("li",{children:["Total: ",Object(j.jsx)("span",{className:O.a.dataStatistics,children:i})]}),Object(j.jsxs)("li",{children:["Positive feedback: ",Object(j.jsxs)("span",{className:O.a.dataStatistics,children:[s,"%"]})]})]})}}]),a}(n.Component);x.defaultProps={total:0,positivePercentage:"No data"};var k=x,m=a(14),_=a(7),N=a.n(_),S=function(t){var e=t.options,a=t.onLeaveFeedback;function i(t){var e=t.label,i=t.bgC,s=t.bgCHover,c=Object(n.useState)(i),o=Object(m.a)(c,2),r=o[0],l=o[1],b={background:"".concat(r)},d=function(t){l(t)};return Object(j.jsx)("button",{type:"button",className:N.a.btn,style:b,onMouseEnter:function(){return d(s)},onMouseLeave:function(){return d(i)},data_content:e,onClick:a,children:e})}return Object(j.jsx)("ul",{className:N.a.buttonList,children:e.map((function(t){var e=t.label,a=t.bgC,n=t.bgCHover;return Object(j.jsxs)("li",{className:N.a.btnItem,children:["   ",i({label:e,bgC:a,bgCHover:n})]},e)}))})},C=a(12),F=a(13),y=a.n(F),P=function(t){var e=t.message;return Object(j.jsx)("p",{className:y.a.notificationWarning,children:e})};P.defaultProps={message:"Something went wrong. Try to give feedback"};var L=P,w=function(t){Object(l.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={good:t.props.initialGood,neutral:t.props.initialNeutral,bad:t.props.initialBad},t.onLeaveFeedback=function(e){switch(e.target.attributes.data_content.value){case"Good":t.setState((function(t){return{good:t.good+1}}));break;case"Bad":t.setState((function(t){return{bad:t.bad+1}}));break;default:t.setState((function(t){return{neutral:t.neutral+1}}))}},t}return Object(r.a)(a,[{key:"countTotalFeedback",value:function(){return this.state.good+this.state.neutral+this.state.bad}},{key:"countPositiveFeedbackPercentage",value:function(){return(Math.round(this.state.good/(this.state.good+this.state.neutral+this.state.bad)*1e4)/100).toFixed(2)}},{key:"render",value:function(){return Object(j.jsxs)(h,{children:[Object(j.jsx)(f,{title:"Please leave feedback",children:Object(j.jsx)(S,{options:C,onLeaveFeedback:this.onLeaveFeedback})}),Object(j.jsx)(f,{title:"Statistics",children:this.countTotalFeedback()>0?Object(j.jsx)(k,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(j.jsx)(L,{message:"No feedback given"})})]})}}]),a}(n.Component);w.defaultProps={initialGood:0,initialBad:0,initialNeutral:0};var T=w;a(21);c.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.294eaa49.chunk.js.map