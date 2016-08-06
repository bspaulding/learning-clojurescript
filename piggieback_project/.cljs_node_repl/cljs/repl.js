// Compiled by ClojureScript 1.8.51 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9421_9435 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9422_9436 = null;
var count__9423_9437 = (0);
var i__9424_9438 = (0);
while(true){
if((i__9424_9438 < count__9423_9437)){
var f_9439 = cljs.core._nth.call(null,chunk__9422_9436,i__9424_9438);
cljs.core.println.call(null,"  ",f_9439);

var G__9440 = seq__9421_9435;
var G__9441 = chunk__9422_9436;
var G__9442 = count__9423_9437;
var G__9443 = (i__9424_9438 + (1));
seq__9421_9435 = G__9440;
chunk__9422_9436 = G__9441;
count__9423_9437 = G__9442;
i__9424_9438 = G__9443;
continue;
} else {
var temp__4657__auto___9444 = cljs.core.seq.call(null,seq__9421_9435);
if(temp__4657__auto___9444){
var seq__9421_9445__$1 = temp__4657__auto___9444;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9421_9445__$1)){
var c__9029__auto___9446 = cljs.core.chunk_first.call(null,seq__9421_9445__$1);
var G__9447 = cljs.core.chunk_rest.call(null,seq__9421_9445__$1);
var G__9448 = c__9029__auto___9446;
var G__9449 = cljs.core.count.call(null,c__9029__auto___9446);
var G__9450 = (0);
seq__9421_9435 = G__9447;
chunk__9422_9436 = G__9448;
count__9423_9437 = G__9449;
i__9424_9438 = G__9450;
continue;
} else {
var f_9451 = cljs.core.first.call(null,seq__9421_9445__$1);
cljs.core.println.call(null,"  ",f_9451);

var G__9452 = cljs.core.next.call(null,seq__9421_9445__$1);
var G__9453 = null;
var G__9454 = (0);
var G__9455 = (0);
seq__9421_9435 = G__9452;
chunk__9422_9436 = G__9453;
count__9423_9437 = G__9454;
i__9424_9438 = G__9455;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9456 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__8218__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__8218__auto__)){
return or__8218__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9456);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9456)))?cljs.core.second.call(null,arglists_9456):arglists_9456));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9425 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9426 = null;
var count__9427 = (0);
var i__9428 = (0);
while(true){
if((i__9428 < count__9427)){
var vec__9429 = cljs.core._nth.call(null,chunk__9426,i__9428);
var name = cljs.core.nth.call(null,vec__9429,(0),null);
var map__9430 = cljs.core.nth.call(null,vec__9429,(1),null);
var map__9430__$1 = ((((!((map__9430 == null)))?((((map__9430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9430):map__9430);
var doc = cljs.core.get.call(null,map__9430__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9430__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9457 = seq__9425;
var G__9458 = chunk__9426;
var G__9459 = count__9427;
var G__9460 = (i__9428 + (1));
seq__9425 = G__9457;
chunk__9426 = G__9458;
count__9427 = G__9459;
i__9428 = G__9460;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9425);
if(temp__4657__auto__){
var seq__9425__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9425__$1)){
var c__9029__auto__ = cljs.core.chunk_first.call(null,seq__9425__$1);
var G__9461 = cljs.core.chunk_rest.call(null,seq__9425__$1);
var G__9462 = c__9029__auto__;
var G__9463 = cljs.core.count.call(null,c__9029__auto__);
var G__9464 = (0);
seq__9425 = G__9461;
chunk__9426 = G__9462;
count__9427 = G__9463;
i__9428 = G__9464;
continue;
} else {
var vec__9432 = cljs.core.first.call(null,seq__9425__$1);
var name = cljs.core.nth.call(null,vec__9432,(0),null);
var map__9433 = cljs.core.nth.call(null,vec__9432,(1),null);
var map__9433__$1 = ((((!((map__9433 == null)))?((((map__9433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9433):map__9433);
var doc = cljs.core.get.call(null,map__9433__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9433__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9465 = cljs.core.next.call(null,seq__9425__$1);
var G__9466 = null;
var G__9467 = (0);
var G__9468 = (0);
seq__9425 = G__9465;
chunk__9426 = G__9466;
count__9427 = G__9467;
i__9428 = G__9468;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map