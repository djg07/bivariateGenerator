/**
 * Created by asus on 24/04/2015.
 */

var bvm = {
    generateGridArray: function(model) {
        var size = model.get("size");
        var numberOfNodes = size*size;
        var adjustedSize = size+1;
        var array = [];
        for (var i = 0; i < size; i++) {
            array.push(new Array(size+1).join(0).split(''));
        }
        //setting 4 corners
        array[0][0] = bvm.convertHexToRGB(model.get("topLeftOption"));
        array[0][size-1] = bvm.convertHexToRGB(model.get("topRightOption"));
        array[size-1][0] = bvm.convertHexToRGB(model.get("bottomLeftOption"));
        array[size-1][size-1] = bvm.convertHexToRGB(model.get("bottomRightOption"));
        return array;
    },
    fillArray: function(array) {
        arraySize = array.length;
        var edgeIndex = arraySize - 1;
        //solve edges
        for (var i = 1; i < arraySize-1; i++) {
            array[0][i] = (this.getEdgeElementValue(arraySize, i, array[0][0], array[0][arraySize-1])); //top
            array[arraySize-1][i] = (this.getEdgeElementValue(arraySize, i, array[arraySize-1][0], array[arraySize-1][arraySize-1])); //bottom
            array[i][0] = (this.getEdgeElementValue(arraySize, i, array[0][0], array[arraySize-1][0])); //left
            array[i][arraySize -1] = (this.getEdgeElementValue(arraySize, i, array[0][arraySize-1], array[arraySize-1][arraySize-1]))
        }

        var rowSet = new Set();
        var colSet = new Set();

        for (var j = 1; j < arraySize - 1; j++) { //row
            for (var k = 1; k < arraySize -1; k++) { //column
                row = this.getEdgeElementValue(arraySize, k, array[j][0], array[j][arraySize-1]);
                col = this.getEdgeElementValue(arraySize, k, array[0][k], array[k][arraySize-1]);

                var delta1 = Math.round((row[0] + col[0])/2);
                var delta2 = Math.round((row[1] + col[1])/2);
                var delta3 = Math.round((row[2] + col[2])/2);

                array[j][k] = [delta1, delta2, delta3];
            }
        }

        $('#placeholder').append("<br>");
        for (var i = 0; i < array.length; ++i) {
            for (var k = 0; k < (array[i].length); ++k) {
                $('#placeholder').append("<span style= 'width:100px; height:100px; float:left; background-color: rgb(" + array[i][k].toString() + "')>(" + array[i][k].toString() + ")</span>");
            }
            $('#placeholder').append("<br><br><br><br><br>")
        }

    },
    getEdgeElementValue: function(size, position, lowColourArray, highColourArray) {

    var delta1 = Math.round(lowColourArray[0] + (position)*((highColourArray[0] - lowColourArray[0])/(size-1)));
    var delta2 = Math.round(lowColourArray[1] + (position)*((highColourArray[1] - lowColourArray[1])/(size-1)));
    var delta3 = Math.round(lowColourArray[2] + (position)*((highColourArray[2] - lowColourArray[2])/(size-1)));

    return [delta1, delta2, delta3];

}



};

//function generateGridArray(model) {
//    var size = model.get("size");
//    var numberOfNodes = size*size;
//    var adjustedSize = size+1;
//    var array = [];
//    for (var i = 0; i < size; i++) {
//        array.push(new Array(size+1).join(0).split(''));
//    }
//    //setting 4 corners
//    array[0][0] = ConvertHexToRGB(model.get("topLeftOption"));
//    array[0][size-1] = ConvertHexToRGB(model.get("topRightOption"));
//    array[size-1][0] = ConvertHexToRGB(model.get("bottomLeftOption"));
//    array[size-1][size-1] = ConvertHexToRGB(model.get("bottomRightOption"));
//    return array;
//}

//function fillArray(array) {
//    arraySize = array.length;
//    var edgeIndex = arraySize - 1;
//    //solve edges
//    for (var i = 1; i < arraySize-1; i++) {
//        array[0][i] = (getEdgeElementValue(arraySize, i, array[0][0], array[0][arraySize-1])); //top
//        array[arraySize-1][i] = (getEdgeElementValue(arraySize, i, array[arraySize-1][0], array[arraySize-1][arraySize-1])); //bottom
//        array[i][0] = (getEdgeElementValue(arraySize, i, array[0][0], array[arraySize-1][0])); //left
//        array[i][arraySize -1] = (getEdgeElementValue(arraySize, i, array[0][arraySize-1], array[arraySize-1][arraySize-1]))
//    }
//
//    var rowSet = new Set();
//    var colSet = new Set();
//
//    for (var j = 1; j < arraySize - 1; j++) { //row
//        for (var k = 1; k < arraySize -1; k++) { //column
//            row = getEdgeElementValue(arraySize, k, array[j][0], array[j][arraySize-1]);
//            col = getEdgeElementValue(arraySize, k, array[0][k], array[k][arraySize-1]);
//
//            var delta1 = Math.round((row[0] + col[0])/2);
//            var delta2 = Math.round((row[1] + col[1])/2);
//            var delta3 = Math.round((row[2] + col[2])/2);
//
//            array[j][k] = [delta1, delta2, delta3];
//        }
//    }
//
//    $('#placeholder').append("<br>");
//    for (var i = 0; i < array.length; ++i) {
//        for (var k = 0; k < (array[i].length); ++k) {
//            $('#placeholder').append("<span style= 'width:100px; height:100px; float:left; background-color: rgb(" + array[i][k].toString() + "')>(" + array[i][k].toString() + ")</span>");
//        }
//        $('#placeholder').append("<br><br><br><br><br>")
//    }
//
//}

//function getEdgeElementValue(size, position, lowColourArray, highColourArray) {
//
//    var delta1 = Math.round(lowColourArray[0] + (position)*((highColourArray[0] - lowColourArray[0])/(size-1)));
//    var delta2 = Math.round(lowColourArray[1] + (position)*((highColourArray[1] - lowColourArray[1])/(size-1)));
//    var delta3 = Math.round(lowColourArray[2] + (position)*((highColourArray[2] - lowColourArray[2])/(size-1)));
//
//    console.log(delta1);
//    console.log(delta2);
//    console.log(delta3);
//
//    return [delta1, delta2, delta3];
//
//}

//function getInsideElementValue(array, size, rPosition, rHighColourArray, rLowColourarray) {
//
//    var mySet = new Set();
//}


