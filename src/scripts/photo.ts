/**
 * Photo component interaction logic
 * Handles click/touch and hold interactions for photo image switching
 */

function initPhotoInteraction(): void {
  const container = document.querySelector<HTMLElement>("[data-photo-container]");
  const textContainer = document.querySelector<HTMLElement>("[data-photo-text]");
  
  if (!container) return;

  const showAlt = (): void => {
    container.classList.add("show-alt");
    container.classList.remove("pressed"); // Scale back to 1x in time with image transition
    if (textContainer) textContainer.classList.add("show-alt");
  };

  const hideAlt = (): void => {
    container.classList.remove("show-alt");
    if (textContainer) textContainer.classList.remove("show-alt");
  };

  let holdTimeout: ReturnType<typeof setTimeout> | null = null;

  // Click/touch and hold with delay
  container.addEventListener("pointerdown", () => {
    container.classList.add("pressed"); // Scale to 0.95x immediately
    holdTimeout = setTimeout(() => {
      showAlt();
      holdTimeout = null;
    }, 300); // 0.3 second delay
  });

  container.addEventListener("pointerup", () => {
    container.classList.remove("pressed"); // Scale back to 1x
    if (holdTimeout) {
      clearTimeout(holdTimeout);
      holdTimeout = null;
    } else {
      hideAlt();
    }
  });

  container.addEventListener("pointercancel", () => {
    container.classList.remove("pressed"); // Scale back to 1x
    if (holdTimeout) {
      clearTimeout(holdTimeout);
      holdTimeout = null;
    } else {
      hideAlt();
    }
  });

  // Prevent native context menu on long press (mobile)
  container.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    return false;
  });

  // Prevent text selection on mobile during hold
  container.addEventListener("selectstart", (e) => {
    e.preventDefault();
    return false;
  });
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPhotoInteraction);
} else {
  initPhotoInteraction();
}
