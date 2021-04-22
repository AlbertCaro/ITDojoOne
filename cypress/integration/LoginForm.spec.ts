describe('Login tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.url().should('contain', '/login')
  })

  context('LoginForm', () => {
    const fillForm = () => {
      cy.get('[data-cy=username]').type('alberto.caro@sperantus.com')
      cy.get('[data-cy=password]').type('Hola123')
      cy.get('[data-cy=button]').click()
    }

    it('should can login on valid credentials', () => {
      cy.intercept('GET', '**/api/login', { fixture: 'login/success' }).as(
        'validLogin'
      )

      fillForm()

      cy.wait('@validLogin')

      cy.url().should('not.contain', '/login')
    })

    it("should can't log in on invalid credentials", () => {
      cy.intercept('GET', '**/api/login', { statusCode: 403 }).as(
        'invalidLogin'
      )

      fillForm()

      cy.wait('@invalidLogin')

      cy.url().should('contain', '/login')
      cy.get('[data-cy=error]').should('contain', 'Invalid credentials')
    })

    it("should can't log in on invalid credentials", () => {
      cy.get('[data-cy=button]').click()

      cy.get('.v-messages__message').then((validations: any) => {
        for (let i = 0; i < validations.length; i++) {
          cy.get(validations[i]).should('contain', 'This field is required')
        }
      })
    })
  })
})
