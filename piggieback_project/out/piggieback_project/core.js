// Compiled by ClojureScript 1.8.51 {}
goog.provide('piggieback_project.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
cljs.nodejs.enable_util_print_BANG_.call(null);
piggieback_project.core._main = (function piggieback_project$core$_main(var_args){
var args__9295__auto__ = [];
var len__9288__auto___9351 = arguments.length;
var i__9289__auto___9352 = (0);
while(true){
if((i__9289__auto___9352 < len__9288__auto___9351)){
args__9295__auto__.push((arguments[i__9289__auto___9352]));

var G__9353 = (i__9289__auto___9352 + (1));
i__9289__auto___9352 = G__9353;
continue;
} else {
}
break;
}

var argseq__9296__auto__ = ((((0) < args__9295__auto__.length))?(new cljs.core.IndexedSeq(args__9295__auto__.slice((0)),(0),null)):null);
return piggieback_project.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__9296__auto__);
});

piggieback_project.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.println.call(null,"hello world from node.js");
});

piggieback_project.core._main.cljs$lang$maxFixedArity = (0);

piggieback_project.core._main.cljs$lang$applyTo = (function (seq9350){
return piggieback_project.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9350));
});
cljs.core._STAR_main_cli_fn_STAR_ = piggieback_project.core._main;

//# sourceMappingURL=core.js.map