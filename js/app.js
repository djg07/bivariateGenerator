/**
 * Created by Daniel on 4/12/2015.
 */



var optionsM = new app.optionsModel();


var optionsV = new app.optionsView({
    model: optionsM
});

var gridM = new app.gridModel({
    inputModel: optionsM
})

$('#placeholder').children().css("text-align", "center");




