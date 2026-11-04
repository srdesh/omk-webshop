const LOGO = "https://www.figma.com/api/mcp/asset/17bb51b3-29e0-4fcd-b506-472ea82906ce/29ab0.svg";

class OMKButton extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready === "true") return;
    this.dataset.ready = "true";
    const button = document.createElement("button");
    button.type = this.getAttribute("type") || "button";
    button.className = "btn " + (this.getAttribute("variant") || "primary");
    button.innerHTML = this.innerHTML;
    if (this.hasAttribute("disabled")) button.disabled = true;
    if (this.hasAttribute("aria-label")) button.setAttribute("aria-label", this.getAttribute("aria-label"));
    if (this.hasAttribute("aria-expanded")) button.setAttribute("aria-expanded", this.getAttribute("aria-expanded"));
    if (this.hasAttribute("data-action")) button.dataset.hostAction = this.getAttribute("data-action");
    this.innerHTML = "";
    this.appendChild(button);
  }
}
customElements.define("omk-button", OMKButton);

class OMKTopbar extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready === "true") return;
    this.dataset.ready = "true";
    const showBack = this.hasAttribute("show-back");
    const showLogin = this.getAttribute("show-login") !== "false";
    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML =
      '<div class="header-inner">' +
        '<div class="header-brand">' +
          (showBack ? '<button class="header-back" type="button" data-omk-action="back" aria-label="Go back"><iconsax-icon name="arrow-left" type="outline" size="20" color="currentColor" aria-hidden="true"></iconsax-icon></button>' : '') +
          '<a href="#" class="brand-link" data-omk-action="home" aria-label="Order Monkey home"><img src="' + LOGO + '" alt="Order Monkey"></a>' +
        '</div>' +
        '<nav class="header-actions" aria-label="Main navigation">' +
          '<button type="button" data-omk-action="reset"><iconsax-icon name="refresh" type="outline" size="18" color="currentColor" aria-hidden="true"></iconsax-icon><span>Start over</span></button>' +
          (showLogin ? '<span class="header-divider" aria-hidden="true"></span><button type="button" data-omk-action="login"><iconsax-icon name="login" type="outline" size="18" color="currentColor" aria-hidden="true"></iconsax-icon><span>Login</span></button>' : '') +
          '<span class="header-divider" aria-hidden="true"></span>' +
          '<button type="button" class="language-button" data-omk-action="language"><span class="flag" aria-hidden="true">🇬🇧</span><span>EN</span><span aria-hidden="true">⌄</span></button>' +
        '</nav>' +
      '</div>';
    this.appendChild(header);
    header.addEventListener("click", event => {
      const target = event.target.closest("[data-omk-action]");
      if (!target) return;
      event.preventDefault();
      this.dispatchEvent(new CustomEvent("omk:action", {
        bubbles: true, composed: true, detail: { action: target.dataset.omkAction }
      }));
    });
  }
}

customElements.define("omk-topbar", OMKTopbar);

class OMKProductCard extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready === "true") return;
    this.dataset.ready = "true";
    const name = this.getAttribute("name") || "Menu item";
    const price = this.getAttribute("price") || "";
    const image = this.getAttribute("image") || "";
    const category = this.getAttribute("category") || "Burger";
    const id = this.getAttribute("product-id") || "";
    this.innerHTML =
      '<article class="product-card">' +
        '<button type="button" class="product-image-button" data-open-product="' + id + '" aria-label="View ' + name.replace(/"/g, "&quot;") + '">' +
          '<img src="' + image + '" alt="" loading="lazy">' +
          '<span class="quick-add" aria-hidden="true"><iconsax-icon name="add" type="outline" size="20" color="currentColor"></iconsax-icon></span>' +
        '</button>' +
        '<div class="product-card-copy"><span class="product-category">' + category + '</span>' +
          '<h3>' + name + '</h3><p class="product-price">' + price + '</p></div>' +
      '</article>';
  }
}

customElements.define("omk-product-card", OMKProductCard);

export { OMKButton, OMKTopbar, OMKProductCard };
