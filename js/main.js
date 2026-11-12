/* ╔══════════════════════════════════════════════════════════════╗
   ║  PORTFÓLIO DÁRIO YOPILU — js/main.js                         ║
   ║  Scripts de interação e conteúdo dinâmico do portfólio.      ║
   ║                                                              ║
   ║  MAPA DOS MÓDULOS:                                           ║
   ║   1. Dados dos projetos                                      ║
   ║   2. Partículas (canvas)                                     ║
   ║   3. Spotlight                                               ║
   ║   4. Cursor personalizado                                    ║
   ║   5. Efeito magnético                                        ║
   ║   6. Tilt 3D                                                 ║
   ║   7. Preloader                                               ║
   ║   8. Navbar + botão topo                                     ║
   ║   9. Menu mobile                                             ║
   ║  10. Scroll reveal                                           ║
   ║  11. Barras de skill                                         ║
   ║  12. Contadores                                              ║
   ║  13. Efeito de digitação                                     ║
   ║  14. Filtro do portfólio                                     ║
   ║  15. Modal de projeto                                        ║
   ║  16. Formulário → WhatsApp                                   ║
   ║  17. Toggle de idioma                                        ║
   ║  18. Nav ativa no scroll                                     ║
   ║  19. Paralaxe das formas do hero                             ║
   ╚══════════════════════════════════════════════════════════════╝ */

/* ══════════════════════════════════════
   1. DADOS DOS PROJETOS (EDITE AQUI!)
   ══════════════════════════════════════ */
