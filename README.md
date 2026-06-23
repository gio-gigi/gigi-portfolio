# Portafolio de Giovanna

Portafolio profesional construido con Next.js (App Router), React y TypeScript.
El objetivo del proyecto es presentar experiencia, stack tecnico, proyectos y medios de contacto en una interfaz moderna, responsiva y bilingue (es/en).

## Demo local

Una vez levantado el proyecto, abre:

- http://localhost:3000

## Stack

- Next.js 16
- React 19
- TypeScript 5
- CSS (estilos globales y por componentes)
- Framer Motion (animaciones)
- Lucide React (iconos)

## Arquitectura

El proyecto sigue una estructura por dominios (features) y componentes compartidos:

```text
gigi-portfolio/
|-- public/
|   `-- images/
`-- src/
	|-- app/                    # Entrypoint de App Router (layout + home)
	|-- components/
	|   |-- layout/             # NavBar, Footer
	|   |-- providers/          # Providers globales (ej. i18n)
	|   |-- shared/             # Componentes reutilizables entre features
	|   `-- ui/                 # Piezas UI base (badges, stickers, etc.)
	|-- features/
	|   |-- home/               # Hero, about, skills
	|   |-- experience/         # Experiencia laboral y cursos
	|   |-- projects/           # Proyectos destacados
	|   `-- contact/            # Seccion de contacto
	|-- lib/
	|   |-- constants.ts        # Constantes de aplicacion
	|   |-- utils.ts            # Utilidades compartidas
	|   `-- i18n/               # Traducciones y tipos de locale
	|-- styles/                 # Estilos globales extra
	`-- types/                  # Tipos globales
```

## Flujo de la pagina principal

La home se compone en este orden:

1. Hero
2. About
3. Skills
4. Experience
5. Projects
6. Contact

## Requisitos

- Node.js 20+
- pnpm (recomendado)

Tambien funciona con npm, yarn o bun.

## Como levantar el proyecto

1. Clona el repositorio.
2. Instala dependencias.
3. Inicia el servidor de desarrollo.

Con pnpm:

```bash
pnpm install
pnpm dev
```

Con npm:

```bash
npm install
npm run dev
```

## Scripts disponibles

- `pnpm dev`: inicia desarrollo con Webpack.
- `pnpm dev:turbo`: inicia desarrollo con Turbopack.
- `pnpm build`: genera build de produccion.
- `pnpm start`: levanta la build en modo produccion.
- `pnpm lint`: ejecuta ESLint.
- `pnpm lint:fix`: corrige problemas de lint automaticamente.
- `pnpm format`: formatea con Prettier.
- `pnpm format:check`: valida formato sin modificar archivos.

## Internacionalizacion

El proyecto soporta dos idiomas:

- `es` (Espanol)
- `en` (English)

Las traducciones viven en `src/lib/i18n/translations.ts`.

## Despliegue

Recomendado: Vercel.

Pasos basicos:

1. Conecta este repositorio en Vercel.
2. Ejecuta build con `pnpm build`.
3. Publica.

Tambien puedes desplegar en cualquier plataforma compatible con Next.js.

## Autor

Giovanna Chávez - Software Engineer
