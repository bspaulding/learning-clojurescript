(defproject figwheel_node "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.51"]]
  :clean-targets ^{:protect false} ["out"]
  :plugins  [[lein-cljsbuild "1.1.0"]
             [lein-figwheel "0.4.0"]]
  :figwheel  {}
  :cljsbuild {:builds [{:id "server-dev"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main figwheel-node-repl.core
                                   :output-to "out/figwheel_node_repl.js"
                                   :output-dir "out"
                                   :target :nodejs
                                   :optimizations :none
                                   :source-map true}}]})
