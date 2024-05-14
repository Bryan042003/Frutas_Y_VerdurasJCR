import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosFrutasComponent } from './productos-frutas.component';

describe('ProductosFrutasComponent', () => {
  let component: ProductosFrutasComponent;
  let fixture: ComponentFixture<ProductosFrutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductosFrutasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductosFrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
