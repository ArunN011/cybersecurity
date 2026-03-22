
let role = localStorage.getItem("userRole");
let email = localStorage.getItem("userEmail");

if(role !== "user"){
  window.location.href = "login.html";
}


document.getElementById("userEmail").innerText = email || "user@email.com";

function toggleSidebar(){
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
}

function logout(){
  localStorage.clear();
  window.location.href="login.html";
}

function animate(id, end){
  let i=0;
  let interval=setInterval(()=>{
    i+=5;
    document.getElementById(id).innerText=i;
    if(i>=end) clearInterval(interval);
  },20);
}

animate("count1",126);
animate("count2",98);
animate("count3",210);

window.addEventListener("load", () => {

  new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
      labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      datasets:[{
        label:"Threats",
        data:[20,35,25,50,40,60,45],
        backgroundColor:"#8b5cf6",
        borderRadius:8
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false
    }
  });

  new Chart(document.getElementById("pieChart"), {
    type: "doughnut",
    data: {
      labels:["Critical","High","Medium","Low"],
      datasets:[{
        data:[30,40,20,10],
        backgroundColor:["#ef4444","#f59e0b","#10b981","#6366f1"]
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false
    }
  });

});