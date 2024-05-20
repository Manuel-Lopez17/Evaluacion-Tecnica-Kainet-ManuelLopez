import { HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
    req.clone({
        headers: req.headers.set("Access-Control-Allow-Origin", "*"),
    });
  return next(req);
};
