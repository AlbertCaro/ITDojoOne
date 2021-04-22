import { addDecorator } from '~/.nuxt-storybook/storybook/entry'

export * from '~~/.nuxt-storybook/storybook/preview.js'

import { initializeWorker, mswDecorator } from 'msw-storybook-addon'

initializeWorker()
addDecorator(mswDecorator)

export const decorators = [
  (story) => ({
    components: { story },
    template: '<v-app ><v-container><story /></v-container></v-app>',
  }),
]
