import {Pipe, PipeTransform} from "@angular/core";
import * as _ from "lodash";
import {CommonUtils} from "../CommonUtils";

// measure_performance_rate
@Pipe({name: 'textLimit'})
export class TextLimitPipe implements PipeTransform {
  transform(value: string, limit): string {
    const trail =  '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}


@Pipe({name: 'ratingFilter'})
export class RatingFilterPipe implements PipeTransform {
  transform(value: any): any {
    return _.meanBy(value, 'measure_performance_rate');
  }
}

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (value) {
      const _value = _.toLower(value);
      return _value.replace(/\w+/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1);
      }).replace(/\s/g, ' ');
    }
  }
}

@Pipe({name:'ratingstaffFilter'})
export class staffRatingPipe implements  PipeTransform{
  transform(value: any): any {
    let rate:number=0;
    let sum:number=0;
    value.forEach((rate)=>{
      sum +=(rate.measure_performance_rate/100);
    })
    rate=(sum/value.length);
    let val=rate*5;
    return val;
  }
}

@Pipe({name:'typeofVariable'})
export class typeOfVariablePipe implements  PipeTransform{
  transform(value: any): any {
    if(typeof value == 'object'){
      return true;
    } else {
      return false
    }
  }
}

/*
  re = /(word)|(word)/gi
  value.replace(re, '$1<b>$2</b>');
* */
@Pipe({name: 'searchTextBold'})
export class SearchTextBoldPipe implements PipeTransform {
  constructor(private commonUtils: CommonUtils) {}
  transform(value: string, args: string): any {
    let splitArgs = args.trim().split(" ");
    let strDollars = "", conditionString = "";
    for(let i = 0; i<splitArgs.length;i++) {
      strDollars = strDollars + "<b>$"+(i+1)+"</b>";
      conditionString = conditionString +"("+splitArgs[i]+")";
      if(i != splitArgs.length-1){
        conditionString = conditionString+"|";
      }
    }
    let regex = new RegExp(conditionString, "gi");
    value = value.replace(regex, strDollars);
    return value;
  }
}
//a.replace(/[(<b>)|(</b>)]/g, "")
@Pipe({ name: 'newline' })
export class NewlinePipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    return value.replace(/\-/g, '<br/>')
  }
}

@Pipe({name:'phoneNumber'})
export class PhoneNumber implements PipeTransform{
  transform(value:string):any{
    if(value){
      return value.match(/\d{3}(?=\d{2,3})|\d+/g).join("-");
    };
  }
}

@Pipe({name: 'langPipe'})
export class LangPipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (value) {
      if(value.indexOf(',')>0) {
        return value.split(',')[0] +' and '+ value.split(',')[1];
      }else {
        return value + ' Only';
      }
    }
  }
}

@Pipe({name: 'ratingPercent'})
export class RatingPercentPipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (value) {
      if(parseInt(value) == 5) {
        return _.random(95, 100, false);
      }else if(parseInt(value) > 4){
        return _.random(80, 90, false);
      }else if(parseInt(value) > 3){
        return _.random(65, 80, false);
      }else if(parseInt(value) >= 2){
        return _.random(40, 65, false);
      }else {
        return _.random(10, 25, false);
      }
    }
  }
}

@Pipe({name: 'percentColor'})
export class PercentColorPipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (value) {
      if(parseInt(value) > 4) {
        return '#4AA564';
      }else if(parseInt(value) >= 2){
        return '#FDB81E';
      }else {
        return '#ff0000';
      }
    }
  }
}
