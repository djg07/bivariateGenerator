/**
 * Created by Daniel on 4/12/2015.
 */

var gridSize = $('#gridSize :selected').val();

var optionsM = new app.optionsModel();


var optionsV = new app.optionsView({
    model: optionsM
});

var gridM = new app.gridModel({
    inputModel: optionsM
})

//Since #generateGrid is being re-rendered upon every refresh, the click listener is being lost
$('#generateGrid').click(function() {


})



$('#btnTesting').click(function() {
    //debugger;
    var x = generateGridArray(4, optionsM)

    fillArray(x);

});


