import { appRouter } from './router';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

export const runtime = 'nodejs';

console.log('tRPC route handler loaded');

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => ({}),
  });

export { handler as GET, handler as POST };
export default handler;