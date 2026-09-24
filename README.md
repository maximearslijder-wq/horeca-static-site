# Horeca Onboarding Flow — statische site

Een klikbaar prototype van de landingspagina + onboardingflow, als losse HTML/CSS/JS-bestanden.
Geen build-stap nodig — dit is een kant-en-klare statische site.

## Lokaal bekijken
Open gewoon `index.html` in je browser, of start een lokale server:

```
python3 -m http.server 8000
```

en ga naar `http://localhost:8000`.

## Publiceren op GitHub Pages
1. Maak een nieuwe (of gebruik een bestaande) GitHub-repository en push de inhoud van deze map naar de `main`-branch.
2. Ga in de repo naar **Settings → Pages**.
3. Kies bij "Source" de branch `main` en map `/ (root)`.
4. Sla op — na een minuutje staat de site live op `https://<jouw-gebruikersnaam>.github.io/<repo-naam>/`.

## Structuur
- `index.html` — landingspagina ("ik ben klant" / "ik ben nieuw")
- `login.html`, `dashboard.html` — klantpad
- `wizard-type.html` → `wizard-staff.html` → `wizard-software.html` → `wizard-features.html` — intakewizard voor nieuwe klanten
- `voorstel.html` — voorstel + kostensimulatie
- `demo.html`, `demo-confirm.html` — demo inplannen
- `account.html`, `account-welcome.html` — account aanmaken
- `assets/` — logo, gedeelde stylesheet en het kleine scriptje dat het scherm op mobiel schaalt

## Bekende openstaande punten
Deze site is 1-op-1 overgenomen van het Claude-canvas, inclusief de eigen aanpassingen die daar al zijn gemaakt.
Nog op te volgen aannames/placeholders:
- Dashboard-scherm: link naar het echte dashboard ontbreekt nog.
- Voorstel-scherm: prijssimulatie is illustratief (vast bedrag), nog geen echte formule.
- `wizard-features.html` toont nog de naam "Horeca Suite" in de topbalk in plaats van "POSforALL" (op de andere pagina's is dit al aangepast).
