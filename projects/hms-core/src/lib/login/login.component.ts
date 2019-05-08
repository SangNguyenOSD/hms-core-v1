import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginLanguages } from './models/login-languages.model';
import { LoginUser } from './models/login-user.model';

@Component({
    selector: 'hms-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    @Input() public loginLanguages: LoginLanguages = {
        title: 'LOG IN',
        emailLabel: 'Email',
        passwordLabel: 'Password',
        signUpIntroText: 'Don\'t have an account?',
        signUpText: 'Sign Up',
        signInText: 'Sign In',
        invalidEmailMessageText: 'Your email invalid pattern. It should like "example@domain.com"'
    };

    @Output() signIn: EventEmitter<LoginUser> = new EventEmitter<LoginUser>();
    @Output() signUp: EventEmitter<boolean> = new EventEmitter<boolean>();

    public loginUser: LoginUser = {
        email: '',
        password: ''
    };

    constructor() { }

    ngOnInit() {
    }

    public onClickSignIn(): void {
        if (this.loginUser.email && this.loginUser.password) {
            this.signIn.emit(this.loginUser);
        }
    }

    public onClickSignUp(): void {
        this.signUp.emit();
    }

}
