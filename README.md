# Ogtech.no

Nettside for OgTech – Onsite Gas Technology.

## Struktur

| Fil | Innhold |
| --- | --- |
| `index.html` | Norsk versjon (standard) |
| `en/index.html` | Engelsk versjon |
| `assets/style.css` | Felles stil, tilpasser seg mobil, laptop og store skjermer, samt lyst/mørkt tema |
| `assets/main.js` | Menypaneler (Løsninger / OgTech Core / Kontakt) og installasjonsvalg |
| `assets/favicon.svg` | Ikon i nettleserfanen |
| `assets/fonts/` | Manrope (brødtekst, knapper, menyer) og Space Grotesk (overskrifter), variable fonter (SIL OFL 1.1) lagt på egen server i stedet for Google Fonts |

Språkvelgeren (🇳🇴 NO / 🇬🇧 EN) ligger øverst til høyre i menyen.
Endrer du tekst på én side, husk å oppdatere tilsvarende tekst på den andre.

Åpne `index.html` i en nettleser for å se siden. Siden har ingen byggesteg og kan publiseres direkte, f.eks. med GitHub Pages.

## Forhåndsvisning (GitHub Pages)

Siden publiseres som forhåndsvisning på `https://ogtech-as.github.io/Ogtech.no/` (Settings → Pages → Deploy from a branch → `main` / `(root)`).
Den er foreløpig ikke koblet til ogtech.no og har `noindex`, så den ikke dukker opp i Google.

Ved lansering på ogtech.no:
1. Legg inn domenet under Settings → Pages → Custom domain og pek DNS dit.
2. Fjern `<meta name="robots" content="noindex">` fra `index.html` og `en/index.html`.
3. Legg gjerne til `<link rel="alternate" hreflang="…">` mellom norsk og engelsk versjon.

## Prosjekter

`prosjekter/index.html` (norsk) og `en/projects/index.html` (engelsk) viser leverte anlegg og inngåtte avtaler.
Nytt prosjekt: kopier en `<article class="project">`-blokk, legg den øverst og bytt tekst, bilde og merkelapper
(`<span class="tag">Levert</span>`, `<span class="tag tag-live">I drift</span>` eller f.eks. `<span class="tag">Avtale inngått</span>`).
Bilder legges i `assets/img/` som komprimert `.webp`.
