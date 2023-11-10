import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, s as spreadAttributes, h as renderSlot, i as renderComponent, j as renderHead, k as formatList } from '../astro_dc971eb6.mjs';
import 'html-escaper';
/* empty css                           */import 'clsx';
/* empty css                            */
const $$Astro$4 = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    label,
    controls,
    expanded,
    className,
    style = "primary",
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(label, "aria-label")}${addAttribute(controls, "aria-controls")}${addAttribute(expanded, "aria-expanded")}${addAttribute(style, "data-style")}${addAttribute(["button", className], "class:list")}${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</button>`;
}, "/home/amer/Desktop/Rest Countries/src/components/ui/Button.astro", void 0);

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="header pb-4"><div class="container"><div class="header__wrapper"><h1 class="heading-3"><a href="/">Where in the world?</a></h1>${renderComponent($$result, "Button", $$Button, { "id": "mode-button", "className": "has-icon", "style": "muted" }, { "default": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z"></path></svg><span>Dark mode</span>` })}</div></div></header>`;
}, "/home/amer/Desktop/Rest Countries/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-mode="light" data-astro-cid-4jmloj5z><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="X-UA-Compatible" content="ie=edge"><!-- title --><title>${title}</title><!-- favicon --><link rel="icon" href="../favicon.svg">${renderHead()}</head><body data-astro-cid-4jmloj5z>${renderComponent($$result, "Header", $$Header, { "data-astro-cid-4jmloj5z": true })}<main data-astro-cid-4jmloj5z>${renderSlot($$result, $$slots["default"])}</main></body></html>`;
}, "/home/amer/Desktop/Rest Countries/src/layout/BaseLayout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Link;
  const { href, external, style = "primary", className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(external ? "_blank" : null, "target")}${addAttribute(external ? "noopener" : null, "rel")}${addAttribute(["button", className], "class:list")}${addAttribute(style, "data-style")}${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</a>`;
}, "/home/amer/Desktop/Rest Countries/src/components/ui/Link.astro", void 0);

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const formatPopulationNumber = (number) => {
    return new Intl.NumberFormat("de-DE").format(number);
  };
  const { page } = Astro2.params;
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${page}`);
  const data = await response.json();
  const country = data[0];
  const fetchAllCountries = await fetch("https://restcountries.com/v3.1/all");
  const allCountries = await fetchAllCountries.json();
  const borderCountries = allCountries.filter(
    (c) => country.borders?.includes(c.cca3)
  );
  console.log(country);
  console.log(borderCountries.length);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": country.name.common + " - Details" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="container pb-500">${renderComponent($$result2, "Button", $$Button, { "id": "button-back", "className": "has-icon", "style": "muted" }, { "default": ($$result3) => renderTemplate`<svg fill="currentColor" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M39.3756,48.0022l30.47-25.39a6.0035,6.0035,0,0,0-7.6878-9.223L26.1563,43.3906a6.0092,6.0092,0,0,0,0,9.2231L62.1578,82.615a6.0035,6.0035,0,0,0,7.6878-9.2231Z"></path></g></svg><span>Back</span>` })}</div><section${addAttribute(`Informations about ${country.name.common}`, "aria-label")} class="container pb-500"><div class="country__wrapper even-columns pb-500"><div><img${addAttribute(country.flags.svg, "src")}${addAttribute(country.flags.alt, "alt")}></div><div><h2 class="heading-2">${country.name.common}</h2><div class="even-columns pb-500"><div><p><span class="fs-500 fw-600">Native Name/s:&nbsp;</span><span class="fs-500 txt-neutral-800 value-text">${formatList(
    Object.values(country.name.nativeName).map(
      (name) => name.common
    )
  )}</span></p><p><span class="fs-500 fw-600">Population:&nbsp;</span><span class="fs-500 txt-neutral-800 value-text">${formatPopulationNumber(country.population)}</span></p><p><span class="fs-500 fw-600">Region:&nbsp;</span><span class="fs-500 txt-neutral-800 value-text">${country.region}</span></p><p><span class="fs-500 fw-600">Sub Region:&nbsp;</span><span class="fs-500 txt-neutral-800 value-text">${country.subregion}</span></p><p><span class="fs-500 fw-600">Capital:&nbsp;</span><span class="fs-500 txt-neutral-800 value-text">${formatList(Object.values(country.capital))}</span></p></div><div><p><span class="fs-500 fw-600">Top Level Domain:&nbsp;</span><span class="fs-500 txt-neutral-800 value-text">${country.tld[0]}</span></p><p><span class="fs-500 fw-600">Currencies:&nbsp;</span><span class="fs-500 txt-neutral-800 value-text">${formatList(
    Object.values(country.currencies).map((curr) => curr.name)
  )}</span></p><p><span class="fs-500 fw-600">Languages:&nbsp;</span><span class="fs-500 txt-neutral-800 value-text">${formatList(Object.values(country.languages))}</span></p></div></div><div class="borders"><p class="fs-500 fw-500">Border Countries:&nbsp;</p><ul>${borderCountries.map((c) => renderTemplate`<li>${renderComponent($$result2, "Link", $$Link, { "style": "muted", "href": `/country/${c.cca3}`, "className": "fs-300" }, { "default": ($$result3) => renderTemplate`${c.name.common}` })}</li>`)}</ul></div></div></div></section>` })}`;
}, "/home/amer/Desktop/Rest Countries/src/pages/country/[...page].astro", void 0);

const $$file = "/home/amer/Desktop/Rest Countries/src/pages/country/[...page].astro";
const $$url = "/country/[...page]";

const ____page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayout as $, ____page_ as _ };
