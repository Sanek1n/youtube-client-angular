import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISearchItem } from '@app/youtube/models/search-item.model';
import { ISearchResponse } from '@app/youtube/models/search-response.model';
import { Observable } from 'rxjs';

const API_URL = 'https://www.googleapis.com/youtube/v3';
const API_KEY = 'AIzaSyB8SCq2oQnKRSQb0WiAR-VmfMCWgJVRMho';

@Injectable({ providedIn: 'root' })
export default class ApiInterceptor implements HttpInterceptor {
  // eslint-disable-next-line class-methods-use-this
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<ISearchItem[] | ISearchResponse>> {
    return next.handle(req.clone({
      url: `${API_URL}/${req.url}?key=${API_KEY}`,
    }));
  }
}
