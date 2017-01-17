import { NeuroDesigerAppPage } from './app.po';

describe('neuro-desiger-app App', function() {
  let page: NeuroDesigerAppPage;

  beforeEach(() => {
    page = new NeuroDesigerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
