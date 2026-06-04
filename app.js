/* Renders the resource sections from resources.js.
   You shouldn't need to touch this file — add links in resources.js instead. */

(function () {
  "use strict";

  /** Safely turn text into HTML (prevents broken layouts from stray < or &). */
  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text == null ? "" : String(text);
    return div.innerHTML;
  }

  /** Pull a friendly domain name from a URL, used as a fallback source tag. */
  function hostFromUrl(url) {
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch (err) {
      return "";
    }
  }

  /** Build one resource card. */
  function renderCard(item) {
    const sourceLabel = item.source || hostFromUrl(item.url);
    const tag = sourceLabel
      ? `<span class="card__source">${escapeHtml(sourceLabel)}</span>`
      : "";

    return `
      <article class="card">
        <div class="card__body">
          <h3 class="card__title">${escapeHtml(item.title)}</h3>
          ${tag}
          <p class="card__desc">${escapeHtml(item.description || "")}</p>
        </div>
        <a
          class="card__link"
          href="${escapeHtml(item.url)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check it out
          <span aria-hidden="true">→</span>
        </a>
      </article>
    `;
  }

  /** Build one category section. */
  function renderSection(section) {
    const cards = (section.items || []).map(renderCard).join("");
    const count = (section.items || []).length;
    const countLabel = count === 1 ? "1 find" : `${count} finds`;

    return `
      <section class="resource-section" id="${escapeHtml(section.id)}"
               data-category="${escapeHtml(section.id)}">
        <div class="section__head">
          <span class="section__icon" aria-hidden="true">${escapeHtml(
            section.icon || "✨"
          )}</span>
          <div>
            <h2 class="section__title">${escapeHtml(section.title)}</h2>
            <p class="section__blurb">${escapeHtml(section.blurb || "")}</p>
          </div>
          <span class="section__count">${countLabel}</span>
        </div>
        <div class="card-grid">${cards}</div>
      </section>
    `;
  }

  function init() {
    const mount = document.getElementById("resource-sections");
    if (!mount) return;

    if (typeof resourceData === "undefined" || !Array.isArray(resourceData)) {
      mount.innerHTML =
        '<p class="loading">Hmm, I couldn\'t find any resources. ' +
        "Check that <code>resources.js</code> loaded correctly. 💛</p>";
      return;
    }

    mount.innerHTML = resourceData.map(renderSection).join("");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
