namespace("test_");

var mark = {x:0,y:0}
function test_eventBeacon(x,y,f,t,m){
	if(mark.x == 0 && mark.y == 0){mark = {x:x,y:y}; return;}
	var start = mark;
	var finish = {x:x,y:y}
	mark = {x:x,y:y}
	// Запрашиваем дистанцию (начало, конец, вода-путь)
	var res = aStarDist(start, finish, true);
	if(res.length==0)return;
	hackMarkTiles();
	res.forEach((e)=>hackMarkTiles(e.x,e.y));
	debug("Distance: "+res.length);
}
