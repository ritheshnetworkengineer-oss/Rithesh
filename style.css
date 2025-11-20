/* ===================================
   CSS Variables & Design Tokens
   =================================== */
:root {
    /* Colors - Modern Cybersecurity Theme */
    --primary-hue: 210;
    --accent-hue: 280;

    --color-primary: hsl(var(--primary-hue), 100%, 60%);
    --color-primary-dark: hsl(var(--primary-hue), 100%, 50%);
    --color-primary-light: hsl(var(--primary-hue), 100%, 70%);

    --color-accent: hsl(var(--accent-hue), 100%, 65%);
    --color-accent-dark: hsl(var(--accent-hue), 100%, 55%);

    --color-bg: hsl(220, 20%, 8%);
    --color-bg-secondary: hsl(220, 18%, 12%);
    --color-bg-tertiary: hsl(220, 16%, 16%);

    --color-text: hsl(0, 0%, 95%);
    --color-text-secondary: hsl(0, 0%, 70%);
    --color-text-muted: hsl(0, 0%, 50%);

    --color-border: hsl(220, 15%, 20%);
    --color-border-light: hsl(220, 15%, 25%);

    /* Gradients */
    --gradient-primary: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    --gradient-secondary: linear-gradient(135deg, hsl(var(--primary-hue), 100%, 60%), hsl(var(--primary-hue), 100%, 40%));
    --gradient-accent: linear-gradient(135deg, var(--color-accent), hsl(var(--accent-hue), 100%, 75%));
    --gradient-dark: linear-gradient(180deg, var(--color-bg), var(--color-bg-secondary));

    /* Shadows */
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
    --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4);
    --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.5);
    --shadow-glow: 0 0 20px rgba(59, 130, 246, 0.3);
    --shadow-glow-accent: 0 0 20px rgba(168, 85, 247, 0.3);

    /* Typography */
    --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-display: 'Outfit', var(--font-primary);

    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;
    --font-size-4xl: 2.25rem;
    --font-size-5xl: 3rem;
    --font-size-6xl: 3.75rem;

    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 0.75rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
    --spacing-3xl: 4rem;
    --spacing-4xl: 6rem;

    /* Border Radius */
    --radius-sm: 0.375rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-xl: 1rem;
    --radius-2xl: 1.5rem;
    --radius-full: 9999px;

    /* Transitions */
    --transition-fast: 150ms ease;
    --transition-base: 250ms ease;
    --transition-slow: 350ms ease;

    /* Z-index */
    --z-dropdown: 1000;
    --z-sticky: 1020;
    --z-fixed: 1030;
    --z-modal: 1040;
    --z-popover: 1050;
    --z-tooltip: 1060;
}

/* ===================================
   Reset & Base Styles
   =================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    overflow-x: hidden;
}

body {
    font-family: var(--font-primary);
    font-size: var(--font-size-base);
    line-height: 1.6;
    color: var(--color-text);
    background: var(--color-bg);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

::selection {
    background: var(--color-primary);
    color: white;
}

/* ===================================
   Utility Classes
   =================================== */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-xl);
}

.gradient-text {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.accent {
    color: var(--color-accent);
}

/* ===================================
   Navigation
   =================================== */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: var(--z-fixed);
    background: rgba(17, 24, 39, 0.8);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--color-border);
    transition: all var(--transition-base);
}

.navbar.scrolled {
    background: rgba(17, 24, 39, 0.95);
    box-shadow: var(--shadow-md);
}

.nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
}

.logo-text {
    font-family: var(--font-display);
    font-size: var(--font-size-2xl);
    font-weight: 800;
    color: var(--color-text);
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: var(--spacing-xl);
}

.nav-link {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-weight: 500;
    font-size: var(--font-size-sm);
    transition: color var(--transition-base);
    position: relative;
    padding: var(--spacing-xs) 0;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-primary);
    transition: width var(--transition-base);
}

.nav-link:hover,
.nav-link.active {
    color: var(--color-primary);
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

.hamburger {
    display: none;
    flex-direction: column;
    gap: 6px;
    cursor: pointer;
    z-index: 1001;
}

.hamburger span {
    width: 25px;
    height: 2px;
    background: var(--color-text);
    transition: all var(--transition-base);
}

.hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(8px, 8px);
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
}

.hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
}

/* ===================================
   Hero Section
   =================================== */
.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 80px;
    overflow: hidden;
}

.hero-background {
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
}

.gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.3;
    animation: float 20s ease-in-out infinite;
}

