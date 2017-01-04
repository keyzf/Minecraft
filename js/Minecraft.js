/**
 * Created by itc_user1 on 1/3/2017.
 */
var minecraft = {};
minecraft.createGrid = function() {
    var rows = 20;
    var cols = 20;

    for (var i = 0; i < rows; i++) {
        var numRows = $("<div/>");
        numRows.addClass("rows");

        $("#grid").append(numRows);
        for (var j = 0; j < cols; j++) {
            var numCols = $("<div/>");
            numCols.addClass("cols");

            numCols
                .data("i",i)
                .data("j",j);


            numRows.append(numCols);

        }
    }
};

minecraft.drawBoard = function() {
    var rows = 20;
    var limit = 2/3;
    for (var i=rows; i>(limit*rows); i--) {
        row = $('div.rows').eq(i);
        for (var j=0; j < row.children().length; j++) {
            $( "div.rows" ).eq(i, j).css( "background-image", "url('./images/dirt.png')");

        }
    }
    for (var i = 274 ; i <290; i++) {
        $("div").eq(i).css( "background-image", "url('./images/grass.png')");
    }
    $("div").eq(269).css( "background-image", "url('./images/tree.png')");
    // $("div").eq(259).css( "background-image", "url('./images/tree.png')");
    // $("div").eq(249).css( "background-image", "url('./images/tree.png')");


};

minecraft.generateToolBar = function() {
    // var toolBar = $("<div/>");
    // toolBar.addClass("myToolBar");
    // $("body").append(toolBar);
    //appendimages to too bar

}

$(document).ready(function () {
    minecraft.createGrid();
    minecraft.drawBoard();

});

// minecraft.generateGrid = (function() {
//     // var grid = document.createElement('div');
//     // grid.id = "grid";
//     // // grid.style.width = "1000px";
//     // // grid.style.height = "500px";
//     // document.body.appendChild(grid);
//
//     var rows = 20;
//     var cols = 20;
//     for (var i = 0; i < rows; i++) {
//         for (var j = 0; j < cols; j++) {
//             var box = $("<div class='box'></div>");
//             $("row").append(column);
//
// var numCols = document.createElement('div');
// numCols.classList.add("cols");
// numCols.id = "div" + j + i;
// // numCols.addEventListener("mousedown", onClick);
// // numCols.addEventListener("mouseup", offClick);
// // // numCols.addEventListener("click", postStamp);


// minecraft.init = function() {
//     minecraft.boxes = $('.box');
//     minecraft.matrix = [];
//
//     for (var i = 0; i < minecraft.matrix.length; i++) {
//         for (var j = 0; j < minecraft.matrix[i].length; j++) {
//             minecraft.boxes.eq(i * 100 + j)
//                 .data("i", i)
//                 .data("j", j);
//         }
//     }
// }
// minecraft.clickOnBoxes = function() {
//     var boxClicked = $(this);
//     if(minecraft.matrix[boxClicked.data('i')][boxClicked.data('j')] !== "") {
//         return;
//     }
//
// }
//
// }
//
//
// minecraft.startGame = function() {
//     var button = $('.btn-start-game');
//     button.on('click', function () {
//         var clicked = $(something).val();
// }
//
// // minecraft.clickOnBoxes = function {
// //     }
// // }
// minecraft.generateGrid = (function() {
//     var grid = document.createElement('div');
//     grid.id = "grid";
//     // grid.style.width = "1000px";
//     // grid.style.height = "500px";
//     document.body.appendChild(grid);
//6 class with 6 background images
//     var rows = 20;
//     var cols = 20;
//     for (var i = 0; i < rows; i++) {
//         var numRows = document.createElement('div');
//         numRows.classList.add("rows");
//         grid.appendChild(numRows);
//         for (var j = 0; j < cols; j++) {
//             var numCols = document.createElement('div');
//             numCols.classList.add("cols");
//             numCols.id = "div" + j + i;
//             // numCols.addEventListener("mousedown", onClick);
//             // numCols.addEventListener("mouseup", offClick);
//             // // numCols.addEventListener("click", postStamp);
//             numRows.appendChild(numCols);
//
//         }
//     }
// }());
//
// //
// // $(document).ready(function () {
// // function init() {
// //
// // }
