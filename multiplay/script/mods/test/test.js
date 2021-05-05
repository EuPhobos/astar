namespace("test_");

var mark = {x:0,y:0}
function test_eventBeacon(x,y,f,t,m){
	if(mark.x == 0 && mark.y == 0){mark = {x:x,y:y}; return;}
	var start = mark;
	var finish = {x:x,y:y}
	mark = {x:x,y:y}
	// Запрашиваем дистанцию (начало, конец, вода-путь)
	var res = aStarDist(start, finish, true);
	if(res['path'].length==0)return;
	hackMarkTiles();
	res['path'].forEach((e)=>hackMarkTiles(e.x,e.y));
//	debug(JSON.stringify(res));
	debug("Distance: "+res['path'].length);
	debug("Objects:"+res['obj'].length);
}

//Для начала нужно инициализировать графы ПОСЛЕ старта матча
//Обычно в игре диагональный путь запрещён, поэтому ставим false
//Если не нужно выводить/рисовать карту в stdout, ставим false
//aStarInit(диагональ, карта);
//или просто aStarInit();

function test_eventStartLevel() {
//	for non-diagonal path	
	aStarInit(false, true);
	
//	for diagonal path
//	aStarInit(true);
}

function test_eventGameLoaded(){
//	for non-diagonal path
	aStarInit(false, true);
	
//	for diagonal path
//	aStarInit(true);
}

// queue("test", 10000);
// function test(){
// 	aStarInit(true);
// }
