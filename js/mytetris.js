var canvasHeight=440;
var canvasWidth=400;
var shapes=[
        [
            [-1,1],[0,1],[1,1],[0,0] //TEE
        ],
        [
            [-1,0],[0,0],[1,0],[2,0] //line
        ],
        [
            [-1,-1],[-1,0],[0,0],[1,0] //L EL
        ],
        [
            [1,-1],[-1,0],[0,0],[1,0] //R EL
        ],
        [
            [0,-1],[1,-1],[-1,0],[0,0] // R ess
        ],
        [
            [-1,-1],[0,-1],[0,0],[1,0] //L ess
        ],
        [
            [0,-1],[1,-1],[0,0],[1,0] //square
        ]
    ];
var Tsize=20;

function drawshape (x,y,p) {
	var canvas=document.getElementById('canvas');
	// canvas.appendChild(bl);
	// canvas.innerHTML=shapes[0][0][0];
	for (var i = shapes[0].length - 1; i >= 0; i--) {
		canvas.appendChild(createblock(shapes[0][i][0],shapes[0][i][1],'ku'))
	};
}

function createblock(x, y, type){
        var el = document.createElement('div');
        el.className = type;
        x+=5;
        el.style.left = x * this.Tsize + 'px';
        el.style.top = y * this.Tsize + 'px';
        return el;
}
function move (b) {
	var curtbl=document.getElementsByTagName(b);
	var tmppos=0;
    tmppos+=1*Tsize;
    curtbl.style.top=tmppos+'px';
	document.getElementById("show").innerHTML=tmppos;

}
drawshape();
move('div');
