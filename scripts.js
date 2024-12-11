// Navegación Responsiva - Hamburguesa
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

// Cambiar el estilo de la barra de navegación al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Inicializar Swiper para Servicios
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
});

// Inicializar Swiper para Testimonios
const testimonialsSwiper = new Swiper(".testimonialsSwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".testimonialsSwiper .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".testimonialsSwiper .swiper-button-next",
        prevEl: ".testimonialsSwiper .swiper-button-prev",
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
});

// Modal de Servicios
const serviceItems = document.querySelectorAll('.service-item');
const modal = document.getElementById('serviceModal');
const closeButton = document.querySelector('.close-button');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const beforeImage = document.getElementById('beforeImage');
const afterImage = document.getElementById('afterImage');

// Inicializar Swiper para Antes y Después en el Modal
let beforeAfterSwiper;
function initBeforeAfterSwiper() {
    beforeAfterSwiper = new Swiper(".before-after-swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".before-after-swiper .swiper-button-next",
            prevEl: ".before-after-swiper .swiper-button-prev",
        },
        pagination: {
            el: ".before-after-swiper .swiper-pagination",
            clickable: true,
        },
    });
}

serviceItems.forEach(item => {
    item.addEventListener('click', () => {
        const title = item.getAttribute('data-title');
        const description = item.getAttribute('data-description');

        modalTitle.textContent = title;
        modalDescription.textContent = description;

        // Verificar si el servicio es "Street Cleans"
        if (title === "Street Cleans") {
            // Si es Street Cleans, mostrar a1.jpg y d1.jpg
            beforeImage.src = 'images/a1.jpg';
            beforeImage.alt = `Antes de ${title}`;

            afterImage.src = 'images/d1.jpg';
            afterImage.alt = `Después de ${title}`;
        } else {
            // Para otros servicios puedes:
            // - Dejar imágenes vacías
            // - O poner imágenes por defecto
            beforeImage.src = '';
            beforeImage.alt = 'Sin imagen';
            afterImage.src = '';
            afterImage.alt = 'Sin imagen';
        }

        // Inicializar Swiper en el modal si no está ya inicializado
        if (!beforeAfterSwiper) {
            initBeforeAfterSwiper();
        }

        modal.style.display = 'block';
    });
});

// Cerrar el modal al hacer clic en la "X"
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera del contenido del modal
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

// Inicializar Mapa de Google
function initMap() {
    const location = { lat: 29.7604, lng: -95.3698 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}

// Formulario de Contacto - Validación Básica
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    contactForm.reset();
});
