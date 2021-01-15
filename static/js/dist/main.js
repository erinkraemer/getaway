!function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=2)}([function(t,e){const s={collide(t,e){const s=t.physics.width?t.physics.width:t.sprite.width,i=e.physics.width?e.physics.width:e.sprite.width,n=t.physics.height?t.physics.height:t.sprite.height,a=e.physics.height?e.physics.height:e.sprite.height;return t.physics.x<e.physics.x+i&&t.physics.x+s>e.physics.x&&t.physics.y<e.physics.y+a&&t.physics.y+n>e.physics.y},collide_with_scale(t,e){const s=t.physics.width?t.physics.width:t.sprite.width*t.sprite.width_scale,i=e.physics.width?e.physics.width:e.sprite.width*e.sprite.width_scale,n=t.physics.height?t.physics.height:t.sprite.height*t.sprite.height_scale,a=e.physics.height?e.physics.height:e.sprite.height*e.sprite.height_scale;return t.physics.x<e.physics.x+i&&t.physics.x+s>e.physics.x&&t.physics.y<e.physics.y+a&&t.physics.y+n>e.physics.y}};t.exports=s},function(t,e){},function(t,e,s){"use strict";s.r(e);var i=class{constructor(t,e,s=null,i=null){this.x=t,this.y=e,this.width=s,this.height=i,this.dLeft=0,this.dRight=0,this.dDown=0,this.dUp=0,this.dx=this.dx.bind(this),this.dy=this.dy.bind(this),this.speed=1.5}dx(){return-this.dLeft+this.dRight}dy(){return-this.dUp+this.dDown}updatePosition(){this.x+=this.dx(),this.y+=this.dy()}boundedUpdate(){const{dx:t,dy:e}=this;this.boundedMove({x:t(),y:e()},{top:0,down:580,left:80,right:350})}boundedMove(t,e){this.x+=t.x,this.y+=t.y,this.x<e.left&&(this.x=e.left),this.x>e.right&&(this.x=e.right),this.y<e.top&&(this.y=e.top),this.y>e.down&&(this.y=e.down)}};var n=class{constructor(t,e,s,i=1,n=1){this.img=t,this.height=e,this.width=s,this.width_scale=i,this.height_scale=n}};const a=new Image;a.src="static/assets/images/road.png";var h=class{constructor(t){this.physics=t,this.sprite=new n(a,1262,502),this.score=0,this.gameOver=!1,this.box=null,this.marked=null}move(){this.physics.dDown=this.physics.speed,console.log("Road speed: "+this.physics.speed)}addScore(){this.gameOver?this.score:this.score+=1}makeGreen(){}stop(){this.physics.dDown=0,this.gameOver=!0}addSpeed(){}};const r=new Image;(new Image).src="static/assets/images/redbox.png";const o=new Image;o.src="static/assets/images/bluebox.png";(new Image).src="static/assets/images/greenbox.png";var c=class{constructor(t,e,s,i,a=-1){this.physics=t,r.src=e,this.sprite=new n(r,50,50,1.5,1.5),this.box=new n(o,40,50,1.5,1.3*1.5),this.marked=s,this.assetid=i,this.recognizedType=this.marked?"U":i[0],this.distance=a}updatesprite(t){r.src=t,this.sprite=new n(r,50,50,1.5,1.5)}move(){this.physics.dDown=this.physics.speed}stop(){this.physics.dDown=0}},d=s(0),l=s.n(d);const m=new Image;(new Image).src="static/assets/images/redbox.png";const g=new Image;g.src="static/assets/images/bluebox.png";(new Image).src="static/assets/images/greenbox.png";var y=class{constructor(t,e,s,i,a=-1){this.physics=t,m.src=e,this.sprite=new n(m,50,50,1.5,1.5),this.box=new n(g,40,50,1.5,1.3*1.5),this.marked=s,this.assetid=i,this.recognizedType=this.marked?"U":i[0],this.distance=a}updatesprite(t){m.src=t,this.sprite=new n(m,50,50,1.5,1.5)}move(){this.physics.dDown=this.physics.speed}stop(){this.physics.dDown=0}};const u=new Image;(new Image).src="static/assets/images/redbox.png";const p=new Image;p.src="static/assets/images/bluebox.png";(new Image).src="static/assets/images/greenbox.png";var E=class{constructor(t,e,s,i,a=-1){this.physics=t,u.src=e,this.sprite=new n(u,50,50,1.5,1.5),this.box=new n(p,40,50,1.5,1.3*1.5),this.marked=s,this.assetid=i,this.distance=a,this.recognizedType=this.marked?"U":i[0]}updatesprite(t){u.src=t,this.sprite=new n(u,50,50,1.5,1.5)}move(){this.physics.dDown=this.physics.speed}stop(){this.physics.dDown=0}};const v=new Image;v.src="static/assets/images/car.png";var f=class{constructor(t){this.physics=t,this.sprite=new n(v,150,70),this.life=3,this.box=null,this.marked=null}hitObstacle(){this.life-=1}getLife(){this.life+=1}resetLife(){this.life=3}makeGreen(){}makeRed(){}draw(t){const{sprite:e,physics:s}=this,i=e.width/-2+s.width/2,n=e.height/-2+s.height/2;t.drawImage(e.img,0,0,e.width,e.height,s.x+i,s.y+n,e.width,e.height)}};var T=()=>({road:new h(new i(0,-561)),car:new f(new i(214,580,70,100))});const b=new Image;b.src="static/assets/images/redbox.png";(new Image).src="static/assets/images/bluebox.png";const w=new Image;w.src="static/assets/images/greenbox.png";s(1);const k=Object.freeze({obstacle:"O",cash:"C",life:"L"}),I=Object.freeze({attention:"A",environment:"E"});var S=!1;const _=Object.freeze({CREATE_ASSET:"CREATE_ASSET",CORRECT_BOXED_RESPONSE:"CORRECT_BOXED_RESPONSE",WRONG_BOXED_RESPONSE:"WRONG_BOXED_RESPONSE",TIMEOUT_BOXED_RESPONSE:"TIMEOUT_BOXED_RESPONSE",CORRECT_DIST_RESPONSE:"CORRECT_DIST_RESPONSE",WRONG_DIST_RESPONSE:"WRONG_DIST_RESPONSE",TIMEOUT_DIST_RESPONSE:"TIMEOUT_DIST_RESPONSE",RANDOMIZE_ICON:"RANDOMIZE_ICON",ENV_QUERY_CREATED:"ENV_QUERY_CREATED",ATT_QUERY_CREATED:"ATT_QUERY_CREATED",NEW_MAIN_QUERY:"NEW_MAIN_QUERY",ASSET_PASSED_CANVAS:"ASSET_PASSED_CANVAS",ASSET_CAR_COLLIDED:"ASSET_CAR_COLLIDED",NEW_DIST_QUERY:"NEW_DIST_QUERY",TREATMENT:"TREATMENT",GAME_OVER:"GAME_OVER",GAME_START:"GAME_START",BONUS:"BONUS"});var x=-200,O=-403,R=null,C=null,A=15;function D(t){for(var e=0,s=1;s<t.length;s++)t[s]<t[e]&&(e=s);return e}class B{constructor(t,e,s){this.canvas=t,this.ctx=e,this.startingCondition=s,this.currentCondition=s,this.currentQuarter=0,this.gameOver=!1,this.rocks=[],this.life=[],this.cash=[],this.boxed=[],this.assets=T(),this.animate=null,this.lifeImgSrc="static/assets/images/life/life (1).png",this.rockImgSrc="static/assets/images/obstacle/obstacle (1).png",this.moneyImgSrc="static/assets/images/money/money (1).png",this.lifeImgLists=[],this.moneyImgLists=[],this.obstacleImgLists=[],this.numImgs=6,this.assetidCounter=-1,this.activeResponse=!1,this.stopBlink=!1,this.queryType=null,this.queryTimeElapsed=!1,this.queryUserResponded=!1,this.PhysicsReference=new i;var n=new Date;this.timeOfLastEnvQuery=n.getTime(),this.timeOfLastAttQuery=n.getTime(),this.timeOfLastNoResponseObject=n.getTime(),this.timeOfLastDistractorTask=n.getTime(),this.timeOfEnvQueryPlanning=-1,this.randomIthObjectForEnvQuery=1e8,this.startTime=60100,this.num2=0,this.num3=0,this.num1=0,this.distractorTaskActive=!0,this.distCorrectCount=0,this.distCount=0,this.mainCorrectCount=0,this.mainCount=0,this.dataLog="",this.newDistractorTask();for(var a=0;a<this.numImgs;a++)this.lifeImgLists.push("static/assets/images/life/life ("+(a+1).toString()+").png"),this.moneyImgLists.push("static/assets/images/money/money ("+(a+1).toString()+").png"),this.obstacleImgLists.push("static/assets/images/obstacle/obstacle ("+(a+1).toString()+").png");document.getElementById("obstacle").style["background-image"]="url('"+this.rockImgSrc+"')",document.getElementById("money").style["background-image"]="url('"+this.moneyImgSrc+"')",document.getElementById("life").style["background-image"]="url('"+this.lifeImgSrc+"')"}countdown(t,e,s){var i,n,a,h,r,o;function c(t){return t<=9?"0"+t:t}i=document.getElementById(t),n=+new Date+1e3*(60*e+s)+500,function t(){(r=n-+new Date)<1e3?i.innerHTML="Time is up!":(o=new Date(r),a=o.getUTCHours(),h=o.getUTCMinutes(),i.innerHTML=(a?a+":"+c(h):h)+":"+c(o.getUTCSeconds()),setTimeout(t,o.getUTCMilliseconds()+500))}()}holdCanvas(t,e,s){var i=window.setInterval((function(t){document.getElementById("canvas").style.border="20px solid "+s,t.cash[0]?t.cash[0].box.img="red"==s?b:w:t.life[0]?t.life[0].box.img="red"==s?b:w:t.rocks[0].box.img="red"==s?b:w}),5,t,s);setTimeout((function(t){document.getElementById("canvas").style.border="20px solid black",clearInterval(t)}),e,i)}holdDistractorCanvas(t,e){var s=window.setInterval((function(){document.getElementById("distractortask").style.border="20px solid "+e}),5);setTimeout((function(t){document.getElementById("distractortask").style.border="20px solid black",clearInterval(t)}),t,s)}blinkCanvas(t,e,s){var i=window.setInterval((function(){document.getElementById("canvas").style.border!="20px solid "+s?document.getElementById("canvas").style.border="20px solid "+s:document.getElementById("canvas").style.border="20px solid black"}),t);setTimeout((function(t){document.getElementById("canvas").style.border="20px solid black",clearInterval(t)}),e,i)}askAttentionQueryBasedOnEnvironmentProbFunction(){var t=10*Math.random();return t%3==0||t%3==1}setRecognizedType(t,e){var s;switch(t[0]){case"O":for(s=0;s<this.rocks.length;s++)if(this.rocks[s].assetid==t){this.rocks[s].recognizedType=e;break}break;case"L":for(s=0;s<this.life.length;s++)if(this.life[s].assetid==t){this.life[s].recognizedType=e;break}break;case"C":for(s=0;s<this.cash.length;s++)if(this.cash[s].assetid==t){this.cash[s].recognizedType=e;break}}}newDistractorTask(){if((t=new Date).getTime()-this.startTime>15e4*this.currentQuarter&&(this.currentQuarter+=1,this.currentCondition=(this.currentCondition+1)%2,this.logEvent(_.TREATMENT,this.currentCondition)),this.currentCondition){document.getElementById("distractorWrapper").style.visibility="hidden",document.getElementById("distractorcontainer").style.visibility="visible";var t=new Date;this.num2=Math.floor(100*Math.random()),this.num3=Math.floor(10*Math.random()),this.num1=this.num2+this.num3,document.getElementById("num1").innerHTML=this.num1.toString(),document.getElementById("num2").innerHTML=this.num2.toString(),document.getElementById("num3").innerHTML="?",this.timeOfLastDistractorTask=t.getTime(),this.logEvent(_.NEW_DIST_QUERY,this.num1.toString()+"-"+this.num2.toString()+" = ???"),this.distCount+=1}else document.getElementById("distractorcontainer").style.visibility="hidden",document.getElementById("distractorWrapper").style.visibility="visible"}checkDistractorTaskAnswer(t,e){if(this.num3>=0&&this.distractorTaskActive){t==this.num3?(this.holdDistractorCanvas(5e3,"green"),this.logEvent(_.CORRECT_DIST_RESPONSE,this.num1.toString()+"-"+this.num2.toString()+"="+t.toString(),e),this.distCorrectCount+=1):(this.holdDistractorCanvas(5e3,"red"),this.logEvent(_.WRONG_DIST_RESPONSE,this.num1.toString()+"-"+this.num2.toString()+"="+t.toString(),e)),document.getElementById("num3").innerHTML=t.toString(),this.distractorTaskActive=!1;var s=this;setTimeout((function(){s.newDistractorTask(s.currentCondition),s.distractorTaskActive=!0}),5e3)}}checkUserResponse(t){this.boxed.length>0&&this.activeResponse&&(this.queryUserResponded=!0,this.boxed[0][0]==t?(this.holdCanvas(this,2e3,"green"),this.activeResponse=!1,this.setRecognizedType(this.boxed[0],t),this.logEvent(_.CORRECT_BOXED_RESPONSE,t+"-"+this.boxed[0]),this.mainCorrectCount+=1):(this.holdCanvas(this,2e3,"red"),this.activeResponse=!1,this.setRecognizedType(this.boxed[0],t),this.logEvent(_.WRONG_BOXED_RESPONSE,t+"-"+this.boxed[0])))}updateDistractorTimeBar(){var t=new Date;if(this.distractorTaskActive){var e=(5e3-(t.getTime()-this.timeOfLastDistractorTask))/1e3;if(document.getElementById("distractorBar").style.width=e/5*100+"%",document.getElementById("distractorBarTime").innerHTML=""+(Math.floor(10*e)/10+"s"),e<.05){this.holdDistractorCanvas(5e3,"red"),this.distractorTaskActive=!1,this.logEvent(_.TIMEOUT_DIST_RESPONSE,this.num1.toString()+"-"+this.num2.toString()+" = ???");var s=this;setTimeout((function(){s.newDistractorTask(),s.distractorTaskActive=!0}),5e3)}}}updateTimeBar(){if(Array.isArray(this.boxed)&&!this.boxed.length||this.queryTimeElapsed||this.queryUserResponded)document.getElementById("myProgress").style.display="none",document.getElementById("keyW").style.display="none",document.getElementById("keyQ").style.display="none",document.getElementById("keyE").style.display="none",document.getElementById("maintaskQuestion").style.display="none";else{document.getElementById("myProgress").style.display="block",document.getElementById("keyW").style.display="flex",document.getElementById("keyQ").style.display="flex",document.getElementById("keyE").style.display="flex",document.getElementById("maintaskQuestion").style.display="block";var t=this.closestObject(),e=null,s=null;const h=this.assets.car.physics.y;this.assets.car.physics.height?this.assets.car.physics.height:(this.assets.car.sprite.height,this.assets.car.sprite.height_scale);var i,n=0;if(0==t?(s=this.cash[0].physics.height?this.cash[0].physics.height:this.cash[0].sprite.height*this.cash[0].sprite.height_scale,e=this.cash[0].physics.y,i=(new Date).getTime()):1==t?(s=this.rocks[0].physics.height?this.rocks[0].physics.height:this.rocks[0].sprite.height*this.rocks[0].sprite.height_scale,e=this.rocks[0].physics.y,i=(new Date).getTime()):2==t&&(s=this.life[0].physics.height?this.life[0].physics.height:this.life[0].sprite.height*this.life[0].sprite.height_scale,e=this.life[0].physics.y,i=(new Date).getTime()),null==R&&(n=null,R=i),null==C&&(n=null,C=e,R=i),null==e&&(n=null),null!=e&&null!=C&&e<C&&(n=null,C=e,R=i),null!=n){new Date,n=60*this.PhysicsReference.speed;A=3;var a=(h-(e+s))/n;C=e,R=i,document.getElementById("myBar").style.width=(a-2)/A*100+"%",document.getElementById("myBarTime").innerHTML=""+(Math.floor(10*(a-2))/10+"s"),a<2&&a>.1&&!this.queryTimeElapsed&&!this.queryUserResponded&&(this.queryType==I.attention?this.setRecognizedType(this.boxed[0],this.boxed[0][0]):this.queryType==I.environment&&this.setRecognizedType(this.boxed[0],this.boxed[0][0]==k.obstacle?k.life:k.obstacle),this.holdCanvas(this,2e3,"red"),this.activeResponse=!1,this.queryTimeElapsed=!0,this.logEvent(_.TIMEOUT_BOXED_RESPONSE,"U-"+this.boxed[0]))}}}static checkCollision(t,e,s,i,n,a){e instanceof y&&l.a.collide_with_scale(t,e)&&(t.hitObstacle(),t.makeRed(),s.splice(s.indexOf(e),1),-1!=n.indexOf(e.assetid)&&(n.splice(n.indexOf(e.assetid),1),a.logEvent(_.ASSET_CAR_COLLIDED,e.assetid))),e instanceof c&&l.a.collide_with_scale(t,e)&&(t.getLife(),t.makeGreen(),s.splice(s.indexOf(e),1),-1!=n.indexOf(e.assetid)&&(n.splice(n.indexOf(e.assetid),1),a.logEvent(_.ASSET_CAR_COLLIDED,e.assetid))),e instanceof E&&l.a.collide_with_scale(t,e)&&(i.road.score+=100,i.road.makeGreen(),s.splice(s.indexOf(e),1),-1!=n.indexOf(e.assetid)&&(n.splice(n.indexOf(e.assetid),1),a.logEvent(_.ASSET_CAR_COLLIDED,e.assetid)))}obstacleProbablityFunction(){return Math.random()>.5}moneyProbablityFunction(){return Math.random()>.5}lifeProbablityFunction(){return Math.random()>.5}objectTypeProbablityFunction(){var t=Math.random();return t>0&&t<.33?k.obstacle:t>=.33&&t<.66?k.life:k.cash}boxDistanceProbablityFunction(){return.1+0*Math.random()}static checkCanvas(t,e,s,i){t instanceof c&&t.physics.y>canvas.height&&(e.splice(e.indexOf(t),1),-1!=s.indexOf(t.assetid)&&(s.splice(s.indexOf(t.assetid),1),i.logEvent(_.ASSET_PASSED_CANVAS,t.assetid))),t instanceof y&&t.physics.y>canvas.height&&(e.splice(e.indexOf(t),1),-1!=s.indexOf(t.assetid)&&(s.splice(s.indexOf(t.assetid),1),i.logEvent(_.ASSET_PASSED_CANVAS,t.assetid))),t instanceof E&&t.physics.y>canvas.height&&(e.splice(e.indexOf(t),1),-1!=s.indexOf(t.assetid)&&(s.splice(s.indexOf(t.assetid),1),i.logEvent(_.ASSET_PASSED_CANVAS,t.assetid)))}drawAsset(t){const{physics:e,sprite:s,box:i,marked:n,distance:a}=t;t instanceof h&&t.physics.y>=0&&s.height>canvas.height&&(t.physics.y>canvas.height&&(t.physics.y=canvas.height-s.height),this.ctx.drawImage(s.img,0,0,s.width,s.height,t.physics.x,t.physics.y-s.height+1,s.width,s.height)),t instanceof y&&t.physics.y>=0&&t.physics.y>canvas.height&&this.ctx.drawImage(s.img,0,0,s.width,s.height,t.physics.x,t.physics.y-900,s.width*s.width_scale,s.height*s.height_scale),t instanceof f?t.draw(this.ctx):(this.ctx.drawImage(s.img,0,0,s.width,s.height,e.x,e.y,s.width*s.width_scale,s.height*s.height_scale),n&&e.y>a*this.canvas.height&&(-1==this.boxed.indexOf(t.assetid)?0!=this.boxed.length||this.queryType!=I.environment&&this.queryType!=I.attention||(this.boxed.push(t.assetid),this.blinkCanvas(30,300,"blue"),this.activeResponse=!0,this.queryTimeElapsed=!1,this.queryUserResponded=!1,this.logEvent(_.NEW_MAIN_QUERY,t.assetid),this.mainCount+=1):this.ctx.drawImage(i.img,0,0,i.width,i.height,e.x+.5*(s.width*s.width_scale-i.width*i.width_scale),t.physics.y+.5*(s.height*s.height_scale-i.height*i.height_scale),i.width*i.width_scale,i.height*i.height_scale))),0!=this.assets.car.life&&(t instanceof f?e.boundedUpdate():e.updatePosition())}randomizesprite(){var t=Math.floor(Math.random()*Math.floor(this.numImgs)),e=Math.floor(Math.random()*Math.floor(this.numImgs)),s=Math.floor(Math.random()*Math.floor(this.numImgs));this.lifeImgSrc=this.lifeImgLists[t],this.moneyImgSrc=this.moneyImgLists[e],this.rockImgSrc=this.obstacleImgLists[s],document.getElementById("obstacle").style["background-image"]="url('"+this.rockImgSrc+"')",document.getElementById("money").style["background-image"]="url('"+this.moneyImgSrc+"')",document.getElementById("life").style["background-image"]="url('"+this.lifeImgSrc+"')",this.logEvent(_.RANDOMIZE_ICON,this.lifeImgSrc+":"+this.moneyImgSrc+":"+this.rockImgSrc)}draw(){const t=()=>{if(this.gameOver)for(var e=1;e<9999;e++)clearInterval(e);else{const e=Object.values(this.assets);this.animate=requestAnimationFrame(t),this.ctx.clearRect(0,0,canvas.width,canvas.height);for(let t=0;t<e.length;t++)this.drawAsset(e[t]);this.rocks.forEach(t=>{B.checkCollision(this.assets.car,t,this.rocks,this.assets,this.boxed,this),B.checkCanvas(t,this.rocks,this.boxed,this)}),this.life.forEach(t=>{B.checkCollision(this.assets.car,t,this.life,this.assets,this.boxed,this),B.checkCanvas(t,this.life,this.boxed,this)}),this.cash.forEach(t=>{B.checkCollision(this.assets.car,t,this.cash,this.assets,this.boxed,this),B.checkCanvas(t,this.cash,this.boxed,this)}),this.life.forEach(t=>{this.drawAsset(t),t.move()}),this.rocks.forEach(t=>{this.drawAsset(t),t.move()}),this.cash.forEach(t=>{this.drawAsset(t),t.move()}),this.assets.road.addScore(),this.end()}};t()}end(){var t=new Date;if(t.getTime()-this.startTime>6e4){this.logEvent(_.GAME_OVER,""),this.gameOver=!0,this.assets.road.stop(),this.activeResponse=!1,this.distractorTaskActive=!1,document.getElementById("gameOver").style.display="block",document.getElementById("endMessage").innerHTML="Game Over!",document.getElementById("game-container").style.visibility="hidden",document.getElementById("hider1").style.visibility="hidden",document.getElementById("distractorcontainer").style.visibility="hidden",document.getElementById("distractorTaskPaused").style.visibility="hidden";var e=.5*(this.mainCorrectCount/this.mainCount)+.5*(this.distCorrectCount/this.distCount),s=2.5+4.5*Math.exp(-1*e);this.logEvent(_.BONUS,s),console.log("bonus is: ",s),psiTurk.bonus=s}if(t.getTime()-this.startTime>6e4&&!S){console.log("outersouce"),psiTurk.saveData(),S=!0;for(var i=1;i<9999;i++)clearInterval(i)}else;}createRock(t){var e=this.boxDistanceProbablityFunction();this.rocks.push(new y(new i(Math.floor(310*Math.random())+80,-20),this.rockImgSrc,t,k.obstacle+(++this.assetidCounter).toString(),e)),this.logEvent(_.CREATE_ASSET,k.obstacle+this.assetidCounter.toString()),this.queryType==I.environment?this.logEvent(_.ENV_QUERY_CREATED,k.obstacle+this.assetidCounter.toString()+":"+e):this.queryType==I.attention&&this.logEvent(_.ATT_QUERY_CREATED,k.obstacle+this.assetidCounter.toString()+":"+e)}createLife(t){var e=this.boxDistanceProbablityFunction();this.life.push(new c(new i(Math.floor(310*Math.random())+80,-20),this.lifeImgSrc,t,k.life+(++this.assetidCounter).toString(),e)),this.logEvent(_.CREATE_ASSET,k.life+this.assetidCounter.toString()),this.queryType==I.environment?this.logEvent(_.ENV_QUERY_CREATED,k.life+this.assetidCounter.toString()+":"+e):this.queryType==I.attention&&this.logEvent(_.ATT_QUERY_CREATED,k.life+this.assetidCounter.toString()+":"+e)}createCash(t){var e=this.boxDistanceProbablityFunction();this.cash.push(new E(new i(Math.floor(310*Math.random())+80,-20),this.moneyImgSrc,t,k.cash+(++this.assetidCounter).toString(),e)),this.logEvent(_.CREATE_ASSET,k.cash+this.assetidCounter.toString()),this.queryType==I.environment?this.logEvent(_.ENV_QUERY_CREATED,k.cash+this.assetidCounter.toString()+":"+e):this.queryType==I.attention&&this.logEvent(_.ATT_QUERY_CREATED,k.cash+this.assetidCounter.toString()+":"+e)}cleanUp(){window.cancelAnimationFrame(this.animate)}releaseControls(){this.assets.car.physics.dLeft=0,this.assets.car.physics.dRight=0,this.assets.car.physics.dUp=0,this.assets.car.physics.dDown=0}moveLeft(t){this.assets.car.physics.dLeft=t}moveRight(t){this.assets.car.physics.dRight=t}closestObject(){var t,e,s;t=this.cash&&this.cash.length>0?this.cash[0].physics.y:-1e4,e=this.rocks&&this.rocks.length>0?this.rocks[0].physics.y:-1e4,s=this.life&&this.life.length>0?this.life[0].physics.y:-1e4;var i=this.assets.car.physics.y,n=[1e4*(i-t<=-115)+(i-t)*(i-t>-115),1e4*(i-e<=-115)+(i-e)*(i-e>-115),1e4*(i-s<=-115)+(i-s)*(i-s>-115)],a=D(n);return n[a]>1e4&&(a=3),a}closestObjectAndLocation(){var t,e,s,i,n=0,a=3;this.cash&&this.cash.length>0?"U"!=this.cash[0].recognizedType&&(t=this.cash[0].physics.y,a="C"==this.cash[0].recognizedType?0:"O"==this.cash[0].recognizedType?1:2,n=this.cash[0].physics.x):t=-1e4,this.rocks&&this.rocks.length>0?"U"!=this.rocks[0].recognizedType&&(e=this.rocks[0].physics.y,a="O"==this.rocks[0].recognizedType?1:"C"==this.rocks[0].recognizedType?0:2,n=this.rocks[0].physics.x):e=-1e4,this.life&&this.life.length>0?"U"!=this.life[0].recognizedType&&(s=this.life[0].physics.y,a="L"==this.life[0].recognizedType?2:"C"==this.life[0].recognizedType?0:1,n=this.life[0].physics.x):s=-1e4;var h=this.assets.car.physics.y,r=[1e4*(h-t<=-115)+(h-t)*(h-t>-115),1e4*(h-e<=-115)+(h-e)*(h-e>-115),1e4*(h-s<=-115)+(h-s)*(h-s>-115)],o=D(r);return i=o,r[o]>1e4&&(o=3,n=0),[i,a,n]}rockAvoider(t){var e=this.assets.car.physics.x,s=(Math.abs(t-e)>=80?e:t>=e?e-150>=80-(t-e)?t-80:t+80:350-e>80-(e-t)?t+80:t-80)-e;s>0?this.moveRight(.03*s):s<0&&this.moveLeft(-.03*s)}objectGetter(t){var e=t-this.assets.car.physics.x;e>=0?this.moveRight(.01*e):this.moveLeft(-.01*e)}logEvent(t,e){try{var s=new Date;this.dataLog+=s.getTime().toString()+","+t+","+e+"\n",psiTurk.recordTrialData([t,e])}catch{console.log("error in LogEvent")}}moveRandom(t){Math.random()>=.5?this.moveLeft(t):this.moveRight(t)}changeview(){new(void 0)}start(){var t=new Date;if(this.gameOver=!1,this.startTime=t.getTime(),document.getElementById("welcome").style.display="none",this.assets.car.resetLife(),this.logEvent(_.GAME_START,""),this.countdown("countdown",1,0),this.timeOfLastEnvQuery=t.getTime(),this.timeOfLastAttQuery=t.getTime(),this.timeOfLastNoResponseObject=t.getTime(),this.timeOfLastDistractorTask=t.getTime(),screen.width>=1279&&screen.height>=799){setInterval(()=>{if(!this.gameOver){var t=new Date,e=Array.isArray(this.boxed)&&!this.boxed.length,s=e&&this.assetidCounter%3==0;s&&(x=-1==(x=Math.floor(3*Math.random())-1)?-100:x,O=-1);var i=!1;O==x&&(i=e),O++;switch(s?this.timeOfLastEnvQuery=t.getTime():i?this.timeOfLastAttQuery=t.getTime():this.timeOfLastNoResponseObject=t.getTime(),this.queryType=i?I.attention:s?I.environment:null,this.objectTypeProbablityFunction()){case k.obstacle:this.createRock(s||i);break;case k.life:this.createLife(s||i);break;case k.cash:this.createCash(s||i)}0}},1e4),setInterval(()=>{this.randomizesprite()},84e3),setInterval(()=>{this.updateTimeBar()},50),setInterval(()=>{this.updateDistractorTimeBar()},50),setInterval(()=>{var t;this.releaseControls(),1==(t=this.closestObjectAndLocation())[1]?this.rockAvoider(t[2]):0!=t[1]&&2!=t[1]||this.objectGetter(t[2])},500);this.draw(),this.assets.road.move()}else this.gameOver=!0,clearInterval(whileGametime),clearInterval(randomizer),clearInterval(updater),clearInterval(distractorUpdater),clearInterval(AIagent),document.getElementById("slow").innerHTML="You need a minimum display resolution of 1280x800 to take part in this study"}}var L=B;var M=t=>{window.addEventListener("keydown",e=>{t.assets.car;if("q"!==e.key&&"Q"!==e.key||(t.checkUserResponse("O"),document.getElementById("keyQ").style["background-color"]="rgba(100,100,100, 0.8)"),"w"!==e.key&&"W"!==e.key||(t.checkUserResponse("C"),document.getElementById("keyW").style["background-color"]="rgba(100,100,100, 0.8)"),"e"!==e.key&&"E"!==e.key||(t.checkUserResponse("L"),document.getElementById("keyE").style["background-color"]="rgba(100,100,100, 0.8)"),e.keyCode>=96&&e.keyCode<=105)var s="numPad";else if(e.keyCode>=48&&e.keyCode<=57)s="NOTnumPad";"1"===e.key&&t.checkDistractorTaskAnswer(1,s),"2"===e.key&&t.checkDistractorTaskAnswer(2,s),"3"===e.key&&t.checkDistractorTaskAnswer(3,s),"4"===e.key&&t.checkDistractorTaskAnswer(4,s),"5"===e.key&&t.checkDistractorTaskAnswer(5,s),"6"===e.key&&t.checkDistractorTaskAnswer(6,s),"7"===e.key&&t.checkDistractorTaskAnswer(7,s),"8"===e.key&&t.checkDistractorTaskAnswer(8,s),"9"===e.key&&t.checkDistractorTaskAnswer(9,s),"0"===e.key&&t.checkDistractorTaskAnswer(0,s)}),window.addEventListener("keyup",e=>{t.assets.car;"q"!==e.key&&"Q"!==e.key||(t.checkUserResponse("O"),document.getElementById("keyQ").style["background-color"]="rgba(200,200,200, 0.6)"),"w"!==e.key&&"W"!==e.key||(t.checkUserResponse("C"),document.getElementById("keyW").style["background-color"]="rgba(200,200,200, 0.6)"),"e"!==e.key&&"E"!==e.key||(t.checkUserResponse("L"),document.getElementById("keyE").style["background-color"]="rgba(200,200,200, 0.6)")})};(new Image).src="static/assets/images/redbox.png";(new Image).src="static/assets/images/bluebox.png";(new Image).src="static/assets/images/greenbox.png";window.lifeimgLst="",window.obstacleimgLst="",window.moneyImgLst="";s(1);var N=new PsiTurk(uniqueId,adServerLoc,mode);condition,counterbalance;N.preloadPages(["instructions/instruct-ready.html","stage.html","postquestionnaire.html","continueToBonusQuestionnaire.html","bonusquestionnaire.html","thanks-mturksubmit.html","complete.html","closepopup.html"]);var P=["instructions/instruct-ready.html"],U=function(){N.showPage("stage.html");const t=document.getElementById("canvas"),e=t.getContext("2d");t.height=700,t.width=500;const s=Math.floor(100*Math.random())%2;let i=new L(t,e,s);document.getElementById("how").innerHTML="Identify objects by using the Q, W, and E keys. Collect as much points and lives as you can while avoiding the rocks!",document.getElementById("play-btn").addEventListener("click",()=>{M(i),i.start()}),document.getElementById("next").addEventListener("click",()=>{new q})};window.onYouTubeIframeAPIReady=function(){};var q=function(){N.showPage("postquestionnaire.html"),$("#questionnaire").attr("src","https://berkeley.qualtrics.com/jfe/form/SV_7W2jYeop6Bo0kYZ?UID="+uniqueId),window.addEventListener("message",(function(t){if(t.data&&"string"==typeof t.data){var e=t.data.split("|");"QualtricsEOS"==e[0]&&(N.recordTrialData({phase:"postquestionnaire",status:"back_from_qualtrics"}),N.recordUnstructuredData("qualtrics_session_id",e[2]),document.getElementById("next").style.visibility="visible")}})),document.getElementById("next").addEventListener("click",()=>{new Q})},Q=function(){N.showPage("continueToBonusQuestionnaire.html"),document.getElementById("continueToExit").addEventListener("click",()=>{new z}),N.showPage("continueToBonusQuestionnaire.html"),document.getElementById("continueToAdditionalSurvey").addEventListener("click",()=>{new j})},j=function(){N.showPage("bonusquestionnaire.html");try{$("#bonusquestionnaire").attr("src","https://berkeley.qualtrics.com/jfe/form/SV_8c3Klzuagw3jdhb?UID="+uniqueId)}catch(t){console.log(t)}window.addEventListener("message",(function(t){if(t.data&&"string"==typeof t.data){var e=t.data.split("|");"QualtricsEOS"==e[0]&&(N.recordTrialData({phase:"bonusquestionnaire",status:"back_from_qualtrics"}),N.recordUnstructuredData("qualtrics_session_id",e[2]),document.getElementById("next").style.visibility="visible")}})),document.getElementById("next").addEventListener("click",()=>{new z})},z=function(){N.showPage("thanks-mturksubmit.html"),document.getElementById("next").addEventListener("click",()=>{new W})},W=function(){N.showPage("complete.html"),document.getElementById("next").addEventListener("click",()=>{N.completeHIT(),new G})},G=function(){N.showPage("closepopup.html")};$(window).load((function(){new U,N.doInstructions(P,(function(){document.getElementById("next").addEventListener("click",()=>{new U})}))}))}]);