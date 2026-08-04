document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Letter Reveal Animation for "LAUNCHING SOON" ---
    const launchingText = document.getElementById("launching-text");
    const textContent = launchingText.innerText.trim();
    launchingText.innerHTML = ""; // Clear plain text

    const baseDelay = 0.9; 

    // Break string into span tags and apply staggered delays
    textContent.split("").forEach((char, index) => {
        const span = document.createElement("span");
        
        // Hide individual animated spans from screen readers to preserve SEO accessibility
        span.setAttribute('aria-hidden', 'true');

        if (char === " ") {
            span.className = "char-space";
            span.innerHTML = "&nbsp;";
        } else {
            span.className = "char-reveal";
            span.innerText = char;
            span.style.animationDelay = `${baseDelay + (index * 0.06)}s`;
        }
        launchingText.appendChild(span);
    });

    // --- 2. Mouse Parallax Effect ---
    const parallaxContainer = document.getElementById("parallax-container");
    
    // Track mouse movement to shift the main UI container slightly
    window.addEventListener("mousemove", (e) => {
        const { innerWidth, innerHeight } = window;
        
        const xAxis = (e.clientX / innerWidth) - 0.5;
        const yAxis = (e.clientY / innerHeight) - 0.5;

        const moveX = xAxis * -40; 
        const moveY = yAxis * -40;

        parallaxContainer.style.transform = `translate(${moveX}px, ${moveY}px)`;
        parallaxContainer.style.transition = `transform 0.2s cubic-bezier(0.2, 0, 0.2, 1)`;
    });

    // Reset parallax on mouse leave
    window.addEventListener("mouseout", () => {
        parallaxContainer.style.transform = `translate(0px, 0px)`;
    });
});