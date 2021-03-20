/// <reference types = "cypress" />

describe('My Task', () => {
  it('Verify Sign Up Feature', () => {
    cy.visit('https://www.aceinvoice.com/') //opens the url
    cy.get('#navbarSupportedContent > ul > li:nth-child(6) > a').click()
  })

  it('Putting In Mail And Password', () => {
    cy.visit('https://app.aceinvoice.com/sign_up')
    cy.get('#new_user > div > div.form-controls > div > div > input').type(
      'fhhhhdkkkkkahhfdeedfffjjfddhhddd@example.com'
    ) // putting the email
    cy.get('#new_user > div > div.form-buttons.d-inline-flex > input').click() //clicking on get started
    cy.wait(500)
    cy.get('#new_user > div > div.form-controls > div > div > input').type(
      'welcome1234!'
    )
    cy.get('#new_user > div > div.form-buttons.mt-3 > input').click() //Insertion of password
  })

  it('Basic Details', () => {
    cy.get(
      'body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.bg-white.floating-box.page-content.form-page.onboarding-info.p-5 > form > div:nth-child(2) > div:nth-child(1) > div > input'
    ).type('Oliver') //First Name

    cy.get(
      'body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.bg-white.floating-box.page-content.form-page.onboarding-info.p-5 > form > div:nth-child(2) > div:nth-child(2) > div > input'
    ).type('Smith') //Last Name

    cy.get(
      'body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.bg-white.floating-box.page-content.form-page.onboarding-info.p-5 > form > div:nth-child(3) > div > div > select'
    ).select('(GMT+05:30) New Delhi') //Select TimeZone

    cy.get(
      'body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.bg-white.floating-box.page-content.form-page.onboarding-info.p-5 > form > div:nth-child(4) > div > div > div > div:nth-child(2) > div > label > div.control__indicator'
    ).click() //select dd/mm/yyyy format

    cy.get(
      'body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.bg-white.floating-box.page-content.form-page.onboarding-info.p-5 > form > div:nth-child(5) > div > div > label > div.control__indicator'
    ).click() //click first checkbox

    cy.get(
      'body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.bg-white.floating-box.page-content.form-page.onboarding-info.p-5 > form > div:nth-child(6) > div > div > label > div.control__indicator'
    ).click() //click second checkbox

    cy.get(
      'body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.bg-white.floating-box.page-content.form-page.onboarding-info.p-5 > form > div.form-actions.pb-0 > input'
    ).click() //click continue
  })
  it('Company name', () => {
    cy.get(
      'body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.bg-white.floating-box.page-content.p-5 > div > form > div.row > div > div.field-value > input'
    ).type('yatharthvij Private Limited') //typing Company name

    cy.get(
      'body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.bg-white.floating-box.page-content.p-5 > div > form > div.form-actions.pb-0.mb-0 > input'
    ).click() // clicking continue
  })

  it('final details', () => {
    cy.get(
      'body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.page-content.bg-white.floating-box.form-page.col-md-12.add-client-page.p-5 > form > div.form-actions.pb-0 > a'
    ).click() //clicking skip this step

    cy.get(
      'body > div:nth-child(3) > div > div.page-wrap > div > div > div > div > div > div > div > div > h4'
    ).contains("Congratulations, you're all set!") //Assertion for Congratulations, you're all set!

    cy.get(
      'body > div:nth-child(3) > div > div.page-wrap > div > div > div > div > div > div > button'
    ).click() // clicking continue
  })

  it('Adding Client', () => {
    cy.get(
      'body > div:nth-child(3) > div > div.header > div.container > div:nth-child(2) > div > ul > li:nth-child(4) > a'
    ).click() //clicking on clients

    cy.get(
      'body > div:nth-child(3) > div > div.page-wrap > div > div > div > div > div > div > div > div > a'
    ).click() //clicking on add clients

    cy.get(
      'body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.page-content.bg-white.floating-box.form-page.col-md-12.add-client-page.p-5 > form > div:nth-child(1) > div:nth-child(1) > div > input'
    ).type('Trix Inc') //adding client as Trix Inc

    cy.get(
      'body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.page-content.bg-white.floating-box.form-page.col-md-12.add-client-page.p-5 > form > div.form-actions.pb-0 > input'
    ).click()
  })

  it('Adding New Project', () => {
    cy.wait(2000)

    cy.get(
      'body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.page-header > div > h1'
    ).contains('Add New Project') //asserting that it contains add new project

    cy.get(
      'body > div:nth-child(3) > div > div.page-wrap > div > div > div > div:nth-child(2) > div.bg-white.floating-box.page-content.form-page.p-5.mb-4 > div:nth-child(2) > div > div > input'
    ).type('Trix Web Development') //typing project name

    cy.get(
      'body > div:nth-child(3) > div > div.page-wrap > div > div > div > div:nth-child(2) > div.bg-white.floating-box.page-content.form-page.p-5.mb-4 > div:nth-child(3) > div > div > select'
    ).select('Hourly project rate') //selecting billing method

    cy.get(
      'body > div:nth-child(3) > div > div.page-wrap > div > div > div > div:nth-child(2) > div.bg-white.floating-box.page-content.form-page.p-5.mb-4 > div:nth-child(3) > div:nth-child(2) > div > div > input'
    )
      .clear()
      .type('20') //selecting hourly project rate
  })

  it('submit button', () => {
    cy.get(
      'body > div:nth-child(3) > div > div.page-wrap > div > div > div > div:nth-child(2) > div.form-actions > button'
    ).click({
      force: true,
    })
  })
  it('assert the final values', () => {
    cy.get(
      '#info > div.px-5.pt-5 > div.form-row.project-info.text-break > div:nth-child(2) > div.field-value'
    ).contains('Trix Web Development')

    cy.get(
      '#info > div.px-5.pt-5 > div.form-row.project-info.text-break > div:nth-child(3) > div.field-value'
    ).contains('Hourly Project Rate')

    cy.get(
      '#info > div.px-5.pt-5 > div:nth-child(2) > div:nth-child(3) > div.field-value.white-space-pre-wrap.text-break > span'
    ).contains('No rounding')

    cy.get(
      '#info > div.form-group.data-section.team-members-data > div.field-value > div > table > tbody > tr > td:nth-child(1) > span.name.ml-3'
    ).contains('Oliver Smith')
  })
})
