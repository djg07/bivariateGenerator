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

$('#generateGrid').click(function() {
    alert('t');

})


