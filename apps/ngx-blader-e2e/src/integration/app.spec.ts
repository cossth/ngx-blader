import { getGreeting } from '../support/app.po';

describe('ngx-blader', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to ngx-blader!');
  });
});