const projectsData = [
    {
        id: 1,
        category: "branding",
        image: "img/projeto1.jpg",
        title_pt: "Dinâmica — Reparação de Estofados",
        title_en: "Dinâmica — Upholstery Repair",
        category_label_pt: "Branding",
        category_label_en: "Branding",
        description_pt:
            "Design publicitário completo para a empresa Dinâmica, especializada em reparação e higienização de estofados em Luanda. Peça focada em comunicar os serviços principais — sofás, cadeiras, colchões, poltronas e viaturas — com identidade visual forte em tons de azul marinho.",
        description_en:
            "Complete advertising design for Dinâmica, a company specializing in upholstery repair and cleaning in Luanda. The piece focused on communicating the main services with a strong navy blue visual identity.",
        tags: ["Design Publicitário", "Branding", "Photoshop", "Social Media"],
    },
    {
        id: 2,
        category: "social",
        image: "img/projeto2.jpg",
        title_pt: "Abertura de Actividades — Igreja",
        title_en: "Activities Opening — Church",
        category_label_pt: "Social Media",
        category_label_en: "Social Media",
        description_pt:
            "Design de cartaz para a abertura das actividades da Sociedade de Jovens do Pastorado do Bungo. Conceito criativo com prancheta e caneta, transmitindo o espírito de organização e planeamento do evento para jovens e adolescentes.",
        description_en:
            "Poster design for the opening of activities of the Youth Society of Pastorado do Bungo. Creative concept with clipboard and pen, conveying the spirit of organization and planning for the youth event.",
        tags: ["Cartaz", "Igreja", "Photoshop", "Composição"],
    },
    {
        id: 3,
        category: "social",
        image: "img/projeto3.jpg",
        title_pt: "Domingo de Aleluias — Páscoa",
        title_en: "Easter Sunday — Hallelujah",
        category_label_pt: "Social Media",
        category_label_en: "Social Media",
        description_pt:
            "Post comemorativo para o Domingo de Aleluias (Páscoa) da Congregação do Bungo. Design com temática bíblica — tumba aberta com luz dourada — e versículo de Mateus 28:6, criando uma atmosfera solene e esperançosa.",
        description_en:
            "Commemorative post for Easter Sunday (Hallelujah) of Congregação do Bungo. Design with biblical theme — open tomb with golden light — and verse from Matthew 28:6, creating a solemn and hopeful atmosphere.",
        tags: ["Social Media", "Igreja", "Photoshop", "Composição Visual"],
    },
    {
        id: 4,
        category: "social",
        image: "img/projeto4.jpg",
        title_pt: "Estudo Bíblico — Jovens",
        title_en: "Bible Study — Youth",
        category_label_pt: "Social Media",
        category_label_en: "Social Media",
        description_pt:
            "Design de divulgação para sessão de Estudo Bíblico sobre 'Métodos de Estudo Bíblico' com o preletor Adelino Casimiro. Visual sofisticado em tons de verde escuro com dourado, destaque para a Bíblia aberta com lupa — simbolizando estudo aprofundado.",
        description_en:
            "Promotional design for a Bible Study session on 'Bible Study Methods' with speaker Adelino Casimiro. Sophisticated visual in dark green with gold tones, featuring an open Bible with magnifying glass — symbolizing in-depth study.",
        tags: ["Social Media", "Tipografia", "Photoshop", "Composição"],
    },
    {
        id: 5,
        category: "social",
        image: "img/projeto5.jpg",
        title_pt: "Domingo de Pentecostes",
        title_en: "Pentecost Sunday",
        category_label_pt: "Social Media",
        category_label_en: "Social Media",
        description_pt:
            "Design para o Domingo de Pentecostes da IECA — Sínodo Provincial de Luanda. Peça com forte impacto visual: pomba branca em destaque sobre fundo de fogo, com versículo de Atos 1:8. Transmite poder, espiritualidade e solenidade.",
        description_en:
            "Design for Pentecost Sunday of IECA — Provincial Synod of Luanda. Piece with strong visual impact: white dove highlighted against a fire background, with verse from Acts 1:8. Conveys power, spirituality and solemnity.",
        tags: ["Social Media", "Igreja", "Photoshop", "Composição Visual"],
    },
    {
        id: 6,
        category: "advertising",
        image: "img/projeto6.jpg",
        title_pt: "EA — Serviços de Estofaria",
        title_en: "EA — Upholstery Services",
        category_label_pt: "Publicidade",
        category_label_en: "Advertising",
        description_pt:
            "Design publicitário para a EA Comércio e Prestação de Serviços, apresentando os serviços de restauração, higienização e produção de móveis. Layout clean com destaque para a poltrona e lista clara de serviços oferecidos.",
        description_en:
            "Advertising design for EA Commerce and Services, presenting restoration, cleaning and furniture production services. Clean layout highlighting the armchair and clear list of offered services.",
        tags: ["Design Publicitário", "Flyer", "Photoshop", "Layout"],
    },
    {
        id: 7,
        category: "advertising",
        image: "img/projeto7.jpg",
        title_pt: "EA — Antes e Depois",
        title_en: "EA — Before and After",
        category_label_pt: "Publicidade",
        category_label_en: "Advertising",
        description_pt:
            "Peça de demonstração dos serviços da EA, exibindo a transformação e restauro de um sofá com foco no resultado final, transmitindo confiança ao cliente.",
        description_en:
            "Demonstration piece for EA services, showing the transformation and restoration of a sofa with a focus on the final result, conveying trust to the customer.",
        tags: ["Design Publicitário", "Antes e Depois", "Photoshop", "Social Media"],
    },
    {
        id: 8,
        category: "advertising",
        image: "img/projeto8.jpg",
        title_pt: "Jindungo Cahombo — Flyer de Produto",
        title_en: "Cahombo Jindungo — Product Flyer",
        category_label_pt: "Publicidade",
        category_label_en: "Advertising",
        description_pt:
            "Flyer promocional do jindungo Cahombo, variedade angolana de piri-piri, com destaque para a intensidade do sabor em cada floco. Composição ousada e tipografia marcante para comunicar um produto 100% natural.",
        description_en:
            "Promotional flyer for Cahombo jindungo, an Angolan piri-piri variety, highlighting the intensity of flavour in every flake. Bold composition and striking typography to communicate a 100% natural product.",
        tags: ["Flyer", "Design Publicitário", "Produto", "Photoshop"],
    },
    {
        id: 9,
        category: "advertising",
        image: "img/projeto9.jpg",
        title_pt: "Kissangua — Flyer de Produto",
        title_en: "Kissangua — Product Flyer",
        category_label_pt: "Publicidade",
        category_label_en: "Advertising",
        description_pt:
            "Flyer para a kissangua, bebida tradicional angolana, com comunicação fresca e natural. O design valoriza a tradição da bebida e os seus sabores refrescantes, com destaque para o formato de 6 litros.",
        description_en:
            "Flyer for kissangua, a traditional Angolan drink, with fresh and natural communication. The design values the drink's tradition and refreshing flavours, highlighting the 6-litre format.",
        tags: ["Flyer", "Design Publicitário", "Bebida Tradicional", "Photoshop"],
    },
];

