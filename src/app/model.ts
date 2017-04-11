import { Collection, Entity } from './ng2-bean'
import { Type, Exclude, Expose, Transform } from "class-transformer/decorators";
import * as moment from 'moment';

const round = val => {
    // return parseFloat(val.toFixed(2)).toFixed(2)
    return Math.round(val * 100) / 100
}

export class Model {

}

export class Address {
    line1: string;
    line2: string;
    suburb: string;
    state: string;
    @Type(() => Number)
    postCode: number;
}
