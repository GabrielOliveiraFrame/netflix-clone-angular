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

  static getMsg(fieldName: string, errName: string, errValue?: any): string {
    const messages = {
      'required': `O campo '${fieldName}' é obrigatório.`,
      'maxlength': `O campo '${fieldName}' precisa ter no máx. ${errValue.requiredLength} caracteres.`,
      'minlength': `O campo '${fieldName}' precisa ter no mín. ${errValue.requiredLength} caracteres.`,
      'email': 'Digite um email válido.'
    }
    return messages[errName];
  }
}
