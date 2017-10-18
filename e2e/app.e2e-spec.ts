import { Ng2SandboxPage } from './app.po';

describe('ng2-sandbox App', () => {
  let page: Ng2SandboxPage;

  beforeEach(() => {
    page = new Ng2SandboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
