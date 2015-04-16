/**
 * Created by Daniel on 4/15/2015.
 */

var app = app || {};

app.optionsView = Backbone.View.extend({
    el: "#optionsContainer",
    template: _.template($("#optionsTemplate").html()),
    initialize: function() {
        this.render();
        this.model.on("change", this.render, this)
    },

    render: function() {
        console.log("rendering")
        this.$el.html(this.template());
        console.log(this.$el)
    }



})
