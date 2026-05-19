/* ==========================================
   JOHN ALEJANDRO PORTFOLIO LOGIC & INTERACTIVITY
   ========================================== */

// --- 1. CATÁLOGO DE PROYECTOS DE GITHUB ---
const projectsData = [
    {
        name: "Servicio Social UCP",
        githubName: "Alejostone1/Serviciosocial_ucp",
        description: "Sistema para el control, agendamiento y certificación de las horas de servicio social obligatorio para estudiantes de la Universidad Católica de Pereira.",
        category: "ucp",
        tags: ["PHP", "JavaScript", "MySQL", "CSS3", "Académico"],
        githubUrl: "https://github.com/Alejostone1/Serviciosocial_ucp"
    },
    {
        name: "Market UCP",
        githubName: "Alejostone1/Market_ucp",
        description: "Plataforma de comercio electrónico (marketplace) interna para la comunidad universitaria de la UCP, facilitando la compra y venta segura entre estudiantes.",
        category: "ucp",
        tags: ["HTML5", "JavaScript", "CSS3", "Bootstrap", "MySQL"],
        githubUrl: "https://github.com/Alejostone1/Market_ucp"
    },
    {
        name: "Adi Estilos",
        githubName: "Alejostone1/Adi_Estilos",
        description: "Sistema web enfocado en la administración, asignación de turnos y marketing digital para peluquerías y estilistas independientes.",
        category: "web",
        tags: ["Node.js", "Express", "MongoDB", "Vanilla CSS", "EJS"],
        githubUrl: "https://github.com/Alejostone1/Adi_Estilos"
    },
    {
        name: "Turnos Control",
        githubName: "Alejostone1/TurnosControl",
        description: "Plataforma interactiva para la automatización y gestión de flujos de atención al cliente mediante turnos digitales optimizados.",
        category: "web",
        tags: ["ReactJS", "Node.js", "Express", "PostgreSQL", "TailwindCSS"],
        githubUrl: "https://github.com/Alejostone1/TurnosControl"
    },
    {
        name: "Formation 360",
        githubName: "Alejostone1/Formation360",
        description: "Herramienta de retroalimentación y evaluación de competencias de 360 grados, diseñada para optimizar los procesos de formación en equipos.",
        category: "ucp",
        tags: ["Java", "Spring Boot", "PostgreSQL", "HTML5", "CSS3"],
        githubUrl: "https://github.com/Alejostone1/Formation360"
    },
    {
        name: "MatheRest API",
        githubName: "Alejostone1/MatheRest",
        description: "API REST modular diseñada para la resolución interactiva de problemas matemáticos, cálculos numéricos y análisis estadístico algorítmico.",
        category: "web",
        tags: ["Node.js", "Express", "REST API", "Mathematics", "Jest"],
        githubUrl: "https://github.com/Alejostone1/MatheRest"
    },
    {
        name: "MoonDark Interface",
        githubName: "Alejostone1/MoonDark",
        description: "Diseño conceptual premium de interfaz web interactiva en modo oscuro con iluminación de neón morada y transiciones dinámicas.",
        category: "moon",
        tags: ["HTML5", "Vanilla CSS", "JavaScript", "Dark-Theme", "Animations"],
        githubUrl: "https://github.com/Alejostone1/MoonDark"
    },
    {
        name: "Proyecto Final Moon",
        githubName: "Alejostone1/ProyectoFinalMoon",
        description: "Aplicación de alta fidelidad visual inspirada en la temática espacial y lunar, que implementa una arquitectura web inmersiva en modo oscuro.",
        category: "moon",
        tags: ["Vite", "React", "CSS Variables", "Glassmorphism", "Dark Theme"],
        githubUrl: "https://github.com/Alejostone1/ProyectoFinalMoon"
    },
    {
        name: "Café Luna Oscura",
        githubName: "Alejostone1/cafe-luna-oscura",
        description: "Portal interactivo y carta digital para un café bar de temática misteriosa con diseño premium, efectos visuales y menú dinámico.",
        category: "moon",
        tags: ["HTML5", "CSS3", "JavaScript", "Audio-Player", "Responsive"],
        githubUrl: "https://github.com/Alejostone1/cafe-luna-oscura"
    },
    {
        name: "Paticas Pet App",
        githubName: "Alejostone1/paticas",
        description: "Aplicación móvil y plataforma social orientada al rescate, adopción responsable y donación para el cuidado de mascotas desamparadas.",
        category: "mobile",
        tags: ["React Native", "Expo", "Firebase", "Android", "iOS"],
        githubUrl: "https://github.com/Alejostone1/paticas"
    },
    {
        name: "Codesoft Utilities",
        githubName: "Alejostone1/Codesoft",
        description: "Colección de herramientas de automatización, scripts optimizadores y componentes reutilizables para agilizar el desarrollo de software.",
        category: "web",
        tags: ["JavaScript", "Node.js", "Automation", "Utilities", "CLI"],
        githubUrl: "https://github.com/Alejostone1/Codesoft"
    },
    {
        name: "App Remember",
        githubName: "Alejostone1/App_Remember",
        description: "Gestor móvil inteligente de notas, recordatorios rápidos y tareas con notificaciones push locales para aumentar la productividad diaria.",
        category: "mobile",
        tags: ["React Native", "AsyncStorage", "Expo", "Productivity"],
        githubUrl: "https://github.com/Alejostone1/App_Remember"
    },
    {
        name: "Trivia Mind Challenge",
        githubName: "Alejostone1/trivia-mind-challenge-app",
        description: "Juego móvil interactivo de preguntas y respuestas diseñado para evaluar la agilidad mental y los conocimientos en ciencias y tecnología.",
        category: "mobile",
        tags: ["React Native", "Expo", "Redux", "Trivia-Game", "Gamification"],
        githubUrl: "https://github.com/Alejostone1/trivia-mind-challenge-app"
    },
    {
        name: "React Native Optativa",
        githubName: "Alejostone1/REACT_NATIVE_OPTATIVA",
        description: "Repositorio académico enfocado en prácticas avanzadas de desarrollo nativo móvil, interfaces fluidas y manejo de sensores.",
        category: "mobile",
        tags: ["React Native", "Expo", "Académico", "Mobile Sensors"],
        githubUrl: "https://github.com/Alejostone1/REACT_NATIVE_OPTATIVA"
    },
    {
        name: "Portal Río de los Oros",
        githubName: "Alejostone1/riodeloros",
        description: "Sitio web interactivo orientado a la concientización ambiental, preservación ecológica y turismo de la cuenca del Río de los Oros.",
        category: "web",
        tags: ["HTML5", "CSS3", "JavaScript", "GIS-Maps", "Environment"],
        githubUrl: "https://github.com/Alejostone1/riodeloros"
    }
];

