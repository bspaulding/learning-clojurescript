// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18432__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18432__auto__){
return or__18432__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18432__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18432__auto__)){
return or__18432__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__23542_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__23542_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__23547 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__23548 = null;
var count__23549 = (0);
var i__23550 = (0);
while(true){
if((i__23550 < count__23549)){
var n = cljs.core._nth.call(null,chunk__23548,i__23550);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23551 = seq__23547;
var G__23552 = chunk__23548;
var G__23553 = count__23549;
var G__23554 = (i__23550 + (1));
seq__23547 = G__23551;
chunk__23548 = G__23552;
count__23549 = G__23553;
i__23550 = G__23554;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23547);
if(temp__4657__auto__){
var seq__23547__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23547__$1)){
var c__19243__auto__ = cljs.core.chunk_first.call(null,seq__23547__$1);
var G__23555 = cljs.core.chunk_rest.call(null,seq__23547__$1);
var G__23556 = c__19243__auto__;
var G__23557 = cljs.core.count.call(null,c__19243__auto__);
var G__23558 = (0);
seq__23547 = G__23555;
chunk__23548 = G__23556;
count__23549 = G__23557;
i__23550 = G__23558;
continue;
} else {
var n = cljs.core.first.call(null,seq__23547__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23559 = cljs.core.next.call(null,seq__23547__$1);
var G__23560 = null;
var G__23561 = (0);
var G__23562 = (0);
seq__23547 = G__23559;
chunk__23548 = G__23560;
count__23549 = G__23561;
i__23550 = G__23562;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__23601_23608 = cljs.core.seq.call(null,deps);
var chunk__23602_23609 = null;
var count__23603_23610 = (0);
var i__23604_23611 = (0);
while(true){
if((i__23604_23611 < count__23603_23610)){
var dep_23612 = cljs.core._nth.call(null,chunk__23602_23609,i__23604_23611);
topo_sort_helper_STAR_.call(null,dep_23612,(depth + (1)),state);

var G__23613 = seq__23601_23608;
var G__23614 = chunk__23602_23609;
var G__23615 = count__23603_23610;
var G__23616 = (i__23604_23611 + (1));
seq__23601_23608 = G__23613;
chunk__23602_23609 = G__23614;
count__23603_23610 = G__23615;
i__23604_23611 = G__23616;
continue;
} else {
var temp__4657__auto___23617 = cljs.core.seq.call(null,seq__23601_23608);
if(temp__4657__auto___23617){
var seq__23601_23618__$1 = temp__4657__auto___23617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23601_23618__$1)){
var c__19243__auto___23619 = cljs.core.chunk_first.call(null,seq__23601_23618__$1);
var G__23620 = cljs.core.chunk_rest.call(null,seq__23601_23618__$1);
var G__23621 = c__19243__auto___23619;
var G__23622 = cljs.core.count.call(null,c__19243__auto___23619);
var G__23623 = (0);
seq__23601_23608 = G__23620;
chunk__23602_23609 = G__23621;
count__23603_23610 = G__23622;
i__23604_23611 = G__23623;
continue;
} else {
var dep_23624 = cljs.core.first.call(null,seq__23601_23618__$1);
topo_sort_helper_STAR_.call(null,dep_23624,(depth + (1)),state);

var G__23625 = cljs.core.next.call(null,seq__23601_23618__$1);
var G__23626 = null;
var G__23627 = (0);
var G__23628 = (0);
seq__23601_23608 = G__23625;
chunk__23602_23609 = G__23626;
count__23603_23610 = G__23627;
i__23604_23611 = G__23628;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__23605){
var vec__23607 = p__23605;
var x = cljs.core.nth.call(null,vec__23607,(0),null);
var xs = cljs.core.nthnext.call(null,vec__23607,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__23607,x,xs,get_deps__$1){
return (function (p1__23563_SHARP_){
return clojure.set.difference.call(null,p1__23563_SHARP_,x);
});})(vec__23607,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__23641 = cljs.core.seq.call(null,provides);
var chunk__23642 = null;
var count__23643 = (0);
var i__23644 = (0);
while(true){
if((i__23644 < count__23643)){
var prov = cljs.core._nth.call(null,chunk__23642,i__23644);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23645_23653 = cljs.core.seq.call(null,requires);
var chunk__23646_23654 = null;
var count__23647_23655 = (0);
var i__23648_23656 = (0);
while(true){
if((i__23648_23656 < count__23647_23655)){
var req_23657 = cljs.core._nth.call(null,chunk__23646_23654,i__23648_23656);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23657,prov);

var G__23658 = seq__23645_23653;
var G__23659 = chunk__23646_23654;
var G__23660 = count__23647_23655;
var G__23661 = (i__23648_23656 + (1));
seq__23645_23653 = G__23658;
chunk__23646_23654 = G__23659;
count__23647_23655 = G__23660;
i__23648_23656 = G__23661;
continue;
} else {
var temp__4657__auto___23662 = cljs.core.seq.call(null,seq__23645_23653);
if(temp__4657__auto___23662){
var seq__23645_23663__$1 = temp__4657__auto___23662;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23645_23663__$1)){
var c__19243__auto___23664 = cljs.core.chunk_first.call(null,seq__23645_23663__$1);
var G__23665 = cljs.core.chunk_rest.call(null,seq__23645_23663__$1);
var G__23666 = c__19243__auto___23664;
var G__23667 = cljs.core.count.call(null,c__19243__auto___23664);
var G__23668 = (0);
seq__23645_23653 = G__23665;
chunk__23646_23654 = G__23666;
count__23647_23655 = G__23667;
i__23648_23656 = G__23668;
continue;
} else {
var req_23669 = cljs.core.first.call(null,seq__23645_23663__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23669,prov);

var G__23670 = cljs.core.next.call(null,seq__23645_23663__$1);
var G__23671 = null;
var G__23672 = (0);
var G__23673 = (0);
seq__23645_23653 = G__23670;
chunk__23646_23654 = G__23671;
count__23647_23655 = G__23672;
i__23648_23656 = G__23673;
continue;
}
} else {
}
}
break;
}

var G__23674 = seq__23641;
var G__23675 = chunk__23642;
var G__23676 = count__23643;
var G__23677 = (i__23644 + (1));
seq__23641 = G__23674;
chunk__23642 = G__23675;
count__23643 = G__23676;
i__23644 = G__23677;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23641);
if(temp__4657__auto__){
var seq__23641__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23641__$1)){
var c__19243__auto__ = cljs.core.chunk_first.call(null,seq__23641__$1);
var G__23678 = cljs.core.chunk_rest.call(null,seq__23641__$1);
var G__23679 = c__19243__auto__;
var G__23680 = cljs.core.count.call(null,c__19243__auto__);
var G__23681 = (0);
seq__23641 = G__23678;
chunk__23642 = G__23679;
count__23643 = G__23680;
i__23644 = G__23681;
continue;
} else {
var prov = cljs.core.first.call(null,seq__23641__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23649_23682 = cljs.core.seq.call(null,requires);
var chunk__23650_23683 = null;
var count__23651_23684 = (0);
var i__23652_23685 = (0);
while(true){
if((i__23652_23685 < count__23651_23684)){
var req_23686 = cljs.core._nth.call(null,chunk__23650_23683,i__23652_23685);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23686,prov);

var G__23687 = seq__23649_23682;
var G__23688 = chunk__23650_23683;
var G__23689 = count__23651_23684;
var G__23690 = (i__23652_23685 + (1));
seq__23649_23682 = G__23687;
chunk__23650_23683 = G__23688;
count__23651_23684 = G__23689;
i__23652_23685 = G__23690;
continue;
} else {
var temp__4657__auto___23691__$1 = cljs.core.seq.call(null,seq__23649_23682);
if(temp__4657__auto___23691__$1){
var seq__23649_23692__$1 = temp__4657__auto___23691__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23649_23692__$1)){
var c__19243__auto___23693 = cljs.core.chunk_first.call(null,seq__23649_23692__$1);
var G__23694 = cljs.core.chunk_rest.call(null,seq__23649_23692__$1);
var G__23695 = c__19243__auto___23693;
var G__23696 = cljs.core.count.call(null,c__19243__auto___23693);
var G__23697 = (0);
seq__23649_23682 = G__23694;
chunk__23650_23683 = G__23695;
count__23651_23684 = G__23696;
i__23652_23685 = G__23697;
continue;
} else {
var req_23698 = cljs.core.first.call(null,seq__23649_23692__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23698,prov);

var G__23699 = cljs.core.next.call(null,seq__23649_23692__$1);
var G__23700 = null;
var G__23701 = (0);
var G__23702 = (0);
seq__23649_23682 = G__23699;
chunk__23650_23683 = G__23700;
count__23651_23684 = G__23701;
i__23652_23685 = G__23702;
continue;
}
} else {
}
}
break;
}

var G__23703 = cljs.core.next.call(null,seq__23641__$1);
var G__23704 = null;
var G__23705 = (0);
var G__23706 = (0);
seq__23641 = G__23703;
chunk__23642 = G__23704;
count__23643 = G__23705;
i__23644 = G__23706;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__23711_23715 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__23712_23716 = null;
var count__23713_23717 = (0);
var i__23714_23718 = (0);
while(true){
if((i__23714_23718 < count__23713_23717)){
var ns_23719 = cljs.core._nth.call(null,chunk__23712_23716,i__23714_23718);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23719);

var G__23720 = seq__23711_23715;
var G__23721 = chunk__23712_23716;
var G__23722 = count__23713_23717;
var G__23723 = (i__23714_23718 + (1));
seq__23711_23715 = G__23720;
chunk__23712_23716 = G__23721;
count__23713_23717 = G__23722;
i__23714_23718 = G__23723;
continue;
} else {
var temp__4657__auto___23724 = cljs.core.seq.call(null,seq__23711_23715);
if(temp__4657__auto___23724){
var seq__23711_23725__$1 = temp__4657__auto___23724;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23711_23725__$1)){
var c__19243__auto___23726 = cljs.core.chunk_first.call(null,seq__23711_23725__$1);
var G__23727 = cljs.core.chunk_rest.call(null,seq__23711_23725__$1);
var G__23728 = c__19243__auto___23726;
var G__23729 = cljs.core.count.call(null,c__19243__auto___23726);
var G__23730 = (0);
seq__23711_23715 = G__23727;
chunk__23712_23716 = G__23728;
count__23713_23717 = G__23729;
i__23714_23718 = G__23730;
continue;
} else {
var ns_23731 = cljs.core.first.call(null,seq__23711_23725__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23731);

var G__23732 = cljs.core.next.call(null,seq__23711_23725__$1);
var G__23733 = null;
var G__23734 = (0);
var G__23735 = (0);
seq__23711_23715 = G__23732;
chunk__23712_23716 = G__23733;
count__23713_23717 = G__23734;
i__23714_23718 = G__23735;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18432__auto__ = goog.require__;
if(cljs.core.truth_(or__18432__auto__)){
return or__18432__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__23736__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__23736 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23737__i = 0, G__23737__a = new Array(arguments.length -  0);
while (G__23737__i < G__23737__a.length) {G__23737__a[G__23737__i] = arguments[G__23737__i + 0]; ++G__23737__i;}
  args = new cljs.core.IndexedSeq(G__23737__a,0);
} 
return G__23736__delegate.call(this,args);};
G__23736.cljs$lang$maxFixedArity = 0;
G__23736.cljs$lang$applyTo = (function (arglist__23738){
var args = cljs.core.seq(arglist__23738);
return G__23736__delegate(args);
});
G__23736.cljs$core$IFn$_invoke$arity$variadic = G__23736__delegate;
return G__23736;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__23740 = cljs.core._EQ_;
var expr__23741 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__23740.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__23741))){
var path_parts = ((function (pred__23740,expr__23741){
return (function (p1__23739_SHARP_){
return clojure.string.split.call(null,p1__23739_SHARP_,/[\/\\]/);
});})(pred__23740,expr__23741))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__23740,expr__23741){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e23743){if((e23743 instanceof Error)){
var e = e23743;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23743;

}
}})());
});
;})(path_parts,sep,root,pred__23740,expr__23741))
} else {
if(cljs.core.truth_(pred__23740.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__23741))){
return ((function (pred__23740,expr__23741){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__23740,expr__23741){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__23740,expr__23741))
);

return deferred.addErrback(((function (deferred,pred__23740,expr__23741){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__23740,expr__23741))
);
});
;})(pred__23740,expr__23741))
} else {
return ((function (pred__23740,expr__23741){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__23740,expr__23741))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23744,callback){
var map__23747 = p__23744;
var map__23747__$1 = ((((!((map__23747 == null)))?((((map__23747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23747):map__23747);
var file_msg = map__23747__$1;
var request_url = cljs.core.get.call(null,map__23747__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23747,map__23747__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23747,map__23747__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto__){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto__){
return (function (state_23771){
var state_val_23772 = (state_23771[(1)]);
if((state_val_23772 === (7))){
var inst_23767 = (state_23771[(2)]);
var state_23771__$1 = state_23771;
var statearr_23773_23793 = state_23771__$1;
(statearr_23773_23793[(2)] = inst_23767);

(statearr_23773_23793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (1))){
var state_23771__$1 = state_23771;
var statearr_23774_23794 = state_23771__$1;
(statearr_23774_23794[(2)] = null);

(statearr_23774_23794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (4))){
var inst_23751 = (state_23771[(7)]);
var inst_23751__$1 = (state_23771[(2)]);
var state_23771__$1 = (function (){var statearr_23775 = state_23771;
(statearr_23775[(7)] = inst_23751__$1);

return statearr_23775;
})();
if(cljs.core.truth_(inst_23751__$1)){
var statearr_23776_23795 = state_23771__$1;
(statearr_23776_23795[(1)] = (5));

} else {
var statearr_23777_23796 = state_23771__$1;
(statearr_23777_23796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (6))){
var state_23771__$1 = state_23771;
var statearr_23778_23797 = state_23771__$1;
(statearr_23778_23797[(2)] = null);

(statearr_23778_23797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (3))){
var inst_23769 = (state_23771[(2)]);
var state_23771__$1 = state_23771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23771__$1,inst_23769);
} else {
if((state_val_23772 === (2))){
var state_23771__$1 = state_23771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23771__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_23772 === (11))){
var inst_23763 = (state_23771[(2)]);
var state_23771__$1 = (function (){var statearr_23779 = state_23771;
(statearr_23779[(8)] = inst_23763);

return statearr_23779;
})();
var statearr_23780_23798 = state_23771__$1;
(statearr_23780_23798[(2)] = null);

(statearr_23780_23798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (9))){
var inst_23755 = (state_23771[(9)]);
var inst_23757 = (state_23771[(10)]);
var inst_23759 = inst_23757.call(null,inst_23755);
var state_23771__$1 = state_23771;
var statearr_23781_23799 = state_23771__$1;
(statearr_23781_23799[(2)] = inst_23759);

(statearr_23781_23799[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (5))){
var inst_23751 = (state_23771[(7)]);
var inst_23753 = figwheel.client.file_reloading.blocking_load.call(null,inst_23751);
var state_23771__$1 = state_23771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23771__$1,(8),inst_23753);
} else {
if((state_val_23772 === (10))){
var inst_23755 = (state_23771[(9)]);
var inst_23761 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_23755);
var state_23771__$1 = state_23771;
var statearr_23782_23800 = state_23771__$1;
(statearr_23782_23800[(2)] = inst_23761);

(statearr_23782_23800[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23772 === (8))){
var inst_23757 = (state_23771[(10)]);
var inst_23751 = (state_23771[(7)]);
var inst_23755 = (state_23771[(2)]);
var inst_23756 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_23757__$1 = cljs.core.get.call(null,inst_23756,inst_23751);
var state_23771__$1 = (function (){var statearr_23783 = state_23771;
(statearr_23783[(9)] = inst_23755);

(statearr_23783[(10)] = inst_23757__$1);

return statearr_23783;
})();
if(cljs.core.truth_(inst_23757__$1)){
var statearr_23784_23801 = state_23771__$1;
(statearr_23784_23801[(1)] = (9));

} else {
var statearr_23785_23802 = state_23771__$1;
(statearr_23785_23802[(1)] = (10));

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
});})(c__20599__auto__))
;
return ((function (switch__20534__auto__,c__20599__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20535__auto__ = null;
var figwheel$client$file_reloading$state_machine__20535__auto____0 = (function (){
var statearr_23789 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23789[(0)] = figwheel$client$file_reloading$state_machine__20535__auto__);

(statearr_23789[(1)] = (1));

return statearr_23789;
});
var figwheel$client$file_reloading$state_machine__20535__auto____1 = (function (state_23771){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_23771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e23790){if((e23790 instanceof Object)){
var ex__20538__auto__ = e23790;
var statearr_23791_23803 = state_23771;
(statearr_23791_23803[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23804 = state_23771;
state_23771 = G__23804;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20535__auto__ = function(state_23771){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20535__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20535__auto____1.call(this,state_23771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20535__auto____0;
figwheel$client$file_reloading$state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20535__auto____1;
return figwheel$client$file_reloading$state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto__))
})();
var state__20601__auto__ = (function (){var statearr_23792 = f__20600__auto__.call(null);
(statearr_23792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto__);

return statearr_23792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto__))
);

return c__20599__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__23805,callback){
var map__23808 = p__23805;
var map__23808__$1 = ((((!((map__23808 == null)))?((((map__23808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23808):map__23808);
var file_msg = map__23808__$1;
var namespace = cljs.core.get.call(null,map__23808__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__23808,map__23808__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__23808,map__23808__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23810){
var map__23813 = p__23810;
var map__23813__$1 = ((((!((map__23813 == null)))?((((map__23813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23813):map__23813);
var file_msg = map__23813__$1;
var namespace = cljs.core.get.call(null,map__23813__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18420__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18420__auto__){
var or__18432__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18432__auto__)){
return or__18432__auto__;
} else {
var or__18432__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18432__auto____$1)){
return or__18432__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18420__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23815,callback){
var map__23818 = p__23815;
var map__23818__$1 = ((((!((map__23818 == null)))?((((map__23818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23818):map__23818);
var file_msg = map__23818__$1;
var request_url = cljs.core.get.call(null,map__23818__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23818__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20599__auto___23906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto___23906,out){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto___23906,out){
return (function (state_23888){
var state_val_23889 = (state_23888[(1)]);
if((state_val_23889 === (1))){
var inst_23866 = cljs.core.nth.call(null,files,(0),null);
var inst_23867 = cljs.core.nthnext.call(null,files,(1));
var inst_23868 = files;
var state_23888__$1 = (function (){var statearr_23890 = state_23888;
(statearr_23890[(7)] = inst_23868);

(statearr_23890[(8)] = inst_23867);

(statearr_23890[(9)] = inst_23866);

return statearr_23890;
})();
var statearr_23891_23907 = state_23888__$1;
(statearr_23891_23907[(2)] = null);

(statearr_23891_23907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23889 === (2))){
var inst_23871 = (state_23888[(10)]);
var inst_23868 = (state_23888[(7)]);
var inst_23871__$1 = cljs.core.nth.call(null,inst_23868,(0),null);
var inst_23872 = cljs.core.nthnext.call(null,inst_23868,(1));
var inst_23873 = (inst_23871__$1 == null);
var inst_23874 = cljs.core.not.call(null,inst_23873);
var state_23888__$1 = (function (){var statearr_23892 = state_23888;
(statearr_23892[(10)] = inst_23871__$1);

(statearr_23892[(11)] = inst_23872);

return statearr_23892;
})();
if(inst_23874){
var statearr_23893_23908 = state_23888__$1;
(statearr_23893_23908[(1)] = (4));

} else {
var statearr_23894_23909 = state_23888__$1;
(statearr_23894_23909[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23889 === (3))){
var inst_23886 = (state_23888[(2)]);
var state_23888__$1 = state_23888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23888__$1,inst_23886);
} else {
if((state_val_23889 === (4))){
var inst_23871 = (state_23888[(10)]);
var inst_23876 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23871);
var state_23888__$1 = state_23888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23888__$1,(7),inst_23876);
} else {
if((state_val_23889 === (5))){
var inst_23882 = cljs.core.async.close_BANG_.call(null,out);
var state_23888__$1 = state_23888;
var statearr_23895_23910 = state_23888__$1;
(statearr_23895_23910[(2)] = inst_23882);

(statearr_23895_23910[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23889 === (6))){
var inst_23884 = (state_23888[(2)]);
var state_23888__$1 = state_23888;
var statearr_23896_23911 = state_23888__$1;
(statearr_23896_23911[(2)] = inst_23884);

(statearr_23896_23911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23889 === (7))){
var inst_23872 = (state_23888[(11)]);
var inst_23878 = (state_23888[(2)]);
var inst_23879 = cljs.core.async.put_BANG_.call(null,out,inst_23878);
var inst_23868 = inst_23872;
var state_23888__$1 = (function (){var statearr_23897 = state_23888;
(statearr_23897[(7)] = inst_23868);

(statearr_23897[(12)] = inst_23879);

return statearr_23897;
})();
var statearr_23898_23912 = state_23888__$1;
(statearr_23898_23912[(2)] = null);

(statearr_23898_23912[(1)] = (2));


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
});})(c__20599__auto___23906,out))
;
return ((function (switch__20534__auto__,c__20599__auto___23906,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20535__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20535__auto____0 = (function (){
var statearr_23902 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23902[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20535__auto__);

(statearr_23902[(1)] = (1));

return statearr_23902;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20535__auto____1 = (function (state_23888){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_23888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e23903){if((e23903 instanceof Object)){
var ex__20538__auto__ = e23903;
var statearr_23904_23913 = state_23888;
(statearr_23904_23913[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23914 = state_23888;
state_23888 = G__23914;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20535__auto__ = function(state_23888){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20535__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20535__auto____1.call(this,state_23888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20535__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20535__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto___23906,out))
})();
var state__20601__auto__ = (function (){var statearr_23905 = f__20600__auto__.call(null);
(statearr_23905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto___23906);

return statearr_23905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto___23906,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23915,opts){
var map__23919 = p__23915;
var map__23919__$1 = ((((!((map__23919 == null)))?((((map__23919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23919):map__23919);
var eval_body__$1 = cljs.core.get.call(null,map__23919__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23919__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18420__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18420__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18420__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23921){var e = e23921;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__23922_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23922_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__23927){
var vec__23928 = p__23927;
var k = cljs.core.nth.call(null,vec__23928,(0),null);
var v = cljs.core.nth.call(null,vec__23928,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__23929){
var vec__23930 = p__23929;
var k = cljs.core.nth.call(null,vec__23930,(0),null);
var v = cljs.core.nth.call(null,vec__23930,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23934,p__23935){
var map__24182 = p__23934;
var map__24182__$1 = ((((!((map__24182 == null)))?((((map__24182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24182):map__24182);
var opts = map__24182__$1;
var before_jsload = cljs.core.get.call(null,map__24182__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24182__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__24182__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__24183 = p__23935;
var map__24183__$1 = ((((!((map__24183 == null)))?((((map__24183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24183):map__24183);
var msg = map__24183__$1;
var files = cljs.core.get.call(null,map__24183__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__24183__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__24183__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto__,map__24182,map__24182__$1,opts,before_jsload,on_jsload,reload_dependents,map__24183,map__24183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto__,map__24182,map__24182__$1,opts,before_jsload,on_jsload,reload_dependents,map__24183,map__24183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_24336){
var state_val_24337 = (state_24336[(1)]);
if((state_val_24337 === (7))){
var inst_24200 = (state_24336[(7)]);
var inst_24199 = (state_24336[(8)]);
var inst_24198 = (state_24336[(9)]);
var inst_24197 = (state_24336[(10)]);
var inst_24205 = cljs.core._nth.call(null,inst_24198,inst_24200);
var inst_24206 = figwheel.client.file_reloading.eval_body.call(null,inst_24205,opts);
var inst_24207 = (inst_24200 + (1));
var tmp24338 = inst_24199;
var tmp24339 = inst_24198;
var tmp24340 = inst_24197;
var inst_24197__$1 = tmp24340;
var inst_24198__$1 = tmp24339;
var inst_24199__$1 = tmp24338;
var inst_24200__$1 = inst_24207;
var state_24336__$1 = (function (){var statearr_24341 = state_24336;
(statearr_24341[(11)] = inst_24206);

(statearr_24341[(7)] = inst_24200__$1);

(statearr_24341[(8)] = inst_24199__$1);

(statearr_24341[(9)] = inst_24198__$1);

(statearr_24341[(10)] = inst_24197__$1);

return statearr_24341;
})();
var statearr_24342_24428 = state_24336__$1;
(statearr_24342_24428[(2)] = null);

(statearr_24342_24428[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (20))){
var inst_24240 = (state_24336[(12)]);
var inst_24248 = figwheel.client.file_reloading.sort_files.call(null,inst_24240);
var state_24336__$1 = state_24336;
var statearr_24343_24429 = state_24336__$1;
(statearr_24343_24429[(2)] = inst_24248);

(statearr_24343_24429[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (27))){
var state_24336__$1 = state_24336;
var statearr_24344_24430 = state_24336__$1;
(statearr_24344_24430[(2)] = null);

(statearr_24344_24430[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (1))){
var inst_24189 = (state_24336[(13)]);
var inst_24186 = before_jsload.call(null,files);
var inst_24187 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24188 = (function (){return ((function (inst_24189,inst_24186,inst_24187,state_val_24337,c__20599__auto__,map__24182,map__24182__$1,opts,before_jsload,on_jsload,reload_dependents,map__24183,map__24183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23931_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23931_SHARP_);
});
;})(inst_24189,inst_24186,inst_24187,state_val_24337,c__20599__auto__,map__24182,map__24182__$1,opts,before_jsload,on_jsload,reload_dependents,map__24183,map__24183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24189__$1 = cljs.core.filter.call(null,inst_24188,files);
var inst_24190 = cljs.core.not_empty.call(null,inst_24189__$1);
var state_24336__$1 = (function (){var statearr_24345 = state_24336;
(statearr_24345[(13)] = inst_24189__$1);

(statearr_24345[(14)] = inst_24186);

(statearr_24345[(15)] = inst_24187);

return statearr_24345;
})();
if(cljs.core.truth_(inst_24190)){
var statearr_24346_24431 = state_24336__$1;
(statearr_24346_24431[(1)] = (2));

} else {
var statearr_24347_24432 = state_24336__$1;
(statearr_24347_24432[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (24))){
var state_24336__$1 = state_24336;
var statearr_24348_24433 = state_24336__$1;
(statearr_24348_24433[(2)] = null);

(statearr_24348_24433[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (39))){
var inst_24290 = (state_24336[(16)]);
var state_24336__$1 = state_24336;
var statearr_24349_24434 = state_24336__$1;
(statearr_24349_24434[(2)] = inst_24290);

(statearr_24349_24434[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (46))){
var inst_24331 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
var statearr_24350_24435 = state_24336__$1;
(statearr_24350_24435[(2)] = inst_24331);

(statearr_24350_24435[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (4))){
var inst_24234 = (state_24336[(2)]);
var inst_24235 = cljs.core.List.EMPTY;
var inst_24236 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_24235);
var inst_24237 = (function (){return ((function (inst_24234,inst_24235,inst_24236,state_val_24337,c__20599__auto__,map__24182,map__24182__$1,opts,before_jsload,on_jsload,reload_dependents,map__24183,map__24183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23932_SHARP_){
var and__18420__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23932_SHARP_);
if(cljs.core.truth_(and__18420__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23932_SHARP_));
} else {
return and__18420__auto__;
}
});
;})(inst_24234,inst_24235,inst_24236,state_val_24337,c__20599__auto__,map__24182,map__24182__$1,opts,before_jsload,on_jsload,reload_dependents,map__24183,map__24183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24238 = cljs.core.filter.call(null,inst_24237,files);
var inst_24239 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_24240 = cljs.core.concat.call(null,inst_24238,inst_24239);
var state_24336__$1 = (function (){var statearr_24351 = state_24336;
(statearr_24351[(12)] = inst_24240);

(statearr_24351[(17)] = inst_24236);

(statearr_24351[(18)] = inst_24234);

return statearr_24351;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_24352_24436 = state_24336__$1;
(statearr_24352_24436[(1)] = (16));

} else {
var statearr_24353_24437 = state_24336__$1;
(statearr_24353_24437[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (15))){
var inst_24224 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
var statearr_24354_24438 = state_24336__$1;
(statearr_24354_24438[(2)] = inst_24224);

(statearr_24354_24438[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (21))){
var inst_24250 = (state_24336[(19)]);
var inst_24250__$1 = (state_24336[(2)]);
var inst_24251 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24250__$1);
var state_24336__$1 = (function (){var statearr_24355 = state_24336;
(statearr_24355[(19)] = inst_24250__$1);

return statearr_24355;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24336__$1,(22),inst_24251);
} else {
if((state_val_24337 === (31))){
var inst_24334 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24336__$1,inst_24334);
} else {
if((state_val_24337 === (32))){
var inst_24290 = (state_24336[(16)]);
var inst_24295 = inst_24290.cljs$lang$protocol_mask$partition0$;
var inst_24296 = (inst_24295 & (64));
var inst_24297 = inst_24290.cljs$core$ISeq$;
var inst_24298 = (inst_24296) || (inst_24297);
var state_24336__$1 = state_24336;
if(cljs.core.truth_(inst_24298)){
var statearr_24356_24439 = state_24336__$1;
(statearr_24356_24439[(1)] = (35));

} else {
var statearr_24357_24440 = state_24336__$1;
(statearr_24357_24440[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (40))){
var inst_24311 = (state_24336[(20)]);
var inst_24310 = (state_24336[(2)]);
var inst_24311__$1 = cljs.core.get.call(null,inst_24310,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24312 = cljs.core.get.call(null,inst_24310,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24313 = cljs.core.not_empty.call(null,inst_24311__$1);
var state_24336__$1 = (function (){var statearr_24358 = state_24336;
(statearr_24358[(20)] = inst_24311__$1);

(statearr_24358[(21)] = inst_24312);

return statearr_24358;
})();
if(cljs.core.truth_(inst_24313)){
var statearr_24359_24441 = state_24336__$1;
(statearr_24359_24441[(1)] = (41));

} else {
var statearr_24360_24442 = state_24336__$1;
(statearr_24360_24442[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (33))){
var state_24336__$1 = state_24336;
var statearr_24361_24443 = state_24336__$1;
(statearr_24361_24443[(2)] = false);

(statearr_24361_24443[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (13))){
var inst_24210 = (state_24336[(22)]);
var inst_24214 = cljs.core.chunk_first.call(null,inst_24210);
var inst_24215 = cljs.core.chunk_rest.call(null,inst_24210);
var inst_24216 = cljs.core.count.call(null,inst_24214);
var inst_24197 = inst_24215;
var inst_24198 = inst_24214;
var inst_24199 = inst_24216;
var inst_24200 = (0);
var state_24336__$1 = (function (){var statearr_24362 = state_24336;
(statearr_24362[(7)] = inst_24200);

(statearr_24362[(8)] = inst_24199);

(statearr_24362[(9)] = inst_24198);

(statearr_24362[(10)] = inst_24197);

return statearr_24362;
})();
var statearr_24363_24444 = state_24336__$1;
(statearr_24363_24444[(2)] = null);

(statearr_24363_24444[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (22))){
var inst_24253 = (state_24336[(23)]);
var inst_24258 = (state_24336[(24)]);
var inst_24250 = (state_24336[(19)]);
var inst_24254 = (state_24336[(25)]);
var inst_24253__$1 = (state_24336[(2)]);
var inst_24254__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24253__$1);
var inst_24255 = (function (){var all_files = inst_24250;
var res_SINGLEQUOTE_ = inst_24253__$1;
var res = inst_24254__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_24253,inst_24258,inst_24250,inst_24254,inst_24253__$1,inst_24254__$1,state_val_24337,c__20599__auto__,map__24182,map__24182__$1,opts,before_jsload,on_jsload,reload_dependents,map__24183,map__24183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23933_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23933_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_24253,inst_24258,inst_24250,inst_24254,inst_24253__$1,inst_24254__$1,state_val_24337,c__20599__auto__,map__24182,map__24182__$1,opts,before_jsload,on_jsload,reload_dependents,map__24183,map__24183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24256 = cljs.core.filter.call(null,inst_24255,inst_24253__$1);
var inst_24257 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_24258__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24257);
var inst_24259 = cljs.core.not_empty.call(null,inst_24258__$1);
var state_24336__$1 = (function (){var statearr_24364 = state_24336;
(statearr_24364[(23)] = inst_24253__$1);

(statearr_24364[(24)] = inst_24258__$1);

(statearr_24364[(26)] = inst_24256);

(statearr_24364[(25)] = inst_24254__$1);

return statearr_24364;
})();
if(cljs.core.truth_(inst_24259)){
var statearr_24365_24445 = state_24336__$1;
(statearr_24365_24445[(1)] = (23));

} else {
var statearr_24366_24446 = state_24336__$1;
(statearr_24366_24446[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (36))){
var state_24336__$1 = state_24336;
var statearr_24367_24447 = state_24336__$1;
(statearr_24367_24447[(2)] = false);

(statearr_24367_24447[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (41))){
var inst_24311 = (state_24336[(20)]);
var inst_24315 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_24316 = cljs.core.map.call(null,inst_24315,inst_24311);
var inst_24317 = cljs.core.pr_str.call(null,inst_24316);
var inst_24318 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24317)].join('');
var inst_24319 = figwheel.client.utils.log.call(null,inst_24318);
var state_24336__$1 = state_24336;
var statearr_24368_24448 = state_24336__$1;
(statearr_24368_24448[(2)] = inst_24319);

(statearr_24368_24448[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (43))){
var inst_24312 = (state_24336[(21)]);
var inst_24322 = (state_24336[(2)]);
var inst_24323 = cljs.core.not_empty.call(null,inst_24312);
var state_24336__$1 = (function (){var statearr_24369 = state_24336;
(statearr_24369[(27)] = inst_24322);

return statearr_24369;
})();
if(cljs.core.truth_(inst_24323)){
var statearr_24370_24449 = state_24336__$1;
(statearr_24370_24449[(1)] = (44));

} else {
var statearr_24371_24450 = state_24336__$1;
(statearr_24371_24450[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (29))){
var inst_24290 = (state_24336[(16)]);
var inst_24253 = (state_24336[(23)]);
var inst_24258 = (state_24336[(24)]);
var inst_24256 = (state_24336[(26)]);
var inst_24250 = (state_24336[(19)]);
var inst_24254 = (state_24336[(25)]);
var inst_24286 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24289 = (function (){var all_files = inst_24250;
var res_SINGLEQUOTE_ = inst_24253;
var res = inst_24254;
var files_not_loaded = inst_24256;
var dependencies_that_loaded = inst_24258;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24290,inst_24253,inst_24258,inst_24256,inst_24250,inst_24254,inst_24286,state_val_24337,c__20599__auto__,map__24182,map__24182__$1,opts,before_jsload,on_jsload,reload_dependents,map__24183,map__24183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24288){
var map__24372 = p__24288;
var map__24372__$1 = ((((!((map__24372 == null)))?((((map__24372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24372):map__24372);
var namespace = cljs.core.get.call(null,map__24372__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24290,inst_24253,inst_24258,inst_24256,inst_24250,inst_24254,inst_24286,state_val_24337,c__20599__auto__,map__24182,map__24182__$1,opts,before_jsload,on_jsload,reload_dependents,map__24183,map__24183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24290__$1 = cljs.core.group_by.call(null,inst_24289,inst_24256);
var inst_24292 = (inst_24290__$1 == null);
var inst_24293 = cljs.core.not.call(null,inst_24292);
var state_24336__$1 = (function (){var statearr_24374 = state_24336;
(statearr_24374[(28)] = inst_24286);

(statearr_24374[(16)] = inst_24290__$1);

return statearr_24374;
})();
if(inst_24293){
var statearr_24375_24451 = state_24336__$1;
(statearr_24375_24451[(1)] = (32));

} else {
var statearr_24376_24452 = state_24336__$1;
(statearr_24376_24452[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (44))){
var inst_24312 = (state_24336[(21)]);
var inst_24325 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24312);
var inst_24326 = cljs.core.pr_str.call(null,inst_24325);
var inst_24327 = [cljs.core.str("not required: "),cljs.core.str(inst_24326)].join('');
var inst_24328 = figwheel.client.utils.log.call(null,inst_24327);
var state_24336__$1 = state_24336;
var statearr_24377_24453 = state_24336__$1;
(statearr_24377_24453[(2)] = inst_24328);

(statearr_24377_24453[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (6))){
var inst_24231 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
var statearr_24378_24454 = state_24336__$1;
(statearr_24378_24454[(2)] = inst_24231);

(statearr_24378_24454[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (28))){
var inst_24256 = (state_24336[(26)]);
var inst_24283 = (state_24336[(2)]);
var inst_24284 = cljs.core.not_empty.call(null,inst_24256);
var state_24336__$1 = (function (){var statearr_24379 = state_24336;
(statearr_24379[(29)] = inst_24283);

return statearr_24379;
})();
if(cljs.core.truth_(inst_24284)){
var statearr_24380_24455 = state_24336__$1;
(statearr_24380_24455[(1)] = (29));

} else {
var statearr_24381_24456 = state_24336__$1;
(statearr_24381_24456[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (25))){
var inst_24254 = (state_24336[(25)]);
var inst_24270 = (state_24336[(2)]);
var inst_24271 = cljs.core.not_empty.call(null,inst_24254);
var state_24336__$1 = (function (){var statearr_24382 = state_24336;
(statearr_24382[(30)] = inst_24270);

return statearr_24382;
})();
if(cljs.core.truth_(inst_24271)){
var statearr_24383_24457 = state_24336__$1;
(statearr_24383_24457[(1)] = (26));

} else {
var statearr_24384_24458 = state_24336__$1;
(statearr_24384_24458[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (34))){
var inst_24305 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
if(cljs.core.truth_(inst_24305)){
var statearr_24385_24459 = state_24336__$1;
(statearr_24385_24459[(1)] = (38));

} else {
var statearr_24386_24460 = state_24336__$1;
(statearr_24386_24460[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (17))){
var state_24336__$1 = state_24336;
var statearr_24387_24461 = state_24336__$1;
(statearr_24387_24461[(2)] = recompile_dependents);

(statearr_24387_24461[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (3))){
var state_24336__$1 = state_24336;
var statearr_24388_24462 = state_24336__$1;
(statearr_24388_24462[(2)] = null);

(statearr_24388_24462[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (12))){
var inst_24227 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
var statearr_24389_24463 = state_24336__$1;
(statearr_24389_24463[(2)] = inst_24227);

(statearr_24389_24463[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (2))){
var inst_24189 = (state_24336[(13)]);
var inst_24196 = cljs.core.seq.call(null,inst_24189);
var inst_24197 = inst_24196;
var inst_24198 = null;
var inst_24199 = (0);
var inst_24200 = (0);
var state_24336__$1 = (function (){var statearr_24390 = state_24336;
(statearr_24390[(7)] = inst_24200);

(statearr_24390[(8)] = inst_24199);

(statearr_24390[(9)] = inst_24198);

(statearr_24390[(10)] = inst_24197);

return statearr_24390;
})();
var statearr_24391_24464 = state_24336__$1;
(statearr_24391_24464[(2)] = null);

(statearr_24391_24464[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (23))){
var inst_24253 = (state_24336[(23)]);
var inst_24258 = (state_24336[(24)]);
var inst_24256 = (state_24336[(26)]);
var inst_24250 = (state_24336[(19)]);
var inst_24254 = (state_24336[(25)]);
var inst_24261 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_24263 = (function (){var all_files = inst_24250;
var res_SINGLEQUOTE_ = inst_24253;
var res = inst_24254;
var files_not_loaded = inst_24256;
var dependencies_that_loaded = inst_24258;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24253,inst_24258,inst_24256,inst_24250,inst_24254,inst_24261,state_val_24337,c__20599__auto__,map__24182,map__24182__$1,opts,before_jsload,on_jsload,reload_dependents,map__24183,map__24183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24262){
var map__24392 = p__24262;
var map__24392__$1 = ((((!((map__24392 == null)))?((((map__24392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24392):map__24392);
var request_url = cljs.core.get.call(null,map__24392__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24253,inst_24258,inst_24256,inst_24250,inst_24254,inst_24261,state_val_24337,c__20599__auto__,map__24182,map__24182__$1,opts,before_jsload,on_jsload,reload_dependents,map__24183,map__24183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24264 = cljs.core.reverse.call(null,inst_24258);
var inst_24265 = cljs.core.map.call(null,inst_24263,inst_24264);
var inst_24266 = cljs.core.pr_str.call(null,inst_24265);
var inst_24267 = figwheel.client.utils.log.call(null,inst_24266);
var state_24336__$1 = (function (){var statearr_24394 = state_24336;
(statearr_24394[(31)] = inst_24261);

return statearr_24394;
})();
var statearr_24395_24465 = state_24336__$1;
(statearr_24395_24465[(2)] = inst_24267);

(statearr_24395_24465[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (35))){
var state_24336__$1 = state_24336;
var statearr_24396_24466 = state_24336__$1;
(statearr_24396_24466[(2)] = true);

(statearr_24396_24466[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (19))){
var inst_24240 = (state_24336[(12)]);
var inst_24246 = figwheel.client.file_reloading.expand_files.call(null,inst_24240);
var state_24336__$1 = state_24336;
var statearr_24397_24467 = state_24336__$1;
(statearr_24397_24467[(2)] = inst_24246);

(statearr_24397_24467[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (11))){
var state_24336__$1 = state_24336;
var statearr_24398_24468 = state_24336__$1;
(statearr_24398_24468[(2)] = null);

(statearr_24398_24468[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (9))){
var inst_24229 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
var statearr_24399_24469 = state_24336__$1;
(statearr_24399_24469[(2)] = inst_24229);

(statearr_24399_24469[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (5))){
var inst_24200 = (state_24336[(7)]);
var inst_24199 = (state_24336[(8)]);
var inst_24202 = (inst_24200 < inst_24199);
var inst_24203 = inst_24202;
var state_24336__$1 = state_24336;
if(cljs.core.truth_(inst_24203)){
var statearr_24400_24470 = state_24336__$1;
(statearr_24400_24470[(1)] = (7));

} else {
var statearr_24401_24471 = state_24336__$1;
(statearr_24401_24471[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (14))){
var inst_24210 = (state_24336[(22)]);
var inst_24219 = cljs.core.first.call(null,inst_24210);
var inst_24220 = figwheel.client.file_reloading.eval_body.call(null,inst_24219,opts);
var inst_24221 = cljs.core.next.call(null,inst_24210);
var inst_24197 = inst_24221;
var inst_24198 = null;
var inst_24199 = (0);
var inst_24200 = (0);
var state_24336__$1 = (function (){var statearr_24402 = state_24336;
(statearr_24402[(32)] = inst_24220);

(statearr_24402[(7)] = inst_24200);

(statearr_24402[(8)] = inst_24199);

(statearr_24402[(9)] = inst_24198);

(statearr_24402[(10)] = inst_24197);

return statearr_24402;
})();
var statearr_24403_24472 = state_24336__$1;
(statearr_24403_24472[(2)] = null);

(statearr_24403_24472[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (45))){
var state_24336__$1 = state_24336;
var statearr_24404_24473 = state_24336__$1;
(statearr_24404_24473[(2)] = null);

(statearr_24404_24473[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (26))){
var inst_24253 = (state_24336[(23)]);
var inst_24258 = (state_24336[(24)]);
var inst_24256 = (state_24336[(26)]);
var inst_24250 = (state_24336[(19)]);
var inst_24254 = (state_24336[(25)]);
var inst_24273 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24275 = (function (){var all_files = inst_24250;
var res_SINGLEQUOTE_ = inst_24253;
var res = inst_24254;
var files_not_loaded = inst_24256;
var dependencies_that_loaded = inst_24258;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24253,inst_24258,inst_24256,inst_24250,inst_24254,inst_24273,state_val_24337,c__20599__auto__,map__24182,map__24182__$1,opts,before_jsload,on_jsload,reload_dependents,map__24183,map__24183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24274){
var map__24405 = p__24274;
var map__24405__$1 = ((((!((map__24405 == null)))?((((map__24405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24405):map__24405);
var namespace = cljs.core.get.call(null,map__24405__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24405__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24253,inst_24258,inst_24256,inst_24250,inst_24254,inst_24273,state_val_24337,c__20599__auto__,map__24182,map__24182__$1,opts,before_jsload,on_jsload,reload_dependents,map__24183,map__24183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24276 = cljs.core.map.call(null,inst_24275,inst_24254);
var inst_24277 = cljs.core.pr_str.call(null,inst_24276);
var inst_24278 = figwheel.client.utils.log.call(null,inst_24277);
var inst_24279 = (function (){var all_files = inst_24250;
var res_SINGLEQUOTE_ = inst_24253;
var res = inst_24254;
var files_not_loaded = inst_24256;
var dependencies_that_loaded = inst_24258;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24253,inst_24258,inst_24256,inst_24250,inst_24254,inst_24273,inst_24275,inst_24276,inst_24277,inst_24278,state_val_24337,c__20599__auto__,map__24182,map__24182__$1,opts,before_jsload,on_jsload,reload_dependents,map__24183,map__24183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24253,inst_24258,inst_24256,inst_24250,inst_24254,inst_24273,inst_24275,inst_24276,inst_24277,inst_24278,state_val_24337,c__20599__auto__,map__24182,map__24182__$1,opts,before_jsload,on_jsload,reload_dependents,map__24183,map__24183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24280 = setTimeout(inst_24279,(10));
var state_24336__$1 = (function (){var statearr_24407 = state_24336;
(statearr_24407[(33)] = inst_24278);

(statearr_24407[(34)] = inst_24273);

return statearr_24407;
})();
var statearr_24408_24474 = state_24336__$1;
(statearr_24408_24474[(2)] = inst_24280);

(statearr_24408_24474[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (16))){
var state_24336__$1 = state_24336;
var statearr_24409_24475 = state_24336__$1;
(statearr_24409_24475[(2)] = reload_dependents);

(statearr_24409_24475[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (38))){
var inst_24290 = (state_24336[(16)]);
var inst_24307 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24290);
var state_24336__$1 = state_24336;
var statearr_24410_24476 = state_24336__$1;
(statearr_24410_24476[(2)] = inst_24307);

(statearr_24410_24476[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (30))){
var state_24336__$1 = state_24336;
var statearr_24411_24477 = state_24336__$1;
(statearr_24411_24477[(2)] = null);

(statearr_24411_24477[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (10))){
var inst_24210 = (state_24336[(22)]);
var inst_24212 = cljs.core.chunked_seq_QMARK_.call(null,inst_24210);
var state_24336__$1 = state_24336;
if(inst_24212){
var statearr_24412_24478 = state_24336__$1;
(statearr_24412_24478[(1)] = (13));

} else {
var statearr_24413_24479 = state_24336__$1;
(statearr_24413_24479[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (18))){
var inst_24244 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
if(cljs.core.truth_(inst_24244)){
var statearr_24414_24480 = state_24336__$1;
(statearr_24414_24480[(1)] = (19));

} else {
var statearr_24415_24481 = state_24336__$1;
(statearr_24415_24481[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (42))){
var state_24336__$1 = state_24336;
var statearr_24416_24482 = state_24336__$1;
(statearr_24416_24482[(2)] = null);

(statearr_24416_24482[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (37))){
var inst_24302 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
var statearr_24417_24483 = state_24336__$1;
(statearr_24417_24483[(2)] = inst_24302);

(statearr_24417_24483[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (8))){
var inst_24210 = (state_24336[(22)]);
var inst_24197 = (state_24336[(10)]);
var inst_24210__$1 = cljs.core.seq.call(null,inst_24197);
var state_24336__$1 = (function (){var statearr_24418 = state_24336;
(statearr_24418[(22)] = inst_24210__$1);

return statearr_24418;
})();
if(inst_24210__$1){
var statearr_24419_24484 = state_24336__$1;
(statearr_24419_24484[(1)] = (10));

} else {
var statearr_24420_24485 = state_24336__$1;
(statearr_24420_24485[(1)] = (11));

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
}
});})(c__20599__auto__,map__24182,map__24182__$1,opts,before_jsload,on_jsload,reload_dependents,map__24183,map__24183__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20534__auto__,c__20599__auto__,map__24182,map__24182__$1,opts,before_jsload,on_jsload,reload_dependents,map__24183,map__24183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20535__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20535__auto____0 = (function (){
var statearr_24424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24424[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20535__auto__);

(statearr_24424[(1)] = (1));

return statearr_24424;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20535__auto____1 = (function (state_24336){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_24336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e24425){if((e24425 instanceof Object)){
var ex__20538__auto__ = e24425;
var statearr_24426_24486 = state_24336;
(statearr_24426_24486[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24487 = state_24336;
state_24336 = G__24487;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20535__auto__ = function(state_24336){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20535__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20535__auto____1.call(this,state_24336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20535__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20535__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto__,map__24182,map__24182__$1,opts,before_jsload,on_jsload,reload_dependents,map__24183,map__24183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20601__auto__ = (function (){var statearr_24427 = f__20600__auto__.call(null);
(statearr_24427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto__);

return statearr_24427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto__,map__24182,map__24182__$1,opts,before_jsload,on_jsload,reload_dependents,map__24183,map__24183__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20599__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24490,link){
var map__24493 = p__24490;
var map__24493__$1 = ((((!((map__24493 == null)))?((((map__24493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24493):map__24493);
var file = cljs.core.get.call(null,map__24493__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__24493,map__24493__$1,file){
return (function (p1__24488_SHARP_,p2__24489_SHARP_){
if(cljs.core._EQ_.call(null,p1__24488_SHARP_,p2__24489_SHARP_)){
return p1__24488_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__24493,map__24493__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24499){
var map__24500 = p__24499;
var map__24500__$1 = ((((!((map__24500 == null)))?((((map__24500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24500):map__24500);
var match_length = cljs.core.get.call(null,map__24500__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__24500__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24495_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24495_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args24502 = [];
var len__19502__auto___24505 = arguments.length;
var i__19503__auto___24506 = (0);
while(true){
if((i__19503__auto___24506 < len__19502__auto___24505)){
args24502.push((arguments[i__19503__auto___24506]));

var G__24507 = (i__19503__auto___24506 + (1));
i__19503__auto___24506 = G__24507;
continue;
} else {
}
break;
}

var G__24504 = args24502.length;
switch (G__24504) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24502.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__24509_SHARP_,p2__24510_SHARP_){
return cljs.core.assoc.call(null,p1__24509_SHARP_,cljs.core.get.call(null,p2__24510_SHARP_,key),p2__24510_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__24511){
var map__24514 = p__24511;
var map__24514__$1 = ((((!((map__24514 == null)))?((((map__24514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24514):map__24514);
var f_data = map__24514__$1;
var file = cljs.core.get.call(null,map__24514__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__24516,files_msg){
var map__24523 = p__24516;
var map__24523__$1 = ((((!((map__24523 == null)))?((((map__24523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24523):map__24523);
var opts = map__24523__$1;
var on_cssload = cljs.core.get.call(null,map__24523__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24525_24529 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24526_24530 = null;
var count__24527_24531 = (0);
var i__24528_24532 = (0);
while(true){
if((i__24528_24532 < count__24527_24531)){
var f_24533 = cljs.core._nth.call(null,chunk__24526_24530,i__24528_24532);
figwheel.client.file_reloading.reload_css_file.call(null,f_24533);

var G__24534 = seq__24525_24529;
var G__24535 = chunk__24526_24530;
var G__24536 = count__24527_24531;
var G__24537 = (i__24528_24532 + (1));
seq__24525_24529 = G__24534;
chunk__24526_24530 = G__24535;
count__24527_24531 = G__24536;
i__24528_24532 = G__24537;
continue;
} else {
var temp__4657__auto___24538 = cljs.core.seq.call(null,seq__24525_24529);
if(temp__4657__auto___24538){
var seq__24525_24539__$1 = temp__4657__auto___24538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24525_24539__$1)){
var c__19243__auto___24540 = cljs.core.chunk_first.call(null,seq__24525_24539__$1);
var G__24541 = cljs.core.chunk_rest.call(null,seq__24525_24539__$1);
var G__24542 = c__19243__auto___24540;
var G__24543 = cljs.core.count.call(null,c__19243__auto___24540);
var G__24544 = (0);
seq__24525_24529 = G__24541;
chunk__24526_24530 = G__24542;
count__24527_24531 = G__24543;
i__24528_24532 = G__24544;
continue;
} else {
var f_24545 = cljs.core.first.call(null,seq__24525_24539__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24545);

var G__24546 = cljs.core.next.call(null,seq__24525_24539__$1);
var G__24547 = null;
var G__24548 = (0);
var G__24549 = (0);
seq__24525_24529 = G__24546;
chunk__24526_24530 = G__24547;
count__24527_24531 = G__24548;
i__24528_24532 = G__24549;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__24523,map__24523__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__24523,map__24523__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map