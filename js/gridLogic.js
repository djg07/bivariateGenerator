/**
 * Created by asus on 24/04/2015.
 */

var sizeTest = 3;
var modelTest = optionsM;

function generateGridArray(model) {
    debugger;
    var size = model.get("size");
    var numberOfNodes = size*size;
    var adjustedSize = size+1;
    var array = [];
    //debugger;
    for (var i = 0; i < size; i++) {
        array.push(new Array(size+1).join(0).split(''));
        //array.push(new Array(size+1).join(0).split(''))
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
    var edgeIndex = arraySize - 1;
    //TODO SOLVE 4 edges
    //for (var i = 0; i < array[0].length; i ++) {
    //
    //}

    //solve edges
    for (var i = 1; i < arraySize-1; i++) {
        //debugger;

        array[0][i] = (getEdgeElementValue(arraySize, i, array[0][0], array[0][arraySize-1])); //top
        array[arraySize-1][i] = (getEdgeElementValue(arraySize, i, array[arraySize-1][0], array[arraySize-1][arraySize-1])); //bottom
        array[i][0] = (getEdgeElementValue(arraySize, i, array[0][0], array[arraySize-1][0])); //left
        array[i][arraySize -1] = (getEdgeElementValue(arraySize, i, array[0][arraySize-1], array[arraySize-1][arraySize-1]))

        //array[i][arraySize-1]
    }

    //TODO - USE NESTED FOR LOOP
    //TODO - USE SET
    /* SOLVING FOR INNER GRID CELLS */

    var rowSet = new Set();
    var colSet = new Set();

    for (var j = 1; j < arraySize - 1; j++) { //row
        //debugger;


        for (var k = 1; k < arraySize -1; k++) { //column
            row = getEdgeElementValue(arraySize, k, array[j][0], array[j][arraySize-1]);
            col = getEdgeElementValue(arraySize, k, array[0][k], array[k][arraySize-1]);

            var delta1 = Math.round((row[0] + col[0])/2);
            var delta2 = Math.round((row[1] + col[1])/2);
            var delta3 = Math.round((row[2] + col[2])/2);

            array[j][k] = [delta1, delta2, delta3];
            //for each row: do this
            //1) get value using row logic
            //var row = array[j][k] = getEdgeElementValue(arraySize, k, array[j][0], array[j][arraySize-1])


            //col = getEdgeElementValue(arraySize, j, array[0][j], array[arraySize-1][j]);
        }

    }


    console.log(array);
    $('#placeholder').append("<br>");
    for (var i = 0; i < array.length; ++i) {
        for (var k = 0; k < (array[i].length); ++k) {
            debugger;
            $('#placeholder').append("<span style= 'display:block;width:100px; height:100px; float:left; background-color: rgb(" + array[i][k].toString() + "')>(" + array[i][k].toString() + ")</span>");
        }
        $('#placeholder').append("<br><br><br><br><br>")
        //$('#placeholder .span').addClass('gridElement');
    }
    //$('#placeholder').append("<br><br><br><br><br><br>");
    //for (var i = 0; i < array[1].length; i++) {
    //    //$('#placeholder').append("<span>(" + array[1][i].toString() + ")</span>");
    //    $('#placeholder').append("<span style= 'display:block;width:100px; height:100px; float:left; background-color: rgb(" + array[1][i].toString() + "')>(" + array[1][i].toString() + ")</span>");
    //}
    //$('#placeholder').append("<br><br><br><br><br><br>");
    //for (var i = 0; i < array[2].length; i++) {
    //    //$('#placeholder').append("<span>(" + array[2][i].toString() + ")</span>");
    //    $('#placeholder').append("<span style= 'display:block;width:100px; height:100px; float:left; background-color: rgb(" + array[2][i].toString() + "')>(" + array[2][i].toString() + ")</span>");
    //}
    //$('#placeholder').append("<br><br><br><br><br><br>");
    //for (var i = 0; i < array[3].length; i++) {
    //    //$('#placeholder').append("<span>(" + array[3][i].toString() + ")</span>");
    //    $('#placeholder').append("<span style= 'display:block;width:100px; height:100px; float:left; background-color: rgb(" + array[3][i].toString() + "')>(" + array[3][i].toString() + ")</span>");
    //}
    //$('#placeholder').append("<br><br><br><br><br><br>");
    //for (var i = 0; i < array[4].length; i++) {
    //    //$('#placeholder').append("<span>(" + array[3][i].toString() + ")</span>");
    //    $('#placeholder').append("<span style= 'display:block;width:100px; height:100px; float:left; background-color: rgb(" + array[4][i].toString() + "')>(" + array[4][i].toString() + ")</span>");
    //}
    //$('#placeholder').append("<br><br><br><br><br><br>");
    //for (var i = 0; i < array[5].length; i++) {
    //    //$('#placeholder').append("<span>(" + array[3][i].toString() + ")</span>");
    //    $('#placeholder').append("<span style= 'display:block;width:100px; height:100px; float:left; background-color: rgb(" + array[5][i].toString() + "')>(" + array[5][i].toString() + ")</span>");
    //}






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

function getInsideElementValue(array, size, rPosition, rHighColourArray, rLowColourarray) {

    var mySet = new Set();










}


