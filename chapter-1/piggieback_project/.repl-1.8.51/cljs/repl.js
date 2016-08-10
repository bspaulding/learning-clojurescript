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
var seq__13745_13759 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13746_13760 = null;
var count__13747_13761 = (0);
var i__13748_13762 = (0);
while(true){
if((i__13748_13762 < count__13747_13761)){
var f_13763 = cljs.core._nth.call(null,chunk__13746_13760,i__13748_13762);
cljs.core.println.call(null,"  ",f_13763);

var G__13764 = seq__13745_13759;
var G__13765 = chunk__13746_13760;
var G__13766 = count__13747_13761;
var G__13767 = (i__13748_13762 + (1));
seq__13745_13759 = G__13764;
chunk__13746_13760 = G__13765;
count__13747_13761 = G__13766;
i__13748_13762 = G__13767;
continue;
} else {
var temp__4657__auto___13768 = cljs.core.seq.call(null,seq__13745_13759);
if(temp__4657__auto___13768){
var seq__13745_13769__$1 = temp__4657__auto___13768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13745_13769__$1)){
var c__8952__auto___13770 = cljs.core.chunk_first.call(null,seq__13745_13769__$1);
var G__13771 = cljs.core.chunk_rest.call(null,seq__13745_13769__$1);
var G__13772 = c__8952__auto___13770;
var G__13773 = cljs.core.count.call(null,c__8952__auto___13770);
var G__13774 = (0);
seq__13745_13759 = G__13771;
chunk__13746_13760 = G__13772;
count__13747_13761 = G__13773;
i__13748_13762 = G__13774;
continue;
} else {
var f_13775 = cljs.core.first.call(null,seq__13745_13769__$1);
cljs.core.println.call(null,"  ",f_13775);

var G__13776 = cljs.core.next.call(null,seq__13745_13769__$1);
var G__13777 = null;
var G__13778 = (0);
var G__13779 = (0);
seq__13745_13759 = G__13776;
chunk__13746_13760 = G__13777;
count__13747_13761 = G__13778;
i__13748_13762 = G__13779;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13780 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__8141__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__8141__auto__)){
return or__8141__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13780);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13780)))?cljs.core.second.call(null,arglists_13780):arglists_13780));
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
var seq__13749 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13750 = null;
var count__13751 = (0);
var i__13752 = (0);
while(true){
if((i__13752 < count__13751)){
var vec__13753 = cljs.core._nth.call(null,chunk__13750,i__13752);
var name = cljs.core.nth.call(null,vec__13753,(0),null);
var map__13754 = cljs.core.nth.call(null,vec__13753,(1),null);
var map__13754__$1 = ((((!((map__13754 == null)))?((((map__13754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13754):map__13754);
var doc = cljs.core.get.call(null,map__13754__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__13754__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__13781 = seq__13749;
var G__13782 = chunk__13750;
var G__13783 = count__13751;
var G__13784 = (i__13752 + (1));
seq__13749 = G__13781;
chunk__13750 = G__13782;
count__13751 = G__13783;
i__13752 = G__13784;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13749);
if(temp__4657__auto__){
var seq__13749__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13749__$1)){
var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__13749__$1);
var G__13785 = cljs.core.chunk_rest.call(null,seq__13749__$1);
var G__13786 = c__8952__auto__;
var G__13787 = cljs.core.count.call(null,c__8952__auto__);
var G__13788 = (0);
seq__13749 = G__13785;
chunk__13750 = G__13786;
count__13751 = G__13787;
i__13752 = G__13788;
continue;
} else {
var vec__13756 = cljs.core.first.call(null,seq__13749__$1);
var name = cljs.core.nth.call(null,vec__13756,(0),null);
var map__13757 = cljs.core.nth.call(null,vec__13756,(1),null);
var map__13757__$1 = ((((!((map__13757 == null)))?((((map__13757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13757):map__13757);
var doc = cljs.core.get.call(null,map__13757__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__13757__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__13789 = cljs.core.next.call(null,seq__13749__$1);
var G__13790 = null;
var G__13791 = (0);
var G__13792 = (0);
seq__13749 = G__13789;
chunk__13750 = G__13790;
count__13751 = G__13791;
i__13752 = G__13792;
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
