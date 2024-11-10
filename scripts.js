document.addEventListener('DOMContentLoaded', () => {
    const trailDots = [];
    const trailLength = 20;
    // Crear puntos de seguimiento del mouse
    for (let i = 0; i < trailLength; i++) {
    const dot = document.createElement('div');
    dot.className = 'cursor-trail';
    document.body.appendChild(dot);
    trailDots.push({element: dot, x: 0, y: 0});
    }
    // Seguimiento del mouse
    document.addEventListener('mousemove', (e) => {
    trailDots.forEach((dot, index) => {
    dot.x = e.clientX;
    dot.y = e.clientY;
    dot.element.style.transform = translate(${dot.x}px, ${dot.y}px) scale(${1 - index * 0.05});
    dot.element.style.opacity = 1 - (index 0.05);
    });
    });
    // Crear partículas
    const createParticles = () => {
    const particleCount = 50;
    const colors = ['var(--c1)', 'var(--c2)', 'var(--c3)'];
    for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.background = colors[Math.floor(Math.random() colors.length)];
    particle.style.left = Math.random() 100 + 'vw';
    particle.style.top = Math.random() 100 + 'vh';
    particle.style.animation = float ${Math.random() * 10 + 5}s linear infinite;
    document.querySelector('.particle-container').appendChild(particle);
    }
    };
    // Crear partículas interactivas
    const createInteractiveParticles = () => {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 100;
    class EnhancedParticle {
    constructor() {
    this.x = Math.random() canvas.width;
    this.y = Math.random() canvas.height;
    this.vx = (Math.random() - 0.5) 2;
    this.vy = (Math.random() - 0.5) 2;
    this.radius = Math.random() 2 + 1;
    this.color = hsla(${Math.random() * 360}, 70%, 70%, 0.5);
    }
    draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    }
    update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width) this.vx = -1;
    if (this.y < 0 || this.y > canvas.height) this.vy = -1;
    }
    }
    const init = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];
    for (let i = 0; i < particleCount; i++) {
    particles.push(new EnhancedParticle());
    }
    };
    const animateParticles = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
    p.update();
    p.draw();
    });
    requestAnimationFrame(animateParticles);
    };
    init();
    animateParticles();
    };
    createParticles();
    createInteractiveParticles();
    // Animación de las barras de habilidades
    const skillBars = document.querySelectorAll('.skill-bar');
    const animateSkillBars = () => {
    skillBars.forEach(bar => {
    const progress = bar.dataset.progress;
    const progressBar = bar.querySelector('.progress-fill');
    progressBar.style.width = '0%';
    const animate = () => {
    let width = 0;
    const interval = setInterval(() => {
    if (width >= progress) {
    clearInterval(interval);
    } else {
    width++;
    progressBar.style.width = ${width}%;
    }
    }, 20);
    };
    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
    animate();
    observer.unobserve(entry.target);
    }
    });
    });
    observer.observe(bar);
    });
    };
    animateSkillBars();
    // Botón de desplazamiento hacia arriba
    const scrollBtn = document.querySelector('.scroll-top-btn');
    scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    // Mostrar el botón de desplazamiento cuando se desplaza
    window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
    scrollBtn.classList.add('visible');
    } else {
    scrollBtn.classList.remove('visible');
    }
    });
    });