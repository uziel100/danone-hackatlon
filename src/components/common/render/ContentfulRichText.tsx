import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const ContentfulRichText = ({ content }: { content: any }) => <div>{documentToReactComponents(content)}</div>;

export default ContentfulRichText;
