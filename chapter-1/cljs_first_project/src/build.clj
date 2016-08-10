(require 'cljs.build.api)

(cljs.build.api/build "src"
                      {:main 'cljs-first-project.core
                       :output-to "out/main.js"})

