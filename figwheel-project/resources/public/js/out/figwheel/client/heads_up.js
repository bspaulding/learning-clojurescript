// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19509__auto__ = [];
var len__19502__auto___24751 = arguments.length;
var i__19503__auto___24752 = (0);
while(true){
if((i__19503__auto___24752 < len__19502__auto___24751)){
args__19509__auto__.push((arguments[i__19503__auto___24752]));

var G__24753 = (i__19503__auto___24752 + (1));
i__19503__auto___24752 = G__24753;
continue;
} else {
}
break;
}

var argseq__19510__auto__ = ((((2) < args__19509__auto__.length))?(new cljs.core.IndexedSeq(args__19509__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19510__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__24743_24754 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__24744_24755 = null;
var count__24745_24756 = (0);
var i__24746_24757 = (0);
while(true){
if((i__24746_24757 < count__24745_24756)){
var k_24758 = cljs.core._nth.call(null,chunk__24744_24755,i__24746_24757);
e.setAttribute(cljs.core.name.call(null,k_24758),cljs.core.get.call(null,attrs,k_24758));

var G__24759 = seq__24743_24754;
var G__24760 = chunk__24744_24755;
var G__24761 = count__24745_24756;
var G__24762 = (i__24746_24757 + (1));
seq__24743_24754 = G__24759;
chunk__24744_24755 = G__24760;
count__24745_24756 = G__24761;
i__24746_24757 = G__24762;
continue;
} else {
var temp__4657__auto___24763 = cljs.core.seq.call(null,seq__24743_24754);
if(temp__4657__auto___24763){
var seq__24743_24764__$1 = temp__4657__auto___24763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24743_24764__$1)){
var c__19243__auto___24765 = cljs.core.chunk_first.call(null,seq__24743_24764__$1);
var G__24766 = cljs.core.chunk_rest.call(null,seq__24743_24764__$1);
var G__24767 = c__19243__auto___24765;
var G__24768 = cljs.core.count.call(null,c__19243__auto___24765);
var G__24769 = (0);
seq__24743_24754 = G__24766;
chunk__24744_24755 = G__24767;
count__24745_24756 = G__24768;
i__24746_24757 = G__24769;
continue;
} else {
var k_24770 = cljs.core.first.call(null,seq__24743_24764__$1);
e.setAttribute(cljs.core.name.call(null,k_24770),cljs.core.get.call(null,attrs,k_24770));

var G__24771 = cljs.core.next.call(null,seq__24743_24764__$1);
var G__24772 = null;
var G__24773 = (0);
var G__24774 = (0);
seq__24743_24754 = G__24771;
chunk__24744_24755 = G__24772;
count__24745_24756 = G__24773;
i__24746_24757 = G__24774;
continue;
}
} else {
}
}
break;
}

var seq__24747_24775 = cljs.core.seq.call(null,children);
var chunk__24748_24776 = null;
var count__24749_24777 = (0);
var i__24750_24778 = (0);
while(true){
if((i__24750_24778 < count__24749_24777)){
var ch_24779 = cljs.core._nth.call(null,chunk__24748_24776,i__24750_24778);
e.appendChild(ch_24779);

var G__24780 = seq__24747_24775;
var G__24781 = chunk__24748_24776;
var G__24782 = count__24749_24777;
var G__24783 = (i__24750_24778 + (1));
seq__24747_24775 = G__24780;
chunk__24748_24776 = G__24781;
count__24749_24777 = G__24782;
i__24750_24778 = G__24783;
continue;
} else {
var temp__4657__auto___24784 = cljs.core.seq.call(null,seq__24747_24775);
if(temp__4657__auto___24784){
var seq__24747_24785__$1 = temp__4657__auto___24784;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24747_24785__$1)){
var c__19243__auto___24786 = cljs.core.chunk_first.call(null,seq__24747_24785__$1);
var G__24787 = cljs.core.chunk_rest.call(null,seq__24747_24785__$1);
var G__24788 = c__19243__auto___24786;
var G__24789 = cljs.core.count.call(null,c__19243__auto___24786);
var G__24790 = (0);
seq__24747_24775 = G__24787;
chunk__24748_24776 = G__24788;
count__24749_24777 = G__24789;
i__24750_24778 = G__24790;
continue;
} else {
var ch_24791 = cljs.core.first.call(null,seq__24747_24785__$1);
e.appendChild(ch_24791);

var G__24792 = cljs.core.next.call(null,seq__24747_24785__$1);
var G__24793 = null;
var G__24794 = (0);
var G__24795 = (0);
seq__24747_24775 = G__24792;
chunk__24748_24776 = G__24793;
count__24749_24777 = G__24794;
i__24750_24778 = G__24795;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq24740){
var G__24741 = cljs.core.first.call(null,seq24740);
var seq24740__$1 = cljs.core.next.call(null,seq24740);
var G__24742 = cljs.core.first.call(null,seq24740__$1);
var seq24740__$2 = cljs.core.next.call(null,seq24740__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__24741,G__24742,seq24740__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19357__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19358__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19359__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19360__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19361__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19357__auto__,prefer_table__19358__auto__,method_cache__19359__auto__,cached_hierarchy__19360__auto__,hierarchy__19361__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19357__auto__,prefer_table__19358__auto__,method_cache__19359__auto__,cached_hierarchy__19360__auto__,hierarchy__19361__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19361__auto__,method_table__19357__auto__,prefer_table__19358__auto__,method_cache__19359__auto__,cached_hierarchy__19360__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_24796 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_24796.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_24796.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_24796.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_24796);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__24797,st_map){
var map__24802 = p__24797;
var map__24802__$1 = ((((!((map__24802 == null)))?((((map__24802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24802):map__24802);
var container_el = cljs.core.get.call(null,map__24802__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__24802,map__24802__$1,container_el){
return (function (p__24804){
var vec__24805 = p__24804;
var k = cljs.core.nth.call(null,vec__24805,(0),null);
var v = cljs.core.nth.call(null,vec__24805,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__24802,map__24802__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__24806,dom_str){
var map__24809 = p__24806;
var map__24809__$1 = ((((!((map__24809 == null)))?((((map__24809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24809):map__24809);
var c = map__24809__$1;
var content_area_el = cljs.core.get.call(null,map__24809__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__24811){
var map__24814 = p__24811;
var map__24814__$1 = ((((!((map__24814 == null)))?((((map__24814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24814):map__24814);
var content_area_el = cljs.core.get.call(null,map__24814__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto__){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto__){
return (function (state_24857){
var state_val_24858 = (state_24857[(1)]);
if((state_val_24858 === (1))){
var inst_24842 = (state_24857[(7)]);
var inst_24842__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24843 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24844 = ["10px","10px","100%","68px","1.0"];
var inst_24845 = cljs.core.PersistentHashMap.fromArrays(inst_24843,inst_24844);
var inst_24846 = cljs.core.merge.call(null,inst_24845,style);
var inst_24847 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24842__$1,inst_24846);
var inst_24848 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24842__$1,msg);
var inst_24849 = cljs.core.async.timeout.call(null,(300));
var state_24857__$1 = (function (){var statearr_24859 = state_24857;
(statearr_24859[(7)] = inst_24842__$1);

(statearr_24859[(8)] = inst_24847);

(statearr_24859[(9)] = inst_24848);

return statearr_24859;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24857__$1,(2),inst_24849);
} else {
if((state_val_24858 === (2))){
var inst_24842 = (state_24857[(7)]);
var inst_24851 = (state_24857[(2)]);
var inst_24852 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_24853 = ["auto"];
var inst_24854 = cljs.core.PersistentHashMap.fromArrays(inst_24852,inst_24853);
var inst_24855 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24842,inst_24854);
var state_24857__$1 = (function (){var statearr_24860 = state_24857;
(statearr_24860[(10)] = inst_24851);

return statearr_24860;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24857__$1,inst_24855);
} else {
return null;
}
}
});})(c__20599__auto__))
;
return ((function (switch__20534__auto__,c__20599__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20535__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20535__auto____0 = (function (){
var statearr_24864 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24864[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20535__auto__);

(statearr_24864[(1)] = (1));

return statearr_24864;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20535__auto____1 = (function (state_24857){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_24857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e24865){if((e24865 instanceof Object)){
var ex__20538__auto__ = e24865;
var statearr_24866_24868 = state_24857;
(statearr_24866_24868[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24869 = state_24857;
state_24857 = G__24869;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20535__auto__ = function(state_24857){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20535__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20535__auto____1.call(this,state_24857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20535__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20535__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto__))
})();
var state__20601__auto__ = (function (){var statearr_24867 = f__20600__auto__.call(null);
(statearr_24867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto__);

return statearr_24867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto__))
);

return c__20599__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__24871 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__24871,(0),null);
var ln = cljs.core.nth.call(null,vec__24871,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__24874 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__24874,(0),null);
var file_line = cljs.core.nth.call(null,vec__24874,(1),null);
var file_column = cljs.core.nth.call(null,vec__24874,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__24874,file_name,file_line,file_column){
return (function (p1__24872_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__24872_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__24874,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18432__auto__ = file_line;
if(cljs.core.truth_(or__18432__auto__)){
return or__18432__auto__;
} else {
var and__18420__auto__ = cause;
if(cljs.core.truth_(and__18420__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18420__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__24877 = figwheel.client.heads_up.ensure_container.call(null);
var map__24877__$1 = ((((!((map__24877 == null)))?((((map__24877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24877):map__24877);
var content_area_el = cljs.core.get.call(null,map__24877__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto__){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto__){
return (function (state_24925){
var state_val_24926 = (state_24925[(1)]);
if((state_val_24926 === (1))){
var inst_24908 = (state_24925[(7)]);
var inst_24908__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24909 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24910 = ["0.0"];
var inst_24911 = cljs.core.PersistentHashMap.fromArrays(inst_24909,inst_24910);
var inst_24912 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24908__$1,inst_24911);
var inst_24913 = cljs.core.async.timeout.call(null,(300));
var state_24925__$1 = (function (){var statearr_24927 = state_24925;
(statearr_24927[(8)] = inst_24912);

(statearr_24927[(7)] = inst_24908__$1);

return statearr_24927;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24925__$1,(2),inst_24913);
} else {
if((state_val_24926 === (2))){
var inst_24908 = (state_24925[(7)]);
var inst_24915 = (state_24925[(2)]);
var inst_24916 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_24917 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_24918 = cljs.core.PersistentHashMap.fromArrays(inst_24916,inst_24917);
var inst_24919 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24908,inst_24918);
var inst_24920 = cljs.core.async.timeout.call(null,(200));
var state_24925__$1 = (function (){var statearr_24928 = state_24925;
(statearr_24928[(9)] = inst_24915);

(statearr_24928[(10)] = inst_24919);

return statearr_24928;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24925__$1,(3),inst_24920);
} else {
if((state_val_24926 === (3))){
var inst_24908 = (state_24925[(7)]);
var inst_24922 = (state_24925[(2)]);
var inst_24923 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24908,"");
var state_24925__$1 = (function (){var statearr_24929 = state_24925;
(statearr_24929[(11)] = inst_24922);

return statearr_24929;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24925__$1,inst_24923);
} else {
return null;
}
}
}
});})(c__20599__auto__))
;
return ((function (switch__20534__auto__,c__20599__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20535__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20535__auto____0 = (function (){
var statearr_24933 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24933[(0)] = figwheel$client$heads_up$clear_$_state_machine__20535__auto__);

(statearr_24933[(1)] = (1));

return statearr_24933;
});
var figwheel$client$heads_up$clear_$_state_machine__20535__auto____1 = (function (state_24925){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_24925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e24934){if((e24934 instanceof Object)){
var ex__20538__auto__ = e24934;
var statearr_24935_24937 = state_24925;
(statearr_24935_24937[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24938 = state_24925;
state_24925 = G__24938;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20535__auto__ = function(state_24925){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20535__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20535__auto____1.call(this,state_24925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20535__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20535__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto__))
})();
var state__20601__auto__ = (function (){var statearr_24936 = f__20600__auto__.call(null);
(statearr_24936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto__);

return statearr_24936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto__))
);

return c__20599__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20599__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20599__auto__){
return (function (){
var f__20600__auto__ = (function (){var switch__20534__auto__ = ((function (c__20599__auto__){
return (function (state_24970){
var state_val_24971 = (state_24970[(1)]);
if((state_val_24971 === (1))){
var inst_24960 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_24970__$1 = state_24970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24970__$1,(2),inst_24960);
} else {
if((state_val_24971 === (2))){
var inst_24962 = (state_24970[(2)]);
var inst_24963 = cljs.core.async.timeout.call(null,(400));
var state_24970__$1 = (function (){var statearr_24972 = state_24970;
(statearr_24972[(7)] = inst_24962);

return statearr_24972;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24970__$1,(3),inst_24963);
} else {
if((state_val_24971 === (3))){
var inst_24965 = (state_24970[(2)]);
var inst_24966 = figwheel.client.heads_up.clear.call(null);
var state_24970__$1 = (function (){var statearr_24973 = state_24970;
(statearr_24973[(8)] = inst_24965);

return statearr_24973;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24970__$1,(4),inst_24966);
} else {
if((state_val_24971 === (4))){
var inst_24968 = (state_24970[(2)]);
var state_24970__$1 = state_24970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24970__$1,inst_24968);
} else {
return null;
}
}
}
}
});})(c__20599__auto__))
;
return ((function (switch__20534__auto__,c__20599__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20535__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20535__auto____0 = (function (){
var statearr_24977 = [null,null,null,null,null,null,null,null,null];
(statearr_24977[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20535__auto__);

(statearr_24977[(1)] = (1));

return statearr_24977;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20535__auto____1 = (function (state_24970){
while(true){
var ret_value__20536__auto__ = (function (){try{while(true){
var result__20537__auto__ = switch__20534__auto__.call(null,state_24970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20537__auto__;
}
break;
}
}catch (e24978){if((e24978 instanceof Object)){
var ex__20538__auto__ = e24978;
var statearr_24979_24981 = state_24970;
(statearr_24979_24981[(5)] = ex__20538__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24982 = state_24970;
state_24970 = G__24982;
continue;
} else {
return ret_value__20536__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20535__auto__ = function(state_24970){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20535__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20535__auto____1.call(this,state_24970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20535__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20535__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20535__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20535__auto__;
})()
;})(switch__20534__auto__,c__20599__auto__))
})();
var state__20601__auto__ = (function (){var statearr_24980 = f__20600__auto__.call(null);
(statearr_24980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20599__auto__);

return statearr_24980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20601__auto__);
});})(c__20599__auto__))
);

return c__20599__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map