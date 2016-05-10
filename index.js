var trimSlashes = function(string) {
    var res = (string || '').replace(/^\/+|\/+$/g, '')
    return res
}

module.exports = {
    init: function(Backbone) {
        this.Backbone = Backbone
        this.root = trimSlashes(Backbone.history.root)
        this.rootRegex = new RegExp(this.root)
        this.anchorListen()
    },
    anchorListen: function() {
        // on every click, check if it's an href that can be handled by the router
        $(document.body).on('click', 'a', this.handelAnchor.bind(this));
    },
    handelAnchor: function(e) {
        // clean leading/trailing slashes
        var href = trimSlashes($(e.currentTarget).attr('href'))

        // only handle click if href contains backbone history root
        if (this.containsRoot(href)) {
            href = trimSlashes(href.replace(this.rootRegex, ''))

            if(this.hasRouteHandler(href)) {
                e.preventDefault();
                this.Backbone.history.navigate(href, {trigger: true});
            }
        }
    },
    containsRoot: function(href) {
        return this.rootRegex.test(href)
    },
    hasRouteHandler: function(href) {
        return _(this.Backbone.history.handlers).find(r => r.route.test(href));
    }
}
