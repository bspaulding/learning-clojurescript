(ns experiment.core
  (:require [experiment.utils :as utils :refer [adder]]))

(defn adder-multiplier [x y z]
	(* z (adder x y)))

(defn render []
	(.render (js/treeact)))

(render)

;; (defonce app-state (atom {:text "Hello world!"}))
;;
(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
