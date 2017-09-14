import { StarwarsfunPage } from './app.po';

describe('starwarsfun App', () => {
  let page: StarwarsfunPage;

  beforeEach(() => {
    page = new StarwarsfunPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
