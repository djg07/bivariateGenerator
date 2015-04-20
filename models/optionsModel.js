/**
 * Created by Daniel on 4/15/2015.
 */


var app = app || {};

app.optionsModel = Backbone.Model.extend({

    defaults: {

        size: "",
        topLeftOption: {
            value: "",
            link: $("#topLeftPreview")
        },
        topRightOption: {
            value: "",
            link: $("#topRightPreview")
        },
        bottomLeftOption: {
            value: "",
            link: $("#bottomLeftPreview")

        },
        bottomRightOption: {
            value: "",
            link: $("#bottomRightPreview")
        }

    },

    changeCSS: function(colour, id) {
        //console.log(colour);
        //console.log(event)
        //this.set((id.toString()).value, colour);
        //console.log(id);
        //console.log(this.set((id).link), "t");
        //

        //this.(id.toString()).css("color", "yellow");


    },

    changeValue: function(e) {
        var colour = $(e.currentTarget).val()
        var id = e.currentTarget.id;


        this.get(id.toString).set({ value: true });

        this.changeCSS(colour, event)

    }
});