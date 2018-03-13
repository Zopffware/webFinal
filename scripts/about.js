var canvas = document.getElementById("barGraph");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#00f";
drawGraph(0.5, 0.5, 199, 199, 7, true, "Our Results", "Customer Satisfaction", ctx, [
    ["Trial", 5],
    ["Small", 10],
    ["Large", 20],
    ["Deluxe", 40]
]);