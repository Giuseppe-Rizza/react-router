# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


ESERCIZIO

Creiamo il frontend del nostro Blog e le sue pagine:
- Partiamo installando React Router DOM: npm
- Definiamo almeno 3 pagine: una homepage, una pagina “chi siamo” e una pagina con la lista dei post
- Implementiamo una navbar in comune a tutte le pagine per poter navigare tra loro


BONUS

- Centralizzare la Navbar grazie a un Layout
- Gestire la classe active


ESERCIZIO (parte 2)

Completiamo il nostro routing con l’aggiunta delle pagine di dettaglio:
- Aggiungiamo i link alla lista dei post
- Facciamo quindi in modo di raggiungere la pagina di dettaglio del singolo post


BONUS

- Proviamo a inserire nella pagina di dettaglio una navigazione che ci consenta di andare al post precedente e a quello successivo
- Tutte le cose in più che abbiamo fatto nel LC del mattino