function drawGraph(x, y, width, height, barSpacing, withBorder, title, yLabel, ctx, data) {
    var titleHeight = 20;
    var labelHeight = 20;
    var labelWidth = 40;
    var graphWidth = width - labelWidth;
    var graphHeight = height - labelHeight - titleHeight;
    var maxBarHeight = data[maxValueIndex(data)][1] * 1.05;
    
    ctx.save();
    
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "10px sans-serif";
    ctx.transform(1, 0, 0, 1, x + labelWidth, y + titleHeight);
    if (withBorder) {
        ctx.strokeRect(-labelWidth, -titleHeight, width, height);
    }
    ctx.strokeRect(0, 0, graphWidth, graphHeight);
    
    data.forEach(function(item, index){
        ctx.fillRect((graphWidth / data.length) * index + barSpacing / 2,
                     graphHeight - graphHeight * item[1] / maxBarHeight,
                     graphWidth / data.length - barSpacing,
                     graphHeight * item[1] / maxBarHeight);
        ctx.save();
        ctx.fillStyle = "#000";
        ctx.fillText(item[0], (graphWidth / data.length + 1) / 2 + (graphWidth / data.length) * index, (graphHeight + height - titleHeight) / 2);
        ctx.restore();
    });
    
    ctx.fillStyle = "#000";
    ctx.textAlign = "right";
    var scale = 1;
    while (graphHeight / (maxBarHeight / scale) <= 10) {
        scale *= 5;
        if (graphHeight / (maxBarHeight / scale) <= 10) {
            scale *= 2;
        } else {
            break;
        }
    }
    for (var i = 0; i < Math.ceil(maxBarHeight / scale); i++) {
        ctx.beginPath();
        ctx.moveTo(0, graphHeight - i * (graphHeight / (maxBarHeight / scale)));
        ctx.lineTo(-5, graphHeight - i * (graphHeight / (maxBarHeight / scale)));
        ctx.stroke();
        ctx.fillText(scale * i, -7, graphHeight - i * (graphHeight / (maxBarHeight / scale)));
    }
    
    
    ctx.textAlign = "center";
    ctx.save();
    ctx.font = "small-caps bold 10px sans-serif";
    console.log(ctx.font);
    ctx.fillText(title, (withBorder ? (graphWidth - labelWidth) : graphWidth) / 2, -10);
    ctx.restore();
    ctx.rotate(1.5 * Math.PI);
    ctx.fillText(yLabel, (withBorder ? (2 * titleHeight - height) : -graphWidth) / 2, -30);
    
    ctx.restore();
}

function maxValueIndex(data) {
    var values = data.map(function(currentValue){
        return currentValue[1];
    });
    return values.indexOf(Math.max(...values));
}