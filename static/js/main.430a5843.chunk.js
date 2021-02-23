(this["webpackJsonpproject2-frontend"]=this["webpackJsonpproject2-frontend"]||[]).push([[0],{49:function(t,e,n){},78:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),s=n(24),i=n.n(s),c=(n(49),n(3)),o=n(7),u=n(8),d=n(10),h=n(9),l=n(4),j=n.n(l),p=n(21),b=n(11),O=n(19),f=n(44),m=n(0),v=function(t){return Object(m.jsxs)(O.a,{sticky:"top",bg:"dark",variant:"dark",children:[Object(m.jsxs)(O.a.Brand,{href:"/project2-frontend",children:[Object(m.jsx)(f.a,{})," Home"]}),t.isLoggedIn&&Object(m.jsxs)("span",{children:[Object(m.jsx)(O.a.Brand,{href:"/project2-frontend/wishlist",children:"Your List"}),Object(m.jsx)(O.a.Brand,{href:"/project2-frontend/events",children:"Your Events"}),t.user&&Object(m.jsxs)(O.a.Brand,{href:"/project2-frontend/logout",children:["Log Out ",t.user.name]})]}),!t.isLoggedIn&&Object(m.jsxs)("span",{children:[Object(m.jsx)(O.a.Brand,{href:"/project2-frontend/login",children:"Log In"}),Object(m.jsx)(O.a.Brand,{href:"/project2-frontend/signup",children:"Sign Up"})]})]})},g=n(22),x=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).handleChange=function(t){var e=t.target,n=e.name,r=e.value;a.setState(Object(g.a)({},n,r))},a.handleSubmit=function(t){t.preventDefault();var e=a.state,n={name:e.name,password:e.password};j.a.post("https://agile-tor-91190.herokuapp.com/login",{user:n},{withCredentials:!0}).then((function(t){t.data.logged_in?(a.props.handleLogin(t),a.redirect()):a.setState({errors:t.data.errors})})).catch((function(t){return console.log("api errors:",t)}))},a.redirect=function(){a.props.history.push("/project2-frontend")},a.handleErrors=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("ul",{children:a.state.errors.map((function(t){return Object(m.jsx)("li",{children:t},t)}))})})},a.state={name:"",password:"",errors:""},a}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=(t.email,t.password);return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Log In"}),Object(m.jsx)("p",{children:this.state.errors}),Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsx)("input",{placeholder:"name",type:"text",name:"name",value:e,onChange:this.handleChange}),Object(m.jsx)("input",{placeholder:"password",type:"password",name:"password",value:n,onChange:this.handleChange}),Object(m.jsx)("button",{placeholder:"submit",type:"submit",children:"Log In"}),Object(m.jsxs)("div",{children:["or ",Object(m.jsx)(p.b,{to:"/signup",children:"sign up"})]})]})]})}}]),n}(a.Component),y=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).handleChange=function(t){var e=t.target,n=e.name,r=e.value;a.setState(Object(g.a)({},n,r))},a.handleSubmit=function(t){t.preventDefault();var e=a.state,n={name:e.name,email:e.email,password:e.password,password_confirmation:e.password_confirmation};j.a.post("https://agile-tor-91190.herokuapp.com/users",{user:n},{withCredentials:!0}).then((function(t){"created"===t.data.status?(a.props.handleLogin(t.data),a.redirect()):(console.log(t.data.errors),a.setState({errors:t.data.errors}))})).catch((function(t){return console.log("api errors:",t)}))},a.redirect=function(){a.props.history.push("/project2-frontend")},a.handleErrors=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("ul",{children:a.state.errors.map((function(t){return Object(m.jsx)("li",{children:t},t)}))})})},a.state={name:"",email:"",password:"",password_confirmation:"",errors:[]},a}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.email,a=t.password,r=t.password_confirmation;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Sign Up"}),this.handleErrors(),Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsx)("input",{placeholder:"name",type:"text",name:"name",value:e,onChange:this.handleChange}),Object(m.jsx)("input",{placeholder:"email",type:"email",name:"email",value:n,onChange:this.handleChange}),Object(m.jsx)("input",{placeholder:"password",type:"password",name:"password",value:a,onChange:this.handleChange}),Object(m.jsx)("input",{placeholder:"password confirmation",type:"password",name:"password_confirmation",value:r,onChange:this.handleChange}),Object(m.jsx)("button",{placeholder:"submit",type:"submit",children:"Sign Up"})]})]})}}]),n}(a.Component),_=n(6),k="https://agile-tor-91190.herokuapp.com/restaurants.json";function C(t,e,n){console.log("AddToWishList()"),console.log(t);var a={name:t.name,longitude:t.geometry.location.lng,latitude:t.geometry.location.lat,address:t.formatted_address,price_level:t.price_level,rating:t.rating,website:t.website,user_id:e,place_id:t.place_id};j.a.post(k,a).then((function(t){n(t.data.id)}))}var S=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={isSaved:!1},a.getAllRestaurants=a.getAllRestaurants.bind(Object(_.a)(a)),a.isRestaurantSaved=a.isRestaurantSaved.bind(Object(_.a)(a)),a}return Object(u.a)(n,[{key:"getAllRestaurants",value:function(t){var e=this;j.a.get(k).then((function(n){var a=n.data.filter((function(t){return t.user&&t.user.id===e.props.user.id}));t(a)}))}},{key:"isRestaurantSaved",value:function(){var t=this;this.getAllRestaurants((function(e){e!==[]&&(e.find((function(e){return e.place_id===t.props.restaurant.place_id}))?t.setState({isSaved:!0}):t.setState({isSaved:!1}))}))}},{key:"componentDidMount",value:function(){this.isRestaurantSaved()}},{key:"componentDidUpdate",value:function(t){this.props.restaurant!==t.restaurant&&this.isRestaurantSaved()}},{key:"renderContent",value:function(){var t=this;return Object(m.jsx)("div",{children:this.state.isSaved?Object(m.jsx)("button",{children:"SAVED!"}):Object(m.jsx)("button",{onClick:function(){return C(t.props.restaurant,t.props.user.id,(function(){t.setState({isSaved:!0})}))},children:"Add to your Wishlist"})})}},{key:"render",value:function(){return Object(m.jsx)("div",{children:this.renderContent()})}}]),n}(a.Component);var w=function(t){return Object(m.jsx)("a",{href:"/project2-frontend/restaurant/"+t.restaurant.id+"/create-event",children:Object(m.jsx)("button",{children:"Create Event"})})},L=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var a;Object(o.a)(this,n),(a=e.call(this,t)).state={restaurant:{}};var r,s=(r=t.match.params.id,"https://agile-tor-91190.herokuapp.com/"+"restaurants/".concat(r));return j.a.get(s).then((function(t){a.setState({restaurant:t.data.restaurants})})),a}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:this.state.restaurant.name}),Object(m.jsxs)("p",{children:["Address: ",this.state.restaurant.address]}),this.state.restaurant.website&&Object(m.jsxs)("p",{children:["Website: ",Object(m.jsx)("a",{href:this.state.restaurant.website,children:this.state.restaurant.website})]}),this.state.restaurant.contact&&Object(m.jsxs)("p",{children:["Contact: ",this.state.restaurant.contact]}),this.state.restaurant.rating&&Object(m.jsxs)("p",{children:["Rating: ",this.state.restaurant.rating,"/5"]}),this.state.restaurant.price_level&&Object(m.jsxs)("p",{children:["Price level: ",this.state.restaurant.price_level,"/5"]}),Object(m.jsx)(w,{restaurant:this.state.restaurant})]})}}]),n}(a.Component),R=L,I=function(t){return Object(m.jsx)("div",{children:t.chats.map((function(t){return Object(m.jsxs)("p",{children:[t.user.name," said: ",t.content]},t.id)}))})},D=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={id:a.props.event_id,chats:[]},a.fetchChats=a.fetchChats.bind(Object(_.a)(a)),a}return Object(u.a)(n,[{key:"fetchChats",value:function(){var t=this;j.a.get("https://agile-tor-91190.herokuapp.com/chats.json").then((function(e){var n=e.data.filter((function(e){return e.event&&e.event.id===t.state.id}));t.setState({chats:n}),setTimeout(t.fetchChats,4e3)}))}},{key:"componentDidMount",value:function(){this.fetchChats()}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Chatbox"}),Object(m.jsx)(I,{chats:this.state.chats})]})}}]),n}(a.Component),A=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t))._handleSubmit=function(t){t.preventDefault(),a.setState({content:""}),j.a.post("https://agile-tor-91190.herokuapp.com/chats",{user_id:a.props.user.id,event_id:a.props.event_id,content:a.state.content}).then((function(t){console.log(t)}),(function(t){console.log("CreateChat error",t)}))},a.state={content:""},a._handleChange=a._handleChange.bind(Object(_.a)(a)),a._handleSubmit=a._handleSubmit.bind(Object(_.a)(a)),a}return Object(u.a)(n,[{key:"_handleChange",value:function(t){this.setState({content:t.target.value})}},{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{onSubmit:this._handleSubmit,children:[Object(m.jsx)("textarea",{name:"",id:"",cols:"40",rows:"5",onChange:this._handleChange,value:this.state.content}),Object(m.jsx)("input",{type:"submit",value:"Post"})]})})}}]),n}(a.Component),E=function(t){return"https://agile-tor-91190.herokuapp.com/"+"events/".concat(t,".json")},T=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var a;Object(o.a)(this,n),(a=e.call(this,t))._handleToggle=function(t){t.preventDefault(),a.setState({edit:!a.state.edit})},a._handleEdit=function(t){t.preventDefault();var e={title:t.target.title.value,date:t.target.date.value,introduction:t.target.introduction.value},n=E(a.state.id);j.a.put(n,e).then((function(t){})),a.setState({edit:!1,title:e.title,date:e.date,introduction:e.introduction})},a.state={edit:!1,id:a.props.event_id,title:"",introduction:"",date:"",creator:{},restaurant:{},attendants:[]},a._handleToggle=a._handleToggle.bind(Object(_.a)(a)),a._handleEdit=a._handleEdit.bind(Object(_.a)(a)),a._handleDelete=a._handleDelete.bind(Object(_.a)(a)),a.renderRecord=a.renderRecord.bind(Object(_.a)(a)),a.renderForm=a.renderForm.bind(Object(_.a)(a));var r=E(a.props.event_id);return j.a.get(r).then((function(t){var e=t.data;a.setState({title:e.title,introduction:e.introduction,date:e.date,creator:e.user,restaurant:e.restaurant,attendants:e.attendants})})),a}return Object(u.a)(n,[{key:"_handleDelete",value:function(){var t=this,e=E(this.state.id);j.a.delete(e,{params:{id:this.state.id}}).then((function(e){console.log(e),t.props.history.push("/project2-frontend/events")}))}},{key:"renderRecord",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("h2",{children:["Event: ",this.state.title]}),this.state.date&&this.state.creator&&Object(m.jsxs)("h3",{children:["Date: ",this.state.date," || Creator: ",this.state.creator.name]}),this.state.restaurant&&Object(m.jsxs)("h3",{children:["Venue: ",this.state.restaurant.name]}),this.state.attendants&&Object(m.jsxs)("h4",{children:["Attendants:",this.state.attendants.map((function(t){return t.user.name})).join(", ")]}),this.state.introduction&&Object(m.jsxs)("p",{children:["Summary: ",this.state.introduction]}),Object(m.jsx)("button",{onClick:this._handleToggle,children:" Edit this event"}),Object(m.jsx)("button",{onClick:this._handleDelete,children:" Delete this event"}),Object(m.jsx)(D,{event_id:this.state.id}),Object(m.jsx)(A,Object(c.a)(Object(c.a)({},this.props),{},{event_id:this.state.id}))]})}},{key:"findAttendants",value:function(t,e){return e.filter((function(e){var n=new RegExp(t,"gi");return e.name.match(n)}))}},{key:"renderForm",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Edit Event"}),this.state.restaurant&&Object(m.jsxs)("h3",{children:["Venue:",this.state.restaurant.name]}),Object(m.jsxs)("form",{onSubmit:this._handleEdit,children:[Object(m.jsx)("label",{children:"Title"}),Object(m.jsx)("input",{name:"title",defaultValue:this.state.title,required:!0}),Object(m.jsx)("label",{children:"Date"}),Object(m.jsx)("input",{placeholder:"2020-12-31",type:"date",name:"date",defaultValue:this.state.date,required:!0}),Object(m.jsx)("label",{children:"Summary"}),Object(m.jsx)("textarea",{name:"introduction",defaultValue:this.state.introduction}),Object(m.jsx)("button",{children:"Update"})]})]})}},{key:"render",value:function(){return this.state.edit?this.renderForm():this.renderRecord()}}]),n}(a.Component),B=function(t){var e=Object(b.f)().id;return Object(m.jsx)(T,Object(c.a)(Object(c.a)({},t),{},{event_id:parseInt(e)}))},q=n(30),N="https://agile-tor-91190.herokuapp.com/events",z=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t))._handleChange=function(t){var e=t.target,n=e.name,r=e.value;a.setState(Object(g.a)({},n,r))},a._handleSubmit=function(t){console.log("HANDLESUBMIT"),t.preventDefault();var e=a.state,n=e.title,r=e.date,s=e.introduction,i=e.user_id,c=e.restaurant_id,o=e.attendants,u=(e._,{title:n,date:r,introduction:s,user_id:i,restaurant_id:c});console.log(u),j.a.post(N,u).then((function(t){console.log(t),a.addAttendants(o,u),a.props.history.push("/project2-frontend/events")}))},a._findAttendants=function(t){if(t.preventDefault(),""!==t.target.value){var e=t.target.value;j.a.get("https://agile-tor-91190.herokuapp.com/users").then((function(t){var n=t.data.users.filter((function(t){var n=new RegExp(e,"gi");return t.name.match(n)}));a.setState({attendants_search:n})}))}else a.setState({attendants_search:[]})},a._handleCheckbox=function(t){t.preventDefault();var e=Object(q.a)(a.state.attendants_search),n=Object(q.a)(a.state.attendants),r=Number(t.target.id);if(!0===t.target.checked){var s=e.find((function(t){return t.id===r}));n=n.concat(s),a.setState({attendants:n})}else{var i=n.findIndex((function(t){return t.id===r}));-1!==i&&(n.splice(i,1),a.setState({attendants:n}))}},a.state={title:"",date:"",introduction:"",user_id:a.props.user.id,restaurant_id:a.props.restaurant_id,attendants:[],attendants_search:[]},a._handleChange=a._handleChange.bind(Object(_.a)(a)),a._handleSubmit=a._handleSubmit.bind(Object(_.a)(a)),a._findAttendants=a._findAttendants.bind(Object(_.a)(a)),a._handleCheckbox=a._handleCheckbox.bind(Object(_.a)(a)),console.log(a.props.user.id),a}return Object(u.a)(n,[{key:"addAttendants",value:function(t,e){j.a.get(N+".json").then((function(n){console.log(n.data);var a=n.data.find((function(t){return t.title===e.title}));console.log(a),t.map((function(t){var e={user_id:t.id,event_id:a.id};console.log(e),j.a.post("https://agile-tor-91190.herokuapp.com/attendants",e).then((function(t){console.log(t)}))}))}))}},{key:"render",value:function(){var t=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Create Event"}),Object(m.jsxs)("form",{onSubmit:this._handleSubmit,children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("label",{children:"Title"}),Object(m.jsx)("input",{name:"title",onChange:this._handleChange,required:!0})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("label",{children:"Date"}),Object(m.jsx)("input",{placeholder:"2020-12-31",name:"date",type:"date",onChange:this._handleChange,required:!0})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("label",{children:"Summary"}),Object(m.jsx)("textarea",{name:"introduction",onChange:this._handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:"Attendants"}),Object(m.jsx)("input",{name:"attendants",onChange:this._findAttendants}),Object(m.jsxs)("ul",{children:[this.state.attendants.map((function(e){return Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{type:"checkbox",id:e.id,onChange:t._handleCheckbox,checked:!0},e.id),e.name]})})),this.state.attendants_search.map((function(e){return Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{type:"checkbox",id:e.id,onChange:t._handleCheckbox},e.id),e.name]})}))]})]}),Object(m.jsx)("button",{children:"Create Event"})]})]})}}]),n}(a.Component),M=function(t){var e=Object(b.f)().id;return Object(m.jsx)(z,Object(c.a)({restaurant_id:parseInt(e),user:t.user},t))};var F=function(t){return Object(m.jsx)("button",{onClick:function(){C(t.restaurant,t.user.id,(function(e){console.log(e),t.history.push("/project2-frontend/restaurant/".concat(e,"/create-event"))}))},children:"Add to list and create Event"})},V=n(20),U=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={image:""},a.fetchImage=a.fetchImage.bind(Object(_.a)(a)),a}return Object(u.a)(n,[{key:"fetchImage",value:function(t){var e=this;j.a.get(function(t){return["https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=",t,"&key=AIzaSyBTRHwGzxqChaQTIV0yYJS4e8z91KGB0Fk"].join("")}(t)).then((function(t){e.setState({image:t.config.url})}))}},{key:"componentDidMount",value:function(){this.fetchImage(this.props.photoreference)}},{key:"componentDidUpdate",value:function(t){this.props.photoreference!==t.photoreference&&this.fetchImage(this.props.photoreference)}},{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:this.state.image,alt:""})})}}]),n}(a.Component),H=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={restaurant:t.restaurant},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[this.props.restaurant&&Object(m.jsxs)(V.a,{children:[Object(m.jsxs)(V.a.Body,{children:[Object(m.jsx)("h3",{children:this.props.restaurant.name}),this.props.restaurant.name&&Object(m.jsxs)("div",{children:[Object(m.jsx)(S,Object(c.a)(Object(c.a)({},this.props),{},{restaurant:this.props.restaurant})),Object(m.jsx)(F,Object(c.a)(Object(c.a)({},this.props),{},{restaurant:this.props.restaurant}))]}),Object(m.jsx)("p",{children:this.props.restaurant.formatted_address}),this.props.restaurant.rating&&Object(m.jsxs)("p",{children:["Rating: ",this.props.restaurant.rating]}),this.props.restaurant.user_ratings_total&&Object(m.jsxs)("p",{children:["Total user rating: ",this.props.restaurant.user_ratings_total]})]}),this.props.restaurant&&this.props.restaurant.photos&&Object(m.jsx)(U,{photoreference:this.props.restaurant.photos[0].photo_reference})]}),!this.props.restaurant&&this.props.searchButtonClicked&&Object(m.jsx)("h3",{children:"...No such thing on Earth, dude!"})]})}}]),n}(a.Component),Y={display:"flex",justifyContent:"center",margin:"5px"},Q=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).state={query:"",isQueryChanged:!1},t._handleInput=t._handleInput.bind(Object(_.a)(t)),t._handleSubmit=t._handleSubmit.bind(Object(_.a)(t)),t.clearInput=t.clearInput.bind(Object(_.a)(t)),t}return Object(u.a)(n,[{key:"_handleInput",value:function(t){this.setState({query:t.target.value,isQueryChanged:!0})}},{key:"_handleSubmit",value:function(t){t.preventDefault(),this.setState({isQueryChanged:!1}),!0===this.state.isQueryChanged?this.props.onSubmit(this.state.query):this.props.fetchRandomNum()}},{key:"clearInput",value:function(){this.setState({query:""})}},{key:"componentDidUpdate",value:function(t){console.log("My component was just updated"),console.log(this.props.random),this.props.random&&this.props.random!==t.random&&(console.log("SETSTATE"),this.setState({query:""}))}},{key:"render",value:function(){return Object(m.jsxs)("form",{onSubmit:this._handleSubmit,style:Y,children:[Object(m.jsx)("input",{onInput:this._handleInput,value:this.state.query,placeholder:"Anything, really",style:{fontSize:"2em"}}),Object(m.jsxs)("button",{style:{backgroundColor:"#2A8093",fontSize:"2em"},children:["Hmm...",this.state.query,"?"]})]})}}]),n}(a.Component),G={display:"flex",justifyContent:"center",margin:"20px"},P=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={restaurants:[],randomNum:0,searchButtonClicked:!1,random:!0},a.fetchRestaurants=a.fetchRestaurants.bind(Object(_.a)(a)),a.fetchRandomNum=a.fetchRandomNum.bind(Object(_.a)(a)),a.fetchRandomRestaurant=a.fetchRandomRestaurant.bind(Object(_.a)(a)),a._handleSubmit=a._handleSubmit.bind(Object(_.a)(a)),a}return Object(u.a)(n,[{key:"fetchRestaurants",value:function(t){var e=this;console.log("ABOUT TO FETCH");j.a.get(function(t){return["https://maps.googleapis.com/maps/api/place/textsearch/json?query=",t,"&key=AIzaSyBTRHwGzxqChaQTIV0yYJS4e8z91KGB0Fk"].join("")}(t)).then((function(t){e.setState({restaurants:t.data.results,searchButtonClicked:!0,isIncluded:!0,random:!1}),e.fetchRandomNum()}))}},{key:"fetchRandomRestaurant",value:function(t){var e=this;j.a.get(function(t){return["https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=",t,"&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,photos,price_level,user_ratings_total,types,place_id,geometry&key=AIzaSyBTRHwGzxqChaQTIV0yYJS4e8z91KGB0Fk"].join("")}(t)).then((function(t){e.setState({restaurants:t.data.candidates,searchButtonClicked:!0,isIncluded:!0,random:!0}),e.fetchRandomNum()}))}},{key:"fetchRandomNum",value:function(){console.log("fetchRandomNum()");var t=Math.floor(Math.random()*this.state.restaurants.length);this.setState({randomNum:t})}},{key:"_handleSubmit",value:function(){var t=["cake","steak","cookies","ice cream","thai food","good pizza","vietnamese","korean","bbq"],e=t[Math.floor(Math.random()*t.length)];console.log(e),this.fetchRandomRestaurant(e)}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{style:G,children:Object(m.jsx)(Q,Object(c.a)(Object(c.a)(Object(c.a)({},this.props),this.state),{},{onSubmit:this.fetchRestaurants,fetchRandomNum:this.fetchRandomNum}))}),Object(m.jsx)("div",{children:Object(m.jsx)("h3",{style:G,children:"or"})}),Object(m.jsx)("div",{style:G,children:Object(m.jsx)("button",{onClick:this._handleSubmit,style:{backgroundColor:"#E85551",fontSize:"2em"},children:"Adventurous!"})}),Object(m.jsx)(H,Object(c.a)(Object(c.a)(Object(c.a)({},this.props),this.state),{},{restaurant:this.state.restaurants[this.state.randomNum]}))]})}}]),n}(a.Component);var J=function(t){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:" I feel like"}),Object(m.jsx)(P,Object(c.a)({},t))]})},K=n(40),W=n(41),X=n(42),Z={display:"flex",justifyContent:"center",margin:"5px"};function $(t){return Object(m.jsx)("button",{onClick:function(){!function(e){var n,a=(n=t.restaurant.id,"https://agile-tor-91190.herokuapp.com/"+"restaurants/".concat(n,".json"));j.a.delete(a,{id:t.restaurant.id}).then((function(t){e(t)}))}((function(){t.updateList()}))},children:"Remove from list"})}var tt=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={restaurantList:[]},a.updateList=a.updateList.bind(Object(_.a)(a)),a}return Object(u.a)(n,[{key:"updateList",value:function(){var t=this;j.a.get("https://agile-tor-91190.herokuapp.com/restaurants.json").then((function(e){var n=e.data.filter((function(e){return e.user&&e.user.id===t.props.user.id}));t.setState({restaurantList:n})}))}},{key:"componentDidMount",value:function(){this.updateList()}},{key:"render",value:function(){var t=this;return Object(m.jsx)(K.a,{style:Z,children:Object(m.jsx)(W.a,{children:this.state.restaurantList.map((function(e){return Object(m.jsx)(X.a,{style:{marginTop:"5px"},lg:6,children:Object(m.jsxs)(V.a,{children:[Object(m.jsx)(V.a.Img,{variant:"top",src:""}),Object(m.jsx)(V.a.Body,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)(w,{restaurant:e,style:{margin:"5px"}}),Object(m.jsx)($,{updateList:t.updateList,restaurant:e}),Object(m.jsxs)("p",{children:["Address: ",e.address]}),e.website&&Object(m.jsxs)("p",{children:["Website: ",Object(m.jsx)("a",{href:e.website,children:e.website})]}),e.contact&&Object(m.jsxs)("p",{children:["Contact: ",e.contact]}),e.rating&&Object(m.jsxs)("p",{children:["Rating: ",e.rating,"/5"]}),e.price_level&&Object(m.jsxs)("p",{children:["Price level: ",e.price_level,"/5"]})]})})]})},e.id)}))})})}}]),n}(a.Component),et=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){return Object(o.a)(this,n),e.call(this,t)}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Your wishlist"}),Object(m.jsx)(tt,Object(c.a)({},this.props))]})}}]),n}(a.Component),nt={margin:"5px",padding:"10px"},at=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={eventList:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;j.a.get("https://agile-tor-91190.herokuapp.com/events.json").then((function(e){var n=e.data.filter((function(e){return e.user&&e.user.id===t.props.user.id}));t.setState({eventList:n})}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Your Events"}),this.state.eventList&&this.state.eventList.map((function(t){return Object(m.jsx)(V.a,{style:nt,children:Object(m.jsxs)("div",{children:[t.title&&Object(m.jsx)("h4",{children:t.title}),t.restaurant&&Object(m.jsxs)("h6",{children:["Venue: ",Object(m.jsx)("strong",{children:t.restaurant.name})]}),t.introduction&&Object(m.jsxs)("p",{children:["Introduction: ",t.introduction]}),t.date&&Object(m.jsxs)("p",{children:["Date: ",t.date]}),Object(m.jsx)("a",{href:"/project2-frontend/event/".concat(t.id),children:Object(m.jsx)("button",{children:"Show event"})})]})},t.id)}))]})}}]),n}(a.Component),rt=n(43),st=n.p+"static/media/food-pattern.d32b9b70.jpg";n.p;var it={backgroundSize:"100vh",backgroundRepeat:"repeat",backgroundImage:"url(".concat(st,")")};function ct(t){return function(t){console.log("clicked"),j.a.delete("https://agile-tor-91190.herokuapp.com/logout",{withCredentials:!0}).then((function(e){t.handleLogout(),t.history.push("/project2-frontend")})).catch((function(t){return console.log(t)}))}(t),Object(m.jsx)("h1",{children:"Lala"})}var ot=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).loginStatus=function(){j.a.get("https://agile-tor-91190.herokuapp.com/logged_in",{withCredentials:!0}).then((function(t){t.data.logged_in?a.handleLogin(t):a.handleLogout()})).catch((function(t){return console.log("api errors:",t)}))},a.handleLogin=function(t){a.setState({isLoggedIn:!0,user:t.data.user})},a.handleLogout=function(){a.setState({isLoggedIn:!1,user:{}})},a.state={isLoggedIn:!0,user:{}},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.loginStatus()}},{key:"render",value:function(){var t=this;return Object(m.jsxs)("div",{style:it,children:[Object(m.jsx)(rt.a,{style:{backgroundColor:"#F7BA89",minHeight:"100vh",position:"relative"},children:Object(m.jsxs)(p.a,{children:[Object(m.jsx)(v,Object(c.a)(Object(c.a)({},this.state),{},{isLoggedIn:this.state.isLoggedIn})),Object(m.jsxs)(b.c,{children:[Object(m.jsx)(b.a,{exact:!0,path:"/project2-frontend/",component:function(e){return Object(m.jsx)(J,Object(c.a)(Object(c.a)(Object(c.a)({},e),t.state),{},{isLoggedIn:t.state.isLoggedIn}))}}),Object(m.jsx)(b.a,{exact:!0,path:"/project2-frontend/gh-pages-url/login",component:function(e){return Object(m.jsx)(x,Object(c.a)(Object(c.a)({},e),{},{handleLogin:t.handleLogin}))}}),Object(m.jsx)(b.a,{exact:!0,path:"/project2-frontend/gh-pages-url/signup",component:function(e){return Object(m.jsx)(y,Object(c.a)(Object(c.a)({},e),{},{handleLogin:t.handleLogin}))}}),Object(m.jsx)(b.a,{exact:!0,path:"/project2-frontend/logout",component:function(e){return Object(m.jsx)(ct,Object(c.a)(Object(c.a)({},e),{},{onClick:t.handleClick,handleLogout:t.handleLogout}))}}),Object(m.jsx)(b.a,{exact:!0,path:"/project2-frontend/event/:id",component:function(e){return Object(m.jsx)(B,Object(c.a)(Object(c.a)({},e),t.state))}}),Object(m.jsx)(b.a,{exact:!0,path:"/project2-frontend/restaurant/:id",component:R}),Object(m.jsx)(b.a,{exact:!0,path:"/project2-frontend/wishlist",component:function(e){return Object(m.jsx)(et,Object(c.a)(Object(c.a)({},e),t.state))}}),Object(m.jsx)(b.a,{exact:!0,path:"/project2-frontend/events",component:function(e){return Object(m.jsx)(at,Object(c.a)(Object(c.a)({},e),t.state))}}),Object(m.jsx)(b.a,{exact:!0,path:"/project2-frontend/restaurant/:id/create-event",component:function(e){return Object(m.jsx)(M,Object(c.a)(Object(c.a)({},e),t.state))}})]})]})}),Object(m.jsx)(O.a,{className:"align-right",bg:"dark",variant:"dark",children:Object(m.jsx)(O.a.Brand,{children:"Proudly brought to you by KNYM"})})]})}}]),n}(a.Component),ut=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),s(t),i(t)}))};n(77);i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(ot,{})}),document.getElementById("root")),ut()}},[[78,1,2]]]);
//# sourceMappingURL=main.430a5843.chunk.js.map