YUI.add("datasource-scriptnode",function(B){var A=function(){A.superclass.constructor.apply(this,arguments);};B.mix(A,{NAME:"DataSource.ScriptNode",ATTRS:{get:{value:B.Get,cloneDefaultValue:false},asyncMode:{value:"allowAll"},scriptCallbackParam:{value:"callback"},generateRequestCallback:{value:function(C,D){return"&"+C.get("scriptCallbackParam")+"=YUI.Env.DataSource.callbacks["+D+"]";}}},callbacks:[],_tId:0});B.extend(A,B.DataSource.Local,{initializer:function(C){},_defRequestFn:function(F){var E=this.get("source"),D=this.get("get"),G=A._tId++,C=this;YUI.Env.DataSource.callbacks[G]=B.rbind(function(H){if((C.get("asyncMode")!=="ignoreStaleResponses")||(G===A.callbacks.length-1)){C.fire("data",B.mix({data:H},F));}else{}delete A.callbacks[G];},this,G);E+=F.request+this.get("generateRequestCallback")(this,G);D.script(E,{autopurge:true,onFailure:B.bind(function(H){H.error=new Error(this.toString()+" Data failure");this.fire("error",H);},this,F)});return F.tId;}});B.DataSource.ScriptNode=A;YUI.namespace("Env.DataSource.callbacks");},"@VERSION@",{requires:["datasource-base","get"]});