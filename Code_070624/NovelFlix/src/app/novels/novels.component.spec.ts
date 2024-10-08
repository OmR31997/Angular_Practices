import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelsComponent } from './novels.component';

describe('NovelsComponent', () => {
  let component: NovelsComponent;
  let fixture: ComponentFixture<NovelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
