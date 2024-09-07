/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getTrackingList } from '../fn/habit-track/get-tracking-list';
import { GetTrackingList$Params } from '../fn/habit-track/get-tracking-list';
import { HabitTrackResponse } from '../models/habit-track-response';
import { trackHabit } from '../fn/habit-track/track-habit';
import { TrackHabit$Params } from '../fn/habit-track/track-habit';
import { untrackHabit } from '../fn/habit-track/untrack-habit';
import { UntrackHabit$Params } from '../fn/habit-track/untrack-habit';

@Injectable({ providedIn: 'root' })
export class HabitTrackService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `trackHabit()` */
  static readonly TrackHabitPath = '/api/habit-track';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `trackHabit()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  trackHabit$Response(params: TrackHabit$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return trackHabit(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `trackHabit$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  trackHabit(params: TrackHabit$Params, context?: HttpContext): Observable<void> {
    return this.trackHabit$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `untrackHabit()` */
  static readonly UntrackHabitPath = '/api/habit-track';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `untrackHabit()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  untrackHabit$Response(params: UntrackHabit$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return untrackHabit(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `untrackHabit$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  untrackHabit(params: UntrackHabit$Params, context?: HttpContext): Observable<void> {
    return this.untrackHabit$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getTrackingList()` */
  static readonly GetTrackingListPath = '/api/habit-track/{date}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTrackingList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTrackingList$Response(params: GetTrackingList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<HabitTrackResponse>>> {
    return getTrackingList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTrackingList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTrackingList(params: GetTrackingList$Params, context?: HttpContext): Observable<Array<HabitTrackResponse>> {
    return this.getTrackingList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<HabitTrackResponse>>): Array<HabitTrackResponse> => r.body)
    );
  }

}
