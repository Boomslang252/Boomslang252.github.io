console.log("linked")
//https://stackoverflow.com/questions/5203407/javascript-multiple-keys-pressed-at-once
//http://www.somethinghitme.com/2013/01/09/creating-a-canvas-platformer-tutorial-part-one/

function often(){
    var requestAnimationFrame = window.requestAnimationFrame|| window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
};
window.addEventListener("load", function(){
	update()
	console.log("loaded")
})

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 1000,
    height = 500
var knightsprite = new Image();
var i=0

function increaseI(){
	if(attacking==false){
	i++
	}
}
function sprite(){
	
	if(movement==false&&direction=="right"){
		increaseI()
		if(i==0){
			knightsprite.src = "/idle/FaraamKnightIdle1.PNG";
		}
		if(i==6){
			knightsprite.src="/idle/FaraamKnightIdle2.PNG";
		}
		if(i==12){
			knightsprite.src="/idle/FaraamKnightIdle3.PNG";
		}
		if(i==18){
			knightsprite.src="/idle/FaraamKnightIdle4.PNG";
		}
		if(i==24){
			knightsprite.src="/idle/FaraamKnightIdle5.PNG";
		}
		if(i==30){
			knightsprite.src = "/idle/FaraamKnightIdle6.PNG";
		}
		if(i==36){
			knightsprite.src="/idle/FaraamKnightIdle7.PNG";
		}
		if(i==42){
			knightsprite.src="/idle/FaraamKnightIdle8.PNG";
		}
		if(i>=42){
			i=0
		}
	}
	else if(direction=="right"&&attacking==false){
		knightsprite.src="/idle/FaraamKnightIdle1.PNG";	
	} 
	if(movement==false&&direction=="left"){
		i++
		if(i==0){
			knightsprite.src = "/idleLeft/idleLeft1.PNG";
		}
		if(i==6){
			knightsprite.src="/idleLeft/idleLeft2.PNG";
		}
		if(i==12){
			knightsprite.src="/idleLeft/idleLeft3.PNG";
		}
		if(i==18){
			knightsprite.src="/idleLeft/idleLeft4.PNG";
		}
		if(i==24){
			knightsprite.src="/idleLeft/idleLeft5.PNG";
		}
		if(i==30){
			knightsprite.src = "/idleLeft/idleLeft6.PNG";
		}
		if(i==36){
			knightsprite.src="/idleLeft/idleLeft7.PNG";
		}
		if(i==42){
			knightsprite.src="/idleLeft/idleLeft8.PNG";
		}
		if(i>=42){
			i=0
		}
	}
	else if(direction=="left"&&attacking==false){
		knightsprite.src="/idleLeft/idleLeft1.PNG"
	}
}

let player = {
		x : 30,
		y : 450,
		width :40,
		height : 40,
		speed: 5,
		velX: 0,
		velY: 0,
		jumping: false,
		color: "red",
		hp: 100,
    }
playerHitbox={
	x:player.x,
	y:player.y,
	width:20,
	height:30
}
    keys = [];
	gravity = 0.3;

canvas.width = width;
canvas.height = height;
function drawPlayer(){
	//ctx.fillStyle = player.color
	//ctx.fillRect (player.x, player.y, player.width, player.height)
	ctx.drawImage(knightsprite,player.x, player.y,player.width,player.height);
	playerHitbox.x=player.x+10
	playerHitbox.y=player.y+5

}
var movement=false
document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
	movement=true
});
 
document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
	movement=false
});

function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function attackAnim(){
	if (attacking==true){
				if(t==0)	
					knightsprite.src = "/attackright/FaraamKnightAttackR 1.PNG";
				}
				if(t==3){
					knightsprite.src="/attackright/FaraamKnightAttackR 2.PNG";
				}
				if(t==6){
					knightsprite.src="/attackright/FaraamKnightAttackR 3.PNG";
				}
				if(t==9){
					knightsprite.src="/attackright/FaraamKnightAttackR 4.PNG";
				}
				if(t>=12){
					t=0
				}
				t++
	}
function attackAnimLeft(){
	if (attacking==true){
				if(t==0)	
					knightsprite.src = "/attackleft/FaraamKnightAttackL 1.PNG";
				}
				if(t==3){
					knightsprite.src="/attackleft/FaraamKnightAttackL 2.PNG";
				}
				if(t==6){
					knightsprite.src="/attackleft/FaraamKnightAttackL 3.PNG";
				}
				if(t==9){
					knightsprite.src="/attackleft/FaraamKnightAttackL 4.PNG";
				}
				if(t>=12){
					t=0
				}
				t++
	}
