import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, i as renderComponent } from '../astro_dc971eb6.mjs';
import 'html-escaper';
import 'clsx';
/* empty css                           */import { $ as $$BaseLayout } from './__7efc3251.mjs';
/* empty css                            */
const $$Astro$2 = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Search;
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return renderTemplate`${maybeRenderHead()}<div class="search-component container pb-500"><div class="input-wrapper"><input id="input-search" type="search" placeholder="Search for a country..."><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="filter-box"><button id="dropdown-button" class="button has-icon fs-300" aria-haspopup="true" aria-controls="filter-options" aria-expanded="false">
Filter by Region
</button><ul id="filter-options" class="filter-list display-none">${regions.map((region) => renderTemplate`<li${addAttribute(region.toLowerCase(), "data-region")}><span>${region}</span></li>`)}</ul></div></div>`;
}, "/home/amer/Desktop/Rest Countries/src/components/Search.astro", void 0);

const $$Astro$1 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { country } = Astro2.props;
  const formatPopulationNumber = (number) => {
    return new Intl.NumberFormat("de-DE").format(number);
  };
  return renderTemplate`${maybeRenderHead()}<article class="card br-5"${addAttribute(country.name.common, "data-name")}${addAttribute(country.cca3, "data-code")}><a${addAttribute(`/country/${country.cca3}`, "href")}><div class="card__image br-5"><img class="br-5"${addAttribute(country.flags.png, "src")}${addAttribute(country.flags.alt, "alt")}></div><div class="card__content pb-5 pi-4"><h3 class="heading-3 mb-2">${country.name.official}</h3><p><span class="fs-300">Population:&nbsp;</span><span class="fs-300 txt-neutral-800 value-text">${formatPopulationNumber(country.population)}</span></p><p><span class="fs-300">Region:&nbsp;</span><span class="fs-300 txt-neutral-800 value-text">${country.region}</span></p><p><span class="fs-300">Capital:&nbsp;</span><span class="fs-300 txt-neutral-800 value-text">${country.capital}</span></p></div></a></article>`;
}, "/home/amer/Desktop/Rest Countries/src/components/Card.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const region = Astro2.url.searchParams.get("region");
  const response = region ? await fetch(`https://restcountries.com/v3.1/region/${region}`) : await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Get the facts about any country in the world" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Search", $$Search, {})}${maybeRenderHead()}<section aria-label="Countries" class="countries container pb-500">${data.map((data2) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "country": data2 })}`)}</section>` })}`;
}, "/home/amer/Desktop/Rest Countries/src/pages/index.astro", void 0);

const $$file = "/home/amer/Desktop/Rest Countries/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
