/* =========================================================
   DECORA INDUSTRIES — product-page.js  (product-details.html)
   Reads the ?id= query parameter, finds the product in
   window.DECORA_PRODUCTS, and renders the detail view.
   Shows a friendly error state for a missing/invalid id.
   Never throws on a bad id. Works via file:// too.
   ========================================================= */
(function () {
  "use strict";
  var root = document.querySelector("[data-product-detail]");
  if (!root) return;

  var products = window.DECORA_PRODUCTS || [];
  var id = getParam("id");
  var product = id ? products.filter(function (p) { return p.id === id; })[0] : null;

  if (!product) { renderError(); return; }
  document.title = product.name + " — Decora Industries";
  renderProduct(product);
  renderRelated(product);
  updateBreadcrumb(product);

  /* ---- Render the product ---- */
  function renderProduct(p) {
    var host = root.querySelector("[data-detail-body]");
    if (!host) return;
    var images = [p.image].concat(p.gallery || []).filter(Boolean);
    var ph = "assets/images/placeholders/product-placeholder.svg";

    var thumbs = images.map(function (src, i) {
      return '<button class="pdp__thumb' + (i === 0 ? " is-active" : "") + '" type="button" data-thumb="' + esc(src) + '" aria-label="View image ' + (i + 1) + '">' +
        '<img src="' + esc(src) + '" alt="" loading="lazy" decoding="async" data-placeholder="' + ph + '"></button>';
    }).join("");

    var features = (p.features || []).map(function (f) {
      return '<li>' + checkIcon() + '<span>' + esc(f) + '</span></li>';
    }).join("");

    var specRows = Object.keys(p.specifications || {}).map(function (k) {
      return '<tr><th scope="row">' + esc(k) + '</th><td>' + esc(p.specifications[k]) + '</td></tr>';
    }).join("");

    var configs = (p.configurations || []).map(function (c) { return '<span class="tag">' + esc(c) + '</span>'; }).join("");
    var inds = (p.industries || []).map(function (c) { return '<span class="tag">' + esc(c) + '</span>'; }).join("");

    host.innerHTML = '' +
      '<div class="pdp">' +
        '<div class="pdp__gallery">' +
          '<div class="pdp__main-img"><img data-main-img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" width="800" height="800" decoding="async" data-placeholder="' + ph + '"></div>' +
          (images.length > 1 ? '<div class="pdp__thumbs">' + thumbs + '</div>' : '') +
        '</div>' +
        '<div class="pdp__info">' +
          '<p class="pdp__cat">' + esc(p.category) + '</p>' +
          '<h1>' + esc(p.name) + '</h1>' +
          '<p class="pdp__overview">' + esc(p.shortDescription || "") + (p.customisation ? " " + esc(p.customisation) : "") + '</p>' +

          '<div class="pdp__cta-box">' +
            '<button class="btn btn--primary btn--block btn--lg" type="button" data-enquire>Enquire about this product</button>' +
            '<a class="btn btn--secondary btn--block" href="contact.html?product=' + encodeURIComponent(p.id) + '">Request a quote</a>' +
            '<a class="btn btn--ghost btn--block" href="assets/documents/decora-industries-catalogue.pdf" data-catalogue>Download specifications (PDF)</a>' +
          '</div>' +

          (features ? '<div class="pdp__section"><h2>Key features</h2><ul class="pdp__features">' + features + '</ul></div>' : '') +
          (specRows ? '<div class="pdp__section"><h2>Specifications</h2><table class="spec-table"><tbody>' + specRows + '</tbody></table></div>' : '') +
          (configs ? '<div class="pdp__section"><h2>Available configurations</h2><div class="prod-card__meta">' + configs + '</div></div>' : '') +
          (inds ? '<div class="pdp__section"><h2>Suitable industries</h2><div class="prod-card__meta">' + inds + '</div></div>' : '') +
        '</div>' +
      '</div>';

    // thumbnail switching
    var mainImg = host.querySelector("[data-main-img]");
    host.querySelectorAll("[data-thumb]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (mainImg) mainImg.src = btn.getAttribute("data-thumb");
        host.querySelectorAll(".pdp__thumb").forEach(function (t) { t.classList.remove("is-active"); });
        btn.classList.add("is-active");
      });
    });

    // Enquire button -> WhatsApp (uses shared helper from script.js)
    var enquireBtn = host.querySelector("[data-enquire]");
    if (enquireBtn && window.DECORA && window.DECORA.whatsappUrl) {
      enquireBtn.addEventListener("click", function () {
        window.open(window.DECORA.whatsappUrl({ requirement: p.name, category: p.category }), "_blank", "noopener");
      });
    }

    // Catalogue link: gracefully warn if the PDF has not been added yet
    var catLink = host.querySelector("[data-catalogue]");
    if (catLink) {
      catLink.addEventListener("click", function (e) {
        // let the browser try; if the file is absent it 404s harmlessly.
        // No JS error is thrown either way.
      });
    }
  }

  /* ---- Related products (same category, else same audience) ---- */
  function renderRelated(p) {
    var host = root.querySelector("[data-related]");
    var grid = root.querySelector("[data-related-grid]");
    if (!host || !grid) return;
    var related = products.filter(function (x) { return x.id !== p.id && x.category === p.category; });
    if (related.length < 4) {
      products.forEach(function (x) {
        if (related.length >= 4) return;
        if (x.id !== p.id && related.indexOf(x) === -1 && (x.audience || []).some(function (a) { return (p.audience || []).indexOf(a) > -1; })) related.push(x);
      });
    }
    related = related.slice(0, 4);
    if (!related.length) { host.style.display = "none"; return; }
    grid.innerHTML = related.map(function (r) {
      var url = "product-details.html?id=" + encodeURIComponent(r.id);
      return '<article class="prod-card">' +
        '<a class="prod-card__img" href="' + url + '" aria-label="' + esc(r.name) + '"><img src="' + esc(r.image) + '" alt="' + esc(r.name) + '" loading="lazy" decoding="async" width="800" height="800" data-placeholder="assets/images/placeholders/product-placeholder.svg"></a>' +
        '<div class="prod-card__body"><p class="prod-card__cat">' + esc(r.category) + '</p><h3><a href="' + url + '">' + esc(r.name) + '</a></h3>' +
        '<div class="prod-card__foot"><span class="prod-card__price">Request price</span><a class="btn btn--sm btn--secondary" href="' + url + '">Details</a></div></div></article>';
    }).join("");
  }

  function updateBreadcrumb(p) {
    var el = root.querySelector("[data-breadcrumb-current]");
    if (el) el.textContent = p.name;
  }

  /* ---- Friendly error state ---- */
  function renderError() {
    var host = root.querySelector("[data-detail-body]");
    var related = root.querySelector("[data-related]");
    if (related) related.style.display = "none";
    if (!host) return;
    host.innerHTML = '<div class="empty-state" style="max-width:520px;margin-inline:auto">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg>' +
      '<h3>Product not found</h3>' +
      '<p>The product you are looking for is unavailable or the link is incomplete. Browse the full range to find what you need.</p>' +
      '<a class="btn btn--primary" href="products.html">View all products</a></div>';
  }

  /* ---- Helpers ---- */
  function getParam(name) {
    try { return new URLSearchParams(window.location.search).get(name); }
    catch (e) {
      var m = window.location.search.match(new RegExp("[?&]" + name + "=([^&]*)"));
      return m ? decodeURIComponent(m[1]) : null;
    }
  }
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function checkIcon() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>'; }
})();
