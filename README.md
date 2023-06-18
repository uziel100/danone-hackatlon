# Calorie Control Project

<p align="center">
  <img src="https://images.ctfassets.net/jzm5e5q0ijrn/5YdXtdxpetwndEaJykck9H/1698da314c380776094e917ea9180f2a/danone02.svg" width="200" alt="Danone Logo" />
</p>

This project aims to help you keep track of your daily calorie limit and recommend products that best suit your nutritional goals.

## Descripción

Calorie control is essential for maintaining a healthy diet and achieving your wellness goals. With this application, you can set your maximum daily calorie intake and receive personalized recommendations for products and foods that will help you reach your goals.

## Características Principales

- User registration and logout (simulated with localStorage)
- Daily calorie limit tracking
- Product filtering by search, maximum calories, or user's calorie limit
- Product recommendations based on your goals (calorie limit)
- Tracking of your daily calorie consumption
- Product detail view
- Intuitive and user-friendly interface

## Instalación

Make sure you have Node.js and npm installed on your machine. Then, follow these steps:

```bash
node: 18.9.0
npm : 8.19.1
```

1. Clone the repository: `git clone https://github.com/uziel100/danone-hackatlon.git`
2. Navigate to the project directory: `cd danone-hackatlon`
3. Install the dependencies: `npm install`
4. Copy the `.env.template` file and rename it to `.env.local`.
5. Replace the values of the environment variables in the `.env.local` file with the corresponding values from Contentful.
6. In the `codegen.ts` file, replace the schema URL with your GraphQL server's URL (Contentful) and the token with your Contentful space token.

```bash
  schema: {
    '{URL_SCHEMA_GRAPHQL}': {
      headers: {
        Authorization: 'Bearer {TOKEN}'
      }
    }
  },
```

7. Start the project: `npm run dev`

## Commnads

- Before committing, run the linter and fix any errors:

```bash
npm run linter
```

- To generate typings for .graphql files, run the following command while the GraphQL server is running:

```bash
npm run codegen
```

- If you need real-time updates for .graphql files, run the following command:

```bash
npm run codegen:watch
```

## Stack

- CONTENTFUL (https://www.contentful.com/) - CMS
- NEXT JS 12 (https://nextjs.org/)
- REACT JS 17
- TYPESCRIPT 4.9.5
- APOLLO CLIENT 3 (https://www.apollographql.com/docs/react) - GraphQL management
- MUI V5 (https://mui.com/) - Material Design CSS framework
- FORMIK (https://formik.org/) and YUP (https://github.com/jquense/yup) for form handling and validation
- GRAPHQL CODEGEN (https://www.graphql-code-generator.com/) - Typing generator for `.graphql` files
- PRETTIER (https://prettier.io/) - Code formatter

## Decision Making

### 1. Arquitectura (Estructura por funcionalidad o modular)

A modular architecture has been chosen, where each folder represents a functionality of the application. For example, the `/Auth` folder represents the authentication functionality, and it contains components, hooks, utils, etc. that are used for this functionality.

**/components**

- **/common** - Common or composite components that can typically be reused by components in the shared folder.
- **/layouts** - Within the `layout` folder, there are purely presentational components that define the basic structure of different views/routes in the application.
- **/shared** - Folder containing agnostic components following the structure of Material UI components.
- **/styles** - Shared styles.
- **/icons** - Custom SVG icons or icons from Material UI.

**/consts**

- Inside the `consts` folder, there are `.js` files that define constants for the application, such as colors and enumerated values for certain fields.

**/utils**

- Utilities in the form of functions that are used throughout the application. Each function is placed in its own file to encourage reusability.

**/hooks**

- This folder contains hooks used in the application, such as `useFetch` or `useUserContext`. It includes only global hooks for accessing specific contexts.

**/theme**

- The `theme` folder houses files responsible for generating global styles for the application, such as colors, fonts, margin dimensions, or button styles.

**/context**

- Place here each context defined to share global state among different components in the application.

**/services**

- Global services.

**/types**

- Global types, interfaces, and classes.

**/features**

- Within this folder, there are modules or features of the application that can be considered as a general entity.

**/pages**

- Application pages following the routing of Next.js.

## Ejemplo de estructura de archivos

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
|   |   |-- Adapters/
|   |   |-- components/
|   |   |-- utils/
|   |   |-- services/
|   |   |-- models/
|   |   |-- hooks/
|   |   |-- contexts/
|   |   |-- views/
|   |-- Home/
|   |   |-- Adapters/
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

## Contribution

If you wish to contribute to the project, you can follow the steps below:

1. Fork the repository.
2. Create a branch for your new feature or fix: `git checkout -b new-feature`
3. Make your changes and commit them: `git commit -m "Description of the new feature"`
4. Push your changes to your remote repository: `git push origin new-feature`
5. Open a Pull Request in this repository to review your changes.

## License

MIT
