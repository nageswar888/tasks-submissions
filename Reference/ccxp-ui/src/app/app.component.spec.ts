import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DECLARATIONS, IMPORTS, SCHEMAS, PROVIDERS } from "./common/dependencies-spec";


describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ IMPORTS ],
      declarations: [ DECLARATIONS ],
      providers: [ PROVIDERS ],
      schemas: [SCHEMAS ]
    }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));
  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

});
