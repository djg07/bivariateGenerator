/**
 * Created by Daniel on 4/12/2015.
 */

var app = app || {};

app.gridElement = Backbone.Model.extend({

    defaults: {
        position: "None",
        hexColour: "#FFFFF",
        rgbColour: ""
    }


});

var gridModel1 = new app.gridElement();