.orb-1 {
    width: 500px;
    height: 500px;
    background: var(--gradient-primary);
    top: -200px;
    right: -200px;
    animation-delay: 0s;
}

.orb-2 {
    width: 400px;
    height: 400px;
    background: var(--gradient-accent);
    bottom: -150px;
    left: -150px;
    animation-delay: 5s;
}

.orb-3 {
    width: 350px;
    height: 350px;
    background: var(--gradient-secondary);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: 10s;
}

@keyframes float {

    0%,
    100% {
        transform: translate(0, 0) scale(1);
    }

    33% {
        transform: translate(30px, -30px) scale(1.1);
    }

    66% {
        transform: translate(-30px, 30px) scale(0.9);
    }
}

.hero-container {
    position: relative;
    z-index: 1;
}

.hero-content {
    max-width: 800px;
    text-align: center;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm) var(--spacing-lg);
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.3);
    border-radius: var(--radius-full);
    font-size: var(--font-size-sm);
    color: var(--color-primary-light);
    margin-bottom: var(--spacing-xl);
    animation: fadeInUp 0.6s ease 0.2s both;
}

.badge-dot {
    width: 8px;
    height: 8px;
    background: var(--color-primary);
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: 0.5;
        transform: scale(1.2);
    }
}

.hero-title {
    font-family: var(--font-display);
    font-size: clamp(var(--font-size-4xl), 8vw, var(--font-size-6xl));
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: var(--spacing-md);
    animation: fadeInUp 0.6s ease 0.4s both;
}

.hero-subtitle {
    font-size: clamp(var(--font-size-xl), 3vw, var(--font-size-3xl));
    font-weight: 600;
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-lg);
    animation: fadeInUp 0.6s ease 0.6s both;
}

.hero-description {
    font-size: var(--font-size-lg);
    color: var(--color-text-secondary);
    max-width: 600px;
    margin: 0 auto var(--spacing-2xl);
    line-height: 1.8;
    animation: fadeInUp 0.6s ease 0.8s both;
}

.hero-buttons {
    display: flex;
    gap: var(--spacing-lg);
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: var(--spacing-3xl);
    animation: fadeInUp 0.6s ease 1s both;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-md) var(--spacing-xl);
    border-radius: var(--radius-lg);
    font-weight: 600;
    font-size: var(--font-size-base);
    text-decoration: none;
    transition: all var(--transition-base);
    cursor: pointer;
    border: none;
    font-family: var(--font-primary);
}

.btn-primary {
    background: var(--gradient-primary);
    color: white;
    box-shadow: var(--shadow-glow);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.05);
    color: var(--color-text);
    border: 1px solid var(--color-border-light);
    backdrop-filter: blur(10px);
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--color-primary);
    transform: translateY(-2px);
}

.btn-full {
    width: 100%;
    justify-content: center;
}

.hero-stats {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-2xl);
    flex-wrap: wrap;
    animation: fadeInUp 0.6s ease 1.2s both;
}

.stat-item {
    text-align: center;
}

.stat-number {
    font-family: var(--font-display);
    font-size: var(--font-size-3xl);
    font-weight: 800;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.stat-label {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    margin-top: var(--spacing-xs);
}

.stat-divider {
    width: 1px;
    height: 40px;
    background: var(--color-border);
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.scroll-indicator {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    animation: fadeInUp 0.6s ease 1.4s both;
}

.mouse {
    width: 24px;
    height: 40px;
    border: 2px solid var(--color-border-light);
    border-radius: 12px;
    position: relative;
}

.wheel {
    width: 4px;
    height: 8px;
    background: var(--color-primary);
    border-radius: 2px;
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    animation: scroll 2s ease-in-out infinite;
}

@keyframes scroll {

    0%,
    100% {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }

    50% {
        opacity: 0.5;
        transform: translateX(-50%) translateY(12px);
    }
}

/* ===================================
   Section Styles
   =================================== */
section {
    padding: var(--spacing-4xl) 0;
    position: relative;
}

.section-header {
    text-align: center;
    margin-bottom: var(--spacing-3xl);
}

.section-tag {
    display: inline-block;
    padding: var(--spacing-xs) var(--spacing-lg);
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.3);
    border-radius: var(--radius-full);
    font-size: var(--font-size-sm);
    font-weight: 600;
    color: var(--color-primary-light);
    margin-bottom: var(--spacing-lg);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.section-title {
    font-family: var(--font-display);
    font-size: clamp(var(--font-size-3xl), 5vw, var(--font-size-5xl));
    font-weight: 800;
    margin-bottom: var(--spacing-lg);
}

/* ===================================
   About Section
   =================================== */
.about {
    background: var(--gradient-dark);
}

.about-content {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: var(--spacing-3xl);
    align-items: start;
}

.about-description {
    font-size: var(--font-size-lg);
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-lg);
    line-height: 1.8;
}

.about-highlights {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
    margin-top: var(--spacing-2xl);
}

.highlight-item {
    display: flex;
    gap: var(--spacing-lg);
    padding: var(--spacing-lg);
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    transition: all var(--transition-base);
}

.highlight-item:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--color-primary);
    transform: translateX(8px);
}

