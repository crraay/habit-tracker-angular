/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { HabitTrackResponse } from '../../models/habit-track-response';

export interface GetTrackingList$Params {
  date: string;
}

export function getTrackingList(http: HttpClient, rootUrl: string, params: GetTrackingList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<HabitTrackResponse>>> {
  const rb = new RequestBuilder(rootUrl, getTrackingList.PATH, 'get');
  if (params) {
    rb.path('date', params.date, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<HabitTrackResponse>>;
    })
  );
}

getTrackingList.PATH = '/api/habit-track/{date}';
