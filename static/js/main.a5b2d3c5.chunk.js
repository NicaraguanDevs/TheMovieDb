(this["webpackJsonpthe-movie-db"]=this["webpackJsonpthe-movie-db"]||[]).push([[0],{10:function(e,a,t){e.exports=t(21)},15:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(8),s=t.n(i),l=(t(15),t(16),t(1)),c=t(3),o=t(2),m=t(4),v=t(5),u=t(6),p=(t(17),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).toggleNavbar=t.toggleNavbar.bind(Object(u.a)(t)),t}return Object(v.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{className:"navbar-item",href:"https://bulma.io"},r.a.createElement("img",{src:"https://bulma.io/images/bulma-logo.png",width:"112",height:"28",alt:""})),r.a.createElement("a",{onClick:this.toggleNavbar,href:"http://",role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navBarMain"},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{id:"navBarMain",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-start"},r.a.createElement("a",{href:"/",className:"navbar-item"},"Movies"),r.a.createElement("a",{href:"/",className:"navbar-item"},"TV Series"),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{href:"/",className:"navbar-link"},"More"),r.a.createElement("div",{className:"navbar-dropdown"},r.a.createElement("a",{href:"/",className:"navbar-item"},"Premium"),r.a.createElement("a",{href:"/",className:"navbar-item"},"Ads"),r.a.createElement("a",{href:"/",className:"navbar-item"},"Contact")))),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"buttons"},r.a.createElement("a",{href:"/",className:"button is-primary"},r.a.createElement("strong",null,"Sign up")),r.a.createElement("a",{href:"/",className:"button is-light"},"Log in"))))))}},{key:"toggleNavbar",value:function(e){e.preventDefault();var a=document.querySelector(".navbar-burger"),t=a.dataset.target,n=document.getElementById(t);a.classList.toggle("is-active"),n.classList.toggle("is-active")}}]),a}(n.Component)),d=t(9),b=t.n(d),h=(t(20),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={popularity:"",vote_count:"",video:"",poster_path:"",id:"",adult:"",backdrop_path:"",original_language:"",original_title:"",genre_ids:[],title:"",vote_average:"",overview:"",release_date:""},t}return Object(v.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("a",{className:"ui card",href:"https://image.tmdb.org/t/p/w500"+this.props.poster_path},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200"+this.props.poster_path,alt:this.props.title})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},this.props.title),r.a.createElement("div",{className:"meta"},r.a.createElement("span",{className:"date"},this.props.release_date)),r.a.createElement("div",{className:"description"},r.a.createElement("p",null,"Movie description"))),r.a.createElement("div",{className:"extra content"},r.a.createElement("p",null,this.props.vote_average)))}}]),a}(n.Component)),g=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={movies:[]},t}return Object(v.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.themoviedb.org/3/movie/popular?api_key=16c54b5cc29a4cc43c2fe52d3be06784&language=es-es&page=1").then((function(e){return e.json()})).then((function(a){var t=a.results.map((function(e){return r.a.createElement("div",{key:e.id,className:"swiper-slide"},r.a.createElement(h,{key:e.id,poster_path:e.poster_path,title:e.title,vote_average:e.vote_average,original_title:e.original_title}))}));e.setState({movies:t})}))}},{key:"render",value:function(){return this.state.movies.length>0&&r.a.createElement(b.a,{slidesPerView:6,spaceBetween:50,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1024:{slidesPerView:6,spaceBetween:40},768:{slidesPerView:4,spaceBetween:30},640:{slidesPerView:3,spaceBetween:20},320:{slidesPerView:2,spaceBetween:10}}},this.state.movies)}}]),a}(n.Component),E=function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(g,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.a5b2d3c5.chunk.js.map