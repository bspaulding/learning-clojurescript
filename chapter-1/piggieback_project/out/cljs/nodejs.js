// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9342__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9343__i = 0, G__9343__a = new Array(arguments.length -  0);
while (G__9343__i < G__9343__a.length) {G__9343__a[G__9343__i] = arguments[G__9343__i + 0]; ++G__9343__i;}
  args = new cljs.core.IndexedSeq(G__9343__a,0);
} 
return G__9342__delegate.call(this,args);};
G__9342.cljs$lang$maxFixedArity = 0;
G__9342.cljs$lang$applyTo = (function (arglist__9344){
var args = cljs.core.seq(arglist__9344);
return G__9342__delegate(args);
});
G__9342.cljs$core$IFn$_invoke$arity$variadic = G__9342__delegate;
return G__9342;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9345__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9345 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9346__i = 0, G__9346__a = new Array(arguments.length -  0);
while (G__9346__i < G__9346__a.length) {G__9346__a[G__9346__i] = arguments[G__9346__i + 0]; ++G__9346__i;}
  args = new cljs.core.IndexedSeq(G__9346__a,0);
} 
return G__9345__delegate.call(this,args);};
G__9345.cljs$lang$maxFixedArity = 0;
G__9345.cljs$lang$applyTo = (function (arglist__9347){
var args = cljs.core.seq(arglist__9347);
return G__9345__delegate(args);
});
G__9345.cljs$core$IFn$_invoke$arity$variadic = G__9345__delegate;
return G__9345;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map