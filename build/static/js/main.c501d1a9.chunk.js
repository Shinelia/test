(this["webpackJsonpreact-prettier-eslint-action"]=this["webpackJsonpreact-prettier-eslint-action"]||[]).push([[0],{123:function(e,t,a){e.exports=a(178)},128:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),l=(a(128),a(14)),i=a(13),s=a(222),m=a(11),u=a(210),p=a(211),d=a(100),f=a.n(d),b=a(98),g=a.n(b),E=a(97),h=a.n(E),v=a(99),x=a.n(v),N=a(207),y=Object(N.a)({root:{width:"100vw",height:"4.5rem",position:"fixed",bottom:"0",backgroundColor:"#F15348",display:"flex",justifyContent:"space-between",Zindex:"300"},element:{color:"white"},selected:{color:"white"},icons:{marginBottom:"0.3rem",color:"white"}}),j=a(208),O=a(96),C=a.n(O),F=Object(N.a)({root:{width:"100%",display:"flex",justifyContent:"center",position:"absolute",zIndex:0},container:{position:"absolute",top:-85},fabButton:{position:"absolute",top:-21},addCapsule:{marginRight:"0.7rem",backgroundColor:"black"},addParcours:{backgroundColor:"black"}});var w=function(){var e=F(),t=r.a.useState(!1),a=Object(m.a)(t,2),n=(a[0],a[1]);return r.a.createElement("div",{className:e.root},r.a.createElement(j.a,{color:"primary","aria-label":"add",className:e.fabButton,onClick:function(){n((function(e){return!e}))}},r.a.createElement(C.a,null)))};a(37);function z(){var e=y(),t=r.a.useState("recents"),a=Object(m.a)(t,2),n=a[0],c=a[1];return r.a.createElement("div",{className:"footer"},r.a.createElement(u.a,{value:n,onChange:function(e,t){c(t)},className:e.root,showLabels:!0},r.a.createElement(p.a,{component:l.b,to:"/",classes:{root:e.element,selected:e.selected},label:"Explore",value:"explore",icon:r.a.createElement(h.a,{className:e.icons})}),r.a.createElement(p.a,{component:l.b,to:"/Parcours",classes:{root:e.element,selected:e.selected},label:"Parcours",value:"parcours",icon:r.a.createElement(g.a,{className:e.icons})}),r.a.createElement(w,null),r.a.createElement(p.a,{component:l.b,to:"/Favoris",classes:{root:e.element,selected:e.selected},label:"Favoris",value:"favoris",icon:r.a.createElement(x.a,{className:e.icons})}),r.a.createElement(p.a,{component:l.b,to:"/Profil",classes:{root:e.element,selected:e.selected},label:"Profil",value:"profil",icon:r.a.createElement(f.a,{className:e.icons})})))}var _=a(102),k=a.n(_),S=a(226),B=a(229),P=a(227),I=(a(58),Object(n.createContext)()),T={enableHighAccuracy:!0,timeout:18e4,maximumAge:864e5},M=function(e){var t=Object(n.useState)([50.630943,3.060299]),a=Object(m.a)(t,2),c=a[0],o=a[1];Object(n.useEffect)((function(){var e=navigator.geolocation.watchPosition((function(e){o([e.coords.latitude,e.coords.longitude])}));return function(){navigator.geolocation.clearWatch(e,T)}}),[o]);var l=e.children;return r.a.createElement(I.Provider,{value:c},l)},L=a(10),R=a(16),W=a(213),D=a(17),q=a(214),A=a(215),U=a(216),V=a(212),H=a(228),J=a(180),Z=a(223),G=a(41),Y=a.n(G),K=a(48),Q=a.n(K),X=a(49),$=Object(n.createContext)(null),ee=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)([]),i=Object(m.a)(l,2),s=i[0],u=i[1],p=Object(n.useState)([]),d=Object(m.a)(p,2),f=d[0],b=d[1],g=Object(n.useState)([]),E=Object(m.a)(g,2),h=E[0],v=E[1],x=Object(n.useState)([]),N=Object(m.a)(x,2),y=N[0],j=N[1],O={poi:c,setPoi:o,capsules:s,setCapsules:u,course:f,setCourse:b,tags:h,setTags:v,coord:y,setCoord:j};Object(n.useEffect)((function(){var e;Q.a.get("".concat(X.backend,"/capsules")).then((function(e){u(e.data)})),Q.a.get("".concat(X.backend,"/poi")).then((function(e){o(e.data)})),Q.a.get("".concat(X.backend,"/courses")).then((function(e){b(e.data)})),Q.a.get("".concat(X.backend,"/tags")).then((function(e){v(e.data)})),Q.a.get("".concat(X.backend,"/courses/").concat(e)).then((function(e){j(e.data)}))}),[]);var C=e.children;return r.a.createElement($.Provider,{value:O},C)},te=Object(N.a)((function(e){return{root:{zIndex:20,position:"absolute",bottom:e.spacing(11),right:e.spacing(2)},outcard:{width:"100%",borderRadius:10,marginRight:20,marginTop:20,marginBottom:20},video:{borderRadius:10,overflow:"hidden"},contentContainer:{paddingLeft:10,paddingRight:10,paddingTop:6,paddingBottom:5,position:"relative"},content:{display:"flex",justifyContent:"space-between",height:"50px",marginBottom:10},name:{display:"flex",flexWrap:"wrap",fontWeight:"bold",paddingRight:"10px",color:"#f15348"},box:{width:"200px",height:"50px",overflow:"scroll"},duree:{display:"flex",justifyContent:"flex-end",color:"#F15348",fontSize:13},outchip:{display:"flex",overflow:"scroll"},chip:{marginBottom:5,marginRight:4},link:{textDecoration:"none"}}})),ae=function(e){var t=e.capsule,a=Object(n.useContext)($).capsules,c=te(),o=Object(L.a)(a),i=Object(L.a)(o).filter((function(e){return e.capsule_id===t.capsule_id})),s=R.uniqBy(i,"label");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:c.pageContainer},r.a.createElement(V.a,{className:c.outcard},r.a.createElement(Y.a,{className:c.video,url:t.url_video,width:"100",height:"100"}),r.a.createElement("div",{className:c.contentContainer},r.a.createElement("div",{className:c.content},r.a.createElement(l.b,{className:c.link,to:"/CapsuleInfo/".concat(t.capsule_id)},r.a.createElement(J.a,{className:c.name},r.a.createElement(Z.a,{className:c.box},t.capsule_name))),r.a.createElement(J.a,{className:c.duree},t.duration_video<=60?"".concat(t.duration_video," sec"):"".concat(Math.floor(t.duration_video/60),"m").concat(t.duration_video%60,"s"))),r.a.createElement("div",{className:c.outchip},s.map((function(e){return r.a.createElement(H.a,{className:c.chip,label:e.label,variant:"outlined",color:"primary",size:"small"})})))))))},ne=new D.Icon({iconUrl:"/images/pin.png",iconSize:[34,34]}),re=function(){var e=Object(n.useContext)($),t=e.poi,a=e.capsules,c=Object(L.a)(t),o=Object(L.a)(a),l=Object(n.useState)(!1),i=Object(m.a)(l,2),s=i[0],u=i[1],p=Object(n.useState)("body"),d=Object(m.a)(p,2),f=d[0],b=(d[1],Object(n.useState)(0)),g=Object(m.a)(b,2),E=g[0],h=g[1],v=Object(n.useRef)(null);Object(n.useEffect)((function(){if(s){var e=v.current;null!==e&&e.focus()}}),[s]);var x=R.uniqBy(o,"capsule_id");return r.a.createElement("div",null,c[0]&&c.map((function(e){return r.a.createElement(W.a,{key:e.id,position:[e.latitude,e.longitude],icon:ne,onClick:function(){u(!0),h(e.id)}})})),0!==E&&r.a.createElement("div",{className:"sizePopUp"},r.a.createElement(q.a,{open:s,onClose:function(){u(!1)},scroll:f,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description"},x.filter((function(e){return E===e.poi_id})).map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{id:"scroll-dialog-title",key:e.id_poi},e.poi_name),r.a.createElement(U.a,{ref:v,dividers:"body"===f},r.a.createElement(ae,{key:e.id,capsule:e})))})))))},ce=(a(171),function(){var e=Object(n.useContext)(I);return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{id:"map",center:e,zoom:16,style:{zIndex:0},closePopupOnClick:"true"},r.a.createElement(B.a,{url:"https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),r.a.createElement(P.a,{className:"circle-back",center:e,radius:30,color:"#FFFFFF",fillColor:"#F15348",fillOpacity:"1",weight:"0"}),r.a.createElement(P.a,{className:"circle-front",center:e,radius:10,color:"#FFFFFF",fillColor:"#F15348",fillOpacity:"1",weight:"2"}),r.a.createElement(re,null)))}),oe=(a(172),Object(N.a)((function(e){return{root:{zIndex:20,position:"absolute",bottom:e.spacing(11),right:e.spacing(2),width:"60px",height:"60px",boxShadow:"0px 6px 11px -1px rgba(0,0,0,0.15)"},container:{display:"flex",flexDirection:"column"}}})));var le=function(){var e=oe();return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"explore"},r.a.createElement("div",{className:"mapWrap"},r.a.createElement(ce,null)),r.a.createElement(j.a,{component:l.b,to:"/",color:"secondary",className:e.root,"aria-label":"change"},r.a.createElement(k.a,{color:"primary"}))))};var ie=function(){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"cont"},r.a.createElement("h3",{className:"info"},"Vous pourrez bient\xf4t mettre vos capsules et parcours pr\xe9f\xe9r\xe9s en favoris")))},se=a(217),me=a(231),ue=a(218),pe=r.a.createContext({currentCourse:"",updateMap:function(){}}),de=r.a.createContext({currentParcoursMap:[],updateParcoursMap:function(){}}),fe=Object(N.a)((function(){return{outcard:{width:"260px",borderRadius:"10px",marginRight:"20px",backgroundColor:"#F15348"},video:{borderRadius:"10px",padding:"10px 10px 0 10px"},contentContainer:{padding:"2px",height:"30%"},parcoursHeader:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"4px 0"},link:{textDecoration:"none"},name:{fontWeight:"bold",fontSize:"1em",color:"black",paddingLeft:"5px"},price:{backgroundColor:"#f15348",fontWeight:"bold",fontSize:15,color:"#FFFFFF",border:"none",textDecoration:"line-through",textDecorationColor:"black"},description:{fontSize:13,height:"60px",marginBottom:"10px",overflow:"hidden"},outchip:{display:"flex",overflow:"scroll",paddingLeft:"5px"},chip:{marginRight:"4px",height:"18px",backgroundColor:"#fff",border:"1px solid #fff"},buttons:{display:"flex",justifyContent:"space-between"},buttonSample:{color:"#FFFFFF"},buttonBuy:{borderRadius:"20px",backgroundColor:"#0DF1C8",padding:"0px 10px"}}})),be=function(e){var t=e.parcours,a=e.fullparcours,c=fe(),o=Object(L.a)(a).filter((function(e){return e.course_id===t.course_id})),i=R.uniqBy(o,"label"),s=Object(n.useContext)(pe);Object(n.useContext)(de);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:c.pageContainer},r.a.createElement(V.a,{className:c.outcard},r.a.createElement(Y.a,{className:c.video,url:t.course_teaser,width:"100",height:"100"}),r.a.createElement("div",{className:c.contentContainer},r.a.createElement("div",{className:c.outchip},i.map((function(e){return r.a.createElement(H.a,{className:c.chip,label:e.label,variant:"outlined",color:"primary",size:"small"})}))),r.a.createElement("div",{className:c.parcoursHeader},r.a.createElement(l.b,{to:"/ParcoursInfo/".concat(t.course_id),className:c.link},r.a.createElement(J.a,{className:c.name},r.a.createElement(Z.a,{lineHeight:1.2},t.course_name)))),r.a.createElement("div",{className:c.buttons},r.a.createElement(se.a,{size:"small",className:c.buttonSample,id:t.course_id,onClick:function(e){var t=e.currentTarget.id;s.updateMap(t)}},r.a.createElement(me.a,null)),r.a.createElement(l.b,{to:"/ParcoursMap/".concat(t.course_id),className:c.link},r.a.createElement(ue.a,{variant:"contained",size:"small",className:c.buttonBuy},"Essai gratuit")))))))},ge=(a(173),new D.Icon({iconUrl:"/images/pin.png",iconSize:[34,34]})),Ee=function(){var e=Object(n.useContext)($).course,t=Object(L.a)(e),a=Object(n.useContext)(pe);Object(n.useContext)(de);return r.a.createElement("div",null,t.filter((function(e){return e.course_id===Number(a.currentCourse)})).map((function(e){return r.a.createElement(W.a,{position:[e.latitude,e.longitude],icon:ge})})))},he=function(){var e=Object(n.useContext)(de);return console.log(e.currentParcoursMap),r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{id:"map",center:e.currentParcoursMap,zoom:14,style:{height:"100%",zIndex:0}},r.a.createElement(B.a,{url:"https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),r.a.createElement(Ee,null)))},ve=function(){var e=Object(n.useContext)($),t=e.course,a=e.coord,c=Object(L.a)(t),o=(Object(L.a)(a),Object(n.useState)(1)),l=Object(m.a)(o,2),i=l[0],s=l[1],u=Object(n.useState)(["50.6379","3.05166"]),p=Object(m.a)(u,2),d=p[0],f=p[1],b=R.uniqBy(c,"course_id"),g={currentCourse:i,updateMap:s},E={currentParcoursMap:d,updateParcoursMap:f};return r.a.createElement(pe.Provider,{value:g},r.a.createElement(de.Provider,{value:E},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"parcours"},r.a.createElement("div",{className:"mapContainer "},r.a.createElement(he,null)),r.a.createElement("div",{className:"parcoursWrap"},r.a.createElement("div",{className:"parcoursInfo"},c&&r.a.createElement("div",{className:"parcoursCapsule"},b.map((function(e){return r.a.createElement(be,{key:e.id,parcours:e,fullparcours:c})})))))))))};a(174);var xe=function(){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"cont"},r.a.createElement("h3",{className:"info"},"Vous pourrez bient\xf4t cr\xe9er votre profil utilisateur pour profiter au mieux de l'exp\xe9rience Yooviz")))},Ne=a(220),ye=a(219),je=a(224),Oe=a(103),Ce=a.n(Oe),Fe=a(221),we=a(104),ze=a.n(we),_e=Object(N.a)((function(){return{root:{flexGrow:1},navBar:{width:"100vw",background:"linear-gradient(45deg, #F15348 30%, #DA7B2F 90%)",position:"fixed",height:"4.5rem",display:"flex",justifyContent:"center",alignContent:"center",Zindex:"300"},menuTool:{display:"flex",justifyContent:"space-between"},img:{width:"9rem"},logo:{display:"flex",flexDirection:"column",alignItems:"center"},alpha:{paddingLeft:20,fontStyle:"italic",fontSize:14}}})),ke=Object(N.a)((function(){return{chip:{margin:"2px"}}})),Se=function(e){var t=e.selectTag,a=ke();return r.a.createElement("div",null,r.a.createElement(H.a,{className:a.chip,label:t.label,variant:"outlined",color:"secondary",size:"small"}))},Be=Object(N.a)((function(){return{tagContainer:{background:"linear-gradient(45deg, #F15348 30%, #DA7B2F 90%)",color:"white",height:"100vh",width:"270px",textAlign:"center",paddingTop:"20px"},title:{textTransform:"uppercase",fontWeight:"bold",textAlign:"center",fontSize:"1.3rem"},categoryTitle:{fontSize:13,fontWeight:"bold",padding:"10px 0",textAlign:"center",textTransform:"uppercase"},subTag:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},hr:{width:"70%",marginTop:"20px",color:"white"}}})),Pe=function(){var e=Be(),t=Object(n.useContext)($).tags,a=Object(L.a)(t),c=R.uniqBy(a,"category");return r.a.createElement("div",{className:e.tagContainer},r.a.createElement("div",null,r.a.createElement(J.a,{className:e.title},"Choisissez vos centres d'int\xe9r\xeats"),r.a.createElement("hr",{className:e.hr})),a&&r.a.createElement("div",null,c.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{className:e.categoryTitle},t.category),r.a.createElement("div",{className:e.subTag},a.filter((function(e){return t.category===e.category})).map((function(e){return r.a.createElement(Se,{key:e.id,selectTag:e})}))),r.a.createElement("hr",{className:e.hr}))}))))};function Ie(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1],o=_e();return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:o.root},r.a.createElement(ye.a,null),r.a.createElement(Ne.a,{position:"static",className:o.navBar},r.a.createElement(Fe.a,{className:o.menuTool},r.a.createElement(se.a,{color:"inherit"},r.a.createElement(Ce.a,null)),r.a.createElement("div",{className:o.logo},r.a.createElement("img",{src:"/images/logo.png",alt:"logo",className:o.img}),r.a.createElement("h3",{className:o.alpha},"Version Alpha")),r.a.createElement(se.a,{onClick:function(){c(!0)},color:"inherit"},r.a.createElement(ze.a,null)))),r.a.createElement("div",null,r.a.createElement(je.a,{anchor:"right",open:a,onClose:function(){c(!1)}},r.a.createElement(Pe,null)))))}a(175);var Te=function(){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"cont"},r.a.createElement("h3",{className:"info"},"Vous pourrez bient\xf4t cr\xe9er vos propres parcours")))};a(176);var Me=function(){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"cont"},r.a.createElement("h3",{className:"info"},"Vous pourrez bient\xf4t cr\xe9er vos propres capsules vid\xe9o et les partager avec la communaut\xe9 des yoovizers")))},Le=a(108),Re=Object(Le.a)({overrides:{MuiButton:{text:{color:"white",backgroundColor:"#F15348"},textPrimary:{backgroundColor:"#F15348",borderRadius:"30%",boxShadow:"none"}},MuiFab:{root:{boxShadow:"none"}}},palette:{primary:{main:"#F15348",light:"#DA7B2F"},secondary:{main:"#FFFFFF"}},typography:{fontFamily:['"Montserrat"',"Arial","sans-serif","-apple-system","BlinkMacSystemFont",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}}),We=a(105),De=a.n(We),qe=(a(177),Object(N.a)((function(e){return{root:{zIndex:20,position:"fixed",bottom:e.spacing(11),right:e.spacing(2),width:"60px",height:"60px",boxShadow:"0px 6px 11px -1px rgba(0,0,0,0.15)"},"@global":{"*::-webkit-scrollbar":{display:"none"}},poiName:{color:"#F15348",fontWeight:"bold",fontSize:18},horizontalLine:{display:"flex",border:"0.8px solid #FFD3C8",width:"100%",marginTop:5,marginBottom:15}}}))),Ae=function(){var e=qe(),t=Object(n.useContext)($),a=t.poi,c=t.capsules,o=Object(L.a)(a),i=R.uniqBy(Object(L.a)(c),"capsule_id");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"wrap"},o&&r.a.createElement("div",{className:"listContainer"},o.map((function(t){return r.a.createElement("div",{className:"poiContainer"},r.a.createElement(J.a,{key:t.id,className:e.poiName},t.poi_name),i&&r.a.createElement("div",{className:"capsuleContainer"},i.filter((function(e){return t.poi_name===e.poi_name})).map((function(e){return r.a.createElement("div",{className:"capsuleDisp"},r.a.createElement(ae,{key:e.capsule_id,capsule:e}))}))),r.a.createElement("span",{className:e.horizontalLine}))}))),r.a.createElement(j.a,{component:l.b,to:"/Explore",color:"secondary",className:e.root,"aria-label":"change"},r.a.createElement(De.a,{color:"primary"})))))},Ue=a(230),Ve=a(107),He=a.n(Ve),Je=a(225),Ze=a(106),Ge=a.n(Ze);function Ye(){return r.a.createElement("div",null,r.a.createElement(Z.a,{component:"fieldset",mb:3,borderColor:"transparent"},r.a.createElement(Je.a,{name:"customized-empty",defaultValue:0,precision:.5,emptyIcon:r.a.createElement(Ge.a,{fontSize:"inherit"})})))}var Ke=Object(N.a)((function(e){return{root:{zIndex:20,position:"fixed",bottom:e.spacing(11),right:e.spacing(2)},head:{display:"flex",justifyContent:"space-between",marginTop:15,alignItems:"center"},avatar:{marginLeft:15},video:{marginTop:10,height:"350px"},outchip:{margin:"10px 0px 10px 20px"},chip:{margin:3},duree:{marginRight:20},name:{fontWeight:"bold",marginLeft:20},description:{margin:"0px 20px 10px 20px"},horizontalLine:{display:"flex",border:"0.8px solid #FFD3C8",width:"100%",marginTop:5,marginBottom:15},comment:{display:"flex",justifyContent:"space-between",marginLeft:20},pen:{height:35,marginRight:20},title:{fontWeight:"bold"}}})),Qe=function(){var e=Ke(),t=Object(n.useContext)($).capsules,a=Object(i.f)().id,c=R.uniqBy(Object(L.a)(t),"capsule_id"),o=Object(L.a)(t).filter((function(e){return e.capsule_id===Number(a)})),s=R.uniqBy(o,"label");return r.a.createElement("div",null,c.filter((function(e){return e.capsule_id===Number(a)})).map((function(t){return r.a.createElement("div",null,r.a.createElement("div",{className:e.head},r.a.createElement(se.a,{"aria-label":"previous",component:l.b,to:"/"},r.a.createElement(He.a,null)),r.a.createElement(Ue.a,{className:e.avatar,alt:"Profile Picture",src:""}),r.a.createElement(J.a,{className:e.duree},t.duration_video<=60?"".concat(t.duration_video," sec"):"".concat(Math.floor(t.duration_video/60),"m").concat(t.duration_video%60,"s"))),r.a.createElement("div",{className:e.video},r.a.createElement(Y.a,{className:e.video,url:t.url_video,width:"100",height:"100"})),r.a.createElement("div",{className:e.outchip},s.map((function(t){return r.a.createElement(H.a,{className:e.chip,label:t.label,variant:"outlined",color:"primary",size:"small"})}))),r.a.createElement("div",null,r.a.createElement(J.a,{className:e.name},t.capsule_name)),r.a.createElement("div",{className:e.description},r.a.createElement(J.a,null,t.description)),r.a.createElement("span",{className:e.horizontalLine}),r.a.createElement("div",{className:e.comment},r.a.createElement("div",null,r.a.createElement(J.a,{className:e.title},"Commentaires des yoovizers"),r.a.createElement(Ye,null)),r.a.createElement("img",{src:"/images/pen_black.png",alt:"create comment",className:e.pen})))})))},Xe=Object(N.a)((function(e){return{root:{zIndex:20,position:"fixed",bottom:e.spacing(11),right:e.spacing(2)},head:{display:"flex",justifyContent:"space-between",marginTop:15,alignItems:"center"},avatar:{marginLeft:15},video:{marginTop:10,height:"350px"},outchip:{margin:"10px 0px 10px 20px"},chip:{margin:3},duree:{marginRight:20},name:{fontWeight:"bold",marginLeft:20},description:{margin:"0px 20px 10px 20px"},horizontalLine:{display:"flex",border:"0.8px solid #FFD3C8",width:"100%",marginTop:5,marginBottom:15},comment:{display:"flex",justifyContent:"space-between",marginLeft:20},pen:{height:35,marginRight:20},title:{fontWeight:"bold"}}})),$e=function(){var e=Xe(),t=Object(n.useContext)($).course,a=Object(i.f)().id,c=Object(L.a)(t),o=R.uniqBy(Object(L.a)(c),"course_id"),l=Object(L.a)(c).filter((function(e){return e.course_id===Number(a)})),s=R.uniqBy(l,"poi_id"),m=R.uniqBy(l,"label");return r.a.createElement("div",null,o&&o.filter((function(e){return e.course_id===Number(a)})).map((function(t){return r.a.createElement("div",null,r.a.createElement("div",{className:e.head},r.a.createElement(Ue.a,{className:e.avatar,alt:"Profile Picture",src:""})),r.a.createElement("div",{className:e.video},r.a.createElement(Y.a,{className:e.video,url:t.course_teaser,width:"100",height:"100"})),r.a.createElement("div",{className:e.outchip},m.map((function(t){return r.a.createElement(H.a,{className:e.chip,label:t.label,variant:"outlined",color:"primary",size:"small"})}))),r.a.createElement("div",null,r.a.createElement(J.a,{className:e.name},t.course_name)),r.a.createElement("div",{className:e.description},r.a.createElement(J.a,null,t.course_description)),r.a.createElement("span",{className:e.horizontalLine}),r.a.createElement("div",null,r.a.createElement(J.a,{className:e.name},"Les endroits que vous allez d\xe9couvrir :"),s.map((function(t){return r.a.createElement("div",{className:e.description},r.a.createElement(J.a,null,t.poi_name))})),r.a.createElement("span",{className:e.horizontalLine})))})))},et=new D.Icon({iconUrl:"/images/pin.png",iconSize:[34,34]}),tt=function(){var e=Object(n.useContext)($),t=e.course,a=e.capsules,c=Object(L.a)(t),o=Object(L.a)(a),l=Object(i.f)().id,s=Object(n.useState)(!1),u=Object(m.a)(s,2),p=u[0],d=u[1],f=Object(n.useState)("body"),b=Object(m.a)(f,2),g=b[0],E=(b[1],Object(n.useState)(0)),h=Object(m.a)(E,2),v=h[0],x=h[1],N=Object(n.useState)(0),y=Object(m.a)(N,2),j=y[0],O=y[1],C=R.uniqBy(o,"capsule_id");return r.a.createElement("div",null,c.filter((function(e){return e.course_id===Number(l)})).map((function(e){return r.a.createElement(W.a,{key:e.id,position:[e.latitude,e.longitude],icon:et,onClick:function(){d(!0),x(e.poi_id),O(e.capsule_id)}})})),0!==v&&r.a.createElement("div",{className:"sizePopUp"},r.a.createElement(q.a,{open:p,onClose:function(){d(!1)},scroll:g,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description"},C.filter((function(e){return v===e.poi_id&&j===e.capsule_id})).map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{id:"scroll-dialog-title",key:e.poi_id},e.poi_name),r.a.createElement(U.a,{dividers:"body"===g},r.a.createElement(ae,{key:e.id,capsule:e})))})))))},at=function(){var e=Object(n.useContext)(I);return r.a.createElement("div",{className:"content"},r.a.createElement(S.a,{id:"map",center:e,zoom:16,style:{height:"100vh",zIndex:0}},r.a.createElement(B.a,{url:"https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),r.a.createElement(P.a,{className:"circle-back",center:e,radius:30,color:"#FFFFFF",fillColor:"#F15348",fillOpacity:"1",weight:"0"}),r.a.createElement(P.a,{className:"circle-front",center:e,radius:10,color:"#FFFFFF",fillColor:"#F15348",fillOpacity:"1",weight:"2"}),r.a.createElement(tt,null)))};var nt=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(l.a,null,r.a.createElement(s.a,{theme:Re},r.a.createElement(M,null,r.a.createElement(ee,null,r.a.createElement(Ie,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:Ae}),r.a.createElement(i.a,{path:"/Parcours",component:ve}),r.a.createElement(i.a,{path:"/Favoris",component:ie}),r.a.createElement(i.a,{path:"/Profil",component:xe}),r.a.createElement(i.a,{path:"/Explore",component:le}),r.a.createElement(i.a,{path:"/AddCapsule",component:Me}),r.a.createElement(i.a,{path:"/AddParcours",component:Te}),r.a.createElement(i.a,{path:"/CapsuleInfo/:id",component:Qe}),r.a.createElement(i.a,{path:"/ParcoursInfo/:id",component:$e}),r.a.createElement(i.a,{path:"/ParcoursMap/:id",component:at})),r.a.createElement(z,null))))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(nt,null)),document.getElementById("root"))},37:function(e,t,a){},49:function(e,t,a){a(168).config();e.exports={backend:"http://localhost:4242"}}},[[123,1,2]]]);
//# sourceMappingURL=main.c501d1a9.chunk.js.map