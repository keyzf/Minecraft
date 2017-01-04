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
                .data("j",j).addClass(i + '-' + j);


            numRows.append(numCols);

        }
    }
};

minecraft.drawBoard = function() {
    var rows = 20;
    var limit = 2/3;
    for (var i=rows; i>(limit*rows); i--) {
        var row = $('div.rows').eq(i);
        for (var j=0; j < row.children().length; j++) {
            $( "div.rows" ).eq(i, j).addClass("dirt");


        }
    }
    for (var i = 274 ; i <290; i++) {
        $("div").eq(i).addClass("grass");

    }
    //tree
    $("div").eq(269).addClass("tree");
    $("div").eq(248).addClass("tree");
    $("div").eq(227).addClass("tree");
    $("div").eq(206).addClass("leaves");
    $("div").eq(205).addClass("leaves");
    $("div").eq(207).addClass("leaves");
    $("div").eq(186).addClass("leaves");
    $("div").eq(185).addClass("leaves");
    $("div").eq(184).addClass("leaves");
    $("div").eq(165).addClass("leaves");
    $("div").eq(164).addClass("leaves");
    $("div").eq(163).addClass("leaves");

    //rocks
    $("div").eq(273).addClass("rock");
    $("div").eq(267).addClass("rock");
    $("div").eq(266).addClass("rock");
    //bush

    $("div").eq(257).addClass("leaves");
    $("div").eq(258).addClass("leaves");
    $("div").eq(259).addClass("leaves");
    $("div").eq(237).addClass("leaves");
    //cloud
    $("div").eq(68).addClass("cloud");
    $("div").eq(88).addClass("cloud");
    $("div").eq(89).addClass("cloud");
    $("div").eq(90).addClass("cloud");
    $("div").eq(92).addClass("cloud");
    $("div").eq(93).addClass("cloud");
    $("div").eq(108).addClass("cloud");
    $("div").eq(109).addClass("cloud");
    $("div").eq(110).addClass("cloud");
    $("div").eq(111).addClass("cloud");
    $("div").eq(112).addClass("cloud");
    $("div").eq(113).addClass("cloud");
    $("div").eq(114).addClass("cloud");
    $("div").eq(133).addClass("cloud");

};
var currentTool = 0;
minecraft.generateToolBar = function() {
  $( "#axe" ).click(function() {
    console.log ("clicked axe");
    currentTool = 1;
    console.log (currentTool);
  });
  $( "#pickAxe" ).click(function() {
    console.log ("clicked pickaxe");
    currentTool = 2;
    console.log (currentTool);
  });
  $( "#shovel" ).click(function() {
    console.log ("clicked shovel");
    currentTool = 3;
    console.log (currentTool);
  });

  $( ".cols" ).click(function() {
    console.log ("clicked square");
    console.log ("")
  });
}

// var currentBlockAllowed = 0;
// minecraft.useToolsOnBoard = function () {
//   $ ( )
// }

// minecraft.selectTool = function () {
//     document.getElementById('#axe').click
// }

$(document).ready(function () {
    minecraft.createGrid();
    minecraft.drawBoard();
    minecraft.generateToolBar();

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
