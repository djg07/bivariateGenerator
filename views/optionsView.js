/**
 * Created by Daniel on 4/15/2015.
 */

var app = app || {};

app.optionsView = Backbone.View.extend({
    el: "#optionsContainer",
    template: _.template($("#optionsTemplate").html()),
    initialize: function(options) {
        this.render();
        this.model.on("change", this.render, this)

    },

    events: {
        "change input.gridOption": "contentChanged"
    },

    contentChanged: function(e) {
        alert('content changed');
        //console.log(e);
        //debugger;
        this.model.changeValue(e);

        //console.log(this.model);

        //$('.hexOptionsPreview')
    },

    render: function() {
        console.log("rendering")
        this.$el.html(this.template());

    }



})
