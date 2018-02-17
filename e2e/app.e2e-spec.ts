import { TestingCIPage } from './app.po';

describe('testing-ci App', function() {
  let page: TestingCIPage;

  beforeEach(() => {
    page = new TestingCIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
