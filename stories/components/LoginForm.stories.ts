import { rest } from 'msw'
import LoginForm from '~/components/LoginForm.vue'
import SuccessLogin from '~/cypress/fixtures/login/success.json'

export default {
  title: 'Components/LoginForm',
  component: LoginForm,

  parameters: {
    msw: [
      rest.get('**/api/login', (req, res, context) => {
        res(context.json(SuccessLogin))
      }),
    ],
  },
}

const Template = (args: any, { argTypes }: any) => ({
  component: LoginForm,
  props: Object.keys(argTypes),
  template: '<LoginForm/>',
})

export const Default = Template.bind({})
