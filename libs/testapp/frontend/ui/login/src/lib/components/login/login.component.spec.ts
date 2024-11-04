import { of } from 'rxjs';
import { LoginStore } from './login.store';
import { LoginComponent } from './login.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MODULES } from '@testapp/shared/exports/export-modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Auth } from '@angular/fire/auth';
import { AuthService } from '@testapp/shared/services/firebase.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let formBuilder: FormBuilder;

  const mockLoginStore = {
    someMethod: jest.fn().mockReturnValue(of(true))
  };

  const authService = {
    someMethod: jest.fn().mockReturnValue(of(true))
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginComponent,
        MODULES,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      providers: [
        FormBuilder,
        { provide: LoginStore, useValue: mockLoginStore },
        {provide: AuthService, useValue: authService}
      ]
    }).compileComponents();

    formBuilder = TestBed.inject(FormBuilder);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    component.loginInputForm = formBuilder.group({
      user: [''],
      pass:[''],
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
