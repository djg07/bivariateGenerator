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
        console.log(e);
        this.model.changeValue(e);

    },

    render: function() {
        console.log(this.model.toJSON());

        this.$el.html(this.template(this.model.toJSON()));
        $('#topLeftPreview').css("background-color", this.model.get('topLeftOption'));
        $('#topRightPreview').css("background-color", this.model.get('topRightOption'));
        $('#bottomLeftPreview').css("background-color", this.model.get('bottomLeftOption'));
        $('#bottomRightPreview').css("background-color", this.model.get('bottomRightOption'));

        $('#topLeftOption').val(this.model.get('topLeftOption'));
        $('#topRightOption').val(this.model.get('topRightOption'));
        $('#bottomLeftOption').val(this.model.get('bottomLeftOption'));
        $('#bottomRightOption').val(this.model.get('bottomRightOption'));



    }



})
