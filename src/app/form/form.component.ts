import { Component, Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS} from '@angular/forms';




@Component({
    selector: 'my-form',
    templateUrl: `app/form/form.component.html`,
    styleUrls:[`app/form/form.component.css`]
})
export class FormComponent {
    name = 'Angular';
    onSubmit(value: any) {
        console.log(value);
        }
}
