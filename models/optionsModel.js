/**
 * Created by Daniel on 4/15/2015.
 */


var app = app || {};

app.optionsModel = Backbone.Model.extend({

    defaults: {

        size: "",
        topLeft: {
            value: "",
            link: $("#topLeftPreview")
        },
        topRight: {
            value: "",
            link: $("#topRightPreview")
        },
        bottomLeft: {
            value: "",
            link: $("#bottomLeftPreview")

        },
        bottomRight: {
            value: "",
            link: $("#bottomRightPreview")
        }


    },

    changeValue: function(e) {
        console.log($(e.currentTarget).val())
        console.log(e);
        this.set("topLeft.value", "FSFDS");
    }
});