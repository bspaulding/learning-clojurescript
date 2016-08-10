// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20644 = [];
var len__19502__auto___20650 = arguments.length;
var i__19503__auto___20651 = (0);
while(true){
if((i__19503__auto___20651 < len__19502__auto___20650)){
args20644.push((arguments[i__19503__auto___20651]));

var G__20652 = (i__19503__auto___20651 + (1));
i__19503__auto___20651 = G__20652;
continue;
} else {
}
break;
}

var G__20646 = args20644.length;
switch (G__20646) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20644.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20647 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20647 = (function (f,blockable,meta20648){
this.f = f;
this.blockable = blockable;
this.meta20648 = meta20648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20649,meta20648__$1){
var self__ = this;
var _20649__$1 = this;
return (new cljs.core.async.t_cljs$core$async20647(self__.f,self__.blockable,meta20648__$1));
});

cljs.core.async.t_cljs$core$async20647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20649){
var self__ = this;
var _20649__$1 = this;
return self__.meta20648;
});

cljs.core.async.t_cljs$core$async20647.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20647.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20647.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20647.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20648","meta20648",1246874403,null)], null);
});

cljs.core.async.t_cljs$core$async20647.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20647";

cljs.core.async.t_cljs$core$async20647.cljs$lang$ctorPrWriter = (function (this__19038__auto__,writer__19039__auto__,opt__19040__auto__){
return cljs.core._write.call(null,writer__19039__auto__,"cljs.core.async/t_cljs$core$async20647");
});

cljs.core.async.__GT_t_cljs$core$async20647 = (function cljs$core$async$__GT_t_cljs$core$async20647(f__$1,blockable__$1,meta20648){
return (new cljs.core.async.t_cljs$core$async20647(f__$1,blockable__$1,meta20648));
});

}

return (new cljs.core.async.t_cljs$core$async20647(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args20656 = [];
var len__19502__auto___20659 = arguments.length;
var i__19503__auto___20660 = (0);
while(true){
if((i__19503__auto___20660 < len__19502__auto___20659)){
args20656.push((arguments[i__19503__auto___20660]));

var G__20661 = (i__19503__auto___20660 + (1));
i__19503__auto___20660 = G__20661;
continue;
} else {
}
break;
}

var G__20658 = args20656.length;
switch (G__20658) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20656.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args20663 = [];
var len__19502__auto___20666 = arguments.length;
var i__19503__auto___20667 = (0);
while(true){
if((i__19503__auto___20667 < len__19502__auto___20666)){
args20663.push((arguments[i__19503__auto___20667]));

var G__20668 = (i__19503__auto___20667 + (1));
i__19503__auto___20667 = G__20668;
continue;
} else {
}
break;
}

var G__20665 = args20663.length;
switch (G__20665) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20663.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args20670 = [];
var len__19502__auto___20673 = arguments.length;
var i__19503__auto___20674 = (0);
while(true){
if((i__19503__auto___20674 < len__19502__auto___20673)){
args20670.push((arguments[i__19503__auto___20674]));

var G__20675 = (i__19503__auto___20674 + (1));
i__19503__auto___20674 = G__20675;
continue;
} else {
}
break;
}

var G__20672 = args20670.length;
switch (G__20672) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20670.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20677 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20677);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20677,ret){
return (function (){
return fn1.call(null,val_20677);
});})(val_20677,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20678 = [];
var len__19502__auto___20681 = arguments.length;
var i__19503__auto___20682 = (0);
while(true){
if((i__19503__auto___20682 < len__19502__auto___20681)){
args20678.push((arguments[i__19503__auto___20682]));

var G__20683 = (i__19503__auto___20682 + (1));
i__19503__auto___20682 = G__20683;
continue;
} else {
}
break;
}

var G__20680 = args20678.length;
switch (G__20680) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20678.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19347__auto___20685 = n;
var x_20686 = (0);
while(true){
if((x_20686 < n__19347__auto___20685)){
(a[x_20686] = (0));

var G__20687 = (x_20686 + (1));
x_20686 = G__20687;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20688 = (i + (1));
i = G__20688;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20692 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20692 = (function (alt_flag,flag,meta20693){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20693 = meta20693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20694,meta20693__$1){
var self__ = this;
var _20694__$1 = this;
return (new cljs.core.async.t_cljs$core$async20692(self__.alt_flag,self__.flag,meta20693__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20692.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20694){
var self__ = this;
var _20694__$1 = this;
return self__.meta20693;
});})(flag))
;

cljs.core.async.t_cljs$core$async20692.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20692.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20692.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20692.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20692.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20693","meta20693",96064828,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20692.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20692";

cljs.core.async.t_cljs$core$async20692.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19038__auto__,writer__19039__auto__,opt__19040__auto__){
return cljs.core._write.call(null,writer__19039__auto__,"cljs.core.async/t_cljs$core$async20692");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20692 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20692(alt_flag__$1,flag__$1,meta20693){
return (new cljs.core.async.t_cljs$core$async20692(alt_flag__$1,flag__$1,meta20693));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20692(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20698 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20698 = (function (alt_handler,flag,cb,meta20699){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20699 = meta20699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20700,meta20699__$1){
var self__ = this;
var _20700__$1 = this;
return (new cljs.core.async.t_cljs$core$async20698(self__.alt_handler,self__.flag,self__.cb,meta20699__$1));
});

cljs.core.async.t_cljs$core$async20698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20700){
var self__ = this;
var _20700__$1 = this;
return self__.meta20699;
});

cljs.core.async.t_cljs$core$async20698.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20698.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20698.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20698.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20698.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20699","meta20699",-2105907734,null)], null);
});

cljs.core.async.t_cljs$core$async20698.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20698.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20698";

cljs.core.async.t_cljs$core$async20698.cljs$lang$ctorPrWriter = (function (this__19038__auto__,writer__19039__auto__,opt__19040__auto__){
return cljs.core._write.call(null,writer__19039__auto__,"cljs.core.async/t_cljs$core$async20698");
});

cljs.core.async.__GT_t_cljs$core$async20698 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20698(alt_handler__$1,flag__$1,cb__$1,meta20699){
return (new cljs.core.async.t_cljs$core$async20698(alt_handler__$1,flag__$1,cb__$1,meta20699));
});

}

