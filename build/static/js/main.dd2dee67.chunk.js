(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(9),i=a.n(l),r=(a(15),a(2)),s=a(3),o=a(6),u=a(4),m=a(5),h=a(1),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).food=e.food,a.price=e.price,a.text="".concat(a.food," S/").concat(a.price),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{onClick:this.props.onClick,className:"Button","data-tag":this.text,"data-value":this.props.value},this.food," S/",this.price))}}]),t}(n.Component),d=a(7),b=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={operations:[],total:0},e.handleClick=e.handleClick.bind(Object(h.a)(Object(h.a)(e))),e.handleDelete=e.handleDelete.bind(Object(h.a)(Object(h.a)(e))),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t=this,a=(this.state.total,this.state.operations),n=e.target.getAttribute("data-value"),c=e.target.getAttribute("data-tag");a.push({type:c,price:n}),this.state.operations.map(function(e){t.setState({total:t.state.total+parseInt(e.price)})})}},{key:"handleDelete",value:function(e){var t=this;this.setState({operations:this.state.operations.filter(function(t,a){return a!==e})}),this.state.operations.forEach(function(a,n){n===e&&t.setState({total:t.state.total-parseInt(a.price)})})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement("div",null,d.Desayuno.map(function(t,a){return c.a.createElement(p,{onClick:e.handleClick,value:t.price,food:t.type,price:t.price,key:a,id:a})}))),c.a.createElement("div",{className:"col-6"},c.a.createElement("div",null,this.state.operations.map(function(t,a){return c.a.createElement("div",{key:a},t.type,c.a.createElement("span",{className:"close",onClick:function(){return e.handleDelete(a)}},"x"))})),c.a.createElement("p",null,"Total = ",this.state.total))))}}]),t}(n.Component),v=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={operations:[],total:0},e.handleClick=e.handleClick.bind(Object(h.a)(Object(h.a)(e))),e.handleDelete=e.handleDelete.bind(Object(h.a)(Object(h.a)(e))),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t=this,a=this.state.operations,n=e.target.getAttribute("data-value"),c=e.target.getAttribute("data-tag");console.log(c),a.push({type:c,price:n}),this.state.operations.map(function(e){t.setState({total:t.state.total+parseInt(e.price)})})}},{key:"handleDelete",value:function(e){var t=this;console.log(this.state.operations),this.setState({operations:this.state.operations.filter(function(t,a){return a!==e})}),this.state.operations.forEach(function(a,n){n===e&&t.setState({total:t.state.total-parseInt(a.price)})})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},d.Almuerzo.map(function(t,a){return c.a.createElement(p,{onClick:e.handleClick,value:t.price,food:t.type,price:t.price,key:a,id:a})})),c.a.createElement("div",{className:"col-6"},c.a.createElement("div",null,this.state.operations.map(function(t,a){return c.a.createElement("div",{key:a},t.type,c.a.createElement("span",{className:"close",onClick:function(){return e.handleDelete(a)}},"x"))})),c.a.createElement("p",null,"Total = ",this.state.total))))}}]),t}(n.Component),f=(a(17),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={showBreak:!0,showDinner:!1,showForm:!0,welcome:!1,name:"",prueba:""},a.clickBreakfast=a.clickBreakfast.bind(Object(h.a)(Object(h.a)(a))),a.clickDinner=a.clickDinner.bind(Object(h.a)(Object(h.a)(a))),a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a.handleClick=a.handleClick.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"clickBreakfast",value:function(){this.setState({showDinner:!1,showBreak:!0})}},{key:"clickDinner",value:function(e){this.setState({showDinner:!0,showBreak:!1})}},{key:"handleChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleClick",value:function(e){console.log(e.target.getAttribute("data-tag")),document.getElementById("myInput").value="",this.setState({prueba:this.state.name}),this.setState({showForm:!1,welcome:!0})}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("p",null,"Burger queen")),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6 buttons"},c.a.createElement("div",{className:"btn btn-secondary",onClick:this.clickBreakfast},"Desayuno"),c.a.createElement("div",{className:"btn btn-info",onClick:this.clickDinner},"Almuerzo")),c.a.createElement("div",{className:"col-6"},this.state.showForm?c.a.createElement("div",{className:"box float-right"},c.a.createElement("div",{className:""},c.a.createElement("form",{className:""},c.a.createElement("label",null,"Ingrese su nombre :"),c.a.createElement("input",{id:"myInput",onChange:this.handleChange}),c.a.createElement("button",{type:"button","data-tag":this.state.name,onClick:this.handleClick},"Enviar")))):null,this.state.welcome?c.a.createElement("p",{className:"welcome"},"Bienvenido ",this.state.prueba):null))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",null,this.state.showBreak?c.a.createElement(b,null):null),c.a.createElement("div",null,this.state.showDinner?c.a.createElement(v,null):null)))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e){e.exports={Desayuno:[{type:"Caf\xe9 americano",price:"5"},{type:"Caf\xe9 con leche",price:"7"},{type:"Sandwich de jam\xf3n y queso",price:"10"},{type:"Jugo natural",price:"7"}],Almuerzo:[{type:"Hamburguesa simple",price:"10"},{type:"Hamburguesa doble",price:"15"},{type:"Papas fritas",price:"5"},{type:"Onion rings",price:"5"},{type:"Agua 500ml",price:"5"},{type:"Agua 750ml",price:"7"},{type:"Gaseosa 500ml",price:"7"},{type:"Gaseosa 750ml",price:"10"}]}}},[[10,2,1]]]);
//# sourceMappingURL=main.dd2dee67.chunk.js.map