import { Component, Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS} from '@angular/forms';


@Component({
    selector: 'my-login',
    templateUrl: `app/login/login.component.html`,
    styleUrls:[`app/login/login.component.css`]
})
export class LoginComponent {
    name = 'Angular';
    onSubmit(value: any) {
        console.log(value);
        }
}