// --- 2. RENDERIZADO DINÁMICO DE PROYECTOS ---
const projectsGrid = document.getElementById("projects-grid");

function displayProjects(filterCategory = "all") {
    projectsGrid.innerHTML = "";
    
    const filteredProjects = filterCategory === "all" 
        ? projectsData 
        : projectsData.filter(proj => proj.category === filterCategory);
        
    filteredProjects.forEach((project, index) => {
        const card = document.createElement("div");
        card.className = "project-card glass-card";
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.5s ease-out " + (index * 0.05) + "s";
        
        let categoryLabel = "";
        switch(project.category) {
            case "ucp": categoryLabel = "Academia UCP"; break;
            case "web": categoryLabel = "Web & API"; break;
            case "mobile": categoryLabel = "Móvil"; break;
            case "moon": categoryLabel = "Moon Universe"; break;
        }
        
        const techBadges = project.tags.map(tag => `<span class="tech-badge">${tag}</span>`).join("");
        
        card.innerHTML = `
            <span class="project-tag">${categoryLabel}</span>
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                ${techBadges}
            </div>
            <div class="project-links">
                <a href="${project.githubUrl}" target="_blank" class="project-link">
                    <i class="fa-brands fa-github"></i> Código en GitHub
                </a>
            </div>
        `;
        
        projectsGrid.appendChild(card);
        
        // Trigger para la animación de entrada
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 50);
    });
}

