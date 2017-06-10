import { Ngtranslate2Page } from './app.po';

describe('ngtranslate2 App', () => {
  let page: Ngtranslate2Page;

  beforeEach(() => {
    page = new Ngtranslate2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