.highlight-icon {
    font-size: var(--font-size-3xl);
    line-height: 1;
}

.highlight-content h4 {
    font-size: var(--font-size-lg);
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
}

.highlight-content p {
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
}

.info-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    padding: var(--spacing-xl);
    margin-bottom: var(--spacing-lg);
    transition: all var(--transition-base);
}

.info-card:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--color-primary);
    transform: translateY(-4px);
    box-shadow: var(--shadow-glow);
}

.info-card h3 {
    font-size: var(--font-size-xl);
    font-weight: 700;
    margin-bottom: var(--spacing-lg);
    color: var(--color-primary-light);
}

.info-item {
    font-size: var(--font-size-base);
    line-height: 1.8;
}

.info-item strong {
    color: var(--color-text);
    font-weight: 600;
}

.info-item p {
    color: var(--color-text-secondary);
    margin: var(--spacing-xs) 0;
}

.social-links {
    display: flex;
    gap: var(--spacing-md);
    margin-top: var(--spacing-lg);
}

.social-link {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    color: var(--color-text-secondary);
    transition: all var(--transition-base);
}

.social-link:hover {
    background: var(--gradient-primary);
    border-color: transparent;
    color: white;
    transform: translateY(-4px);
    box-shadow: var(--shadow-glow);
}

/* ===================================
   Skills Section
   =================================== */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-xl);
}

.skill-category {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    padding: var(--spacing-xl);
    transition: all var(--transition-base);
    position: relative;
    overflow: hidden;
}

.skill-category::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--gradient-primary);
    transform: scaleX(0);
    transition: transform var(--transition-base);
}

.skill-category:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--color-primary);
    transform: translateY(-8px);
    box-shadow: var(--shadow-glow);
}

.skill-category:hover::before {
    transform: scaleX(1);
}

.category-icon {
    font-size: var(--font-size-4xl);
    margin-bottom: var(--spacing-lg);
    display: inline-block;
    animation: bounce 2s ease-in-out infinite;
}

.skill-category:hover .category-icon {
    animation: none;
    transform: scale(1.1);
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.skill-category h3 {
    font-size: var(--font-size-xl);
    font-weight: 700;
    margin-bottom: var(--spacing-lg);
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
}

.skill-tag {
    padding: var(--spacing-xs) var(--spacing-md);
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.3);
    border-radius: var(--radius-md);
    font-size: var(--font-size-sm);
    color: var(--color-primary-light);
    transition: all var(--transition-base);
}

.skill-tag:hover {
    background: var(--gradient-primary);
    border-color: transparent;
    color: white;
    transform: translateY(-2px);
}

/* ===================================
   Projects Section
   =================================== */
.projects {
    background: var(--gradient-dark);
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: var(--spacing-xl);
    margin-bottom: var(--spacing-3xl);
}

.project-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    padding: var(--spacing-xl);
    transition: all var(--transition-base);
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
}

.project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-primary);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--transition-base);
}

.project-card:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--color-primary);
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
}

.project-card:hover::before {
    transform: scaleX(1);
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-lg);
}

.project-icon {
    font-size: var(--font-size-3xl);
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(59, 130, 246, 0.1);
    border-radius: var(--radius-lg);
    transition: all var(--transition-base);
}

.project-card:hover .project-icon {
    background: var(--gradient-primary);
    transform: rotate(10deg) scale(1.1);
}

.project-duration {
    padding: var(--spacing-xs) var(--spacing-md);
    background: rgba(168, 85, 247, 0.1);
    border: 1px solid rgba(168, 85, 247, 0.3);
    border-radius: var(--radius-full);
    font-size: var(--font-size-xs);
    color: var(--color-accent);
    font-weight: 600;
}

.project-title {
    font-size: var(--font-size-xl);
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
    line-height: 1.3;
}

.project-client {
    font-size: var(--font-size-sm);
    color: var(--color-primary-light);
    font-weight: 600;
    margin-bottom: var(--spacing-md);
}

