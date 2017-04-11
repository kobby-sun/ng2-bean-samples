import { Component } from '@angular/core';
import {
  UISelectComponent,
  UIForm, UIFormComponent, UIFormHelper, UIFormEvent,
} from '../ng2-bean';
import { FORMS, FORMS_NAME } from '../form-model'
import * as Prism from 'prismjs'

@Component({
  selector: 'samples',
  templateUrl: './samples.template.html'
})
export class Samples {
  formValue: any;
  formModel: UIForm;

  formData: any;

  saved: boolean

  model_html: string;
  markup_html: string;
  ts_html: string;

  saveForm(evt: UIFormEvent) {
    setTimeout(() => {
      this.saved = true;
      this.formData = evt.model.js;
    }, 2000)
    // setTimeout(() => {
    //   this.saved = false
    // }, 6000)
  }

  resetForm() {
    this.saved = false;
  }

  closeForm(evt) {


  }

  ctlInit(evt) {

  }

  ctlChange(evt) {

  }

  ngOnInit() {
    this.formModel = FORMS[FORMS_NAME.FORM_Address]

    // The code snippet you want to highlight, as a string
    let code = `
import {
    FORM_CONTROL_TYPE,
    UIForm, UIFormControl,
    validators
} from './ng2-bean'
import { Validators } from '@angular/forms';

const au_states = [
    { value: 'ACT', label: 'Australian Capital Territory' },
    { value: 'NSW', label: 'New South Wales' },
    { value: 'NT', label: 'Northern Territory' },
    { value: 'QLD', label: 'Queensland' },
    { value: 'SA', label: 'South Australia' },
    { value: 'TAS', label: 'Tasmania' },
    { value: 'VIC', label: 'Victoria' },
    { value: 'WA', label: 'Western Australia' }
]

const countries = [
    { value: 'AU', label: 'Australia' },
]

const FORM_MODEL_Address = (): UIForm => {
    return {
        name: FORMS_NAME.FORM_Address,
        fields: [{
            type: FORM_CONTROL_TYPE.SEARCH, name: 'line1', validators: [
                Validators.required
            ],
            settings: { ds: null },
            label: 'Line 1'
        },
        {
            type: FORM_CONTROL_TYPE.TEXT, name: 'line2', validators: [

            ],
            label: 'Line 2'
        },
        {
            type: FORM_CONTROL_TYPE.TEXT, name: 'suburb', validators: [
                Validators.required
            ],
            label: 'Suburb'
        },
        {
            type: FORM_CONTROL_TYPE.SELECT, name: 'state', validators: [
                Validators.required
            ],
            opts: au_states,
            label: 'State'
        },
        {
            type: FORM_CONTROL_TYPE.TEXT, name: 'postCode', validators: [
                Validators.required,
                validators.postcodeValidator
            ],
            label: 'Postcode'
        },
        {
            type: FORM_CONTROL_TYPE.SELECT, name: 'country', validators: [
                Validators.required
            ],
            opts: countries,
            label: 'Country'
        }]
    }
}
    `;

    // Returns a highlighted HTML string
    this.model_html = Prism.highlight(code, Prism.languages.javascript);

    let code1 = `
<ui-form [form]="formModel" [value]="formValue" (onControlInit)="ctlInit($event)" (onControlChange)="ctlChange($event)"
                        (onClose)="closeForm($event)" (onSubmit)="saveForm($event)"></ui-form>
`

    this.markup_html = Prism.highlight(code1, Prism.languages.markup);

    let code2 = `
import { Component } from '@angular/core';
import {
  UISelectComponent,
  UIForm, UIFormComponent, UIFormHelper, UIFormEvent,
} from '../ng2-bean';
import { FORMS, FORMS_NAME } from '../form-model'

@Component({
  selector: 'samples',
  templateUrl: './samples.template.html'
})
export class Samples {
  formValue: any;
  formModel: UIForm;
  formData: any;

  saved: boolean

  saveForm(evt: UIFormEvent) {
    setTimeout(() => {
      this.saved = true;
      this.formData = evt.model.js;
    }, 2000)
  }

  resetForm() {
    this.saved = false;
  }

  closeForm(evt) {


  }

  ctlInit(evt) {

  }

  ctlChange(evt) {

  }

  ngOnInit() {
    this.formModel = FORMS[FORMS_NAME.FORM_Address]
  }
}
`

    this.ts_html = Prism.highlight(code2, Prism.languages.javascript);
  }
}
