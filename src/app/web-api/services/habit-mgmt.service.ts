/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createHabit } from '../fn/habit-mgmt/create-habit';
import { CreateHabit$Params } from '../fn/habit-mgmt/create-habit';
import { deleteHabit } from '../fn/habit-mgmt/delete-habit';
import { DeleteHabit$Params } from '../fn/habit-mgmt/delete-habit';
import { getHabit } from '../fn/habit-mgmt/get-habit';
import { GetHabit$Params } from '../fn/habit-mgmt/get-habit';
import { getHabits } from '../fn/habit-mgmt/get-habits';
import { GetHabits$Params } from '../fn/habit-mgmt/get-habits';
import { HabitDto } from '../models/habit-dto';
import { updateHabit } from '../fn/habit-mgmt/update-habit';
import { UpdateHabit$Params } from '../fn/habit-mgmt/update-habit';

@Injectable({ providedIn: 'root' })
export class HabitMgmtService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getHabit()` */
  static readonly GetHabitPath = '/api/habit/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getHabit()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHabit$Response(params: GetHabit$Params, context?: HttpContext): Observable<StrictHttpResponse<HabitDto>> {
    return getHabit(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getHabit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHabit(params: GetHabit$Params, context?: HttpContext): Observable<HabitDto> {
    return this.getHabit$Response(params, context).pipe(
      map((r: StrictHttpResponse<HabitDto>): HabitDto => r.body)
    );
  }

  /** Path part for operation `updateHabit()` */
  static readonly UpdateHabitPath = '/api/habit/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateHabit()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateHabit$Response(params: UpdateHabit$Params, context?: HttpContext): Observable<StrictHttpResponse<HabitDto>> {
    return updateHabit(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateHabit$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateHabit(params: UpdateHabit$Params, context?: HttpContext): Observable<HabitDto> {
    return this.updateHabit$Response(params, context).pipe(
      map((r: StrictHttpResponse<HabitDto>): HabitDto => r.body)
    );
  }

  /** Path part for operation `deleteHabit()` */
  static readonly DeleteHabitPath = '/api/habit/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteHabit()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteHabit$Response(params: DeleteHabit$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteHabit(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteHabit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteHabit(params: DeleteHabit$Params, context?: HttpContext): Observable<void> {
    return this.deleteHabit$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getHabits()` */
  static readonly GetHabitsPath = '/api/habit';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getHabits()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHabits$Response(params?: GetHabits$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<HabitDto>>> {
    return getHabits(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getHabits$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHabits(params?: GetHabits$Params, context?: HttpContext): Observable<Array<HabitDto>> {
    return this.getHabits$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<HabitDto>>): Array<HabitDto> => r.body)
    );
  }

  /** Path part for operation `createHabit()` */
  static readonly CreateHabitPath = '/api/habit';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createHabit()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createHabit$Response(params: CreateHabit$Params, context?: HttpContext): Observable<StrictHttpResponse<HabitDto>> {
    return createHabit(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createHabit$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createHabit(params: CreateHabit$Params, context?: HttpContext): Observable<HabitDto> {
    return this.createHabit$Response(params, context).pipe(
      map((r: StrictHttpResponse<HabitDto>): HabitDto => r.body)
    );
  }

}
