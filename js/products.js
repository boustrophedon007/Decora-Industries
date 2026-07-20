/* =========================================================
   DECORA INDUSTRIES — products.js  (catalogue page logic)
   Reads window.DECORA_PRODUCTS (from data/products-data.js).
   Handles: category + audience filtering, search, sort,
   featured-only, clear, result count, empty state, active-filter
   chips, and URL query support (?category=…&audience=…&q=…).
   Works when opened via file:// (no fetch used).
   ========================================================= */
(function () {
  "use strict";
  var root = document.querySelector("[data-catalogue]");
  if (!root) return; // not the catalogue page — do nothing

  var products = (window.DECORA_PRODUCTS || []).slice();
  var categories = window.DECORA_CATEGORIES || [];
  var audiences = window.DECORA_AUDIENCES || [];

  var grid = root.querySelector("[data-grid]");
  var countEl = root.querySelector("[data-count]");
  var searchInput = root.querySelector("[data-search]");
  var sortSelect = root.querySelector("[data-sort]");
  var featuredToggle = root.querySelector("[data-featured-only]");
  var catBox = root.querySelector("[data-filter-category]");
  var audBox = root.querySelector("[data-filter-audience]");
  var clearBtn = root.querySelector("[data-clear-filters]");
  var chipsEl = root.querySelector("[data-active-filters]");

  var state = { q: "", categories: [], audiences: [], featured: false, sort: "name-asc" };

  /* ---- Build filter checkbox lists ---- */
  function renderFilters() {
    if (catBox) {
      catBox.innerHTML = categories.map(function (c) {
        return '<label class="check"><input type="checkbox" value="' + esc(c) + '" data-cat-check> ' + esc(c) + '</label>';
      }).join("");
    }
    if (audBox) {
      audBox.innerHTML = audiences.map(function (a) {
        return '<label class="check"><input type="checkbox" value="' + esc(a) + '" data-aud-check> ' + esc(a) + '</label>';
      }).join("");
    }
  }

  /* ---- Read initial state from the URL (works only on http/https) ---- */
  function readUrl() {
    try {
      var p = new URLSearchParams(window.location.search);
      if (p.get("q")) state.q = p.get("q");
      if (p.get("category")) state.categories = p.get("category").split(",").filter(Boolean);
      if (p.get("audience")) state.audiences = p.get("audience").split(",").filter(Boolean);
      if (p.get("featured") === "1") state.featured = true;
      if (p.get("sort")) state.sort = p.get("sort");
    } catch (e) { /* URLSearchParams unavailable — ignore */ }
  }

  /* ---- Reflect state into the controls ---- */
  function syncControls() {
    if (searchInput) searchInput.value = state.q;
    if (sortSelect) sortSelect.value = state.sort;
    if (featuredToggle) featuredToggle.checked = state.featured;
    if (catBox) catBox.querySelectorAll("[data-cat-check]").forEach(function (c) { c.checked = state.categories.indexOf(c.value) > -1; });
    if (audBox) audBox.querySelectorAll("[data-aud-check]").forEach(function (c) { c.checked = state.audiences.indexOf(c.value) > -1; });
  }

  /* ---- Push state into the URL without reloading (hosting only) ---- */
  function writeUrl() {
    if (window.location.protocol === "file:") return; // avoid errors on file://
    try {
      var p = new URLSearchParams();
      if (state.q) p.set("q", state.q);
      if (state.categories.length) p.set("category", state.categories.join(","));
      if (state.audiences.length) p.set("audience", state.audiences.join(","));
      if (state.featured) p.set("featured", "1");
      if (state.sort !== "name-asc") p.set("sort", state.sort);
      var qs = p.toString();
      history.replaceState(null, "", qs ? "?" + qs : window.location.pathname);
    } catch (e) { /* ignore */ }
  }

  /* ---- Filter + sort ---- */
  function apply() {
    var q = state.q.toLowerCase().trim();
    var out = products.filter(function (p) {
      if (state.featured && !p.featured) return false;
      if (state.categories.length && state.categories.indexOf(p.category) === -1) return false;
      if (state.audiences.length) {
        var hit = (p.audience || []).some(function (a) { return state.audiences.indexOf(a) > -1; });
        if (!hit) return false;
      }
      if (q) {
        var hay = (p.name + " " + p.category + " " + (p.shortDescription || "") + " " + (p.audience || []).join(" ")).toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });
    out.sort(function (a, b) {
      return state.sort === "name-desc" ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name);
    });
    return out;
  }

  /* ---- Render product grid ---- */
  function render() {
    var list = apply();
    if (countEl) countEl.innerHTML = "<b>" + list.length + "</b> " + (list.length === 1 ? "product" : "products");
    renderChips();

    if (!grid) return;
    if (!list.length) {
      grid.className = "";
      grid.innerHTML = '<div class="empty-state">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>' +
        '<h3>No products match your filters</h3>' +
        '<p>Try removing a filter or clearing your search.</p>' +
        '<button class="btn btn--secondary" type="button" data-clear-inline>Clear all filters</button></div>';
      var ci = grid.querySelector("[data-clear-inline]");
      if (ci) ci.addEventListener("click", clearAll);
      return;
    }
    grid.className = "prod-grid";
    grid.innerHTML = list.map(cardHtml).join("");
  }

  function cardHtml(p) {
    var url = "product-details.html?id=" + encodeURIComponent(p.id);
    var flag = p.featured ? '<span class="prod-card__flag badge badge--brand">Featured</span>' : "";
    var tags = (p.audience || []).slice(0, 3).map(function (a) { return '<span class="tag">' + esc(a) + "</span>"; }).join("");
    return '' +
      '<article class="prod-card">' +
        '<a class="prod-card__img" href="' + url + '" aria-label="' + esc(p.name) + '">' + flag +
          '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" loading="lazy" decoding="async" width="800" height="800" data-placeholder="assets/images/placeholders/product-placeholder.svg">' +
        '</a>' +
        '<div class="prod-card__body">' +
          '<p class="prod-card__cat">' + esc(p.category) + '</p>' +
          '<h3><a href="' + url + '">' + esc(p.name) + '</a></h3>' +
          '<p class="prod-card__desc">' + esc(p.shortDescription || "") + '</p>' +
          '<div class="prod-card__meta">' + tags + '</div>' +
          '<div class="prod-card__foot">' +
            '<span class="prod-card__price">Request price</span>' +
            '<a class="btn btn--sm btn--secondary" href="' + url + '">Details</a>' +
          '</div>' +
        '</div>' +
      '</article>';
  }

  /* ---- Active-filter chips ---- */
  function renderChips() {
    if (!chipsEl) return;
    var chips = [];
    if (state.q) chips.push(chip('Search: "' + state.q + '"', function () { state.q = ""; if (searchInput) searchInput.value = ""; }));
    if (state.featured) chips.push(chip("Featured only", function () { state.featured = false; if (featuredToggle) featuredToggle.checked = false; }));
    state.categories.forEach(function (c) { chips.push(chip(c, function () { state.categories = state.categories.filter(function (x) { return x !== c; }); syncControls(); })); });
    state.audiences.forEach(function (a) { chips.push(chip(a, function () { state.audiences = state.audiences.filter(function (x) { return x !== a; }); syncControls(); })); });
    chipsEl.innerHTML = "";
    chips.forEach(function (c) { chipsEl.appendChild(c); });
    chipsEl.style.display = chips.length ? "flex" : "none";
  }
  function chip(label, onRemove) {
    var el = document.createElement("span");
    el.className = "chip";
    el.innerHTML = esc(label) + ' <button type="button" aria-label="Remove filter">&times;</button>';
    el.querySelector("button").addEventListener("click", function () { onRemove(); update(); });
    return el;
  }

  function clearAll() {
    state = { q: "", categories: [], audiences: [], featured: false, sort: "name-asc" };
    syncControls();
    update();
  }

  /* ---- Wire events ---- */
  function bind() {
    if (searchInput) searchInput.addEventListener("input", debounce(function () { state.q = searchInput.value; update(); }, 180));
    if (sortSelect) sortSelect.addEventListener("change", function () { state.sort = sortSelect.value; update(); });
    if (featuredToggle) featuredToggle.addEventListener("change", function () { state.featured = featuredToggle.checked; update(); });
    if (catBox) catBox.addEventListener("change", function (e) {
      if (!e.target.matches("[data-cat-check]")) return;
      state.categories = Array.prototype.slice.call(catBox.querySelectorAll("[data-cat-check]:checked")).map(function (c) { return c.value; });
      update();
    });
    if (audBox) audBox.addEventListener("change", function (e) {
      if (!e.target.matches("[data-aud-check]")) return;
      state.audiences = Array.prototype.slice.call(audBox.querySelectorAll("[data-aud-check]:checked")).map(function (c) { return c.value; });
      update();
    });
    if (clearBtn) clearBtn.addEventListener("click", clearAll);

    var mobileToggle = root.querySelector("[data-filters-toggle]");
    var filtersPanel = root.querySelector(".filters");
    if (mobileToggle && filtersPanel) {
      mobileToggle.addEventListener("click", function () {
        var open = filtersPanel.hasAttribute("hidden");
        if (open) filtersPanel.removeAttribute("hidden"); else filtersPanel.setAttribute("hidden", "");
        mobileToggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
  }

  function update() { writeUrl(); render(); }

  /* ---- Helpers ---- */
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function debounce(fn, ms) { var t; return function () { clearTimeout(t); var a = arguments, c = this; t = setTimeout(function () { fn.apply(c, a); }, ms); }; }

  /* ---- Init ---- */
  renderFilters();
  readUrl();
  syncControls();
  bind();
  render();
})();
