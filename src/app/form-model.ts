import {
    FORM_CONTROL_TYPE,
    UIForm, UIFormControl,
    validators
} from './ng2-bean'
import { Validators } from '@angular/forms';
import { Address } from "./model";
import * as _ from 'lodash'

const countries = [
    { value: 'AU', label: 'Australia' },
]

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

const FORM_MODEL_Address = (): UIForm => {
    return {
        name: FORMS_NAME.FORM_Address,
        fields: [{
            type: FORM_CONTROL_TYPE.SEARCH, name: `line1`, validators: [
                Validators.required
            ],
            settings: { ds: null },
            label: 'Line 1'
        },
        {
            type: FORM_CONTROL_TYPE.TEXT, name: `line2`, validators: [

            ],
            label: 'Line 2'
        },
        {
            type: FORM_CONTROL_TYPE.TEXT, name: `suburb`, validators: [
                Validators.required
            ],
            label: 'Suburb'
        },
        {
            type: FORM_CONTROL_TYPE.SELECT, name: `state`, validators: [
                Validators.required
            ],
            opts: au_states,
            label: 'State'
        },
        {
            type: FORM_CONTROL_TYPE.TEXT, name: `postCode`, validators: [
                Validators.required,
                validators.postcodeValidator
            ],
            label: 'Postcode'
        },
        {
            type: FORM_CONTROL_TYPE.SELECT, name: `country`, validators: [
                Validators.required
            ],
            opts: countries,
            label: 'Country'
        }]
    }
}


export const FORMS_NAME = {
    FORM_Address: 'FORM_Address'
}

export class FORMS {
    static get FORM_Address(): UIForm {
        return FORM_MODEL_Address()
    }
}
