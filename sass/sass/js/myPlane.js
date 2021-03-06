

//我的飞机: 对象
let myPlane = {
	
	//属性
	ele: null,
	fireInterval: 300, //子弹发射间隔
	
	//方法
	//init: 初始化属性
	init: function(){
		this.ele = document.createElement("div");
		gameEngine.ele.appendChild(this.ele);
		this.ele.className = "myplane";
		this.ele.style.left = (gameEngine.ele.offsetWidth-this.ele.offsetWidth)/2 + "px";
		this.ele.style.top = gameEngine.ele.offsetHeight-this.ele.offsetHeight + "px";
		
		return this;
	},
	
	//开火,发射子弹
	fire: function(){
		
		setInterval(function(){
			
			//创建子弹对象
			let bullet = new Bullet();
			bullet.init().move();
			
		}, this.fireInterval);
		
	},
	
	//可以拖拽
	canMove: function(){
		
		this.ele.onmousedown = function(e){
			e = e || event;
			e.preventDefault();
			let [disx, disy]=[e.offsetX, e.offsetY];
			
			document.onmousemove = function(e){
				e = e || event;
				let x = e.pageX - disx - gameEngine.ele.offsetLeft;
				if (x <= 0) {
					x = 0;
				}
				else if (x >= gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth) {
					x = gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth;
				}
				myPlane.ele.style.left = x + "px";
				myPlane.ele.style.top = e.pageY - disy + "px";
			}
			document.onmouseup = function(){
				document.onmousemove = document.onmouseup = null;
			}
		}
	}
}












