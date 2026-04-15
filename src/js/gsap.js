gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("[class*='animate-']").forEach((el) => {
  let vars = {
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
  };

  // 👉 Animation Types
  if (el.classList.contains("animate-fade")) {
    vars.opacity = 0;
  }

  if (el.classList.contains("animate-up")) {
    vars.y = 50;
  }

  if (el.classList.contains("animate-down")) {
    vars.y = -50;
  }

  if (el.classList.contains("animate-left")) {
    vars.x = 50;
  }

  if (el.classList.contains("animate-right")) {
    vars.x = -50;
  }

  if (el.classList.contains("animate-zoom-in")) {
    vars.scale = 0.5;
  }

  if (el.classList.contains("animate-zoom-out")) {
    vars.scale = 1.4;
  }

  if (el.classList.contains("animate-z")) {
    vars.scale = 0.8;
    vars.opacity = 0;
  }

  // 👉 Optional data controls
  vars.delay = el.dataset.delay || 0;
  vars.duration = el.dataset.duration || 1.2;

  gsap.from(el, vars);
});