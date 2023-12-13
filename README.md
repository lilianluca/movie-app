# Aplikace poskytující informace o filmech

## Motivace

S narůstajícím množstvím filmů dostupných v různých formátech a platformách, může být pro uživatele čas od času složité rozhodnout se, který film si zvolit. Tato aplikace nabízí užitečné informace, hodnocení a doporučení, což ušetří uživatelům čas a usnadní jim výběr.

## Seznam funkcí z pohledu uživatele

1. Vyhledávání filmů - uživatelé mají možnost vyhledávat filmy podle názvu a žánrů.
2. Detailní informace o filmech - každý film má vlastní stránku s detailními informacemi, jako je název, žánr, datum vydání, popis děje, hodnocení a další relevantní údaje.
3. Různé kategorie filmů - (oblíbené, nejlépe hodnocené, filmové novinky, právě se hraje)

## Využití The movie database API

The Movie Database (TMDB) je rozsáhlá online databáze filmů, televizních seriálů a obsahu souvisejícího s filmem, kterou jsem využil k získání a zobrazení informací o filmech na stránkách. V Reactu jsem využil funkci fetch a React query (TanStack Query) k získání informací z TMDB databáze.

### Použité endpointy

* `https://api.themoviedb.org/3/movie/${category}`
    * Byl využivaný k získání informací o 20 filmových objektů a následné vytvoření slideru obsahující tyto filmy
    * Parametry: category - kategorie filmu (oblíbené, nejlépe hodnocené, filmové novinky, právě se hraje)
    * Návratová hodnota - pole 20 objektů (filmů) - JSON
* `https://api.themoviedb.org/3/genre/movie/list`
    * Byl využivaný k získání všech žánrů a následné vytvoření tlačítek, které zobrazujou filmy podle vybranných žánrů.
    * Parametry: žádné
    * Návratová hodnota - pole 19 objektů (žánrů) - JSON
* a další...

### Následné nahrávání na GitHub Pages

[Odkaz na web](https://lilianluca.github.io/movie-app/)
