import {TestBed, async, tick, fakeAsync} from '@angular/core/testing';
import {DECLARATIONS, IMPORTS, SCHEMAS} from "../dependencies-spec";
import {CardComponent} from "./card.component";

describe('CardComponent', () => {
  let component: CardComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[IMPORTS],
      declarations: [
        DECLARATIONS
      ],
      schemas:[SCHEMAS]
    }).compileComponents();
    const fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  }));
  it('should create the CardComponent', async(() => {
    expect(component).toBeTruthy();
  }));
  it('should Set the search results to cards',fakeAsync(()=>{
    let CardComponentFixture = TestBed.createComponent(CardComponent);
     CardComponentFixture.nativeElement.value = [{},{}];
    let event = new Event('card-component');
    CardComponentFixture.nativeElement.dispatchEvent(event);
    CardComponentFixture.detectChanges();
    tick();
    CardComponentFixture.detectChanges();
    CardComponentFixture.componentInstance.data=[{},{}];
  }))
});
