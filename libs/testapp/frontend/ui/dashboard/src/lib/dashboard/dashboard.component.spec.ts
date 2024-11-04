import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DashboardStore } from './dashboard.store';
import { MODULES } from '@testapp/shared/exports/export-modules';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwapiService } from '@testapp/shared/services/swapi.service';
import { AuthService } from '@testapp/shared/services/firebase.service';
import { TestappFrontendDashboardComponent } from './dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TestappFrontendDashboardComponent', () => {
  let component: TestappFrontendDashboardComponent;
  let fixture: ComponentFixture<TestappFrontendDashboardComponent>;

  const mockLoginStore = {
    someMethod: jest.fn().mockReturnValue(of(true)),
  };

  const authService = {
    someMethod: jest.fn().mockReturnValue(of(true)),
  };

  const swapiService = {
    someMethod: jest.fn().mockReturnValue(of(true)),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestappFrontendDashboardComponent,
        MODULES,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      providers: [
        FormBuilder,
        { provide: DashboardStore, useValue: mockLoginStore },
        { provide: AuthService, useValue: authService },
        { provide: SwapiService, useValue: swapiService },
        { provide: HttpClient, useValue: swapiService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestappFrontendDashboardComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
