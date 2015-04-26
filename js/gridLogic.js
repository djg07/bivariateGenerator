/**
 * Created by asus on 24/04/2015.
 */

var sizeTest = 3;
var modelTest = optionsM;

function generateGridArray(size, model) {

    var numberOfNodes = size*size;
    var adjustedSize = size+1;
    var array = [];

    for (var i = 0; i < size; i++) {
        array.push(new Array(size+1).join(0).split(''))
    }
    //setting 4 corners
    array[0][0] = ConvertHexToRGB(model.get("topLeftOption"));
    array[0][size-1] = ConvertHexToRGB(model.get("topRightOption"));
    array[size-1][0] = ConvertHexToRGB(model.get("bottomLeftOption"));
    //array[size-1][size-1] = ConvertHexToRGB(model.get("bottomRightOption"));
    return array;


}

function fillArray(array) {
    arraySize = array.length;

    //TODO SOLVE 4 edges
    //for (var i = 0; i < array[0].length; i ++) {
    //
    //}

    //solve edges
    for (var i = 1; i < arraySize-1; i++) {
        debugger;
        array;
        array[0][i] = (getEdgeElementValue(arraySize, i, array[0][0], array[0][arraySize-1])); //top
        array[arraySize-1][i] = (getEdgeElementValue(arraySize, i, array[arraySize-1][0], array[arraySize-1][arraySize-1])); //bottom
        //array[i][0] = Math.round(parseInt(getEdgeElementValue(arraySize, i, array[0][0], array[arraySize-1][0]))); //left

        //array[i][arraySize-1]
    }
    console.log(array);
    $('#placeholder').append("<br>");
    for (var i = 0; i < array[0].length; i++) {
        $('#placeholder').append("<span>(" + array[0][i].toString() + ")</span>");
    }
    $('#placeholder').append("<br>");
    for (var i = 0; i < array[1].length; i++) {
        $('#placeholder').append("<span>(" + array[1][i].toString() + ")</span>");
    }
    $('#placeholder').append("<br>");
    for (var i = 0; i < array[2].length; i++) {
        $('#placeholder').append("<span>(" + array[2][i].toString() + ")</span>");
    }
    $('#placeholder').append("<br>");
    for (var i = 0; i < array[3].length; i++) {
        $('#placeholder').append("<span>(" + array[3][i].toString() + ")</span>");
    }

    //TODO - USE NESTED FOR LOOP


    //$('#gridContainer').append("<p>(" + array[0].toString() + ")</p>");
    //$('#gridContainer').append("<p>" + array[1].toString() + "</p>");
    //$('#gridContainer').append("<p>" + array[2].toString() + "</p>");
    //$('#gridContainer').append("<p>" + array[3].toString() + "</p>");
}

function getEdgeElementValue(size, position, lowColourArray, highColourArray) {
    //console.log(delta);
    //var delta = [
    //    (highColourArray[position] - lowColourArray[position]),
    //    (highColourArray[position+1] - lowColourArray[position+1]),
    //    (highColourArray[position+1] - lowColourArray[position+1]),
    //            ];
    //debugger;
    var delta1 = Math.round(lowColourArray[0] + (position)*((highColourArray[0] - lowColourArray[0])/(size-1)));
    var delta2 = Math.round(lowColourArray[1] + (position)*((highColourArray[1] - lowColourArray[1])/(size-1)));
    var delta3 = Math.round(lowColourArray[2] + (position)*((highColourArray[2] - lowColourArray[2])/(size-1)));

    console.log(delta1);
    console.log(delta2);
    console.log(delta3);

    return [delta1, delta2, delta3];

}


