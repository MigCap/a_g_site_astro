function runNav() {
  const navBarContainer = document.getElementById("nav-bar_container")!;
  let lastScrollTop = 0;
  const isHomePage = true;

  if (!navBarContainer) {
    console.error(`Navbar elements not found.`);
    return;
  }

  function addListeners() {
    if (isHomePage || !navBarContainer) return;

    window.addEventListener("DOMContentLoaded", () => handleScroll());
    document.addEventListener("astro:after-swap", () => handleScroll());
  }

  function handleScroll(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop !== 0) {
      addBoxShadow();
    }
    if (scrollTop === 0) {
      removeBoxShadow();
    }

    if (scrollTop > lastScrollTop) {
      removeBoxShadow();
      hideNavBar();
    } else {
      showNavBar();
    }

    lastScrollTop = scrollTop;
  }

  function showNavBar(): void {
    if (!navBarContainer) return;
    navBarContainer.classList.remove("hidden");
    navBarContainer.classList.add("active");
  }
  function hideNavBar(): void {
    if (!navBarContainer) return;
    navBarContainer.classList.remove("active");
    navBarContainer.classList.add("hidden");
  }

  function addBoxShadow(): void {
    if (!navBarContainer) return;
    navBarContainer.classList.add("box-shadow");
  }
  function removeBoxShadow(): void {
    if (!navBarContainer) return;
    navBarContainer.classList.remove("box-shadow");
  }

  window.addEventListener("scroll", () => handleScroll());

  addListeners();
}

runNav();
