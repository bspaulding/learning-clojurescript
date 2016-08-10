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
var seq__24566_24580 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24567_24581 = null;
var count__24568_24582 = (0);
var i__24569_24583 = (0);
while(true){
if((i__24569_24583 < count__24568_24582)){
var f_24584 = cljs.core._nth.call(null,chunk__24567_24581,i__24569_24583);
cljs.core.println.call(null,"  ",f_24584);

var G__24585 = seq__24566_24580;
var G__24586 = chunk__24567_24581;
var G__24587 = count__24568_24582;
var G__24588 = (i__24569_24583 + (1));
seq__24566_24580 = G__24585;
chunk__24567_24581 = G__24586;
count__24568_24582 = G__24587;
i__24569_24583 = G__24588;
continue;
} else {
var temp__4657__auto___24589 = cljs.core.seq.call(null,seq__24566_24580);
if(temp__4657__auto___24589){
var seq__24566_24590__$1 = temp__4657__auto___24589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24566_24590__$1)){
var c__19243__auto___24591 = cljs.core.chunk_first.call(null,seq__24566_24590__$1);
var G__24592 = cljs.core.chunk_rest.call(null,seq__24566_24590__$1);
var G__24593 = c__19243__auto___24591;
var G__24594 = cljs.core.count.call(null,c__19243__auto___24591);
var G__24595 = (0);
seq__24566_24580 = G__24592;
chunk__24567_24581 = G__24593;
count__24568_24582 = G__24594;
i__24569_24583 = G__24595;
continue;
} else {
var f_24596 = cljs.core.first.call(null,seq__24566_24590__$1);
cljs.core.println.call(null,"  ",f_24596);

var G__24597 = cljs.core.next.call(null,seq__24566_24590__$1);
var G__24598 = null;
var G__24599 = (0);
var G__24600 = (0);
seq__24566_24580 = G__24597;
chunk__24567_24581 = G__24598;
count__24568_24582 = G__24599;
i__24569_24583 = G__24600;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24601 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18432__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18432__auto__)){
return or__18432__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24601);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24601)))?cljs.core.second.call(null,arglists_24601):arglists_24601));
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
var seq__24570 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24571 = null;
var count__24572 = (0);
var i__24573 = (0);
while(true){
if((i__24573 < count__24572)){
var vec__24574 = cljs.core._nth.call(null,chunk__24571,i__24573);
var name = cljs.core.nth.call(null,vec__24574,(0),null);
var map__24575 = cljs.core.nth.call(null,vec__24574,(1),null);
var map__24575__$1 = ((((!((map__24575 == null)))?((((map__24575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24575):map__24575);
var doc = cljs.core.get.call(null,map__24575__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24575__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24602 = seq__24570;
var G__24603 = chunk__24571;
var G__24604 = count__24572;
var G__24605 = (i__24573 + (1));
seq__24570 = G__24602;
chunk__24571 = G__24603;
count__24572 = G__24604;
i__24573 = G__24605;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24570);
if(temp__4657__auto__){
var seq__24570__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24570__$1)){
var c__19243__auto__ = cljs.core.chunk_first.call(null,seq__24570__$1);
var G__24606 = cljs.core.chunk_rest.call(null,seq__24570__$1);
var G__24607 = c__19243__auto__;
var G__24608 = cljs.core.count.call(null,c__19243__auto__);
var G__24609 = (0);
seq__24570 = G__24606;
chunk__24571 = G__24607;
count__24572 = G__24608;
i__24573 = G__24609;
continue;
} else {
var vec__24577 = cljs.core.first.call(null,seq__24570__$1);
var name = cljs.core.nth.call(null,vec__24577,(0),null);
var map__24578 = cljs.core.nth.call(null,vec__24577,(1),null);
var map__24578__$1 = ((((!((map__24578 == null)))?((((map__24578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24578):map__24578);
var doc = cljs.core.get.call(null,map__24578__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24578__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24610 = cljs.core.next.call(null,seq__24570__$1);
var G__24611 = null;
var G__24612 = (0);
var G__24613 = (0);
seq__24570 = G__24610;
chunk__24571 = G__24611;
count__24572 = G__24612;
i__24573 = G__24613;
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