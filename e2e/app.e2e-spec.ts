import { AwesomeTaskManagerPage } from './app.po';

describe('awesome-task-manager App', () => {
  let page: AwesomeTaskManagerPage;

  beforeEach(() => {
    page = new AwesomeTaskManagerPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
