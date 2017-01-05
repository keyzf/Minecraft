/**
 * Created by itc_user1 on 1/3/2017.
 */

 $("#startButton").click(function () {
     $("#splashScreen").hide();
     $("#grid, #toolBar").show();
 });
var minecraft = {};
minecraft.AXE = 1;
minecraft.PICKAXE = 2;
minecraft.SHOVEL = 3;
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
    // var limit = 2/3;
    for (var i=14; i<=rows ; i++) {
        for (var j=0; j <= rows; j++) {
            $("div").eq(i*rows + j).addClass("dirt");


        }
    }
    //
    //
    // for (var i=14; i<21 ; i++) {
    //     // var row = $('div.rows').eq(i);
    //     for (var j=0; j < 20; j++) {
    //         $("div").eq(i*20 + j).addClass("dirt");
    //
    //
    //     }
    // }
    // for (var i = 275 ; i <295; i++) {
    //     $("div").eq(i).addClass("grass");
    //
    // }
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
    $("div").eq(273).addClass("rocks");
    $("div").eq(267).addClass("rocks");
    $("div").eq(266).addClass("rocks");
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
// var currentTool = 0;
minecraft.generateToolBar = function() {
    $("#axe").click(function () {
        console.log("clicked axe");
        minecraft.AXE = 1;
        console.log("hello");
    });
    $("#pickAxe").click(function () {
        console.log("clicked pickaxe");
        minecraft.PICKAXE = 2;
        console.log("hi");
    });
    $("#shovel").click(function () {
        console.log("clicked shovel");
        minecraft.SHOVEL = 3;
        console.log("hola");
    });
    // makes divs selectable
    $(".cols").click(minecraft.worldClicked);
}
    //
    // $(".tree").click(function () {
    //     ()removeClass(".tree")
    //     (#block)addClass(".tree")

//if current tool is axe and tree is clicked on--- do this

minecraft.worldClicked = function(e) {
    if (minecraft.AXE === 1 && $(this).hasClass("tree")) {
        $(this).removeClass("tree")
        $("#block").addClass("tree")
        }

    if (minecraft.PICKAXE === 2 && $(this).hasClass("rocks")) {
        $(this).removeClass("rocks")
        $("#block").addClass("rocks")
    }
    if (minecraft.SHOVEL === 3 && $(this).hasClass("dirt")) {
        $(this).removeClass("dirt")
        $("#block").addClass("dirt")
    }

    $("#block").click(function () {
        console.log("hi");
        //remove current class $(this).removeClass("current")
        //add it to wherever is clicked on cols
        // $(".cols").addClass(current); could do with if statements but that wouldnt be very efficient
    })


    //making it possible to move last placed material from block

}





$(document).ready(function () {
    minecraft.createGrid();
    minecraft.drawBoard();
    minecraft.generateToolBar();
    minecraft.worldClicked();

});
