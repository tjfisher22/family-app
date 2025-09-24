import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();


export const appRouter = t.router({
  hello: t.procedure
    .query(() => {
      return {
        greeting: 'Hello, world!',
      };
    }),
});

export type AppRouter = typeof appRouter;
