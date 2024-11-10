document.addEventListener('DOMContentLoaded', () => {
    const trailDots = [];
    const trailLength = 20;

    // Crear puntos de seguimiento del mouse
    for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        document.body.appendChild(dot);
        trailDots.push({ element: dot, x: 0, y: 0 });
    }

    // Seguimiento del mouse
    document.addEventListener('mousemove', (e) => {
        trailDots.forEach((dot, index) => {
            dot.x = e.clientX;
            dot.y = e.clientY;
            dot.element.style.transform = `translate(${dot.x}px, ${dot.y}px) scale(${1 - index * 0.05})`;
            dot.element.style.opacity = 1 - (index * 0.05);
        });
    });

    // Funcionalidad del menú hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active'); // Alternar la clase activa
    });

    // Resaltar el enlace activo
    const navbarLinks = document.querySelectorAll('.navbar a');

    const highlightActiveLink = () => {
        const sections = document.querySelectorAll('section');
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navbarLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${section.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', highlightActiveLink);

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

    // Validación del formulario de contacto
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar el envío del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validación simple
        if (name && email && message) {
            alert('Mensaje enviado con éxito. ¡Gracias por contactarme!');
            contactForm.reset(); // Reiniciar el formulario
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

    // Funciones para abrir y cerrar el modal
    window.openModal = function(modalId) {
        document.getElementById(modalId).style.display = "block";
    }

    window.closeModal = function(modalId) {
        document.getElementById(modalId).style.display = "none";
    }

    // Cerrar el modal al hacer clic fuera del contenido
    window.onclick = function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    }
});
