/// <reference types="cypress" />

describe('Auto Detect Language:', () => {
  // setup page objects
  const pageObjects = {
    title: '[title="Google Translate"]',
    detectLanguage: '[id="i11"]',
    detectedLang: '[jsname="V67aGc"]:nth(7)',
    translatedLang: '[jsname="ksKsZd"]:nth(4)',
    inputEle: '[aria-label="Source text"]',
  };

  before(() => {});

  beforeEach(() => {
    // visit the page
    cy.visit('https://translate.google.com/?sl=auto&tl=es&op=translate');
  });

  it('check empty state of detected language', () => {
    cy.get(pageObjects.detectLanguage).should('have.text', 'Detect language');
  });

  it('works using hardcoded inputs', () => {
    cy.get(pageObjects.inputEle).type('hello world');
    cy.get(pageObjects.detectedLang);
    cy.get(pageObjects.inputEle).type('como estas');
    cy.get(pageObjects.detectedLang).should('have.text', 'Spanish - Detected');
    cy.get('[aria-label="Clear source text"]').click();
    cy.get(pageObjects.inputEle).type('नमस्कार');
    cy.get(pageObjects.detectedLang).should('have.text', 'Hindi - Detected');
  });

  it('uses a for loop to test multiple languages', () => {
    // Using a loop
    const input = {
      record: [
        { text: 'hello world', language: 'English' },
        { text: 'como estas', language: 'Spanish' },
        { text: 'नमस्कार', language: 'Hindi' },
      ],
    };

    for (const { text, language } of input.record) {
      cy.get(pageObjects.inputEle).type(text);
      cy.get(pageObjects.detectedLang).should('have.text', `${language} - Detected`);
      cy.get('[aria-label="Clear source text"]').click();
    }
  });

  it('hit endpoint for json payload and then test with each language', () => {
    // Hit URL and get the json payload
    cy.request('https://api.jsonbin.io/v3/b/67a8329bad19ca34f8fc9ae7').then(response => {
      const data = response.body;
      cy.log('API Response:', JSON.stringify(data));
      // Parse through each record in the payload
      data.record.forEach(({ text, language }) => {
        cy.log(`Testing: "${text}" (Expected: ${language})`);
        // Type the text
        cy.get(pageObjects.inputEle).clear().type(text);
        // Wait for detection and verify
        cy.get(pageObjects.detectedLang).should('be.visible').and('contain.text', language);
        // Clear for next test
        cy.get('[aria-label="Clear source text"]').click();
      });
    });
  });
});
