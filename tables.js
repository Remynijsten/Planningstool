// Create Table Colums
for (i=1 ; i<=6 ; i++){
	var grid = document.createElement("div");
	var span = document.createElement("span");
	span.className = "timeTXT";
	span.style.zIndex = "50";
	grid.className = "gridcolumn";
	var time = i +1;
	var time = document.createTextNode("1" + time + ":00");
	$(span).append(time);
	$(grid).append(span);
	$(".table").append(grid);
}