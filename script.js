// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000, // values from 0 to 3000, with step 50ms
    once: true, // whether animation should happen only once - while scrolling down
});

// Initialize Typed.js
var typed = new Typed('#typed-text', {
    strings: ["Network Engineer", "Cybersecurity Analyst", "Cloud Specialist"],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});

// Formspree form handling
var form = document.getElementById("contact-form");
async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit);

// Project Modal Logic
const projectDetails = {
    cms: {
        title: "Content Management System for Ucodice Technologies",
        description: "This project involved building a scalable, secure platform to manage content and media. Using AWS EC2 for hosting, RDS for metadata, and S3 for file storage, the system delivered optimized content globally with CloudFront. The project significantly improved system scalability, security, and user access control.",
        tech: "AWS EC2, RDS, S3, CloudFront, Elastic Load Balancer"
    },
    beanstalk: {
        title: "Web App Deployment with Elastic Beanstalk for DevCircle Solutions",
        description: "This project aimed to deploy and manage a web application using AWS Elastic Beanstalk, automating the scaling and monitoring of a Python Flask app. It utilized EC2 for compute resources, S3 for storage, and CloudWatch for health monitoring. The infrastructure was designed for high availability and efficiency, ensuring 90% uptime and minimized maintenance efforts.",
        tech: "AWS Elastic Beanstalk, EC2, S3, CloudWatch, CloudFront"
    },
    nikto: {
        title: "Nikto Web Server Scanning for Woodapple Residency",
        description: "This project involved scanning the web server of Woodapple Residency using Nikto to identify missing security headers, outdated software, and exposed sensitive files. Over 6,700 vulnerability checks were conducted, detecting risks like BREACH and exposed Git HEAD files. The team remediated these issues by upgrading the server version and enabling HTTPS.",
        tech: "Nikto, curl, Kali Linux"
    },
    gobuster: {
        title: "Gobuster Web Directory Attack for Amosta Solutions",
        description: "This project focused on performing directory brute-forcing on the production web server of Amosta Solutions using Gobuster. The goal was to uncover hidden paths, sensitive files, and potential entry points for attackers. Post-remediation scans showed an 89% reduction in attack surface.",
        tech: "Gobuster, Burp Suite, SecLists, Nginx, ModSecurity"
    },
    wireshark: {
        title: "Real-Time Network Traffic Monitoring for Neomen Designers",
        description: "This project aimed to capture and analyze network traffic in real-time across multiple VLANs using Wireshark. It focused on detecting anomalies like DNS exfiltration, ARP spoofing, and TCP retransmission spikes. As a result, latency was reduced by 63%, and incident detection and response became more efficient.",
        tech: "Wireshark, tcpdump, Suricata IDS"
    },
    nmap: {
        title: "Website Scanning Using Nmap for Jain Hospital",
        description: "This project involved conducting a thorough vulnerability assessment of the Jain Hospital website using advanced Nmap scanning techniques. The objective was to identify open ports, outdated services, and potential threats. The project achieved a 92% risk reduction after revalidation.",
        tech: "Nmap, Nmap Scripting Engine (NSE), Bash"
    }
};

const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalTech = document.getElementById('modal-tech');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.project-btn').forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.getAttribute('data-project');
        const details = projectDetails[projectId];
        
        modalTitle.textContent = details.title;
        modalDescription.textContent = details.description;
        modalTech.textContent = details.tech;
        
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
