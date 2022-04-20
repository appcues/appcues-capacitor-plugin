import { registerPlugin } from '@capacitor/core';

import type { AppcuesPlugin } from './definitions';

const Appcues = registerPlugin<AppcuesPlugin>('Appcues', {
  web: () => import('./web').then(m => new m.AppcuesWeb()),
});

export * from './definitions';
export { Appcues };
