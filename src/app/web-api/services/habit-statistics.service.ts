/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getAggregatedData } from '../fn/habit-statistics/get-aggregated-data';
import { GetAggregatedData$Params } from '../fn/habit-statistics/get-aggregated-data';
import { HabitStatResponse } from '../models/habit-stat-response';

@Injectable({ providedIn: 'root' })
export class HabitStatisticsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAggregatedData()` */
  static readonly GetAggregatedDataPath = '/api/statistics/{startDate}/{endDate}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAggregatedData()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAggregatedData$Response(params: GetAggregatedData$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<HabitStatResponse>>> {
    return getAggregatedData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAggregatedData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAggregatedData(params: GetAggregatedData$Params, context?: HttpContext): Observable<Array<HabitStatResponse>> {
    return this.getAggregatedData$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<HabitStatResponse>>): Array<HabitStatResponse> => r.body)
    );
  }

}
