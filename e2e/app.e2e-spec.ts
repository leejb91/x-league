import { XLeaguePage } from './app.po';

describe('x-league App', () => {
  let page: XLeaguePage;

  beforeEach(() => {
    page = new XLeaguePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
