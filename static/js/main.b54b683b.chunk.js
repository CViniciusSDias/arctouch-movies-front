(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{214:function(e,t,a){},216:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(39),c=a.n(r),l=a(26),o=a(27);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(23),m=a(24),u=a(33),d=a(31),h=a(34),v=a(32),p=a.n(v),g=a(98),E=a(88),b=a(89),f=a.n(b),j=a(91),w=a.n(j),O=a(18),N=a.n(O),y=a(63),k=a.n(y),x=a(93),C=a.n(x),D=a(11),L=a(22),S=a(94),W=a.n(S);var B=Object(D.withStyles)(function(e){return{appBar:{marginBottom:5*e.spacing.unit},icon:{marginRight:2*e.spacing.unit},grow:{flexGrow:1},link:{color:"#fff",textDecoration:"none"},search:{width:"20%",position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(L.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(L.fade)(e.palette.common.white,.25)}},inputRoot:{color:"inherit",width:"80%"},inputInput:Object(E.a)({paddingRight:e.spacing.unit,paddingLeft:e.spacing.unit,transition:e.transitions.create("width"),width:"20%"},e.breakpoints.up("md"),{width:200}),iconButton:{color:"white"}}})(function(e){var t=e.classes,a=Object(n.useState)(""),r=Object(g.a)(a,2),c=r[0],o=r[1];return i.a.createElement(f.a,{position:"static",className:t.appBar},i.a.createElement(w.a,null,i.a.createElement(k.a,{className:t.icon,edge:"start"},"movie"),i.a.createElement(N.a,{variant:"h6",color:"inherit",noWrap:!0},i.a.createElement(l.b,{to:"/",className:t.link},"Upcoming Movies")),i.a.createElement("div",{className:t.grow}),i.a.createElement("div",{className:t.search},i.a.createElement(C.a,{placeholder:"Search movies\u2026",classes:{root:t.inputRoot,input:t.inputInput},onChange:function(e){o(e.target.value)}}),i.a.createElement(W.a,{component:l.b,onClick:function(){return function(e){if(window.location.pathname.startsWith("/search")){var t=new CustomEvent("search",{detail:e});document.dispatchEvent(t)}}(c)},disabled:0===c.length,to:"/search/".concat(c),className:t.iconButton,"aria-label":"Search"},i.a.createElement(k.a,null,"search")))))}),F=a(65),M=a.n(F),T=a(47),R=a.n(T),A=a(48),P=a.n(A),_=a(49),q=a.n(_),I=a(96),U=a.n(I),G=a(95),H=a.n(G),J=a(50),z=a.n(J),V=a(51),$=a.n(V),K=a(28),Q=a.n(K),X=a(12),Y=a.n(X),Z=a(62),ee=a.n(Z);var te=Object(D.withStyles)(function(e){return{movieCard:{marginBottom:e.spacing.unit},imageContainer:{minHeight:450},divMovieName:{minHeight:60,display:"flex",justifyContent:"center",alignItems:"center"},bold:{fontWeight:"bold"},tableText:{width:160},link:{color:"inherit",textDecoration:"none"}}})(function(e){var t=e.movie,a=e.classes,n=null===t.imagePath?"https://via.placeholder.com/300x450":"https://image.tmdb.org/t/p/w300/".concat(t.imagePath);return i.a.createElement(R.a,{className:a.movieCard},i.a.createElement("div",{className:a.imageContainer},i.a.createElement(P.a,{image:n,component:"img",title:t.name})),i.a.createElement(q.a,null,i.a.createElement("div",{className:a.divMovieName},i.a.createElement(N.a,{variant:"subheading",className:a.bold},t.name)),i.a.createElement(H.a,null),i.a.createElement(z.a,null,i.a.createElement($.a,null,i.a.createElement(Q.a,null,i.a.createElement(Y.a,{padding:"none",className:a.bold},"Genres:"),i.a.createElement(Y.a,{padding:"none",className:a.tableText},t.genres.join(", "))),i.a.createElement(Q.a,null,i.a.createElement(Y.a,{padding:"none",className:a.bold},"Release Date:"),i.a.createElement(Y.a,{padding:"none",className:a.tableText},t.releaseDate))))),i.a.createElement(U.a,null,i.a.createElement(ee.a,{size:"small"},i.a.createElement(l.b,{to:"/details/".concat(t.id),className:a.link},"View more"))))});var ae=Object(D.withStyles)(function(){return{gridContainer:{maxWidth:"1024px",margin:"0 auto"},movie:{maxWidth:300}}})(function(e){var t=e.classes,a=e.movieList;return i.a.createElement(M.a,{container:!0,spacing:8,className:t.gridContainer},a.map(function(e,a){return i.a.createElement(M.a,{item:!0,xs:6,md:4,key:a},i.a.createElement("div",{className:t.movie},i.a.createElement(te,{movie:e})))}))}),ne=a(42),ie=a(52),re=function(){function e(){Object(s.a)(this,e)}return Object(m.a)(e,null,[{key:"fetchFromApi",value:function(t,a){var n="".concat(Object(ne.a)(e,ce)[ce]).concat(t);return fetch(n).then(function(e){if(!e.ok)throw e;return e.json()}).then(a).catch(function(e){return"function"===typeof e.json?e.json():{status_message:e.message}})}}]),e}(),ce=Object(ie.a)("apiUrl");Object.defineProperty(re,ce,{writable:!0,value:"http://localhost:8080"});var le=Object(D.withStyles)(function(e){return{alertDanger:{backgroundColor:"#f8d7da",border:"1px solid #f8d7da",borderRadius:4,maxWidth:500,margin:"0 auto",padding:2*e.spacing.unit},pinkColor:{color:"#721c24"}}})(function(e){var t=e.classes,a=e.message;return 0===a.length?null:i.a.createElement("div",{className:t.alertDanger},i.a.createElement(N.a,{className:t.pinkColor},"Failed to fetch the upcoming movies."),i.a.createElement(N.a,{className:t.pinkColor},"Error details: ",i.a.createElement("i",null,a)))});var oe=function(e){var t=e.startDate,a=e.endDate;return i.a.createElement("div",null,i.a.createElement(N.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Upcoming Movies"),i.a.createElement(N.a,{variant:"h5",gutterBottom:!0},i.a.createElement("b",null,"From:")," ",t,"\xa0",i.a.createElement("b",null,"To:")," ",a))},se=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).props=e,a.state={movieList:[],startDate:null,endDate:null,status_message:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;re.fetchFromApi("/movies/upcoming",function(e){return{movieList:e.movies,startDate:e.dates.start,endDate:e.dates.end}}).then(function(t){return e.setState(t)})}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.movieList,n=t.startDate,r=t.endDate,c=t.status_message;return i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(B,null),i.a.createElement(le,{message:c}),i.a.createElement("div",{hidden:c.length>0||a.length>0},i.a.createElement(p.a,{className:e.mt5})),i.a.createElement("div",{hidden:0===a.length},i.a.createElement(oe,{startDate:n,endDate:r}),i.a.createElement(ae,{movieList:a,className:e.mt5})))}}]),t}(n.Component),me=Object(D.withStyles)(function(e){return{mt5:{marginTop:5*e.spacing.unit}}})(se),ue=(a(214),a(41)),de=a(97),he=a.n(de);var ve=Object(D.withStyles)(function(e){return{movieCard:{width:"50%",margin:"0 auto",marginBottom:5*e.spacing.unit},tableFirstCol:{width:"10%",fontWeight:"bold"}}})(function(e){var t=e.movie,a=e.classes,n=null===t.imagePath?"https://via.placeholder.com/300x450":"https://image.tmdb.org/t/p/original/".concat(t.imagePath);return i.a.createElement(R.a,{className:a.movieCard},i.a.createElement(he.a,{title:t.name}),i.a.createElement("div",{className:a.imageContainer},i.a.createElement(P.a,{image:n,component:"img",title:t.name})),i.a.createElement(q.a,null,i.a.createElement(z.a,null,i.a.createElement($.a,null,i.a.createElement(Q.a,null,i.a.createElement(Y.a,{padding:"none",className:a.tableFirstCol},"Genres:"),i.a.createElement(Y.a,{padding:"none",className:a.tableText},t.genres.join(", "))),i.a.createElement(Q.a,null,i.a.createElement(Y.a,{padding:"none",className:a.tableFirstCol},"Release Date:"),i.a.createElement(Y.a,{padding:"none",className:a.tableText},t.releaseDate)),i.a.createElement(Q.a,null,i.a.createElement(Y.a,{padding:"none",className:a.tableFirstCol},"Overview:"),i.a.createElement(Y.a,{padding:"none",className:a.tableText},t.overview))))))}),pe=function(e){function t(e){var a;return Object(s.a)(this,t),a=Object(u.a)(this,Object(d.a)(t).call(this,e)),Object.defineProperty(Object(ue.a)(a),ge,{writable:!0,value:void 0}),a.state={movieDetails:{},status_message:""},Object(ne.a)(Object(ue.a)(a),ge)[ge]=a.props.match.params.id,a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;re.fetchFromApi("/movies/".concat(Object(ne.a)(this,ge)[ge]),function(e){return{movieDetails:e}}).then(function(t){return e.setState(t)})}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.status_message,n=t.movieDetails,r=Object.entries(n).length>0;return i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(B,null),i.a.createElement("div",{hidden:a.length>0||r},i.a.createElement(p.a,{className:e.mt5})),i.a.createElement(le,{message:a}),r?i.a.createElement(ve,{movie:n}):null)}}]),t}(n.Component),ge=Object(ie.a)("id"),Ee=Object(D.withStyles)(function(e){return{mt5:{marginTop:5*e.spacing.unit}}})(pe),be=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).props=e,a.state={movieList:[],status_message:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"searchListener",value:function(e){this.setState({movieList:[]}),this.loadMovies(e.detail)}},{key:"componentDidMount",value:function(){var e=this.props.match.params.query;this.loadMovies(e),document.addEventListener("search",this.searchListener.bind(this))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("search",this.searchListener.bind(this))}},{key:"loadMovies",value:function(e){var t=this;re.fetchFromApi("/movies/query?q=".concat(e),function(e){return{movieList:e.movies}}).then(function(e){return t.setState(e)})}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.movieList,n=t.status_message;return i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(B,null),i.a.createElement(le,{message:n}),i.a.createElement("div",{hidden:n.length>0||a.length>0},i.a.createElement(p.a,{className:e.mt5})),i.a.createElement("div",{hidden:0===a.length},i.a.createElement(ae,{movieList:a,className:e.mt5})))}}]),t}(n.Component),fe=Object(D.withStyles)(function(e){return{mt5:{marginTop:5*e.spacing.unit}}})(be);c.a.render(i.a.createElement(l.a,null,i.a.createElement(o.c,null,i.a.createElement(o.a,{path:"/",exact:!0,component:me}),i.a.createElement(o.a,{path:"/details/:id",exact:!0,component:Ee}),i.a.createElement(o.a,{path:"/search/:query",exact:!0,component:fe}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},99:function(e,t,a){e.exports=a(216)}},[[99,1,2]]]);
//# sourceMappingURL=main.b54b683b.chunk.js.map