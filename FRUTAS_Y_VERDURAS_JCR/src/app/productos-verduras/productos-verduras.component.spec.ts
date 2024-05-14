import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosVerdurasComponent } from './productos-verduras.component';

describe('ProductosVerdurasComponent', () => {
  let component: ProductosVerdurasComponent;
  let fixture: ComponentFixture<ProductosVerdurasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductosVerdurasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductosVerdurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
