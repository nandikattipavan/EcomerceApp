import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductImageDailogComponent } from './show-product-image-dailog.component';

describe('ShowProductImageDailogComponent', () => {
  let component: ShowProductImageDailogComponent;
  let fixture: ComponentFixture<ShowProductImageDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProductImageDailogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProductImageDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
