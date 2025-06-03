# Projektas: Lukas Šeškauskas – Backend Atsiskaitymas

Šis projektas sukurtas kaip atsiskaitymas birželio 2–3 dienoms. Naudojamos technologijos:

- Node.js
- Express.js
- MongoDB 
- dotenv

## Backendo susikūrimas ir paleidimas
Atsidarome terminalą
Nusinaviguojame į tuščią server failą, kur bus laikomas backendas

```bash
npm init
npm npm i cors express mongo db

```
Susikuriame index.js ir nusistatome parametrus.
 ```bash
 npm run dev
```
## Frontendo susikūrimas ir paleidimas
Atsidarome terminalą
Nusinaviguojame į tuščią client failą, kur bus laikomas frontendas
```bash
npm create vite@latest
```
project name ./
framework react
variant javascript

```bash
npm i
npm i formik react-router styled-components
npm run dev
```
## Duomenų bazės susikūrimas ir paleidimas, naudojant mongodb
Atsidarome mongodb Compass,
Spaudžiame **`+ Create Database`** (kairiame viršutiniame kampe).
Laukelyje **Database Name** įrašome duomenų bazės pavadinimą
Laukelyje **Collection Name** įrašome pirmos kolekcijos pavadinimą
Spaudžiame **`Create Database`**
Susikuriame failą pavadinimu `.env`
Įsitikiname, kad projekte yra įdiegta `dotenv`:
Jeigu neįdiegta, atsidarome terminalą.

```bash
npm install dotenv
```
Įtraukiame importą index.js faile
import dotenv from 'dotenv';
dotenv.config();