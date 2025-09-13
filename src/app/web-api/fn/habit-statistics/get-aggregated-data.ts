/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { HabitStatRequest } from '../../models/habit-stat-request';

export interface GetAggregatedData$Params {
  startDate: string;
  endDate: string;
}

export function getAggregatedData(http: HttpClient, rootUrl: string, params: GetAggregatedData$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<HabitStatRequest>>> {
  const rb = new RequestBuilder(rootUrl, getAggregatedData.PATH, 'get');
  if (params) {
    rb.path('startDate', params.startDate, {});
    rb.path('endDate', params.endDate, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<HabitStatRequest>>;
    })
  );
}

getAggregatedData.PATH = '/api/statistics/{startDate}/{endDate}';
