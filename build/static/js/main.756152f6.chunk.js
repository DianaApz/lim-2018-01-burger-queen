(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),l=a.n(r),o=(a(14),a(1)),i=a(2),s=a(4),u=a(3),m=a(5),p=a(6),d=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).click=function(e){a.props.handleClick(a.text,a.food,a.price)},a.food=e.food,a.price=e.price,a.text="".concat(a.food," S/").concat(a.price),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{onClick:function(){e.click(e.text,e.food,e.price)},className:"Button","data-tag":this.text,"data-value":this.props.value},this.food," S/",this.price))}}]),t}(n.Component),h=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handleClick=function(t,a,n){e.state.operations.push({type:a,price:n}),e.state.operations.forEach(function(t){e.setState({total:e.state.total+parseInt(t.price)})})},e.handleDelete=function(t){e.setState({operations:e.state.operations.filter(function(e,a){return a!==t})}),e.state.operations.forEach(function(a,n){n===t&&e.setState({total:e.state.total-parseInt(a.price)})})},e.state={operations:[],total:0},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},p.Desayuno.map(function(t,a){return c.a.createElement(d,{handleClick:e.handleClick,value:t.price,food:t.type,price:t.price,key:a,id:a})})),c.a.createElement("div",{className:"col-6 "},c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("form",null,c.a.createElement("label",{className:"d-flex justify-content-center"},"Ingrese su nombre"),c.a.createElement("br",null),c.a.createElement("input",{id:"myInput",onChange:this.handleChange}))),c.a.createElement("div",null,this.state.operations.map(function(t,a){return c.a.createElement("div",{className:"card",key:a},t.type,"S/.",t.price,c.a.createElement("span",{className:"close",onClick:function(){return e.handleDelete(a)}},"x"))})),c.a.createElement("p",null,"Total = ",this.state.total))))))}}]),t}(n.Component),f=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handleClick=function(t,a,n){e.state.operations.push({type:a,price:n}),e.state.operations.forEach(function(t){e.setState({total:e.state.total+parseInt(t.price)})})},e.handleDelete=function(t){e.setState({operations:e.state.operations.filter(function(e,a){return a!==t})}),e.state.operations.forEach(function(a,n){n===t&&e.setState({total:e.state.total-parseInt(a.price)})})},e.state={operations:[],total:0},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},p.Almuerzo.map(function(t,a){return c.a.createElement(d,{handleClick:e.handleClick,value:t.price,food:t.type,price:t.price,key:a,id:a})})),c.a.createElement("div",{className:"col-6 "},c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("form",null,c.a.createElement("label",{className:"d-flex justify-content-center"},"Ingrese su nombre"),c.a.createElement("br",null),c.a.createElement("input",{id:"myInput",onChange:this.handleChange}))),c.a.createElement("div",null,this.state.operations.map(function(t,a){return c.a.createElement("div",{className:"card",key:a},t.type,"S/.",t.price,c.a.createElement("span",{className:"close",onClick:function(){return e.handleDelete(a)}},"x"))})),c.a.createElement("p",null,"Total = ",this.state.total),c.a.createElement("button",{type:"button"},"Enviar"))))))}}]),t}(n.Component),E=(a(16),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).clickBreakfast=function(){a.setState({showDinner:!1,showBreak:!0})},a.clickDinner=function(e){a.setState({showDinner:!0,showBreak:!1})},a.handleChange=function(e){a.setState({name:e.target.value})},a.handleClick=function(e){console.log(e.target.value),console.log(e.target.getAttribute("data-tag")),document.getElementById("myInput").value="",a.setState({prueba:a.state.name}),a.setState({showForm:!1,welcome:!0})},a.state={showBreak:!0,showDinner:!1,name:"",prueba:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar text-white"},c.a.createElement("h4",null,"BURGER QUEEN")),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6 buttons"},c.a.createElement("div",{className:"btn ",onClick:this.clickBreakfast},"Desayuno"),c.a.createElement("div",{className:"btn ",onClick:this.clickDinner},"Almuerzo")),c.a.createElement("div",{className:"col-6 "}))))),c.a.createElement("div",null,this.state.showBreak?c.a.createElement(h,null):null),c.a.createElement("div",null,this.state.showDinner?c.a.createElement(f,null):null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e){e.exports={Desayuno:[{type:"Caf\xe9 americano",price:"5"},{type:"Caf\xe9 con leche",price:"7"},{type:"Sandwich de jam\xf3n y queso",price:"10"},{type:"Jugo natural",price:"7"}],Almuerzo:[{type:"Hamburguesa simple",price:"10"},{type:"Hamburguesa doble",price:"15"},{type:"Papas fritas",price:"5"},{type:"Onion rings",price:"5"},{type:"Agua 500ml",price:"5"},{type:"Agua 750ml",price:"7"},{type:"Gaseosa 500ml",price:"7"},{type:"Gaseosa 750ml",price:"10"}]}},9:function(e,t,a){e.exports=a(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.756152f6.chunk.js.map