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
    array[size-1][size-1] = ConvertHexToRGB(model.get("bottomRightOption"));
    return array;


}

function fillArray(array) {
    arraySize = array.length;

    //TODO SOLVE 4 edges
    //for (var i = 0; i < array[0].length; i ++) {
    //
    //}

    //solve edges
    for (var i = 1; i < arraySize; i++) {
        debugger;
        array;
        array[0][i] = getEdgeElementValue(arraySize, i, array[0][0], array[0][arraySize-1]);
        array[arraySize-1][i] = getEdgeElementValue(arraySize, i, array[arraySize-1][0], array[arraySize-1][arraySize-1]);
        array[i][0] = getEdgeElementValue(arraySize, i, array[0][0], array[arraySize-1][0]);

        //array[i][arraySize-1]
    }
    console.log(array);

    $('#gridContainer').html(array[0].toString());
}

function getEdgeElementValue(size, position, lowColourArray, highColourArray) {
    //console.log(delta);
    //var delta = [
    //    (highColourArray[position] - lowColourArray[position]),
    //    (highColourArray[position+1] - lowColourArray[position+1]),
    //    (highColourArray[position+1] - lowColourArray[position+1]),
    //            ];
    //debugger;
    var delta1 = lowColourArray[0] + (position)*((highColourArray[0] - lowColourArray[0])/(size-1))
    var delta2 = lowColourArray[1] + (position)*((highColourArray[1] - lowColourArray[1])/(size-1))
    var delta3 = lowColourArray[2] + (position)*((highColourArray[2] - lowColourArray[2])/(size-1))

    console.log(delta1);
    console.log(delta2);
    console.log(delta3);

    return [delta1, delta2, delta3];

}


