<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://cdn.blackpixel.mx/RO-En6qG5n/RocketPixel.svg" width="200" alt="Nest Logo" /></a>
</p>

# Pixeland Admin

## Descripción del proyecto

Consola administrativa para la aplicacion Pixeland, la consola permitirá a los administradores llevar un seguimiento detallado de los empleados y sus avances, y otorgar recompensas por sus logros. Con esta herramienta, se busca mejorar la motivación y el compromiso de los empleados, y aumentar la eficiencia de la empresa en general.

## Instalación

1. Versiones de Node y NPM

```bash
node: 18.9.0
npm : 8.19.1
```

2. Clonar proyecto
3. Instalar dependencias

```bash
npm install
```

4. Tener corriendo el servidor de graphql (backend)

5. Iniciar proyecto

```bash
npm run dev
```

## Comandos

- Antes de enviar un commit ejecutar el linter y corregir los errores

```bash
npm run linter
```

- Para generar el tipado para los archivos .graphql se debe tener corriendo el servidor de graphql y ejecutar el siguiente comando

```bash
npm run codegen
```

- Si necesitas tener en tiempo real los cambios en los archivos .graphql ejecutar el siguiente comando

```bash
npm run codegen:watch
```

- Para correr los test

```bash
npm run test
```

- Para generar el coverage de los test

```bash
npm run test:coverage
```

## Tecnologías utilizadas

- NEXT JS 12 (https://nextjs.org/)
- REACT JS 17
- TYPESCRIPT 4.9.5
- APOLLO CLIENT 3 (https://www.apollographql.com/docs/react) - Manejo de graphql
- MUI V5 (https://mui.com/) - framework de css de material design
- DATE-FNS (https://date-fns.org/) - manejo de fechas
- FORMIK (https://formik.org/) y YUP (https://github.com/jquense/yup) para el manejo de formularios y validaciones
- GRAPHQL CODEGEN (https://www.graphql-code-generator.com/) - Generador de tipado para los archivos .graphql
- REACT DROPZONE (https://react-dropzone.js.org/) - Manejo de drag and drop
- JEST (https://jestjs.io/) - Framework de testing
- REACT TESTING LIBRARY (https://testing-library.com/docs/react-testing-library/intro/) - Librería de testing
- PRETTIER (https://prettier.io/) - Formateador de código

## Estructura de carpetas (Estructura por funcionalidad o modular)

**/components**

--- **/common —** Componentes comunes o compuestos que normalmente podrian reutilizar los componentes de la carpeta shared

--- **/layouts —** Dentro de la carpeta **layout** albergo componentes puramente presentacionales que pintan la estructura básica de las distintas vistas / rutas de la aplicación.

--- **/shared —** Carpeta de componetes agnosticos siguiente la estructura de componentes de material UI

--- **/styles —** estilos compartidos

--- **/icons** — Iconos personalizados svg o icons del propio material ui

**/consts —** Dentro de `const`se encuentran archivos `.js` que definen las constantes de nuestra aplicación, como pueden ser colores, enumerados para determinados campos

**/utils —** quí se encuentran utilidades en forma de función que uso a lo largo de la aplicación.

Cada función se encuentra dentro de su propio archivo (tiendo a evitar en esta carpeta tener archivos que exporten varias funciones) y encapsula determinada lógica de cara a reutilizarla

**/hooks —** Esta carpeta también es autodescriptiva ya que en ella se encontrarán los *hooks* 
de nuestra aplicación, por ejemplo, `useFetch`
 o `useUserContext` , unicamente los hooks globales
 para recuperar determinados contextos.

**/theme —** La carpeta `theme`se encarga de albergar los archivos encargados de generar los estilos globales de la aplicación, como colores, fuentes, dimensiones de los márgenes o estilos de los botones.

**/context —** Colocar aquí cada uno de los contextos que defina para compartir estado global entre los distintos componentes de la aplicación.

**/servicios —** Servicios globales

**/types —** Tipo, interfaces y clases globales

**/features —** Dentro de esta carpeta iran los módulos de la aplicación o características que se puedan pensar en una entidad general

**/pages —** Paginas de la aplicación siguiendo el routing de next js

# Ejemplo de estructura de archivos

```
|-- components/
|   |-- Common/
|   |   |-- Button/
|   |   |   | -- ButtonSave.jsx
|   |   |   | -- ButtonLoading.jsx
|   |   |   | -- index.js
|   |   |-- Input/
|   |   |   | -- InputFormatNumber.jsx
|   |   |   | -- index.js
|   |-- index.js
|   |-- Layout/
|   |   |-- LayoutAuth/
|   |   |   | -- LayoutAuth.jsx
|   |   |   | -- styles.module.css
|   |   |-- LayoutMain/
|   |   |   | -- LayoutMain.jsx
|   |   |   | -- styles.module.css
|   |-- index.js
|   |-- Shared/
|   |   |-- Button/
|   |   |   | -- BpButton.jsx
|   |   |   | -- BpChip.jsx
|   |   |   | -- styles.module.css
|   |   |   | -- index.js
|   |   |-- Input/
|   |   |   | -- BpTextField.jsx
|   |   |   | -- index.js
|   |-- index.js
|   |-- Styles/
|   |   | -- globalStyles.module.css
|   |   | -- styles.jsx
|   |-- Icons/
|   |   | -- IconSaveChanges.jsx
|   |   | -- IconDelete.jsx
|   |   | -- index.js
|-- consts/
|   | -- sessionConst.js
|-- utils/
|   |-- some-common-util/
|   |   |-- index.js/
|   |   |-- index.test.js
|   |-- formatNumber.js
|   |-- formatDateCommon.js
|   |-- index.js
|-- hooks/
|   |-- useDebounce.js
|   |-- fetchQuery.js
|   |-- index.js
|-- theme/
|   |-- light.js
|   |-- dark.js
|   |-- utils.js
|   |-- index.js
|-- contexts/
|   |-- UserContext/
|   |   |-- UserContext.js
|   |-- ThemeContext.js
|-- services/
|   |-- session/
|   |   |-- agentService.js
|   |   |-- nonceService.js
|   |-- otherService.js
|   |-- index.js
|-- features/
|   |-- Session/
|   |   |-- components/
|   |   |-- utils/
|   |   |-- services/
|   |   |-- models/
|   |   |-- hooks/
|   |   |-- contexts/
|   |   |-- views/
|   |-- Home/
|   |   |-- components/
|   |   |-- utils/
|   |   |-- models/
|   |   |-- services/
|   |   |-- hooks/
|   |   |-- contexts/
|   |   |-- views/
|   |-- index.js
|-- types/
|-- typesGQL/
|-- pages/
```
