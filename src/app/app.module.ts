import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from 'app/app.component';
import { LoginPageComponent } from 'app/page/login/login-page.component';
import { SignupPanelComponent } from 'app/page/signup-panel/signup-panel.component';
import { LoginPanelComponent } from 'app/page/login-panel/login-panel.component';
import { CountryCodeSelectComponent } from 'app/component/country-code-select/country-code-select.component';
import { CountryCodeService } from 'app/service/country-code.service';
import { MobileInputComponent } from 'app/component/mobile-input/mobile-input.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CodeInputComponent } from 'app/component/code-input/code-input.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from 'app/page/home/home-page.component';
import { HomeToolbarComponent } from 'app/page/home-toolbar/home-toolbar.component';
import { QaMenuComponent } from 'app/component/qa-menu/qa-menu.component';
import { QuestionCardComponent } from 'app/component/question-card/question-card.component';
import { QuestionFeedsComponent } from 'app/component/question-feeds/question-feeds.component';
import { ProfilePageComponent } from 'app/page/profile/profile-page.component';
import { MainPageComponent } from 'app/page/main/main-page.component';
import { ProfileCardComponent } from 'app/component/profile-card/profile-card.component';
import { AccountService } from 'app/service/account.service';
import { QuestionService } from 'app/service/question.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPanelComponent,
    LoginPanelComponent,
    CountryCodeSelectComponent,
    MobileInputComponent,
    CodeInputComponent,
    HomePageComponent,
    HomeToolbarComponent,
    QaMenuComponent,
    QuestionCardComponent,
    QuestionFeedsComponent,
    ProfilePageComponent,
    ProfileCardComponent,
    MainPageComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    CountryCodeService,
    QuestionService,
    AccountService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