.project-description {
    color: var(--color-text-secondary);
    line-height: 1.7;
    margin-bottom: var(--spacing-lg);
    flex-grow: 1;
}

.project-impact {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-lg);
}

.impact-badge {
    padding: var(--spacing-xs) var(--spacing-md);
    background: rgba(34, 197, 94, 0.1);
    border: 1px solid rgba(34, 197, 94, 0.3);
    border-radius: var(--radius-full);
    font-size: var(--font-size-xs);
    color: hsl(142, 76%, 56%);
    font-weight: 600;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-lg);
}

.tech-tag {
    padding: var(--spacing-xs) var(--spacing-md);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    font-size: var(--font-size-xs);
    color: var(--color-text-secondary);
    transition: all var(--transition-base);
}

.tech-tag:hover {
    background: rgba(59, 130, 246, 0.1);
    border-color: var(--color-primary);
    color: var(--color-primary-light);
}

.project-footer {
    padding-top: var(--spacing-md);
    border-top: 1px solid var(--color-border);
}

.project-link {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-xs);
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 600;
    font-size: var(--font-size-sm);
    transition: all var(--transition-base);
}

.project-link:hover {
    gap: var(--spacing-sm);
    color: var(--color-primary-light);
}

.additional-projects {
    margin-top: var(--spacing-4xl);
}

.additional-title {
    font-size: var(--font-size-2xl);
    font-weight: 700;
    text-align: center;
    margin-bottom: var(--spacing-2xl);
}

.additional-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-lg);
}

.additional-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-lg);
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    transition: all var(--transition-base);
}

.additional-item:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--color-primary);
    transform: translateX(8px);
}

.additional-icon {
    font-size: var(--font-size-2xl);
    flex-shrink: 0;
}

.additional-item p {
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
    line-height: 1.6;
}

/* ===================================
   Experience Section
   =================================== */
.timeline {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--gradient-primary);
}

.timeline-item {
    position: relative;
    padding-left: var(--spacing-3xl);
    padding-bottom: var(--spacing-3xl);
}

.timeline-marker {
    position: absolute;
    left: -8px;
    top: 0;
    width: 18px;
    height: 18px;
    background: var(--gradient-primary);
    border: 3px solid var(--color-bg);
    border-radius: 50%;
    box-shadow: var(--shadow-glow);
}

.timeline-content {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    padding: var(--spacing-xl);
    transition: all var(--transition-base);
}

.timeline-content:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--color-primary);
    transform: translateY(-4px);
    box-shadow: var(--shadow-glow);
}

.timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: var(--spacing-md);
    flex-wrap: wrap;
    gap: var(--spacing-md);
}

.timeline-header h3 {
    font-size: var(--font-size-xl);
    font-weight: 700;
}

.timeline-duration {
    padding: var(--spacing-xs) var(--spacing-md);
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.3);
    border-radius: var(--radius-full);
    font-size: var(--font-size-xs);
    color: var(--color-primary-light);
    font-weight: 600;
}

.timeline-company {
    font-size: var(--font-size-lg);
    color: var(--color-primary);
    font-weight: 600;
    margin-bottom: var(--spacing-lg);
}

.timeline-responsibilities {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
}

.timeline-responsibilities li {
    position: relative;
    padding-left: var(--spacing-xl);
    color: var(--color-text-secondary);
    line-height: 1.7;
}

.timeline-responsibilities li::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--color-primary);
    font-size: var(--font-size-lg);
}

/* ===================================
   Certifications Section
   =================================== */
.certifications {
    background: var(--gradient-dark);
}

.cert-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-xl);
}

.cert-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    padding: var(--spacing-xl);
    text-align: center;
    transition: all var(--transition-base);
    position: relative;
    overflow: hidden;
}

.cert-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--gradient-primary);
    transform: scaleX(0);
    transition: transform var(--transition-base);
}

.cert-card:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--color-primary);
    transform: translateY(-8px);
    box-shadow: var(--shadow-glow);
}

.cert-card:hover::before {
    transform: scaleX(1);
}

.cert-card.featured {
    background: rgba(59, 130, 246, 0.05);
    border-color: var(--color-primary);
}

.cert-card.highlight {
    background: rgba(168, 85, 247, 0.05);
    border-color: var(--color-accent);
}

.cert-badge {
    font-size: var(--font-size-4xl);
    margin-bottom: var(--spacing-lg);
    display: inline-block;
    transition: transform var(--transition-base);
}

