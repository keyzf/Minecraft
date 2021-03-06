/**
 * Created by itc_user1 on 1/3/2017.
 */
 $("#grid, #toolBar").hide();
 
 $("#startButton").click(function () {
      $("#startButton, .backgroundImage").hide();
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
    for (var i=280; i<400 ; i++) {
            $(".cols").eq(i).addClass("dirt");
        }

    for (var i=260; i<280 ; i++) {
        $(".cols").eq(i).addClass("grass");
    }

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
    $("div").eq(69).addClass("cloud");
    $("div").eq(89).addClass("cloud");
    $("div").eq(90).addClass("cloud");
    $("div").eq(91).addClass("cloud");
    $("div").eq(93).addClass("cloud");
    $("div").eq(94).addClass("cloud");
    $("div").eq(109).addClass("cloud");
    $("div").eq(110).addClass("cloud");
    $("div").eq(111).addClass("cloud");
    $("div").eq(112).addClass("cloud");
    $("div").eq(113).addClass("cloud");
    $("div").eq(114).addClass("cloud");
    $("div").eq(115).addClass("cloud");
    $("div").eq(134).addClass("cloud");

};

minecraft.generateToolBar = function() {
    console.log(minecraft.currentTool)
    $("#axe").click(function () {
        minecraft.currentTool = 1;
        console.log(minecraft.currentTool);
    });
    $("#pickAxe").click(function () {
        minecraft.currentTool = 2;
        console.log(minecraft.currentTool);
    });
    $("#shovel").click(function () {
        minecraft.currentTool = 3;
        console.log(minecraft.currentTool);
    });
    $("#block").click(function () {
        minecraft.currentTool = 4;
        console.log(minecraft.currentTool);
    });
    $(".cols").click(minecraft.worldClicked);
}


minecraft.worldClicked = function(e) {
    console.log(minecraft.currentClass);
    if (minecraft.currentTool === 1 && $(this).hasClass("tree")) {
        $(this).removeClass("tree")
        $("#block").removeClass(minecraft.currentClass)
        $("#block").addClass("tree")
        minecraft.currentClass = "tree";
    }
    if (minecraft.currentTool === 1 && $(this).hasClass("leaves")) {
        $(this).removeClass("leaves")
        $("#block").removeClass(minecraft.currentClass)
        $("#block").addClass("leaves")
        minecraft.currentClass = "leaves";
    }

    if (minecraft.currentTool === 2 && $(this).hasClass("rocks")) {
        $(this).removeClass("rocks")
        $("#block").removeClass(minecraft.currentClass)
        $("#block").addClass("rocks")
        minecraft.currentClass = "rocks";

    }
    if (minecraft.currentTool === 3 && $(this).hasClass("dirt")) {
        $(this).removeClass("dirt")
        $("#block").removeClass(minecraft.currentClass)
        $("#block").addClass("dirt")
        minecraft.currentClass = "dirt";

    }
    if (minecraft.currentTool === 3 && $(this).hasClass("grass")) {
        $(this).removeClass("grass")
        $("#block").removeClass(minecraft.currentClass)
        $("#block").addClass("grass")
        minecraft.currentClass = "grass";
    }

    if (minecraft.currentTool === 4 && !($(this).hasClass("dirt") || $(this).hasClass("grass") || $(this).hasClass("leaves") || $(this).hasClass("rocks") || $(this).hasClass("tree"))) { //bug here
        $(this).addClass(minecraft.currentClass)
        $("#block").removeClass(minecraft.currentClass)
        minecraft.currentClass = 0;

    }
}

$(document).ready(function () {
    minecraft.createGrid();
    minecraft.drawBoard();
    minecraft.generateToolBar();
    minecraft.worldClicked();


});
