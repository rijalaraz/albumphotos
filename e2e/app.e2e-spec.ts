import { ChristestPage } from './app.po';

describe('christest App', () => {
  let page: ChristestPage;

  beforeEach(() => {
    page = new ChristestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
