(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eff0f638"],{"17a0":function(t,e,n){"use strict";n("1ec3")},"1ec3":function(t,e,n){},"526f":function(t,e,n){"use strict";n("e5b6")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var c=n("1d80"),i=n("5899"),o="["+i+"]",a=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),l=function(t){return function(e){var n=String(c(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(u,"")),n}};t.exports={start:l(1),end:l(2),trim:l(3)}},7156:function(t,e,n){var c=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var o,a;return i&&"function"==typeof(o=e.constructor)&&o!==n&&c(a=o.prototype)&&a!==n.prototype&&i(t,a),t}},a9e3:function(t,e,n){"use strict";var c=n("83ab"),i=n("da84"),o=n("94ca"),a=n("6eeb"),u=n("5135"),l=n("c6b6"),r=n("7156"),s=n("c04e"),h=n("d039"),b=n("7c73"),j=n("241c").f,O=n("06cf").f,f=n("9bf2").f,d=n("58a8").trim,p="Number",_=i[p],m=_.prototype,g=l(b(m))==p,y=function(t){var e,n,c,i,o,a,u,l,r=s(t,!1);if("string"==typeof r&&r.length>2)if(r=d(r),e=r.charCodeAt(0),43===e||45===e){if(n=r.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(r.charCodeAt(1)){case 66:case 98:c=2,i=49;break;case 79:case 111:c=8,i=55;break;default:return+r}for(o=r.slice(2),a=o.length,u=0;u<a;u++)if(l=o.charCodeAt(u),l<48||l>i)return NaN;return parseInt(o,c)}return+r};if(o(p,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var v,N=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof N&&(g?h((function(){m.valueOf.call(n)})):l(n)!=p)?r(new _(y(e)),n,N):y(e)},k=c?j(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;k.length>I;I++)u(_,v=k[I])&&!u(N,v)&&f(N,v,O(_,v));N.prototype=m,m.constructor=N,a(i,p,N)}},ad3a:function(t,e,n){"use strict";var c=n("7a23"),i={key:0},o={class:"main"},a=Object(c["g"])("新型コロナウイルス最新情報"),u=Object(c["g"])("施設情報"),l=Object(c["g"])("感染の疑いがある方"),r={key:1},s=Object(c["g"])("新型コロナウイルス最新情報"),h={class:"main"},b=Object(c["g"])("施設情報"),j=Object(c["g"])("感染の疑いがある方"),O={key:2},f=Object(c["g"])("新型コロナウイルス最新情報"),d=Object(c["g"])("施設情報"),p={class:"main"},_=Object(c["g"])("感染の疑いがある方");function m(t,e,n,m,g,y){var v=Object(c["x"])("router-link"),N=Object(c["x"])("router-view");return Object(c["q"])(),Object(c["d"])("nav",null,[0==n.judge?(Object(c["q"])(),Object(c["d"])("ul",i,[Object(c["h"])("li",o,[Object(c["h"])(v,{to:"/"},{default:Object(c["D"])((function(){return[a]})),_:1})]),Object(c["h"])("li",null,[Object(c["h"])(v,{to:"/Shisetupage"},{default:Object(c["D"])((function(){return[u]})),_:1})]),Object(c["h"])("li",null,[Object(c["h"])(v,{to:"/Helppage"},{default:Object(c["D"])((function(){return[l]})),_:1})])])):Object(c["e"])("",!0),1==n.judge?(Object(c["q"])(),Object(c["d"])("ul",r,[Object(c["h"])("li",null,[Object(c["h"])(v,{to:"/"},{default:Object(c["D"])((function(){return[s]})),_:1})]),Object(c["h"])("li",h,[Object(c["h"])(v,{to:"/Shisetupage"},{default:Object(c["D"])((function(){return[b]})),_:1})]),Object(c["h"])("li",null,[Object(c["h"])(v,{to:"/Helppage"},{default:Object(c["D"])((function(){return[j]})),_:1})])])):Object(c["e"])("",!0),2==n.judge?(Object(c["q"])(),Object(c["d"])("ul",O,[Object(c["h"])("li",null,[Object(c["h"])(v,{to:"/"},{default:Object(c["D"])((function(){return[f]})),_:1})]),Object(c["h"])("li",null,[Object(c["h"])(v,{to:"/Shisetupage"},{default:Object(c["D"])((function(){return[d]})),_:1})]),Object(c["h"])("li",p,[Object(c["h"])(v,{to:"/Helppage"},{default:Object(c["D"])((function(){return[_]})),_:1})])])):Object(c["e"])("",!0),Object(c["h"])(N)])}var g={name:"mainmenu",props:{judge:{type:String}}};n("526f");g.render=m;e["a"]=g},e5b6:function(t,e,n){},ee4b:function(t,e,n){"use strict";n.r(e);var c=n("7a23"),i=Object(c["F"])("data-v-6cafda22");Object(c["t"])("data-v-6cafda22");var o={class:"pagelink"},a=Object(c["g"])("施設情報"),u=Object(c["h"])("a",null,"＞",-1),l=Object(c["g"])("津山市施設一覧"),r=Object(c["h"])("a",null,"＞",-1),s=Object(c["h"])("a",null,"施設詳細情報",-1),h=Object(c["h"])("h1",null,"施設詳細情報",-1),b={key:0,class:"syousai"},j=Object(c["h"])("th",null,"施設名",-1),O=Object(c["h"])("th",null,"電話番号",-1),f={key:0},d={key:1},p={key:2},_={key:0},m={key:1},g=Object(c["h"])("th",null,"住所",-1),y=Object(c["h"])("th",null,"地図",-1),v={key:0},N={key:1};Object(c["r"])();var k=i((function(t,e,n,k,I,w){var E=Object(c["x"])("mainmenu"),q=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["h"])(E,{judge:"1"}),Object(c["h"])("div",o,[Object(c["h"])(q,{to:"/shisetupage"},{default:i((function(){return[a]})),_:1}),u,Object(c["h"])(q,{to:{name:"Shisetu_itiranpage",params:{location_no:n.location_no}}},{default:i((function(){return[l]})),_:1},8,["to"]),r,s]),h,t.count>=0?(Object(c["q"])(),Object(c["d"])("table",b,[Object(c["h"])("tbody",null,[Object(c["h"])("tr",null,[j,Object(c["h"])("td",null,Object(c["z"])(w.placeName),1)]),Object(c["h"])("tr",null,[O,Object(c["h"])("td",null,Object(c["z"])(w.placeTEL),1)]),Object(c["h"])("tr",null,[12==n.location_no?(Object(c["q"])(),Object(c["d"])("th",f,"設置場所")):Object(c["e"])("",!0),1==n.location_no||2==n.location_no||3==n.location_no?(Object(c["q"])(),Object(c["d"])("th",d,"診療科目")):(Object(c["q"])(),Object(c["d"])("th",p,"URL")),Object(c["h"])("td",null,[12==n.location_no?(Object(c["q"])(),Object(c["d"])("a",_,Object(c["z"])(w.placeURL),1)):Object(c["e"])("",!0),1==n.location_no||2==n.location_no||3==n.location_no?(Object(c["q"])(),Object(c["d"])("a",m,"もうしばらくお待ちください")):(Object(c["q"])(),Object(c["d"])("a",{key:2,href:w.toPlace},Object(c["z"])(w.placeURL),9,["href"]))])]),Object(c["h"])("tr",null,[g,Object(c["h"])("td",null,Object(c["z"])(w.place),1)]),Object(c["h"])("tr",null,[y,1!=n.location_no&&2!=n.location_no&&3!=n.location_no?(Object(c["q"])(),Object(c["d"])("td",v,[Object(c["h"])("iframe",{src:w.gMaps,height:"450",frameborder:"0",style:{border:"0"},allowfullscreen:""},null,8,["src"])])):(Object(c["q"])(),Object(c["d"])("td",N,"もうしばらくお待ちください"))])])])):Object(c["e"])("",!0)],64)})),I=(n("a9e3"),n("ad3a")),w={name:"Shisetu_syousaipage",props:{no:{type:String},location_no:{type:String}},components:{mainmenu:I["a"]},data:function(){return{item:this.$store.state.facilityTableData,j:0,i:0,gmaps:{type:String},count:{type:Number}}},mounted:function(){this.count=this.rowGet()},computed:{toPlace:function(){return this.item[this.count]["URL"]},gMaps:function(){return"12"==this.location_no?"https://www.google.com/maps?output=embed&z=15&ll="+this.item[this.count]["世界_10進_Y"]+","+this.item[this.count]["世界_10進_X"]+"&q="+this.item[this.count]["施設名"]:"https://www.google.com/maps?output=embed&z=15&ll="+this.item[this.count]["世界_10進_Y"]+","+this.item[this.count]["世界_10進_X"]+"&q="+this.item[this.count]["名称"]},placeName:function(){return"1"==this.location_no||"2"==this.location_no||"3"==this.location_no?this.item[this.count]["Unnamed: 10"]:"12"==this.location_no?this.item[this.count]["施設名"]:this.item[this.count]["名称"]},placeTEL:function(){return"1"==this.location_no||"2"==this.location_no||"3"==this.location_no?this.item[this.count]["Unnamed: 18"]:"12"==this.location_no?this.item[this.count]["電話"]:this.item[this.count]["TEL"]},placeURL:function(){return"12"==this.location_no?this.item[this.count]["設置場所"]:this.item[this.count]["URL"]},place:function(){return"1"==this.location_no||"2"==this.location_no||"3"==this.location_no?this.item[this.count]["Unnamed: 15"]:this.item[this.count]["住所"]}},methods:{rowGet:function(){for(this.i=0;this.i<this.item.length;this.i++)("12"==this.location_no&&this.item[this.i]["施設名"]==this.no||"12"!=this.location_no&&this.item[this.i]["名称"]==this.no)&&(this.j=this.i);return this.j}}};n("17a0");w.render=k,w.__scopeId="data-v-6cafda22";e["default"]=w}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvU2hpc2V0dV9zeW91c2FpcGFnZS52dWU/ZjAxYiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYWlubWVudS52dWU/NjI5ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy10cmltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmhlcml0LWlmLXJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMubnVtYmVyLmNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21haW5tZW51LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYWlubWVudS52dWU/NzIzYyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvU2hpc2V0dV9zeW91c2FpcGFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL1NoaXNldHVfc3lvdXNhaXBhZ2UudnVlPzQ1M2MiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmVPYmplY3RDb2VyY2libGUiLCJ3aGl0ZXNwYWNlcyIsIndoaXRlc3BhY2UiLCJsdHJpbSIsIlJlZ0V4cCIsInJ0cmltIiwiY3JlYXRlTWV0aG9kIiwiVFlQRSIsIiR0aGlzIiwic3RyaW5nIiwiU3RyaW5nIiwicmVwbGFjZSIsInN0YXJ0IiwiZW5kIiwidHJpbSIsImlzT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJkdW1teSIsIldyYXBwZXIiLCJOZXdUYXJnZXQiLCJOZXdUYXJnZXRQcm90b3R5cGUiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIkRFU0NSSVBUT1JTIiwiZ2xvYmFsIiwiaXNGb3JjZWQiLCJyZWRlZmluZSIsImhhcyIsImNsYXNzb2YiLCJpbmhlcml0SWZSZXF1aXJlZCIsInRvUHJpbWl0aXZlIiwiZmFpbHMiLCJjcmVhdGUiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZiIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImRlZmluZVByb3BlcnR5IiwiTlVNQkVSIiwiTmF0aXZlTnVtYmVyIiwiTnVtYmVyUHJvdG90eXBlIiwiQlJPS0VOX0NMQVNTT0YiLCJ0b051bWJlciIsImFyZ3VtZW50IiwiZmlyc3QiLCJ0aGlyZCIsInJhZGl4IiwibWF4Q29kZSIsImRpZ2l0cyIsImxlbmd0aCIsImluZGV4IiwiY29kZSIsIml0IiwiY2hhckNvZGVBdCIsIk5hTiIsInNsaWNlIiwicGFyc2VJbnQiLCJrZXkiLCJOdW1iZXJXcmFwcGVyIiwidmFsdWUiLCJhcmd1bWVudHMiLCJ0aGlzIiwidmFsdWVPZiIsImNhbGwiLCJrZXlzIiwic3BsaXQiLCJqIiwiY2xhc3MiLCJqdWRnZSIsInRvIiwibmFtZSIsInByb3BzIiwidHlwZSIsInJlbmRlciIsImxvY2F0aW9uX25vIiwiY291bnQiLCJwbGFjZU5hbWUiLCJwbGFjZVRFTCIsInBsYWNlVVJMIiwiaHJlZiIsInRvUGxhY2UiLCJwbGFjZSIsInNyYyIsImdNYXBzIiwiaGVpZ2h0IiwiZnJhbWVib3JkZXIiLCJzdHlsZSIsImFsbG93ZnVsbHNjcmVlbiIsIm5vIiwiY29tcG9uZW50cyIsIm1haW5tZW51IiwiZGF0YSIsIml0ZW0iLCIkc3RvcmUiLCJzdGF0ZSIsImZhY2lsaXR5VGFibGVEYXRhIiwiaSIsImdtYXBzIiwiTnVtYmVyIiwibW91bnRlZCIsInJvd0dldCIsImNvbXB1dGVkIiwibWV0aG9kcyIsIl9fc2NvcGVJZCJdLCJtYXBwaW5ncyI6ImtIQUFBLFcsNkRDQUEsVyxtQkNFQUEsRUFBT0MsUUFBVSxpRCx1QkNGakIsSUFBSUMsRUFBeUIsRUFBUSxRQUNqQ0MsRUFBYyxFQUFRLFFBRXRCQyxFQUFhLElBQU1ELEVBQWMsSUFDakNFLEVBQVFDLE9BQU8sSUFBTUYsRUFBYUEsRUFBYSxLQUMvQ0csRUFBUUQsT0FBT0YsRUFBYUEsRUFBYSxNQUd6Q0ksRUFBZSxTQUFVQyxHQUMzQixPQUFPLFNBQVVDLEdBQ2YsSUFBSUMsRUFBU0MsT0FBT1YsRUFBdUJRLElBRzNDLE9BRlcsRUFBUEQsSUFBVUUsRUFBU0EsRUFBT0UsUUFBUVIsRUFBTyxLQUNsQyxFQUFQSSxJQUFVRSxFQUFTQSxFQUFPRSxRQUFRTixFQUFPLEtBQ3RDSSxJQUlYWCxFQUFPQyxRQUFVLENBR2ZhLE1BQU9OLEVBQWEsR0FHcEJPLElBQUtQLEVBQWEsR0FHbEJRLEtBQU1SLEVBQWEsSyxxQkMxQnJCLElBQUlTLEVBQVcsRUFBUSxRQUNuQkMsRUFBaUIsRUFBUSxRQUc3QmxCLEVBQU9DLFFBQVUsU0FBVVMsRUFBT1MsRUFBT0MsR0FDdkMsSUFBSUMsRUFBV0MsRUFVZixPQVBFSixHQUUwQyxtQkFBbENHLEVBQVlGLEVBQU1JLGNBQzFCRixJQUFjRCxHQUNkSCxFQUFTSyxFQUFxQkQsRUFBVUcsWUFDeENGLElBQXVCRixFQUFRSSxXQUMvQk4sRUFBZVIsRUFBT1ksR0FDakJaLEksa0NDZFQsSUFBSWUsRUFBYyxFQUFRLFFBQ3RCQyxFQUFTLEVBQVEsUUFDakJDLEVBQVcsRUFBUSxRQUNuQkMsRUFBVyxFQUFRLFFBQ25CQyxFQUFNLEVBQVEsUUFDZEMsRUFBVSxFQUFRLFFBQ2xCQyxFQUFvQixFQUFRLFFBQzVCQyxFQUFjLEVBQVEsUUFDdEJDLEVBQVEsRUFBUSxRQUNoQkMsRUFBUyxFQUFRLFFBQ2pCQyxFQUFzQixFQUFRLFFBQThDQyxFQUM1RUMsRUFBMkIsRUFBUSxRQUFtREQsRUFDdEZFLEVBQWlCLEVBQVEsUUFBdUNGLEVBQ2hFcEIsRUFBTyxFQUFRLFFBQTRCQSxLQUUzQ3VCLEVBQVMsU0FDVEMsRUFBZWQsRUFBT2EsR0FDdEJFLEVBQWtCRCxFQUFhaEIsVUFHL0JrQixFQUFpQlosRUFBUUksRUFBT08sS0FBcUJGLEVBSXJESSxFQUFXLFNBQVVDLEdBQ3ZCLElBQ0lDLEVBQU9DLEVBQU9DLEVBQU9DLEVBQVNDLEVBQVFDLEVBQVFDLEVBQU9DLEVBRHJEQyxFQUFLckIsRUFBWVksR0FBVSxHQUUvQixHQUFpQixpQkFBTlMsR0FBa0JBLEVBQUdILE9BQVMsRUFHdkMsR0FGQUcsRUFBS3JDLEVBQUtxQyxHQUNWUixFQUFRUSxFQUFHQyxXQUFXLEdBQ1IsS0FBVlQsR0FBMEIsS0FBVkEsR0FFbEIsR0FEQUMsRUFBUU8sRUFBR0MsV0FBVyxHQUNSLEtBQVZSLEdBQTBCLE1BQVZBLEVBQWUsT0FBT1MsU0FDckMsR0FBYyxLQUFWVixFQUFjLENBQ3ZCLE9BQVFRLEVBQUdDLFdBQVcsSUFDcEIsS0FBSyxHQUFJLEtBQUssR0FBSVAsRUFBUSxFQUFHQyxFQUFVLEdBQUksTUFDM0MsS0FBSyxHQUFJLEtBQUssSUFBS0QsRUFBUSxFQUFHQyxFQUFVLEdBQUksTUFDNUMsUUFBUyxPQUFRSyxFQUluQixJQUZBSixFQUFTSSxFQUFHRyxNQUFNLEdBQ2xCTixFQUFTRCxFQUFPQyxPQUNYQyxFQUFRLEVBQUdBLEVBQVFELEVBQVFDLElBSTlCLEdBSEFDLEVBQU9ILEVBQU9LLFdBQVdILEdBR3JCQyxFQUFPLElBQU1BLEVBQU9KLEVBQVMsT0FBT08sSUFDeEMsT0FBT0UsU0FBU1IsRUFBUUYsR0FFNUIsT0FBUU0sR0FLWixHQUFJMUIsRUFBU1ksR0FBU0MsRUFBYSxVQUFZQSxFQUFhLFFBQVVBLEVBQWEsU0FBVSxDQVMzRixJQVJBLElBY3FCa0IsRUFkakJDLEVBQWdCLFNBQWdCQyxHQUNsQyxJQUFJUCxFQUFLUSxVQUFVWCxPQUFTLEVBQUksRUFBSVUsRUFDaEN6QyxFQUFRMkMsS0FDWixPQUFPM0MsYUFBaUJ3QyxJQUVsQmpCLEVBQWlCVCxHQUFNLFdBQWNRLEVBQWdCc0IsUUFBUUMsS0FBSzdDLE1BQWFXLEVBQVFYLElBQVVvQixHQUNqR1IsRUFBa0IsSUFBSVMsRUFBYUcsRUFBU1UsSUFBTWxDLEVBQU93QyxHQUFpQmhCLEVBQVNVLElBRWxGWSxFQUFPeEMsRUFBY1UsRUFBb0JLLEdBQWdCLDZLQU1oRTBCLE1BQU0sS0FBTUMsRUFBSSxFQUFRRixFQUFLZixPQUFTaUIsRUFBR0EsSUFDckN0QyxFQUFJVyxFQUFja0IsRUFBTU8sRUFBS0UsTUFBUXRDLEVBQUk4QixFQUFlRCxJQUMxRHBCLEVBQWVxQixFQUFlRCxFQUFLckIsRUFBeUJHLEVBQWNrQixJQUc5RUMsRUFBY25DLFVBQVlpQixFQUMxQkEsRUFBZ0JsQixZQUFjb0MsRUFDOUIvQixFQUFTRixFQUFRYSxFQUFRb0IsSywrREN6RVhTLE1BQU0sUSxpQkFBMkIsaUIsaUJBQ0YsUSxpQkFDSCxhLDJCQUdSLGlCLEdBQ3BCQSxNQUFNLFEsaUJBQXNDLFEsaUJBQ2hCLGEsMkJBR1IsaUIsaUJBQ1csUSxHQUMvQkEsTUFBTSxRLGlCQUFtQyxhLG9IQWRyRCxlQWlCTSxZQWhCYSxHQUFMLEVBQUFDLE8saUJBQVYsZUFJSyxRQUhELGVBQXFFLEtBQXJFLEVBQXFFLENBQXBELGVBQStDLEdBQWxDQyxHQUFHLEtBQUcsQyx3QkFBQyxpQkFBYSxDLGNBQ2xELGVBQTBELFdBQXRELGVBQWlELEdBQXBDQSxHQUFHLGdCQUFjLEMsd0JBQUMsaUJBQUksQyxjQUN2QyxlQUE0RCxXQUF4RCxlQUFtRCxHQUF0Q0EsR0FBRyxhQUFXLEMsd0JBQUMsaUJBQVMsQyx1Q0FFOUIsR0FBTCxFQUFBRCxPLGlCQUFWLGVBSUssUUFIRCxlQUF3RCxXQUFwRCxlQUErQyxHQUFsQ0MsR0FBRyxLQUFHLEMsd0JBQUMsaUJBQWEsQyxjQUNyQyxlQUF1RSxLQUF2RSxFQUF1RSxDQUF0RCxlQUFpRCxHQUFwQ0EsR0FBRyxnQkFBYyxDLHdCQUFDLGlCQUFJLEMsY0FDcEQsZUFBNEQsV0FBeEQsZUFBbUQsR0FBdENBLEdBQUcsYUFBVyxDLHdCQUFDLGlCQUFTLEMsdUNBRTlCLEdBQUwsRUFBQUQsTyxpQkFBVixlQUlLLFFBSEQsZUFBd0QsV0FBcEQsZUFBK0MsR0FBbENDLEdBQUcsS0FBRyxDLHdCQUFDLGlCQUFhLEMsY0FDckMsZUFBMEQsV0FBdEQsZUFBaUQsR0FBcENBLEdBQUcsZ0JBQWMsQyx3QkFBQyxpQkFBSSxDLGNBQ3ZDLGVBQXlFLEtBQXpFLEVBQXlFLENBQXhELGVBQW1ELEdBQXRDQSxHQUFHLGFBQVcsQyx3QkFBQyxpQkFBUyxDLHVDQUUxRCxlQUFjLEtBS1AsT0FDWEMsS0FBTSxXQUNOQyxNQUFNLENBQ0ZILE1BQU0sQ0FDRkksS0FBTTdELFUsVUNyQmxCLEVBQU84RCxPQUFTQSxFQUVELFUsNkpDTE5OLE1BQU0sWSxpQkFDd0IsUSxFQUMvQixlQUFRLFNBQUwsS0FBQyxHLGlCQUF3RixXLEVBQzVGLGVBQVEsU0FBTCxLQUFDLEcsRUFBSSxlQUFhLFNBQVYsVUFBTSxHLEVBRXJCLGVBQWUsVUFBWCxVQUFNLEcsU0FDYUEsTUFBTSxXLEVBR2pCLGVBQVksVUFBUixPQUFHLEcsRUFJUCxlQUFhLFVBQVQsUUFBSSxHLG9EQWNSLGVBQVcsVUFBUCxNQUFFLEcsRUFJTixlQUFXLFVBQVAsTUFBRSxHLHlMQWhDbEIsZUFBb0IsR0FBVkMsTUFBTSxNQUNoQixlQUlNLE1BSk4sRUFJTSxDQUhGLGVBQWlELEdBQXBDQyxHQUFHLGdCQUFjLEMsV0FBQyxpQkFBSSxDLFlBQ25DLEVBQVEsZUFBeUcsR0FBM0ZBLEdBQUUsK0NBQXFELEVBQUFLLGUsWUFBZSxpQkFBTyxDLHFCQUNuRyxFQUFRLElBRVosRUFDYSxFQUFBQyxPQUFLLEcsaUJBQWxCLGVBb0NRLFFBcENSLEVBb0NRLENBbkNKLGVBa0NRLGNBakNKLGVBR0ssV0FGRCxFQUNBLGVBQXdCLHlCQUFqQixFQUFBQyxXQUFTLEtBRXBCLGVBR0ssV0FGRCxFQUNBLGVBQXVCLHlCQUFoQixFQUFBQyxVQUFRLEtBRW5CLGVBU0ssV0FSb0IsSUFBWCxFQUFBSCxhLGlCQUFWLGVBQW9DLE9BQVQsUyxzQkFDTixHQUFYLEVBQUFBLGFBQTZCLEdBQVgsRUFBQUEsYUFBNkIsR0FBWCxFQUFBQSxhLGlCQUE5QyxlQUF1RSxPQUFULFUsaUJBQzlELGVBQW1CLE9BQVIsUUFDWCxlQUlLLFdBSG1CLElBQVgsRUFBQUEsYSxpQkFBVCxlQUE0QyxxQkFBZixFQUFBSSxVQUFRLEksc0JBQ2pCLEdBQVgsRUFBQUosYUFBNkIsR0FBWCxFQUFBQSxhQUE2QixHQUFYLEVBQUFBLGEsaUJBQTdDLGVBQThFLE1BQWpCLG1CLGlCQUM3RCxlQUE0QyxLLE1BQWpDSyxLQUFNLEVBQUFDLFMsZUFBWSxFQUFBRixVQUFRLGlCQUc3QyxlQUdLLFdBRkQsRUFDQSxlQUFvQix5QkFBYixFQUFBRyxPQUFLLEtBRWhCLGVBVUssV0FURCxFQUNxQixHQUFYLEVBQUFQLGFBQTZCLEdBQVgsRUFBQUEsYUFBNkIsR0FBWCxFQUFBQSxhLGlCQUE5QyxlQU1LLFFBTnlELGVBS2pDLFVBSnhCUSxJQUFLLEVBQUFDLE1BQ05DLE9BQU8sTUFDUEMsWUFBWSxJQUNaQyxNQUFBLGFBQ0FDLGdCQUFBLEkscUNBRUosZUFBNkIsT0FBbEIseUIsc0RBU1osR0FDYmpCLEtBQU0sc0JBQ05DLE1BQU8sQ0FDTGlCLEdBQUcsQ0FDQ2hCLEtBQU03RCxRQUVWK0QsWUFBYSxDQUNURixLQUFNN0QsU0FHWjhFLFdBQVksQ0FDUkMsV0FBQSxNQUVKQyxLQUFNLFdBQ0YsTUFBTyxDQUNIQyxLQUFNL0IsS0FBS2dDLE9BQU9DLE1BQU1DLGtCQUN4QjdCLEVBQUcsRUFDSDhCLEVBQUcsRUFDSEMsTUFBTyxDQUNIekIsS0FBTTdELFFBRVZnRSxNQUFPLENBQ0hILEtBQU0wQixVQUlsQkMsUUFBUyxXQUNMdEMsS0FBS2MsTUFBUWQsS0FBS3VDLFVBRXRCQyxTQUFVLENBQ05yQixRQUFTLFdBQ0wsT0FBT25CLEtBQUsrQixLQUFLL0IsS0FBS2MsT0FBTyxRQUVqQ1EsTUFBTyxXQUNILE1BQXFCLE1BQWxCdEIsS0FBS2EsWUFDQyxvREFBc0RiLEtBQUsrQixLQUFLL0IsS0FBS2MsT0FBTyxZQUFjLElBQU1kLEtBQUsrQixLQUFLL0IsS0FBS2MsT0FBTyxZQUFjLE1BQVFkLEtBQUsrQixLQUFLL0IsS0FBS2MsT0FBTyxPQUdsSyxvREFBc0RkLEtBQUsrQixLQUFLL0IsS0FBS2MsT0FBTyxZQUFjLElBQU1kLEtBQUsrQixLQUFLL0IsS0FBS2MsT0FBTyxZQUFjLE1BQVFkLEtBQUsrQixLQUFLL0IsS0FBS2MsT0FBTyxPQUcvS0MsVUFBVyxXQUNQLE1BQXFCLEtBQWxCZixLQUFLYSxhQUFzQyxLQUFsQmIsS0FBS2EsYUFBc0MsS0FBbEJiLEtBQUthLFlBQy9DYixLQUFLK0IsS0FBSy9CLEtBQUtjLE9BQU8sZUFFUCxNQUFsQmQsS0FBS2EsWUFDRmIsS0FBSytCLEtBQUsvQixLQUFLYyxPQUFPLE9BR3RCZCxLQUFLK0IsS0FBSy9CLEtBQUtjLE9BQU8sT0FHckNFLFNBQVUsV0FDTixNQUFxQixLQUFsQmhCLEtBQUthLGFBQXNDLEtBQWxCYixLQUFLYSxhQUFzQyxLQUFsQmIsS0FBS2EsWUFDL0NiLEtBQUsrQixLQUFLL0IsS0FBS2MsT0FBTyxlQUVQLE1BQWxCZCxLQUFLYSxZQUNGYixLQUFLK0IsS0FBSy9CLEtBQUtjLE9BQU8sTUFHdEJkLEtBQUsrQixLQUFLL0IsS0FBS2MsT0FBTyxRQUdyQ0csU0FBVSxXQUNOLE1BQXFCLE1BQWxCakIsS0FBS2EsWUFDR2IsS0FBSytCLEtBQUsvQixLQUFLYyxPQUFPLFFBR3RCZCxLQUFLK0IsS0FBSy9CLEtBQUtjLE9BQU8sUUFHckNNLE1BQU8sV0FDSCxNQUFxQixLQUFsQnBCLEtBQUthLGFBQXNDLEtBQWxCYixLQUFLYSxhQUFzQyxLQUFsQmIsS0FBS2EsWUFDL0NiLEtBQUsrQixLQUFLL0IsS0FBS2MsT0FBTyxlQUd4QmQsS0FBSytCLEtBQUsvQixLQUFLYyxPQUFPLFFBSXZDMkIsUUFBUyxDQUNMRixPQUFRLFdBQ04sSUFBSXZDLEtBQUttQyxFQUFFLEVBQUduQyxLQUFLbUMsRUFBRW5DLEtBQUsrQixLQUFLM0MsT0FBUVksS0FBS21DLEtBQ25CLE1BQWxCbkMsS0FBS2EsYUFBcUJiLEtBQUsrQixLQUFLL0IsS0FBS21DLEdBQUcsUUFBUW5DLEtBQUsyQixJQUVqQyxNQUFsQjNCLEtBQUthLGFBQXFCYixLQUFLK0IsS0FBSy9CLEtBQUttQyxHQUFHLE9BQU9uQyxLQUFLMkIsTUFEN0QzQixLQUFLSyxFQUFJTCxLQUFLbUMsR0FLdEIsT0FBT25DLEtBQUtLLEssVUN0SXBCLEVBQU9PLE9BQVMsRUFDaEIsRUFBTzhCLFVBQVksa0JBRUoiLCJmaWxlIjoianMvY2h1bmstZWZmMGY2MzguMTZlMDRkNGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0wLTAhLi4vLi4vbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvaW5kZXguanM/P3JlZi0tMC0xIS4vU2hpc2V0dV9zeW91c2FpcGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02Y2FmZGEyMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uL25vZGVfbW9kdWxlcy9AdnVlL2NsaS1zZXJ2aWNlL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyLXYxNi9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uLy4uL25vZGVfbW9kdWxlcy9AdnVlL2NsaS1zZXJ2aWNlL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyLXYxNi9kaXN0L2luZGV4LmpzPz9yZWYtLTAtMSEuL21haW5tZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTkzNWE3Njg0Jmxhbmc9Y3NzXCIiLCIvLyBhIHN0cmluZyBvZiBhbGwgdmFsaWQgdW5pY29kZSB3aGl0ZXNwYWNlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbm1vZHVsZS5leHBvcnRzID0gJ1xcdTAwMDlcXHUwMDBBXFx1MDAwQlxcdTAwMENcXHUwMDBEXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnO1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIHdoaXRlc3BhY2UgPSAnWycgKyB3aGl0ZXNwYWNlcyArICddJztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyB3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAod2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKiQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltLCB0cmltU3RhcnQsIHRyaW1FbmQsIHRyaW1MZWZ0LCB0cmltUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gICAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltTGVmdCwgdHJpbVN0YXJ0IH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltc3RhcnRcbiAgc3RhcnQ6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltUmlnaHQsIHRyaW1FbmQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcbiAgZW5kOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiAgdHJpbTogY3JlYXRlTWV0aG9kKDMpXG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG5cbi8vIG1ha2VzIHN1YmNsYXNzaW5nIHdvcmsgY29ycmVjdCBmb3Igd3JhcHBlZCBidWlsdC1pbnNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCR0aGlzLCBkdW1teSwgV3JhcHBlcikge1xuICB2YXIgTmV3VGFyZ2V0LCBOZXdUYXJnZXRQcm90b3R5cGU7XG4gIGlmIChcbiAgICAvLyBpdCBjYW4gd29yayBvbmx5IHdpdGggbmF0aXZlIGBzZXRQcm90b3R5cGVPZmBcbiAgICBzZXRQcm90b3R5cGVPZiAmJlxuICAgIC8vIHdlIGhhdmVuJ3QgY29tcGxldGVseSBjb3JyZWN0IHByZS1FUzYgd2F5IGZvciBnZXR0aW5nIGBuZXcudGFyZ2V0YCwgc28gdXNlIHRoaXNcbiAgICB0eXBlb2YgKE5ld1RhcmdldCA9IGR1bW15LmNvbnN0cnVjdG9yKSA9PSAnZnVuY3Rpb24nICYmXG4gICAgTmV3VGFyZ2V0ICE9PSBXcmFwcGVyICYmXG4gICAgaXNPYmplY3QoTmV3VGFyZ2V0UHJvdG90eXBlID0gTmV3VGFyZ2V0LnByb3RvdHlwZSkgJiZcbiAgICBOZXdUYXJnZXRQcm90b3R5cGUgIT09IFdyYXBwZXIucHJvdG90eXBlXG4gICkgc2V0UHJvdG90eXBlT2YoJHRoaXMsIE5ld1RhcmdldFByb3RvdHlwZSk7XG4gIHJldHVybiAkdGhpcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpLmY7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xuXG52YXIgTlVNQkVSID0gJ051bWJlcic7XG52YXIgTmF0aXZlTnVtYmVyID0gZ2xvYmFsW05VTUJFUl07XG52YXIgTnVtYmVyUHJvdG90eXBlID0gTmF0aXZlTnVtYmVyLnByb3RvdHlwZTtcblxuLy8gT3BlcmEgfjEyIGhhcyBicm9rZW4gT2JqZWN0I3RvU3RyaW5nXG52YXIgQlJPS0VOX0NMQVNTT0YgPSBjbGFzc29mKGNyZWF0ZShOdW1iZXJQcm90b3R5cGUpKSA9PSBOVU1CRVI7XG5cbi8vIGBUb051bWJlcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b251bWJlclxudmFyIHRvTnVtYmVyID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBpdCA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCBmYWxzZSk7XG4gIHZhciBmaXJzdCwgdGhpcmQsIHJhZGl4LCBtYXhDb2RlLCBkaWdpdHMsIGxlbmd0aCwgaW5kZXgsIGNvZGU7XG4gIGlmICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgJiYgaXQubGVuZ3RoID4gMikge1xuICAgIGl0ID0gdHJpbShpdCk7XG4gICAgZmlyc3QgPSBpdC5jaGFyQ29kZUF0KDApO1xuICAgIGlmIChmaXJzdCA9PT0gNDMgfHwgZmlyc3QgPT09IDQ1KSB7XG4gICAgICB0aGlyZCA9IGl0LmNoYXJDb2RlQXQoMik7XG4gICAgICBpZiAodGhpcmQgPT09IDg4IHx8IHRoaXJkID09PSAxMjApIHJldHVybiBOYU47IC8vIE51bWJlcignKzB4MScpIHNob3VsZCBiZSBOYU4sIG9sZCBWOCBmaXhcbiAgICB9IGVsc2UgaWYgKGZpcnN0ID09PSA0OCkge1xuICAgICAgc3dpdGNoIChpdC5jaGFyQ29kZUF0KDEpKSB7XG4gICAgICAgIGNhc2UgNjY6IGNhc2UgOTg6IHJhZGl4ID0gMjsgbWF4Q29kZSA9IDQ5OyBicmVhazsgLy8gZmFzdCBlcXVhbCBvZiAvXjBiWzAxXSskL2lcbiAgICAgICAgY2FzZSA3OTogY2FzZSAxMTE6IHJhZGl4ID0gODsgbWF4Q29kZSA9IDU1OyBicmVhazsgLy8gZmFzdCBlcXVhbCBvZiAvXjBvWzAtN10rJC9pXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiAraXQ7XG4gICAgICB9XG4gICAgICBkaWdpdHMgPSBpdC5zbGljZSgyKTtcbiAgICAgIGxlbmd0aCA9IGRpZ2l0cy5sZW5ndGg7XG4gICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29kZSA9IGRpZ2l0cy5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICAgICAgLy8gcGFyc2VJbnQgcGFyc2VzIGEgc3RyaW5nIHRvIGEgZmlyc3QgdW5hdmFpbGFibGUgc3ltYm9sXG4gICAgICAgIC8vIGJ1dCBUb051bWJlciBzaG91bGQgcmV0dXJuIE5hTiBpZiBhIHN0cmluZyBjb250YWlucyB1bmF2YWlsYWJsZSBzeW1ib2xzXG4gICAgICAgIGlmIChjb2RlIDwgNDggfHwgY29kZSA+IG1heENvZGUpIHJldHVybiBOYU47XG4gICAgICB9IHJldHVybiBwYXJzZUludChkaWdpdHMsIHJhZGl4KTtcbiAgICB9XG4gIH0gcmV0dXJuICtpdDtcbn07XG5cbi8vIGBOdW1iZXJgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1udW1iZXItY29uc3RydWN0b3JcbmlmIChpc0ZvcmNlZChOVU1CRVIsICFOYXRpdmVOdW1iZXIoJyAwbzEnKSB8fCAhTmF0aXZlTnVtYmVyKCcwYjEnKSB8fCBOYXRpdmVOdW1iZXIoJysweDEnKSkpIHtcbiAgdmFyIE51bWJlcldyYXBwZXIgPSBmdW5jdGlvbiBOdW1iZXIodmFsdWUpIHtcbiAgICB2YXIgaXQgPSBhcmd1bWVudHMubGVuZ3RoIDwgMSA/IDAgOiB2YWx1ZTtcbiAgICB2YXIgZHVtbXkgPSB0aGlzO1xuICAgIHJldHVybiBkdW1teSBpbnN0YW5jZW9mIE51bWJlcldyYXBwZXJcbiAgICAgIC8vIGNoZWNrIG9uIDEuLmNvbnN0cnVjdG9yKGZvbykgY2FzZVxuICAgICAgJiYgKEJST0tFTl9DTEFTU09GID8gZmFpbHMoZnVuY3Rpb24gKCkgeyBOdW1iZXJQcm90b3R5cGUudmFsdWVPZi5jYWxsKGR1bW15KTsgfSkgOiBjbGFzc29mKGR1bW15KSAhPSBOVU1CRVIpXG4gICAgICAgID8gaW5oZXJpdElmUmVxdWlyZWQobmV3IE5hdGl2ZU51bWJlcih0b051bWJlcihpdCkpLCBkdW1teSwgTnVtYmVyV3JhcHBlcikgOiB0b051bWJlcihpdCk7XG4gIH07XG4gIGZvciAodmFyIGtleXMgPSBERVNDUklQVE9SUyA/IGdldE93blByb3BlcnR5TmFtZXMoTmF0aXZlTnVtYmVyKSA6IChcbiAgICAvLyBFUzM6XG4gICAgJ01BWF9WQUxVRSxNSU5fVkFMVUUsTmFOLE5FR0FUSVZFX0lORklOSVRZLFBPU0lUSVZFX0lORklOSVRZLCcgK1xuICAgIC8vIEVTMjAxNSAoaW4gY2FzZSwgaWYgbW9kdWxlcyB3aXRoIEVTMjAxNSBOdW1iZXIgc3RhdGljcyByZXF1aXJlZCBiZWZvcmUpOlxuICAgICdFUFNJTE9OLGlzRmluaXRlLGlzSW50ZWdlcixpc05hTixpc1NhZmVJbnRlZ2VyLE1BWF9TQUZFX0lOVEVHRVIsJyArXG4gICAgJ01JTl9TQUZFX0lOVEVHRVIscGFyc2VGbG9hdCxwYXJzZUludCxpc0ludGVnZXInXG4gICkuc3BsaXQoJywnKSwgaiA9IDAsIGtleTsga2V5cy5sZW5ndGggPiBqOyBqKyspIHtcbiAgICBpZiAoaGFzKE5hdGl2ZU51bWJlciwga2V5ID0ga2V5c1tqXSkgJiYgIWhhcyhOdW1iZXJXcmFwcGVyLCBrZXkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eShOdW1iZXJXcmFwcGVyLCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihOYXRpdmVOdW1iZXIsIGtleSkpO1xuICAgIH1cbiAgfVxuICBOdW1iZXJXcmFwcGVyLnByb3RvdHlwZSA9IE51bWJlclByb3RvdHlwZTtcbiAgTnVtYmVyUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTnVtYmVyV3JhcHBlcjtcbiAgcmVkZWZpbmUoZ2xvYmFsLCBOVU1CRVIsIE51bWJlcldyYXBwZXIpO1xufVxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPG5hdj5cclxuICAgICAgICA8dWwgdi1pZj1cImp1ZGdlPT0wXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1haW5cIj48cm91dGVyLWxpbmsgdG89XCIvXCI+5paw5Z6L44Kz44Ot44OK44Km44Kk44Or44K55pyA5paw5oOF5aCxPC9yb3V0ZXItbGluaz48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHJvdXRlci1saW5rIHRvPVwiL1NoaXNldHVwYWdlXCI+5pa96Kit5oOF5aCxPC9yb3V0ZXItbGluaz48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHJvdXRlci1saW5rIHRvPVwiL0hlbHBwYWdlXCI+5oSf5p+T44Gu55aR44GE44GM44GC44KL5pa5PC9yb3V0ZXItbGluaz48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHVsIHYtaWY9XCJqdWRnZT09MVwiPlxyXG4gICAgICAgICAgICA8bGk+PHJvdXRlci1saW5rIHRvPVwiL1wiPuaWsOWei+OCs+ODreODiuOCpuOCpOODq+OCueacgOaWsOaDheWgsTwvcm91dGVyLWxpbms+PC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibWFpblwiPjxyb3V0ZXItbGluayB0bz1cIi9TaGlzZXR1cGFnZVwiPuaWveioreaDheWgsTwvcm91dGVyLWxpbms+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxyb3V0ZXItbGluayB0bz1cIi9IZWxwcGFnZVwiPuaEn+afk+OBrueWkeOBhOOBjOOBguOCi+aWuTwvcm91dGVyLWxpbms+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDx1bCB2LWlmPVwianVkZ2U9PTJcIj5cclxuICAgICAgICAgICAgPGxpPjxyb3V0ZXItbGluayB0bz1cIi9cIj7mlrDlnovjgrPjg63jg4rjgqbjgqTjg6vjgrnmnIDmlrDmg4XloLE8L3JvdXRlci1saW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48cm91dGVyLWxpbmsgdG89XCIvU2hpc2V0dXBhZ2VcIj7mlr3oqK3mg4XloLE8L3JvdXRlci1saW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1haW5cIj48cm91dGVyLWxpbmsgdG89XCIvSGVscHBhZ2VcIj7mhJ/mn5Pjga7nlpHjgYTjgYzjgYLjgovmlrk8L3JvdXRlci1saW5rPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8cm91dGVyLXZpZXcvPlxyXG4gICAgPC9uYXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAnbWFpbm1lbnUnLFxyXG4gICAgcHJvcHM6e1xyXG4gICAgICAgIGp1ZGdlOntcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5uYXZ7XHJcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcbm5hdiB1bHtcclxuZGlzcGxheTogdGFibGU7XHJcbm1hcmdpbjogMCBhdXRvO1xyXG5wYWRkaW5nOiAwO1xyXG53aWR0aDogMTAwJTtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbm5hdiB1bCBsaXtcclxuZGlzcGxheTogdGFibGUtY2VsbDtcclxubWluLXdpZHRoOiA1MHB4O1xyXG53aWR0aDogMTAwcHg7XHJcbmJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpe1xyXG4gIG5hdiB1bCBsaXtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxufVxyXG5uYXYgdWwgbGk6Zmlyc3QtY2hpbGR7XHJcbmJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjYztcclxufVxyXG5uYXYgdWwgbGkgYXtcclxuZGlzcGxheTogYmxvY2s7XHJcbndpZHRoOiAxMDAlO1xyXG5wYWRkaW5nOiAxMHB4IDA7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuY29sb3I6ICNhYWE7XHJcbn1cclxubmF2IHVsIGxpIGE6aG92ZXJ7XHJcbmJhY2tncm91bmQtY29sb3I6I0Y4RTc1MDtcclxuYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNGOEU3NTA7XHJcbn1cclxubmF2IHVsIGxpLm1haW57XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbm5hdiB1bCBsaS5tYWluIGF7XHJcbmJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMDBCMEYwO1xyXG5jb2xvcjogIzAwQjBGMDtcclxufVxyXG48L3N0eWxlPiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL21haW5tZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MzVhNzY4NFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21haW5tZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9tYWlubWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL21haW5tZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTkzNWE3Njg0Jmxhbmc9Y3NzXCJcbnNjcmlwdC5yZW5kZXIgPSByZW5kZXJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiPHRlbXBsYXRlPlxyXG4gICAgPG1haW5tZW51IGp1ZGdlPTEgLz5cclxuICAgIDxkaXYgY2xhc3M9XCJwYWdlbGlua1wiPlxyXG4gICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9zaGlzZXR1cGFnZVwiPuaWveioreaDheWgsTwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgPGE+77yePC9hPjxyb3V0ZXItbGluayA6dG89XCJ7bmFtZTogJ1NoaXNldHVfaXRpcmFucGFnZScsIHBhcmFtczoge2xvY2F0aW9uX25vOiBsb2NhdGlvbl9ub319XCI+5rSl5bGx5biC5pa96Kit5LiA6KanPC9yb3V0ZXItbGluaz5cclxuICAgICAgICA8YT7vvJ48L2E+PGE+5pa96Kit6Kmz57Sw5oOF5aCxPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8aDE+5pa96Kit6Kmz57Sw5oOF5aCxPC9oMT5cclxuICAgIDx0YWJsZSB2LWlmPVwiY291bnQ+PTBcIiBjbGFzcz1cInN5b3VzYWlcIj5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD7mlr3oqK3lkI08L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRkPnt7IHBsYWNlTmFtZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD7pm7voqbHnlarlj7c8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRkPnt7IHBsYWNlVEVMIH19PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoIHYtaWY9XCJsb2NhdGlvbl9ubz09MTJcIj7oqK3nva7loLTmiYA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHYtaWY9XCJsb2NhdGlvbl9ubz09MSB8fCBsb2NhdGlvbl9ubz09MiB8fCBsb2NhdGlvbl9ubz09M1wiPuiouueZguenkeebrjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggdi1lbHNlPlVSTDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgdi1pZj1cImxvY2F0aW9uX25vPT0xMlwiPnt7IHBsYWNlVVJMIH19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIHYtaWY9XCJsb2NhdGlvbl9ubz09MSB8fCBsb2NhdGlvbl9ubz09MiB8fCBsb2NhdGlvbl9ubz09M1wiPuOCguOBhuOBl+OBsOOCieOBj+OBiuW+heOBoeOBj+OBoOOBleOBhDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSB2LWVsc2UgOmhyZWY9XCJ0b1BsYWNlXCI+e3sgcGxhY2VVUkwgfX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+5L2P5omAPC90aD5cclxuICAgICAgICAgICAgICAgIDx0ZD57eyBwbGFjZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD7lnLDlm7M8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRkIHYtaWY9XCJsb2NhdGlvbl9ubyE9MSAmJiBsb2NhdGlvbl9ubyE9MiAmJiBsb2NhdGlvbl9ubyE9M1wiPjxpZnJhbWUgXHJcbiAgICAgICAgICAgICAgICAgICAgOnNyYz1cImdNYXBzXCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0NTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJib3JkZXI6IDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgdi1lbHNlPuOCguOBhuOBl+OBsOOCieOBj+OBiuW+heOBoeOBj+OBoOOBleOBhDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgbWFpbm1lbnUgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWFpbm1lbnUudnVlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJTaGlzZXR1X3N5b3VzYWlwYWdlXCIsXHJcbiAgcHJvcHM6IHtcclxuICAgIG5vOntcclxuICAgICAgICB0eXBlOiBTdHJpbmdcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbl9ubzoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcG9uZW50czogeyBcclxuICAgICAgbWFpbm1lbnUsXHJcbiAgfSxcclxuICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGl0ZW06IHRoaXMuJHN0b3JlLnN0YXRlLmZhY2lsaXR5VGFibGVEYXRhLFxyXG4gICAgICAgICAgajogMCxcclxuICAgICAgICAgIGk6IDAsXHJcbiAgICAgICAgICBnbWFwczoge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb3VudDoge1xyXG4gICAgICAgICAgICAgIHR5cGU6IE51bWJlclxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfSxcclxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5jb3VudCA9IHRoaXMucm93R2V0KCk7XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgICB0b1BsYWNlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbVt0aGlzLmNvdW50XVsnVVJMJ11cclxuICAgICAgfSxcclxuICAgICAgZ01hcHM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBpZih0aGlzLmxvY2F0aW9uX25vPT0nMTInKXtcclxuICAgICAgICAgICAgcmV0dXJuIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzP291dHB1dD1lbWJlZCZ6PTE1JmxsPVwiICsgdGhpcy5pdGVtW3RoaXMuY291bnRdWyfkuJbnlYxfMTDpgLJfWSddICsgXCIsXCIgKyB0aGlzLml0ZW1bdGhpcy5jb3VudF1bJ+S4lueVjF8xMOmAsl9YJ10gKyBcIiZxPVwiICsgdGhpcy5pdGVtW3RoaXMuY291bnRdWyfmlr3oqK3lkI0nXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzP291dHB1dD1lbWJlZCZ6PTE1JmxsPVwiICsgdGhpcy5pdGVtW3RoaXMuY291bnRdWyfkuJbnlYxfMTDpgLJfWSddICsgXCIsXCIgKyB0aGlzLml0ZW1bdGhpcy5jb3VudF1bJ+S4lueVjF8xMOmAsl9YJ10gKyBcIiZxPVwiICsgdGhpcy5pdGVtW3RoaXMuY291bnRdWyflkI3np7AnXVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBwbGFjZU5hbWU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBpZih0aGlzLmxvY2F0aW9uX25vPT0nMScgfHwgdGhpcy5sb2NhdGlvbl9ubz09JzInIHx8IHRoaXMubG9jYXRpb25fbm89PSczJyl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbVt0aGlzLmNvdW50XVsnVW5uYW1lZDogMTAnXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZih0aGlzLmxvY2F0aW9uX25vPT0nMTInKXtcclxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtW3RoaXMuY291bnRdWyfmlr3oqK3lkI0nXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtW3RoaXMuY291bnRdWyflkI3np7AnXVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBwbGFjZVRFTDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgIGlmKHRoaXMubG9jYXRpb25fbm89PScxJyB8fCB0aGlzLmxvY2F0aW9uX25vPT0nMicgfHwgdGhpcy5sb2NhdGlvbl9ubz09JzMnKXtcclxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtW3RoaXMuY291bnRdWydVbm5hbWVkOiAxOCddXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmKHRoaXMubG9jYXRpb25fbm89PScxMicpe1xyXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1bdGhpcy5jb3VudF1bJ+mbu+ipsSddXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1bdGhpcy5jb3VudF1bJ1RFTCddXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHBsYWNlVVJMOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgaWYodGhpcy5sb2NhdGlvbl9ubz09JzEyJyl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbVt0aGlzLmNvdW50XVsn6Kit572u5aC05omAJ11cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbVt0aGlzLmNvdW50XVsnVVJMJ11cclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgcGxhY2U6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBpZih0aGlzLmxvY2F0aW9uX25vPT0nMScgfHwgdGhpcy5sb2NhdGlvbl9ubz09JzInIHx8IHRoaXMubG9jYXRpb25fbm89PSczJyl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbVt0aGlzLmNvdW50XVsnVW5uYW1lZDogMTUnXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbVt0aGlzLmNvdW50XVsn5L2P5omAJ11cclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgICAgcm93R2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICBmb3IodGhpcy5pPTA7IHRoaXMuaTx0aGlzLml0ZW0ubGVuZ3RoOyB0aGlzLmkrKyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubG9jYXRpb25fbm89PScxMicgJiYgdGhpcy5pdGVtW3RoaXMuaV1bXCLmlr3oqK3lkI1cIl09PXRoaXMubm8pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5qID0gdGhpcy5pXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMubG9jYXRpb25fbm8hPScxMicgJiYgdGhpcy5pdGVtW3RoaXMuaV1bXCLlkI3np7BcIl09PXRoaXMubm8pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5qID0gdGhpcy5pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMualxyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuaDF7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjNmViMGY5O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgLXdlYmtpdC1ib3gtcmVmbGVjdDogYmVsb3cgLTEwcHggLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLHJnYmEoMCwwLDAsMCkscmdiYSgwLDAsMCwwKSAxMCUscmdiYSgwLCAwLCAwLCAwLjYpKTtcclxuICBtYXJnaW46IDMwcHggMDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuLnBhZ2VsaW5re1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KXtcclxuICBoMXtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICB9XHJcbiAgLnBhZ2VsaW5re1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnN5b3VzYWl7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Q2Y2ViNDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuIFxyXG4uc3lvdXNhaSB0aHtcclxuICAgIHBhZGRpbmc6IDZweCA4cHggNXB4O1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNmZmZmZmY7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGNvbG9yOiAjMTMxMzFlO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVjZTQ7XHJcbn1cclxuIFxyXG4uc3lvdXNhaSB0ZHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBjb2xvcjogIzU5NTk2MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItdG9wOiBkb3R0ZWQgMXB4ICNlMGRjY2M7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbi5zeW91c2FpIHRkIGlmcmFtZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59IFxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpe1xyXG4gICAgLnN5b3VzYWkgdGh7XHJcbiAgICAgICAgd2lkdGg6OTUlO1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgfVxyXG4gICAgLnN5b3VzYWkgdGR7XHJcbiAgICAgICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vU2hpc2V0dV9zeW91c2FpcGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmNhZmRhMjImc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TaGlzZXR1X3N5b3VzYWlwYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9TaGlzZXR1X3N5b3VzYWlwYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vU2hpc2V0dV9zeW91c2FpcGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02Y2FmZGEyMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG5zY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtNmNhZmRhMjJcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiXSwic291cmNlUm9vdCI6IiJ9