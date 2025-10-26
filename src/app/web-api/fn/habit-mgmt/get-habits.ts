/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { HabitDto } from '../../models/habit-dto';

export interface GetHabits$Params {
}

export function getHabits(http: HttpClient, rootUrl: string, params?: GetHabits$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<HabitDto>>> {
  const rb = new RequestBuilder(rootUrl, getHabits.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<HabitDto>>;
    })
  );
}

getHabits.PATH = '/api/habit';
