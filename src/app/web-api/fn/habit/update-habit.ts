/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { HabitRequest } from '../../models/habit-request';
import { HabitResponse } from '../../models/habit-response';

export interface UpdateHabit$Params {
  id: number;
      body: HabitRequest
}

export function updateHabit(http: HttpClient, rootUrl: string, params: UpdateHabit$Params, context?: HttpContext): Observable<StrictHttpResponse<HabitResponse>> {
  const rb = new RequestBuilder(rootUrl, updateHabit.PATH, 'put');
  if (params) {
    rb.query('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<HabitResponse>;
    })
  );
}

updateHabit.PATH = '/api/habit/{id}';
