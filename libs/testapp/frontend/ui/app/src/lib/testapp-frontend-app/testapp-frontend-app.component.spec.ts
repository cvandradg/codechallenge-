import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestappFrontendAppComponent } from './testapp-frontend-app.component';

describe('TestappFrontendAppComponent', () => {
  let component: TestappFrontendAppComponent;
  let fixture: ComponentFixture<TestappFrontendAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestappFrontendAppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestappFrontendAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
