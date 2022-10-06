
let i = 0;
document.querySelectorAll(".tsparticles").forEach((elem) => {
  tsParticles.set(`tsparticles_${i++}`, elem, {
    
    fps_limit: 60,
    interactivity: {
    detect_on: "canvas",
    events: {
      onclick: { enable: true, mode: "push" },
      onhover: {
        enable: true,
        mode: "attract",
        parallax: { enable: false, force: 60, smooth: 10 }
      },
      resize: true
    },
    modes: {
      push: { quantity: 4 },
      attract: { distance: 100, duration: 0.4, factor: 5 }
    }
  },
  particles: {
    color: { value: "#ff9966" },
    opacity: 0.9,
    line_linked: {
      color: { value: "#ffff"},
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: "none",
      enable: true,
      out_mode: "out",
      random: false,
      speed: 2,
      straight: false
    },
    number: { density: { enable: true, value_area: 800 }, value: 80 },
    opacity: {
      anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
      random: false,
      value: 0.5
    },
    shape: {   
      polygon: { nb_sides: 5 },
      stroke: { color: "#000000", width: 0 },
      type: "circle"
    },
    size: {
      anim: { enable: false, size_min: 0.2, speed: 40, sync: false },
      random: true,
      value: 5
    }
  },
  
  retina_detect: true
});

})


  