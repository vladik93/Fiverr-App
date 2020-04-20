import { AbstractControl } from '@angular/forms';

export function passwordConfirming(c: AbstractControl): { [key: string]: boolean } | null {
    if (c.get('password').value !== c.get('password_confirm').value) {
        return {invalid: true};
    }
}
