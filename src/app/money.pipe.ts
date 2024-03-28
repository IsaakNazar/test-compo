import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money',
  standalone: true
})
export class MoneyPipe implements PipeTransform {
  transform(value: string): string {
    return parseFloat(value).toLocaleString('en-US', {minimumFractionDigits: value.endsWith('.00') ? 2 : 0}).replaceAll(',', ' ')
  }
}
