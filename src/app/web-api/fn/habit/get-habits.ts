/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { HabitResponse } from '../../models/habit-response';

export interface GetHabits$Params {
}

export function getHabits(http: HttpClient, rootUrl: string, params?: GetHabits$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<HabitResponse>>> {
  const rb = new RequestBuilder(rootUrl, getHabits.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<HabitResponse>>;
    })
  );
}

getHabits.PATH = '/api/habit';
