import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestappFrontendLoginComponent } from './testapp-frontend-login.component';
import { MODULES } from '@testapp/shared/exports/export-modules';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TestappFrontendLoginComponent', () => {
  let component: TestappFrontendLoginComponent;
  let fixture: ComponentFixture<TestappFrontendLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestappFrontendLoginComponent,
        MODULES,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestappFrontendLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
