document.addEventListener("DOMContentLoaded", function () {

    /* ================= MOBILE MENU ================= */
  
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
  
    if (hamburger && navMenu) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
      });
  
      document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
        });
      });
    }
  
    /* ================= NAVBAR SCROLL ================= */
  
    window.addEventListener("scroll", () => {
      const navbar = document.querySelector(".navbar");
  
      if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
      }
    });
  
    /* ================= SMOOTH SCROLL ================= */
  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", e => {
        e.preventDefault();
  
        const target = document.querySelector(anchor.getAttribute("href"));
  
        if (target) {
          target.scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    });
  
    /* ================= ACTIVE LINK ================= */
  
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");
  
    function highlightNav() {
  
      let current = "";
  
      sections.forEach(section => {
  
        const top = section.getBoundingClientRect().top;
  
        if (top <= 120 && top + section.clientHeight > 120) {
          current = section.id;
        }
  
      });
  
      navLinks.forEach(link => {
  
        link.style.color = "";
  
        if (link.getAttribute("href") === `#${current}`) {
          link.style.color = "#2563eb";
        }
  
      });
    }
  
    window.addEventListener("scroll", highlightNav);
  
  
    /* ================= INTERSECTION ANIMATION ================= */
  
    const observer = new IntersectionObserver(entries => {
  
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
        }
      });
  
    }, { threshold: 0.1 });
  
  
    document
      .querySelectorAll(".skill-category, .certificate-card, .timeline-item, .education-item, .stat-card")
      .forEach(el => observer.observe(el));
  
  
    /* ================= DOWNLOAD RESUME ================= */
  
    const downloadBtn = document.getElementById("downloadBtn");
  
    if (downloadBtn) {
  
      downloadBtn.addEventListener("click", () => {
  
        const link = document.createElement("a");
  
        link.href =
          "https://raw.githubusercontent.com/nkjai24/github-portfolio/main/resume/Nandhakumar%20resume%20for%20job.pdf";
  
        link.download = "Nandhakumar_J_Resume.pdf";
  
        document.body.appendChild(link);
  
        link.click();
  
        document.body.removeChild(link);
  
      });
  
    }
  
  
    /* ================= TYPING EFFECT ================= */
  
    const heroTitle = document.querySelector(".hero-title");
  
    if (heroTitle) {
  
      const text = heroTitle.textContent;
  
      heroTitle.textContent = "";
  
      let i = 0;
  
      function type() {
  
        if (i < text.length) {
          heroTitle.textContent += text[i++];
          setTimeout(type, 120);
        }
  
      }
  
      type();
  
    }
  
  
    /* ================= FLOATING ICONS ================= */
  
    document.querySelectorAll(".floating-element").forEach((el, i) => {
  
      setInterval(() => {
  
        const x = Math.random() * 10 - 5;
        const y = Math.random() * 10 - 5;
  
        el.style.transform = `translate(${x}px, ${y}px)`;
  
      }, 2000 + i * 500);
  
    });
  
  
    /* ================= SKILL TAG HOVER ================= */
  
    document.querySelectorAll(".skill-tag").forEach(tag => {
  
      tag.addEventListener("mouseenter", () => {
        tag.style.transform = "scale(1.1)";
      });
  
      tag.addEventListener("mouseleave", () => {
        tag.style.transform = "scale(1)";
      });
  
    });
  
  
    /* ================= WHATSAPP EFFECT ================= */
  
    const contactDetail = document.querySelector(".contact-detail");
  
    if (contactDetail) {
  
      const link = contactDetail.querySelector("a");
  
      if (link) {
  
        link.addEventListener("click", () => {
          console.log("WhatsApp clicked");
        });
  
      }
  
    }
  
  
    /* ================= SCROLL PROGRESS ================= */
  
    const progress = document.createElement("div");
  
    progress.style.cssText = `
      position:fixed;
      top:0;
      left:0;
      height:3px;
      width:0%;
      background:linear-gradient(45deg,#667eea,#764ba2);
      z-index:9999;
    `;
  
    document.body.appendChild(progress);
  
  
    window.addEventListener("scroll", () => {
  
      const percent =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
  
      progress.style.width = percent + "%";
  
    });
  
  
    /* ================= PARTICLES ================= */
  
    if (window.particlesJS) {
  
      particlesJS("particles-js", {
  
        particles: {
  
          number: {
            value: 60,
            density: { enable: true, value_area: 800 }
          },
  
          color: { value: "#00ffcc" },
  
          shape: { type: "circle" },
  
          opacity: { value: 0.5 },
  
          size: { value: 3, random: true },
  
          line_linked: {
            enable: true,
            distance: 150,
            color: "#00ffcc",
            opacity: 0.3,
            width: 1
          },
  
          move: {
            enable: true,
            speed: 2,
            out_mode: "out"
          }
        },
  
        interactivity: {
  
          events: {
  
            onhover: {
              enable: true,
              mode: "repulse"
            },
  
            onclick: {
              enable: true,
              mode: "push"
            }
  
          },
  
          modes: {
  
            repulse: { distance: 120 },
  
            push: { particles_nb: 4 }
  
          }
  
        },
  
        retina_detect: true
  
      });
  
    }
  
  
    /* ================= CONSOLE MESSAGE ================= */
  
    console.log("🚀 Portfolio Loaded Successfully!");
  
  });
  