/**
 * Created by itc_user1 on 1/3/2017.
 */

 $("#startButton").click(function () {
     $("#splashScreen").hide();
     $("#grid, #toolBar").show();
 });
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
    $("#axe").click(function () {
        console.log("clicked axe");
        currentTool = 1;
        console.log(currentTool);
    });
    $("#pickAxe").click(function () {
        console.log("clicked pickaxe");
        currentTool = 2;
        console.log(currentTool);
    });
    $("#Shovel").click(function () {
        console.log("clicked shovel");
        currentTool = 3;
        console.log(currentTool);
    });
    // makes divs selectable
    $(".cols").click(minecraft.ifClicked);
}
    //
    // $(".tree").click(function () {
    //     ()removeClass(".tree")
    //     (#block)addClass(".tree")

minecraft.ifClicked = function() {
    if (currentTool === 1) {
        $(".tree").click(function () {
            $(this).removeClass("tree")
            $("#block").addClass("tree")
    })
    }
}


        // if (divClicked.hasClass("tree")){ //and div with class tree is clicked (currentTool === 1) && (
    //      //set background image to nothing
    //     console.log("hi");
    //     // $(".div").removeClass("tree"); //set background image to nothing
    // }





$(document).ready(function () {
    minecraft.createGrid();
    minecraft.drawBoard();
    minecraft.generateToolBar();
    minecraft.ifClicked();

});
