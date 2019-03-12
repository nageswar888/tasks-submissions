import {inject, TestBed} from "@angular/core/testing";
import {QueryApi} from "./QueryApi";
import {HttpClientModule} from "@angular/common/http";


describe('QueryApi', () =>{
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [],
      providers: [QueryApi]
    })
  })
  describe('Api()', () =>{
    it('should call the Request',
      inject([QueryApi], (api) => {
        api.doGet('String', {});
        api.doPost('String', {});
        api.doDelete('String', {});
        api.doPut('String', {});
        api.doPatch('String', {});
        api.doOptions('String', {})
      }));
  })
});
