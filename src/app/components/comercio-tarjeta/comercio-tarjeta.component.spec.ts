import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercioTarjetaComponent } from './comercio-tarjeta.component';

describe('ComercioTarjetaComponent', () => {
  let component: ComercioTarjetaComponent;
  let fixture: ComponentFixture<ComercioTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComercioTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComercioTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
