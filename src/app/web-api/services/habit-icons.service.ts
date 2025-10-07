/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getAll } from '../fn/habit-icons/get-all';
import { GetAll$Params } from '../fn/habit-icons/get-all';
import { HabitIconDto } from '../models/habit-icon-dto';

@Injectable({ providedIn: 'root' })
export class HabitIconsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAll()` */
  static readonly GetAllPath = '/api/habit-icons';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll$Response(params?: GetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<HabitIconDto>>> {
    return getAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll(params?: GetAll$Params, context?: HttpContext): Observable<Array<HabitIconDto>> {
    return this.getAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<HabitIconDto>>): Array<HabitIconDto> => r.body)
    );
  }

}
