![](screencast.gif)

- HTML: **[app/index.static.jade](app/index.static.jade)**
- CSS: **[app/css/](app/css/)**
- JS: **[app/js/routes.js](app/js/routes.js)**

### brunch

* Run:
    * `brunch watch --server` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `brunch build --production` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io)
