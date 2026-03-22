
document.getElementById("userEmail").innerText =
localStorage.getItem("userEmail") || "user@mail.com";

function toggleSidebar(){
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
}

const map = document.getElementById("map");

setInterval(()=>{
  let dot=document.createElement("div");
  dot.className="attack";
  dot.style.top=Math.random()*100+"%";
  dot.style.left=Math.random()*100+"%";
  map.appendChild(dot);

  setTimeout(()=>dot.remove(),1500);
},400);

const aiTexts=[
"AI: Phishing attack probability 87%",
"AI: Malware spike detected",
"AI: Unusual login detected",
"AI: DDoS risk increasing"
];

setInterval(()=>{
  document.getElementById("aiText").innerText =
  aiTexts[Math.floor(Math.random()*aiTexts.length)];
},3000);


const logList=document.getElementById("logList");

setInterval(()=>{
  let li=document.createElement("li");
  li.innerText="📡 Attack from "+["India","USA","China"][Math.random()*3|0];
  logList.prepend(li);

  if(logList.children.length>8){
    logList.removeChild(logList.lastChild);
  }
},1000);


function toggleChat(){
  let body=document.getElementById("chatBody");
  body.style.display = body.style.display === "none" ? "block" : "none";
}

function sendMessage(e){
  if(e.key==="Enter"){
    let input=document.getElementById("chatInput");
    let body=document.getElementById("chatBody");

    let msg=document.createElement("div");
    msg.innerText="You: "+input.value;

    let reply=document.createElement("div");
    reply.innerText="AI: Monitoring threat... safe";

    body.appendChild(msg);
    body.appendChild(reply);

    input.value="";
    body.scrollTop=body.scrollHeight;
  }
}
function logout(){
  localStorage.clear();
  window.location.href="login.html";
}