// Copy IP
function copyIP(){
navigator.clipboard.writeText(document.getElementById('ip').value)
.then(()=>alert("✅ IP berhasil di copy!"))
.catch(()=>alert("❌ Gagal copy IP"));
}

// Dummy server status
document.getElementById("serverStatus").innerText="🟢 Server Online";

// Hide loading
window.addEventListener("load",()=>{setTimeout(()=>{document.getElementById("loading").style.display="none";},500);});

// Mini Games
let randomNumber=Math.floor(Math.random()*10)+1;
function checkGuess(){
let val=parseInt(document.getElementById("guessInput").value);
let res=document.getElementById("guessResult");
if(val===randomNumber){res.innerText="🎉 Benar!";randomNumber=Math.floor(Math.random()*10)+1;}
else if(val>randomNumber) res.innerText="⬇ Terlalu tinggi!";
else if(val<randomNumber) res.innerText="⬆ Terlalu rendah!";
else res.innerText="❌ Masukkan angka valid!";
}

let score=0; let star=document.getElementById("star"); let starScore=document.getElementById("starScore");
function moveStar(){let x=Math.random()*(document.getElementById("starGame").clientWidth-20); let y=30+Math.random()*(document.getElementById("starGame").clientHeight-50); star.style.left=x+"px"; star.style.top=y+"px";}
star.onclick=function(){score++; starScore.innerText=score; moveStar();}
moveStar(); setInterval(moveStar,3000);

// Galaxy + Meteor
const canvas=document.getElementById('canvasBG'); const ctx=canvas.getContext('2d'); canvas.width=window.innerWidth; canvas.height=window.innerHeight;
let stars=[]; for(let i=0;i<200;i++){stars.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,size:Math.random()*2+1,speedY:Math.random()*0.2+0.1});}
let meteors=[];
function spawnMeteor(){meteors.push({x:Math.random()*canvas.width,y:0,size:Math.random()*3+2,speedX:(Math.random()-0.5)*10,speedY:Math.random()*10+4});}
setInterval(spawnMeteor,1500);
function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
for(let s of stars){ctx.fillStyle='white';ctx.beginPath();ctx.arc(s.x,s.y,s.size,0,Math.PI*2);ctx.fill();s.y+=s.speedY;if(s.y>canvas.height)s.y=0;}
for(let i=0;i<meteors.length;i++){let m=meteors[i];ctx.fillStyle='white';ctx.beginPath();ctx.arc(m.x,m.y,m.size,0,Math.PI*2);ctx.fill();m.x+=m.speedX;m.y+=m.speedY;if(m.y>canvas.height||m.x<0||m.x>canvas.width)meteors.splice(i,1);}
requestAnimationFrame(animate);}
animate();
canvas.addEventListener('mousemove',function(e){stars.push({x:e.clientX,y:e.clientY,size:2,speedY:Math.random()*0.5});if(stars.length>400) stars.splice(0,50);});