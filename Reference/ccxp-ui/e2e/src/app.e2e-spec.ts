import { AppPage } from './app.po';
import {browser} from "protractor";
import {FOOTERTEXT, HEADERTEXT, WELCOMETEXT} from "./CCXP-constantLabels";

describe('CCXP project', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  it('should display Header text', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual(HEADERTEXT);
    browser.sleep(2000);
  });
  it('should display Welcome text',()=>{
    expect(page.getWelcomeText()).toEqual(WELCOMETEXT);
    browser.sleep(2000);
  })
  it('should display Footer text',()=>{
    expect(page.getFooterText()).toEqual(FOOTERTEXT);
    browser.sleep(2000);
  })
});
