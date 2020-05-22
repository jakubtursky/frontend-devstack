Inštalácia template

LEN PRE WINDOWS nainštalovať nasledovné
- Ruby http://rubyinstaller.org/
- Sass príkazom gem install sass
- Compass príkazom gem install compass

a pokračovať nasledujúcimi bodmi

1. Nainštalovať balíčkovacie systémy Node, Bower a Gulp
- Node https://nodejs.org/en/
- Bower https://bower.io/#install-bower
- Gulp npm install -g gulp

2. Stiahnuť repozitár s témou git@bitbucket.org:oktodigital/okto-html-skeleton.git

3. Presunúť sa do adresára s témou a spustiť príkazy
- bower install
- npm install

4. Spustiť server príkazom gulp watch
Server sa spustí v prehliadači na adrese localhost:3000 a sleduje zmeny v JS/KIT/HTML/CSS súboroch, následne ich kompiluje a automaticky reloaduje prehliadač.

5. Dostupné príkazy z terminálu
“gulp watch” - spustenie servera
“gulp dist” - kompilácia a vygenerovanie JS/CSS/HTML súborov a optimalizácia obrázkov
“gulp clean:dist” - vymazanie vygenerovaného dist/ adresára

6. Ako používať template

6.1
zdrojové súbury sa nachádzajú v zložke src/ s nasledovnou štruktúrou
|_ sass/
|_ images/
|_ fonts/
|_ js/
|_ *.kit

6.2 
Sass súbory sú organizované pomocou modulárnej metódy SMACSS - viac informácií v súbore README Sass.txt

6.3
HTML kód sa vkladá do súborov s príponou .kit Kit jazyk nám umožňuje do statických súborov includovať partial súbory, premenné a zabráňuje znovuopakovaniu písania kódu. Viac informácií https://incident57.com/codekit/help.html#kit

6.4
Výsledné skompilované CS/JS/HTML súbory a obrázky sa ukladajú do adresára dist/ ktorý má rovnakú štruktúru ako zdrojový adresár src/

7. Ako skompilovať template
- príkazom “gulp watch” - spustí server, ktorý sleduje všetky zmeny v zdrojovom adresári src/ a po každej zmene kompiluje všetky súbory do adresára dist/
- príkazom “gulp dist” - jednorázová kompilácia súborov v zdrojovom adresári src/ do adresára dist/

8. Čo sa deje počas kompilácie
- súbory src/*.kit sa prekompilujú do *.html súborov, vrátane všetkých @include a premenných, do adresára dist/*.html
- súbory includované cez súbor src/sass/screen.sass sa skompilujú do výsledného minifikovaného súboru dist/css/screen.css
- súbory scr/js/ sa zminifikujú, zvalidujú a prebehne concat do súboru dist/js/main.min.js
- obrázky v src/images/* sa optimalizujú a presunú do adresára dist/images/
- fonty sa prekopírujú z adresára src/fonts/ do adresára dist/fonts/. Nie je potrebná žiadna kompilácia, kedže fonty sú už optimalizované.