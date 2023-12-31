function verifySectionId(id) {
  return id.startsWith('#') ? id.slice(1) : id;
}

function isElementInViewport(el) {
  // from - https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
  // Special bonus for those using jQuery
  if (typeof jQuery === 'function' && el instanceof jQuery) {
    el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /* or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /* or $(window).width() */
  );
}

function highlightSection(sectionId = '#') {
  const id = verifySectionId(sectionId);
  const section = document.getElementById(id);

  if (isElementInViewport(section)) {
    section.classList.add('click-highlight');
    setTimeout(function () {
      section.classList.remove('click-highlight');
    }, 2500);
  }
}

function addClassOnScroll(element, className, scrollThreshold) {
  const pageScrollTop =
    window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;

  if (
    pageScrollTop > scrollThreshold &&
    !element.classList.contains(className)
  ) {
    element.classList.add(className);
  } else if (
    pageScrollTop < scrollThreshold &&
    element.classList.contains(className)
  ) {
    element.classList.remove(className);
  }
}

// Smooth scrolling on nav click
ScrollOut({
  once: true,
  threshold: 0.33,
});
var scroll = new SmoothScroll('a[href*="#"]');

// Add shadow scroll listener
document.addEventListener('scroll', () => {
  const header = document.getElementById('nav-container');
  addClassOnScroll(header, 'shadow', 20);
});
