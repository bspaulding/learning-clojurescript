// Compiled by ClojureScript 1.8.51 {}
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
var seq__9356_9370 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9357_9371 = null;
var count__9358_9372 = (0);
var i__9359_9373 = (0);
while(true){
if((i__9359_9373 < count__9358_9372)){
var f_9374 = cljs.core._nth.call(null,chunk__9357_9371,i__9359_9373);
cljs.core.println.call(null,"  ",f_9374);

var G__9375 = seq__9356_9370;
var G__9376 = chunk__9357_9371;
var G__9377 = count__9358_9372;
var G__9378 = (i__9359_9373 + (1));
seq__9356_9370 = G__9375;
chunk__9357_9371 = G__9376;
count__9358_9372 = G__9377;
i__9359_9373 = G__9378;
continue;
} else {
var temp__4657__auto___9379 = cljs.core.seq.call(null,seq__9356_9370);
if(temp__4657__auto___9379){
var seq__9356_9380__$1 = temp__4657__auto___9379;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9356_9380__$1)){
var c__8952__auto___9381 = cljs.core.chunk_first.call(null,seq__9356_9380__$1);
var G__9382 = cljs.core.chunk_rest.call(null,seq__9356_9380__$1);
var G__9383 = c__8952__auto___9381;
var G__9384 = cljs.core.count.call(null,c__8952__auto___9381);
var G__9385 = (0);
seq__9356_9370 = G__9382;
chunk__9357_9371 = G__9383;
count__9358_9372 = G__9384;
i__9359_9373 = G__9385;
continue;
} else {
var f_9386 = cljs.core.first.call(null,seq__9356_9380__$1);
cljs.core.println.call(null,"  ",f_9386);

var G__9387 = cljs.core.next.call(null,seq__9356_9380__$1);
var G__9388 = null;
var G__9389 = (0);
var G__9390 = (0);
seq__9356_9370 = G__9387;
chunk__9357_9371 = G__9388;
count__9358_9372 = G__9389;
i__9359_9373 = G__9390;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9391 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__8141__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__8141__auto__)){
return or__8141__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9391);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9391)))?cljs.core.second.call(null,arglists_9391):arglists_9391));
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
var seq__9360 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9361 = null;
var count__9362 = (0);
var i__9363 = (0);
while(true){
if((i__9363 < count__9362)){
var vec__9364 = cljs.core._nth.call(null,chunk__9361,i__9363);
var name = cljs.core.nth.call(null,vec__9364,(0),null);
var map__9365 = cljs.core.nth.call(null,vec__9364,(1),null);
var map__9365__$1 = ((((!((map__9365 == null)))?((((map__9365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9365):map__9365);
var doc = cljs.core.get.call(null,map__9365__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9365__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9392 = seq__9360;
var G__9393 = chunk__9361;
var G__9394 = count__9362;
var G__9395 = (i__9363 + (1));
seq__9360 = G__9392;
chunk__9361 = G__9393;
count__9362 = G__9394;
i__9363 = G__9395;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9360);
if(temp__4657__auto__){
var seq__9360__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9360__$1)){
var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__9360__$1);
var G__9396 = cljs.core.chunk_rest.call(null,seq__9360__$1);
var G__9397 = c__8952__auto__;
var G__9398 = cljs.core.count.call(null,c__8952__auto__);
var G__9399 = (0);
seq__9360 = G__9396;
chunk__9361 = G__9397;
count__9362 = G__9398;
i__9363 = G__9399;
continue;
} else {
var vec__9367 = cljs.core.first.call(null,seq__9360__$1);
var name = cljs.core.nth.call(null,vec__9367,(0),null);
var map__9368 = cljs.core.nth.call(null,vec__9367,(1),null);
var map__9368__$1 = ((((!((map__9368 == null)))?((((map__9368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9368):map__9368);
var doc = cljs.core.get.call(null,map__9368__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9368__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9400 = cljs.core.next.call(null,seq__9360__$1);
var G__9401 = null;
var G__9402 = (0);
var G__9403 = (0);
seq__9360 = G__9400;
chunk__9361 = G__9401;
count__9362 = G__9402;
i__9363 = G__9403;
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