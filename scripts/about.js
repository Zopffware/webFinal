var canvas = document.getElementById("barGraph");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#357";
drawGraph(0.5, 0.5, 199, 199, 7, true, "Our Results", "Customer Satisfaction", ctx, [
    ["Trial", 40],
    ["Small", 60],
    ["Large", 80],
    ["Deluxe", 100]
]);
