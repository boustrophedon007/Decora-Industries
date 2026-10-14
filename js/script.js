/* =========================================================
   DECORA INDUSTRIES — script.js  (site-wide behaviour)
   Plain vanilla JS, no framework. Every feature checks that its
   target elements exist first, so the same file runs safely on
   every page (defensive by design). No console errors, no crash
   if a section is missing.
   =========================================================
   ── CONTACT DETAILS ───────────────────────────────────────
   Do not edit contact details here. They live in
   js/site-config.js (window.DECORA_CONFIG). */
var SITE_CONFIG     = window.DECORA_CONFIG || {};
var WHATSAPP_NUMBER = String(SITE_CONFIG.whatsapp || "").replace(/\D/g, "");
var SALES_EMAIL     = String(SITE_CONFIG.email || "");
/* ========================================================= */

(function () {
  "use strict";

  /* Signal to CSS that JS is available (enables reveal animations). */
  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    initContactDetails();
    initYear();
    initHeaderScroll();
    initMegaMenu();
    initMobileNav();
    initTabs();
    initFaq();
    initGallery();
    initReveal();
    initCounters();
    initHeroVideo();
    initFeaturedProducts();
    initImageFallback();
    initEnquiryForms();
  }

  /* ---- Contact details (values from js/site-config.js) ----
     [data-contact-link="phone|email|whatsapp"] gets its href set;
     [data-contact-text="phone|email"] gets its visible text set.
     The values written in the HTML are only a no-JS fallback. */
  function initContactDetails() {
    var phone = String(SITE_CONFIG.phone || "");
    var hrefs = {
      phone: phone ? "tel:" + phone.replace(/[^\d+]/g, "") : "",
      email: SALES_EMAIL ? "mailto:" + SALES_EMAIL : "",
      whatsapp: WHATSAPP_NUMBER ? "https://wa.me/" + WHATSAPP_NUMBER : ""
    };
    var texts = { phone: phone, email: SALES_EMAIL };

    $$("[data-contact-link]").forEach(function (el) {
      var href = hrefs[el.getAttribute("data-contact-link")];
      if (href) el.setAttribute("href", href);
    });
    $$("[data-contact-text]").forEach(function (el) {
      var text = texts[el.getAttribute("data-contact-text")];
      if (text) el.textContent = text;
    });

    // Organization schema (homepage) for search engines
    var schema = $("script[data-org-schema]");
    if (schema) {
      try {
        var data = JSON.parse(schema.textContent);
        if (SALES_EMAIL) data.email = SALES_EMAIL;
        if (phone) data.telephone = phone.replace(/\s+/g, "-");
        schema.textContent = JSON.stringify(data, null, 2);
      } catch (e) { /* leave schema as-is */ }
    }
  }

  /* ---- Homepage featured products (data-driven from products-data.js) ---- */
  function initFeaturedProducts() {
    var grid = $("[data-featured-grid]");
    if (!grid || !window.DECORA_PRODUCTS) return;
    var featured = window.DECORA_PRODUCTS.filter(function (p) { return p.featured; }).slice(0, 8);
    var esc = function (s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); };
    grid.innerHTML = featured.map(function (p) {
      var url = "product-details.html?id=" + encodeURIComponent(p.id);
      var tags = (p.audience || []).slice(0, 2).map(function (a) { return '<span class="tag">' + esc(a) + "</span>"; }).join("");
      return '<article class="prod-card">' +
        '<a class="prod-card__img" href="' + url + '" aria-label="' + esc(p.name) + '"><span class="prod-card__flag badge badge--brand">Featured</span>' +
          '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" loading="lazy" decoding="async" width="800" height="800" data-placeholder="assets/images/placeholders/product-placeholder.svg"></a>' +
        '<div class="prod-card__body"><p class="prod-card__cat">' + esc(p.category) + '</p>' +
          '<h3><a href="' + url + '">' + esc(p.name) + '</a></h3>' +
          '<p class="prod-card__desc">' + esc(p.shortDescription || "") + '</p>' +
          '<div class="prod-card__meta">' + tags + '</div>' +
          '<div class="prod-card__foot"><span class="prod-card__price">Request price</span>' +
          '<a class="btn btn--sm btn--secondary" href="' + url + '">Details</a></div></div></article>';
    }).join("");
  }

  /* ---- Current year in footers ---- */
  function initYear() {
    $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
  }

  /* ---- Header: add shadow after scroll (passive listener) ---- */
  function initHeaderScroll() {
    var header = $(".header");
    if (!header) return;
    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Desktop mega menu (hover + keyboard) ---- */
  function initMegaMenu() {
    $$(".nav__item--has-mega").forEach(function (item) {
      var trigger = $(".nav__link", item);
      var menu = $(".mega", item);
      if (!trigger || !menu) return;
      var closeTimer;

      function open() { clearTimeout(closeTimer); item.classList.add("is-open"); trigger.setAttribute("aria-expanded", "true"); }
      function close() { item.classList.remove("is-open"); trigger.setAttribute("aria-expanded", "false"); }
      function delayedClose() { closeTimer = setTimeout(close, 120); }

      item.addEventListener("mouseenter", open);
      item.addEventListener("mouseleave", delayedClose);
      trigger.addEventListener("click", function (e) {
        e.preventDefault();
        item.classList.contains("is-open") ? close() : open();
      });
      trigger.addEventListener("keydown", function (e) {
        if (e.key === "ArrowDown") { e.preventDefault(); open(); var first = $(".mega__link", menu); if (first) first.focus(); }
      });
      item.addEventListener("keyup", function (e) { if (e.key === "Escape") { close(); trigger.focus(); } });
      // close when focus leaves the whole item
      item.addEventListener("focusout", function () {
        setTimeout(function () { if (!item.contains(document.activeElement)) close(); }, 0);
      });
    });
  }

  /* ---- Mobile navigation drawer (with focus trap) ---- */
  function initMobileNav() {
    var burger = $("[data-menu-toggle]");
    var drawer = $(".mobile-nav");
    if (!burger || !drawer) return;
    var panel = $(".mobile-nav__panel", drawer);
    var scrim = $(".mobile-nav__scrim", drawer);
    var closeBtn = $("[data-menu-close]", drawer);
    var lastFocused = null;

    function open() {
      lastFocused = document.activeElement;
      drawer.classList.add("is-open");
      burger.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      var first = $("a,button", panel);
      if (first) first.focus();
      document.addEventListener("keydown", onKey);
    }
    function close() {
      drawer.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      if (lastFocused) lastFocused.focus();
    }
    function onKey(e) {
      if (e.key === "Escape") { close(); return; }
      if (e.key === "Tab") {
        var f = $$("a[href],button:not([disabled]),input,select,textarea", panel).filter(function (el) { return el.offsetParent !== null; });
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }

    burger.addEventListener("click", open);
    if (closeBtn) closeBtn.addEventListener("click", close);
    if (scrim) scrim.addEventListener("click", close);

    // Collapsible sub-groups inside the drawer
    $$(".m-group > .m-link[aria-controls]", drawer).forEach(function (btn) {
      btn.addEventListener("click", function () {
        var group = btn.closest(".m-group");
        var expanded = group.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", expanded ? "true" : "false");
      });
    });
    // Close drawer when a normal link is chosen
    $$('.mobile-nav__body a[href]', drawer).forEach(function (a) {
      a.addEventListener("click", function () { close(); });
    });
  }

  /* ---- Accessible tabs (ARIA + arrow keys) ---- */
  function initTabs() {
    $$("[data-tabs]").forEach(function (root) {
      var tabs = $$('[role="tab"]', root);
      var panels = $$('[role="tabpanel"]', root);
      if (!tabs.length) return;

      function select(idx, focus) {
        tabs.forEach(function (t, i) {
          var on = i === idx;
          t.setAttribute("aria-selected", on ? "true" : "false");
          t.tabIndex = on ? 0 : -1;
          if (on && focus) t.focus();
        });
        panels.forEach(function (p, i) { p.classList.toggle("is-active", i === idx); p.hidden = i !== idx; });
      }
      tabs.forEach(function (tab, i) {
        tab.addEventListener("click", function () { select(i); });
        tab.addEventListener("keydown", function (e) {
          var idx = i;
          if (e.key === "ArrowRight" || e.key === "ArrowDown") { idx = (i + 1) % tabs.length; e.preventDefault(); select(idx, true); }
          else if (e.key === "ArrowLeft" || e.key === "ArrowUp") { idx = (i - 1 + tabs.length) % tabs.length; e.preventDefault(); select(idx, true); }
          else if (e.key === "Home") { e.preventDefault(); select(0, true); }
          else if (e.key === "End") { e.preventDefault(); select(tabs.length - 1, true); }
        });
      });
      select(0);
    });
  }

  /* ---- Accessible FAQ accordion ---- */
  function initFaq() {
    $$(".faq__q").forEach(function (btn) {
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      if (!panel) return;
      btn.addEventListener("click", function () {
        var open = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", open ? "false" : "true");
        panel.style.maxHeight = open ? "0px" : panel.scrollHeight + "px";
      });
    });
    // Recalculate open panel heights on resize
    window.addEventListener("resize", function () {
      $$('.faq__q[aria-expanded="true"]').forEach(function (btn) {
        var panel = document.getElementById(btn.getAttribute("aria-controls"));
        if (panel) panel.style.maxHeight = panel.scrollHeight + "px";
      });
    }, { passive: true });
  }

  /* ---- Accessible gallery lightbox (focus trap, arrows, esc) ---- */
  function initGallery() {
    var lightbox = $("[data-lightbox]");
    var items = $$("[data-gallery-item]");
    if (!lightbox || !items.length) return;
    var imgEl = $(".lightbox__img", lightbox);
    var capEl = $(".lightbox__cap", lightbox);
    var closeBtn = $(".lightbox__close", lightbox);
    var prevBtn = $(".lightbox__nav--prev", lightbox);
    var nextBtn = $(".lightbox__nav--next", lightbox);
    var scrim = $(".lightbox__scrim", lightbox);
    var current = 0, lastFocused = null;

    var data = items.map(function (it) {
      var img = $("img", it);
      return { src: (img && (img.getAttribute("data-full") || img.src)) || "", alt: (img && img.alt) || "", cap: it.getAttribute("data-caption") || (img && img.alt) || "" };
    });

    function show(i) {
      current = (i + data.length) % data.length;
      var d = data[current];
      imgEl.src = d.src; imgEl.alt = d.alt;
      if (capEl) capEl.textContent = d.cap;
    }
    function open(i) {
      lastFocused = document.activeElement;
      show(i);
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
      closeBtn.focus();
      document.addEventListener("keydown", onKey);
    }
    function close() {
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      if (lastFocused) lastFocused.focus();
    }
    function onKey(e) {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") show(current + 1);
      else if (e.key === "ArrowLeft") show(current - 1);
      else if (e.key === "Tab") {
        var f = [prevBtn, nextBtn, closeBtn].filter(Boolean);
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    items.forEach(function (it, i) { it.addEventListener("click", function () { open(i); }); });
    if (closeBtn) closeBtn.addEventListener("click", close);
    if (scrim) scrim.addEventListener("click", close);
    if (prevBtn) prevBtn.addEventListener("click", function () { show(current - 1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { show(current + 1); });
  }

  /* ---- Scroll reveal via IntersectionObserver ---- */
  function initReveal() {
    var els = $$("[data-reveal],[data-reveal-stagger]");
    if (!els.length) return;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---- Animated counters (run once when in view) ---- */
  function initCounters() {
    var counters = $$("[data-count]");
    if (!counters.length) return;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      counters.forEach(function (el) { el.textContent = el.getAttribute("data-count"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        var el = en.target;
        var target = parseFloat(el.getAttribute("data-count")) || 0;
        var dur = 1400, start = null;
        function step(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased).toLocaleString();
          if (p < 1) requestAnimationFrame(step);
          else el.textContent = target.toLocaleString();
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { io.observe(el); });
  }

  /* ---- Hero video: honour reduced-motion / save-data / autoplay-block ---- */
  function initHeroVideo() {
    var video = $("[data-hero-video]");
    if (!video) return;
    var saveData = navigator.connection && navigator.connection.saveData;
    var smallScreen = window.matchMedia("(max-width: 640px)").matches;

    // Prefer poster only on reduced-motion, save-data or small screens.
    if (reduceMotion || saveData || smallScreen) {
      video.removeAttribute("autoplay");
      // leave poster showing; do not load the large sources
      $$("source", video).forEach(function (s) { s.removeAttribute("src"); });
      return;
    }
    var tryPlay = video.play();
    if (tryPlay && typeof tryPlay.then === "function") {
      tryPlay.catch(function () { /* autoplay blocked — poster remains, no error */ });
    }
    // If the video errors (missing file / unsupported), the poster stays.
    video.addEventListener("error", function () { video.style.display = "none"; }, true);
  }

  /* ---- Missing-image fallback to a local placeholder ---- */
  function initImageFallback() {
    var PLACEHOLDER = "assets/images/placeholders/wide-placeholder.svg";
    $$("img").forEach(function (img) {
      img.addEventListener("error", function handle() {
        img.removeEventListener("error", handle);
        var ph = img.getAttribute("data-placeholder") || PLACEHOLDER;
        if (img.src.indexOf(ph) === -1) img.src = ph;
      });
    });
  }

  /* =========================================================
     ENQUIRY: WhatsApp + mailto generation
     Shared by the contact form and product "Enquire" buttons.
     No server submission — honest wording is used in the UI.
     ========================================================= */
  function buildEnquiryText(d) {
    var lines = ["DECORA INDUSTRIES — Enquiry", "-----------------------------"];
    var order = [["name","Name"],["company","Company"],["phone","Phone"],["email","Email"],["type","Customer type"],["category","Product category"],["requirement","Product / requirement"],["quantity","Quantity"],["dimensions","Preferred dimensions"],["city","Delivery city"],["timeline","Project timeline"],["message","Message"]];
    order.forEach(function (pair) {
      var v = d[pair[0]];
      if (v) lines.push(pair[1] + ": " + v);
    });
    return lines.join("\n");
  }
  // expose helpers for other scripts / inline buttons
  window.DECORA = window.DECORA || {};
  window.DECORA.whatsappUrl = function (d) {
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(buildEnquiryText(d));
  };
  window.DECORA.mailtoUrl = function (d) {
    var subject = "Enquiry" + (d.requirement ? " — " + d.requirement : (d.category ? " — " + d.category : ""));
    return "mailto:" + SALES_EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(buildEnquiryText(d));
  };
  window.DECORA.buildEnquiryText = buildEnquiryText;

  /* ---- Quote / enquiry forms with client-side validation ---- */
  function initEnquiryForms() {
    $$("[data-enquiry-form]").forEach(function (form) {
      var status = $(".form-status", form.parentNode) || $(".form-status", form);

      function fieldOf(input) { return input.closest(".field"); }
      function setError(input, msg) {
        var f = fieldOf(input); if (!f) return;
        f.classList.add("is-invalid");
        var err = $(".field__error", f);
        if (err) err.textContent = msg;
        input.setAttribute("aria-invalid", "true");
      }
      function clearError(input) {
        var f = fieldOf(input); if (!f) return;
        f.classList.remove("is-invalid");
        input.removeAttribute("aria-invalid");
      }
      function validate() {
        var ok = true, firstBad = null;
        $$("[required]", form).forEach(function (input) {
          var val = (input.value || "").trim();
          var bad = false, msg = "This field is required.";
          if (!val) bad = true;
          else if (input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) { bad = true; msg = "Enter a valid email address."; }
          else if (input.type === "tel" && !/^[0-9+()\-\s]{7,}$/.test(val)) { bad = true; msg = "Enter a valid phone number."; }
          if (bad) { setError(input, msg); ok = false; if (!firstBad) firstBad = input; }
          else clearError(input);
        });
        if (firstBad) firstBad.focus();
        return ok;
      }
      function collect() {
        var d = {};
        $$("[name]", form).forEach(function (input) { d[input.name] = (input.value || "").trim(); });
        return d;
      }
      // live-clear errors as the user types
      $$("[required]", form).forEach(function (input) {
        input.addEventListener("input", function () { if (fieldOf(input) && fieldOf(input).classList.contains("is-invalid")) clearError(input); });
      });

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!validate()) return;
        showReady(collect());
      });

      // WhatsApp / email action buttons
      var waBtn = $("[data-send-whatsapp]", form);
      var mailBtn = $("[data-send-email]", form);
      if (waBtn) waBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (!validate()) return;
        var d = collect(); showReady(d);
        window.open(window.DECORA.whatsappUrl(d), "_blank", "noopener");
      });
      if (mailBtn) mailBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (!validate()) return;
        var d = collect(); showReady(d);
        window.location.href = window.DECORA.mailtoUrl(d);
      });

      function showReady(d) {
        if (!status) return;
        status.classList.add("is-shown");
        status.innerHTML = "Your enquiry details are ready. Continue through <b>WhatsApp</b> or your <b>email application</b> to send them to our team — nothing has been submitted to a server.";
        status.setAttribute("role", "status");
      }
    });
  }
})();
