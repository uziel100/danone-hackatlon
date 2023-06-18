import { CodegenConfig } from '@graphql-codegen/cli';

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
