"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[910],{197:function(t,e,n){n.d(e,{Df:function(){return o},R8:function(){return f},TP:function(){return i},tx:function(){return h},zv:function(){return p}});var r=n(861),a=n(757),s=n.n(a),c=n(243),u="e3a0c6c42d69ea58a91a9b6b24735154",o=function(){var t=(0,r.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(u));case 2:if(404!==(e=t.sent).status){t.next=5;break}throw new Error("Something went wrong, please try again",e.status);case 5:return t.abrupt("return",e.data);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:if(404!==(n=t.sent).status){t.next=5;break}throw new Error("Something went wrong, please try again",n.status);case 5:return t.abrupt("return",n.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:if(404!==(n=t.sent).status){t.next=5;break}throw new Error("Something went wrong, please try again",n.status);case 5:return t.abrupt("return",n.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:if(404!==(n=t.sent).status){t.next=5;break}throw new Error("Something went wrong, please try again",n.status);case 5:return t.abrupt("return",n.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat(u));case 2:if(404!==(n=t.sent).status){t.next=5;break}throw new Error("Something went wrong, please try again",n.status);case 5:return t.abrupt("return",n.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},910:function(t,e,n){n.r(e),n.d(e,{ERROR_MSG:function(){return f}});var r=n(861),a=n(439),s=n(757),c=n.n(s),u=n(791),o=n(689),i=n(197),p=n(551),h=n(184),f="Something went wrong, please try again";e.default=function(){var t=(0,u.useState)([]),e=(0,a.Z)(t,2),n=e[0],s=e[1],l=(0,u.useState)(!1),g=(0,a.Z)(l,2),w=g[0],v=g[1],m=(0,u.useState)(null),d=(0,a.Z)(m,2),x=d[0],k=d[1],b=(0,o.UO)().movieId;return(0,u.useEffect)((function(){function t(){return(t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,v(!0),k(null),t.next=5,i.zv(b);case 5:e=t.sent,console.log(e.cast),s(e.cast),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),k(f);case 13:return t.prev=13,v(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[b]),(0,h.jsxs)("ul",{children:[x&&(0,h.jsxs)("h1",{children:[x," "]}),w&&(0,h.jsx)(p.a,{}),n.map((function(t){return(0,h.jsxs)("li",{children:[t.profile_path?(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.profile_path),alt:t.name}):(0,h.jsx)("img",{src:"https://via.placeholder.com/200x300?text=No+Image",alt:t.name,width:"200px"}),(0,h.jsxs)("p",{children:[" ",t.name]}),(0,h.jsxs)("p",{children:["Character: ",t.character]})]},t.cast_id)}))]})}}}]);
//# sourceMappingURL=910.958851e8.chunk.js.map