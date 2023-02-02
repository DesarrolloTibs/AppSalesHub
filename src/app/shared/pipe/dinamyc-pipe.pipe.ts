import {Injector, Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe, SlicePipe,CurrencyPipe, TitleCasePipe } from '@angular/common';
import { pipe } from 'rxjs';
import { ActivePipe } from './active.pipe';
//import { TitlecasePipe } from './titlecase.pipe';

@Pipe({
  name: 'dinamycPipe'
})
export class DinamycPipePipe implements PipeTransform {

  public constructor(private injector: Injector) {}

  transform(value: any, pipeToken: any, pipeArgs: any[]): any {
    //

    const MAP = {
      titlecase: TitleCasePipe,
      decimal: DecimalPipe,
      slice: SlicePipe,
      customcurrency:CurrencyPipe,
      status:ActivePipe
      
    };

    const func = (pipe: any, args: any, val:any) => {
      if (pipe && MAP.hasOwnProperty(pipe)) {
        var pipeClass = MAP[pipe as keyof typeof MAP];
        var pipe = this.injector.get<any>(pipeClass);
        return Array.isArray(args)
          ? pipe.transform(val, ...args)
          : pipe.transform(val, args);
      } else {
        return val;
      }
    };

    if (!Array.isArray(pipeToken)) {
      return func(pipeToken, pipeArgs, value);
    } else {
      return pipeToken.reduce((acc, curr, index) => {
        return func(curr, pipeArgs[index], acc);
      }, value);
    }
  }


}
