!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=2)}([function(e,t){const s={collide(e,t){const s=e.physics.width?e.physics.width:e.sprite.width,i=t.physics.width?t.physics.width:t.sprite.width,n=e.physics.height?e.physics.height:e.sprite.height,a=t.physics.height?t.physics.height:t.sprite.height;return e.physics.x<t.physics.x+i&&e.physics.x+s>t.physics.x&&e.physics.y<t.physics.y+a&&e.physics.y+n>t.physics.y},collide_with_scale(e,t){const s=e.physics.width?e.physics.width:e.sprite.width*e.sprite.width_scale,i=t.physics.width?t.physics.width:t.sprite.width*t.sprite.width_scale,n=e.physics.height?e.physics.height:e.sprite.height*e.sprite.height_scale,a=t.physics.height?t.physics.height:t.sprite.height*t.sprite.height_scale;return e.physics.x<t.physics.x+i&&e.physics.x+s>t.physics.x&&e.physics.y<t.physics.y+a&&e.physics.y+n>t.physics.y}};e.exports=s},function(e,t){},function(e,t,s){"use strict";s.r(t);var i=class{constructor(e,t,s=null,i=null){this.x=e,this.y=t,this.width=s,this.height=i,this.dLeft=0,this.dRight=0,this.dDown=0,this.dUp=0,this.dx=this.dx.bind(this),this.dy=this.dy.bind(this),this.speed=1.5}dx(){return-this.dLeft+this.dRight}dy(){return-this.dUp+this.dDown}updatePosition(){this.x+=this.dx(),this.y+=this.dy()}boundedUpdate(){const{dx:e,dy:t}=this;this.boundedMove({x:e(),y:t()},{top:0,down:580,left:80,right:350})}boundedMove(e,t){this.x+=e.x,this.y+=e.y,this.x<t.left&&(this.x=t.left),this.x>t.right&&(this.x=t.right),this.y<t.top&&(this.y=t.top),this.y>t.down&&(this.y=t.down)}};var n=class{constructor(e,t,s,i=1,n=1){this.img=e,this.height=t,this.width=s,this.width_scale=i,this.height_scale=n}};const a=new Image;a.src="static/assets/images/road.png";var h=class{constructor(e){this.physics=e,this.sprite=new n(a,1262,502),this.score=0,this.gameOver=!1,this.box=null,this.marked=null}move(){this.physics.dDown=this.physics.speed,console.log("Road speed: "+this.physics.speed)}addScore(){this.gameOver?this.score:this.score+=1}makeGreen(){}stop(){this.physics.dDown=0,this.gameOver=!0}addSpeed(){}};const r=new Image;(new Image).src="static/assets/images/redbox.png";const o=new Image;o.src="static/assets/images/bluebox.png";(new Image).src="static/assets/images/greenbox.png";var c=class{constructor(e,t,s,i,a=-1){this.physics=e,r.src=t,this.sprite=new n(r,50,50,1.5,1.5),this.box=new n(o,40,50,1.5,1.3*1.5),this.marked=s,this.assetid=i,this.recognizedType=this.marked?"U":i[0],this.distance=a}updatesprite(e){r.src=e,this.sprite=new n(r,50,50,1.5,1.5)}move(){this.physics.dDown=this.physics.speed}stop(){this.physics.dDown=0}},d=s(0),l=s.n(d);const m=new Image;(new Image).src="static/assets/images/redbox.png";const g=new Image;g.src="static/assets/images/bluebox.png";(new Image).src="static/assets/images/greenbox.png";var y=class{constructor(e,t,s,i,a=-1){this.physics=e,m.src=t,this.sprite=new n(m,50,50,1.5,1.5),this.box=new n(g,40,50,1.5,1.3*1.5),this.marked=s,this.assetid=i,this.recognizedType=this.marked?"U":i[0],this.distance=a}updatesprite(e){m.src=e,this.sprite=new n(m,50,50,1.5,1.5)}move(){this.physics.dDown=this.physics.speed}stop(){this.physics.dDown=0}};const u=new Image;(new Image).src="static/assets/images/redbox.png";const p=new Image;p.src="static/assets/images/bluebox.png";(new Image).src="static/assets/images/greenbox.png";var E=class{constructor(e,t,s,i,a=-1){this.physics=e,u.src=t,this.sprite=new n(u,50,50,1.5,1.5),this.box=new n(p,40,50,1.5,1.3*1.5),this.marked=s,this.assetid=i,this.distance=a,this.recognizedType=this.marked?"U":i[0]}updatesprite(e){u.src=e,this.sprite=new n(u,50,50,1.5,1.5)}move(){this.physics.dDown=this.physics.speed}stop(){this.physics.dDown=0}};const v=new Image;v.src="static/assets/images/car.png";var f=class{constructor(e){this.physics=e,this.sprite=new n(v,150,70),this.life=3,this.box=null,this.marked=null}hitObstacle(){this.life-=1}getLife(){this.life+=1}resetLife(){this.life=3}makeGreen(){}makeRed(){}draw(e){const{sprite:t,physics:s}=this,i=t.width/-2+s.width/2,n=t.height/-2+s.height/2;e.drawImage(t.img,0,0,t.width,t.height,s.x+i,s.y+n,t.width,t.height)}};var T=()=>({road:new h(new i(0,-561)),car:new f(new i(214,580,70,100))});const b=new Image;b.src="static/assets/images/redbox.png";(new Image).src="static/assets/images/bluebox.png";const w=new Image;w.src="static/assets/images/greenbox.png";s(1);const k=Object.freeze({obstacle:"O",cash:"C",life:"L"}),I=Object.freeze({attention:"A",environment:"E"});var S=!1;const O=Object.freeze({CREATE_ASSET:"CREATE_ASSET",CORRECT_BOXED_RESPONSE:"CORRECT_BOXED_RESPONSE",WRONG_BOXED_RESPONSE:"WRONG_BOXED_RESPONSE",TIMEOUT_BOXED_RESPONSE:"TIMEOUT_BOXED_RESPONSE",CORRECT_DIST_RESPONSE:"CORRECT_DIST_RESPONSE",WRONG_DIST_RESPONSE:"WRONG_DIST_RESPONSE",TIMEOUT_DIST_RESPONSE:"TIMEOUT_DIST_RESPONSE",RANDOMIZE_ICON:"RANDOMIZE_ICON",ENV_QUERY_CREATED:"ENV_QUERY_CREATED",ATT_QUERY_CREATED:"ATT_QUERY_CREATED",NEW_MAIN_QUERY:"NEW_MAIN_QUERY",ASSET_PASSED_CANVAS:"ASSET_PASSED_CANVAS",ASSET_CAR_COLLIDED:"ASSET_CAR_COLLIDED",NEW_DIST_QUERY:"NEW_DIST_QUERY",TREATMENT:"TREATMENT",GAME_OVER:"GAME_OVER",GAME_START:"GAME_START"});var _=null,x=null,R=15;function A(e){for(var t=0,s=1;s<e.length;s++)e[s]<e[t]&&(t=s);return t}class D{constructor(e,t,s){this.canvas=e,this.ctx=t,this.startingCondition=s,this.currentCondition=s,this.currentQuarter=0,this.gameOver=!1,this.rocks=[],this.life=[],this.cash=[],this.boxed=[],this.assets=T(),this.animate=null,this.lifeImgSrc="static/assets/images/life/life (1).png",this.rockImgSrc="static/assets/images/obstacle/obstacle (1).png",this.moneyImgSrc="static/assets/images/money/money (1).png",this.lifeImgLists=[],this.moneyImgLists=[],this.obstacleImgLists=[],this.numImgs=16,this.assetidCounter=-1,this.activeResponse=!1,this.stopBlink=!1,this.queryType=null,this.queryTimeElapsed=!1,this.queryUserResponded=!1,this.PhysicsReference=new i;var n=new Date;this.timeOfLastEnvQuery=n.getTime(),this.timeOfLastAttQuery=n.getTime(),this.timeOfLastDistractorTask=n.getTime(),this.timeOfEnvQueryPlanning=-1,this.randomIthObjectForEnvQuery=1e8,this.startTime=600100,this.num2=0,this.num3=0,this.num1=0,this.distractorTaskActive=!0,this.dataLog="",this.newDistractorTask();for(var a=0;a<this.numImgs;a++)this.lifeImgLists.push("static/assets/images/life/life ("+(a+1).toString()+").png"),this.moneyImgLists.push("static/assets/images/money/money ("+(a+1).toString()+").png"),this.obstacleImgLists.push("static/assets/images/obstacle/obstacle ("+(a+1).toString()+").png");document.getElementById("obstacle").style["background-image"]="url('"+this.rockImgSrc+"')",document.getElementById("money").style["background-image"]="url('"+this.moneyImgSrc+"')",document.getElementById("life").style["background-image"]="url('"+this.lifeImgSrc+"')"}countdown(e,t,s){var i,n,a,h,r,o;function c(e){return e<=9?"0"+e:e}i=document.getElementById(e),n=+new Date+1e3*(60*t+s)+500,function e(){(r=n-+new Date)<1e3?i.innerHTML="Time is up!":(o=new Date(r),a=o.getUTCHours(),h=o.getUTCMinutes(),i.innerHTML=(a?a+":"+c(h):h)+":"+c(o.getUTCSeconds()),setTimeout(e,o.getUTCMilliseconds()+500))}()}holdCanvas(e,t,s){var i=window.setInterval((function(e){document.getElementById("canvas").style.border="20px solid "+s,e.cash[0]?e.cash[0].box.img="red"==s?b:w:e.life[0]?e.life[0].box.img="red"==s?b:w:e.rocks[0].box.img="red"==s?b:w}),5,e,s);setTimeout((function(e){document.getElementById("canvas").style.border="20px solid black",clearInterval(e)}),t,i)}holdDistractorCanvas(e,t){var s=window.setInterval((function(){document.getElementById("distractortask").style.border="20px solid "+t}),5);setTimeout((function(e){document.getElementById("distractortask").style.border="20px solid black",clearInterval(e)}),e,s)}blinkCanvas(e,t,s){var i=window.setInterval((function(){document.getElementById("canvas").style.border!="20px solid "+s?document.getElementById("canvas").style.border="20px solid "+s:document.getElementById("canvas").style.border="20px solid black"}),e);setTimeout((function(e){document.getElementById("canvas").style.border="20px solid black",clearInterval(e)}),t,i)}askEnvironmentQueryBasedOnEnvironmentProbFunction_deprecated(){var e=new Date;if(this.timeOfEnvQueryPlanning<0&&this.timeOfLastAttQuery>this.timeOfLastEnvQuery&&e.getTime()-this.timeOfLastAttQuery>1500){var t=this.timeOfLastAttQuery+19e3-e.getTime()-1500;return t>0&&(this.randomTimeIntervalEnvQuery=Math.random()*t,console.log("Random time interval is "+.001*this.randomTimeIntervalEnvQuery+" seconds."),this.timeOfEnvQueryPlanning=e.getTime()),!1}if(e.getTime()-this.timeOfEnvQueryPlanning>this.randomTimeIntervalEnvQuery)return this.timeOfEnvQueryPlanning=-1,!0}askEnvironmentQueryBasedOnEnvironmentProbFunction(){var e=new Date;if(this.timeOfEnvQueryPlanning<0&&this.timeOfLastAttQuery>this.timeOfLastEnvQuery){var t=Math.floor(1.1);console.log("Objects between attn queries ",t),this.randomIthObjectForEnvQuery=Math.floor(Math.random()*t)+1,console.log("Object Selected for env query ",this.randomIthObjectForEnvQuery),this.timeOfEnvQueryPlanning=this.timeOfLastAttQuery}return e.getTime()-this.timeOfEnvQueryPlanning>1e4*this.randomIthObjectForEnvQuery-500||e.getTime()-this.timeOfEnvQueryPlanning<1e4*this.randomIthObjectForEnvQuery+500?(this.timeOfEnvQueryPlanning=-1,!0):(console.log("Uncharted waters"),!1)}setRecognizedType(e,t){var s;switch(e[0]){case"O":for(s=0;s<this.rocks.length;s++)if(this.rocks[s].assetid==e){this.rocks[s].recognizedType=t;break}break;case"L":for(s=0;s<this.life.length;s++)if(this.life[s].assetid==e){this.life[s].recognizedType=t;break}break;case"C":for(s=0;s<this.cash.length;s++)if(this.cash[s].assetid==e){this.cash[s].recognizedType=t;break}break;default:console.log("Unrecognized asset type")}}newDistractorTask(){var e=(s=new Date).getTime()-this.startTime;console.log("Elapsed time: "+e),console.log("Current Quarter: "+this.currentQuarter);var t=15e4*this.currentQuarter;if(console.log("Quarter over at: "+t),e>t&&(this.currentQuarter+=1,this.currentCondition=(this.currentCondition+1)%2,this.logEvent(O.TREATMENT,this.currentCondition)),this.currentCondition){document.getElementById("distractorcontainer").style.visibility="visible";var s=new Date;this.num2=Math.floor(100*Math.random()),this.num3=Math.floor(10*Math.random()),this.num1=this.num2+this.num3,document.getElementById("num1").innerHTML=this.num1.toString(),document.getElementById("num2").innerHTML=this.num2.toString(),document.getElementById("num3").innerHTML="?",this.timeOfLastDistractorTask=s.getTime(),this.logEvent(O.NEW_DIST_QUERY,this.num1.toString()+"-"+this.num2.toString()+" = ???")}else document.getElementById("distractorcontainer").style.visibility="hidden"}checkDistractorTaskAnswer(e){this.num3>=0&&(e==this.num3?(this.holdDistractorCanvas(1500,"green"),this.logEvent(O.CORRECT_DIST_RESPONSE,this.num1.toString()+"-"+this.num2.toString()+"="+e.toString())):(this.holdDistractorCanvas(1500,"red"),this.logEvent(O.WRONG_DIST_RESPONSE,this.num1.toString()+"-"+this.num2.toString()+"="+e.toString())),document.getElementById("num3").innerHTML=e.toString()),this.distractorTaskActive=!1;var t=this;setTimeout((function(){t.newDistractorTask(t.currentCondition),t.distractorTaskActive=!0}),1500)}checkUserResponse(e){this.boxed.length>0&&this.activeResponse&&(this.queryUserResponded=!0,this.boxed[0][0]==e?(this.holdCanvas(this,2e3,"green"),this.activeResponse=!1,this.setRecognizedType(this.boxed[0],e),this.logEvent(O.CORRECT_BOXED_RESPONSE,e+"-"+this.boxed[0])):(this.holdCanvas(this,2e3,"red"),this.activeResponse=!1,this.setRecognizedType(this.boxed[0],e),this.logEvent(O.WRONG_BOXED_RESPONSE,e+"-"+this.boxed[0])))}updateDistractorTimeBar(){var e=new Date;if(this.distractorTaskActive){var t=(5e3-(e.getTime()-this.timeOfLastDistractorTask))/1e3;if(document.getElementById("distractorBar").style.width=t/5*100+"%",document.getElementById("distractorBarTime").innerHTML=""+(Math.floor(10*t)/10+"s"),t<.05){this.holdDistractorCanvas(1500,"red"),this.distractorTaskActive=!1,this.logEvent(O.TIMEOUT_DIST_RESPONSE,this.num1.toString()+"-"+this.num2.toString()+" = ???");var s=this;setTimeout((function(){s.newDistractorTask(),s.distractorTaskActive=!0}),1500)}}}updateTimeBar(){if(Array.isArray(this.boxed)&&!this.boxed.length||this.queryTimeElapsed||this.queryUserResponded)document.getElementById("myProgress").style.display="none",document.getElementById("keyW").style.display="none",document.getElementById("keyQ").style.display="none",document.getElementById("keyE").style.display="none",document.getElementById("maintaskQuestion").style.display="none";else{document.getElementById("myProgress").style.display="block",document.getElementById("keyW").style.display="flex",document.getElementById("keyQ").style.display="flex",document.getElementById("keyE").style.display="flex",document.getElementById("maintaskQuestion").style.display="block";var e=this.closestObject(),t=null,s=null;const h=this.assets.car.physics.y;this.assets.car.physics.height?this.assets.car.physics.height:(this.assets.car.sprite.height,this.assets.car.sprite.height_scale);var i,n=0;if(0==e?(s=this.cash[0].physics.height?this.cash[0].physics.height:this.cash[0].sprite.height*this.cash[0].sprite.height_scale,t=this.cash[0].physics.y,i=(new Date).getTime()):1==e?(s=this.rocks[0].physics.height?this.rocks[0].physics.height:this.rocks[0].sprite.height*this.rocks[0].sprite.height_scale,t=this.rocks[0].physics.y,i=(new Date).getTime()):2==e&&(s=this.life[0].physics.height?this.life[0].physics.height:this.life[0].sprite.height*this.life[0].sprite.height_scale,t=this.life[0].physics.y,i=(new Date).getTime()),null==_&&(n=null,_=i),null==x&&(n=null,x=t,_=i),null==t&&(n=null),null!=t&&null!=x&&t<x&&(n=null,x=t,_=i),null!=n){new Date,n=60*this.PhysicsReference.speed;console.log("Speed is : "+n),R=3;var a=(h-(t+s))/n;x=t,_=i,document.getElementById("myBar").style.width=(a-2)/R*100+"%",document.getElementById("myBarTime").innerHTML=""+(Math.floor(10*(a-2))/10+"s"),a<2&&a>.1&&!this.queryTimeElapsed&&!this.queryUserResponded&&(this.queryType==I.attention?this.setRecognizedType(this.boxed[0],this.boxed[0][0]):this.queryType==I.environment&&this.setRecognizedType(this.boxed[0],this.boxed[0][0]==k.obstacle?k.life:k.obstacle),this.holdCanvas(this,2e3,"red"),this.activeResponse=!1,this.queryTimeElapsed=!0,this.logEvent(O.TIMEOUT_BOXED_RESPONSE,"U-"+this.boxed[0]))}}}static checkCollision(e,t,s,i,n,a){t instanceof y&&l.a.collide_with_scale(e,t)&&(e.hitObstacle(),e.makeRed(),s.splice(s.indexOf(t),1),-1!=n.indexOf(t.assetid)&&(n.splice(n.indexOf(t.assetid),1),a.logEvent(O.ASSET_CAR_COLLIDED,t.assetid))),t instanceof c&&l.a.collide_with_scale(e,t)&&(e.getLife(),e.makeGreen(),s.splice(s.indexOf(t),1),-1!=n.indexOf(t.assetid)&&(n.splice(n.indexOf(t.assetid),1),a.logEvent(O.ASSET_CAR_COLLIDED,t.assetid))),t instanceof E&&l.a.collide_with_scale(e,t)&&(i.road.score+=100,i.road.makeGreen(),s.splice(s.indexOf(t),1),-1!=n.indexOf(t.assetid)&&(n.splice(n.indexOf(t.assetid),1),a.logEvent(O.ASSET_CAR_COLLIDED,t.assetid)))}obstacleProbablityFunction(){return Math.random()>.5}moneyProbablityFunction(){return Math.random()>.5}lifeProbablityFunction(){return Math.random()>.5}objectTypeProbablityFunction(){var e=Math.random();return e>0&&e<.33?k.obstacle:e>=.33&&e<.66?k.life:k.cash}boxDistanceProbablityFunction(){return.1+0*Math.random()}static checkCanvas(e,t,s,i){e instanceof c&&e.physics.y>canvas.height&&(t.splice(t.indexOf(e),1),-1!=s.indexOf(e.assetid)&&(s.splice(s.indexOf(e.assetid),1),i.logEvent(O.ASSET_PASSED_CANVAS,e.assetid))),e instanceof y&&e.physics.y>canvas.height&&(t.splice(t.indexOf(e),1),-1!=s.indexOf(e.assetid)&&(s.splice(s.indexOf(e.assetid),1),i.logEvent(O.ASSET_PASSED_CANVAS,e.assetid))),e instanceof E&&e.physics.y>canvas.height&&(t.splice(t.indexOf(e),1),-1!=s.indexOf(e.assetid)&&(s.splice(s.indexOf(e.assetid),1),i.logEvent(O.ASSET_PASSED_CANVAS,e.assetid)))}drawAsset(e){const{physics:t,sprite:s,box:i,marked:n,distance:a}=e;e instanceof h&&e.physics.y>=0&&s.height>canvas.height&&(e.physics.y>canvas.height&&(e.physics.y=canvas.height-s.height),this.ctx.drawImage(s.img,0,0,s.width,s.height,e.physics.x,e.physics.y-s.height+1,s.width,s.height)),e instanceof y&&e.physics.y>=0&&e.physics.y>canvas.height&&this.ctx.drawImage(s.img,0,0,s.width,s.height,e.physics.x,e.physics.y-900,s.width*s.width_scale,s.height*s.height_scale),e instanceof f?e.draw(this.ctx):(this.ctx.drawImage(s.img,0,0,s.width,s.height,t.x,t.y,s.width*s.width_scale,s.height*s.height_scale),n&&t.y>a*this.canvas.height&&(-1==this.boxed.indexOf(e.assetid)?0==this.boxed.length&&(this.boxed.push(e.assetid),this.blinkCanvas(30,300,"blue"),this.activeResponse=!0,this.queryTimeElapsed=!1,this.queryUserResponded=!1,this.logEvent(O.NEW_MAIN_QUERY,e.assetid)):this.ctx.drawImage(i.img,0,0,i.width,i.height,t.x+.5*(s.width*s.width_scale-i.width*i.width_scale),e.physics.y+.5*(s.height*s.height_scale-i.height*i.height_scale),i.width*i.width_scale,i.height*i.height_scale))),0!=this.assets.car.life&&(e instanceof f?t.boundedUpdate():t.updatePosition())}randomizesprite(){var e=Math.floor(Math.random()*Math.floor(this.numImgs)),t=Math.floor(Math.random()*Math.floor(this.numImgs)),s=Math.floor(Math.random()*Math.floor(this.numImgs));this.lifeImgSrc=this.lifeImgLists[e],this.moneyImgSrc=this.moneyImgLists[t],this.rockImgSrc=this.obstacleImgLists[s],document.getElementById("obstacle").style["background-image"]="url('"+this.rockImgSrc+"')",document.getElementById("money").style["background-image"]="url('"+this.moneyImgSrc+"')",document.getElementById("life").style["background-image"]="url('"+this.lifeImgSrc+"')",this.logEvent(O.RANDOMIZE_ICON,this.lifeImgSrc+":"+this.moneyImgSrc+":"+this.rockImgSrc)}draw(){const e=()=>{if(this.gameOver)for(var t=1;t<9999;t++)clearInterval(t);else{const t=Object.values(this.assets);this.animate=requestAnimationFrame(e),this.ctx.clearRect(0,0,canvas.width,canvas.height);for(let e=0;e<t.length;e++)this.drawAsset(t[e]);this.rocks.forEach(e=>{D.checkCollision(this.assets.car,e,this.rocks,this.assets,this.boxed,this),D.checkCanvas(e,this.rocks,this.boxed,this)}),this.life.forEach(e=>{D.checkCollision(this.assets.car,e,this.life,this.assets,this.boxed,this),D.checkCanvas(e,this.life,this.boxed,this)}),this.cash.forEach(e=>{D.checkCollision(this.assets.car,e,this.cash,this.assets,this.boxed,this),D.checkCanvas(e,this.cash,this.boxed,this)}),this.life.forEach(e=>{this.drawAsset(e),e.move()}),this.rocks.forEach(e=>{this.drawAsset(e),e.move()}),this.cash.forEach(e=>{this.drawAsset(e),e.move()}),this.assets.road.addScore(),this.end()}};e()}end(){var e=new Date;if(e.getTime()-this.startTime>6e5&&(this.logEvent(O.GAME_OVER,""),this.gameOver=!0,this.assets.road.stop(),this.activeResponse=!1,this.distractorTaskActive=!1,document.getElementById("gameOver").style.display="block",document.getElementById("endMessage").innerHTML="Game Over!",document.getElementById("game-container").style.visibility="hidden",document.getElementById("hider1").style.visibility="hidden",document.getElementById("distractorcontainer").style.visibility="hidden"),e.getTime()-this.startTime>6e5&&!S){console.log(this.dataLog),console.log("outersouce"),psiTurk.saveData(),S=!0;for(var t=1;t<9999;t++)clearInterval(t)}else;}createRock(e){var t=this.boxDistanceProbablityFunction();this.rocks.push(new y(new i(Math.floor(310*Math.random())+80,-20),this.rockImgSrc,e,k.obstacle+(++this.assetidCounter).toString(),t)),this.logEvent(O.CREATE_ASSET,k.obstacle+this.assetidCounter.toString()),this.queryType==I.environment?this.logEvent(O.ENV_QUERY_CREATED,k.obstacle+this.assetidCounter.toString()+":"+t):this.queryType==I.attention&&this.logEvent(O.ATT_QUERY_CREATED,k.obstacle+this.assetidCounter.toString()+":"+t)}createLife(e){var t=this.boxDistanceProbablityFunction();this.life.push(new c(new i(Math.floor(310*Math.random())+80,-20),this.lifeImgSrc,e,k.life+(++this.assetidCounter).toString(),t)),this.logEvent(O.CREATE_ASSET,k.life+this.assetidCounter.toString()),this.queryType==I.environment?this.logEvent(O.ENV_QUERY_CREATED,k.life+this.assetidCounter.toString()+":"+t):this.queryType==I.attention&&this.logEvent(O.ATT_QUERY_CREATED,k.life+this.assetidCounter.toString()+":"+t)}createCash(e){var t=this.boxDistanceProbablityFunction();this.cash.push(new E(new i(Math.floor(310*Math.random())+80,-20),this.moneyImgSrc,e,k.cash+(++this.assetidCounter).toString(),t)),this.logEvent(O.CREATE_ASSET,k.cash+this.assetidCounter.toString()),this.queryType==I.environment?this.logEvent(O.ENV_QUERY_CREATED,k.cash+this.assetidCounter.toString()+":"+t):this.queryType==I.attention&&this.logEvent(O.ATT_QUERY_CREATED,k.cash+this.assetidCounter.toString()+":"+t)}cleanUp(){window.cancelAnimationFrame(this.animate)}releaseControls(){this.assets.car.physics.dLeft=0,this.assets.car.physics.dRight=0,this.assets.car.physics.dUp=0,this.assets.car.physics.dDown=0}moveLeft(e){this.assets.car.physics.dLeft=e}moveRight(e){this.assets.car.physics.dRight=e}closestObject(){var e,t,s;e=this.cash&&this.cash.length>0?this.cash[0].physics.y:-1e4,t=this.rocks&&this.rocks.length>0?this.rocks[0].physics.y:-1e4,s=this.life&&this.life.length>0?this.life[0].physics.y:-1e4;var i=this.assets.car.physics.y,n=[1e4*(i-e<=-115)+(i-e)*(i-e>-115),1e4*(i-t<=-115)+(i-t)*(i-t>-115),1e4*(i-s<=-115)+(i-s)*(i-s>-115)],a=A(n);return n[a]>1e4&&(a=3),a}closestObjectAndLocation(){var e,t,s,i,n=0,a=3;this.cash&&this.cash.length>0?"U"!=this.cash[0].recognizedType&&(e=this.cash[0].physics.y,a="C"==this.cash[0].recognizedType?0:"O"==this.cash[0].recognizedType?1:2,n=this.cash[0].physics.x):e=-1e4,this.rocks&&this.rocks.length>0?"U"!=this.rocks[0].recognizedType&&(t=this.rocks[0].physics.y,a="O"==this.rocks[0].recognizedType?1:"C"==this.rocks[0].recognizedType?0:2,n=this.rocks[0].physics.x):t=-1e4,this.life&&this.life.length>0?"U"!=this.life[0].recognizedType&&(s=this.life[0].physics.y,a="L"==this.life[0].recognizedType?2:"C"==this.life[0].recognizedType?0:1,n=this.life[0].physics.x):s=-1e4;var h=this.assets.car.physics.y,r=[1e4*(h-e<=-115)+(h-e)*(h-e>-115),1e4*(h-t<=-115)+(h-t)*(h-t>-115),1e4*(h-s<=-115)+(h-s)*(h-s>-115)],o=A(r);return i=o,r[o]>1e4&&(o=3,n=0),[i,a,n]}rockAvoider(e){var t=this.assets.car.physics.x,s=(Math.abs(e-t)>=80?t:e>=t?t-150>=80-(e-t)?e-80:e+80:350-t>80-(t-e)?e+80:e-80)-t;s>0?this.moveRight(.03*s):s<0&&this.moveLeft(-.03*s)}objectGetter(e){var t=e-this.assets.car.physics.x;t>=0?this.moveRight(.01*t):this.moveLeft(-.01*t)}logEvent(e,t){if(!this.gameOver){var s=new Date;this.dataLog+=s.getTime().toString()+","+e+","+t+"\n",psiTurk.recordTrialData([e,t])}}moveRandom(e){Math.random()>=.5?this.moveLeft(e):this.moveRight(e)}changeview(){new(void 0)}start(){var e=new Date;if(this.gameOver=!1,this.startTime=e.getTime(),document.getElementById("welcome").style.display="none",this.assets.car.resetLife(),this.logEvent(O.GAME_START,""),this.countdown("countdown",10,0),this.timeOfLastEnvQuery=e.getTime(),this.timeOfLastAttQuery=e.getTime(),this.timeOfLastDistractorTask=e.getTime(),console.log("Screen Res - Width:"+screen.width+"Height:"+screen.height),screen.width>=1279&&screen.height>=799){setInterval(()=>{if(!this.gameOver){var e=new Date,t=Array.isArray(this.boxed)&&!this.boxed.length,s=t&&e.getTime()-this.timeOfLastAttQuery>19e3,i=t&&!s&&this.askEnvironmentQueryBasedOnEnvironmentProbFunction()&&this.timeOfLastAttQuery+19e3-e.getTime()>1500;switch(console.log("Checking if env query: ",i," and Box empty = "+t+" at t = "+(e.getTime()-this.startTime)),i&&(console.log("Asking Environment Query: "+(e.getTime()-this.timeOfLastEnvQuery).toString()+" at t = "+(e.getTime()-this.startTime)),this.timeOfLastEnvQuery=e.getTime()),s&&(console.log("Asking Attention Query:"+(e.getTime()-this.timeOfLastAttQuery).toString()+" at t = "+(e.getTime()-this.startTime)),this.timeOfLastAttQuery=e.getTime()),this.queryType=s?I.attention:i?I.environment:null,this.objectTypeProbablityFunction()){case k.obstacle:this.createRock(i||s);break;case k.life:this.createLife(i||s);break;case k.cash:this.createCash(i||s)}0}},1e4),setInterval(()=>{this.randomizesprite()},84e3),setInterval(()=>{this.updateTimeBar()},50),setInterval(()=>{this.updateDistractorTimeBar()},50),setInterval(()=>{var e;this.releaseControls(),1==(e=this.closestObjectAndLocation())[1]?this.rockAvoider(e[2]):0!=e[1]&&2!=e[1]||this.objectGetter(e[2])},500);this.draw(),this.assets.road.move()}else this.gameOver=!0,clearInterval(whileGametime),clearInterval(randomizer),clearInterval(updater),clearInterval(distractorUpdater),clearInterval(AIagent),document.getElementById("slow").innerHTML="You need a minimum display resolution of 1280x800 to take part in this study"}}var C=D;var L=e=>{window.addEventListener("keydown",t=>{e.assets.car;"q"!==t.key&&"Q"!==t.key||(e.checkUserResponse("O"),document.getElementById("keyQ").style["background-color"]="rgba(100,100,100, 0.8)"),"w"!==t.key&&"W"!==t.key||(e.checkUserResponse("C"),document.getElementById("keyW").style["background-color"]="rgba(100,100,100, 0.8)"),"e"!==t.key&&"E"!==t.key||(e.checkUserResponse("L"),document.getElementById("keyE").style["background-color"]="rgba(100,100,100, 0.8)"),"1"===t.key&&e.checkDistractorTaskAnswer(1),"2"===t.key&&e.checkDistractorTaskAnswer(2),"3"===t.key&&e.checkDistractorTaskAnswer(3),"4"===t.key&&e.checkDistractorTaskAnswer(4),"5"===t.key&&e.checkDistractorTaskAnswer(5),"6"===t.key&&e.checkDistractorTaskAnswer(6),"7"===t.key&&e.checkDistractorTaskAnswer(7),"8"===t.key&&e.checkDistractorTaskAnswer(8),"9"===t.key&&e.checkDistractorTaskAnswer(9),"0"===t.key&&e.checkDistractorTaskAnswer(0)}),window.addEventListener("keyup",t=>{e.assets.car;"q"!==t.key&&"Q"!==t.key||(e.checkUserResponse("O"),document.getElementById("keyQ").style["background-color"]="rgba(200,200,200, 0.6)"),"w"!==t.key&&"W"!==t.key||(e.checkUserResponse("C"),document.getElementById("keyW").style["background-color"]="rgba(200,200,200, 0.6)"),"e"!==t.key&&"E"!==t.key||(e.checkUserResponse("L"),document.getElementById("keyE").style["background-color"]="rgba(200,200,200, 0.6)")})};(new Image).src="static/assets/images/redbox.png";(new Image).src="static/assets/images/bluebox.png";(new Image).src="static/assets/images/greenbox.png";window.lifeimgLst="",window.obstacleimgLst="",window.moneyImgLst="";s(1);var B=new PsiTurk(uniqueId,adServerLoc,mode);condition,counterbalance;B.preloadPages(["instructions/instruct-ready.html","stage.html","postquestionnaire.html","thanks-mturksubmit.html","complete.html","closepopup.html"]);var M=["instructions/instruct-ready.html"],Q=function(){B.showPage("stage.html");const e=document.getElementById("canvas"),t=e.getContext("2d");e.height=700,e.width=500;const s=Math.floor(100*Math.random())%2;let i=new C(e,t,s);document.getElementById("how").innerHTML="Identify objects by using the Q, W, and E keys. Collect as much points and lives as you can while avoiding the rocks!",document.getElementById("play-btn").addEventListener("click",()=>{L(i),i.start()}),document.getElementById("next").addEventListener("click",()=>{new P})};window.onYouTubeIframeAPIReady=function(){};var P=function(){B.showPage("postquestionnaire.html"),$("#questionnaire").attr("src","https://berkeley.qualtrics.com/jfe/form/SV_7W2jYeop6Bo0kYZ?UID="+uniqueId),window.addEventListener("message",(function(e){if(e.data&&"string"==typeof e.data){var t=e.data.split("|");"QualtricsEOS"==t[0]&&(B.recordTrialData({phase:"postquestionnaire",status:"back_from_qualtrics"}),B.recordUnstructuredData("qualtrics_session_id",t[2]),document.getElementById("next").style.visibility="visible")}})),document.getElementById("next").addEventListener("click",()=>{new U})},U=function(){B.showPage("thanks-mturksubmit.html"),document.getElementById("next").addEventListener("click",()=>{new N})},N=function(){B.showPage("complete.html"),document.getElementById("next").addEventListener("click",()=>{new q})},q=function(){B.showPage("closepopup.html")};$(window).load((function(){B.doInstructions(M,(function(){document.getElementById("next").addEventListener("click",()=>{new Q})}))}))}]);