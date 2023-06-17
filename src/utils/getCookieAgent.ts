import { IncomingMessage, ServerResponse } from 'http';
import { getCookie } from 'cookies-next';

export const getCookieAgent = () => getCookie('agent');

export const getCookieAgentSSR = ({ req, res }: { req: IncomingMessage; res: ServerResponse<IncomingMessage> }) =>
  getCookie('agent', { req, res });
