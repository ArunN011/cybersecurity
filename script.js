const counters = document.querySelectorAll(".counter");

const speed = 100; 

const startCounting = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target + "+";
      }
    };

    updateCount();
  });
};

let started = false;

window.addEventListener("scroll", () => {
  const section = document.querySelector(".stats-section");

  const sectionTop = section.offsetTop - 300;

  if (window.scrollY > sectionTop && !started) {
    startCounting();
    started = true;
  }
});

function showTab(tabId) {

  document.querySelectorAll(".tab-pane").forEach(tab => {
    tab.classList.remove("active");
  });

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  document.getElementById(tabId).classList.add("active");

  event.target.classList.add("active");
}