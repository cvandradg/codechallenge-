import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestappFrontendLoginComponent } from './testapp-frontend-login.component';

describe('TestappFrontendLoginComponent', () => {
  let component: TestappFrontendLoginComponent;
  let fixture: ComponentFixture<TestappFrontendLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestappFrontendLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestappFrontendLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
