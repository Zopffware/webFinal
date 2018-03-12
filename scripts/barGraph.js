function drawGraph(x, y, width, height, barSpacing, title, yLabel, ctx, data) {
    var labelSize = 20
    var graphWidth = width - labelSize;
    var graphHeight = height - labelSize;
    
    ctx.save();
    
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.transform(1, 0, 0, 1, x + labelSize, y);
    ctx.strokeRect(-labelSize, 0, width, height);
    ctx.strokeRect(0, 0, graphWidth, graphHeight);
    
    data.forEach(function(item, index){
        ctx.fillRect((graphWidth / data.length) * index + barSpacing / 2,
                     graphHeight - graphHeight * item[1] / data[maxValueIndex(data)][1],
                     graphWidth / data.length - barSpacing,
                     graphHeight * item[1] / data[maxValueIndex(data)][1]);
        ctx.save();
        ctx.fillStyle = "#000";
        ctx.fillText(item[0], (graphWidth / data.length + 1) / 2 + (graphWidth / data.length) * index, (graphHeight + height) / 2);
        ctx.restore();
    });
    ctx.fillStyle = "#000";
    
    
    ctx.restore();
}

function maxValueIndex(data) {
    var values = data.map(function(currentValue){
        return currentValue[1];
    });
    return values.indexOf(Math.max(...values));
}