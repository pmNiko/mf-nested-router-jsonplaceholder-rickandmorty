# Microfrontend Nested Router

> [!NOTE]
>
> **Sreenshots**
>
> - Muestra del App Shell y los dos Microfrontend consumidos
> - Cada uno tiene su enrutador propio

<p align="center">
    <img alt="Shell" src="./images/shell.png" width="80%" />
    <img alt="Shell" src="./images/jsonplaceholder.png" width="48.5%" />
    <img alt="Shell" src="./images/rickandmorty.png" width="45%" />
</p>

<br>

> [!NOTE]
>
> **Objetivo**
>
> - Utilizar lo minimo indispensable para consumir un microfrontend con su propio enrutador.

<br>

> [!IMPORTANT]
>
> **Dependencias**
>
> - _Dependencias_ :arrow_right: `pnpm install`
> - _App Shell_ :arrow_right: `pnpm dev`
> - _jsonplaceholder_ :arrow_right: `pnpm run deploy`
> - _rickandmorty_ :arrow_right: `pnpm run deploy`

<br>

> [!TIP]
>
> **Recursos externos**
>
> - [mfe-shell](https://github.com/pmNiko/mfe-shell)
>
> - [mfe-parcel](https://github.com/pmNiko/mfe-parcel)

<br>

> [!CAUTION]
>
> **Tener en cuenta**
>
> - Cada app contiene su propio archivo .env.local con las variables de entorno necesarias.
> - El root path del App Shell se utiliza como punto de referencia de los subenrutadores.
> - El root path del App Shell es pasado como prop de los parcel para ser concatenados.
> - Se usa el comodin **`*`** este ayuda en el reload de la app para no perder referencia.
> - Se debe tener especial cuidado al utilizar hojas de estilo css.

<br>

> [!NOTE]
>
> **Tecnología implementada**
>
> - _Vite_
> - _React TS_
> - _@originjs/vite-plugin-federation_
> - _RRD 6.4_
