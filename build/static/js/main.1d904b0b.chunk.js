(this["webpackJsonpreact-testi"]=this["webpackJsonpreact-testi"]||[]).push([[0],{28:function(t,e,o){},34:function(t,e,o){"use strict";o.r(e);var n=o(1),r=o(0),a=o.n(r),i=o(20),c=o.n(i),s=o(18),d=o(7),l=o(8),p=o(10),u=o(9),j=(o(28),function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:t.props.todo.completed?"line-through":"none"}},t.markComplete=function(e){console.log(t.props)},t}return Object(l.a)(o,[{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title;return Object(n.jsx)("div",{style:this.getStyle(),children:Object(n.jsxs)("p",{children:[Object(n.jsx)("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," "," ",o,Object(n.jsx)("button",{onClick:this.props.delTodo.bind(this,e),style:b,children:"x"})]})})}}]),o}(r.Component)),b={background:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},h=j,f=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){return Object(d.a)(this,o),e.apply(this,arguments)}return Object(l.a)(o,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return Object(n.jsx)(h,{todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo},e.id)}))}}]),o}(r.Component),m=o(21),x=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={title:"",priority:"",dueDate:""},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title,t.state.priority,t.state.dueDate),t.setState({title:"",priority:"",dueDate:""}),0===t.state.title.length&&console.log("No content")},t.onChange=function(e){return t.setState(Object(m.a)({},e.target.name,e.target.value))},t}return Object(l.a)(o,[{key:"render",value:function(){return Object(n.jsxs)("form",{onSubmit:this.onSubmit,style:{display:"flex"},children:[Object(n.jsx)("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo...",value:this.state.title,onChange:this.onChange}),Object(n.jsx)("input",{type:"number",name:"priority",style:{flex:"5",padding:"5px"},placeholder:"Priority",value:this.state.priority,onChange:this.onChange}),Object(n.jsx)("input",{type:"text",name:"dueDate",style:{flex:"5",padding:"5px"},placeholder:"Due date",value:this.state.dueDate,onChange:this.onChange}),Object(n.jsx)("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}})]})}}]),o}(r.Component),O=o(13);var g={background:"#333",color:"#fff",textAlign:"center",padding:"20px"},y={color:"#fff",textDecoration:"none"},v=function(){return Object(n.jsxs)("header",{style:g,children:[Object(n.jsx)("h1",{children:"Todo List"}),Object(n.jsx)(O.b,{style:y,to:"/",children:"Home"})," | ",Object(n.jsx)(O.b,{style:y,to:"/about",children:"About"})]})},C=o(2);function k(){return Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)("h1",{children:"About"}),Object(n.jsx)("p",{children:"App version: 1.0.0"})]})}var D=1,T=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={todos:[{id:D++,title:"Do homework",priority:1,dueDate:"2020-11-20",completed:!1},{id:D++,title:"Sleep, dream",priority:4,dueDate:"2020-11-20",completed:!1},{id:D++,title:"Take out the garbage",priority:5,dueDate:"2020-11-20",completed:!1}]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){t.setState({todos:Object(s.a)(t.state.todos.filter((function(t){return t.id!==e})))})},t.addTodo=function(e,o,n){var r={id:D++,title:e.replace(/^\w/,(function(t){return t.toUpperCase()})),priority:o,dueDate:n,completed:!1};t.setState({todos:[].concat(Object(s.a)(t.state.todos),[r])})},t}return Object(l.a)(o,[{key:"render",value:function(){var t=this;return Object(n.jsx)(O.a,{children:Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(v,{}),Object(n.jsx)(C.a,{exact:!0,path:"/",render:function(e){return Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)(x,{addTodo:t.addTodo}),Object(n.jsx)(f,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo})]})}}),Object(n.jsx)(C.a,{path:"/about",component:k})]})})})}}]),o}(r.Component),S=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,35)).then((function(e){var o=e.getCLS,n=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;o(t),n(t),r(t),a(t),i(t)}))};c.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(T,{})}),document.getElementById("root")),S()}},[[34,1,2]]]);
//# sourceMappingURL=main.1d904b0b.chunk.js.map