.cert-card:hover .cert-badge {
    transform: scale(1.2) rotate(10deg);
}

.cert-card h3 {
    font-size: var(--font-size-lg);
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
}

.cert-score {
    font-size: var(--font-size-xl);
    font-weight: 800;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: var(--spacing-xs);
}

.cert-description {
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
}

/* ===================================
   Contact Section
   =================================== */
.contact-content {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: var(--spacing-3xl);
    align-items: start;
}

.contact-intro {
    font-size: var(--font-size-lg);
    color: var(--color-text-secondary);
    line-height: 1.8;
    margin-bottom: var(--spacing-2xl);
}

.contact-methods {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-2xl);
}

.contact-method {
    display: flex;
    gap: var(--spacing-lg);
    padding: var(--spacing-lg);
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    transition: all var(--transition-base);
    text-decoration: none;
    color: inherit;
}

.contact-method:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--color-primary);
    transform: translateX(8px);
}

.method-icon {
    font-size: var(--font-size-3xl);
    flex-shrink: 0;
}

.method-content h4 {
    font-size: var(--font-size-lg);
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
}

.method-content p {
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
}

.contact-social {
    display: flex;
    gap: var(--spacing-md);
}

.social-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-md);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    color: var(--color-text);
    text-decoration: none;
    font-weight: 600;
    transition: all var(--transition-base);
}

.social-btn:hover {
    background: var(--gradient-primary);
    border-color: transparent;
    color: white;
    transform: translateY(-4px);
    box-shadow: var(--shadow-glow);
}

.contact-form-container {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    padding: var(--spacing-2xl);
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
}

.form-group label {
    font-weight: 600;
    font-size: var(--font-size-sm);
    color: var(--color-text);
}

.form-group input,
.form-group textarea {
    padding: var(--spacing-md);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    color: var(--color-text);
    font-family: var(--font-primary);
    font-size: var(--font-size-base);
    transition: all var(--transition-base);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--color-primary);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: var(--shadow-glow);
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

/* ===================================
   Footer
   =================================== */
.footer {
    background: var(--color-bg-secondary);
    border-top: 1px solid var(--color-border);
    padding: var(--spacing-3xl) 0 var(--spacing-xl);
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-2xl);
    flex-wrap: wrap;
    gap: var(--spacing-xl);
}

.footer-brand p {
    color: var(--color-text-secondary);
    margin-top: var(--spacing-sm);
}

.footer-links {
    display: flex;
    gap: var(--spacing-xl);
    flex-wrap: wrap;
}

.footer-links a {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-size: var(--font-size-sm);
    transition: color var(--transition-base);
}

.footer-links a:hover {
    color: var(--color-primary);
}

.footer-bottom {
    text-align: center;
    padding-top: var(--spacing-xl);
    border-top: 1px solid var(--color-border);
}

.footer-bottom p {
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
    margin: var(--spacing-xs) 0;
}

.footer-declaration {
    font-style: italic;
}

/* ===================================
   Scroll to Top Button
   =================================== */
.scroll-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--gradient-primary);
    border: none;
    border-radius: var(--radius-md);
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-base);
    z-index: var(--z-fixed);
    box-shadow: var(--shadow-glow);
}

.scroll-top.visible {
    opacity: 1;
    visibility: visible;
}

.scroll-top:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
}

/* ===================================
   Responsive Design
   =================================== */
@media (max-width: 968px) {

    .about-content,
    .contact-content {
        grid-template-columns: 1fr;
    }

    .timeline::before {
        left: 8px;
    }

    .timeline-item {
        padding-left: var(--spacing-2xl);
    }
}

@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        top: 80px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 80px);
        background: rgba(17, 24, 39, 0.98);
        backdrop-filter: blur(12px);
        flex-direction: column;
        padding: var(--spacing-2xl);
        gap: var(--spacing-lg);
        transition: left var(--transition-slow);
        border-top: 1px solid var(--color-border);
    }

    .nav-menu.active {
        left: 0;
    }

    .hamburger {
        display: flex;
    }

    .hero-stats {
        gap: var(--spacing-lg);
    }

    .stat-divider {
        display: none;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }

    .skills-grid,
    .cert-grid,
    .additional-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 var(--spacing-lg);
    }

    section {
        padding: var(--spacing-3xl) 0;
    }

    .hero-buttons {
        flex-direction: column;
        width: 100%;
    }

    .btn {
        width: 100%;
        justify-content: center;
    }

    .footer-content {
        flex-direction: column;
        text-align: center;
    }

    .footer-links {
        justify-content: center;
    }
}
