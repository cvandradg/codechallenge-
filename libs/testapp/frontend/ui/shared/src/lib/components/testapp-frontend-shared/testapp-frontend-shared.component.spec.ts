import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestappFrontendSharedComponent } from './testapp-frontend-shared.component';

describe('TestappFrontendSharedComponent', () => {
  let component: TestappFrontendSharedComponent;
  let fixture: ComponentFixture<TestappFrontendSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestappFrontendSharedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestappFrontendSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
