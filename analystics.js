let barChart, pieChart;

function toggleSidebar(){
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");

  setTimeout(initCharts,300);
}

function initCharts(){

  if(barChart) barChart.destroy();
  if(pieChart) pieChart.destroy();

 barChart = new Chart(document.getElementById("barChart"), {
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
    maintainAspectRatio:false, 
    plugins:{
      legend:{ display:true }
    }
  }
});


  pieChart = new Chart(document.getElementById("pieChart"), {
    type:"doughnut",
    data:{
      labels:["Critical","High","Medium","Low"],
      datasets:[{
        data:[12,30,40,18],
        backgroundColor:["#ef4444","#f59e0b","#10b981","#6366f1"]
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      cutout:"65%",
      layout:{ padding:20 }
    }
  });

}


window.addEventListener("load",()=>{
  setTimeout(initCharts,200);
});


window.addEventListener("resize",()=>{
  setTimeout(()=>{
    if(barChart) barChart.resize();
    if(pieChart) pieChart.resize();
  },200);
});