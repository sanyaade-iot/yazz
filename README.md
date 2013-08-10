Clojure on Coils
================
Website found at http://coils.cc



Clojure on Coils
================

A web framework for Clojure. A few notes:

- Uses Clojure for the server side
- Uses ClojureScript for the client side
- Best developed and run using the LightTable IDE



Installation
============

git clone https://github.com/zubairq/coils.git

Then rename the folder coils to the name of your project




Adding something to the page
============================

Go to a clojurescript view in src/webapp/client/views

From the Lighttable IDE:

    (add-to "main" "<div>hello world</div>")




Client side message passing system (AKA events)
===============================================

Define an action:
    (redefine-action "Say something"
        (js/alert "Hello")
    )


Call an action:
    (do-action "Say something")



Calling server side code
========================

From the client side:

    (defn say-hello [params]
        {:text (str "Hello " (:name params))}
    )


Define in fns.clj on the server side (now using core.async):

Previously:

    (remote "say-hello"
            {:name "Johnny"}
            #(js/alert (:text %1))
    )


Now:

    (go
         (js/alert
             (:text (<! (remote "say-hello" {:name "Johnny"})))))

