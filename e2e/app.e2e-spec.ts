import { AngularWebOnePage } from './app.po';

describe('angular-web-one App', function() {
  let page: AngularWebOnePage;

  beforeEach(() => {
    page = new AngularWebOnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
