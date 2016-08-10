// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__24985 = cljs.core._EQ_;
var expr__24986 = (function (){var or__18432__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e24989){if((e24989 instanceof Error)){
var e = e24989;
return false;
} else {
throw e24989;

}
}})();
if(cljs.core.truth_(or__18432__auto__)){
return or__18432__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__24985.call(null,"true",expr__24986))){
return true;
} else {
if(cljs.core.truth_(pred__24985.call(null,"false",expr__24986))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24986)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e24991){if((e24991 instanceof Error)){
var e = e24991;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e24991;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19509__auto__ = [];
var len__19502__auto___24993 = arguments.length;
var i__19503__auto___24994 = (0);
while(true){
if((i__19503__auto___24994 < len__19502__auto___24993)){
args__19509__auto__.push((arguments[i__19503__auto___24994]));

var G__24995 = (i__19503__auto___24994 + (1));
i__19503__auto___24994 = G__24995;
continue;
} else {
}
break;
}

var argseq__19510__auto__ = ((((0) < args__19509__auto__.length))?(new cljs.core.IndexedSeq(args__19509__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19510__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq24992){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24992));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24996){
var map__24999 = p__24996;
var map__24999__$1 = ((((!((map__24999 == null)))?((((map__24999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24999):map__24999);
var message = cljs.core.get.call(null,map__24999__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24999__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18432__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18432__auto__)){
return or__18432__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18420__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18420__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18420__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20599__auto___25161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto___25161,ch){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto___25161,ch){
return (function (state_25130){
var state_val_25131 = (state_25130[(1)]);
if((state_val_25131 === (7))){
var inst_25126 = (state_25130[(2)]);
var state_25130__$1 = state_25130;
var statearr_25132_25162 = state_25130__$1;
(statearr_25132_25162[(2)] = inst_25126);

(statearr_25132_25162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25131 === (1))){
var state_25130__$1 = state_25130;
var statearr_25133_25163 = state_25130__$1;
(statearr_25133_25163[(2)] = null);

(statearr_25133_25163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25131 === (4))){
var inst_25083 = (state_25130[(7)]);
var inst_25083__$1 = (state_25130[(2)]);
var state_25130__$1 = (function (){var statearr_25134 = state_25130;
(statearr_25134[(7)] = inst_25083__$1);

return statearr_25134;
})();
if(cljs.core.truth_(inst_25083__$1)){
var statearr_25135_25164 = state_25130__$1;
(statearr_25135_25164[(1)] = (5));

} else {
var statearr_25136_25165 = state_25130__$1;
(statearr_25136_25165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25131 === (15))){
var inst_25090 = (state_25130[(8)]);
var inst_25105 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25090);
var inst_25106 = cljs.core.first.call(null,inst_25105);
var inst_25107 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25106);
var inst_25108 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25107)].join('');
var inst_25109 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25108);
var state_25130__$1 = state_25130;
var statearr_25137_25166 = state_25130__$1;
(statearr_25137_25166[(2)] = inst_25109);

(statearr_25137_25166[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25131 === (13))){
var inst_25114 = (state_25130[(2)]);
var state_25130__$1 = state_25130;
var statearr_25138_25167 = state_25130__$1;
(statearr_25138_25167[(2)] = inst_25114);

(statearr_25138_25167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25131 === (6))){
var state_25130__$1 = state_25130;
var statearr_25139_25168 = state_25130__$1;
(statearr_25139_25168[(2)] = null);

(statearr_25139_25168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25131 === (17))){
var inst_25112 = (state_25130[(2)]);
var state_25130__$1 = state_25130;
var statearr_25140_25169 = state_25130__$1;
(statearr_25140_25169[(2)] = inst_25112);

(statearr_25140_25169[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25131 === (3))){
var inst_25128 = (state_25130[(2)]);
var state_25130__$1 = state_25130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25130__$1,inst_25128);
} else {
if((state_val_25131 === (12))){
var inst_25089 = (state_25130[(9)]);
var inst_25103 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25089,opts);
var state_25130__$1 = state_25130;
if(cljs.core.truth_(inst_25103)){
var statearr_25141_25170 = state_25130__$1;
(statearr_25141_25170[(1)] = (15));

} else {
var statearr_25142_25171 = state_25130__$1;
(statearr_25142_25171[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25131 === (2))){
var state_25130__$1 = state_25130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25130__$1,(4),ch);
} else {
if((state_val_25131 === (11))){
var inst_25090 = (state_25130[(8)]);
var inst_25095 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25096 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25090);
var inst_25097 = cljs.core.async.timeout.call(null,(1000));
var inst_25098 = [inst_25096,inst_25097];
var inst_25099 = (new cljs.core.PersistentVector(null,2,(5),inst_25095,inst_25098,null));
var state_25130__$1 = state_25130;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25130__$1,(14),inst_25099);
} else {
if((state_val_25131 === (9))){
var inst_25090 = (state_25130[(8)]);
var inst_25116 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25117 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25090);
var inst_25118 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25117);
var inst_25119 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25118)].join('');
var inst_25120 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25119);
var state_25130__$1 = (function (){var statearr_25143 = state_25130;
(statearr_25143[(10)] = inst_25116);

return statearr_25143;
})();
var statearr_25144_25172 = state_25130__$1;
(statearr_25144_25172[(2)] = inst_25120);

(statearr_25144_25172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25131 === (5))){
var inst_25083 = (state_25130[(7)]);
var inst_25085 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25086 = (new cljs.core.PersistentArrayMap(null,2,inst_25085,null));
var inst_25087 = (new cljs.core.PersistentHashSet(null,inst_25086,null));
var inst_25088 = figwheel.client.focus_msgs.call(null,inst_25087,inst_25083);
var inst_25089 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25088);
var inst_25090 = cljs.core.first.call(null,inst_25088);
var inst_25091 = figwheel.client.autoload_QMARK_.call(null);
var state_25130__$1 = (function (){var statearr_25145 = state_25130;
(statearr_25145[(8)] = inst_25090);

(statearr_25145[(9)] = inst_25089);

return statearr_25145;
})();
if(cljs.core.truth_(inst_25091)){
var statearr_25146_25173 = state_25130__$1;
(statearr_25146_25173[(1)] = (8));

} else {
var statearr_25147_25174 = state_25130__$1;
(statearr_25147_25174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25131 === (14))){
var inst_25101 = (state_25130[(2)]);
var state_25130__$1 = state_25130;
var statearr_25148_25175 = state_25130__$1;
(statearr_25148_25175[(2)] = inst_25101);

(statearr_25148_25175[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25131 === (16))){
var state_25130__$1 = state_25130;
var statearr_25149_25176 = state_25130__$1;
(statearr_25149_25176[(2)] = null);

(statearr_25149_25176[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25131 === (10))){
var inst_25122 = (state_25130[(2)]);
var state_25130__$1 = (function (){var statearr_25150 = state_25130;
(statearr_25150[(11)] = inst_25122);

return statearr_25150;
})();
var statearr_25151_25177 = state_25130__$1;
(statearr_25151_25177[(2)] = null);

(statearr_25151_25177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25131 === (8))){
var inst_25089 = (state_25130[(9)]);
var inst_25093 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25089,opts);
var state_25130__$1 = state_25130;
if(cljs.core.truth_(inst_25093)){
var statearr_25152_25178 = state_25130__$1;
(statearr_25152_25178[(1)] = (11));

} else {
var statearr_25153_25179 = state_25130__$1;
(statearr_25153_25179[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20599__auto___25161,ch))
;
return ((function (switch__20534__auto__,c__20599__auto___25161,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20535__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20535__auto____0 = (function (){
var statearr_25157 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25157[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20535__auto__);

(statearr_25157[(1)] = (1));

return statearr_25157;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20535__auto____1 = (function (state_25130){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_25130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e25158){if((e25158 instanceof Object)){
var ex__20538__auto__ = e25158;
var statearr_25159_25180 = state_25130;
(statearr_25159_25180[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25181 = state_25130;
state_25130 = G__25181;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20535__auto__ = function(state_25130){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20535__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20535__auto____1.call(this,state_25130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20535__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20535__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto___25161,ch))
})();
var state__20601__auto__ = (function (){var statearr_25160 = f__20600__auto__.call(null);
(statearr_25160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto___25161);

return statearr_25160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto___25161,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25182_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25182_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_25189 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25189){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25187 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25188 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25188;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25187;
}}catch (e25186){if((e25186 instanceof Error)){
var e = e25186;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25189], null));
} else {
var e = e25186;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25189))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25190){
var map__25197 = p__25190;
var map__25197__$1 = ((((!((map__25197 == null)))?((((map__25197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25197):map__25197);
var opts = map__25197__$1;
var build_id = cljs.core.get.call(null,map__25197__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25197,map__25197__$1,opts,build_id){
return (function (p__25199){
var vec__25200 = p__25199;
var map__25201 = cljs.core.nth.call(null,vec__25200,(0),null);
var map__25201__$1 = ((((!((map__25201 == null)))?((((map__25201.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25201.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25201):map__25201);
var msg = map__25201__$1;
var msg_name = cljs.core.get.call(null,map__25201__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25200,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25200,map__25201,map__25201__$1,msg,msg_name,_,map__25197,map__25197__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25200,map__25201,map__25201__$1,msg,msg_name,_,map__25197,map__25197__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25197,map__25197__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25207){
var vec__25208 = p__25207;
var map__25209 = cljs.core.nth.call(null,vec__25208,(0),null);
var map__25209__$1 = ((((!((map__25209 == null)))?((((map__25209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25209):map__25209);
var msg = map__25209__$1;
var msg_name = cljs.core.get.call(null,map__25209__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25208,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25211){
var map__25221 = p__25211;
var map__25221__$1 = ((((!((map__25221 == null)))?((((map__25221.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25221.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25221):map__25221);
var on_compile_warning = cljs.core.get.call(null,map__25221__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25221__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25221,map__25221__$1,on_compile_warning,on_compile_fail){
return (function (p__25223){
var vec__25224 = p__25223;
var map__25225 = cljs.core.nth.call(null,vec__25224,(0),null);
var map__25225__$1 = ((((!((map__25225 == null)))?((((map__25225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25225):map__25225);
var msg = map__25225__$1;
var msg_name = cljs.core.get.call(null,map__25225__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25224,(1));
var pred__25227 = cljs.core._EQ_;
var expr__25228 = msg_name;
if(cljs.core.truth_(pred__25227.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25228))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25227.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25228))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25221,map__25221__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto__,msg_hist,msg_names,msg){
return (function (state_25444){
var state_val_25445 = (state_25444[(1)]);
if((state_val_25445 === (7))){
var inst_25368 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
if(cljs.core.truth_(inst_25368)){
var statearr_25446_25492 = state_25444__$1;
(statearr_25446_25492[(1)] = (8));

} else {
var statearr_25447_25493 = state_25444__$1;
(statearr_25447_25493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (20))){
var inst_25438 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25448_25494 = state_25444__$1;
(statearr_25448_25494[(2)] = inst_25438);

(statearr_25448_25494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (27))){
var inst_25434 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25449_25495 = state_25444__$1;
(statearr_25449_25495[(2)] = inst_25434);

(statearr_25449_25495[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (1))){
var inst_25361 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25444__$1 = state_25444;
if(cljs.core.truth_(inst_25361)){
var statearr_25450_25496 = state_25444__$1;
(statearr_25450_25496[(1)] = (2));

} else {
var statearr_25451_25497 = state_25444__$1;
(statearr_25451_25497[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (24))){
var inst_25436 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25452_25498 = state_25444__$1;
(statearr_25452_25498[(2)] = inst_25436);

(statearr_25452_25498[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (4))){
var inst_25442 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25444__$1,inst_25442);
} else {
if((state_val_25445 === (15))){
var inst_25440 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25453_25499 = state_25444__$1;
(statearr_25453_25499[(2)] = inst_25440);

(statearr_25453_25499[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (21))){
var inst_25399 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25454_25500 = state_25444__$1;
(statearr_25454_25500[(2)] = inst_25399);

(statearr_25454_25500[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (31))){
var inst_25423 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25444__$1 = state_25444;
if(cljs.core.truth_(inst_25423)){
var statearr_25455_25501 = state_25444__$1;
(statearr_25455_25501[(1)] = (34));

} else {
var statearr_25456_25502 = state_25444__$1;
(statearr_25456_25502[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (32))){
var inst_25432 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25457_25503 = state_25444__$1;
(statearr_25457_25503[(2)] = inst_25432);

(statearr_25457_25503[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (33))){
var inst_25421 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25458_25504 = state_25444__$1;
(statearr_25458_25504[(2)] = inst_25421);

(statearr_25458_25504[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (13))){
var inst_25382 = figwheel.client.heads_up.clear.call(null);
var state_25444__$1 = state_25444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25444__$1,(16),inst_25382);
} else {
if((state_val_25445 === (22))){
var inst_25403 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25404 = figwheel.client.heads_up.append_message.call(null,inst_25403);
var state_25444__$1 = state_25444;
var statearr_25459_25505 = state_25444__$1;
(statearr_25459_25505[(2)] = inst_25404);

(statearr_25459_25505[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (36))){
var inst_25430 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25460_25506 = state_25444__$1;
(statearr_25460_25506[(2)] = inst_25430);

(statearr_25460_25506[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (29))){
var inst_25414 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25461_25507 = state_25444__$1;
(statearr_25461_25507[(2)] = inst_25414);

(statearr_25461_25507[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (6))){
var inst_25363 = (state_25444[(7)]);
var state_25444__$1 = state_25444;
var statearr_25462_25508 = state_25444__$1;
(statearr_25462_25508[(2)] = inst_25363);

(statearr_25462_25508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (28))){
var inst_25410 = (state_25444[(2)]);
var inst_25411 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25412 = figwheel.client.heads_up.display_warning.call(null,inst_25411);
var state_25444__$1 = (function (){var statearr_25463 = state_25444;
(statearr_25463[(8)] = inst_25410);

return statearr_25463;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25444__$1,(29),inst_25412);
} else {
if((state_val_25445 === (25))){
var inst_25408 = figwheel.client.heads_up.clear.call(null);
var state_25444__$1 = state_25444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25444__$1,(28),inst_25408);
} else {
if((state_val_25445 === (34))){
var inst_25425 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25444__$1 = state_25444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25444__$1,(37),inst_25425);
} else {
if((state_val_25445 === (17))){
var inst_25390 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25464_25509 = state_25444__$1;
(statearr_25464_25509[(2)] = inst_25390);

(statearr_25464_25509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (3))){
var inst_25380 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25444__$1 = state_25444;
if(cljs.core.truth_(inst_25380)){
var statearr_25465_25510 = state_25444__$1;
(statearr_25465_25510[(1)] = (13));

} else {
var statearr_25466_25511 = state_25444__$1;
(statearr_25466_25511[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (12))){
var inst_25376 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25467_25512 = state_25444__$1;
(statearr_25467_25512[(2)] = inst_25376);

(statearr_25467_25512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (2))){
var inst_25363 = (state_25444[(7)]);
var inst_25363__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25444__$1 = (function (){var statearr_25468 = state_25444;
(statearr_25468[(7)] = inst_25363__$1);

return statearr_25468;
})();
if(cljs.core.truth_(inst_25363__$1)){
var statearr_25469_25513 = state_25444__$1;
(statearr_25469_25513[(1)] = (5));

} else {
var statearr_25470_25514 = state_25444__$1;
(statearr_25470_25514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (23))){
var inst_25406 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25444__$1 = state_25444;
if(cljs.core.truth_(inst_25406)){
var statearr_25471_25515 = state_25444__$1;
(statearr_25471_25515[(1)] = (25));

} else {
var statearr_25472_25516 = state_25444__$1;
(statearr_25472_25516[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (35))){
var state_25444__$1 = state_25444;
var statearr_25473_25517 = state_25444__$1;
(statearr_25473_25517[(2)] = null);

(statearr_25473_25517[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (19))){
var inst_25401 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25444__$1 = state_25444;
if(cljs.core.truth_(inst_25401)){
var statearr_25474_25518 = state_25444__$1;
(statearr_25474_25518[(1)] = (22));

} else {
var statearr_25475_25519 = state_25444__$1;
(statearr_25475_25519[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (11))){
var inst_25372 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25476_25520 = state_25444__$1;
(statearr_25476_25520[(2)] = inst_25372);

(statearr_25476_25520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (9))){
var inst_25374 = figwheel.client.heads_up.clear.call(null);
var state_25444__$1 = state_25444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25444__$1,(12),inst_25374);
} else {
if((state_val_25445 === (5))){
var inst_25365 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25444__$1 = state_25444;
var statearr_25477_25521 = state_25444__$1;
(statearr_25477_25521[(2)] = inst_25365);

(statearr_25477_25521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (14))){
var inst_25392 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25444__$1 = state_25444;
if(cljs.core.truth_(inst_25392)){
var statearr_25478_25522 = state_25444__$1;
(statearr_25478_25522[(1)] = (18));

} else {
var statearr_25479_25523 = state_25444__$1;
(statearr_25479_25523[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (26))){
var inst_25416 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25444__$1 = state_25444;
if(cljs.core.truth_(inst_25416)){
var statearr_25480_25524 = state_25444__$1;
(statearr_25480_25524[(1)] = (30));

} else {
var statearr_25481_25525 = state_25444__$1;
(statearr_25481_25525[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (16))){
var inst_25384 = (state_25444[(2)]);
var inst_25385 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25386 = figwheel.client.format_messages.call(null,inst_25385);
var inst_25387 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25388 = figwheel.client.heads_up.display_error.call(null,inst_25386,inst_25387);
var state_25444__$1 = (function (){var statearr_25482 = state_25444;
(statearr_25482[(9)] = inst_25384);

return statearr_25482;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25444__$1,(17),inst_25388);
} else {
if((state_val_25445 === (30))){
var inst_25418 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25419 = figwheel.client.heads_up.display_warning.call(null,inst_25418);
var state_25444__$1 = state_25444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25444__$1,(33),inst_25419);
} else {
if((state_val_25445 === (10))){
var inst_25378 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25483_25526 = state_25444__$1;
(statearr_25483_25526[(2)] = inst_25378);

(statearr_25483_25526[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (18))){
var inst_25394 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25395 = figwheel.client.format_messages.call(null,inst_25394);
var inst_25396 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25397 = figwheel.client.heads_up.display_error.call(null,inst_25395,inst_25396);
var state_25444__$1 = state_25444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25444__$1,(21),inst_25397);
} else {
if((state_val_25445 === (37))){
var inst_25427 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25484_25527 = state_25444__$1;
(statearr_25484_25527[(2)] = inst_25427);

(statearr_25484_25527[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (8))){
var inst_25370 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25444__$1 = state_25444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25444__$1,(11),inst_25370);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20599__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20534__auto__,c__20599__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20535__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20535__auto____0 = (function (){
var statearr_25488 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25488[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20535__auto__);

(statearr_25488[(1)] = (1));

return statearr_25488;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20535__auto____1 = (function (state_25444){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_25444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e25489){if((e25489 instanceof Object)){
var ex__20538__auto__ = e25489;
var statearr_25490_25528 = state_25444;
(statearr_25490_25528[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25529 = state_25444;
state_25444 = G__25529;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20535__auto__ = function(state_25444){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20535__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20535__auto____1.call(this,state_25444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20535__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20535__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto__,msg_hist,msg_names,msg))
})();
var state__20601__auto__ = (function (){var statearr_25491 = f__20600__auto__.call(null);
(statearr_25491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto__);

return statearr_25491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto__,msg_hist,msg_names,msg))
);

return c__20599__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20599__auto___25592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto___25592,ch){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto___25592,ch){
return (function (state_25575){
var state_val_25576 = (state_25575[(1)]);
if((state_val_25576 === (1))){
var state_25575__$1 = state_25575;
var statearr_25577_25593 = state_25575__$1;
(statearr_25577_25593[(2)] = null);

(statearr_25577_25593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25576 === (2))){
var state_25575__$1 = state_25575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25575__$1,(4),ch);
} else {
if((state_val_25576 === (3))){
var inst_25573 = (state_25575[(2)]);
var state_25575__$1 = state_25575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25575__$1,inst_25573);
} else {
if((state_val_25576 === (4))){
var inst_25563 = (state_25575[(7)]);
var inst_25563__$1 = (state_25575[(2)]);
var state_25575__$1 = (function (){var statearr_25578 = state_25575;
(statearr_25578[(7)] = inst_25563__$1);

return statearr_25578;
})();
if(cljs.core.truth_(inst_25563__$1)){
var statearr_25579_25594 = state_25575__$1;
(statearr_25579_25594[(1)] = (5));

} else {
var statearr_25580_25595 = state_25575__$1;
(statearr_25580_25595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25576 === (5))){
var inst_25563 = (state_25575[(7)]);
var inst_25565 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25563);
var state_25575__$1 = state_25575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25575__$1,(8),inst_25565);
} else {
if((state_val_25576 === (6))){
var state_25575__$1 = state_25575;
var statearr_25581_25596 = state_25575__$1;
(statearr_25581_25596[(2)] = null);

(statearr_25581_25596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25576 === (7))){
var inst_25571 = (state_25575[(2)]);
var state_25575__$1 = state_25575;
var statearr_25582_25597 = state_25575__$1;
(statearr_25582_25597[(2)] = inst_25571);

(statearr_25582_25597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25576 === (8))){
var inst_25567 = (state_25575[(2)]);
var state_25575__$1 = (function (){var statearr_25583 = state_25575;
(statearr_25583[(8)] = inst_25567);

return statearr_25583;
})();
var statearr_25584_25598 = state_25575__$1;
(statearr_25584_25598[(2)] = null);

(statearr_25584_25598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__20599__auto___25592,ch))
;
return ((function (switch__20534__auto__,c__20599__auto___25592,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20535__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20535__auto____0 = (function (){
var statearr_25588 = [null,null,null,null,null,null,null,null,null];
(statearr_25588[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20535__auto__);

(statearr_25588[(1)] = (1));

return statearr_25588;
});
var figwheel$client$heads_up_plugin_$_state_machine__20535__auto____1 = (function (state_25575){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_25575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e25589){if((e25589 instanceof Object)){
var ex__20538__auto__ = e25589;
var statearr_25590_25599 = state_25575;
(statearr_25590_25599[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25600 = state_25575;
state_25575 = G__25600;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20535__auto__ = function(state_25575){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20535__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20535__auto____1.call(this,state_25575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20535__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20535__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto___25592,ch))
})();
var state__20601__auto__ = (function (){var statearr_25591 = f__20600__auto__.call(null);
(statearr_25591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto___25592);

return statearr_25591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto___25592,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto__){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto__){
return (function (state_25621){
var state_val_25622 = (state_25621[(1)]);
if((state_val_25622 === (1))){
var inst_25616 = cljs.core.async.timeout.call(null,(3000));
var state_25621__$1 = state_25621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25621__$1,(2),inst_25616);
} else {
if((state_val_25622 === (2))){
var inst_25618 = (state_25621[(2)]);
var inst_25619 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25621__$1 = (function (){var statearr_25623 = state_25621;
(statearr_25623[(7)] = inst_25618);

return statearr_25623;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25621__$1,inst_25619);
} else {
return null;
}
}
});})(c__20599__auto__))
;
return ((function (switch__20534__auto__,c__20599__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20535__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20535__auto____0 = (function (){
var statearr_25627 = [null,null,null,null,null,null,null,null];
(statearr_25627[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20535__auto__);

(statearr_25627[(1)] = (1));

return statearr_25627;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20535__auto____1 = (function (state_25621){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_25621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e25628){if((e25628 instanceof Object)){
var ex__20538__auto__ = e25628;
var statearr_25629_25631 = state_25621;
(statearr_25629_25631[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25632 = state_25621;
state_25621 = G__25632;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20535__auto__ = function(state_25621){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20535__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20535__auto____1.call(this,state_25621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20535__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20535__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto__))
})();
var state__20601__auto__ = (function (){var statearr_25630 = f__20600__auto__.call(null);
(statearr_25630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto__);

return statearr_25630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto__))
);

return c__20599__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25633){
var map__25640 = p__25633;
var map__25640__$1 = ((((!((map__25640 == null)))?((((map__25640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25640):map__25640);
var ed = map__25640__$1;
var formatted_exception = cljs.core.get.call(null,map__25640__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25640__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25640__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25642_25646 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25643_25647 = null;
var count__25644_25648 = (0);
var i__25645_25649 = (0);
while(true){
if((i__25645_25649 < count__25644_25648)){
var msg_25650 = cljs.core._nth.call(null,chunk__25643_25647,i__25645_25649);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25650);

var G__25651 = seq__25642_25646;
var G__25652 = chunk__25643_25647;
var G__25653 = count__25644_25648;
var G__25654 = (i__25645_25649 + (1));
seq__25642_25646 = G__25651;
chunk__25643_25647 = G__25652;
count__25644_25648 = G__25653;
i__25645_25649 = G__25654;
continue;
} else {
var temp__4657__auto___25655 = cljs.core.seq.call(null,seq__25642_25646);
if(temp__4657__auto___25655){
var seq__25642_25656__$1 = temp__4657__auto___25655;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25642_25656__$1)){
var c__19243__auto___25657 = cljs.core.chunk_first.call(null,seq__25642_25656__$1);
var G__25658 = cljs.core.chunk_rest.call(null,seq__25642_25656__$1);
var G__25659 = c__19243__auto___25657;
var G__25660 = cljs.core.count.call(null,c__19243__auto___25657);
var G__25661 = (0);
seq__25642_25646 = G__25658;
chunk__25643_25647 = G__25659;
count__25644_25648 = G__25660;
i__25645_25649 = G__25661;
continue;
} else {
var msg_25662 = cljs.core.first.call(null,seq__25642_25656__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25662);

var G__25663 = cljs.core.next.call(null,seq__25642_25656__$1);
var G__25664 = null;
var G__25665 = (0);
var G__25666 = (0);
seq__25642_25646 = G__25663;
chunk__25643_25647 = G__25664;
count__25644_25648 = G__25665;
i__25645_25649 = G__25666;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25667){
var map__25670 = p__25667;
var map__25670__$1 = ((((!((map__25670 == null)))?((((map__25670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25670):map__25670);
var w = map__25670__$1;
var message = cljs.core.get.call(null,map__25670__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18420__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18420__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18420__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25678 = cljs.core.seq.call(null,plugins);
var chunk__25679 = null;
var count__25680 = (0);
var i__25681 = (0);
while(true){
if((i__25681 < count__25680)){
var vec__25682 = cljs.core._nth.call(null,chunk__25679,i__25681);
var k = cljs.core.nth.call(null,vec__25682,(0),null);
var plugin = cljs.core.nth.call(null,vec__25682,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25684 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25678,chunk__25679,count__25680,i__25681,pl_25684,vec__25682,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25684.call(null,msg_hist);
});})(seq__25678,chunk__25679,count__25680,i__25681,pl_25684,vec__25682,k,plugin))
);
} else {
}

var G__25685 = seq__25678;
var G__25686 = chunk__25679;
var G__25687 = count__25680;
var G__25688 = (i__25681 + (1));
seq__25678 = G__25685;
chunk__25679 = G__25686;
count__25680 = G__25687;
i__25681 = G__25688;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25678);
if(temp__4657__auto__){
var seq__25678__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25678__$1)){
var c__19243__auto__ = cljs.core.chunk_first.call(null,seq__25678__$1);
var G__25689 = cljs.core.chunk_rest.call(null,seq__25678__$1);
var G__25690 = c__19243__auto__;
var G__25691 = cljs.core.count.call(null,c__19243__auto__);
var G__25692 = (0);
seq__25678 = G__25689;
chunk__25679 = G__25690;
count__25680 = G__25691;
i__25681 = G__25692;
continue;
} else {
var vec__25683 = cljs.core.first.call(null,seq__25678__$1);
var k = cljs.core.nth.call(null,vec__25683,(0),null);
var plugin = cljs.core.nth.call(null,vec__25683,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25693 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25678,chunk__25679,count__25680,i__25681,pl_25693,vec__25683,k,plugin,seq__25678__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25693.call(null,msg_hist);
});})(seq__25678,chunk__25679,count__25680,i__25681,pl_25693,vec__25683,k,plugin,seq__25678__$1,temp__4657__auto__))
);
} else {
}

var G__25694 = cljs.core.next.call(null,seq__25678__$1);
var G__25695 = null;
var G__25696 = (0);
var G__25697 = (0);
seq__25678 = G__25694;
chunk__25679 = G__25695;
count__25680 = G__25696;
i__25681 = G__25697;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args25698 = [];
var len__19502__auto___25701 = arguments.length;
var i__19503__auto___25702 = (0);
while(true){
if((i__19503__auto___25702 < len__19502__auto___25701)){
args25698.push((arguments[i__19503__auto___25702]));

var G__25703 = (i__19503__auto___25702 + (1));
i__19503__auto___25702 = G__25703;
continue;
} else {
}
break;
}

var G__25700 = args25698.length;
switch (G__25700) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25698.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19509__auto__ = [];
var len__19502__auto___25709 = arguments.length;
var i__19503__auto___25710 = (0);
while(true){
if((i__19503__auto___25710 < len__19502__auto___25709)){
args__19509__auto__.push((arguments[i__19503__auto___25710]));

var G__25711 = (i__19503__auto___25710 + (1));
i__19503__auto___25710 = G__25711;
continue;
} else {
}
break;
}

var argseq__19510__auto__ = ((((0) < args__19509__auto__.length))?(new cljs.core.IndexedSeq(args__19509__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19510__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25706){
var map__25707 = p__25706;
var map__25707__$1 = ((((!((map__25707 == null)))?((((map__25707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25707):map__25707);
var opts = map__25707__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25705){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25705));
});

//# sourceMappingURL=client.js.map