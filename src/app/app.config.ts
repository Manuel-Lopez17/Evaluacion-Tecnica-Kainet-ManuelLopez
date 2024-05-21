import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { provideClientHydration } from '@angular/platform-browser'
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { httpInterceptor } from './interceptors/http.interceptor'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([httpInterceptor]), withFetch()),
  ],
}
