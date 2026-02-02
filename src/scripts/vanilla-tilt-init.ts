/**
 * Initialize VanillaTilt for CV page
 * Sets up tilt effect on elements with data-tilt attribute
 */

function initVanillaTilt(): void {
  // Wait for VanillaTilt to be available
  if (typeof (window as any).VanillaTilt === "undefined") {
    // Retry if script hasn't loaded yet
    setTimeout(initVanillaTilt, 100);
    return;
  }

  const tiltElement = document.querySelector<HTMLElement>("#cv-container");
  if (!tiltElement) return;

  const VanillaTilt = (window as any).VanillaTilt;
  
  // Initialize VanillaTilt with the element's data attributes
  new VanillaTilt(tiltElement, {
    reverse: tiltElement.dataset.tiltReverse === "true",
    max: parseInt(tiltElement.dataset.tiltMax || "5", 10),
    speed: parseInt(tiltElement.dataset.tiltSpeed || "200", 10),
    fullPageListening: tiltElement.dataset.tiltFullPageListening === "true",
  });
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initVanillaTilt);
} else {
  initVanillaTilt();
}
