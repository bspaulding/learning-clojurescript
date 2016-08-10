(ns piggieback-project.core
	(:require [cljs.nodejs :as nodejs]))

(nodejs/enable-util-print!)

(defn -main  [& args]
	(println  "hello world from node.js"))

(set! *main-cli-fn* -main)
