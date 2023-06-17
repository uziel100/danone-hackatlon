// import { CodegenConfig } from '@graphql-codegen/cli';

// const config: CodegenConfig = {
//   schema: 'https://graphql.contentful.com/content/v1/spaces/rklsk6pfo6mx/environments/master',
//   documents: ['./**/*.graphql.ts'],
//   ignoreNoDocuments: true, // for better experience with the watcher
//   generates: {
//     './src/typesGQL/': {
//       preset: 'client',
//       // plugins: ['typescript-operations', 'typescript-react-apollo'],
//       presetConfig: {
//         gqlTagName: 'graphql'
//       }
//     }
//   }
// };

// export default config;

import { CodegenConfig } from '@graphql-codegen/cli';
// import { fetch } from 'cross-fetch';

// function customFetch(url: string, options: RequestInit): Promise<Response> {
//   options.headers = {
//     ...options.headers,
//     'Custom-Header': 'Custom-Value'
//   };

//   return fetch(url, options);
// }

const config: CodegenConfig = {
  schema: {
    'https://graphql.contentful.com/content/v1/spaces/jzm5e5q0ijrn/environments/master': {
      headers: {
        Authorization: 'Bearer hQMA4fTheFczBIW5SmRrzbWUMtdvoftdje3Pwkq0EhM'
      }
    }
  },
  documents: ['./**/*.graphql.ts'],
  ignoreNoDocuments: true,
  generates: {
    './src/typesGQL/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'graphql'
      }
    }
  }
};

export default config;
