import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pricepipe'
})
export class PricePipe implements PipeTransform {
    transform(value: any) {
        return ' $ ' + value + '.00';
    }
}