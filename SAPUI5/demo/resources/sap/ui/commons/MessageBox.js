/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/library','sap/ui/core/ElementMetadata','sap/ui/core/Control','./library','./Button','./Dialog','./Image','./TextView','./layout/MatrixLayout','./layout/MatrixLayoutCell'],function(q,c,E,C,a,B,D,I,T,M,b){"use strict";var d={};d.Action={OK:"OK",CANCEL:"CANCEL",YES:"YES",NO:"NO",ABORT:"ABORT",RETRY:"RETRY",IGNORE:"IGNORE",CLOSE:"CLOSE"};d.Icon={NONE:"NONE",INFORMATION:"INFORMATION",WARNING:"WARNING",ERROR:"ERROR",CRITICAL:"CRITICAL",SUCCESS:"SUCCESS",QUESTION:"QUESTION"};var A=c.AccessibleRole,e=d.Action,f=d.Icon,P=a.layout.Padding,V=a.layout.VAlign;var i={INFORMATION:"sapUiMboxInfo",CRITICAL:"sapUiMboxCritical",ERROR:"sapUiMboxError",WARNING:"sapUiMboxWarning",SUCCESS:"sapUiMboxSuccess",QUESTION:"sapUiMboxQuestion"};d.show=function(m,o,t,v,g,h,s){var r=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons"),j,R,k,l,n;if(typeof v!=="undefined"&&!q.isArray(v)){v=[v];}if(!v||v.length===0){v=[e.OK];}s=s||E.uid("mbox");function p(y){var z=r&&r.getText("MSGBOX_"+y),F=new B({id:s+"--btn-"+y,text:z||y,press:function(){R=y;j.close();}});if(y===h){n=F;}return F;}function u(k){return new b({padding:P.None,vAlign:V.Top,content:k});}function w(o){var y=new I({id:s+"--icon",tooltip:r&&r.getText("MSGBOX_ICON_"+o),decorative:true});y.addStyleClass("sapUiMboxIcon");y.addStyleClass(i[o]);return y;}function x(){if(typeof g==="function"){g(R||e.CLOSE);}j.detachClosed(x);j.destroy();}k=new M({id:s+"--lyt",layoutFixed:false}).addStyleClass("sapUiMboxCont");if(typeof(m)==="string"){l=new T({id:s+"--msg"}).setText(m).addStyleClass("sapUiMboxText");}else if(m instanceof C){l=m.addStyleClass("sapUiMboxText");}if(o!==d.Icon.NONE){k.createRow(u(w(o)),u(l));}else{k.createRow(u(l));}j=new D({id:s,applyContentPadding:false,title:t,accessibleRole:A.AlertDialog,resizable:false,modal:true,buttons:q.map(v,p),content:k,defaultButton:n,closed:x});j.open();};d.alert=function(m,g,t,s){return d.show(m,f.NONE,t,e.OK,function(o){if(typeof g==="function"){g();}},e.OK,s||E.uid("alert"));};d.confirm=function(m,g,t,s){return d.show(m,f.QUESTION,t,[e.OK,e.CANCEL],function(o){if(typeof g==="function"){g(o===e.OK);}},undefined,s||E.uid("confirm"));};return d;},true);
