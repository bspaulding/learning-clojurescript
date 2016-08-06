// Compiled by ClojureScript 1.8.51 {}
goog.provide('piggieback_project.core');
goog.require('cljs.core');
goog.require('weasel.repl');
if(cljs.core.truth_(weasel.repl.alive_QMARK_.call(null))){
} else {
weasel.repl.connect.call(null,"ws://localhost:9001");
}

//# sourceMappingURL=core.js.map