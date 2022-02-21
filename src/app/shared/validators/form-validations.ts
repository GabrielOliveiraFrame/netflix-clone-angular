import { FormGroup } from "@angular/forms";

export class FormValidations {
  static checkValidations(form: FormGroup): void {
    Object.keys(form?.controls).forEach(c => {
      let control = form.get(c);

      if(control?.invalid){
        control?.markAsDirty();
      }
    })
  }

  static getMsg(fieldName: string, errName: string): string {
    const messages = {
      'required': `O campo '${fieldName}' é obrigatório.`
    }
    return messages[errName];
  }
}
