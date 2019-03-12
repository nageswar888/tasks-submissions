

import { TestBed, async } from '@angular/core/testing';
import {PaginationComponent} from "./pagination.component";
import {DECLARATIONS, IMPORTS, SCHEMAS} from "../dependencies-spec";

describe('PaginationComponent', () => {
  let component: PaginationComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[IMPORTS],
      declarations: [
        DECLARATIONS
      ],
      schemas:[SCHEMAS]
    }).compileComponents();
    const fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    component.page=1;
    component.count=50;
    component.perPage=3;
    component.pagesToShow=3;
    /*component.goPrev=true;
    component.goNext=true;
    component.goPage=2;*/
  }));
  it('should create the PaginationComponent', async(() => {
    expect(component).toBeTruthy();
  }));
  it('should get get minimum number of records',()=>{
    component.getMin();
  })
  it('should get maximum page count',()=>{
    component.getMax();
  })
  it('should get maximum page count of less than maximum count',()=>{
    component.count=1;
    component.getMax();
  })
  it('should get current page',()=>{
    component.onPage(2);
  })
  it('should get previous page',()=>{
    component.onPrev();
  })
  it('should get next page',()=>{
    component.onNext();
  })
  it('should total pages count',()=>{
    component.totalPages();
  })
  it('should get last page value',()=>{
    component.lastPage();
  })
  it('should get pages',()=>{
    component.getPages();
  })
});
