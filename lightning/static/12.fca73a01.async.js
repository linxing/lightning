(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{JlTr:function(e,t,n){e.exports={header:"antd-pro-bsm-layouts-index-header",logo:"antd-pro-bsm-layouts-index-logo",menu:"antd-pro-bsm-layouts-index-menu",trigger:"antd-pro-bsm-layouts-index-trigger",right:"antd-pro-bsm-layouts-index-right",action:"antd-pro-bsm-layouts-index-action",search:"antd-pro-bsm-layouts-index-search",account:"antd-pro-bsm-layouts-index-account",avatar:"antd-pro-bsm-layouts-index-avatar",dark:"antd-pro-bsm-layouts-index-dark",name:"antd-pro-bsm-layouts-index-name"}},K3Pb:function(e,t,n){"use strict";n.r(t);var a,r=n("p0pE"),o=n.n(r),c=(n("fOrg"),n("+KLJ")),i=n("Y/ft"),s=n.n(i),u=n("gWZ8"),l=n.n(u),f=n("d6i3"),p=n.n(f),d=(n("+L6B"),n("2/Rp")),m=(n("/xke"),n("TeRw")),h=n("1l/V"),v=n.n(h),b=n("2Taf"),g=n.n(b),y=n("vZ4D"),E=n.n(y),w=n("MhPg"),k=n.n(w),C=n("l4Ni"),R=n.n(C),S=n("ujKo"),x=n.n(S),_=n("q1tI"),O=n.n(_),P=n("Hx5s"),V=n("3a4m"),D=n.n(V),M=n("55Ip"),N=n("MuoO"),j=n("HP82"),W=n("vbsh"),T=n("jfUH"),I=n("CVtM"),K=(n("2qtc"),n("kLXV")),U=(n("5NDa"),n("5rEg")),z=(n("miYZ"),n("tsqr")),F=(n("y8nQ"),n("Vl3Y")),q=n("tl1k"),A=n.n(q);function H(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=x()(e);if(t){var r=x()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return R()(this,n)}}var L,Q=F.a.Item,B=Object(N.connect)(function(e){return{currentUser:e.user.currentUser}})(a=F.a.create()(a=function(e){k()(n,e);var t=H(n);function n(){var e;g()(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).setBaseInfo=function(){var t=e.props,n=t.currentUser,a=t.form;Object.keys(a.getFieldsValue()).forEach(function(e){var t={};t[e]=n[e]||null,a.setFieldsValue(t)})},e.getViewDom=function(t){e.view=t},e.handleCancel=function(){(0,e.props.handleCancel)()},e.handleSubmit=v()(p.a.mark(function t(){var n,a,r,c,i,s,u;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props,a=n.form,r=a.validateFields,c=a.getFieldsValue,i=n.currentUser.id,t.next=3,r(function(e){});case 3:return t.next=5,Object(j.cloudFunction)({model:"bsm_config__setting",functionName:"update_user_password",params:o()({id:i},c())});case 5:if("9000"!==(s=t.sent).error_code){t.next=9;break}return z.a.error(s.error_data),t.abrupt("return");case 9:"0"!==(u=s.error_code)&&"403"!==u||((0,e.props.handleOk)(),D.a.push("/user/login"));case 11:case"end":return t.stop()}},t)})),e}return E()(n,[{key:"componentDidMount",value:function(){this.setBaseInfo()}},{key:"render",value:function(){var e=this.props,t=e.form.getFieldDecorator,n=e.visible;return O.a.createElement(K.a,{visible:n,title:"密码设置",onOk:this.handleSubmit,onCancel:this.handleCancel},O.a.createElement("div",{className:A.a.baseView,ref:this.getViewDom},O.a.createElement("div",{className:A.a.left},O.a.createElement(F.a,{layout:"vertical",onSubmit:this.handleSubmit,hideRequiredMark:!0},O.a.createElement(Q,{label:"旧密码"},t("oldPassWord",{rules:[{required:!0,message:"请输入旧密码!"}]})(O.a.createElement(U.a.Password,{placeholder:"请输入旧密码"}))),O.a.createElement(Q,{label:"新密码"},t("newPassWord",{rules:[{required:!0,message:"请输入新密码!"}]})(O.a.createElement(U.a.Password,{placeholder:"请输入新密码"})))))))}}]),n}(_.Component))||a)||a,J=(n("T2oS"),n("W9HT")),Y=(n("Telt"),n("Tckk")),G=(n("lUTK"),n("BvKs")),Z=(n("Pwec"),n("CtXQ")),X=n("Y2fQ"),$=n("fVK0"),ee=(n("qVdP"),n("jsC+")),te=n("TSYQ"),ne=n.n(te),ae=n("QyDn"),re=n.n(ae),oe=function(e){var t=e.overlayClassName,n=s()(e,["overlayClassName"]);return O.a.createElement(ee.a,Object.assign({overlayClassName:ne()(re.a.container,t)},n))},ce=n("JlTr"),ie=n.n(ce);function se(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=x()(e);if(t){var r=x()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return R()(this,n)}}var ue,le=Object(N.connect)(function(e){return{currentUser:e.user.currentUser}})(L=function(e){k()(n,e);var t=se(n);function n(){var e;g()(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={visible:!1},e}return E()(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.onMenuClick,a=t.currentUser,r=t.theme,o=a.permissions,c=void 0===o?[]:o,i=this.state.visible,s=O.a.createElement(G.a,{className:ie.a.menu,selectedKeys:[],onClick:function(t){n(t),e.setState({visible:!1})}},O.a.createElement(G.a.Item,{key:"changePassword"},O.a.createElement(Z.a,{type:"form"}),"修改密码"),O.a.createElement(G.a.Divider,null),c.includes($.a.CHANGE_SETTING)&&O.a.createElement(G.a.Item,{key:"webSettings"},O.a.createElement(Z.a,{type:"setting"}),O.a.createElement(X.FormattedMessage,{id:"menu.account.webSettings",defaultMessage:"webSettings"})),c.includes($.a.CHANGE_SETTING)&&O.a.createElement(G.a.Divider,null),O.a.createElement(G.a.Item,{key:"about"},O.a.createElement(Z.a,{type:"info-circle"}),O.a.createElement(X.FormattedMessage,{id:"menu.about",defaultMessage:"about"})),O.a.createElement(G.a.Divider,null),O.a.createElement(G.a.Item,{key:"logout"},O.a.createElement(Z.a,{type:"logout"}),O.a.createElement(X.FormattedMessage,{id:"menu.account.logout",defaultMessage:"logout"}))),u=ie.a.right;return"dark"===r&&(u="".concat(ie.a.right,"  ").concat(ie.a.dark)),O.a.createElement("div",{className:u},a.username?O.a.createElement(oe,{overlay:s,visible:i,onVisibleChange:function(t){return e.setState({visible:t})}},O.a.createElement("span",{className:"".concat(ie.a.action," ").concat(ie.a.account)},O.a.createElement(Y.a,{size:"small",className:ie.a.avatar,src:a.avatar,alt:"avatar",icon:!a.avatar&&"user"}),O.a.createElement("span",{className:ie.a.name},a.nick_name||a.name||a.username),O.a.createElement(Z.a,{type:i?"caret-up":"caret-down",style:{marginLeft:8,fontSize:16,color:"#595959"}}))):O.a.createElement(J.a,{size:"small",style:{marginLeft:8,marginRight:24}}))}}]),n}(_.Component))||L;function fe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=x()(e);if(t){var r=x()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return R()(this,n)}}var pe=Object(N.connect)(function(e){var t=e.content;return{release:t.release,build:t.build}})(ue=function(e){k()(n,e);var t=fe(n);function n(){var e;g()(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={passWordVisible:!1,aboutVisible:!1},e.handleMenuClick=function(t){var n=t.key,a=e.props.dispatch;"logout"===n&&a({type:"content/logout"}),"webSettings"===n&&D.a.push("/account/settings"),"changePassword"===n&&e.showPassWord(),"about"===n&&e.setState({aboutVisible:!0})},e.handleOkPassWord=function(){e.setState({passWordVisible:!1})},e.handleCancelPassWord=function(){e.setState({passWordVisible:!1})},e.showPassWord=function(){e.setState({passWordVisible:!0})},e}return E()(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.release,a=t.build,r=this.state,o=r.passWordVisible,c=r.aboutVisible;return O.a.createElement(O.a.Fragment,null,O.a.createElement(le,{onMenuClick:this.handleMenuClick}),O.a.createElement(B,{visible:o,handleCancel:this.handleCancelPassWord,handleOk:this.handleOkPassWord}),O.a.createElement(K.a,{title:"关于",visible:c,onOk:function(){e.setState({aboutVisible:!1})},onCancel:function(){e.setState({aboutVisible:!1})}},O.a.createElement("div",null,O.a.createElement("p",null,"闪电数据管理系统。由杰明科技荣誉出品。"),O.a.createElement("p",null,"发行版本号：",n),O.a.createElement("p",null,"前端构建版本：","NA"),O.a.createElement("p",null,"后端构建版本：",a))))}}]),n}(_.Component))||ue,de={adminConfig:function(){return"/config/admin"},chart:function(){return"/dashboard/charts"},puzzle:function(e){var t=e.puzzle;return"/puzzle/".concat(t)},list:function(e){var t=e.model;return{path:"/content/".concat(t),name:"".concat(Object(T.o)(t),"管理")}},detail:function(e){return"/content/".concat(e.model,"/detail/").concat(e.id||"__index__")},add:function(e){return"/content/".concat(e.model,"/add").concat(e.redirectPath?"?redirect_path=".concat(e.redirectPath):"")},auto:function(e){return e.path},iframe:function(e){return"/iframe/".concat(encodeURIComponent(e.path))},map:function(e){var t=e.model;return{path:"/content/".concat(t,"/map"),name:"".concat(Object(T.o)(t),"管理")}}},me={},he={};var ve=0;function be(e){var t=e.icon,n=e.name,a=e.page,r=e.children,c=void 0===r?[]:r,i=e.params,u=s()(e,["icon","name","page","children","params"]),l="".concat(ve+=1,"/");c.length||(l=de[a]?de[a](o()({},u,i)):"/exception/404");for(var f=t||l.icon||null,p=["outlined","filled","twoTone"],d=0;d<p.length;d+=1){var m="__".concat(p[d]);if(f&&f.endsWith(m)){f=O.a.createElement(Z.a,{type:f.slice(0,-m.length),theme:"outlined"});break}}return{icon:f,name:n||l.name||"无名菜单",path:l.path||l,children:c.map(be)}}function ge(e){ve=0;var t=e.map(be);return t.forEach(function(e){return function e(t,n,a){t.children.length||(me[t.path]=n,he[t.path]=a.concat({breadcrumbName:t.name,path:t.path})),t.children.forEach(function(r){return e(r,n.concat(t.path),a.concat({breadcrumbName:t.name,path:t.path}))})}(e,[],[])}),t}var ye=n("Q+KB"),Ee=n.n(ye);function we(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=x()(e);if(t){var r=x()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return R()(this,n)}}var ke=function(e,t,n,a){var r,o=arguments.length,c=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,a);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},Ce=function(e){var t={},n="";e.forEach(function e(a){n||0!==a.children.length||(n=a.path),a.children.forEach(function(n){t[n.path]=a.path,e(n)})});var a=[],r=location.pathname;for("/"===r&&(r=n);r in t;)r=t[r],a.push(r);return{openKeys:a,first:n}},Re=function(e){k()(n,e);var t=we(n);function n(){var e;return g()(this,n),(e=t.apply(this,arguments)).state={visible:!0,passWordVisible:!1,aboutVisible:!1,openKeys:[],first:""},e.updateMenus=function(){Object(j.getMenus)().then(function(t){var n=ge(t);e.setState({menus:n}),e.setState(Ce(n))})},e.onOpenChange=function(t){var n=e.state,a=n.menus,r=void 0===a?[]:a,o=n.openKeys,c=t.find(function(e){return-1===o.indexOf(e)});if(void 0!==c){var i={};r.forEach(function e(t){t.children.forEach(function(n){i[n.path]=t.path,e(n)})});var s=t.filter(function(e){return t=c,i[e]!==i[t];var t}).concat([c]);e.setState({openKeys:s})}else e.setState({openKeys:t})},e}return E()(n,[{key:"componentDidMount",value:function(){var e=v()(p.a.mark(function e(){var t,n,a,r,o,c,i=this;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props,n=t.dispatch,a=t.route,r=a.routes,o=a.path,c=a.authority,e.next=7;break;case 4:if(e.sent){e.next=6;break}D.a.push("/user/install");case 6:n({type:"content/fetchAll",payload:{model:"meta__app"}});case 7:Promise.all([n({type:"user/fetchCurrent"}),n({type:"bsmSetting/getSettings"})]).then(function(){var e,t,n=i.props,a=n.user,r=n.bsmSetting;(null===a||void 0===a?void 0:null===(e=a.currentUser)||void 0===e?void 0:null===(t=e.permissions)||void 0===t?void 0:t.includes("can_web_setting__bsm_config"))&&null===(null===r||void 0===r?void 0:r.DB_TIMEZONE)&&m.a.warn({duration:null,placement:"bottomRight",message:"版本兼容性警告",description:"未设置时区，当前版本需要设置数据库时区",key:"timezone-warning",onClick:function(){D.a.push("/account/settings/website"),m.a.close("timezone-warning")},btn:O.a.createElement(d.a,{type:"primary"},"前往设置")})}),n({type:"setting/getSetting"}),n({type:"content/getConfig"}).then(this.updateMenus),n({type:"menu/getMenuData",payload:{routes:r,path:o,authority:c}}),Object(W.c)("bsm_config__menu",[W.b.afterCreate,W.b.afterUpdate,W.b.afterDelete],function(){n({type:"user/fetchCurrent"}),i.updateMenus()});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.children,n=e.location.pathname,a=this.state,r=a.menus,o=a.openKeys,i=n.split("/").filter(function(e){return e}),u=[],f=i.map(function(e,t){return"/".concat(i.slice(0,t+1).join("/"))}).reverse().find(function(e){return e in he});if(f){var p=[{breadcrumbName:"首页",path:"/"}].concat(l()(he[f]));p=p.map(function(e){if(he[f].length>1){var t=p.indexOf(e),n=p.length-1;if(0!==t&&t!==n){e.path;return s()(e,["path"])}}return e}),u.push.apply(u,l()(p))}var d={onOpenChange:this.onOpenChange,openKeys:o},m=this.props,h=m.logo,v=m.title,b=Object(T.v)(h,{mode:"lfit"}),g=O.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}},O.a.createElement(c.a,{message:"您没有任何菜单的权限，可以联系管理员给您配置角色",type:"warning"}));return O.a.createElement(P.c,{logo:b||Ee.a,title:v||"闪电数据管理",fixSiderbar:!0,siderWidth:256,menuHeaderRender:function(e,t){return O.a.createElement(M.Link,{to:"/"},e,t)},menuItemRender:function(e,t){return e.isUrl||e.children||!e.path?t:O.a.createElement(M.Link,{to:e.path},t)},menuDataRender:function(e){return e.concat(r||[])},menuProps:d,breadcrumbRender:function(){return u},rightContentRender:function(){return O.a.createElement(pe,null)},footerRender:function(){return I.a}},r&&0===r.length&&"/"===n?g:t)}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.location.pathname,a=t.first,r=t.menus,o=void 0===r?[]:r;return a&&"/"===n?(D.a.replace(a),Ce(o)):null}}]),n}(_.Component);Re=ke([T.a,Object(N.connect)(function(e){var t=e.setting;return o()({},t)})],Re);t.default=Re},QyDn:function(e,t,n){e.exports={container:"antd-pro-components-header-dropdown-index-container"}},tl1k:function(e,t,n){e.exports={baseView:"antd-pro-bsm-business-pages-account-settings-base-view-baseView",left:"antd-pro-bsm-business-pages-account-settings-base-view-left",right:"antd-pro-bsm-business-pages-account-settings-base-view-right",avatar_title:"antd-pro-bsm-business-pages-account-settings-base-view-avatar_title",avatar:"antd-pro-bsm-business-pages-account-settings-base-view-avatar",button_view:"antd-pro-bsm-business-pages-account-settings-base-view-button_view"}}}]);