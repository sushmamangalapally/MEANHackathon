import { DressAppPage } from './app.po';

describe('dress-app App', () => {
  let page: DressAppPage;

  beforeEach(() => {
    page = new DressAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
