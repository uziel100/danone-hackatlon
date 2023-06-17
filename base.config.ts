/* eslint-disable max-len */
interface BaseConfig {
  defaultTitle: string;
  httpsUri: string;
  urlFetchSchema: string;
  contentfulDeliveryToken: string;
}

const baseConfig: BaseConfig = {
  defaultTitle: 'Danone',
  contentfulDeliveryToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN || '',
  httpsUri:
    process.env.NODE_ENV === 'development'
      ? `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}`
      : `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}`,
  urlFetchSchema: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}/schemas`
};
export default baseConfig;
