function drawGraph(x, y, width, height, barSpacing, title, yLabel, ctx, data) {
    ctx.save();
    
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.transform(1, 0, 0, 1, x, y);
    ctx.strokeRect(0, 0, width, height);
    
    data.forEach(function(item, index){
        ctx.fillRect((width / data.length) * index + barSpacing / 2, height - height * item[1] / data[maxValueIndex(data)][1],
                     width / data.length - barSpacing, height * item[1] / data[maxValueIndex(data)][1]);
    });
    
    ctx.restore();
}

function maxValueIndex(data) {
    var values = data.map(function(currentValue){
        return currentValue[1];
    });
    return values.indexOf(Math.max(...values));
}