var direction= "right"
var invincible= false
var hit=false
var cooldown=false
var shotsfired=0
var damage=0
var struck=false
var t=0
function update(){
	clearCanvas();
		// check keys
	if (keys[39]) {
		// right arrow
		if (player.velX < player.speed) {                         
			player.velX++;  
			direction="right"
		}          
	}          
	if (keys[37]) {                 
			// left arrow                  
		if (player.velX > -player.speed) {
           player.velX--;
		   direction="left"
		}
	}
	if (keys[38]) {
    // up arrow or space
	if(!player.jumping){
	player.jumping = true;
	player.velY = -player.speed*2;
		}
	}
	if(keys[90]){
		struck=false
		if(direction=="right"&&cooldown==false&&player.jumping==false){
			cooldown=true
			player.speed=0
			sword.x=player.x+40
			sword.y=player.y+23
			attacking=true
			setTimeout(function(){attacking=false, player.speed=5}, 500)
			setTimeout(function(){cooldown=false}, 1000)
				
			}
		if(direction=="left"&&cooldown==false&&player.jumping==false){
			cooldown=true
			player.speed=0
			sword.x=player.x-20
			sword.y=player.y+23
			attacking=true
			setTimeout(function(){attacking=false, player.speed=5}, 500)
			setTimeout(function(){cooldown=false}, 1000)
		}
	}
	if(keys[88]&&shotsfired==0){
		shot=true
		shooting()
		shotsfired=1
		damage=0
	}
	friction = 0.8;
	player.velX *= friction;
	player.velY += gravity;
	player.x += player.velX;
	player.y += player.velY;
	if (player.x >= width-player.width) {
    player.x = width-player.width;
	} else if (player.x <= 0) {
    player.x = 0;
	}
	if(player.y >= height-player.height){
    player.y = height - player.height;
    player.jumping = false;
	}
	if(player.hp<=0){
		drops.x=player.x
		drops.y=player.y
		player.x= 30
		player.y= 450
		player.hp=100
		deathScore=score
		score=0
		if(death==0){
			death=1
			drops.width = 10
			drops.height = 10
			enemy.hp=20
		}else if(death==1){
			death=0
			pickedUp=false
			pickedUp2=false
			pickedUp3=false
			coin.width=10
			coin.height=10
			coin2.width=10
			coin2.height=10
			coin3.width=10
			coin3.height=10
			enemy.hp=20
		}
		
		pickedUpDrops==false
	}
	prepareToDie();
	document.getElementById("Points").innerText=score
	drawCircle();
	sprite();
	drawhp();
	BUILDAWALL();
	drawEnemy();
	//drawEnemy2();
	attackRight()
	if(attacking==true&&direction=="right"){
		attackAnim();
	}
	if(attacking==true&&direction=="left"){
		attackAnimLeft()
	}
	drawLine();
	drawLine2();
	drawLine3();
	drawCoin();
	drawCoin2();
	drawCoin3();
	drawDrops();
	drawPlayer();
	drawDoor();
	shooting()
	drawBHitbox();
	win();
//	ctx.drawImage(knightsprite,0,0)
	if(isCollisionTop(playerHitbox,platform)==false && isCollisionTop(player,platform2)==false && isCollisionTop(playerHitbox,platform3)==false){
		gravity=0.3
	}else{
		player.velY=0
		gravity=0
		player.jumping=false
	}
	
	if(isCollisionEnemy(playerHitbox,enemy)==true){
		console.log("ouch")
		if(invincible == false){
			player.hp= player.hp-20
			invincible = true
			setTimeout(function(){invincible=false}, 500)
		}
	}
	if(isCollisionCoin(playerHitbox,coin) ==true){
		pickedUp=true
		console.log("collision")
		coin.width=-1
		coin.height=-1
		score+=1
	}
		

	if(isCollisionCoin(playerHitbox,coin2) ==true){
		pickedUp2=true
		coin2.width=0
		coin2.height=0
		score+=1
	}
	if(isCollisionCoin(playerHitbox,coin3) ==true){
		pickedUp3=true
		coin3.width=0
		coin3.height=0
		score+=1
	}
	if(isCollisionCoin(playerHitbox,drops) ==true){
		death=0
		drops.width=0
		drops.height=0
		score+=deathScore
	}
	if(isCollisionWall(playerHitbox,trumpWall) ==true){
		player.x=trumpWall.x-70
	}
	if(isCollisionCoin(sword,enemy)==true&&hit==false&&struck==false){
		enemy.hp=enemy.hp-5
		hit=true;
		struck=true
		setTimeout(function(){hit=false},1000)
		
	}
	if(isCollisionEnemy(bulletHitbox,enemy)==true&&damage==0){
		enemy.stunned=true
		//(function(){shot=false},2000)
		shot=false
		bulletDirection=undefined
		shotsfired=0
		j=0
		setTimeout(function(){enemy.stunned=false},1000)
		damage=1
	}
	if(isCollisionEnemy(bulletHitbox,trumpWall)==true){
		shot=false
		bulletDirection=undefined
		shotsfired=0
		j=0
	}
    requestAnimationFrame(update);
}

