/**
 * Created by Daniel on 4/12/2015.
 */

var gridSize = $('#gridSize :selected').val();




var x1 = new app.gridElement({
    positionXY: [(1,1)],
    positionDescription: "Bottom Left",
    hexColour: "#FFFFFF",
    rgbColour: [(0,0,0)]

});

var optionsM = new app.optionsModel();


var optionsV = new app.optionsView({
    model: optionsM
});




