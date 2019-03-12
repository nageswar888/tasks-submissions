import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
   return element(by.className('ds-l-lg-col--6 ds-l-xl-col--6 ds-l-md-col--6 ds-l-sm-col--6 ds-l-col--10 ds-u-float--left')).getText();
  }

  getWelcomeText(){
   return element(by.className('ds-l-col--12 ds-h1 ds-u-lg-text-align--center')).getText();
  }

  getFooterText(){
    return element(by.className('ds-l-lg-col--4 ds-l-xl-col--4 ds-l-md-col--4 ds-l-sm-col--8 ds-u-text-align--center')).getText();

  }
}
