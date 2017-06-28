import { NgrxEffectsTestPage } from './app.po';

describe('ngrx-effects-test App', () => {
  let page: NgrxEffectsTestPage;

  beforeEach(() => {
    page = new NgrxEffectsTestPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