var myBackground;
function prepareToDie() {
    myBackground = new component(1000, 500, "/animations/BackgroundTileShader.PNG", 1, 1, "image");
	myBackground.update();
}



function component(width, height, color, x, y, type){
this.type = type;
    if (type == "image") {
        this.image = new Image(width, height);
        this.image.src = color;
		
		this.image.onload = this.update;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
   
        if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        } else {
            //ctx.fillStyle = color;
           // ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }    
}

function isCollisionTop(lhs, rhs){
    lt = lhs.y;
    lb = lhs.y + lhs.height;
    ll = lhs.x;
    lr = lhs.x + lhs.width;
    rt = rhs.y;
    rb = rhs.y + rhs.height;
    rl = rhs.x;
    rr = rhs.x + rhs.width;
   // console.log('lt',lt,'lb',lb,'ll',ll,'lr',lr)
    //console.log('rt',rt,'rb',rb,'rl',rl,'rr',rr)
	
  // if (lt <= rb && lt >= rt && lr >= rl && lr <= rr) return true;
	
    if (lb <= rb && lb >= rt && lr >= rl && lr <= rr) return true;
	//middle
   // if (lt <= rb && lt >= rt && ll >= rl && ll <= rr) return true;
   
    //if (lb <= rb && lb >= rt && ll >= rl && ll <= rr) return true;
    return false;
}

function isCollisionEnemy(lhs, rhs){
    lt = lhs.y;
    lb = lhs.y + lhs.height;
    ll = lhs.x;
    lr = lhs.x + lhs.width;
    rt = rhs.y;
    rb = rhs.y + rhs.height;
    rl = rhs.x;
    rr = rhs.x + rhs.width;
   //console.log('lt',lt,'lb',lb,'ll',ll,'lr',lr)
    //console.log('rt',rt,'rb',rb,'rl',rl,'rr',rr)
	
   if (lt <= rb && lt >= rt && lr >= rl && lr <= rr) return true;
	
    if (lb <= rb && lb >= rt && lr >= rl && lr <= rr) return true;
	//middle
    if (lt <= rb && lt >= rt && ll >= rl && ll <= rr) return true;
   
    if (lb <= rb && lb >= rt && ll >= rl && ll <= rr) return true;
    return false;
}
function isCollisionCoin(lhs, rhs){
    lt = lhs.y;
    lb = lhs.y + lhs.height;
    ll = lhs.x;
    lr = lhs.x + lhs.width;
    rt = rhs.y;
    rb = rhs.y + rhs.height;
    rl = rhs.x;
    rr = rhs.x + rhs.width;
   //console.log('lt',lt,'lb',lb,'ll',ll,'lr',lr)
    //console.log('rt',rt,'rb',rb,'rl',rl,'rr',rr)
	
   if (lt <= rb && lt >= rt && lr >= rl && lr <= rr) return true;
	
    if (lb <= rb && lb >= rt && lr >= rl && lr <= rr) return true;
	//middle
    if (lt <= rb && lt >= rt && ll >= rl && ll <= rr) return true;
   
    if (lb <= rb && lb >= rt && ll >= rl && ll <= rr) return true;
    return false;
}
function isCollisionWall(lhs, rhs){
    lt = lhs.y;
    lb = lhs.y + lhs.height;
    ll = lhs.x;
    lr = lhs.x + lhs.width;
    rt = rhs.y;
    rb = rhs.y + rhs.height;
    rl = rhs.x;
    rr = rhs.x + rhs.width;
   //console.log('lt',lt,'lb',lb,'ll',ll,'lr',lr)
    //console.log('rt',rt,'rb',rb,'rl',rl,'rr',rr)
	//MexicanSide
   if (lt <= rb && lt >= rt && lr >= rl && lr <= rr) return true;
	
   // if (lb <= rb && lb >= rt && lr >= rl && lr <= rr) return true;
	//US Side
    //if (lt <= rb && lt >= rt && ll >= rl && ll <= rr) return true;
   
    //if (lb <= rb && lb >= rt && ll >= rl && ll <= rr) return true;
    return false;
}

let platform = drawLine();
let platform2 = drawLine2();
let platform3 = drawLine3();
	function drawLine(){
	ctx.beginPath();
	ctx.moveTo(300,400);
	ctx.lineTo (500,400);
	ctx.strokeStyle="orange"
	ctx.lineWidth=4;
	ctx.stroke();
		return {
			x: 300,
			width: 200,
			y:400,
			height: 10,
		}
}
	
	function drawLine2() {
	ctx.beginPath();
	ctx.moveTo(100,300);
	ctx.lineTo (200,300);
	ctx.strokeStyle="orange"
	ctx.lineWidth=4
	ctx.stroke();
		return {
			x: 100,
			width: 100,
			y:300,
			height: 10,
		}
	}
	function drawLine3(){
	ctx.beginPath();
	ctx.moveTo(300,200);
	ctx.lineTo (500,200);
	ctx.strokeStyle="orange"
	ctx.lineWidth=4
	ctx.stroke();
		return {
			x: 300,
			width: 200,
			y:200,
			height: 10,
		}
	}
	function drawhp() {
	ctx.beginPath();
	ctx.moveTo(60,20);
	ctx.strokeStyle = "red"
	ctx.lineTo (player.hp * 3,20);
	ctx.lineWidth=10
	ctx.stroke();
	}
	
function drawCircle(){
	ctx.beginPath();
	ctx.arc(28,28,25,0,2*Math.PI);
	ctx.fillStyle="#F1F1D4"
	ctx.fill();
	ctx.strokeStyle="#F1F1D4"
	ctx.stroke();
}
	
let enemy={
	x : 400,
	y : 365,
	width : 35,
	height : 35,
	speed: 5,
	color: "#52FA35",
	hp:20,
	stunned:false,
}
var patrol = true
function drawEnemy(){
	ctx.fillStyle = enemy.color;
    ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
	if(enemy.stunned==true){
		return;
	}
	if (enemy.x < 500 && patrol == true){
		enemy.x++
		if (enemy.x == 480){
			patrol = false
		}
	}
	else if (enemy.x > 300){
		enemy.x--
		if(enemy.x==301){
			patrol=true
		}
	}
	if (enemy.hp<=0){
		enemy.width=0
		enemy.height=0
	}
}

let coin={
	x:500,
	y: 100,
	width: 10,
	height:10,
	color:"gold",
}
let coin2={
	x:400,
	y: 300,
	width: 10,
	height:10,
	color:"gold",
}
let coin3={
	x:900,
	y: 400,
	width: 10,
	height:10,
	color:"gold",
}
var pickedUp=false
var pickedUp2=false
var pickedUp3=false
var pickedUpDrops=false
function drawCoin(){
	if(pickedUp==false){
	ctx.fillStyle=coin.color;
	ctx.fillRect(coin.x,coin.y, coin.width, coin.height);
	}
}
function drawCoin2(){
	
	if(pickedUp2==false){
	ctx.fillStyle=coin2.color;
	ctx.fillRect(coin2.x,coin2.y, coin2.width, coin2.height);
	}
}
function drawCoin3(){
	if(pickedUp3==false){
	ctx.fillStyle=coin3.color;
	ctx.fillRect(coin3.x,coin3.y, coin3.width, coin3.height);
	}
}
var death=0
let drops={
	x: 0,
	y: 0,
	width:10,
	height:10,
	color:"blue"
}
function drawDrops(){
	if(death==1&&pickedUpDrops==false){
		ctx.fillStyle=drops.color;
		ctx.fillRect(drops.x,drops.y,drops.width,drops.height)
	}
}
let door={
	x:960,
	y:410,
	width:40,
	height:90,
	color:"gold"
}
function drawDoor(){
	ctx.fillStyle=door.color;
	ctx.fillRect(door.x, door.y, door.width, door.height)
}
let trumpWall = {
	x:600,
	y:200,
	width:20,
	height:400,
	color:"blue"
}
function BUILDAWALL(){
	ctx.beginPath();
	ctx.moveTo(600,500);
	ctx.strokeStyle = trumpWall.color
	ctx.lineTo (600,200);
	ctx.lineWidth=20
	ctx.stroke();
}
var score=0
var deathScore=0
function win(){
	if(isCollisionCoin(playerHitbox,door)==true){
		if(score==3){
			document.getElementById("Winner").style.visibility="visible"
			console.log("You Are Win, you get thick thies")
		}
 	}
}
var attacking=false
var sword={
	x:playerHitbox.x+5,
	y:playerHitbox.y,
	width:20,
	height:5,
	color:"white"
}
function attackRight(){
	if(attacking==true){
	//ctx.fillStyle=sword.color
	//ctx.fillRect(sword.x,sword.y,sword.width,sword.height)
	}
}
var bulletDirection=undefined
var shot=false
var bullet={
	x:playerHitbox.x,
	y:playerHitbox.y,
	width:60,
	height:60,
	speed:5,
}
var bulletSprite= new Image();
var j=0
var k=0
bulletSprite.src= "/BlastRight/FaraamKnightBlastR 1.PNG"
function shooting(){
	if(shot==true){
		for (j;j<1;j++){
			console.log("x chosen")
			bullet.x=playerHitbox.x
			bullet.y=playerHitbox.y-10
		}
		if (bulletDirection==undefined){
			bulletDirection=direction}
		if(bulletDirection=="right"){
			ctx.drawImage(bulletSprite,bullet.x,bullet.y,bullet.width,bullet.height)	
			bullet.x+=bullet.speed
		}
		if(bulletDirection=="left"){
			ctx.drawImage(bulletSprite,bullet.x,bullet.y,bullet.width,bullet.height)	
			bullet.x-=bullet.speed
		}
		if(bullet.x>=canvas.width||bullet.x<=0){
			shot=false
			bulletDirection=undefined
			shotsfired=0
			j=0
			}
		}
	if(bulletDirection=="right"){
		if(k==0){
				bulletSprite.src = "/BlastRight/FaraamKnightBlastR 1.PNG";
			}
			if(k==6){
				bulletSprite.src="/BlastRight/FaraamKnightBlastR 2.PNG";
			}
			if(k==12){
				bulletSprite.src="/BlastRight/FaraamKnightBlastR 3.PNG";
			}
			if(k==18){
				bulletSprite.src="/BlastRight/FaraamKnightBlastR 4.PNG";
			}
			if(k==24){
				bulletSprite.src="/BlastRight/FaraamKnightBlastR 5.PNG";
			}
			if(k==30){
				bulletSprite.src = "/BlastRight/FaraamKnightBlastR 6.PNG";
			}
			if(k==36){
				bulletSprite.src="/BlastRight/FaraamKnightBlastR 7.PNG";
			}
			if(k==42){
				bulletSprite.src="/BlastRight/FaraamKnightBlastR 8.PNG";
			}
			if(k>=42){
				k=0
			}
			k++
	}
	if(bulletDirection=="left"){
			if(k==0){
				bulletSprite.src = "/blastleft/FaraamKnightBlastL1.PNG";
			}
			if(k==6){
				bulletSprite.src="/blastleft/FaraamKnightBlastL 2.PNG";
			}
			if(k==12){
				bulletSprite.src="/blastleft/FaraamKnightBlastL 3.PNG";
			}
			if(k==18){
				bulletSprite.src="/blastleft/FaraamKnightBlastL 4.PNG";
			}
			if(k==24){
				bulletSprite.src="/blastleft/FaraamKnightBlastL 5.PNG";
			}
			if(k==30){
				bulletSprite.src = "/blastleft/FaraamKnightBlastL 6.PNG";
			}
			if(k==36){
				bulletSprite.src="/blastleft/FaraamKnightBlastL 7.PNG";
			}
			if(k==42){
				bulletSprite.src="/blastleft/FaraamKnightBlastL 8.PNG";
			}
			if(k>=42){
				k=0
			}
			k++
		}
}
bulletHitbox={
	x:bullet.x,
	y:bullet.y,
	width:40,
	height:20,
}
function drawBHitbox(){
	bulletHitbox.x=bullet.x
	bulletHitbox.y=bullet.y+16
}
/*let enemy2={
	x : 600,
	y : 100,
	width : 35,
	height : 35,
	speed: 5,
	color: "#52FA35",
	hp:20,
	stunned:false,
}*/
/*function drawEnemy2(){
	ctx.fillStyle = enemy2.color;
    ctx.fillRect(enemy2.x, enemy2.y, enemy2.width, enemy2.height);
	if(enemy.stunned==true){
		return;
	}
	if (enemy2.y < 500 && patrol == true){
		enemy2.y++
		if (enemy2 == 480){
			patrol2 = false
		}
	}
	else if (enemy2.y > 100){
		enemy2.y--
		if(enemy2.y==100){
			patrol2=true
		}
	}
	if (enemy2.hp<=0){
		enemy2.width=0
		enemy2.height=0
	}
}*/