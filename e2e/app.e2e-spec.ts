import { CalendarPage } from './app.po';

describe('calendar App', () => {
  let page: CalendarPage;

  beforeEach(() => {
    page = new CalendarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
