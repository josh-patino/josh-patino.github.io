import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaImageComponent } from './nasa-image.component';

describe('NasaImageComponent', () => {
  let component: NasaImageComponent;
  let fixture: ComponentFixture<NasaImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasaImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NasaImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
