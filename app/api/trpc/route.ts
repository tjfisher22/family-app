

import { appRouter } from './router';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

const handler = async (req: Request) => {
  console.log('tRPC handler called:', req.method, req.url);
  try {
    const response = await fetchRequestHandler({
      endpoint: '/api/trpc',
      req,
      router: appRouter,
      createContext: () => ({}),
    });
    // Try to log the response body if possible
    if (response && response.body) {
      const reader = response.body.getReader();
      const { value } = await reader.read();
      const bodyString = value ? new TextDecoder().decode(value) : '';
      console.log('tRPC response body:', bodyString);
    } else {
      console.log('tRPC response has no body');
    }
    return response;
  } catch (err) {
    console.error('tRPC handler error:', err);
    throw err;
  }
};

export const GET = handler;
export const POST = handler;
