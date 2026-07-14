/* Dogwood Plumbing LLC — site scripts */
(function () {
  "use strict";

  /* Mobile navigation toggle */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Auto-update copyright year */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /*
   * Quote request form.
   *
   * Until an email/form service is connected, the form composes a
   * pre-filled email in the visitor's mail app addressed to the shop.
   * To upgrade to true in-page submission (no mail app needed), sign up
   * for a free form endpoint (e.g. Formspree or Basin), then:
   *   1. Set the form's `action` attribute to your endpoint URL.
   *   2. Set `method="POST"`.
   *   3. Delete the submit handler below.
   */
  var form = document.getElementById("quote-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;

      var get = function (name) {
        var el = form.elements[name];
        return el && el.value ? el.value.trim() : "";
      };

      var lines = [
        "New quote request from the Dogwood Plumbing website",
        "",
        "Name: " + get("name"),
        "Phone: " + get("phone"),
        "Email: " + get("email"),
        "Town: " + get("town"),
        "Service needed: " + get("service"),
        "How soon: " + get("urgency"),
        "",
        "Details:",
        get("message")
      ];

      var subject = "Quote request — " + get("name") + " (" + get("town") + ")";
      var href =
        "mailto:dogwoodplumbingva@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(lines.join("\n"));

      window.location.href = href;

      var ok = document.querySelector(".form-success");
      if (ok) {
        ok.classList.add("show");
        ok.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  }
})();