// Inicializar proyectos
displayProjects();

// --- 3. LÓGICA DE FILTRADO (TABS) ---
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        // Quitar clase activa a todos
        filterButtons.forEach(button => button.classList.remove("active"));
        // Poner activa al actual
        btn.classList.add("active");
        
        const filterValue = btn.getAttribute("data-filter");
        displayProjects(filterValue);
    });
});

// --- 4. MENÚ HAMBURGUESA (MÓVIL) ---
const hamburger = document.getElementById("hamburger-menu");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        // Remover clase activa previa
        navLinks.forEach(lnk => lnk.classList.remove("active"));
        // Agregar activa a la actual
        link.classList.add("active");
        
        // Cerrar menú móvil
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

// --- 5. SISTEMA DE PARTÍCULAS INTERACTIVO (TELECOM NETWORK) ---
const canvas = document.getElementById("particles-canvas");
const ctx = canvas.getContext("2d");

let particlesArray = [];
const numberOfParticles = 75;
const connectionDistance = 115;

const mouse = {
    x: null,
    y: null,
    radius: 150
};

// Seguir la posición del mouse
window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

// Resetear mouse al salir de la pantalla
window.addEventListener("mouseout", () => {
    mouse.x = null;
    mouse.y = null;
});

// Redimensionar canvas
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

// Configurar dimensiones iniciales
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Clase Partícula
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1; // Tamaño de partículas pequeño
        this.speedX = (Math.random() - 0.5) * 0.7; // Velocidad suave
        this.speedY = (Math.random() - 0.5) * 0.7;
        this.color = Math.random() > 0.5 ? "#a855f7" : "#6366f1"; // Morado o Indigo
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Rebotar en bordes
        if (this.x > canvas.width || this.x < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.speedY = -this.speedY;
        }
        
        // Interacción suave con el mouse
        if (mouse.x != null && mouse.y != null) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius) {
                // Atracción suave
                this.x += dx * 0.01;
                this.y += dy * 0.01;
            }
        }
    }
    
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Inicializar partículas
function initParticles() {
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

// Conectar partículas (Efecto de Red de Telecomunicaciones)
function connect() {
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let dx = particlesArray[a].x - particlesArray[b].x;
            let dy = particlesArray[a].y - particlesArray[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < connectionDistance) {
                // Opacidad según distancia
                let opacity = (1 - (distance / connectionDistance)) * 0.15;
                ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
        
        // Conectar al mouse
        if (mouse.x != null && mouse.y != null) {
            let dx = particlesArray[a].x - mouse.x;
            let dy = particlesArray[a].y - mouse.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius) {
                let opacity = (1 - (distance / mouse.radius)) * 0.25;
                ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
                ctx.lineWidth = 1.2;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }
        }
    }
}

// Loop de animación
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Dibujar fondo sutil con gradiente
    const gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 10, canvas.width/2, canvas.height/2, Math.max(canvas.width, canvas.height));
    gradient.addColorStop(0, '#0a0e1b');
    gradient.addColorStop(1, '#05070d');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    connect();
    requestAnimationFrame(animate);
}

// Arrancar sistema de partículas
initParticles();
animate();

// --- 6. ANIMACIÓN DE APARICIÓN AL HACER SCROLL (SECCIONES) ---
const sections = document.querySelectorAll('section');

const observerOptions = {
    root: null,
    threshold: 0.15
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            
            // Si es la sección de habilidades, disparar barras de progreso
            if (entry.target.id === 'skills') {
                const progressBars = entry.target.querySelectorAll('.progress-bar');
                progressBars.forEach(bar => {
                    const widthVal = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = widthVal;
                    }, 100);
                });
            }
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.classList.add('section-hidden');
    sectionObserver.observe(section);
});
