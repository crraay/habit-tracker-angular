/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { HabitResponse } from '../../models/habit-response';

export interface GetHabit$Params {
  id: number;
}

export function getHabit(http: HttpClient, rootUrl: string, params: GetHabit$Params, context?: HttpContext): Observable<StrictHttpResponse<HabitResponse>> {
  const rb = new RequestBuilder(rootUrl, getHabit.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<HabitResponse>;
    })
  );
}

getHabit.PATH = '/api/habit/{id}';
