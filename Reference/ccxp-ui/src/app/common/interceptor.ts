import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {InterceptorService} from "./interceptor.service";
import {Observable} from "rxjs/Rx";

@Injectable()
export class Interceptor implements HttpInterceptor{
  constructor(private service:InterceptorService) { }

  /**
   * Displays the Spinner for every request with Interceptor
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.service.displaySpinner(true);
    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {  // Response
        this.service.displaySpinner(false);
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        this.service.displaySpinner(false);
        if (err.status === 401) {
          this.service.displaySpinner(false);
        }
      }
    });
  }
}
