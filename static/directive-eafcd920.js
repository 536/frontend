import{h as g,_ as y}from"./index-64ba93f3.js";import{S as b}from"./SwitchRoles-3e1be2d3.js";import{H as P,r as x,ah as m,ar as C,l as i,m as _,V as s,p,Q as u,O as o,P as t,T as e,u as f,S as v}from"./vue-ef6225bb.js";import"./element-4638b524.js";import"./vxe-0f1aa4dd.js";const h=r=>{if(Array.isArray(r)&&r.length>0){const{roles:n}=g();return n.some(c=>r.includes(c))}else return console.error("need roles! Like checkPermission(['admin','editor'])"),!1},V={class:"app-container"},w={class:"margin-top-15"},z=P({__name:"directive",setup(r){const n=x(1),c=()=>{n.value++};return(B,N)=>{const a=m("el-tag"),l=m("el-tab-pane"),k=m("el-tabs"),d=C("permission");return i(),_("div",V,[s(b,{onChange:c}),(i(),_("div",{key:n.value,class:"margin-top-30"},[p("div",null,[u((i(),o(a,{type:"success",size:"large",effect:"plain"},{default:t(()=>[e(` 这里采用了 v-permission="['admin']" 所以只有 admin 可以看见这句话 `)]),_:1})),[[d,["admin"]]])]),p("div",null,[u((i(),o(a,{type:"success",size:"large",effect:"plain"},{default:t(()=>[e(` 这里采用了 v-permission="['editor']" 所以只有 editor 可以看见这句话 `)]),_:1})),[[d,["editor"]]])]),p("div",w,[u((i(),o(a,{type:"success",size:"large",effect:"plain"},{default:t(()=>[e(` 这里采用了 v-permission="['admin', 'editor']" 所以 admin 和 editor 都可以看见这句话 `)]),_:1})),[[d,["admin","editor"]]])])])),(i(),_("div",{key:`checkPermission${n.value}`,class:"margin-top-30"},[s(a,{type:"warning",size:"large"},{default:t(()=>[e(" 例如 Element Plus 的 el-tab-pane 或 el-table-column 以及其它动态渲染 Dom 的场景不适合使用 v-permission，这种情况下你可以通过 v-if 和 checkPermission 来实现： ")]),_:1}),s(k,{type:"border-card",class:"margin-top-15"},{default:t(()=>[f(h)(["admin"])?(i(),o(l,{key:0,label:"admin"},{default:t(()=>[e(" 这里采用了 "),s(a,null,{default:t(()=>[e(`v-if="checkPermission(['admin'])"`)]),_:1}),e(" 所以只有 admin 可以看见这句话 ")]),_:1})):v("",!0),f(h)(["editor"])?(i(),o(l,{key:1,label:"editor"},{default:t(()=>[e(" 这里采用了 "),s(a,null,{default:t(()=>[e(`v-if="checkPermission(['editor'])"`)]),_:1}),e(" 所以只有 editor 可以看见这句话 ")]),_:1})):v("",!0),f(h)(["admin","editor"])?(i(),o(l,{key:2,label:"admin 和 editor"},{default:t(()=>[e(" 这里采用了 "),s(a,null,{default:t(()=>[e(`v-if="checkPermission(['admin', 'editor'])"`)]),_:1}),e(" 所以 admin 和 editor 都可以看见这句话 ")]),_:1})):v("",!0)]),_:1})]))])}}});const T=y(z,[["__scopeId","data-v-6d704b73"]]);export{T as default};
