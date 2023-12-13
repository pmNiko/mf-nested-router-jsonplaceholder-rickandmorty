# Microfrontend Nested Router

> [!NOTE]
>
> - Sreenshots
> - Muestra del App Shell y los dos Microfrontend consumidos
> - Cada uno tiene su enrutador propio

<p align="center">
    <img alt="Shell" src="./images/shell.png" width="80%" />
    <img alt="Shell" src="./images/jsonplaceholder.png" width="48.5%" />
    <img alt="Shell" src="./images/rickandmorty.png" width="45%" />
</p>

---

> [!NOTE]
>
> Objetivo
>
> Utilizar lo minimo indispensable para consumir un microfrontend con su propio enrutador.

---

> [!IMPORTANT]
> Cada app contiene su propio archivo .env.local con las variables de entorno necesarias.
>
> - **Instalación de dependencias** :arrow_right: `pnpm install`
> - **App Shell** :arrow_right: `pnpm dev`
> - **jsonplaceholder** :arrow_right: `pnpm run deploy`
> - **rickandmorty** :arrow_right: `pnpm run deploy`

---

> [!TIP]
> Para mayor detalle acerca de la arquitectura microfrontend revisar el ejemplo y las wiki de los siguientes enlaces
>
> - [mfe-shell](https://github.com/pmNiko/mfe-shell)
>
> - [mfe-parcel](https://github.com/pmNiko/mfe-parcel)

---

> [!CAUTION]
> Tener en cuenta
>
> - El root path del App Shell se utiliza como punto de referencia de los subenrutadores.
> - El root path del App Shell es pasado como prop de los parcel para ser concatenados.
> - Se usa el comodin **`*`** este ayuda en el reload de la app para no perder referencia.
> - Se debe tener especial cuidado al utilizar hojas de estilo css.

---

<br/>

---

> [!NOTE]
>
> Tecnología implementada
>
> - **Vite**
> - **React TS**
> - **@originjs/vite-plugin-federation**
> - **RRD-6.4**
