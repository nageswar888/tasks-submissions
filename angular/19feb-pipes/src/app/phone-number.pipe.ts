import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {
   i: number;
  transform(val: any): any {
    let newStr = '';
      newStr = newStr + val.substr(this.i * 2, 3) + '-';
    return newStr+val.substr(3);

  }

}
@Pipe({
  name:'respect'
})
export class NumberPipe implements PipeTransform {
  transform(value: any, gender: string): any {
    if(gender.toLowerCase()=='male'){
     return value= 'Mr '+value;
    }
    else{
     return value='Miss '+value;
    }
  }

}
