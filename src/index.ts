import type { App } from 'vue';

import XNButton from './button';

export type * from './button';
export default {
	install: (app: App) => {
		app.use(XNButton);
	}
};
