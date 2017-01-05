/**
 * Created by itc_user1 on 1/3/2017.
 */

 $("#startButton").click(function () {
     $("#splashScreen").hide();
     $("#grid, #toolBar").show();
 });
var minecraft = {};
minecraft.currentTool = 0;
minecraft.currentClass;
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
    for (var i=rows; i>=14 ; i--) {
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
    console.log(minecraft.currentTool)
    $("#axe").click(function () {
        console.log("clicked axe");
        minecraft.currentTool = 1;
        console.log(minecraft.currentTool);
    });
    $("#pickAxe").click(function () {
        console.log("clicked pickaxe");
        minecraft.currentTool = 2;
        console.log(minecraft.currentTool);
    });
    $("#shovel").click(function () {
        console.log("clicked shovel");
        minecraft.currentTool = 3;
        console.log(minecraft.currentTool);
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
    if (minecraft.currentTool === 1 && $(this).hasClass("tree")) {
        $(this).removeClass("tree")
        $("#block").removeClass(minecraft.currentClass)
        $("#block").addClass("tree")
        minecraft.currentClass = "tree";
        minecraft.currentTool = 0;
    }
    if (minecraft.currentTool === 1 && $(this).hasClass("leaves")) {
        $(this).removeClass("leaves")
        $("#block").removeClass(minecraft.currentClass)
        $("#block").addClass("leaves")
        minecraft.currentClass = "leaves";
        minecraft.currentTool = 0;
    }

    if (minecraft.currentTool === 2 && $(this).hasClass("rocks")) {
        $(this).removeClass("rocks")
        $("#block").removeClass(minecraft.currentClass)
        $("#block").addClass("rocks")
        minecraft.currentClass = "rocks";
        minecraft.currentTool = 0;

    }
    if (minecraft.currentTool === 3 && $(this).hasClass("dirt")) {
        $(this).removeClass("dirt")
        $("#block").removeClass(minecraft.currentClass)
        $("#block").addClass("dirt")
        minecraft.currentClass = "dirt";
        minecraft.currentTool = 0;
    }

}
//help with this-if you click on canvas and no tools are selected, run this function
if (minecraft.currentTool === 0) {
    $(".cols").click(minecraft.build);
}


minecraft.build = function(e) {
    if ($(this).hasClass("tree") || ($(this).hasClass("leaves")) || ($(this).hasClass("rocks")) || ($(this).hasClass("dirt")) || ($(this).hasClass("grass"))) {
        console.log("hi");
        return;
    }
    else {
        $(this).addClass(minecraft.currentClass)
        minecraft.currentClass = "";

    }
}





$(document).ready(function () {
    minecraft.createGrid();
    minecraft.drawBoard();
    minecraft.generateToolBar();
    minecraft.worldClicked();
    minecraft.build();

});
