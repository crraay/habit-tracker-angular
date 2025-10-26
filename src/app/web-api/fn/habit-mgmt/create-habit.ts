/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { HabitDto } from '../../models/habit-dto';

export interface CreateHabit$Params {
      body: HabitDto
}

export function createHabit(http: HttpClient, rootUrl: string, params: CreateHabit$Params, context?: HttpContext): Observable<StrictHttpResponse<HabitDto>> {
  const rb = new RequestBuilder(rootUrl, createHabit.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<HabitDto>;
    })
  );
}

createHabit.PATH = '/api/habit';
