import { Component, OnInit } from '@angular/core';
import { LoginSignal } from 'projects/hms-core/src/lib/login/models/login-signal.model';
import { LoginLanguages } from 'hms-core/lib/login/models/login-languages.model';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    public loginSignal: LoginSignal = {
        isValid: true,
        invalidMessage: 'Invalid Email/Password'
    };

    constructor() { }

    ngOnInit() {
    }

}
