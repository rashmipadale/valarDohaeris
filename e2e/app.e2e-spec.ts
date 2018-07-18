import { ValarDPage } from './app.po';

describe('valar-d App', () => {
  let page: ValarDPage;

  beforeEach(() => {
    page = new ValarDPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