let currentModalIndex = 0;

/* ══════════════════════════════════════
   2. PARTÍCULAS (otimizado com throttle)
   ══════════════════════════════════════ */
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
let particles = [];
let mouse = { x: -999, y: -999 };
let W, H;
const isMobile = window.matchMedia("(pointer:coarse)").matches || window.innerWidth < 768;

function resizeCanvas() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let mouseMoveThrottle = 0;
document.addEventListener("mousemove", (e) => {
    const now = Date.now();
    if (now - mouseMoveThrottle < 16) return; // ~60fps
    mouseMoveThrottle = now;
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

class Particle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.7 ? "125,211,252" : "148,163,184";
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (!isMobile) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
                const force = (150 - dist) / 150;
                this.x -= dx * force * 0.03;
                this.y -= dy * force * 0.03;
                this.opacity = Math.min(0.8, this.opacity + 0.02);
            } else {
                this.opacity += (0.2 - this.opacity) * 0.01;
            }
        }
        if (this.x < -10) this.x = W + 10;
        if (this.x > W + 10) this.x = -10;
        if (this.y < -10) this.y = H + 10;
        if (this.y > H + 10) this.y = -10;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color},${this.opacity})`;
        ctx.fill();
    }
}

const particleCount = isMobile ? 30 : Math.min(100, Math.floor((W * H) / 14000));
for (let i = 0; i < particleCount; i++) particles.push(new Particle());

function drawLines() {
    const maxDist = 120;
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = dx * dx + dy * dy; // skip sqrt for perf
            if (dist < maxDist * maxDist) {
                const d = Math.sqrt(dist);
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(125,211,252,${0.06 * (1 - d / maxDist)})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
    }
    if (!isMobile) {
        particles.forEach((p) => {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 180) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.strokeStyle = `rgba(125,211,252,${0.12 * (1 - dist / 180)})`;
                ctx.lineWidth = 0.6;
                ctx.stroke();
            }
        });
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p) => {
        p.update();
        p.draw();
    });
    drawLines();
    requestAnimationFrame(animateParticles);
}
animateParticles();

/* ══════════════════════════════════════
   3. SPOTLIGHT (segue o mouse)
   ══════════════════════════════════════ */
const spotlight = document.getElementById("spotlight");
if (spotlight && !isMobile) {
    document.addEventListener("mousemove", (e) => {
        spotlight.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
    });
}

/* ══════════════════════════════════════
   4. CURSOR PERSONALIZADO
   ══════════════════════════════════════ */
const dot = document.getElementById("cursorDot");
const ring = document.getElementById("cursorRing");

if (!isMobile) {
    const DOT_OFFSET = 4; // metade da bolinha (8px)

    // Posiciona os dois elementos exactamente sob o cursor.
    // O translate(-50%,-50%) centra o anel seja qual for o seu tamanho.
    function moveCursor(x, y) {
        dot.style.transform = `translate(${x - DOT_OFFSET}px, ${y - DOT_OFFSET}px)`;
        ring.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
    }

    // Esconde/mostra o cursor personalizado quando o rato sai/entra na janela
    function hideCursor() {
        dot.classList.add("cursor-hidden");
        ring.classList.add("cursor-hidden");
        ring.classList.remove("pressed");
    }
    function showCursor() {
        dot.classList.remove("cursor-hidden");
        ring.classList.remove("cursor-hidden");
    }

    document.addEventListener("mousemove", (e) => {
        moveCursor(e.clientX, e.clientY);
        // Garante que o cursor personalizado volta a acompanhar o rato
        if (dot.classList.contains("cursor-hidden")) showCursor();
    });

    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseenter", showCursor);
    window.addEventListener("blur", hideCursor);
    document.addEventListener("mouseout", (e) => {
        if (!e.relatedTarget && !e.toElement) hideCursor();
    });

    // Efeito ao pressionar: só altera tamanho/opacidade, mantendo o centro no cursor
    document.addEventListener("mousedown", () => ring.classList.add("pressed"));
    document.addEventListener("mouseup", () => ring.classList.remove("pressed"));

    document
        .querySelectorAll(
            "a, button, .project-card, .service-card, .testimonial-card, .filter-btn, .skill-tag"
        )
        .forEach((el) => {
            el.addEventListener("mouseenter", () => ring.classList.add("hover"));
            el.addEventListener("mouseleave", () => ring.classList.remove("hover"));
        });
}

/* ══════════════════════════════════════
   5. EFEITO MAGNÉTICO
   ══════════════════════════════════════ */
if (!isMobile) {
    document.querySelectorAll(".magnetic").forEach((el) => {
        el.addEventListener("mousemove", (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            // Movimento bem subtil (no máximo ~3px) para não distrair
            el.style.transform = `translate(${x * 0.03}px, ${y * 0.03}px)`;
        });
        el.addEventListener("mouseleave", () => {
            el.style.transform = "";
        });
    });
}

/* ══════════════════════════════════════
   6. 3D TILT
   ══════════════════════════════════════ */
if (!isMobile) {
    document.querySelectorAll(".tilt-card").forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            card.style.transform = `perspective(800px) rotateX(${(0.5 - y) * 10}deg) rotateY(${(x - 0.5) * 10}deg) translateY(-6px)`;
            const glow = card.querySelector(".glow");
            if (glow) {
                glow.style.left = `${e.clientX - rect.left - 100}px`;
                glow.style.top = `${e.clientY - rect.top - 100}px`;
            }
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });
}

/* ══════════════════════════════════════
   7. PRELOADER
   ══════════════════════════════════════ */
window.addEventListener("load", () => {
    setTimeout(() => document.getElementById("preloader").classList.add("hidden"), 2000);
});

/* ══════════════════════════════════════
   8. NAVBAR + SCROLL TOP
   ══════════════════════════════════════ */
const navbar = document.getElementById("navbar");
const scrollTopBtn = document.getElementById("scrollTop");
window.addEventListener(
    "scroll",
    () => {
        navbar.classList.toggle("scrolled", window.scrollY > 60);
        scrollTopBtn.classList.toggle("visible", window.scrollY > 400);
    },
    { passive: true }
);

/* ══════════════════════════════════════
   9. MENU MOBILE
   ══════════════════════════════════════ */
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("active");
}
window.toggleMenu = toggleMenu;
document.querySelectorAll(".nav-links a").forEach((l) =>
    l.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("open");
        document.getElementById("hamburger").classList.remove("active");
    })
);

/* ══════════════════════════════════════
   10. SCROLL REVEAL + STAGGER
   ══════════════════════════════════════ */
const revealObs = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObs.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
);

document
    .querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale")
    .forEach((el) => revealObs.observe(el));

// Add stagger to grid children
document
    .querySelectorAll(".services-grid, .portfolio-grid, .testimonials-wrapper")
    .forEach((grid) => {
        grid.querySelectorAll(".reveal, .tilt-card").forEach((child, i) => {
            child.classList.add(`stagger-${Math.min(i + 1, 5)}`);
        });
    });

/* ══════════════════════════════════════
   11. SKILL BARS
   ══════════════════════════════════════ */
const skillObs = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll(".skill-fill").forEach((bar, i) => {
                    setTimeout(() => {
                        bar.style.width = bar.dataset.width + "%";
                    }, i * 250);
                });
                skillObs.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.3 }
);
document.querySelectorAll(".skill-bars").forEach((el) => skillObs.observe(el));

/* ══════════════════════════════════════
   12. COUNTERS
   ══════════════════════════════════════ */
const counterObs = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll(".stat-number[data-count]").forEach((c) => {
                    const target = parseInt(c.dataset.count);
                    let current = 0;
                    const inc = target / 50;
                    const timer = setInterval(() => {
                        current += inc;
                        if (current >= target) {
                            c.textContent = target + "+";
                            clearInterval(timer);
                        } else c.textContent = Math.floor(current) + "+";
                    }, 30);
                });
                counterObs.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.5 }
);
document.querySelectorAll(".hero-stats").forEach((el) => counterObs.observe(el));

/* ══════════════════════════════════════
   13. TYPED EFFECT
   ══════════════════════════════════════ */
const typedEl = document.getElementById("typedRole");
if (typedEl) {
    const roles_pt = ["Designer Gráfico", "Brand Designer", "Visual Creator", "Creative Designer"];
    const roles_en = ["Graphic Designer", "Brand Designer", "Visual Creator", "Creative Designer"];
    let roleIndex = 0,
        charIndex = 0,
        deleting = false,
        pause = 0;

    function typeEffect() {
        const lang = document.documentElement.dataset.lang || "pt";
        const roles = lang === "en" ? roles_en : roles_pt;
        const current = roles[roleIndex];

        if (pause > 0) {
            pause--;
            requestAnimationFrame(typeEffect);
            return;
        }

        if (!deleting) {
            typedEl.textContent = current.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === current.length) {
                deleting = true;
                pause = 120;
            }
        } else {
            typedEl.textContent = current.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                pause = 20;
            }
        }
        setTimeout(() => requestAnimationFrame(typeEffect), deleting ? 30 : 70);
    }
    setTimeout(typeEffect, 1200);
}

/* ══════════════════════════════════════
   14. PORTFOLIO FILTER
   ══════════════════════════════════════ */
function filterProjects(cat, btn) {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    document.querySelectorAll(".project-card").forEach((card, i) => {
        const show = cat === "all" || card.dataset.category === cat;
        if (show) {
            card.style.display = "block";
            setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "";
            }, i * 60);
        } else {
            card.style.opacity = "0";
            card.style.transform = "translateY(20px) scale(0.95)";
            setTimeout(() => (card.style.display = "none"), 350);
        }
    });
}
window.filterProjects = filterProjects;

/* ══════════════════════════════════════
   15. MODAL (com navegação entre projetos)
   ══════════════════════════════════════ */
const modalOverlay = document.getElementById("projectModalOverlay");
const modalImage = document.getElementById("modalImage");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTags = document.getElementById("modalTags");
const modalCounter = document.getElementById("modalCounter");

function getVisibleProjects() {
    return Array.from(document.querySelectorAll(".project-card")).filter(
        (c) => c.style.display !== "none"
    );
}

function openModal(projectId) {
    const project = projectsData.find((p) => p.id === projectId);
    if (!project) return;

    const visible = getVisibleProjects();
    currentModalIndex = visible.findIndex((c) => parseInt(c.dataset.projectId) === projectId);

    fillModal(project);
    if (modalCounter) modalCounter.textContent = `${currentModalIndex + 1} / ${visible.length}`;
    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function fillModal(project) {
    const lang = document.documentElement.dataset.lang || "pt";
    const imgTag = document.getElementById("modalImgTag");
    if (imgTag) imgTag.src = project.image;
    modalCategory.textContent =
        lang === "en" ? project.category_label_en : project.category_label_pt;
    modalTitle.textContent = lang === "en" ? project.title_en : project.title_pt;
    modalDescription.textContent = lang === "en" ? project.description_en : project.description_pt;
    modalTags.innerHTML = "";
    project.tags.forEach((tag) => {
        const span = document.createElement("span");
        span.className = "modal-tag";
        span.textContent = tag;
        modalTags.appendChild(span);
    });
}

function navigateModal(dir) {
    const visible = getVisibleProjects();
    currentModalIndex = (currentModalIndex + dir + visible.length) % visible.length;
    const id = parseInt(visible[currentModalIndex].dataset.projectId);
    const project = projectsData.find((p) => p.id === id);
    if (project) {
        fillModal(project);
        if (modalCounter) modalCounter.textContent = `${currentModalIndex + 1} / ${visible.length}`;
    }
}

window.navigateModal = navigateModal;

document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => openModal(parseInt(card.dataset.projectId)));
});

function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
}
window.closeModal = closeModal;
modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
    if (!modalOverlay.classList.contains("active")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") navigateModal(-1);
    if (e.key === "ArrowRight") navigateModal(1);
});

/* ══════════════════════════════════════
   16. FORM (ENVIAR PARA WHATSAPP)
   ══════════════════════════════════════ */
function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector('[name="name"]').value;
    const phone = form.querySelector('[name="phone"]').value;
    const subject = form.querySelector('[name="_subject"]').value;
    const message = form.querySelector('[name="message"]').value;

    const lang = document.documentElement.dataset.lang || "pt";
    let text = "";

    if (lang === "en") {
        text = `Hello Dário, my name is *${name}*.\n`;
        if (subject) text += `\n*Subject:* ${subject}\n`;
        text += `\n*Message:*\n${message}\n\n*My phone number:* ${phone}`;
    } else {
        text = `Olá Dário, o meu nome é *${name}*.\n`;
        if (subject) text += `\n*Assunto:* ${subject}\n`;
        text += `\n*Mensagem:*\n${message}\n\n*O meu número:* ${phone}`;
    }

    const encodedText = encodeURIComponent(text);
    const whatsappNumber = "244928427761";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
    form.reset();
}
window.handleSubmit = handleSubmit;

/* ══════════════════════════════════════
   17. LANGUAGE TOGGLE
   ══════════════════════════════════════ */
function setLang(lang) {
    document.documentElement.dataset.lang = lang;
    document.documentElement.lang = lang;
    document
        .querySelectorAll(".lang-btn")
        .forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
    document
        .querySelectorAll(`[data-${lang}]`)
        .forEach((el) => (el.textContent = el.getAttribute(`data-${lang}`)));
    document
        .querySelectorAll(`[data-${lang}-placeholder]`)
        .forEach((el) => (el.placeholder = el.getAttribute(`data-${lang}-placeholder`)));
}
window.setLang = setLang;
setLang("pt");

/* ══════════════════════════════════════
   18. ACTIVE NAV
   ══════════════════════════════════════ */
const sects = document.querySelectorAll("section[id]");
window.addEventListener(
    "scroll",
    () => {
        let cur = "";
        sects.forEach((s) => {
            if (scrollY >= s.offsetTop - 120) cur = s.id;
        });
        document
            .querySelectorAll(".nav-links a")
            .forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
    },
    { passive: true }
);

/* ══════════════════════════════════════
   19. PARALLAX HERO SHAPES
   ══════════════════════════════════════ */
if (!isMobile) {
    let parallaxFrame;
    document.addEventListener("mousemove", (e) => {
        if (parallaxFrame) cancelAnimationFrame(parallaxFrame);
        parallaxFrame = requestAnimationFrame(() => {
            const mx = (e.clientX / W - 0.5) * 2;
            const my = (e.clientY / H - 0.5) * 2;
            document.querySelectorAll(".h-shape").forEach((s, i) => {
                const speed = (i + 1) * 6;
                s.style.transform = `translate(${mx * speed}px, ${my * speed}px)`;
            });
        });
    });
}
