(this.webpackJsonpemployee=this.webpackJsonpemployee||[]).push([[0],{18:function(e,t,a){e.exports=a(40)},2:function(e,t){e.exports={sortNameAscend:function(e){return e.sort((function(e,t){var a=e.name.first.toUpperCase(),n=t.name.first.toUpperCase();return a<n?-1:a>n?1:0}))},sortNameDecend:function(e){return e.sort((function(e,t){var a=e.name.first.toUpperCase(),n=t.name.first.toUpperCase();return a<n?1:a>n?-1:0}))},sortDOBAscend:function(e){return e.sort((function(e,t){var a=new Date(e.dob.date),n=new Date(t.dob.date);return a<n?-1:a>n?1:0}))},sortDOBDecend:function(e){return e.sort((function(e,t){var a=new Date(e.dob.date),n=new Date(t.dob.date);return a<n?1:a>n?-1:0}))},sortEmailAscend:function(e){return e.sort((function(e,t){var a=e.email.toUpperCase(),n=t.email.toUpperCase();return a<n?-1:a>n?1:0}))},sortEmailDecend:function(e){return e.sort((function(e,t){var a=e.email.toUpperCase(),n=t.email.toUpperCase();return a<n?1:a>n?-1:0}))},sortPhoneAscend:function(e){return e.sort((function(e,t){var a=e.phone,n=t.phone;return a<n?-1:a>n?1:0}))},sortPhoneDecend:function(e){return e.sort((function(e,t){var a=e.phone,n=t.phone;return a<n?1:a>n?-1:0}))}}},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),o=a.n(s),l=a(13),c=a(14),m=a(16),i=a(17),u=a(15),p=a.n(u);var y=function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-dark text-white"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"Employee Directory"),r.a.createElement("p",{className:"lead"},"Click on an arrow to sort by heading or use the search box to narrow your results.")))};var h=function(e){var t=new Date(e.employee.dob.date),a=t.getDate()+"-"+(t.getMonth()+1)+"-"+t.getFullYear();return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:e.employee.picture.thumbnail,alt:"employee"})," "),r.a.createElement("td",null,e.employee.name.first," ",e.employee.name.last),r.a.createElement("td",null,e.employee.phone),r.a.createElement("td",null,e.employee.email),r.a.createElement("td",null,a))};var d=function(e){return r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Image"),r.a.createElement("th",null,"Name\u2002",r.a.createElement("span",{onClick:e.sortName,style:{cursor:"pointer"}},r.a.createElement("i",{className:"fa fa fa-sort"}))),r.a.createElement("th",null,"Phone\u2002",r.a.createElement("span",{onClick:e.sortPhone,style:{cursor:"pointer"}},r.a.createElement("i",{className:"fa fa fa-sort"}))),r.a.createElement("th",null,"Email\u2002",r.a.createElement("span",{onClick:e.sortEmail,style:{cursor:"pointer"}},r.a.createElement("i",{className:"fa fa fa-sort"}))),r.a.createElement("th",null,"DOB\u2002",r.a.createElement("span",{onClick:e.sortDOB,style:{cursor:"pointer"}},r.a.createElement("i",{className:"fa fa fa-sort"}))))),r.a.createElement("tbody",null,e.employees.map((function(e,t){return r.a.createElement(h,{key:t,employee:e})}))))};var E=function(e){return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{onChange:e.handleInputChange,value:e.searchKeyword,name:"searchKeyword",type:"text",placeholder:"Enter Name to Search"})))},f=a(2),D=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,isAPIError:!1,employees:[],employeesForDisplay:[],searchKeyword:"",sortNameAsc:!0,sortEmailAsc:!0,sortDOBAsc:!0,sortPhoneAsc:!0},e.getEmployees=function(){p.a.get("https://randomuser.me/api/?results=20").then((function(t){e.setState({employees:t.data.results,employeesForDisplay:t.data.results,isLoading:!1})})).catch((function(t){console.log("Error in getting employee data",t),e.setState({employees:[],employeesForDisplay:[],isAPIError:!0,isLoading:!1})}))},e.handleInputChange=function(t){var a=t.target.value;console.log("handleInputChange value",a),e.setState({searchKeyword:a},(function(){return e.filterEmployee()}))},e.sortName=function(t){e.state.sortNameAsc?e.setState({employeesForDisplay:Object(f.sortNameAscend)(e.state.employees),sortNameAsc:!1}):e.setState({employeesForDisplay:Object(f.sortNameDecend)(e.state.employees),sortNameAsc:!0})},e.sortDOB=function(t){e.state.sortDOBAsc?e.setState({employeesForDisplay:Object(f.sortDOBAscend)(e.state.employees),sortDOBAsc:!1}):e.setState({employeesForDisplay:Object(f.sortDOBDecend)(e.state.employees),sortDOBAsc:!0})},e.sortEmail=function(t){e.state.sortEmailAsc?e.setState({employeesForDisplay:Object(f.sortEmailAscend)(e.state.employees),sortEmailAsc:!1}):e.setState({employeesForDisplay:Object(f.sortEmailDecend)(e.state.employees),sortEmailAsc:!0})},e.sortPhone=function(t){e.state.sortPhoneAsc?e.setState({employeesForDisplay:Object(f.sortPhoneAscend)(e.state.employees),sortPhoneAsc:!1}):e.setState({employeesForDisplay:Object(f.sortPhoneDecend)(e.state.employees),sortPhoneAsc:!0})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getEmployees()}},{key:"filterEmployee",value:function(){var e=this,t=this.state.employees.filter((function(t){return(t.name.first+" "+t.name.last).includes(e.state.searchKeyword)}));this.setState({employeesForDisplay:t})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(E,{searchKeyword:this.state.searchKeyword,handleInputChange:this.handleInputChange}),this.state.isLoading?r.a.createElement("h4",null,"Loading..."):r.a.createElement(d,{employees:this.state.employeesForDisplay,sortName:this.sortName,sortPhone:this.sortPhone,sortEmail:this.sortEmail,sortDOB:this.sortDOB}),this.state.isAPIError?r.a.createElement("h4",null,"Error in getting employee data."):"")}}]),a}(n.Component);o.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.63001b9e.chunk.js.map