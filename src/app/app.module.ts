import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SocialLoginModule, AuthServiceConfig, FacebookLoginProvider} from 'angularx-social-login';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule, MatButtonModule, MatCardModule} from '@angular/material';

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('552542181961129')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    SocialLoginModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
