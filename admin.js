let links = document.querySelectorAll(".sidebar ul li a");

links.forEach(link => {
  if (link.href === window.location.href) {
    link.parentElement.classList.add("active");
  }
});


let role = localStorage.getItem("userRole");
let email = localStorage.getItem("userEmail");

if (role !== "admin") {
  window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("adminEmail").innerText = email || "Admin";
});



document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 768) {
    document.getElementById("sidebar").classList.remove("active");
  }
});


function toggleSidebar() {
  let sidebar = document.getElementById("sidebar");
  if (sidebar) sidebar.classList.toggle("active");
}


function toggleProfile() {
  let menu = document.getElementById("profileMenu");
  if (menu) {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
}


function animate(id, end) {
  let el = document.getElementById(id);
  if (!el) return;

  let i = 0;
  let interval = setInterval(() => {
    i += 10;
    el.innerText = i;
    if (i >= end) {
      el.innerText = end;
      clearInterval(interval);
    }
  }, 20);
}

window.addEventListener("load", () => {

  animate("count1", 1200);
  animate("count2", 600);
  animate("count3", 120);

  setTimeout(() => {
    window.lineChart = new Chart(document.getElementById("lineChart"), {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        datasets: [{
          label: "Threats",
          data: [10, 20, 15, 30, 25],
          borderColor: "#8b5cf6",
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });

 
    window.pieChart = new Chart(document.getElementById("pieChart"), {
      type: "doughnut",
      data: {
        labels: ["Critical", "High", "Medium"],
        datasets: [{
          data: [30, 50, 20],
          backgroundColor: ["#ef4444", "#f59e0b", "#10b981"]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });

    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));

      if (window.lineChart) window.lineChart.resize();
      if (window.pieChart) window.pieChart.resize();

    }, 300);

  }, 300);

});