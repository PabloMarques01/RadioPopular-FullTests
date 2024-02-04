describe('Sucessful Login', () => {

  beforeEach( () => {
    // Go to the page
    cy.visit('https://www.radiopopular.pt/utilizadores/')
  })

  it('Login with valid credentials', () => {

    // Find the Email and type a valid credential
    cy.get('#emaillogin > #email').type("paulo_p.v@hotmail.com")

    // Find the Password and type a valid credential
    cy.get("#password").type("p7cgf672")

    // Find the Login button and click
    cy.get('.submitlogin').click()

    // Assertion on the URL
    cy.url().should("eq", "https://www.radiopopular.pt/utilizadores/cc_conta.php")
  })
})

describe('Unsucessful Login', () => {

  beforeEach( () => {
    // Go to the page
    cy.visit('https://www.radiopopular.pt/utilizadores/')
  })

  it('Invalid Email and invalid Password', () => {

    // Find the Email and type an invalid credential
    cy.get('#emaillogin > #email').type("tomane@hotmail.com")

    // Find the Password and type an invalid credential
    cy.get("#password").type("joker")

    // Find the Login button and click
    cy.get('.submitlogin').click()

    // Assertion on the error message
    cy.get('#erro').should("be.visible")
    .and("exist")

    // Assertion on the URL
    cy.url().should("eq", "https://www.radiopopular.pt/utilizadores/login.php")
  })

  it('Invalid Password', () => {

    // Find the Email and type a valid credential
    cy.get('#emaillogin > #email').type("paulo_p.v@hotmail.com")

    // Find the Password and type an invalid credential
    cy.get("#password").type("jafostes")

    // Find the Login button and click
    cy.get('.submitlogin').click()

    // Assertion on the error message
    cy.get('#erro').should("be.visible")
    .and("exist")

    // Assertion on the URL
    cy.url().should("eq", "https://www.radiopopular.pt/utilizadores/login.php")
  })

  it('Empty Email', () => {

    // Find the Password and type a valid credential
    cy.get("#password").type("ba5v61fv")

    // Find the Login button and click
    cy.get('.submitlogin').click()

    // Assertion on the URL
    cy.url().should("eq", "https://www.radiopopular.pt/utilizadores/")
  })

  it('Empty Password', () => {

   // Find the Email and type a valid credential
   cy.get('#emaillogin > #email').type("paulo_p.v@hotmail.com")

   // Find the Login button and click
   cy.get('.submitlogin').click()

    // Assertion on the URL
    cy.url().should("eq", "https://www.radiopopular.pt/utilizadores/")
  })

  it('Empty spaces', () => {

    // Find the Login button and click
    cy.get('.submitlogin').click()

    // Assertion on the URL
    cy.url().should("eq", "https://www.radiopopular.pt/utilizadores/")
  })

  it('UpperCases (Email and Password)', () => {

    // Find the Email and type a valid credential in uppercases
    cy.get('#emaillogin > #email').type("PAULO_P.V@HOTMAIL.COM")

    // Find the Password and type a valid credential in uppercases
    cy.get("#password").type("BA5V61FV")

    // Find the Login button and click
    cy.get('.submitlogin').click()

    // Assertion on the URL
    cy.url().should("eq", "https://www.radiopopular.pt/utilizadores/")
  })

  it('Valid credentials with blank space behind', () => {

    // Find the Email and type a valid credential with a blank space behind
    cy.get('#emaillogin > #email').type(" paulo_p.v@hotmail.com")

    // Find the Password and type a valid credential with a blank space behind
    cy.get("#password").type(" ba5v61fv")

    // Find the Login button and click
    cy.get('.submitlogin').click()

    // Assertion on the error message
    

    // Assertion on the URL
    cy.url().should("eq", "https://www.radiopopular.pt/utilizadores/")
  })

  it('Valid credentials with blank space next to', () => {

   // Find the Email and type a valid credential with a blank space next to
   cy.get('#emaillogin > #email').type("paulo_p.v@hotmail.com ")

   // Find the Password and type a valid credential with a blank space to
   cy.get("#password").type("ba5v61fv ")

   // Find the Login button and click
   cy.get('.submitlogin').click()

    // Assertion on the URL
    cy.url().should("eq", "https://www.radiopopular.pt/utilizadores/")
  })

  it('Valid credentials with a blank space in the middle', () => {

   // Find the Email and type a valid credential with a blank space in the middle
   cy.get('#emaillogin > #email').type("paulo_ p.v@hotmail.com")

   // Find the Password and type a valid credential with a blank space in the middle
   cy.get("#password").type("ba5v 61fv")

   // Find the Login button and click
   cy.get('.submitlogin').click()

    // Assertion on the URL
    cy.url().should("eq", "https://www.radiopopular.pt/utilizadores/")
  })

  it('Invalid Username', () => {

    // Find the Email and type a valid credential
    cy.get('#emaillogin > #email').type("paulo_p.v@hotmail.com")

    // Find the Password and type a valid credential
   cy.get("#password").type("ba5v 61fv")

   // Find the Login button and click
   cy.get('.submitlogin').click()

   // Assertion on the error message
    cy.get('#erro').should("be.visible")
    .and("exist")

    // Assertion on the URL
    cy.url().should("eq", "https://www.radiopopular.pt/utilizadores/login.php")
  })
})

describe('Forgot Your Password', () => {

  beforeEach ( () => {
    // Go to the website
    cy.visit("https://www.radiopopular.pt/utilizadores/")
  })

  it('Reset Password from a valid Email', () => {

    // Click in "Esqueceu a sua palavra-passe? Clique aqui."
    cy.get('.recpass').click()

    // Find the field "Email" and type a valid Email
    cy.get('#logincaixa > :nth-child(1) > #recEmail').type("paulo_p.v@hotmail.com")

    // Click in "Recuperar"
    cy.get(':nth-child(2) > #recuperar').click()

    // Assertion of the message of sucessful Password reset
    cy.get('#erro > span').should('be.visible')
    .and('exist')
  })

it('Let the field Email empty', () => {

  // Click in "Esqueceu a sua palavra-passe? Clique aqui."
    cy.get('.recpass').click()

  // Click in "Recuperar"
    cy.get(':nth-child(2) > #recuperar').click()

  // Assertion of the error signal
  cy.get('#erro').should('be.visible')
  .and('exist')
})

it('Type a false Email', () => {

  // Click in "Esqueceu a sua palavra-passe? Clique aqui."
  cy.get('.recpass').click()

  // Find the field "Email" and type an invalid Email
  cy.get('#logincaixa > :nth-child(1) > #recEmail').type('tonydelfuego@hotmail.com')

  // Click in "Recuperar"
  cy.get(':nth-child(2) > #recuperar').click()

  // Assertion of the error message
  cy.get('#erro').should('be.visible')
  .and('exist')

  // Assertion comprovating that the user doesn't go to another page without typing a valid Username
  cy.url().should('eq','https://www.radiopopular.pt/utilizadores/recuperacao_password.php')
})
}) 