import { TranslateService } from '@ngx-translate/core';
import { FormGroup } from "@angular/forms";

export class FormValidations {

  static translateStatic: TranslateService;

  static setTranslationService( translation: TranslateService) {
    FormValidations.translateStatic = translation;
  }

  static checkValidations(form: FormGroup): void {
    Object.keys(form?.controls).forEach(c => {
      let control = form.get(c);

      if(control?.invalid){
        control?.markAsDirty();
      }
    })
  }

  static getMsg(fieldName: string, errName: string, errValue?: any): string {

    const messages = {
      'required': FormValidations.translateStatic.instant('VALIDATORS.REQUIRED', { fieldName: fieldName }),
      'maxlength': FormValidations.translateStatic.instant('VALIDATORS.MAX_LENGTH',
        { fieldName: fieldName, maxLength: errValue.requiredLength }),
      'minlength': FormValidations.translateStatic.instant('VALIDATORS.MIN_LENGTH',
        { fieldName: fieldName, minLength: errValue.requiredLength }),
      'email': FormValidations.translateStatic.instant('VALIDATORS.EMAIL', { fieldName: fieldName })
    }
    return messages[errName];
  }
}
