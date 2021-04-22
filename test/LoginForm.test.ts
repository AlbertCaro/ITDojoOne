import { mount } from '@vue/test-utils'
import { expect } from '@jest/globals'
import Vuetify from 'vuetify'
import LoginForm from '~/components/LoginForm.vue'

const authMock = {
  loginWith: jest.fn(),
}

const refsMock = {
  form: {},
}

describe('LoginForm', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(LoginForm, {
      mocks: {
        $auth: authMock,
        $refs: refsMock,
      },
      vuetify: new Vuetify(),
    })
    authMock.loginWith.mockClear()
  })

  it('should be rendered', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('should can log in with valid password', async () => {
    authMock.loginWith.mockResolvedValue({})
    wrapper.vm.validForm = true

    await wrapper.vm.login()

    expect(authMock.loginWith).toBeCalled()
  })

  it("should can't log in without valid form", async () => {
    wrapper.vm.validForm = false

    await wrapper.vm.login()

    expect(authMock.loginWith).toBeCalledTimes(0)
  })

  it("should can't login without valid credentials", async () => {
    authMock.loginWith.mockRejectedValue({})
    wrapper.vm.validForm = true

    await wrapper.vm.login()

    expect(authMock.loginWith).toBeCalled()
    expect(wrapper.vm.error).toBe('Invalid credentials')
  })
})
