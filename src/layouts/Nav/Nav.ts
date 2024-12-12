export class NavBar extends HTMLElement {
  private lastScrollTop: number;
  private navBar: HTMLElement | null;
  private navBarContainer: HTMLElement | null;
  private isHomePage: boolean;

  constructor() {
    super();

    this.navBar = document.getElementById("nav-bar")!;
    this.navBarContainer = document.getElementById("nav-bar_container")!;
    this.lastScrollTop = 0;
    this.isHomePage = true;

    if (!this.navBar || !this.navBarContainer) {
      console.error(`Navbar elements not found.`);
      return;
    }

    window.addEventListener("scroll", this.handleScroll.bind(this));
    this.addListeners();
  }

  addListeners() {
    if (this.isHomePage || !this.navBar || !this.navBarContainer) return;
    window.addEventListener("DOMContentLoaded", () => this.handleScroll());
    document.addEventListener("astro:after-swap", () => this.handleScroll());
  }

  private handleScroll(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop !== 0) {
      this.addBoxShadow();
    }
    if (scrollTop === 0) {
      this.removeBoxShadow();
    }
    if (scrollTop > this.lastScrollTop) {
      this.removeBoxShadow();
      this.hideNavBar();
    } else {
      this.showNavBar();
    }
    this.lastScrollTop = scrollTop;
  }

  private showNavBar(): void {
    if (!this.navBar || !this.navBarContainer) return;
    this.navBarContainer.classList.remove("hidden");
    this.navBarContainer.classList.add("active");
  }
  private hideNavBar(): void {
    if (!this.navBar || !this.navBarContainer) return;
    this.navBarContainer.classList.remove("active");
    this.navBarContainer.classList.add("hidden");
  }

  private addBoxShadow(): void {
    if (!this.navBarContainer) return;
    this.navBarContainer.classList.add("box-shadow");
  }
  private removeBoxShadow(): void {
    if (!this.navBarContainer) return;
    this.navBarContainer.classList.remove("box-shadow");
  }
}

customElements.define("nav-bar", NavBar);
