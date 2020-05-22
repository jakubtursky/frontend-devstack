Sass manual

1. Používam preprocessor Sass
2. Organizácia súborov
3. Prefixing
4. Formátovanie kódu
5. Architektúra - SMACSS
6. Media queries
7. Ostatné

1. Preprocesor - Sass
——-
Ako preprocessor používam Sass, syntax SCSS. K tomu ako doplnok framework Compass, ktorý má veľké množstvo preddefinovaných funkcií. Tu je pekný článok Sass vs LESS http://css-tricks.com/sass-vs-less/

Zoznam mnou najpoužívanejších funkcií:

@mixin
@include
@extend
@import
$variables
%blocks
math
nesting


2. Organizácia súborov
——-
Základom je súbor screen.scss ktorý slúži ako index pre import ďalších súborov. V tomto súbore sa nenachádzajú žiadne CSS zápisy. Každý modul je v samostantom súbore, ktorý sa importuje do súboru screen.scss 

Ukážka takéhoto súboru:

@import 

"reset",

// Compass
"compass",

// General Dependencies
"variables",
"mixins",

// Base
"base",
"layout",

// Areas
"header",
"footer",

// Patterns
"typography",
"forms",
"buttons",
"modals",
“tables”,

// Conponents
"components/contact",
"components/article”,
"components/intro”,
"components/comment”,

// Vendors
"vendors/selectric"


3. Prefixing
——-
Na prefixovanie používam funkcie frameworku Compass + utilitu autoprefixer. Zápis pre border-radius vyzerá následovne:

@include border-radius();


4. Formátovanie kódu
——-
Konzistetný kód je veľmi dôležitý, preto sa vždy snažím dodržiavať nasledovné pravidlá:

4 medzery ako odsadenie
1 medzera za selektorom a pred {
1 deklarácia na jeden riadok
1 medzera za :
Zatváracia } vždy na nový riadok za blok
0 ako hodnota nemá jednotky (žiadne 0px ale iba 0)
používam - a nie podtržítka
poradie zápisu mi upravuje plugin CSScomb http://csscomb.com

Kód formátujem následovne:

bloky, ktoré so sebou úzko súvisia, nemajú medzi sebou žiaden prázdny riadok

.thing {

}
.related-thing {

}

bloky, ktoré so sebou súvisia menej, majú medzi sebou jeden prázdny riadok

.thing {

}

.another-thing {

}

bloky, ktoré so sebou nesúvisia, majú medzi sebou dva prázdne riadky

.thing {

}


.totally-different-thing {

}


5. architektúra
——-
Na architekúru používam metodológiu SMACSS https://smacss.com
Základným princípom je mať specificitu čo najnižšiu, najindeálnejšie specifita = 1. 
Nepoužívam #id len .class
Ako jednotky pre font-size používam rem
Maximálna miera zanorenie je 3. Nikdy viac!
Začiatok a koniec kódu komentujem s názvom tried. Začiatok <!—- .article —-> Koniec <—- end .article —->

.box { 
  h2 {
    &:after {
    }
  }
}

Ukážka modulu s použitím SMACSS a specificity = 1.

<div class=“article-group”>
    <article class=“article”>
        <h1 class=“article-title”></h1>
        <p class=“article-perex”></p>
    </article>
</div>

.article {
}
.article-title {
}
.article-perex {
}

Modul .article musí byť vždy nezávislý na tom, kde sa nachádza, takže nikdy nepoužívam nasledovné:

.home .article {
}

ale použijem

<article class=“article article-ext”>
</article>

.article {
}
.article-ext {
}

Takto môžeme použiť modul aj mimo .home

6. Media queries

Na media queries používam nasledovný mixin:

/* [] BREAKPOINTS MEDIA QUERIES */
@mixin bp($point) {
    $large: $bp-large;
    $medium: $bp-medium;
    $small: $bp-small;
    
    @if $point == large {
        @media (min-width: $large) { @content; }
    }
    @else if $point == medium {
        @media (min-width: $medium) { @content; }
    }
    @else if $point == small {
        @media (min-width: $small)  { @content; }
    }
    
    @else if $point == rev-large {
        @media (max-width: $large - 1) { @content; }
    }
    @else if $point == rev-medium {
        @media (max-width: $medium - 1) { @content; }
    }
    @else if $point == rev-small {
        @media (max-width: $small - 1)  { @content; }
    }
    
    @else if $point == excl-small {
        @media (max-width: $small) { @content; }
    }
    @else if $point == excl-medium {
        @media (min-width: $small + 1) and (max-width: $medium) { @content; }
    }
    @else if $point == excl-large {
        @media (min-width: $medium + 1) and (max-width: $large) { @content; }
    }
}

Ukážka použitia je nasledovná

.article {
     @include bp(small) {
     }
}

7. Ostatné

Veľkosti písma sa zadávajú cez mixin font-size() ktorý automaticky prepočíta jednotky na rem.

.article {
     @include font-size(12px);
}

Základná veľkosť písma sa nastavuje na body v subore typography.scss
V tomto súbore sa nastavuje všetko čo sa týka typografie.
Všetky odstavce textu, ktoré sú na stránke (napr. https://projects.invisionapp.com/share/TVC6CKX4F#/screens/243097522) sa zadávajú s rodičom .typography takto

<div class=“typography”>
     <p class=“lead”>Velke pismo</p>
     <p>klasicke pismo</p>
</div>

Kod pis do suborov s priponou .kit oni sa potom skompiluju do HTML. Je to v podstate normalny HTML subor, s jednou funkckou navyse, ze sa da includovat. Subory ktore maju na zaciatku podtrzitko sa includuju napr. _footer.kit sa includuje do index.kit v kode takto <!—- @include footer ->

Pouzivanie js pluginov sa robi cez bower. Nastavil som ti tam konfiguracny subor, takze staci dat bower installl. V kode je vsetko nastavene pre tieto pluginy
Na scroll pouzi plugin nicescroll (na element pridaj triedu .js-scroll), na select selectric (na select pridaj triedu .js-select)
Na loadovanie fontov webfontloader (konfiguracia je vo footer.kit)
Vsetky js subory su v js/ tie ktore zacinaju podtrzitkom sa kompiluju do jedneho suboru dist/js/main.min.js tie ktore nemaju podtrzitko sa kompiluju ako samostatny subor.
Google mapu nastavis v map.js a potom vo footer.kit vidis js pole, ako sa pridavaju piny na mapu pomocou var markers;