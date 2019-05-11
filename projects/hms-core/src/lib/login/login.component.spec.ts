import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { empty } from 'rxjs';
import { RouterModule } from '@angular/router';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should emit signIn signal when login with email, password are valid', () => {
    let loginUser = {
      email: 'admin@domain.com',
      password: '123'
    };
    component.loginUser = loginUser;
    let spy = spyOn(component.signIn, 'emit').and.returnValue(empty());
    component.onClickSignIn();
    expect(spy).toHaveBeenCalled();
  });
});
