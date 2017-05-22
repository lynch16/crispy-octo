import { CrispyOctoPage } from './app.po';

describe('crispy-octo App', () => {
  let page: CrispyOctoPage;

  beforeEach(() => {
    page = new CrispyOctoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