return (new cljs.core.async.t_cljs$core$async20698(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20701_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20701_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20702_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20702_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18432__auto__ = wport;
if(cljs.core.truth_(or__18432__auto__)){
return or__18432__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20703 = (i + (1));
i = G__20703;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18432__auto__ = ret;
if(cljs.core.truth_(or__18432__auto__)){
return or__18432__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18420__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18420__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18420__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19509__auto__ = [];
var len__19502__auto___20709 = arguments.length;
var i__19503__auto___20710 = (0);
while(true){
if((i__19503__auto___20710 < len__19502__auto___20709)){
args__19509__auto__.push((arguments[i__19503__auto___20710]));

var G__20711 = (i__19503__auto___20710 + (1));
i__19503__auto___20710 = G__20711;
continue;
} else {
}
break;
}

var argseq__19510__auto__ = ((((1) < args__19509__auto__.length))?(new cljs.core.IndexedSeq(args__19509__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19510__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20706){
var map__20707 = p__20706;
var map__20707__$1 = ((((!((map__20707 == null)))?((((map__20707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20707):map__20707);
var opts = map__20707__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20704){
var G__20705 = cljs.core.first.call(null,seq20704);
var seq20704__$1 = cljs.core.next.call(null,seq20704);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20705,seq20704__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20712 = [];
var len__19502__auto___20762 = arguments.length;
var i__19503__auto___20763 = (0);
while(true){
if((i__19503__auto___20763 < len__19502__auto___20762)){
args20712.push((arguments[i__19503__auto___20763]));

var G__20764 = (i__19503__auto___20763 + (1));
i__19503__auto___20763 = G__20764;
continue;
} else {
}
break;
}

var G__20714 = args20712.length;
switch (G__20714) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20712.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20599__auto___20766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto___20766){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto___20766){
return (function (state_20738){
var state_val_20739 = (state_20738[(1)]);
if((state_val_20739 === (7))){
var inst_20734 = (state_20738[(2)]);
var state_20738__$1 = state_20738;
var statearr_20740_20767 = state_20738__$1;
(statearr_20740_20767[(2)] = inst_20734);

(statearr_20740_20767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20739 === (1))){
var state_20738__$1 = state_20738;
var statearr_20741_20768 = state_20738__$1;
(statearr_20741_20768[(2)] = null);

(statearr_20741_20768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20739 === (4))){
var inst_20717 = (state_20738[(7)]);
var inst_20717__$1 = (state_20738[(2)]);
var inst_20718 = (inst_20717__$1 == null);
var state_20738__$1 = (function (){var statearr_20742 = state_20738;
(statearr_20742[(7)] = inst_20717__$1);

return statearr_20742;
})();
if(cljs.core.truth_(inst_20718)){
var statearr_20743_20769 = state_20738__$1;
(statearr_20743_20769[(1)] = (5));

} else {
var statearr_20744_20770 = state_20738__$1;
(statearr_20744_20770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20739 === (13))){
var state_20738__$1 = state_20738;
var statearr_20745_20771 = state_20738__$1;
(statearr_20745_20771[(2)] = null);

(statearr_20745_20771[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20739 === (6))){
var inst_20717 = (state_20738[(7)]);
var state_20738__$1 = state_20738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20738__$1,(11),to,inst_20717);
} else {
if((state_val_20739 === (3))){
var inst_20736 = (state_20738[(2)]);
var state_20738__$1 = state_20738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20738__$1,inst_20736);
} else {
if((state_val_20739 === (12))){
var state_20738__$1 = state_20738;
var statearr_20746_20772 = state_20738__$1;
(statearr_20746_20772[(2)] = null);

(statearr_20746_20772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20739 === (2))){
var state_20738__$1 = state_20738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20738__$1,(4),from);
} else {
if((state_val_20739 === (11))){
var inst_20727 = (state_20738[(2)]);
var state_20738__$1 = state_20738;
if(cljs.core.truth_(inst_20727)){
var statearr_20747_20773 = state_20738__$1;
(statearr_20747_20773[(1)] = (12));

} else {
var statearr_20748_20774 = state_20738__$1;
(statearr_20748_20774[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20739 === (9))){
var state_20738__$1 = state_20738;
var statearr_20749_20775 = state_20738__$1;
(statearr_20749_20775[(2)] = null);

(statearr_20749_20775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20739 === (5))){
var state_20738__$1 = state_20738;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20750_20776 = state_20738__$1;
(statearr_20750_20776[(1)] = (8));

} else {
var statearr_20751_20777 = state_20738__$1;
(statearr_20751_20777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20739 === (14))){
var inst_20732 = (state_20738[(2)]);
var state_20738__$1 = state_20738;
var statearr_20752_20778 = state_20738__$1;
(statearr_20752_20778[(2)] = inst_20732);

(statearr_20752_20778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20739 === (10))){
var inst_20724 = (state_20738[(2)]);
var state_20738__$1 = state_20738;
var statearr_20753_20779 = state_20738__$1;
(statearr_20753_20779[(2)] = inst_20724);

(statearr_20753_20779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20739 === (8))){
var inst_20721 = cljs.core.async.close_BANG_.call(null,to);
var state_20738__$1 = state_20738;
var statearr_20754_20780 = state_20738__$1;
(statearr_20754_20780[(2)] = inst_20721);

(statearr_20754_20780[(1)] = (10));


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
});})(c__20599__auto___20766))
;
return ((function (switch__20534__auto__,c__20599__auto___20766){
return (function() {
var cljs$core$async$state_machine__20535__auto__ = null;
var cljs$core$async$state_machine__20535__auto____0 = (function (){
var statearr_20758 = [null,null,null,null,null,null,null,null];
(statearr_20758[(0)] = cljs$core$async$state_machine__20535__auto__);

(statearr_20758[(1)] = (1));

return statearr_20758;
});
var cljs$core$async$state_machine__20535__auto____1 = (function (state_20738){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_20738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e20759){if((e20759 instanceof Object)){
var ex__20538__auto__ = e20759;
var statearr_20760_20781 = state_20738;
(statearr_20760_20781[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20782 = state_20738;
state_20738 = G__20782;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
cljs$core$async$state_machine__20535__auto__ = function(state_20738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20535__auto____1.call(this,state_20738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20535__auto____0;
cljs$core$async$state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20535__auto____1;
return cljs$core$async$state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto___20766))
})();
var state__20601__auto__ = (function (){var statearr_20761 = f__20600__auto__.call(null);
(statearr_20761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto___20766);

return statearr_20761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto___20766))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20966){
var vec__20967 = p__20966;
var v = cljs.core.nth.call(null,vec__20967,(0),null);
var p = cljs.core.nth.call(null,vec__20967,(1),null);
var job = vec__20967;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20599__auto___21149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto___21149,res,vec__20967,v,p,job,jobs,results){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto___21149,res,vec__20967,v,p,job,jobs,results){
return (function (state_20972){
var state_val_20973 = (state_20972[(1)]);
if((state_val_20973 === (1))){
var state_20972__$1 = state_20972;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20972__$1,(2),res,v);
} else {
if((state_val_20973 === (2))){
var inst_20969 = (state_20972[(2)]);
var inst_20970 = cljs.core.async.close_BANG_.call(null,res);
var state_20972__$1 = (function (){var statearr_20974 = state_20972;
(statearr_20974[(7)] = inst_20969);

return statearr_20974;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20972__$1,inst_20970);
} else {
return null;
}
}
});})(c__20599__auto___21149,res,vec__20967,v,p,job,jobs,results))
;
return ((function (switch__20534__auto__,c__20599__auto___21149,res,vec__20967,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____0 = (function (){
var statearr_20978 = [null,null,null,null,null,null,null,null];
(statearr_20978[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__);

(statearr_20978[(1)] = (1));

return statearr_20978;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____1 = (function (state_20972){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_20972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e20979){if((e20979 instanceof Object)){
var ex__20538__auto__ = e20979;
var statearr_20980_21150 = state_20972;
(statearr_20980_21150[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21151 = state_20972;
state_20972 = G__21151;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__ = function(state_20972){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____1.call(this,state_20972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto___21149,res,vec__20967,v,p,job,jobs,results))
})();
var state__20601__auto__ = (function (){var statearr_20981 = f__20600__auto__.call(null);
(statearr_20981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto___21149);

return statearr_20981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto___21149,res,vec__20967,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20982){
var vec__20983 = p__20982;
var v = cljs.core.nth.call(null,vec__20983,(0),null);
var p = cljs.core.nth.call(null,vec__20983,(1),null);
var job = vec__20983;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19347__auto___21152 = n;
var __21153 = (0);
while(true){
if((__21153 < n__19347__auto___21152)){
var G__20984_21154 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20984_21154) {
case "compute":
var c__20599__auto___21156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21153,c__20599__auto___21156,G__20984_21154,n__19347__auto___21152,jobs,results,process,async){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (__21153,c__20599__auto___21156,G__20984_21154,n__19347__auto___21152,jobs,results,process,async){
return (function (state_20997){
var state_val_20998 = (state_20997[(1)]);
if((state_val_20998 === (1))){
var state_20997__$1 = state_20997;
var statearr_20999_21157 = state_20997__$1;
(statearr_20999_21157[(2)] = null);

(statearr_20999_21157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20998 === (2))){
var state_20997__$1 = state_20997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20997__$1,(4),jobs);
} else {
if((state_val_20998 === (3))){
var inst_20995 = (state_20997[(2)]);
var state_20997__$1 = state_20997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20997__$1,inst_20995);
} else {
if((state_val_20998 === (4))){
var inst_20987 = (state_20997[(2)]);
var inst_20988 = process.call(null,inst_20987);
var state_20997__$1 = state_20997;
if(cljs.core.truth_(inst_20988)){
var statearr_21000_21158 = state_20997__$1;
(statearr_21000_21158[(1)] = (5));

} else {
var statearr_21001_21159 = state_20997__$1;
(statearr_21001_21159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20998 === (5))){
var state_20997__$1 = state_20997;
var statearr_21002_21160 = state_20997__$1;
(statearr_21002_21160[(2)] = null);

(statearr_21002_21160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20998 === (6))){
var state_20997__$1 = state_20997;
var statearr_21003_21161 = state_20997__$1;
(statearr_21003_21161[(2)] = null);

(statearr_21003_21161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20998 === (7))){
var inst_20993 = (state_20997[(2)]);
var state_20997__$1 = state_20997;
var statearr_21004_21162 = state_20997__$1;
(statearr_21004_21162[(2)] = inst_20993);

(statearr_21004_21162[(1)] = (3));


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
});})(__21153,c__20599__auto___21156,G__20984_21154,n__19347__auto___21152,jobs,results,process,async))
;
return ((function (__21153,switch__20534__auto__,c__20599__auto___21156,G__20984_21154,n__19347__auto___21152,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____0 = (function (){
var statearr_21008 = [null,null,null,null,null,null,null];
(statearr_21008[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__);

(statearr_21008[(1)] = (1));

return statearr_21008;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____1 = (function (state_20997){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_20997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e21009){if((e21009 instanceof Object)){
var ex__20538__auto__ = e21009;
var statearr_21010_21163 = state_20997;
(statearr_21010_21163[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21164 = state_20997;
state_20997 = G__21164;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__ = function(state_20997){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____1.call(this,state_20997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__;
})()
;})(__21153,switch__20534__auto__,c__20599__auto___21156,G__20984_21154,n__19347__auto___21152,jobs,results,process,async))
})();
var state__20601__auto__ = (function (){var statearr_21011 = f__20600__auto__.call(null);
(statearr_21011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto___21156);

return statearr_21011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(__21153,c__20599__auto___21156,G__20984_21154,n__19347__auto___21152,jobs,results,process,async))
);


break;
case "async":
var c__20599__auto___21165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21153,c__20599__auto___21165,G__20984_21154,n__19347__auto___21152,jobs,results,process,async){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (__21153,c__20599__auto___21165,G__20984_21154,n__19347__auto___21152,jobs,results,process,async){
return (function (state_21024){
var state_val_21025 = (state_21024[(1)]);
if((state_val_21025 === (1))){
var state_21024__$1 = state_21024;
var statearr_21026_21166 = state_21024__$1;
(statearr_21026_21166[(2)] = null);

(statearr_21026_21166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21025 === (2))){
var state_21024__$1 = state_21024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21024__$1,(4),jobs);
} else {
if((state_val_21025 === (3))){
var inst_21022 = (state_21024[(2)]);
var state_21024__$1 = state_21024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21024__$1,inst_21022);
} else {
if((state_val_21025 === (4))){
var inst_21014 = (state_21024[(2)]);
var inst_21015 = async.call(null,inst_21014);
var state_21024__$1 = state_21024;
if(cljs.core.truth_(inst_21015)){
var statearr_21027_21167 = state_21024__$1;
(statearr_21027_21167[(1)] = (5));

} else {
var statearr_21028_21168 = state_21024__$1;
(statearr_21028_21168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21025 === (5))){
var state_21024__$1 = state_21024;
var statearr_21029_21169 = state_21024__$1;
(statearr_21029_21169[(2)] = null);

(statearr_21029_21169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21025 === (6))){
var state_21024__$1 = state_21024;
var statearr_21030_21170 = state_21024__$1;
(statearr_21030_21170[(2)] = null);

(statearr_21030_21170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21025 === (7))){
var inst_21020 = (state_21024[(2)]);
var state_21024__$1 = state_21024;
var statearr_21031_21171 = state_21024__$1;
(statearr_21031_21171[(2)] = inst_21020);

(statearr_21031_21171[(1)] = (3));


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
});})(__21153,c__20599__auto___21165,G__20984_21154,n__19347__auto___21152,jobs,results,process,async))
;
return ((function (__21153,switch__20534__auto__,c__20599__auto___21165,G__20984_21154,n__19347__auto___21152,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____0 = (function (){
var statearr_21035 = [null,null,null,null,null,null,null];
(statearr_21035[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__);

(statearr_21035[(1)] = (1));

return statearr_21035;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____1 = (function (state_21024){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_21024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e21036){if((e21036 instanceof Object)){
var ex__20538__auto__ = e21036;
var statearr_21037_21172 = state_21024;
(statearr_21037_21172[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21173 = state_21024;
state_21024 = G__21173;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__ = function(state_21024){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____1.call(this,state_21024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__;
})()
;})(__21153,switch__20534__auto__,c__20599__auto___21165,G__20984_21154,n__19347__auto___21152,jobs,results,process,async))
})();
var state__20601__auto__ = (function (){var statearr_21038 = f__20600__auto__.call(null);
(statearr_21038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto___21165);

return statearr_21038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(__21153,c__20599__auto___21165,G__20984_21154,n__19347__auto___21152,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21174 = (__21153 + (1));
__21153 = G__21174;
continue;
} else {
}
break;
}

var c__20599__auto___21175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto___21175,jobs,results,process,async){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto___21175,jobs,results,process,async){
return (function (state_21060){
var state_val_21061 = (state_21060[(1)]);
if((state_val_21061 === (1))){
var state_21060__$1 = state_21060;
var statearr_21062_21176 = state_21060__$1;
(statearr_21062_21176[(2)] = null);

(statearr_21062_21176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (2))){
var state_21060__$1 = state_21060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21060__$1,(4),from);
} else {
if((state_val_21061 === (3))){
var inst_21058 = (state_21060[(2)]);
var state_21060__$1 = state_21060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21060__$1,inst_21058);
} else {
if((state_val_21061 === (4))){
var inst_21041 = (state_21060[(7)]);
var inst_21041__$1 = (state_21060[(2)]);
var inst_21042 = (inst_21041__$1 == null);
var state_21060__$1 = (function (){var statearr_21063 = state_21060;
(statearr_21063[(7)] = inst_21041__$1);

return statearr_21063;
})();
if(cljs.core.truth_(inst_21042)){
var statearr_21064_21177 = state_21060__$1;
(statearr_21064_21177[(1)] = (5));

} else {
var statearr_21065_21178 = state_21060__$1;
(statearr_21065_21178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (5))){
var inst_21044 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21060__$1 = state_21060;
var statearr_21066_21179 = state_21060__$1;
(statearr_21066_21179[(2)] = inst_21044);

(statearr_21066_21179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (6))){
var inst_21046 = (state_21060[(8)]);
var inst_21041 = (state_21060[(7)]);
var inst_21046__$1 = cljs.core.async.chan.call(null,(1));
var inst_21047 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21048 = [inst_21041,inst_21046__$1];
var inst_21049 = (new cljs.core.PersistentVector(null,2,(5),inst_21047,inst_21048,null));
var state_21060__$1 = (function (){var statearr_21067 = state_21060;
(statearr_21067[(8)] = inst_21046__$1);

return statearr_21067;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21060__$1,(8),jobs,inst_21049);
} else {
if((state_val_21061 === (7))){
var inst_21056 = (state_21060[(2)]);
var state_21060__$1 = state_21060;
var statearr_21068_21180 = state_21060__$1;
(statearr_21068_21180[(2)] = inst_21056);

(statearr_21068_21180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21061 === (8))){
var inst_21046 = (state_21060[(8)]);
var inst_21051 = (state_21060[(2)]);
var state_21060__$1 = (function (){var statearr_21069 = state_21060;
(statearr_21069[(9)] = inst_21051);

return statearr_21069;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21060__$1,(9),results,inst_21046);
} else {
if((state_val_21061 === (9))){
var inst_21053 = (state_21060[(2)]);
var state_21060__$1 = (function (){var statearr_21070 = state_21060;
(statearr_21070[(10)] = inst_21053);

return statearr_21070;
})();
var statearr_21071_21181 = state_21060__$1;
(statearr_21071_21181[(2)] = null);

(statearr_21071_21181[(1)] = (2));


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
});})(c__20599__auto___21175,jobs,results,process,async))
;
return ((function (switch__20534__auto__,c__20599__auto___21175,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____0 = (function (){
var statearr_21075 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21075[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__);

(statearr_21075[(1)] = (1));

return statearr_21075;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____1 = (function (state_21060){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_21060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e21076){if((e21076 instanceof Object)){
var ex__20538__auto__ = e21076;
var statearr_21077_21182 = state_21060;
(statearr_21077_21182[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21183 = state_21060;
state_21060 = G__21183;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__ = function(state_21060){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____1.call(this,state_21060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto___21175,jobs,results,process,async))
})();
var state__20601__auto__ = (function (){var statearr_21078 = f__20600__auto__.call(null);
(statearr_21078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto___21175);

return statearr_21078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto___21175,jobs,results,process,async))
);


var c__20599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto__,jobs,results,process,async){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto__,jobs,results,process,async){
return (function (state_21116){
var state_val_21117 = (state_21116[(1)]);
if((state_val_21117 === (7))){
var inst_21112 = (state_21116[(2)]);
var state_21116__$1 = state_21116;
var statearr_21118_21184 = state_21116__$1;
(statearr_21118_21184[(2)] = inst_21112);

(statearr_21118_21184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21117 === (20))){
var state_21116__$1 = state_21116;
var statearr_21119_21185 = state_21116__$1;
(statearr_21119_21185[(2)] = null);

(statearr_21119_21185[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21117 === (1))){
var state_21116__$1 = state_21116;
var statearr_21120_21186 = state_21116__$1;
(statearr_21120_21186[(2)] = null);

(statearr_21120_21186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21117 === (4))){
var inst_21081 = (state_21116[(7)]);
var inst_21081__$1 = (state_21116[(2)]);
var inst_21082 = (inst_21081__$1 == null);
var state_21116__$1 = (function (){var statearr_21121 = state_21116;
(statearr_21121[(7)] = inst_21081__$1);

return statearr_21121;
})();
if(cljs.core.truth_(inst_21082)){
var statearr_21122_21187 = state_21116__$1;
(statearr_21122_21187[(1)] = (5));

} else {
var statearr_21123_21188 = state_21116__$1;
(statearr_21123_21188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21117 === (15))){
var inst_21094 = (state_21116[(8)]);
var state_21116__$1 = state_21116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21116__$1,(18),to,inst_21094);
} else {
if((state_val_21117 === (21))){
var inst_21107 = (state_21116[(2)]);
var state_21116__$1 = state_21116;
var statearr_21124_21189 = state_21116__$1;
(statearr_21124_21189[(2)] = inst_21107);

(statearr_21124_21189[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21117 === (13))){
var inst_21109 = (state_21116[(2)]);
var state_21116__$1 = (function (){var statearr_21125 = state_21116;
(statearr_21125[(9)] = inst_21109);

return statearr_21125;
})();
var statearr_21126_21190 = state_21116__$1;
(statearr_21126_21190[(2)] = null);

(statearr_21126_21190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21117 === (6))){
var inst_21081 = (state_21116[(7)]);
var state_21116__$1 = state_21116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21116__$1,(11),inst_21081);
} else {
if((state_val_21117 === (17))){
var inst_21102 = (state_21116[(2)]);
var state_21116__$1 = state_21116;
if(cljs.core.truth_(inst_21102)){
var statearr_21127_21191 = state_21116__$1;
(statearr_21127_21191[(1)] = (19));

} else {
var statearr_21128_21192 = state_21116__$1;
(statearr_21128_21192[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21117 === (3))){
var inst_21114 = (state_21116[(2)]);
var state_21116__$1 = state_21116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21116__$1,inst_21114);
} else {
if((state_val_21117 === (12))){
var inst_21091 = (state_21116[(10)]);
var state_21116__$1 = state_21116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21116__$1,(14),inst_21091);
} else {
if((state_val_21117 === (2))){
var state_21116__$1 = state_21116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21116__$1,(4),results);
} else {
if((state_val_21117 === (19))){
var state_21116__$1 = state_21116;
var statearr_21129_21193 = state_21116__$1;
(statearr_21129_21193[(2)] = null);

(statearr_21129_21193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21117 === (11))){
var inst_21091 = (state_21116[(2)]);
var state_21116__$1 = (function (){var statearr_21130 = state_21116;
(statearr_21130[(10)] = inst_21091);

return statearr_21130;
})();
var statearr_21131_21194 = state_21116__$1;
(statearr_21131_21194[(2)] = null);

(statearr_21131_21194[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21117 === (9))){
var state_21116__$1 = state_21116;
var statearr_21132_21195 = state_21116__$1;
(statearr_21132_21195[(2)] = null);

(statearr_21132_21195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21117 === (5))){
var state_21116__$1 = state_21116;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21133_21196 = state_21116__$1;
(statearr_21133_21196[(1)] = (8));

} else {
var statearr_21134_21197 = state_21116__$1;
(statearr_21134_21197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21117 === (14))){
var inst_21094 = (state_21116[(8)]);
var inst_21096 = (state_21116[(11)]);
var inst_21094__$1 = (state_21116[(2)]);
var inst_21095 = (inst_21094__$1 == null);
var inst_21096__$1 = cljs.core.not.call(null,inst_21095);
var state_21116__$1 = (function (){var statearr_21135 = state_21116;
(statearr_21135[(8)] = inst_21094__$1);

(statearr_21135[(11)] = inst_21096__$1);

return statearr_21135;
})();
if(inst_21096__$1){
var statearr_21136_21198 = state_21116__$1;
(statearr_21136_21198[(1)] = (15));

} else {
var statearr_21137_21199 = state_21116__$1;
(statearr_21137_21199[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21117 === (16))){
var inst_21096 = (state_21116[(11)]);
var state_21116__$1 = state_21116;
var statearr_21138_21200 = state_21116__$1;
(statearr_21138_21200[(2)] = inst_21096);

(statearr_21138_21200[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21117 === (10))){
var inst_21088 = (state_21116[(2)]);
var state_21116__$1 = state_21116;
var statearr_21139_21201 = state_21116__$1;
(statearr_21139_21201[(2)] = inst_21088);

(statearr_21139_21201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21117 === (18))){
var inst_21099 = (state_21116[(2)]);
var state_21116__$1 = state_21116;
var statearr_21140_21202 = state_21116__$1;
(statearr_21140_21202[(2)] = inst_21099);

(statearr_21140_21202[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21117 === (8))){
var inst_21085 = cljs.core.async.close_BANG_.call(null,to);
var state_21116__$1 = state_21116;
var statearr_21141_21203 = state_21116__$1;
(statearr_21141_21203[(2)] = inst_21085);

(statearr_21141_21203[(1)] = (10));


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
}
}
}
}
});})(c__20599__auto__,jobs,results,process,async))
;
return ((function (switch__20534__auto__,c__20599__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____0 = (function (){
var statearr_21145 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21145[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__);

(statearr_21145[(1)] = (1));

return statearr_21145;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____1 = (function (state_21116){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_21116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e21146){if((e21146 instanceof Object)){
var ex__20538__auto__ = e21146;
var statearr_21147_21204 = state_21116;
(statearr_21147_21204[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21205 = state_21116;
state_21116 = G__21205;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__ = function(state_21116){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____1.call(this,state_21116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20535__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto__,jobs,results,process,async))
})();
var state__20601__auto__ = (function (){var statearr_21148 = f__20600__auto__.call(null);
(statearr_21148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto__);

return statearr_21148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto__,jobs,results,process,async))
);

return c__20599__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args21206 = [];
var len__19502__auto___21209 = arguments.length;
var i__19503__auto___21210 = (0);
while(true){
if((i__19503__auto___21210 < len__19502__auto___21209)){
args21206.push((arguments[i__19503__auto___21210]));

var G__21211 = (i__19503__auto___21210 + (1));
i__19503__auto___21210 = G__21211;
continue;
} else {
}
break;
}

var G__21208 = args21206.length;
switch (G__21208) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21206.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args21213 = [];
var len__19502__auto___21216 = arguments.length;
var i__19503__auto___21217 = (0);
while(true){
if((i__19503__auto___21217 < len__19502__auto___21216)){
args21213.push((arguments[i__19503__auto___21217]));

var G__21218 = (i__19503__auto___21217 + (1));
i__19503__auto___21217 = G__21218;
continue;
} else {
}
break;
}

var G__21215 = args21213.length;
switch (G__21215) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21213.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args21220 = [];
var len__19502__auto___21273 = arguments.length;
var i__19503__auto___21274 = (0);
while(true){
if((i__19503__auto___21274 < len__19502__auto___21273)){
args21220.push((arguments[i__19503__auto___21274]));

var G__21275 = (i__19503__auto___21274 + (1));
i__19503__auto___21274 = G__21275;
continue;
} else {
}
break;
}

var G__21222 = args21220.length;
switch (G__21222) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21220.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20599__auto___21277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto___21277,tc,fc){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto___21277,tc,fc){
return (function (state_21248){
var state_val_21249 = (state_21248[(1)]);
if((state_val_21249 === (7))){
var inst_21244 = (state_21248[(2)]);
var state_21248__$1 = state_21248;
var statearr_21250_21278 = state_21248__$1;
(statearr_21250_21278[(2)] = inst_21244);

(statearr_21250_21278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21249 === (1))){
var state_21248__$1 = state_21248;
var statearr_21251_21279 = state_21248__$1;
(statearr_21251_21279[(2)] = null);

(statearr_21251_21279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21249 === (4))){
var inst_21225 = (state_21248[(7)]);
var inst_21225__$1 = (state_21248[(2)]);
var inst_21226 = (inst_21225__$1 == null);
var state_21248__$1 = (function (){var statearr_21252 = state_21248;
(statearr_21252[(7)] = inst_21225__$1);

return statearr_21252;
})();
if(cljs.core.truth_(inst_21226)){
var statearr_21253_21280 = state_21248__$1;
(statearr_21253_21280[(1)] = (5));

} else {
var statearr_21254_21281 = state_21248__$1;
(statearr_21254_21281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21249 === (13))){
var state_21248__$1 = state_21248;
var statearr_21255_21282 = state_21248__$1;
(statearr_21255_21282[(2)] = null);

(statearr_21255_21282[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21249 === (6))){
var inst_21225 = (state_21248[(7)]);
var inst_21231 = p.call(null,inst_21225);
var state_21248__$1 = state_21248;
if(cljs.core.truth_(inst_21231)){
var statearr_21256_21283 = state_21248__$1;
(statearr_21256_21283[(1)] = (9));

} else {
var statearr_21257_21284 = state_21248__$1;
(statearr_21257_21284[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21249 === (3))){
var inst_21246 = (state_21248[(2)]);
var state_21248__$1 = state_21248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21248__$1,inst_21246);
} else {
if((state_val_21249 === (12))){
var state_21248__$1 = state_21248;
var statearr_21258_21285 = state_21248__$1;
(statearr_21258_21285[(2)] = null);

(statearr_21258_21285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21249 === (2))){
var state_21248__$1 = state_21248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21248__$1,(4),ch);
} else {
if((state_val_21249 === (11))){
var inst_21225 = (state_21248[(7)]);
var inst_21235 = (state_21248[(2)]);
var state_21248__$1 = state_21248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21248__$1,(8),inst_21235,inst_21225);
} else {
if((state_val_21249 === (9))){
var state_21248__$1 = state_21248;
var statearr_21259_21286 = state_21248__$1;
(statearr_21259_21286[(2)] = tc);

(statearr_21259_21286[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21249 === (5))){
var inst_21228 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21229 = cljs.core.async.close_BANG_.call(null,fc);
var state_21248__$1 = (function (){var statearr_21260 = state_21248;
(statearr_21260[(8)] = inst_21228);

return statearr_21260;
})();
var statearr_21261_21287 = state_21248__$1;
(statearr_21261_21287[(2)] = inst_21229);

(statearr_21261_21287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21249 === (14))){
var inst_21242 = (state_21248[(2)]);
var state_21248__$1 = state_21248;
var statearr_21262_21288 = state_21248__$1;
(statearr_21262_21288[(2)] = inst_21242);

(statearr_21262_21288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21249 === (10))){
var state_21248__$1 = state_21248;
var statearr_21263_21289 = state_21248__$1;
(statearr_21263_21289[(2)] = fc);

(statearr_21263_21289[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21249 === (8))){
var inst_21237 = (state_21248[(2)]);
var state_21248__$1 = state_21248;
if(cljs.core.truth_(inst_21237)){
var statearr_21264_21290 = state_21248__$1;
(statearr_21264_21290[(1)] = (12));

} else {
var statearr_21265_21291 = state_21248__$1;
(statearr_21265_21291[(1)] = (13));

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
});})(c__20599__auto___21277,tc,fc))
;
return ((function (switch__20534__auto__,c__20599__auto___21277,tc,fc){
return (function() {
var cljs$core$async$state_machine__20535__auto__ = null;
var cljs$core$async$state_machine__20535__auto____0 = (function (){
var statearr_21269 = [null,null,null,null,null,null,null,null,null];
(statearr_21269[(0)] = cljs$core$async$state_machine__20535__auto__);

(statearr_21269[(1)] = (1));

return statearr_21269;
});
var cljs$core$async$state_machine__20535__auto____1 = (function (state_21248){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_21248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e21270){if((e21270 instanceof Object)){
var ex__20538__auto__ = e21270;
var statearr_21271_21292 = state_21248;
(statearr_21271_21292[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21293 = state_21248;
state_21248 = G__21293;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
cljs$core$async$state_machine__20535__auto__ = function(state_21248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20535__auto____1.call(this,state_21248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20535__auto____0;
cljs$core$async$state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20535__auto____1;
return cljs$core$async$state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto___21277,tc,fc))
})();
var state__20601__auto__ = (function (){var statearr_21272 = f__20600__auto__.call(null);
(statearr_21272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto___21277);

return statearr_21272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto___21277,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto__){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto__){
return (function (state_21357){
var state_val_21358 = (state_21357[(1)]);
if((state_val_21358 === (7))){
var inst_21353 = (state_21357[(2)]);
var state_21357__$1 = state_21357;
var statearr_21359_21380 = state_21357__$1;
(statearr_21359_21380[(2)] = inst_21353);

(statearr_21359_21380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21358 === (1))){
var inst_21337 = init;
var state_21357__$1 = (function (){var statearr_21360 = state_21357;
(statearr_21360[(7)] = inst_21337);

return statearr_21360;
})();
var statearr_21361_21381 = state_21357__$1;
(statearr_21361_21381[(2)] = null);

(statearr_21361_21381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21358 === (4))){
var inst_21340 = (state_21357[(8)]);
var inst_21340__$1 = (state_21357[(2)]);
var inst_21341 = (inst_21340__$1 == null);
var state_21357__$1 = (function (){var statearr_21362 = state_21357;
(statearr_21362[(8)] = inst_21340__$1);

return statearr_21362;
})();
if(cljs.core.truth_(inst_21341)){
var statearr_21363_21382 = state_21357__$1;
(statearr_21363_21382[(1)] = (5));

} else {
var statearr_21364_21383 = state_21357__$1;
(statearr_21364_21383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21358 === (6))){
var inst_21337 = (state_21357[(7)]);
var inst_21340 = (state_21357[(8)]);
var inst_21344 = (state_21357[(9)]);
var inst_21344__$1 = f.call(null,inst_21337,inst_21340);
var inst_21345 = cljs.core.reduced_QMARK_.call(null,inst_21344__$1);
var state_21357__$1 = (function (){var statearr_21365 = state_21357;
(statearr_21365[(9)] = inst_21344__$1);

return statearr_21365;
})();
if(inst_21345){
var statearr_21366_21384 = state_21357__$1;
(statearr_21366_21384[(1)] = (8));

} else {
var statearr_21367_21385 = state_21357__$1;
(statearr_21367_21385[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21358 === (3))){
var inst_21355 = (state_21357[(2)]);
var state_21357__$1 = state_21357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21357__$1,inst_21355);
} else {
if((state_val_21358 === (2))){
var state_21357__$1 = state_21357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21357__$1,(4),ch);
} else {
if((state_val_21358 === (9))){
var inst_21344 = (state_21357[(9)]);
var inst_21337 = inst_21344;
var state_21357__$1 = (function (){var statearr_21368 = state_21357;
(statearr_21368[(7)] = inst_21337);

return statearr_21368;
})();
var statearr_21369_21386 = state_21357__$1;
(statearr_21369_21386[(2)] = null);

(statearr_21369_21386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21358 === (5))){
var inst_21337 = (state_21357[(7)]);
var state_21357__$1 = state_21357;
var statearr_21370_21387 = state_21357__$1;
(statearr_21370_21387[(2)] = inst_21337);

(statearr_21370_21387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21358 === (10))){
var inst_21351 = (state_21357[(2)]);
var state_21357__$1 = state_21357;
var statearr_21371_21388 = state_21357__$1;
(statearr_21371_21388[(2)] = inst_21351);

(statearr_21371_21388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21358 === (8))){
var inst_21344 = (state_21357[(9)]);
var inst_21347 = cljs.core.deref.call(null,inst_21344);
var state_21357__$1 = state_21357;
var statearr_21372_21389 = state_21357__$1;
(statearr_21372_21389[(2)] = inst_21347);

(statearr_21372_21389[(1)] = (10));


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
});})(c__20599__auto__))
;
return ((function (switch__20534__auto__,c__20599__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20535__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20535__auto____0 = (function (){
var statearr_21376 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21376[(0)] = cljs$core$async$reduce_$_state_machine__20535__auto__);

(statearr_21376[(1)] = (1));

return statearr_21376;
});
var cljs$core$async$reduce_$_state_machine__20535__auto____1 = (function (state_21357){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_21357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e21377){if((e21377 instanceof Object)){
var ex__20538__auto__ = e21377;
var statearr_21378_21390 = state_21357;
(statearr_21378_21390[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21391 = state_21357;
state_21357 = G__21391;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20535__auto__ = function(state_21357){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20535__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20535__auto____1.call(this,state_21357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20535__auto____0;
cljs$core$async$reduce_$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20535__auto____1;
return cljs$core$async$reduce_$_state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto__))
})();
var state__20601__auto__ = (function (){var statearr_21379 = f__20600__auto__.call(null);
(statearr_21379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto__);

return statearr_21379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto__))
);

return c__20599__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args21392 = [];
var len__19502__auto___21444 = arguments.length;
var i__19503__auto___21445 = (0);
while(true){
if((i__19503__auto___21445 < len__19502__auto___21444)){
args21392.push((arguments[i__19503__auto___21445]));

var G__21446 = (i__19503__auto___21445 + (1));
i__19503__auto___21445 = G__21446;
continue;
} else {
}
break;
}

var G__21394 = args21392.length;
switch (G__21394) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21392.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto__){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto__){
return (function (state_21419){
var state_val_21420 = (state_21419[(1)]);
if((state_val_21420 === (7))){
var inst_21401 = (state_21419[(2)]);
var state_21419__$1 = state_21419;
var statearr_21421_21448 = state_21419__$1;
(statearr_21421_21448[(2)] = inst_21401);

(statearr_21421_21448[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21420 === (1))){
var inst_21395 = cljs.core.seq.call(null,coll);
var inst_21396 = inst_21395;
var state_21419__$1 = (function (){var statearr_21422 = state_21419;
(statearr_21422[(7)] = inst_21396);

return statearr_21422;
})();
var statearr_21423_21449 = state_21419__$1;
(statearr_21423_21449[(2)] = null);

(statearr_21423_21449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21420 === (4))){
var inst_21396 = (state_21419[(7)]);
var inst_21399 = cljs.core.first.call(null,inst_21396);
var state_21419__$1 = state_21419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21419__$1,(7),ch,inst_21399);
} else {
if((state_val_21420 === (13))){
var inst_21413 = (state_21419[(2)]);
var state_21419__$1 = state_21419;
var statearr_21424_21450 = state_21419__$1;
(statearr_21424_21450[(2)] = inst_21413);

(statearr_21424_21450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21420 === (6))){
var inst_21404 = (state_21419[(2)]);
var state_21419__$1 = state_21419;
if(cljs.core.truth_(inst_21404)){
var statearr_21425_21451 = state_21419__$1;
(statearr_21425_21451[(1)] = (8));

} else {
var statearr_21426_21452 = state_21419__$1;
(statearr_21426_21452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21420 === (3))){
var inst_21417 = (state_21419[(2)]);
var state_21419__$1 = state_21419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21419__$1,inst_21417);
} else {
if((state_val_21420 === (12))){
var state_21419__$1 = state_21419;
var statearr_21427_21453 = state_21419__$1;
(statearr_21427_21453[(2)] = null);

(statearr_21427_21453[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21420 === (2))){
var inst_21396 = (state_21419[(7)]);
var state_21419__$1 = state_21419;
if(cljs.core.truth_(inst_21396)){
var statearr_21428_21454 = state_21419__$1;
(statearr_21428_21454[(1)] = (4));

} else {
var statearr_21429_21455 = state_21419__$1;
(statearr_21429_21455[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21420 === (11))){
var inst_21410 = cljs.core.async.close_BANG_.call(null,ch);
var state_21419__$1 = state_21419;
var statearr_21430_21456 = state_21419__$1;
(statearr_21430_21456[(2)] = inst_21410);

(statearr_21430_21456[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21420 === (9))){
var state_21419__$1 = state_21419;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21431_21457 = state_21419__$1;
(statearr_21431_21457[(1)] = (11));

} else {
var statearr_21432_21458 = state_21419__$1;
(statearr_21432_21458[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21420 === (5))){
var inst_21396 = (state_21419[(7)]);
var state_21419__$1 = state_21419;
var statearr_21433_21459 = state_21419__$1;
(statearr_21433_21459[(2)] = inst_21396);

(statearr_21433_21459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21420 === (10))){
var inst_21415 = (state_21419[(2)]);
var state_21419__$1 = state_21419;
var statearr_21434_21460 = state_21419__$1;
(statearr_21434_21460[(2)] = inst_21415);

(statearr_21434_21460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21420 === (8))){
var inst_21396 = (state_21419[(7)]);
var inst_21406 = cljs.core.next.call(null,inst_21396);
var inst_21396__$1 = inst_21406;
var state_21419__$1 = (function (){var statearr_21435 = state_21419;
(statearr_21435[(7)] = inst_21396__$1);

return statearr_21435;
})();
var statearr_21436_21461 = state_21419__$1;
(statearr_21436_21461[(2)] = null);

(statearr_21436_21461[(1)] = (2));


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
});})(c__20599__auto__))
;
return ((function (switch__20534__auto__,c__20599__auto__){
return (function() {
var cljs$core$async$state_machine__20535__auto__ = null;
var cljs$core$async$state_machine__20535__auto____0 = (function (){
var statearr_21440 = [null,null,null,null,null,null,null,null];
(statearr_21440[(0)] = cljs$core$async$state_machine__20535__auto__);

(statearr_21440[(1)] = (1));

return statearr_21440;
});
var cljs$core$async$state_machine__20535__auto____1 = (function (state_21419){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_21419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e21441){if((e21441 instanceof Object)){
var ex__20538__auto__ = e21441;
var statearr_21442_21462 = state_21419;
(statearr_21442_21462[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21463 = state_21419;
state_21419 = G__21463;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
cljs$core$async$state_machine__20535__auto__ = function(state_21419){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20535__auto____1.call(this,state_21419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20535__auto____0;
cljs$core$async$state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20535__auto____1;
return cljs$core$async$state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto__))
})();
var state__20601__auto__ = (function (){var statearr_21443 = f__20600__auto__.call(null);
(statearr_21443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto__);

return statearr_21443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto__))
);

return c__20599__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19095__auto__ = (((_ == null))?null:_);
var m__19096__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19095__auto__)]);
if(!((m__19096__auto__ == null))){
return m__19096__auto__.call(null,_);
} else {
var m__19096__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19096__auto____$1 == null))){
return m__19096__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19095__auto__ = (((m == null))?null:m);
var m__19096__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19095__auto__)]);
if(!((m__19096__auto__ == null))){
return m__19096__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19096__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19096__auto____$1 == null))){
return m__19096__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19095__auto__ = (((m == null))?null:m);
var m__19096__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19095__auto__)]);
if(!((m__19096__auto__ == null))){
return m__19096__auto__.call(null,m,ch);
} else {
var m__19096__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19096__auto____$1 == null))){
return m__19096__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19095__auto__ = (((m == null))?null:m);
var m__19096__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19095__auto__)]);
if(!((m__19096__auto__ == null))){
return m__19096__auto__.call(null,m);
} else {
var m__19096__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19096__auto____$1 == null))){
return m__19096__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21685 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21685 = (function (mult,ch,cs,meta21686){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21686 = meta21686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21687,meta21686__$1){
var self__ = this;
var _21687__$1 = this;
return (new cljs.core.async.t_cljs$core$async21685(self__.mult,self__.ch,self__.cs,meta21686__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21685.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21687){
var self__ = this;
var _21687__$1 = this;
return self__.meta21686;
});})(cs))
;

cljs.core.async.t_cljs$core$async21685.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21685.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21685.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21685.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21685.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21685.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21685.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21686","meta21686",-2088344693,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21685.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21685";

cljs.core.async.t_cljs$core$async21685.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19038__auto__,writer__19039__auto__,opt__19040__auto__){
return cljs.core._write.call(null,writer__19039__auto__,"cljs.core.async/t_cljs$core$async21685");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21685 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21685(mult__$1,ch__$1,cs__$1,meta21686){
return (new cljs.core.async.t_cljs$core$async21685(mult__$1,ch__$1,cs__$1,meta21686));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21685(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20599__auto___21906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto___21906,cs,m,dchan,dctr,done){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto___21906,cs,m,dchan,dctr,done){
return (function (state_21818){
var state_val_21819 = (state_21818[(1)]);
if((state_val_21819 === (7))){
var inst_21814 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
var statearr_21820_21907 = state_21818__$1;
(statearr_21820_21907[(2)] = inst_21814);

(statearr_21820_21907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (20))){
var inst_21719 = (state_21818[(7)]);
var inst_21729 = cljs.core.first.call(null,inst_21719);
var inst_21730 = cljs.core.nth.call(null,inst_21729,(0),null);
var inst_21731 = cljs.core.nth.call(null,inst_21729,(1),null);
var state_21818__$1 = (function (){var statearr_21821 = state_21818;
(statearr_21821[(8)] = inst_21730);

return statearr_21821;
})();
if(cljs.core.truth_(inst_21731)){
var statearr_21822_21908 = state_21818__$1;
(statearr_21822_21908[(1)] = (22));

} else {
var statearr_21823_21909 = state_21818__$1;
(statearr_21823_21909[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (27))){
var inst_21759 = (state_21818[(9)]);
var inst_21690 = (state_21818[(10)]);
var inst_21761 = (state_21818[(11)]);
var inst_21766 = (state_21818[(12)]);
var inst_21766__$1 = cljs.core._nth.call(null,inst_21759,inst_21761);
var inst_21767 = cljs.core.async.put_BANG_.call(null,inst_21766__$1,inst_21690,done);
var state_21818__$1 = (function (){var statearr_21824 = state_21818;
(statearr_21824[(12)] = inst_21766__$1);

return statearr_21824;
})();
if(cljs.core.truth_(inst_21767)){
var statearr_21825_21910 = state_21818__$1;
(statearr_21825_21910[(1)] = (30));

} else {
var statearr_21826_21911 = state_21818__$1;
(statearr_21826_21911[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (1))){
var state_21818__$1 = state_21818;
var statearr_21827_21912 = state_21818__$1;
(statearr_21827_21912[(2)] = null);

(statearr_21827_21912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (24))){
var inst_21719 = (state_21818[(7)]);
var inst_21736 = (state_21818[(2)]);
var inst_21737 = cljs.core.next.call(null,inst_21719);
var inst_21699 = inst_21737;
var inst_21700 = null;
var inst_21701 = (0);
var inst_21702 = (0);
var state_21818__$1 = (function (){var statearr_21828 = state_21818;
(statearr_21828[(13)] = inst_21702);

(statearr_21828[(14)] = inst_21700);

(statearr_21828[(15)] = inst_21736);

(statearr_21828[(16)] = inst_21701);

(statearr_21828[(17)] = inst_21699);

return statearr_21828;
})();
var statearr_21829_21913 = state_21818__$1;
(statearr_21829_21913[(2)] = null);

(statearr_21829_21913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (39))){
var state_21818__$1 = state_21818;
var statearr_21833_21914 = state_21818__$1;
(statearr_21833_21914[(2)] = null);

(statearr_21833_21914[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (4))){
var inst_21690 = (state_21818[(10)]);
var inst_21690__$1 = (state_21818[(2)]);
var inst_21691 = (inst_21690__$1 == null);
var state_21818__$1 = (function (){var statearr_21834 = state_21818;
(statearr_21834[(10)] = inst_21690__$1);

return statearr_21834;
})();
if(cljs.core.truth_(inst_21691)){
var statearr_21835_21915 = state_21818__$1;
(statearr_21835_21915[(1)] = (5));

} else {
var statearr_21836_21916 = state_21818__$1;
(statearr_21836_21916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (15))){
var inst_21702 = (state_21818[(13)]);
var inst_21700 = (state_21818[(14)]);
var inst_21701 = (state_21818[(16)]);
var inst_21699 = (state_21818[(17)]);
var inst_21715 = (state_21818[(2)]);
var inst_21716 = (inst_21702 + (1));
var tmp21830 = inst_21700;
var tmp21831 = inst_21701;
var tmp21832 = inst_21699;
var inst_21699__$1 = tmp21832;
var inst_21700__$1 = tmp21830;
var inst_21701__$1 = tmp21831;
var inst_21702__$1 = inst_21716;
var state_21818__$1 = (function (){var statearr_21837 = state_21818;
(statearr_21837[(18)] = inst_21715);

(statearr_21837[(13)] = inst_21702__$1);

(statearr_21837[(14)] = inst_21700__$1);

(statearr_21837[(16)] = inst_21701__$1);

(statearr_21837[(17)] = inst_21699__$1);

return statearr_21837;
})();
var statearr_21838_21917 = state_21818__$1;
(statearr_21838_21917[(2)] = null);

(statearr_21838_21917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (21))){
var inst_21740 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
var statearr_21842_21918 = state_21818__$1;
(statearr_21842_21918[(2)] = inst_21740);

(statearr_21842_21918[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (31))){
var inst_21766 = (state_21818[(12)]);
var inst_21770 = done.call(null,null);
var inst_21771 = cljs.core.async.untap_STAR_.call(null,m,inst_21766);
var state_21818__$1 = (function (){var statearr_21843 = state_21818;
(statearr_21843[(19)] = inst_21770);

return statearr_21843;
})();
var statearr_21844_21919 = state_21818__$1;
(statearr_21844_21919[(2)] = inst_21771);

(statearr_21844_21919[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (32))){
var inst_21760 = (state_21818[(20)]);
var inst_21759 = (state_21818[(9)]);
var inst_21761 = (state_21818[(11)]);
var inst_21758 = (state_21818[(21)]);
var inst_21773 = (state_21818[(2)]);
var inst_21774 = (inst_21761 + (1));
var tmp21839 = inst_21760;
var tmp21840 = inst_21759;
var tmp21841 = inst_21758;
var inst_21758__$1 = tmp21841;
var inst_21759__$1 = tmp21840;
var inst_21760__$1 = tmp21839;
var inst_21761__$1 = inst_21774;
var state_21818__$1 = (function (){var statearr_21845 = state_21818;
(statearr_21845[(20)] = inst_21760__$1);

(statearr_21845[(9)] = inst_21759__$1);

(statearr_21845[(11)] = inst_21761__$1);

(statearr_21845[(21)] = inst_21758__$1);

(statearr_21845[(22)] = inst_21773);

return statearr_21845;
})();
var statearr_21846_21920 = state_21818__$1;
(statearr_21846_21920[(2)] = null);

(statearr_21846_21920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (40))){
var inst_21786 = (state_21818[(23)]);
var inst_21790 = done.call(null,null);
var inst_21791 = cljs.core.async.untap_STAR_.call(null,m,inst_21786);
var state_21818__$1 = (function (){var statearr_21847 = state_21818;
(statearr_21847[(24)] = inst_21790);

return statearr_21847;
})();
var statearr_21848_21921 = state_21818__$1;
(statearr_21848_21921[(2)] = inst_21791);

(statearr_21848_21921[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (33))){
var inst_21777 = (state_21818[(25)]);
var inst_21779 = cljs.core.chunked_seq_QMARK_.call(null,inst_21777);
var state_21818__$1 = state_21818;
if(inst_21779){
var statearr_21849_21922 = state_21818__$1;
(statearr_21849_21922[(1)] = (36));

} else {
var statearr_21850_21923 = state_21818__$1;
(statearr_21850_21923[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (13))){
var inst_21709 = (state_21818[(26)]);
var inst_21712 = cljs.core.async.close_BANG_.call(null,inst_21709);
var state_21818__$1 = state_21818;
var statearr_21851_21924 = state_21818__$1;
(statearr_21851_21924[(2)] = inst_21712);

(statearr_21851_21924[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (22))){
var inst_21730 = (state_21818[(8)]);
var inst_21733 = cljs.core.async.close_BANG_.call(null,inst_21730);
var state_21818__$1 = state_21818;
var statearr_21852_21925 = state_21818__$1;
(statearr_21852_21925[(2)] = inst_21733);

(statearr_21852_21925[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (36))){
var inst_21777 = (state_21818[(25)]);
var inst_21781 = cljs.core.chunk_first.call(null,inst_21777);
var inst_21782 = cljs.core.chunk_rest.call(null,inst_21777);
var inst_21783 = cljs.core.count.call(null,inst_21781);
var inst_21758 = inst_21782;
var inst_21759 = inst_21781;
var inst_21760 = inst_21783;
var inst_21761 = (0);
var state_21818__$1 = (function (){var statearr_21853 = state_21818;
(statearr_21853[(20)] = inst_21760);

(statearr_21853[(9)] = inst_21759);

(statearr_21853[(11)] = inst_21761);

(statearr_21853[(21)] = inst_21758);

return statearr_21853;
})();
var statearr_21854_21926 = state_21818__$1;
(statearr_21854_21926[(2)] = null);

(statearr_21854_21926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (41))){
var inst_21777 = (state_21818[(25)]);
var inst_21793 = (state_21818[(2)]);
var inst_21794 = cljs.core.next.call(null,inst_21777);
var inst_21758 = inst_21794;
var inst_21759 = null;
var inst_21760 = (0);
var inst_21761 = (0);
var state_21818__$1 = (function (){var statearr_21855 = state_21818;
(statearr_21855[(20)] = inst_21760);

(statearr_21855[(9)] = inst_21759);

(statearr_21855[(27)] = inst_21793);

(statearr_21855[(11)] = inst_21761);

(statearr_21855[(21)] = inst_21758);

return statearr_21855;
})();
var statearr_21856_21927 = state_21818__$1;
(statearr_21856_21927[(2)] = null);

(statearr_21856_21927[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (43))){
var state_21818__$1 = state_21818;
var statearr_21857_21928 = state_21818__$1;
(statearr_21857_21928[(2)] = null);

(statearr_21857_21928[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (29))){
var inst_21802 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
var statearr_21858_21929 = state_21818__$1;
(statearr_21858_21929[(2)] = inst_21802);

(statearr_21858_21929[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (44))){
var inst_21811 = (state_21818[(2)]);
var state_21818__$1 = (function (){var statearr_21859 = state_21818;
(statearr_21859[(28)] = inst_21811);

return statearr_21859;
})();
var statearr_21860_21930 = state_21818__$1;
(statearr_21860_21930[(2)] = null);

(statearr_21860_21930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (6))){
var inst_21750 = (state_21818[(29)]);
var inst_21749 = cljs.core.deref.call(null,cs);
var inst_21750__$1 = cljs.core.keys.call(null,inst_21749);
var inst_21751 = cljs.core.count.call(null,inst_21750__$1);
var inst_21752 = cljs.core.reset_BANG_.call(null,dctr,inst_21751);
var inst_21757 = cljs.core.seq.call(null,inst_21750__$1);
var inst_21758 = inst_21757;
var inst_21759 = null;
var inst_21760 = (0);
var inst_21761 = (0);
var state_21818__$1 = (function (){var statearr_21861 = state_21818;
(statearr_21861[(20)] = inst_21760);

(statearr_21861[(9)] = inst_21759);

(statearr_21861[(30)] = inst_21752);

(statearr_21861[(11)] = inst_21761);

(statearr_21861[(21)] = inst_21758);

(statearr_21861[(29)] = inst_21750__$1);

return statearr_21861;
})();
var statearr_21862_21931 = state_21818__$1;
(statearr_21862_21931[(2)] = null);

(statearr_21862_21931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (28))){
var inst_21777 = (state_21818[(25)]);
var inst_21758 = (state_21818[(21)]);
var inst_21777__$1 = cljs.core.seq.call(null,inst_21758);
var state_21818__$1 = (function (){var statearr_21863 = state_21818;
(statearr_21863[(25)] = inst_21777__$1);

return statearr_21863;
})();
if(inst_21777__$1){
var statearr_21864_21932 = state_21818__$1;
(statearr_21864_21932[(1)] = (33));

} else {
var statearr_21865_21933 = state_21818__$1;
(statearr_21865_21933[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (25))){
var inst_21760 = (state_21818[(20)]);
var inst_21761 = (state_21818[(11)]);
var inst_21763 = (inst_21761 < inst_21760);
var inst_21764 = inst_21763;
var state_21818__$1 = state_21818;
if(cljs.core.truth_(inst_21764)){
var statearr_21866_21934 = state_21818__$1;
(statearr_21866_21934[(1)] = (27));

} else {
var statearr_21867_21935 = state_21818__$1;
(statearr_21867_21935[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (34))){
var state_21818__$1 = state_21818;
var statearr_21868_21936 = state_21818__$1;
(statearr_21868_21936[(2)] = null);

(statearr_21868_21936[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (17))){
var state_21818__$1 = state_21818;
var statearr_21869_21937 = state_21818__$1;
(statearr_21869_21937[(2)] = null);

(statearr_21869_21937[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (3))){
var inst_21816 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21818__$1,inst_21816);
} else {
if((state_val_21819 === (12))){
var inst_21745 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
var statearr_21870_21938 = state_21818__$1;
(statearr_21870_21938[(2)] = inst_21745);

(statearr_21870_21938[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (2))){
var state_21818__$1 = state_21818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21818__$1,(4),ch);
} else {
if((state_val_21819 === (23))){
var state_21818__$1 = state_21818;
var statearr_21871_21939 = state_21818__$1;
(statearr_21871_21939[(2)] = null);

(statearr_21871_21939[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (35))){
var inst_21800 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
var statearr_21872_21940 = state_21818__$1;
(statearr_21872_21940[(2)] = inst_21800);

(statearr_21872_21940[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (19))){
var inst_21719 = (state_21818[(7)]);
var inst_21723 = cljs.core.chunk_first.call(null,inst_21719);
var inst_21724 = cljs.core.chunk_rest.call(null,inst_21719);
var inst_21725 = cljs.core.count.call(null,inst_21723);
var inst_21699 = inst_21724;
var inst_21700 = inst_21723;
var inst_21701 = inst_21725;
var inst_21702 = (0);
var state_21818__$1 = (function (){var statearr_21873 = state_21818;
(statearr_21873[(13)] = inst_21702);

(statearr_21873[(14)] = inst_21700);

(statearr_21873[(16)] = inst_21701);

(statearr_21873[(17)] = inst_21699);

return statearr_21873;
})();
var statearr_21874_21941 = state_21818__$1;
(statearr_21874_21941[(2)] = null);

(statearr_21874_21941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (11))){
var inst_21719 = (state_21818[(7)]);
var inst_21699 = (state_21818[(17)]);
var inst_21719__$1 = cljs.core.seq.call(null,inst_21699);
var state_21818__$1 = (function (){var statearr_21875 = state_21818;
(statearr_21875[(7)] = inst_21719__$1);

return statearr_21875;
})();
if(inst_21719__$1){
var statearr_21876_21942 = state_21818__$1;
(statearr_21876_21942[(1)] = (16));

} else {
var statearr_21877_21943 = state_21818__$1;
(statearr_21877_21943[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (9))){
var inst_21747 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
var statearr_21878_21944 = state_21818__$1;
(statearr_21878_21944[(2)] = inst_21747);

(statearr_21878_21944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (5))){
var inst_21697 = cljs.core.deref.call(null,cs);
var inst_21698 = cljs.core.seq.call(null,inst_21697);
var inst_21699 = inst_21698;
var inst_21700 = null;
var inst_21701 = (0);
var inst_21702 = (0);
var state_21818__$1 = (function (){var statearr_21879 = state_21818;
(statearr_21879[(13)] = inst_21702);

(statearr_21879[(14)] = inst_21700);

(statearr_21879[(16)] = inst_21701);

(statearr_21879[(17)] = inst_21699);

return statearr_21879;
})();
var statearr_21880_21945 = state_21818__$1;
(statearr_21880_21945[(2)] = null);

(statearr_21880_21945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (14))){
var state_21818__$1 = state_21818;
var statearr_21881_21946 = state_21818__$1;
(statearr_21881_21946[(2)] = null);

(statearr_21881_21946[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (45))){
var inst_21808 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
var statearr_21882_21947 = state_21818__$1;
(statearr_21882_21947[(2)] = inst_21808);

(statearr_21882_21947[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (26))){
var inst_21750 = (state_21818[(29)]);
var inst_21804 = (state_21818[(2)]);
var inst_21805 = cljs.core.seq.call(null,inst_21750);
var state_21818__$1 = (function (){var statearr_21883 = state_21818;
(statearr_21883[(31)] = inst_21804);

return statearr_21883;
})();
if(inst_21805){
var statearr_21884_21948 = state_21818__$1;
(statearr_21884_21948[(1)] = (42));

} else {
var statearr_21885_21949 = state_21818__$1;
(statearr_21885_21949[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (16))){
var inst_21719 = (state_21818[(7)]);
var inst_21721 = cljs.core.chunked_seq_QMARK_.call(null,inst_21719);
var state_21818__$1 = state_21818;
if(inst_21721){
var statearr_21886_21950 = state_21818__$1;
(statearr_21886_21950[(1)] = (19));

} else {
var statearr_21887_21951 = state_21818__$1;
(statearr_21887_21951[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (38))){
var inst_21797 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
var statearr_21888_21952 = state_21818__$1;
(statearr_21888_21952[(2)] = inst_21797);

(statearr_21888_21952[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (30))){
var state_21818__$1 = state_21818;
var statearr_21889_21953 = state_21818__$1;
(statearr_21889_21953[(2)] = null);

(statearr_21889_21953[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (10))){
var inst_21702 = (state_21818[(13)]);
var inst_21700 = (state_21818[(14)]);
var inst_21708 = cljs.core._nth.call(null,inst_21700,inst_21702);
var inst_21709 = cljs.core.nth.call(null,inst_21708,(0),null);
var inst_21710 = cljs.core.nth.call(null,inst_21708,(1),null);
var state_21818__$1 = (function (){var statearr_21890 = state_21818;
(statearr_21890[(26)] = inst_21709);

return statearr_21890;
})();
if(cljs.core.truth_(inst_21710)){
var statearr_21891_21954 = state_21818__$1;
(statearr_21891_21954[(1)] = (13));

} else {
var statearr_21892_21955 = state_21818__$1;
(statearr_21892_21955[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (18))){
var inst_21743 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
var statearr_21893_21956 = state_21818__$1;
(statearr_21893_21956[(2)] = inst_21743);

(statearr_21893_21956[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (42))){
var state_21818__$1 = state_21818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21818__$1,(45),dchan);
} else {
if((state_val_21819 === (37))){
var inst_21690 = (state_21818[(10)]);
var inst_21777 = (state_21818[(25)]);
var inst_21786 = (state_21818[(23)]);
var inst_21786__$1 = cljs.core.first.call(null,inst_21777);
var inst_21787 = cljs.core.async.put_BANG_.call(null,inst_21786__$1,inst_21690,done);
var state_21818__$1 = (function (){var statearr_21894 = state_21818;
(statearr_21894[(23)] = inst_21786__$1);

return statearr_21894;
})();
if(cljs.core.truth_(inst_21787)){
var statearr_21895_21957 = state_21818__$1;
(statearr_21895_21957[(1)] = (39));

} else {
var statearr_21896_21958 = state_21818__$1;
(statearr_21896_21958[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (8))){
var inst_21702 = (state_21818[(13)]);
var inst_21701 = (state_21818[(16)]);
var inst_21704 = (inst_21702 < inst_21701);
var inst_21705 = inst_21704;
var state_21818__$1 = state_21818;
if(cljs.core.truth_(inst_21705)){
var statearr_21897_21959 = state_21818__$1;
(statearr_21897_21959[(1)] = (10));

} else {
var statearr_21898_21960 = state_21818__$1;
(statearr_21898_21960[(1)] = (11));

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
});})(c__20599__auto___21906,cs,m,dchan,dctr,done))
;
return ((function (switch__20534__auto__,c__20599__auto___21906,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20535__auto__ = null;
var cljs$core$async$mult_$_state_machine__20535__auto____0 = (function (){
var statearr_21902 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21902[(0)] = cljs$core$async$mult_$_state_machine__20535__auto__);

(statearr_21902[(1)] = (1));

return statearr_21902;
});
var cljs$core$async$mult_$_state_machine__20535__auto____1 = (function (state_21818){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_21818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e21903){if((e21903 instanceof Object)){
var ex__20538__auto__ = e21903;
var statearr_21904_21961 = state_21818;
(statearr_21904_21961[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21962 = state_21818;
state_21818 = G__21962;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20535__auto__ = function(state_21818){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20535__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20535__auto____1.call(this,state_21818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20535__auto____0;
cljs$core$async$mult_$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20535__auto____1;
return cljs$core$async$mult_$_state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto___21906,cs,m,dchan,dctr,done))
})();
var state__20601__auto__ = (function (){var statearr_21905 = f__20600__auto__.call(null);
(statearr_21905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto___21906);

return statearr_21905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto___21906,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args21963 = [];
var len__19502__auto___21966 = arguments.length;
var i__19503__auto___21967 = (0);
while(true){
if((i__19503__auto___21967 < len__19502__auto___21966)){
args21963.push((arguments[i__19503__auto___21967]));

var G__21968 = (i__19503__auto___21967 + (1));
i__19503__auto___21967 = G__21968;
continue;
} else {
}
break;
}

var G__21965 = args21963.length;
switch (G__21965) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21963.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19095__auto__ = (((m == null))?null:m);
var m__19096__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19095__auto__)]);
if(!((m__19096__auto__ == null))){
return m__19096__auto__.call(null,m,ch);
} else {
var m__19096__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19096__auto____$1 == null))){
return m__19096__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19095__auto__ = (((m == null))?null:m);
var m__19096__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19095__auto__)]);
if(!((m__19096__auto__ == null))){
return m__19096__auto__.call(null,m,ch);
} else {
var m__19096__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19096__auto____$1 == null))){
return m__19096__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19095__auto__ = (((m == null))?null:m);
var m__19096__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19095__auto__)]);
if(!((m__19096__auto__ == null))){
return m__19096__auto__.call(null,m);
} else {
var m__19096__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19096__auto____$1 == null))){
return m__19096__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19095__auto__ = (((m == null))?null:m);
var m__19096__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19095__auto__)]);
if(!((m__19096__auto__ == null))){
return m__19096__auto__.call(null,m,state_map);
} else {
var m__19096__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19096__auto____$1 == null))){
return m__19096__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19095__auto__ = (((m == null))?null:m);
var m__19096__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19095__auto__)]);
if(!((m__19096__auto__ == null))){
return m__19096__auto__.call(null,m,mode);
} else {
var m__19096__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19096__auto____$1 == null))){
return m__19096__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19509__auto__ = [];
var len__19502__auto___21980 = arguments.length;
var i__19503__auto___21981 = (0);
while(true){
if((i__19503__auto___21981 < len__19502__auto___21980)){
args__19509__auto__.push((arguments[i__19503__auto___21981]));

var G__21982 = (i__19503__auto___21981 + (1));
i__19503__auto___21981 = G__21982;
continue;
} else {
}
break;
}

var argseq__19510__auto__ = ((((3) < args__19509__auto__.length))?(new cljs.core.IndexedSeq(args__19509__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19510__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21974){
var map__21975 = p__21974;
var map__21975__$1 = ((((!((map__21975 == null)))?((((map__21975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21975):map__21975);
var opts = map__21975__$1;
var statearr_21977_21983 = state;
(statearr_21977_21983[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__21975,map__21975__$1,opts){
return (function (val){
var statearr_21978_21984 = state;
(statearr_21978_21984[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21975,map__21975__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_21979_21985 = state;
(statearr_21979_21985[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21970){
var G__21971 = cljs.core.first.call(null,seq21970);
var seq21970__$1 = cljs.core.next.call(null,seq21970);
var G__21972 = cljs.core.first.call(null,seq21970__$1);
var seq21970__$2 = cljs.core.next.call(null,seq21970__$1);
var G__21973 = cljs.core.first.call(null,seq21970__$2);
var seq21970__$3 = cljs.core.next.call(null,seq21970__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21971,G__21972,G__21973,seq21970__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22149 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22149 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22150){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22150 = meta22150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22151,meta22150__$1){
var self__ = this;
var _22151__$1 = this;
return (new cljs.core.async.t_cljs$core$async22149(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22150__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22151){
var self__ = this;
var _22151__$1 = this;
return self__.meta22150;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22149.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22149.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22149.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22149.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22149.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22149.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22149.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22149.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22149.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22150","meta22150",944699195,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22149.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22149";

cljs.core.async.t_cljs$core$async22149.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19038__auto__,writer__19039__auto__,opt__19040__auto__){
return cljs.core._write.call(null,writer__19039__auto__,"cljs.core.async/t_cljs$core$async22149");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22149 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22149(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22150){
return (new cljs.core.async.t_cljs$core$async22149(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22150));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22149(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20599__auto___22312 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto___22312,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto___22312,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22249){
var state_val_22250 = (state_22249[(1)]);
if((state_val_22250 === (7))){
var inst_22167 = (state_22249[(2)]);
var state_22249__$1 = state_22249;
var statearr_22251_22313 = state_22249__$1;
(statearr_22251_22313[(2)] = inst_22167);

(statearr_22251_22313[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (20))){
var inst_22179 = (state_22249[(7)]);
var state_22249__$1 = state_22249;
var statearr_22252_22314 = state_22249__$1;
(statearr_22252_22314[(2)] = inst_22179);

(statearr_22252_22314[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (27))){
var state_22249__$1 = state_22249;
var statearr_22253_22315 = state_22249__$1;
(statearr_22253_22315[(2)] = null);

(statearr_22253_22315[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (1))){
var inst_22155 = (state_22249[(8)]);
var inst_22155__$1 = calc_state.call(null);
var inst_22157 = (inst_22155__$1 == null);
var inst_22158 = cljs.core.not.call(null,inst_22157);
var state_22249__$1 = (function (){var statearr_22254 = state_22249;
(statearr_22254[(8)] = inst_22155__$1);

return statearr_22254;
})();
if(inst_22158){
var statearr_22255_22316 = state_22249__$1;
(statearr_22255_22316[(1)] = (2));

} else {
var statearr_22256_22317 = state_22249__$1;
(statearr_22256_22317[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (24))){
var inst_22209 = (state_22249[(9)]);
var inst_22202 = (state_22249[(10)]);
var inst_22223 = (state_22249[(11)]);
var inst_22223__$1 = inst_22202.call(null,inst_22209);
var state_22249__$1 = (function (){var statearr_22257 = state_22249;
(statearr_22257[(11)] = inst_22223__$1);

return statearr_22257;
})();
if(cljs.core.truth_(inst_22223__$1)){
var statearr_22258_22318 = state_22249__$1;
(statearr_22258_22318[(1)] = (29));

} else {
var statearr_22259_22319 = state_22249__$1;
(statearr_22259_22319[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (4))){
var inst_22170 = (state_22249[(2)]);
var state_22249__$1 = state_22249;
if(cljs.core.truth_(inst_22170)){
var statearr_22260_22320 = state_22249__$1;
(statearr_22260_22320[(1)] = (8));

} else {
var statearr_22261_22321 = state_22249__$1;
(statearr_22261_22321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (15))){
var inst_22196 = (state_22249[(2)]);
var state_22249__$1 = state_22249;
if(cljs.core.truth_(inst_22196)){
var statearr_22262_22322 = state_22249__$1;
(statearr_22262_22322[(1)] = (19));

} else {
var statearr_22263_22323 = state_22249__$1;
(statearr_22263_22323[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (21))){
var inst_22201 = (state_22249[(12)]);
var inst_22201__$1 = (state_22249[(2)]);
var inst_22202 = cljs.core.get.call(null,inst_22201__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22203 = cljs.core.get.call(null,inst_22201__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22204 = cljs.core.get.call(null,inst_22201__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22249__$1 = (function (){var statearr_22264 = state_22249;
(statearr_22264[(13)] = inst_22203);

(statearr_22264[(10)] = inst_22202);

(statearr_22264[(12)] = inst_22201__$1);

return statearr_22264;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22249__$1,(22),inst_22204);
} else {
if((state_val_22250 === (31))){
var inst_22231 = (state_22249[(2)]);
var state_22249__$1 = state_22249;
if(cljs.core.truth_(inst_22231)){
var statearr_22265_22324 = state_22249__$1;
(statearr_22265_22324[(1)] = (32));

} else {
var statearr_22266_22325 = state_22249__$1;
(statearr_22266_22325[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (32))){
var inst_22208 = (state_22249[(14)]);
var state_22249__$1 = state_22249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22249__$1,(35),out,inst_22208);
} else {
if((state_val_22250 === (33))){
var inst_22201 = (state_22249[(12)]);
var inst_22179 = inst_22201;
var state_22249__$1 = (function (){var statearr_22267 = state_22249;
(statearr_22267[(7)] = inst_22179);

return statearr_22267;
})();
var statearr_22268_22326 = state_22249__$1;
(statearr_22268_22326[(2)] = null);

(statearr_22268_22326[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (13))){
var inst_22179 = (state_22249[(7)]);
var inst_22186 = inst_22179.cljs$lang$protocol_mask$partition0$;
var inst_22187 = (inst_22186 & (64));
var inst_22188 = inst_22179.cljs$core$ISeq$;
var inst_22189 = (inst_22187) || (inst_22188);
var state_22249__$1 = state_22249;
if(cljs.core.truth_(inst_22189)){
var statearr_22269_22327 = state_22249__$1;
(statearr_22269_22327[(1)] = (16));

} else {
var statearr_22270_22328 = state_22249__$1;
(statearr_22270_22328[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (22))){
var inst_22209 = (state_22249[(9)]);
var inst_22208 = (state_22249[(14)]);
var inst_22207 = (state_22249[(2)]);
var inst_22208__$1 = cljs.core.nth.call(null,inst_22207,(0),null);
var inst_22209__$1 = cljs.core.nth.call(null,inst_22207,(1),null);
var inst_22210 = (inst_22208__$1 == null);
var inst_22211 = cljs.core._EQ_.call(null,inst_22209__$1,change);
var inst_22212 = (inst_22210) || (inst_22211);
var state_22249__$1 = (function (){var statearr_22271 = state_22249;
(statearr_22271[(9)] = inst_22209__$1);

(statearr_22271[(14)] = inst_22208__$1);

return statearr_22271;
})();
if(cljs.core.truth_(inst_22212)){
var statearr_22272_22329 = state_22249__$1;
(statearr_22272_22329[(1)] = (23));

} else {
var statearr_22273_22330 = state_22249__$1;
(statearr_22273_22330[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (36))){
var inst_22201 = (state_22249[(12)]);
var inst_22179 = inst_22201;
var state_22249__$1 = (function (){var statearr_22274 = state_22249;
(statearr_22274[(7)] = inst_22179);

return statearr_22274;
})();
var statearr_22275_22331 = state_22249__$1;
(statearr_22275_22331[(2)] = null);

(statearr_22275_22331[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (29))){
var inst_22223 = (state_22249[(11)]);
var state_22249__$1 = state_22249;
var statearr_22276_22332 = state_22249__$1;
(statearr_22276_22332[(2)] = inst_22223);

(statearr_22276_22332[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (6))){
var state_22249__$1 = state_22249;
var statearr_22277_22333 = state_22249__$1;
(statearr_22277_22333[(2)] = false);

(statearr_22277_22333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (28))){
var inst_22219 = (state_22249[(2)]);
var inst_22220 = calc_state.call(null);
var inst_22179 = inst_22220;
var state_22249__$1 = (function (){var statearr_22278 = state_22249;
(statearr_22278[(15)] = inst_22219);

(statearr_22278[(7)] = inst_22179);

return statearr_22278;
})();
var statearr_22279_22334 = state_22249__$1;
(statearr_22279_22334[(2)] = null);

(statearr_22279_22334[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (25))){
var inst_22245 = (state_22249[(2)]);
var state_22249__$1 = state_22249;
var statearr_22280_22335 = state_22249__$1;
(statearr_22280_22335[(2)] = inst_22245);

(statearr_22280_22335[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (34))){
var inst_22243 = (state_22249[(2)]);
var state_22249__$1 = state_22249;
var statearr_22281_22336 = state_22249__$1;
(statearr_22281_22336[(2)] = inst_22243);

(statearr_22281_22336[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (17))){
var state_22249__$1 = state_22249;
var statearr_22282_22337 = state_22249__$1;
(statearr_22282_22337[(2)] = false);

(statearr_22282_22337[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (3))){
var state_22249__$1 = state_22249;
var statearr_22283_22338 = state_22249__$1;
(statearr_22283_22338[(2)] = false);

(statearr_22283_22338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (12))){
var inst_22247 = (state_22249[(2)]);
var state_22249__$1 = state_22249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22249__$1,inst_22247);
} else {
if((state_val_22250 === (2))){
var inst_22155 = (state_22249[(8)]);
var inst_22160 = inst_22155.cljs$lang$protocol_mask$partition0$;
var inst_22161 = (inst_22160 & (64));
var inst_22162 = inst_22155.cljs$core$ISeq$;
var inst_22163 = (inst_22161) || (inst_22162);
var state_22249__$1 = state_22249;
if(cljs.core.truth_(inst_22163)){
var statearr_22284_22339 = state_22249__$1;
(statearr_22284_22339[(1)] = (5));

} else {
var statearr_22285_22340 = state_22249__$1;
(statearr_22285_22340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (23))){
var inst_22208 = (state_22249[(14)]);
var inst_22214 = (inst_22208 == null);
var state_22249__$1 = state_22249;
if(cljs.core.truth_(inst_22214)){
var statearr_22286_22341 = state_22249__$1;
(statearr_22286_22341[(1)] = (26));

} else {
var statearr_22287_22342 = state_22249__$1;
(statearr_22287_22342[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (35))){
var inst_22234 = (state_22249[(2)]);
var state_22249__$1 = state_22249;
if(cljs.core.truth_(inst_22234)){
var statearr_22288_22343 = state_22249__$1;
(statearr_22288_22343[(1)] = (36));

} else {
var statearr_22289_22344 = state_22249__$1;
(statearr_22289_22344[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (19))){
var inst_22179 = (state_22249[(7)]);
var inst_22198 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22179);
var state_22249__$1 = state_22249;
var statearr_22290_22345 = state_22249__$1;
(statearr_22290_22345[(2)] = inst_22198);

(statearr_22290_22345[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (11))){
var inst_22179 = (state_22249[(7)]);
var inst_22183 = (inst_22179 == null);
var inst_22184 = cljs.core.not.call(null,inst_22183);
var state_22249__$1 = state_22249;
if(inst_22184){
var statearr_22291_22346 = state_22249__$1;
(statearr_22291_22346[(1)] = (13));

} else {
var statearr_22292_22347 = state_22249__$1;
(statearr_22292_22347[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (9))){
var inst_22155 = (state_22249[(8)]);
var state_22249__$1 = state_22249;
var statearr_22293_22348 = state_22249__$1;
(statearr_22293_22348[(2)] = inst_22155);

(statearr_22293_22348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (5))){
var state_22249__$1 = state_22249;
var statearr_22294_22349 = state_22249__$1;
(statearr_22294_22349[(2)] = true);

(statearr_22294_22349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (14))){
var state_22249__$1 = state_22249;
var statearr_22295_22350 = state_22249__$1;
(statearr_22295_22350[(2)] = false);

(statearr_22295_22350[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (26))){
var inst_22209 = (state_22249[(9)]);
var inst_22216 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22209);
var state_22249__$1 = state_22249;
var statearr_22296_22351 = state_22249__$1;
(statearr_22296_22351[(2)] = inst_22216);

(statearr_22296_22351[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (16))){
var state_22249__$1 = state_22249;
var statearr_22297_22352 = state_22249__$1;
(statearr_22297_22352[(2)] = true);

(statearr_22297_22352[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (38))){
var inst_22239 = (state_22249[(2)]);
var state_22249__$1 = state_22249;
var statearr_22298_22353 = state_22249__$1;
(statearr_22298_22353[(2)] = inst_22239);

(statearr_22298_22353[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (30))){
var inst_22209 = (state_22249[(9)]);
var inst_22203 = (state_22249[(13)]);
var inst_22202 = (state_22249[(10)]);
var inst_22226 = cljs.core.empty_QMARK_.call(null,inst_22202);
var inst_22227 = inst_22203.call(null,inst_22209);
var inst_22228 = cljs.core.not.call(null,inst_22227);
var inst_22229 = (inst_22226) && (inst_22228);
var state_22249__$1 = state_22249;
var statearr_22299_22354 = state_22249__$1;
(statearr_22299_22354[(2)] = inst_22229);

(statearr_22299_22354[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (10))){
var inst_22155 = (state_22249[(8)]);
var inst_22175 = (state_22249[(2)]);
var inst_22176 = cljs.core.get.call(null,inst_22175,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22177 = cljs.core.get.call(null,inst_22175,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22178 = cljs.core.get.call(null,inst_22175,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22179 = inst_22155;
var state_22249__$1 = (function (){var statearr_22300 = state_22249;
(statearr_22300[(16)] = inst_22176);

(statearr_22300[(17)] = inst_22178);

(statearr_22300[(7)] = inst_22179);

(statearr_22300[(18)] = inst_22177);

return statearr_22300;
})();
var statearr_22301_22355 = state_22249__$1;
(statearr_22301_22355[(2)] = null);

(statearr_22301_22355[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (18))){
var inst_22193 = (state_22249[(2)]);
var state_22249__$1 = state_22249;
var statearr_22302_22356 = state_22249__$1;
(statearr_22302_22356[(2)] = inst_22193);

(statearr_22302_22356[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (37))){
var state_22249__$1 = state_22249;
var statearr_22303_22357 = state_22249__$1;
(statearr_22303_22357[(2)] = null);

(statearr_22303_22357[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22250 === (8))){
var inst_22155 = (state_22249[(8)]);
var inst_22172 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22155);
var state_22249__$1 = state_22249;
var statearr_22304_22358 = state_22249__$1;
(statearr_22304_22358[(2)] = inst_22172);

(statearr_22304_22358[(1)] = (10));


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
});})(c__20599__auto___22312,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20534__auto__,c__20599__auto___22312,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20535__auto__ = null;
var cljs$core$async$mix_$_state_machine__20535__auto____0 = (function (){
var statearr_22308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22308[(0)] = cljs$core$async$mix_$_state_machine__20535__auto__);

(statearr_22308[(1)] = (1));

return statearr_22308;
});
var cljs$core$async$mix_$_state_machine__20535__auto____1 = (function (state_22249){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_22249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e22309){if((e22309 instanceof Object)){
var ex__20538__auto__ = e22309;
var statearr_22310_22359 = state_22249;
(statearr_22310_22359[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22360 = state_22249;
state_22249 = G__22360;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20535__auto__ = function(state_22249){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20535__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20535__auto____1.call(this,state_22249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20535__auto____0;
cljs$core$async$mix_$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20535__auto____1;
return cljs$core$async$mix_$_state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto___22312,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20601__auto__ = (function (){var statearr_22311 = f__20600__auto__.call(null);
(statearr_22311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto___22312);

return statearr_22311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto___22312,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19095__auto__ = (((p == null))?null:p);
var m__19096__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19095__auto__)]);
if(!((m__19096__auto__ == null))){
return m__19096__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19096__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19096__auto____$1 == null))){
return m__19096__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19095__auto__ = (((p == null))?null:p);
var m__19096__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19095__auto__)]);
if(!((m__19096__auto__ == null))){
return m__19096__auto__.call(null,p,v,ch);
} else {
var m__19096__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19096__auto____$1 == null))){
return m__19096__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22361 = [];
var len__19502__auto___22364 = arguments.length;
var i__19503__auto___22365 = (0);
while(true){
if((i__19503__auto___22365 < len__19502__auto___22364)){
args22361.push((arguments[i__19503__auto___22365]));

var G__22366 = (i__19503__auto___22365 + (1));
i__19503__auto___22365 = G__22366;
continue;
} else {
}
break;
}

var G__22363 = args22361.length;
switch (G__22363) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22361.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19095__auto__ = (((p == null))?null:p);
var m__19096__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19095__auto__)]);
if(!((m__19096__auto__ == null))){
return m__19096__auto__.call(null,p);
} else {
var m__19096__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19096__auto____$1 == null))){
return m__19096__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19095__auto__ = (((p == null))?null:p);
var m__19096__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19095__auto__)]);
if(!((m__19096__auto__ == null))){
return m__19096__auto__.call(null,p,v);
} else {
var m__19096__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19096__auto____$1 == null))){
return m__19096__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args22369 = [];
var len__19502__auto___22494 = arguments.length;
var i__19503__auto___22495 = (0);
while(true){
if((i__19503__auto___22495 < len__19502__auto___22494)){
args22369.push((arguments[i__19503__auto___22495]));

var G__22496 = (i__19503__auto___22495 + (1));
i__19503__auto___22495 = G__22496;
continue;
} else {
}
break;
}

var G__22371 = args22369.length;
switch (G__22371) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22369.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18432__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18432__auto__)){
return or__18432__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18432__auto__,mults){
return (function (p1__22368_SHARP_){
if(cljs.core.truth_(p1__22368_SHARP_.call(null,topic))){
return p1__22368_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22368_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18432__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22372 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22372 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22373){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22373 = meta22373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22374,meta22373__$1){
var self__ = this;
var _22374__$1 = this;
return (new cljs.core.async.t_cljs$core$async22372(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22373__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22372.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22374){
var self__ = this;
var _22374__$1 = this;
return self__.meta22373;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22372.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22372.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22372.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22372.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22372.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22372.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22372.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22372.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22373","meta22373",-91215852,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22372.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22372";

cljs.core.async.t_cljs$core$async22372.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19038__auto__,writer__19039__auto__,opt__19040__auto__){
return cljs.core._write.call(null,writer__19039__auto__,"cljs.core.async/t_cljs$core$async22372");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22372 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22372(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22373){
return (new cljs.core.async.t_cljs$core$async22372(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22373));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22372(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20599__auto___22498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto___22498,mults,ensure_mult,p){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto___22498,mults,ensure_mult,p){
return (function (state_22446){
var state_val_22447 = (state_22446[(1)]);
if((state_val_22447 === (7))){
var inst_22442 = (state_22446[(2)]);
var state_22446__$1 = state_22446;
var statearr_22448_22499 = state_22446__$1;
(statearr_22448_22499[(2)] = inst_22442);

(statearr_22448_22499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (20))){
var state_22446__$1 = state_22446;
var statearr_22449_22500 = state_22446__$1;
(statearr_22449_22500[(2)] = null);

(statearr_22449_22500[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (1))){
var state_22446__$1 = state_22446;
var statearr_22450_22501 = state_22446__$1;
(statearr_22450_22501[(2)] = null);

(statearr_22450_22501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (24))){
var inst_22425 = (state_22446[(7)]);
var inst_22434 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22425);
var state_22446__$1 = state_22446;
var statearr_22451_22502 = state_22446__$1;
(statearr_22451_22502[(2)] = inst_22434);

(statearr_22451_22502[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (4))){
var inst_22377 = (state_22446[(8)]);
var inst_22377__$1 = (state_22446[(2)]);
var inst_22378 = (inst_22377__$1 == null);
var state_22446__$1 = (function (){var statearr_22452 = state_22446;
(statearr_22452[(8)] = inst_22377__$1);

return statearr_22452;
})();
if(cljs.core.truth_(inst_22378)){
var statearr_22453_22503 = state_22446__$1;
(statearr_22453_22503[(1)] = (5));

} else {
var statearr_22454_22504 = state_22446__$1;
(statearr_22454_22504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (15))){
var inst_22419 = (state_22446[(2)]);
var state_22446__$1 = state_22446;
var statearr_22455_22505 = state_22446__$1;
(statearr_22455_22505[(2)] = inst_22419);

(statearr_22455_22505[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (21))){
var inst_22439 = (state_22446[(2)]);
var state_22446__$1 = (function (){var statearr_22456 = state_22446;
(statearr_22456[(9)] = inst_22439);

return statearr_22456;
})();
var statearr_22457_22506 = state_22446__$1;
(statearr_22457_22506[(2)] = null);

(statearr_22457_22506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (13))){
var inst_22401 = (state_22446[(10)]);
var inst_22403 = cljs.core.chunked_seq_QMARK_.call(null,inst_22401);
var state_22446__$1 = state_22446;
if(inst_22403){
var statearr_22458_22507 = state_22446__$1;
(statearr_22458_22507[(1)] = (16));

} else {
var statearr_22459_22508 = state_22446__$1;
(statearr_22459_22508[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (22))){
var inst_22431 = (state_22446[(2)]);
var state_22446__$1 = state_22446;
if(cljs.core.truth_(inst_22431)){
var statearr_22460_22509 = state_22446__$1;
(statearr_22460_22509[(1)] = (23));

} else {
var statearr_22461_22510 = state_22446__$1;
(statearr_22461_22510[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (6))){
var inst_22377 = (state_22446[(8)]);
var inst_22425 = (state_22446[(7)]);
var inst_22427 = (state_22446[(11)]);
var inst_22425__$1 = topic_fn.call(null,inst_22377);
var inst_22426 = cljs.core.deref.call(null,mults);
var inst_22427__$1 = cljs.core.get.call(null,inst_22426,inst_22425__$1);
var state_22446__$1 = (function (){var statearr_22462 = state_22446;
(statearr_22462[(7)] = inst_22425__$1);

(statearr_22462[(11)] = inst_22427__$1);

return statearr_22462;
})();
if(cljs.core.truth_(inst_22427__$1)){
var statearr_22463_22511 = state_22446__$1;
(statearr_22463_22511[(1)] = (19));

} else {
var statearr_22464_22512 = state_22446__$1;
(statearr_22464_22512[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (25))){
var inst_22436 = (state_22446[(2)]);
var state_22446__$1 = state_22446;
var statearr_22465_22513 = state_22446__$1;
(statearr_22465_22513[(2)] = inst_22436);

(statearr_22465_22513[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (17))){
var inst_22401 = (state_22446[(10)]);
var inst_22410 = cljs.core.first.call(null,inst_22401);
var inst_22411 = cljs.core.async.muxch_STAR_.call(null,inst_22410);
var inst_22412 = cljs.core.async.close_BANG_.call(null,inst_22411);
var inst_22413 = cljs.core.next.call(null,inst_22401);
var inst_22387 = inst_22413;
var inst_22388 = null;
var inst_22389 = (0);
var inst_22390 = (0);
var state_22446__$1 = (function (){var statearr_22466 = state_22446;
(statearr_22466[(12)] = inst_22412);

(statearr_22466[(13)] = inst_22389);

(statearr_22466[(14)] = inst_22388);

(statearr_22466[(15)] = inst_22387);

(statearr_22466[(16)] = inst_22390);

return statearr_22466;
})();
var statearr_22467_22514 = state_22446__$1;
(statearr_22467_22514[(2)] = null);

(statearr_22467_22514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (3))){
var inst_22444 = (state_22446[(2)]);
var state_22446__$1 = state_22446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22446__$1,inst_22444);
} else {
if((state_val_22447 === (12))){
var inst_22421 = (state_22446[(2)]);
var state_22446__$1 = state_22446;
var statearr_22468_22515 = state_22446__$1;
(statearr_22468_22515[(2)] = inst_22421);

(statearr_22468_22515[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (2))){
var state_22446__$1 = state_22446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22446__$1,(4),ch);
} else {
if((state_val_22447 === (23))){
var state_22446__$1 = state_22446;
var statearr_22469_22516 = state_22446__$1;
(statearr_22469_22516[(2)] = null);

(statearr_22469_22516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (19))){
var inst_22377 = (state_22446[(8)]);
var inst_22427 = (state_22446[(11)]);
var inst_22429 = cljs.core.async.muxch_STAR_.call(null,inst_22427);
var state_22446__$1 = state_22446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22446__$1,(22),inst_22429,inst_22377);
} else {
if((state_val_22447 === (11))){
var inst_22401 = (state_22446[(10)]);
var inst_22387 = (state_22446[(15)]);
var inst_22401__$1 = cljs.core.seq.call(null,inst_22387);
var state_22446__$1 = (function (){var statearr_22470 = state_22446;
(statearr_22470[(10)] = inst_22401__$1);

return statearr_22470;
})();
if(inst_22401__$1){
var statearr_22471_22517 = state_22446__$1;
(statearr_22471_22517[(1)] = (13));

} else {
var statearr_22472_22518 = state_22446__$1;
(statearr_22472_22518[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (9))){
var inst_22423 = (state_22446[(2)]);
var state_22446__$1 = state_22446;
var statearr_22473_22519 = state_22446__$1;
(statearr_22473_22519[(2)] = inst_22423);

(statearr_22473_22519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (5))){
var inst_22384 = cljs.core.deref.call(null,mults);
var inst_22385 = cljs.core.vals.call(null,inst_22384);
var inst_22386 = cljs.core.seq.call(null,inst_22385);
var inst_22387 = inst_22386;
var inst_22388 = null;
var inst_22389 = (0);
var inst_22390 = (0);
var state_22446__$1 = (function (){var statearr_22474 = state_22446;
(statearr_22474[(13)] = inst_22389);

(statearr_22474[(14)] = inst_22388);

(statearr_22474[(15)] = inst_22387);

(statearr_22474[(16)] = inst_22390);

return statearr_22474;
})();
var statearr_22475_22520 = state_22446__$1;
(statearr_22475_22520[(2)] = null);

(statearr_22475_22520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (14))){
var state_22446__$1 = state_22446;
var statearr_22479_22521 = state_22446__$1;
(statearr_22479_22521[(2)] = null);

(statearr_22479_22521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (16))){
var inst_22401 = (state_22446[(10)]);
var inst_22405 = cljs.core.chunk_first.call(null,inst_22401);
var inst_22406 = cljs.core.chunk_rest.call(null,inst_22401);
var inst_22407 = cljs.core.count.call(null,inst_22405);
var inst_22387 = inst_22406;
var inst_22388 = inst_22405;
var inst_22389 = inst_22407;
var inst_22390 = (0);
var state_22446__$1 = (function (){var statearr_22480 = state_22446;
(statearr_22480[(13)] = inst_22389);

(statearr_22480[(14)] = inst_22388);

(statearr_22480[(15)] = inst_22387);

(statearr_22480[(16)] = inst_22390);

return statearr_22480;
})();
var statearr_22481_22522 = state_22446__$1;
(statearr_22481_22522[(2)] = null);

(statearr_22481_22522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (10))){
var inst_22389 = (state_22446[(13)]);
var inst_22388 = (state_22446[(14)]);
var inst_22387 = (state_22446[(15)]);
var inst_22390 = (state_22446[(16)]);
var inst_22395 = cljs.core._nth.call(null,inst_22388,inst_22390);
var inst_22396 = cljs.core.async.muxch_STAR_.call(null,inst_22395);
var inst_22397 = cljs.core.async.close_BANG_.call(null,inst_22396);
var inst_22398 = (inst_22390 + (1));
var tmp22476 = inst_22389;
var tmp22477 = inst_22388;
var tmp22478 = inst_22387;
var inst_22387__$1 = tmp22478;
var inst_22388__$1 = tmp22477;
var inst_22389__$1 = tmp22476;
var inst_22390__$1 = inst_22398;
var state_22446__$1 = (function (){var statearr_22482 = state_22446;
(statearr_22482[(13)] = inst_22389__$1);

(statearr_22482[(14)] = inst_22388__$1);

(statearr_22482[(15)] = inst_22387__$1);

(statearr_22482[(17)] = inst_22397);

(statearr_22482[(16)] = inst_22390__$1);

return statearr_22482;
})();
var statearr_22483_22523 = state_22446__$1;
(statearr_22483_22523[(2)] = null);

(statearr_22483_22523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (18))){
var inst_22416 = (state_22446[(2)]);
var state_22446__$1 = state_22446;
var statearr_22484_22524 = state_22446__$1;
(statearr_22484_22524[(2)] = inst_22416);

(statearr_22484_22524[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22447 === (8))){
var inst_22389 = (state_22446[(13)]);
var inst_22390 = (state_22446[(16)]);
var inst_22392 = (inst_22390 < inst_22389);
var inst_22393 = inst_22392;
var state_22446__$1 = state_22446;
if(cljs.core.truth_(inst_22393)){
var statearr_22485_22525 = state_22446__$1;
(statearr_22485_22525[(1)] = (10));

} else {
var statearr_22486_22526 = state_22446__$1;
(statearr_22486_22526[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__20599__auto___22498,mults,ensure_mult,p))
;
return ((function (switch__20534__auto__,c__20599__auto___22498,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20535__auto__ = null;
var cljs$core$async$state_machine__20535__auto____0 = (function (){
var statearr_22490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22490[(0)] = cljs$core$async$state_machine__20535__auto__);

(statearr_22490[(1)] = (1));

return statearr_22490;
});
var cljs$core$async$state_machine__20535__auto____1 = (function (state_22446){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_22446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e22491){if((e22491 instanceof Object)){
var ex__20538__auto__ = e22491;
var statearr_22492_22527 = state_22446;
(statearr_22492_22527[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22528 = state_22446;
state_22446 = G__22528;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
cljs$core$async$state_machine__20535__auto__ = function(state_22446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20535__auto____1.call(this,state_22446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20535__auto____0;
cljs$core$async$state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20535__auto____1;
return cljs$core$async$state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto___22498,mults,ensure_mult,p))
})();
var state__20601__auto__ = (function (){var statearr_22493 = f__20600__auto__.call(null);
(statearr_22493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto___22498);

return statearr_22493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto___22498,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22529 = [];
var len__19502__auto___22532 = arguments.length;
var i__19503__auto___22533 = (0);
while(true){
if((i__19503__auto___22533 < len__19502__auto___22532)){
args22529.push((arguments[i__19503__auto___22533]));

var G__22534 = (i__19503__auto___22533 + (1));
i__19503__auto___22533 = G__22534;
continue;
} else {
}
break;
}

var G__22531 = args22529.length;
switch (G__22531) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22529.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22536 = [];
var len__19502__auto___22539 = arguments.length;
var i__19503__auto___22540 = (0);
while(true){
if((i__19503__auto___22540 < len__19502__auto___22539)){
args22536.push((arguments[i__19503__auto___22540]));

var G__22541 = (i__19503__auto___22540 + (1));
i__19503__auto___22540 = G__22541;
continue;
} else {
}
break;
}

var G__22538 = args22536.length;
switch (G__22538) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22536.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22543 = [];
var len__19502__auto___22614 = arguments.length;
var i__19503__auto___22615 = (0);
while(true){
if((i__19503__auto___22615 < len__19502__auto___22614)){
args22543.push((arguments[i__19503__auto___22615]));

var G__22616 = (i__19503__auto___22615 + (1));
i__19503__auto___22615 = G__22616;
continue;
} else {
}
break;
}

var G__22545 = args22543.length;
switch (G__22545) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22543.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20599__auto___22618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto___22618,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto___22618,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22584){
var state_val_22585 = (state_22584[(1)]);
if((state_val_22585 === (7))){
var state_22584__$1 = state_22584;
var statearr_22586_22619 = state_22584__$1;
(statearr_22586_22619[(2)] = null);

(statearr_22586_22619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22585 === (1))){
var state_22584__$1 = state_22584;
var statearr_22587_22620 = state_22584__$1;
(statearr_22587_22620[(2)] = null);

(statearr_22587_22620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22585 === (4))){
var inst_22548 = (state_22584[(7)]);
var inst_22550 = (inst_22548 < cnt);
var state_22584__$1 = state_22584;
if(cljs.core.truth_(inst_22550)){
var statearr_22588_22621 = state_22584__$1;
(statearr_22588_22621[(1)] = (6));

} else {
var statearr_22589_22622 = state_22584__$1;
(statearr_22589_22622[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22585 === (15))){
var inst_22580 = (state_22584[(2)]);
var state_22584__$1 = state_22584;
var statearr_22590_22623 = state_22584__$1;
(statearr_22590_22623[(2)] = inst_22580);

(statearr_22590_22623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22585 === (13))){
var inst_22573 = cljs.core.async.close_BANG_.call(null,out);
var state_22584__$1 = state_22584;
var statearr_22591_22624 = state_22584__$1;
(statearr_22591_22624[(2)] = inst_22573);

(statearr_22591_22624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22585 === (6))){
var state_22584__$1 = state_22584;
var statearr_22592_22625 = state_22584__$1;
(statearr_22592_22625[(2)] = null);

(statearr_22592_22625[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22585 === (3))){
var inst_22582 = (state_22584[(2)]);
var state_22584__$1 = state_22584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22584__$1,inst_22582);
} else {
if((state_val_22585 === (12))){
var inst_22570 = (state_22584[(8)]);
var inst_22570__$1 = (state_22584[(2)]);
var inst_22571 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22570__$1);
var state_22584__$1 = (function (){var statearr_22593 = state_22584;
(statearr_22593[(8)] = inst_22570__$1);

return statearr_22593;
})();
if(cljs.core.truth_(inst_22571)){
var statearr_22594_22626 = state_22584__$1;
(statearr_22594_22626[(1)] = (13));

} else {
var statearr_22595_22627 = state_22584__$1;
(statearr_22595_22627[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22585 === (2))){
var inst_22547 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22548 = (0);
var state_22584__$1 = (function (){var statearr_22596 = state_22584;
(statearr_22596[(9)] = inst_22547);

(statearr_22596[(7)] = inst_22548);

return statearr_22596;
})();
var statearr_22597_22628 = state_22584__$1;
(statearr_22597_22628[(2)] = null);

(statearr_22597_22628[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22585 === (11))){
var inst_22548 = (state_22584[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22584,(10),Object,null,(9));
var inst_22557 = chs__$1.call(null,inst_22548);
var inst_22558 = done.call(null,inst_22548);
var inst_22559 = cljs.core.async.take_BANG_.call(null,inst_22557,inst_22558);
var state_22584__$1 = state_22584;
var statearr_22598_22629 = state_22584__$1;
(statearr_22598_22629[(2)] = inst_22559);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22584__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22585 === (9))){
var inst_22548 = (state_22584[(7)]);
var inst_22561 = (state_22584[(2)]);
var inst_22562 = (inst_22548 + (1));
var inst_22548__$1 = inst_22562;
var state_22584__$1 = (function (){var statearr_22599 = state_22584;
(statearr_22599[(10)] = inst_22561);

(statearr_22599[(7)] = inst_22548__$1);

return statearr_22599;
})();
var statearr_22600_22630 = state_22584__$1;
(statearr_22600_22630[(2)] = null);

(statearr_22600_22630[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22585 === (5))){
var inst_22568 = (state_22584[(2)]);
var state_22584__$1 = (function (){var statearr_22601 = state_22584;
(statearr_22601[(11)] = inst_22568);

return statearr_22601;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22584__$1,(12),dchan);
} else {
if((state_val_22585 === (14))){
var inst_22570 = (state_22584[(8)]);
var inst_22575 = cljs.core.apply.call(null,f,inst_22570);
var state_22584__$1 = state_22584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22584__$1,(16),out,inst_22575);
} else {
if((state_val_22585 === (16))){
var inst_22577 = (state_22584[(2)]);
var state_22584__$1 = (function (){var statearr_22602 = state_22584;
(statearr_22602[(12)] = inst_22577);

return statearr_22602;
})();
var statearr_22603_22631 = state_22584__$1;
(statearr_22603_22631[(2)] = null);

(statearr_22603_22631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22585 === (10))){
var inst_22552 = (state_22584[(2)]);
var inst_22553 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22584__$1 = (function (){var statearr_22604 = state_22584;
(statearr_22604[(13)] = inst_22552);

return statearr_22604;
})();
var statearr_22605_22632 = state_22584__$1;
(statearr_22605_22632[(2)] = inst_22553);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22584__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22585 === (8))){
var inst_22566 = (state_22584[(2)]);
var state_22584__$1 = state_22584;
var statearr_22606_22633 = state_22584__$1;
(statearr_22606_22633[(2)] = inst_22566);

(statearr_22606_22633[(1)] = (5));


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
});})(c__20599__auto___22618,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20534__auto__,c__20599__auto___22618,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20535__auto__ = null;
var cljs$core$async$state_machine__20535__auto____0 = (function (){
var statearr_22610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22610[(0)] = cljs$core$async$state_machine__20535__auto__);

(statearr_22610[(1)] = (1));

return statearr_22610;
});
var cljs$core$async$state_machine__20535__auto____1 = (function (state_22584){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_22584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e22611){if((e22611 instanceof Object)){
var ex__20538__auto__ = e22611;
var statearr_22612_22634 = state_22584;
(statearr_22612_22634[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22635 = state_22584;
state_22584 = G__22635;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
cljs$core$async$state_machine__20535__auto__ = function(state_22584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20535__auto____1.call(this,state_22584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20535__auto____0;
cljs$core$async$state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20535__auto____1;
return cljs$core$async$state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto___22618,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20601__auto__ = (function (){var statearr_22613 = f__20600__auto__.call(null);
(statearr_22613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto___22618);

return statearr_22613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto___22618,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22637 = [];
var len__19502__auto___22693 = arguments.length;
var i__19503__auto___22694 = (0);
while(true){
if((i__19503__auto___22694 < len__19502__auto___22693)){
args22637.push((arguments[i__19503__auto___22694]));

var G__22695 = (i__19503__auto___22694 + (1));
i__19503__auto___22694 = G__22695;
continue;
} else {
}
break;
}

var G__22639 = args22637.length;
switch (G__22639) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22637.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20599__auto___22697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto___22697,out){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto___22697,out){
return (function (state_22669){
var state_val_22670 = (state_22669[(1)]);
if((state_val_22670 === (7))){
var inst_22649 = (state_22669[(7)]);
var inst_22648 = (state_22669[(8)]);
var inst_22648__$1 = (state_22669[(2)]);
var inst_22649__$1 = cljs.core.nth.call(null,inst_22648__$1,(0),null);
var inst_22650 = cljs.core.nth.call(null,inst_22648__$1,(1),null);
var inst_22651 = (inst_22649__$1 == null);
var state_22669__$1 = (function (){var statearr_22671 = state_22669;
(statearr_22671[(9)] = inst_22650);

(statearr_22671[(7)] = inst_22649__$1);

(statearr_22671[(8)] = inst_22648__$1);

return statearr_22671;
})();
if(cljs.core.truth_(inst_22651)){
var statearr_22672_22698 = state_22669__$1;
(statearr_22672_22698[(1)] = (8));

} else {
var statearr_22673_22699 = state_22669__$1;
(statearr_22673_22699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22670 === (1))){
var inst_22640 = cljs.core.vec.call(null,chs);
var inst_22641 = inst_22640;
var state_22669__$1 = (function (){var statearr_22674 = state_22669;
(statearr_22674[(10)] = inst_22641);

return statearr_22674;
})();
var statearr_22675_22700 = state_22669__$1;
(statearr_22675_22700[(2)] = null);

(statearr_22675_22700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22670 === (4))){
var inst_22641 = (state_22669[(10)]);
var state_22669__$1 = state_22669;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22669__$1,(7),inst_22641);
} else {
if((state_val_22670 === (6))){
var inst_22665 = (state_22669[(2)]);
var state_22669__$1 = state_22669;
var statearr_22676_22701 = state_22669__$1;
(statearr_22676_22701[(2)] = inst_22665);

(statearr_22676_22701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22670 === (3))){
var inst_22667 = (state_22669[(2)]);
var state_22669__$1 = state_22669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22669__$1,inst_22667);
} else {
if((state_val_22670 === (2))){
var inst_22641 = (state_22669[(10)]);
var inst_22643 = cljs.core.count.call(null,inst_22641);
var inst_22644 = (inst_22643 > (0));
var state_22669__$1 = state_22669;
if(cljs.core.truth_(inst_22644)){
var statearr_22678_22702 = state_22669__$1;
(statearr_22678_22702[(1)] = (4));

} else {
var statearr_22679_22703 = state_22669__$1;
(statearr_22679_22703[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22670 === (11))){
var inst_22641 = (state_22669[(10)]);
var inst_22658 = (state_22669[(2)]);
var tmp22677 = inst_22641;
var inst_22641__$1 = tmp22677;
var state_22669__$1 = (function (){var statearr_22680 = state_22669;
(statearr_22680[(10)] = inst_22641__$1);

(statearr_22680[(11)] = inst_22658);

return statearr_22680;
})();
var statearr_22681_22704 = state_22669__$1;
(statearr_22681_22704[(2)] = null);

(statearr_22681_22704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22670 === (9))){
var inst_22649 = (state_22669[(7)]);
var state_22669__$1 = state_22669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22669__$1,(11),out,inst_22649);
} else {
if((state_val_22670 === (5))){
var inst_22663 = cljs.core.async.close_BANG_.call(null,out);
var state_22669__$1 = state_22669;
var statearr_22682_22705 = state_22669__$1;
(statearr_22682_22705[(2)] = inst_22663);

(statearr_22682_22705[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22670 === (10))){
var inst_22661 = (state_22669[(2)]);
var state_22669__$1 = state_22669;
var statearr_22683_22706 = state_22669__$1;
(statearr_22683_22706[(2)] = inst_22661);

(statearr_22683_22706[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22670 === (8))){
var inst_22650 = (state_22669[(9)]);
var inst_22649 = (state_22669[(7)]);
var inst_22648 = (state_22669[(8)]);
var inst_22641 = (state_22669[(10)]);
var inst_22653 = (function (){var cs = inst_22641;
var vec__22646 = inst_22648;
var v = inst_22649;
var c = inst_22650;
return ((function (cs,vec__22646,v,c,inst_22650,inst_22649,inst_22648,inst_22641,state_val_22670,c__20599__auto___22697,out){
return (function (p1__22636_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22636_SHARP_);
});
;})(cs,vec__22646,v,c,inst_22650,inst_22649,inst_22648,inst_22641,state_val_22670,c__20599__auto___22697,out))
})();
var inst_22654 = cljs.core.filterv.call(null,inst_22653,inst_22641);
var inst_22641__$1 = inst_22654;
var state_22669__$1 = (function (){var statearr_22684 = state_22669;
(statearr_22684[(10)] = inst_22641__$1);

return statearr_22684;
})();
var statearr_22685_22707 = state_22669__$1;
(statearr_22685_22707[(2)] = null);

(statearr_22685_22707[(1)] = (2));


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
});})(c__20599__auto___22697,out))
;
return ((function (switch__20534__auto__,c__20599__auto___22697,out){
return (function() {
var cljs$core$async$state_machine__20535__auto__ = null;
var cljs$core$async$state_machine__20535__auto____0 = (function (){
var statearr_22689 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22689[(0)] = cljs$core$async$state_machine__20535__auto__);

(statearr_22689[(1)] = (1));

return statearr_22689;
});
var cljs$core$async$state_machine__20535__auto____1 = (function (state_22669){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_22669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e22690){if((e22690 instanceof Object)){
var ex__20538__auto__ = e22690;
var statearr_22691_22708 = state_22669;
(statearr_22691_22708[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22709 = state_22669;
state_22669 = G__22709;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
cljs$core$async$state_machine__20535__auto__ = function(state_22669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20535__auto____1.call(this,state_22669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20535__auto____0;
cljs$core$async$state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20535__auto____1;
return cljs$core$async$state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto___22697,out))
})();
var state__20601__auto__ = (function (){var statearr_22692 = f__20600__auto__.call(null);
(statearr_22692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto___22697);

return statearr_22692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto___22697,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22710 = [];
var len__19502__auto___22759 = arguments.length;
var i__19503__auto___22760 = (0);
while(true){
if((i__19503__auto___22760 < len__19502__auto___22759)){
args22710.push((arguments[i__19503__auto___22760]));

var G__22761 = (i__19503__auto___22760 + (1));
i__19503__auto___22760 = G__22761;
continue;
} else {
}
break;
}

var G__22712 = args22710.length;
switch (G__22712) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22710.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20599__auto___22763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto___22763,out){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto___22763,out){
return (function (state_22736){
var state_val_22737 = (state_22736[(1)]);
if((state_val_22737 === (7))){
var inst_22718 = (state_22736[(7)]);
var inst_22718__$1 = (state_22736[(2)]);
var inst_22719 = (inst_22718__$1 == null);
var inst_22720 = cljs.core.not.call(null,inst_22719);
var state_22736__$1 = (function (){var statearr_22738 = state_22736;
(statearr_22738[(7)] = inst_22718__$1);

return statearr_22738;
})();
if(inst_22720){
var statearr_22739_22764 = state_22736__$1;
(statearr_22739_22764[(1)] = (8));

} else {
var statearr_22740_22765 = state_22736__$1;
(statearr_22740_22765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22737 === (1))){
var inst_22713 = (0);
var state_22736__$1 = (function (){var statearr_22741 = state_22736;
(statearr_22741[(8)] = inst_22713);

return statearr_22741;
})();
var statearr_22742_22766 = state_22736__$1;
(statearr_22742_22766[(2)] = null);

(statearr_22742_22766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22737 === (4))){
var state_22736__$1 = state_22736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22736__$1,(7),ch);
} else {
if((state_val_22737 === (6))){
var inst_22731 = (state_22736[(2)]);
var state_22736__$1 = state_22736;
var statearr_22743_22767 = state_22736__$1;
(statearr_22743_22767[(2)] = inst_22731);

(statearr_22743_22767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22737 === (3))){
var inst_22733 = (state_22736[(2)]);
var inst_22734 = cljs.core.async.close_BANG_.call(null,out);
var state_22736__$1 = (function (){var statearr_22744 = state_22736;
(statearr_22744[(9)] = inst_22733);

return statearr_22744;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22736__$1,inst_22734);
} else {
if((state_val_22737 === (2))){
var inst_22713 = (state_22736[(8)]);
var inst_22715 = (inst_22713 < n);
var state_22736__$1 = state_22736;
if(cljs.core.truth_(inst_22715)){
var statearr_22745_22768 = state_22736__$1;
(statearr_22745_22768[(1)] = (4));

} else {
var statearr_22746_22769 = state_22736__$1;
(statearr_22746_22769[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22737 === (11))){
var inst_22713 = (state_22736[(8)]);
var inst_22723 = (state_22736[(2)]);
var inst_22724 = (inst_22713 + (1));
var inst_22713__$1 = inst_22724;
var state_22736__$1 = (function (){var statearr_22747 = state_22736;
(statearr_22747[(8)] = inst_22713__$1);

(statearr_22747[(10)] = inst_22723);

return statearr_22747;
})();
var statearr_22748_22770 = state_22736__$1;
(statearr_22748_22770[(2)] = null);

(statearr_22748_22770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22737 === (9))){
var state_22736__$1 = state_22736;
var statearr_22749_22771 = state_22736__$1;
(statearr_22749_22771[(2)] = null);

(statearr_22749_22771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22737 === (5))){
var state_22736__$1 = state_22736;
var statearr_22750_22772 = state_22736__$1;
(statearr_22750_22772[(2)] = null);

(statearr_22750_22772[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22737 === (10))){
var inst_22728 = (state_22736[(2)]);
var state_22736__$1 = state_22736;
var statearr_22751_22773 = state_22736__$1;
(statearr_22751_22773[(2)] = inst_22728);

(statearr_22751_22773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22737 === (8))){
var inst_22718 = (state_22736[(7)]);
var state_22736__$1 = state_22736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22736__$1,(11),out,inst_22718);
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
});})(c__20599__auto___22763,out))
;
return ((function (switch__20534__auto__,c__20599__auto___22763,out){
return (function() {
var cljs$core$async$state_machine__20535__auto__ = null;
var cljs$core$async$state_machine__20535__auto____0 = (function (){
var statearr_22755 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22755[(0)] = cljs$core$async$state_machine__20535__auto__);

(statearr_22755[(1)] = (1));

return statearr_22755;
});
var cljs$core$async$state_machine__20535__auto____1 = (function (state_22736){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_22736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e22756){if((e22756 instanceof Object)){
var ex__20538__auto__ = e22756;
var statearr_22757_22774 = state_22736;
(statearr_22757_22774[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22775 = state_22736;
state_22736 = G__22775;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
cljs$core$async$state_machine__20535__auto__ = function(state_22736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20535__auto____1.call(this,state_22736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20535__auto____0;
cljs$core$async$state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20535__auto____1;
return cljs$core$async$state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto___22763,out))
})();
var state__20601__auto__ = (function (){var statearr_22758 = f__20600__auto__.call(null);
(statearr_22758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto___22763);

return statearr_22758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto___22763,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22783 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22783 = (function (map_LT_,f,ch,meta22784){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22784 = meta22784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22785,meta22784__$1){
var self__ = this;
var _22785__$1 = this;
return (new cljs.core.async.t_cljs$core$async22783(self__.map_LT_,self__.f,self__.ch,meta22784__$1));
});

cljs.core.async.t_cljs$core$async22783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22785){
var self__ = this;
var _22785__$1 = this;
return self__.meta22784;
});

cljs.core.async.t_cljs$core$async22783.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22783.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22783.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22783.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22783.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22786 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22786 = (function (map_LT_,f,ch,meta22784,_,fn1,meta22787){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22784 = meta22784;
this._ = _;
this.fn1 = fn1;
this.meta22787 = meta22787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22788,meta22787__$1){
var self__ = this;
var _22788__$1 = this;
return (new cljs.core.async.t_cljs$core$async22786(self__.map_LT_,self__.f,self__.ch,self__.meta22784,self__._,self__.fn1,meta22787__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22786.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22788){
var self__ = this;
var _22788__$1 = this;
return self__.meta22787;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22786.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22786.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22786.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22786.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22776_SHARP_){
return f1.call(null,(((p1__22776_SHARP_ == null))?null:self__.f.call(null,p1__22776_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22786.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22784","meta22784",-1230259613,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22783","cljs.core.async/t_cljs$core$async22783",-369718164,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22787","meta22787",239745467,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22786.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22786.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22786";

cljs.core.async.t_cljs$core$async22786.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19038__auto__,writer__19039__auto__,opt__19040__auto__){
return cljs.core._write.call(null,writer__19039__auto__,"cljs.core.async/t_cljs$core$async22786");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22786 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22786(map_LT___$1,f__$1,ch__$1,meta22784__$1,___$2,fn1__$1,meta22787){
return (new cljs.core.async.t_cljs$core$async22786(map_LT___$1,f__$1,ch__$1,meta22784__$1,___$2,fn1__$1,meta22787));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22786(self__.map_LT_,self__.f,self__.ch,self__.meta22784,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18420__auto__ = ret;
if(cljs.core.truth_(and__18420__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18420__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22783.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22783.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22784","meta22784",-1230259613,null)], null);
});

cljs.core.async.t_cljs$core$async22783.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22783.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22783";

cljs.core.async.t_cljs$core$async22783.cljs$lang$ctorPrWriter = (function (this__19038__auto__,writer__19039__auto__,opt__19040__auto__){
return cljs.core._write.call(null,writer__19039__auto__,"cljs.core.async/t_cljs$core$async22783");
});

cljs.core.async.__GT_t_cljs$core$async22783 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22783(map_LT___$1,f__$1,ch__$1,meta22784){
return (new cljs.core.async.t_cljs$core$async22783(map_LT___$1,f__$1,ch__$1,meta22784));
});

}

return (new cljs.core.async.t_cljs$core$async22783(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22792 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22792 = (function (map_GT_,f,ch,meta22793){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22793 = meta22793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22794,meta22793__$1){
var self__ = this;
var _22794__$1 = this;
return (new cljs.core.async.t_cljs$core$async22792(self__.map_GT_,self__.f,self__.ch,meta22793__$1));
});

cljs.core.async.t_cljs$core$async22792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22794){
var self__ = this;
var _22794__$1 = this;
return self__.meta22793;
});

cljs.core.async.t_cljs$core$async22792.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22792.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22792.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22792.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22792.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22792.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22792.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22793","meta22793",1287912200,null)], null);
});

cljs.core.async.t_cljs$core$async22792.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22792";

cljs.core.async.t_cljs$core$async22792.cljs$lang$ctorPrWriter = (function (this__19038__auto__,writer__19039__auto__,opt__19040__auto__){
return cljs.core._write.call(null,writer__19039__auto__,"cljs.core.async/t_cljs$core$async22792");
});

cljs.core.async.__GT_t_cljs$core$async22792 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22792(map_GT___$1,f__$1,ch__$1,meta22793){
return (new cljs.core.async.t_cljs$core$async22792(map_GT___$1,f__$1,ch__$1,meta22793));
});

}

return (new cljs.core.async.t_cljs$core$async22792(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22798 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22798 = (function (filter_GT_,p,ch,meta22799){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22799 = meta22799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22800,meta22799__$1){
var self__ = this;
var _22800__$1 = this;
return (new cljs.core.async.t_cljs$core$async22798(self__.filter_GT_,self__.p,self__.ch,meta22799__$1));
});

cljs.core.async.t_cljs$core$async22798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22800){
var self__ = this;
var _22800__$1 = this;
return self__.meta22799;
});

cljs.core.async.t_cljs$core$async22798.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22798.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22798.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22798.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22798.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22798.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22798.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22799","meta22799",-904942537,null)], null);
});

cljs.core.async.t_cljs$core$async22798.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22798";

cljs.core.async.t_cljs$core$async22798.cljs$lang$ctorPrWriter = (function (this__19038__auto__,writer__19039__auto__,opt__19040__auto__){
return cljs.core._write.call(null,writer__19039__auto__,"cljs.core.async/t_cljs$core$async22798");
});

cljs.core.async.__GT_t_cljs$core$async22798 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22798(filter_GT___$1,p__$1,ch__$1,meta22799){
return (new cljs.core.async.t_cljs$core$async22798(filter_GT___$1,p__$1,ch__$1,meta22799));
});

}

return (new cljs.core.async.t_cljs$core$async22798(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22801 = [];
var len__19502__auto___22845 = arguments.length;
var i__19503__auto___22846 = (0);
while(true){
if((i__19503__auto___22846 < len__19502__auto___22845)){
args22801.push((arguments[i__19503__auto___22846]));

var G__22847 = (i__19503__auto___22846 + (1));
i__19503__auto___22846 = G__22847;
continue;
} else {
}
break;
}

var G__22803 = args22801.length;
switch (G__22803) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22801.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20599__auto___22849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto___22849,out){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto___22849,out){
return (function (state_22824){
var state_val_22825 = (state_22824[(1)]);
if((state_val_22825 === (7))){
var inst_22820 = (state_22824[(2)]);
var state_22824__$1 = state_22824;
var statearr_22826_22850 = state_22824__$1;
(statearr_22826_22850[(2)] = inst_22820);

(statearr_22826_22850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22825 === (1))){
var state_22824__$1 = state_22824;
var statearr_22827_22851 = state_22824__$1;
(statearr_22827_22851[(2)] = null);

(statearr_22827_22851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22825 === (4))){
var inst_22806 = (state_22824[(7)]);
var inst_22806__$1 = (state_22824[(2)]);
var inst_22807 = (inst_22806__$1 == null);
var state_22824__$1 = (function (){var statearr_22828 = state_22824;
(statearr_22828[(7)] = inst_22806__$1);

return statearr_22828;
})();
if(cljs.core.truth_(inst_22807)){
var statearr_22829_22852 = state_22824__$1;
(statearr_22829_22852[(1)] = (5));

} else {
var statearr_22830_22853 = state_22824__$1;
(statearr_22830_22853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22825 === (6))){
var inst_22806 = (state_22824[(7)]);
var inst_22811 = p.call(null,inst_22806);
var state_22824__$1 = state_22824;
if(cljs.core.truth_(inst_22811)){
var statearr_22831_22854 = state_22824__$1;
(statearr_22831_22854[(1)] = (8));

} else {
var statearr_22832_22855 = state_22824__$1;
(statearr_22832_22855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22825 === (3))){
var inst_22822 = (state_22824[(2)]);
var state_22824__$1 = state_22824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22824__$1,inst_22822);
} else {
if((state_val_22825 === (2))){
var state_22824__$1 = state_22824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22824__$1,(4),ch);
} else {
if((state_val_22825 === (11))){
var inst_22814 = (state_22824[(2)]);
var state_22824__$1 = state_22824;
var statearr_22833_22856 = state_22824__$1;
(statearr_22833_22856[(2)] = inst_22814);

(statearr_22833_22856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22825 === (9))){
var state_22824__$1 = state_22824;
var statearr_22834_22857 = state_22824__$1;
(statearr_22834_22857[(2)] = null);

(statearr_22834_22857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22825 === (5))){
var inst_22809 = cljs.core.async.close_BANG_.call(null,out);
var state_22824__$1 = state_22824;
var statearr_22835_22858 = state_22824__$1;
(statearr_22835_22858[(2)] = inst_22809);

(statearr_22835_22858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22825 === (10))){
var inst_22817 = (state_22824[(2)]);
var state_22824__$1 = (function (){var statearr_22836 = state_22824;
(statearr_22836[(8)] = inst_22817);

return statearr_22836;
})();
var statearr_22837_22859 = state_22824__$1;
(statearr_22837_22859[(2)] = null);

(statearr_22837_22859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22825 === (8))){
var inst_22806 = (state_22824[(7)]);
var state_22824__$1 = state_22824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22824__$1,(11),out,inst_22806);
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
});})(c__20599__auto___22849,out))
;
return ((function (switch__20534__auto__,c__20599__auto___22849,out){
return (function() {
var cljs$core$async$state_machine__20535__auto__ = null;
var cljs$core$async$state_machine__20535__auto____0 = (function (){
var statearr_22841 = [null,null,null,null,null,null,null,null,null];
(statearr_22841[(0)] = cljs$core$async$state_machine__20535__auto__);

(statearr_22841[(1)] = (1));

return statearr_22841;
});
var cljs$core$async$state_machine__20535__auto____1 = (function (state_22824){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_22824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e22842){if((e22842 instanceof Object)){
var ex__20538__auto__ = e22842;
var statearr_22843_22860 = state_22824;
(statearr_22843_22860[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22861 = state_22824;
state_22824 = G__22861;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
cljs$core$async$state_machine__20535__auto__ = function(state_22824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20535__auto____1.call(this,state_22824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20535__auto____0;
cljs$core$async$state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20535__auto____1;
return cljs$core$async$state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto___22849,out))
})();
var state__20601__auto__ = (function (){var statearr_22844 = f__20600__auto__.call(null);
(statearr_22844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto___22849);

return statearr_22844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto___22849,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22862 = [];
var len__19502__auto___22865 = arguments.length;
var i__19503__auto___22866 = (0);
while(true){
if((i__19503__auto___22866 < len__19502__auto___22865)){
args22862.push((arguments[i__19503__auto___22866]));

var G__22867 = (i__19503__auto___22866 + (1));
i__19503__auto___22866 = G__22867;
continue;
} else {
}
break;
}

var G__22864 = args22862.length;
switch (G__22864) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22862.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto__){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto__){
return (function (state_23034){
var state_val_23035 = (state_23034[(1)]);
if((state_val_23035 === (7))){
var inst_23030 = (state_23034[(2)]);
var state_23034__$1 = state_23034;
var statearr_23036_23077 = state_23034__$1;
(statearr_23036_23077[(2)] = inst_23030);

(statearr_23036_23077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23035 === (20))){
var inst_23000 = (state_23034[(7)]);
var inst_23011 = (state_23034[(2)]);
var inst_23012 = cljs.core.next.call(null,inst_23000);
var inst_22986 = inst_23012;
var inst_22987 = null;
var inst_22988 = (0);
var inst_22989 = (0);
var state_23034__$1 = (function (){var statearr_23037 = state_23034;
(statearr_23037[(8)] = inst_23011);

(statearr_23037[(9)] = inst_22987);

(statearr_23037[(10)] = inst_22988);

(statearr_23037[(11)] = inst_22986);

(statearr_23037[(12)] = inst_22989);

return statearr_23037;
})();
var statearr_23038_23078 = state_23034__$1;
(statearr_23038_23078[(2)] = null);

(statearr_23038_23078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23035 === (1))){
var state_23034__$1 = state_23034;
var statearr_23039_23079 = state_23034__$1;
(statearr_23039_23079[(2)] = null);

(statearr_23039_23079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23035 === (4))){
var inst_22975 = (state_23034[(13)]);
var inst_22975__$1 = (state_23034[(2)]);
var inst_22976 = (inst_22975__$1 == null);
var state_23034__$1 = (function (){var statearr_23040 = state_23034;
(statearr_23040[(13)] = inst_22975__$1);

return statearr_23040;
})();
if(cljs.core.truth_(inst_22976)){
var statearr_23041_23080 = state_23034__$1;
(statearr_23041_23080[(1)] = (5));

} else {
var statearr_23042_23081 = state_23034__$1;
(statearr_23042_23081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23035 === (15))){
var state_23034__$1 = state_23034;
var statearr_23046_23082 = state_23034__$1;
(statearr_23046_23082[(2)] = null);

(statearr_23046_23082[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23035 === (21))){
var state_23034__$1 = state_23034;
var statearr_23047_23083 = state_23034__$1;
(statearr_23047_23083[(2)] = null);

(statearr_23047_23083[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23035 === (13))){
var inst_22987 = (state_23034[(9)]);
var inst_22988 = (state_23034[(10)]);
var inst_22986 = (state_23034[(11)]);
var inst_22989 = (state_23034[(12)]);
var inst_22996 = (state_23034[(2)]);
var inst_22997 = (inst_22989 + (1));
var tmp23043 = inst_22987;
var tmp23044 = inst_22988;
var tmp23045 = inst_22986;
var inst_22986__$1 = tmp23045;
var inst_22987__$1 = tmp23043;
var inst_22988__$1 = tmp23044;
var inst_22989__$1 = inst_22997;
var state_23034__$1 = (function (){var statearr_23048 = state_23034;
(statearr_23048[(14)] = inst_22996);

(statearr_23048[(9)] = inst_22987__$1);

(statearr_23048[(10)] = inst_22988__$1);

(statearr_23048[(11)] = inst_22986__$1);

(statearr_23048[(12)] = inst_22989__$1);

return statearr_23048;
})();
var statearr_23049_23084 = state_23034__$1;
(statearr_23049_23084[(2)] = null);

(statearr_23049_23084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23035 === (22))){
var state_23034__$1 = state_23034;
var statearr_23050_23085 = state_23034__$1;
(statearr_23050_23085[(2)] = null);

(statearr_23050_23085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23035 === (6))){
var inst_22975 = (state_23034[(13)]);
var inst_22984 = f.call(null,inst_22975);
var inst_22985 = cljs.core.seq.call(null,inst_22984);
var inst_22986 = inst_22985;
var inst_22987 = null;
var inst_22988 = (0);
var inst_22989 = (0);
var state_23034__$1 = (function (){var statearr_23051 = state_23034;
(statearr_23051[(9)] = inst_22987);

(statearr_23051[(10)] = inst_22988);

(statearr_23051[(11)] = inst_22986);

(statearr_23051[(12)] = inst_22989);

return statearr_23051;
})();
var statearr_23052_23086 = state_23034__$1;
(statearr_23052_23086[(2)] = null);

(statearr_23052_23086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23035 === (17))){
var inst_23000 = (state_23034[(7)]);
var inst_23004 = cljs.core.chunk_first.call(null,inst_23000);
var inst_23005 = cljs.core.chunk_rest.call(null,inst_23000);
var inst_23006 = cljs.core.count.call(null,inst_23004);
var inst_22986 = inst_23005;
var inst_22987 = inst_23004;
var inst_22988 = inst_23006;
var inst_22989 = (0);
var state_23034__$1 = (function (){var statearr_23053 = state_23034;
(statearr_23053[(9)] = inst_22987);

(statearr_23053[(10)] = inst_22988);

(statearr_23053[(11)] = inst_22986);

(statearr_23053[(12)] = inst_22989);

return statearr_23053;
})();
var statearr_23054_23087 = state_23034__$1;
(statearr_23054_23087[(2)] = null);

(statearr_23054_23087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23035 === (3))){
var inst_23032 = (state_23034[(2)]);
var state_23034__$1 = state_23034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23034__$1,inst_23032);
} else {
if((state_val_23035 === (12))){
var inst_23020 = (state_23034[(2)]);
var state_23034__$1 = state_23034;
var statearr_23055_23088 = state_23034__$1;
(statearr_23055_23088[(2)] = inst_23020);

(statearr_23055_23088[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23035 === (2))){
var state_23034__$1 = state_23034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23034__$1,(4),in$);
} else {
if((state_val_23035 === (23))){
var inst_23028 = (state_23034[(2)]);
var state_23034__$1 = state_23034;
var statearr_23056_23089 = state_23034__$1;
(statearr_23056_23089[(2)] = inst_23028);

(statearr_23056_23089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23035 === (19))){
var inst_23015 = (state_23034[(2)]);
var state_23034__$1 = state_23034;
var statearr_23057_23090 = state_23034__$1;
(statearr_23057_23090[(2)] = inst_23015);

(statearr_23057_23090[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23035 === (11))){
var inst_23000 = (state_23034[(7)]);
var inst_22986 = (state_23034[(11)]);
var inst_23000__$1 = cljs.core.seq.call(null,inst_22986);
var state_23034__$1 = (function (){var statearr_23058 = state_23034;
(statearr_23058[(7)] = inst_23000__$1);

return statearr_23058;
})();
if(inst_23000__$1){
var statearr_23059_23091 = state_23034__$1;
(statearr_23059_23091[(1)] = (14));

} else {
var statearr_23060_23092 = state_23034__$1;
(statearr_23060_23092[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23035 === (9))){
var inst_23022 = (state_23034[(2)]);
var inst_23023 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23034__$1 = (function (){var statearr_23061 = state_23034;
(statearr_23061[(15)] = inst_23022);

return statearr_23061;
})();
if(cljs.core.truth_(inst_23023)){
var statearr_23062_23093 = state_23034__$1;
(statearr_23062_23093[(1)] = (21));

} else {
var statearr_23063_23094 = state_23034__$1;
(statearr_23063_23094[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23035 === (5))){
var inst_22978 = cljs.core.async.close_BANG_.call(null,out);
var state_23034__$1 = state_23034;
var statearr_23064_23095 = state_23034__$1;
(statearr_23064_23095[(2)] = inst_22978);

(statearr_23064_23095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23035 === (14))){
var inst_23000 = (state_23034[(7)]);
var inst_23002 = cljs.core.chunked_seq_QMARK_.call(null,inst_23000);
var state_23034__$1 = state_23034;
if(inst_23002){
var statearr_23065_23096 = state_23034__$1;
(statearr_23065_23096[(1)] = (17));

} else {
var statearr_23066_23097 = state_23034__$1;
(statearr_23066_23097[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23035 === (16))){
var inst_23018 = (state_23034[(2)]);
var state_23034__$1 = state_23034;
var statearr_23067_23098 = state_23034__$1;
(statearr_23067_23098[(2)] = inst_23018);

(statearr_23067_23098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23035 === (10))){
var inst_22987 = (state_23034[(9)]);
var inst_22989 = (state_23034[(12)]);
var inst_22994 = cljs.core._nth.call(null,inst_22987,inst_22989);
var state_23034__$1 = state_23034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23034__$1,(13),out,inst_22994);
} else {
if((state_val_23035 === (18))){
var inst_23000 = (state_23034[(7)]);
var inst_23009 = cljs.core.first.call(null,inst_23000);
var state_23034__$1 = state_23034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23034__$1,(20),out,inst_23009);
} else {
if((state_val_23035 === (8))){
var inst_22988 = (state_23034[(10)]);
var inst_22989 = (state_23034[(12)]);
var inst_22991 = (inst_22989 < inst_22988);
var inst_22992 = inst_22991;
var state_23034__$1 = state_23034;
if(cljs.core.truth_(inst_22992)){
var statearr_23068_23099 = state_23034__$1;
(statearr_23068_23099[(1)] = (10));

} else {
var statearr_23069_23100 = state_23034__$1;
(statearr_23069_23100[(1)] = (11));

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
}
}
}
}
}
}
});})(c__20599__auto__))
;
return ((function (switch__20534__auto__,c__20599__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20535__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20535__auto____0 = (function (){
var statearr_23073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23073[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20535__auto__);

(statearr_23073[(1)] = (1));

return statearr_23073;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20535__auto____1 = (function (state_23034){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_23034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e23074){if((e23074 instanceof Object)){
var ex__20538__auto__ = e23074;
var statearr_23075_23101 = state_23034;
(statearr_23075_23101[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23102 = state_23034;
state_23034 = G__23102;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20535__auto__ = function(state_23034){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20535__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20535__auto____1.call(this,state_23034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20535__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20535__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto__))
})();
var state__20601__auto__ = (function (){var statearr_23076 = f__20600__auto__.call(null);
(statearr_23076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto__);

return statearr_23076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto__))
);

return c__20599__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23103 = [];
var len__19502__auto___23106 = arguments.length;
var i__19503__auto___23107 = (0);
while(true){
if((i__19503__auto___23107 < len__19502__auto___23106)){
args23103.push((arguments[i__19503__auto___23107]));

var G__23108 = (i__19503__auto___23107 + (1));
i__19503__auto___23107 = G__23108;
continue;
} else {
}
break;
}

var G__23105 = args23103.length;
switch (G__23105) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23103.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args23110 = [];
var len__19502__auto___23113 = arguments.length;
var i__19503__auto___23114 = (0);
while(true){
if((i__19503__auto___23114 < len__19502__auto___23113)){
args23110.push((arguments[i__19503__auto___23114]));

var G__23115 = (i__19503__auto___23114 + (1));
i__19503__auto___23114 = G__23115;
continue;
} else {
}
break;
}

var G__23112 = args23110.length;
switch (G__23112) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23110.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args23117 = [];
var len__19502__auto___23168 = arguments.length;
var i__19503__auto___23169 = (0);
while(true){
if((i__19503__auto___23169 < len__19502__auto___23168)){
args23117.push((arguments[i__19503__auto___23169]));

var G__23170 = (i__19503__auto___23169 + (1));
i__19503__auto___23169 = G__23170;
continue;
} else {
}
break;
}

var G__23119 = args23117.length;
switch (G__23119) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23117.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20599__auto___23172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto___23172,out){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto___23172,out){
return (function (state_23143){
var state_val_23144 = (state_23143[(1)]);
if((state_val_23144 === (7))){
var inst_23138 = (state_23143[(2)]);
var state_23143__$1 = state_23143;
var statearr_23145_23173 = state_23143__$1;
(statearr_23145_23173[(2)] = inst_23138);

(statearr_23145_23173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (1))){
var inst_23120 = null;
var state_23143__$1 = (function (){var statearr_23146 = state_23143;
(statearr_23146[(7)] = inst_23120);

return statearr_23146;
})();
var statearr_23147_23174 = state_23143__$1;
(statearr_23147_23174[(2)] = null);

(statearr_23147_23174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (4))){
var inst_23123 = (state_23143[(8)]);
var inst_23123__$1 = (state_23143[(2)]);
var inst_23124 = (inst_23123__$1 == null);
var inst_23125 = cljs.core.not.call(null,inst_23124);
var state_23143__$1 = (function (){var statearr_23148 = state_23143;
(statearr_23148[(8)] = inst_23123__$1);

return statearr_23148;
})();
if(inst_23125){
var statearr_23149_23175 = state_23143__$1;
(statearr_23149_23175[(1)] = (5));

} else {
var statearr_23150_23176 = state_23143__$1;
(statearr_23150_23176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (6))){
var state_23143__$1 = state_23143;
var statearr_23151_23177 = state_23143__$1;
(statearr_23151_23177[(2)] = null);

(statearr_23151_23177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (3))){
var inst_23140 = (state_23143[(2)]);
var inst_23141 = cljs.core.async.close_BANG_.call(null,out);
var state_23143__$1 = (function (){var statearr_23152 = state_23143;
(statearr_23152[(9)] = inst_23140);

return statearr_23152;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23143__$1,inst_23141);
} else {
if((state_val_23144 === (2))){
var state_23143__$1 = state_23143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23143__$1,(4),ch);
} else {
if((state_val_23144 === (11))){
var inst_23123 = (state_23143[(8)]);
var inst_23132 = (state_23143[(2)]);
var inst_23120 = inst_23123;
var state_23143__$1 = (function (){var statearr_23153 = state_23143;
(statearr_23153[(7)] = inst_23120);

(statearr_23153[(10)] = inst_23132);

return statearr_23153;
})();
var statearr_23154_23178 = state_23143__$1;
(statearr_23154_23178[(2)] = null);

(statearr_23154_23178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (9))){
var inst_23123 = (state_23143[(8)]);
var state_23143__$1 = state_23143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23143__$1,(11),out,inst_23123);
} else {
if((state_val_23144 === (5))){
var inst_23123 = (state_23143[(8)]);
var inst_23120 = (state_23143[(7)]);
var inst_23127 = cljs.core._EQ_.call(null,inst_23123,inst_23120);
var state_23143__$1 = state_23143;
if(inst_23127){
var statearr_23156_23179 = state_23143__$1;
(statearr_23156_23179[(1)] = (8));

} else {
var statearr_23157_23180 = state_23143__$1;
(statearr_23157_23180[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (10))){
var inst_23135 = (state_23143[(2)]);
var state_23143__$1 = state_23143;
var statearr_23158_23181 = state_23143__$1;
(statearr_23158_23181[(2)] = inst_23135);

(statearr_23158_23181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23144 === (8))){
var inst_23120 = (state_23143[(7)]);
var tmp23155 = inst_23120;
var inst_23120__$1 = tmp23155;
var state_23143__$1 = (function (){var statearr_23159 = state_23143;
(statearr_23159[(7)] = inst_23120__$1);

return statearr_23159;
})();
var statearr_23160_23182 = state_23143__$1;
(statearr_23160_23182[(2)] = null);

(statearr_23160_23182[(1)] = (2));


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
});})(c__20599__auto___23172,out))
;
return ((function (switch__20534__auto__,c__20599__auto___23172,out){
return (function() {
var cljs$core$async$state_machine__20535__auto__ = null;
var cljs$core$async$state_machine__20535__auto____0 = (function (){
var statearr_23164 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23164[(0)] = cljs$core$async$state_machine__20535__auto__);

(statearr_23164[(1)] = (1));

return statearr_23164;
});
var cljs$core$async$state_machine__20535__auto____1 = (function (state_23143){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_23143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e23165){if((e23165 instanceof Object)){
var ex__20538__auto__ = e23165;
var statearr_23166_23183 = state_23143;
(statearr_23166_23183[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23184 = state_23143;
state_23143 = G__23184;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
cljs$core$async$state_machine__20535__auto__ = function(state_23143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20535__auto____1.call(this,state_23143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20535__auto____0;
cljs$core$async$state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20535__auto____1;
return cljs$core$async$state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto___23172,out))
})();
var state__20601__auto__ = (function (){var statearr_23167 = f__20600__auto__.call(null);
(statearr_23167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto___23172);

return statearr_23167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto___23172,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23185 = [];
var len__19502__auto___23255 = arguments.length;
var i__19503__auto___23256 = (0);
while(true){
if((i__19503__auto___23256 < len__19502__auto___23255)){
args23185.push((arguments[i__19503__auto___23256]));

var G__23257 = (i__19503__auto___23256 + (1));
i__19503__auto___23256 = G__23257;
continue;
} else {
}
break;
}

var G__23187 = args23185.length;
switch (G__23187) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23185.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20599__auto___23259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto___23259,out){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto___23259,out){
return (function (state_23225){
var state_val_23226 = (state_23225[(1)]);
if((state_val_23226 === (7))){
var inst_23221 = (state_23225[(2)]);
var state_23225__$1 = state_23225;
var statearr_23227_23260 = state_23225__$1;
(statearr_23227_23260[(2)] = inst_23221);

(statearr_23227_23260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (1))){
var inst_23188 = (new Array(n));
var inst_23189 = inst_23188;
var inst_23190 = (0);
var state_23225__$1 = (function (){var statearr_23228 = state_23225;
(statearr_23228[(7)] = inst_23189);

(statearr_23228[(8)] = inst_23190);

return statearr_23228;
})();
var statearr_23229_23261 = state_23225__$1;
(statearr_23229_23261[(2)] = null);

(statearr_23229_23261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (4))){
var inst_23193 = (state_23225[(9)]);
var inst_23193__$1 = (state_23225[(2)]);
var inst_23194 = (inst_23193__$1 == null);
var inst_23195 = cljs.core.not.call(null,inst_23194);
var state_23225__$1 = (function (){var statearr_23230 = state_23225;
(statearr_23230[(9)] = inst_23193__$1);

return statearr_23230;
})();
if(inst_23195){
var statearr_23231_23262 = state_23225__$1;
(statearr_23231_23262[(1)] = (5));

} else {
var statearr_23232_23263 = state_23225__$1;
(statearr_23232_23263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (15))){
var inst_23215 = (state_23225[(2)]);
var state_23225__$1 = state_23225;
var statearr_23233_23264 = state_23225__$1;
(statearr_23233_23264[(2)] = inst_23215);

(statearr_23233_23264[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (13))){
var state_23225__$1 = state_23225;
var statearr_23234_23265 = state_23225__$1;
(statearr_23234_23265[(2)] = null);

(statearr_23234_23265[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (6))){
var inst_23190 = (state_23225[(8)]);
var inst_23211 = (inst_23190 > (0));
var state_23225__$1 = state_23225;
if(cljs.core.truth_(inst_23211)){
var statearr_23235_23266 = state_23225__$1;
(statearr_23235_23266[(1)] = (12));

} else {
var statearr_23236_23267 = state_23225__$1;
(statearr_23236_23267[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (3))){
var inst_23223 = (state_23225[(2)]);
var state_23225__$1 = state_23225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23225__$1,inst_23223);
} else {
if((state_val_23226 === (12))){
var inst_23189 = (state_23225[(7)]);
var inst_23213 = cljs.core.vec.call(null,inst_23189);
var state_23225__$1 = state_23225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23225__$1,(15),out,inst_23213);
} else {
if((state_val_23226 === (2))){
var state_23225__$1 = state_23225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23225__$1,(4),ch);
} else {
if((state_val_23226 === (11))){
var inst_23205 = (state_23225[(2)]);
var inst_23206 = (new Array(n));
var inst_23189 = inst_23206;
var inst_23190 = (0);
var state_23225__$1 = (function (){var statearr_23237 = state_23225;
(statearr_23237[(7)] = inst_23189);

(statearr_23237[(10)] = inst_23205);

(statearr_23237[(8)] = inst_23190);

return statearr_23237;
})();
var statearr_23238_23268 = state_23225__$1;
(statearr_23238_23268[(2)] = null);

(statearr_23238_23268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (9))){
var inst_23189 = (state_23225[(7)]);
var inst_23203 = cljs.core.vec.call(null,inst_23189);
var state_23225__$1 = state_23225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23225__$1,(11),out,inst_23203);
} else {
if((state_val_23226 === (5))){
var inst_23189 = (state_23225[(7)]);
var inst_23198 = (state_23225[(11)]);
var inst_23193 = (state_23225[(9)]);
var inst_23190 = (state_23225[(8)]);
var inst_23197 = (inst_23189[inst_23190] = inst_23193);
var inst_23198__$1 = (inst_23190 + (1));
var inst_23199 = (inst_23198__$1 < n);
var state_23225__$1 = (function (){var statearr_23239 = state_23225;
(statearr_23239[(12)] = inst_23197);

(statearr_23239[(11)] = inst_23198__$1);

return statearr_23239;
})();
if(cljs.core.truth_(inst_23199)){
var statearr_23240_23269 = state_23225__$1;
(statearr_23240_23269[(1)] = (8));

} else {
var statearr_23241_23270 = state_23225__$1;
(statearr_23241_23270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (14))){
var inst_23218 = (state_23225[(2)]);
var inst_23219 = cljs.core.async.close_BANG_.call(null,out);
var state_23225__$1 = (function (){var statearr_23243 = state_23225;
(statearr_23243[(13)] = inst_23218);

return statearr_23243;
})();
var statearr_23244_23271 = state_23225__$1;
(statearr_23244_23271[(2)] = inst_23219);

(statearr_23244_23271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (10))){
var inst_23209 = (state_23225[(2)]);
var state_23225__$1 = state_23225;
var statearr_23245_23272 = state_23225__$1;
(statearr_23245_23272[(2)] = inst_23209);

(statearr_23245_23272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23226 === (8))){
var inst_23189 = (state_23225[(7)]);
var inst_23198 = (state_23225[(11)]);
var tmp23242 = inst_23189;
var inst_23189__$1 = tmp23242;
var inst_23190 = inst_23198;
var state_23225__$1 = (function (){var statearr_23246 = state_23225;
(statearr_23246[(7)] = inst_23189__$1);

(statearr_23246[(8)] = inst_23190);

return statearr_23246;
})();
var statearr_23247_23273 = state_23225__$1;
(statearr_23247_23273[(2)] = null);

(statearr_23247_23273[(1)] = (2));


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
});})(c__20599__auto___23259,out))
;
return ((function (switch__20534__auto__,c__20599__auto___23259,out){
return (function() {
var cljs$core$async$state_machine__20535__auto__ = null;
var cljs$core$async$state_machine__20535__auto____0 = (function (){
var statearr_23251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23251[(0)] = cljs$core$async$state_machine__20535__auto__);

(statearr_23251[(1)] = (1));

return statearr_23251;
});
var cljs$core$async$state_machine__20535__auto____1 = (function (state_23225){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_23225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e23252){if((e23252 instanceof Object)){
var ex__20538__auto__ = e23252;
var statearr_23253_23274 = state_23225;
(statearr_23253_23274[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23275 = state_23225;
state_23225 = G__23275;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
cljs$core$async$state_machine__20535__auto__ = function(state_23225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20535__auto____1.call(this,state_23225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20535__auto____0;
cljs$core$async$state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20535__auto____1;
return cljs$core$async$state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto___23259,out))
})();
var state__20601__auto__ = (function (){var statearr_23254 = f__20600__auto__.call(null);
(statearr_23254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto___23259);

return statearr_23254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto___23259,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23276 = [];
var len__19502__auto___23350 = arguments.length;
var i__19503__auto___23351 = (0);
while(true){
if((i__19503__auto___23351 < len__19502__auto___23350)){
args23276.push((arguments[i__19503__auto___23351]));

var G__23352 = (i__19503__auto___23351 + (1));
i__19503__auto___23351 = G__23352;
continue;
} else {
}
break;
}

var G__23278 = args23276.length;
switch (G__23278) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23276.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20599__auto___23354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto___23354,out){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto___23354,out){
return (function (state_23320){
var state_val_23321 = (state_23320[(1)]);
if((state_val_23321 === (7))){
var inst_23316 = (state_23320[(2)]);
var state_23320__$1 = state_23320;
var statearr_23322_23355 = state_23320__$1;
(statearr_23322_23355[(2)] = inst_23316);

(statearr_23322_23355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (1))){
var inst_23279 = [];
var inst_23280 = inst_23279;
var inst_23281 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23320__$1 = (function (){var statearr_23323 = state_23320;
(statearr_23323[(7)] = inst_23281);

(statearr_23323[(8)] = inst_23280);

return statearr_23323;
})();
var statearr_23324_23356 = state_23320__$1;
(statearr_23324_23356[(2)] = null);

(statearr_23324_23356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (4))){
var inst_23284 = (state_23320[(9)]);
var inst_23284__$1 = (state_23320[(2)]);
var inst_23285 = (inst_23284__$1 == null);
var inst_23286 = cljs.core.not.call(null,inst_23285);
var state_23320__$1 = (function (){var statearr_23325 = state_23320;
(statearr_23325[(9)] = inst_23284__$1);

return statearr_23325;
})();
if(inst_23286){
var statearr_23326_23357 = state_23320__$1;
(statearr_23326_23357[(1)] = (5));

} else {
var statearr_23327_23358 = state_23320__$1;
(statearr_23327_23358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (15))){
var inst_23310 = (state_23320[(2)]);
var state_23320__$1 = state_23320;
var statearr_23328_23359 = state_23320__$1;
(statearr_23328_23359[(2)] = inst_23310);

(statearr_23328_23359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (13))){
var state_23320__$1 = state_23320;
var statearr_23329_23360 = state_23320__$1;
(statearr_23329_23360[(2)] = null);

(statearr_23329_23360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (6))){
var inst_23280 = (state_23320[(8)]);
var inst_23305 = inst_23280.length;
var inst_23306 = (inst_23305 > (0));
var state_23320__$1 = state_23320;
if(cljs.core.truth_(inst_23306)){
var statearr_23330_23361 = state_23320__$1;
(statearr_23330_23361[(1)] = (12));

} else {
var statearr_23331_23362 = state_23320__$1;
(statearr_23331_23362[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (3))){
var inst_23318 = (state_23320[(2)]);
var state_23320__$1 = state_23320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23320__$1,inst_23318);
} else {
if((state_val_23321 === (12))){
var inst_23280 = (state_23320[(8)]);
var inst_23308 = cljs.core.vec.call(null,inst_23280);
var state_23320__$1 = state_23320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23320__$1,(15),out,inst_23308);
} else {
if((state_val_23321 === (2))){
var state_23320__$1 = state_23320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23320__$1,(4),ch);
} else {
if((state_val_23321 === (11))){
var inst_23288 = (state_23320[(10)]);
var inst_23284 = (state_23320[(9)]);
var inst_23298 = (state_23320[(2)]);
var inst_23299 = [];
var inst_23300 = inst_23299.push(inst_23284);
var inst_23280 = inst_23299;
var inst_23281 = inst_23288;
var state_23320__$1 = (function (){var statearr_23332 = state_23320;
(statearr_23332[(11)] = inst_23298);

(statearr_23332[(12)] = inst_23300);

(statearr_23332[(7)] = inst_23281);

(statearr_23332[(8)] = inst_23280);

return statearr_23332;
})();
var statearr_23333_23363 = state_23320__$1;
(statearr_23333_23363[(2)] = null);

(statearr_23333_23363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (9))){
var inst_23280 = (state_23320[(8)]);
var inst_23296 = cljs.core.vec.call(null,inst_23280);
var state_23320__$1 = state_23320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23320__$1,(11),out,inst_23296);
} else {
if((state_val_23321 === (5))){
var inst_23288 = (state_23320[(10)]);
var inst_23284 = (state_23320[(9)]);
var inst_23281 = (state_23320[(7)]);
var inst_23288__$1 = f.call(null,inst_23284);
var inst_23289 = cljs.core._EQ_.call(null,inst_23288__$1,inst_23281);
var inst_23290 = cljs.core.keyword_identical_QMARK_.call(null,inst_23281,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23291 = (inst_23289) || (inst_23290);
var state_23320__$1 = (function (){var statearr_23334 = state_23320;
(statearr_23334[(10)] = inst_23288__$1);

return statearr_23334;
})();
if(cljs.core.truth_(inst_23291)){
var statearr_23335_23364 = state_23320__$1;
(statearr_23335_23364[(1)] = (8));

} else {
var statearr_23336_23365 = state_23320__$1;
(statearr_23336_23365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (14))){
var inst_23313 = (state_23320[(2)]);
var inst_23314 = cljs.core.async.close_BANG_.call(null,out);
var state_23320__$1 = (function (){var statearr_23338 = state_23320;
(statearr_23338[(13)] = inst_23313);

return statearr_23338;
})();
var statearr_23339_23366 = state_23320__$1;
(statearr_23339_23366[(2)] = inst_23314);

(statearr_23339_23366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (10))){
var inst_23303 = (state_23320[(2)]);
var state_23320__$1 = state_23320;
var statearr_23340_23367 = state_23320__$1;
(statearr_23340_23367[(2)] = inst_23303);

(statearr_23340_23367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (8))){
var inst_23288 = (state_23320[(10)]);
var inst_23284 = (state_23320[(9)]);
var inst_23280 = (state_23320[(8)]);
var inst_23293 = inst_23280.push(inst_23284);
var tmp23337 = inst_23280;
var inst_23280__$1 = tmp23337;
var inst_23281 = inst_23288;
var state_23320__$1 = (function (){var statearr_23341 = state_23320;
(statearr_23341[(7)] = inst_23281);

(statearr_23341[(8)] = inst_23280__$1);

(statearr_23341[(14)] = inst_23293);

return statearr_23341;
})();
var statearr_23342_23368 = state_23320__$1;
(statearr_23342_23368[(2)] = null);

(statearr_23342_23368[(1)] = (2));


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
});})(c__20599__auto___23354,out))
;
return ((function (switch__20534__auto__,c__20599__auto___23354,out){
return (function() {
var cljs$core$async$state_machine__20535__auto__ = null;
var cljs$core$async$state_machine__20535__auto____0 = (function (){
var statearr_23346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23346[(0)] = cljs$core$async$state_machine__20535__auto__);

(statearr_23346[(1)] = (1));

return statearr_23346;
});
var cljs$core$async$state_machine__20535__auto____1 = (function (state_23320){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_23320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e23347){if((e23347 instanceof Object)){
var ex__20538__auto__ = e23347;
var statearr_23348_23369 = state_23320;
(statearr_23348_23369[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23370 = state_23320;
state_23320 = G__23370;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
cljs$core$async$state_machine__20535__auto__ = function(state_23320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20535__auto____1.call(this,state_23320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20535__auto____0;
cljs$core$async$state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20535__auto____1;
return cljs$core$async$state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto___23354,out))
})();
var state__20601__auto__ = (function (){var statearr_23349 = f__20600__auto__.call(null);
(statearr_23349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto___23354);

return statearr_23349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto___23354,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map