/**
 * Created by Daniel on 4/15/2015.
 */


var app = app || {};

app.optionsModel = Backbone.Model.extend({

    defaults: {

        size: "",
        topLeft: "",
        topRight: "",
        bottomLeft: "",
        bottomRight: "",


    }
});