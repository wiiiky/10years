import 'hammerjs';
import * as $ from 'jquery';
window["$"] = $;
window["jQuery"] = $;
import "froala-editor/js/froala_editor.pkgd.min.js";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import {
  Http,
  ConnectionBackend,
  RequestOptions,
  RequestOptionsArgs,
  XHRBackend,
  Response,
  Headers,
  Request,
  HttpModule
} from '@angular/http';
import { Router }  from '@angular/router';

/* COMPONENT */
import { AppComponent } from 'app/app.component';
import { CountryCodeSelectComponent } from 'app/component/country-code-select/country-code-select.component';
import { MobileInputComponent } from 'app/component/mobile-input/mobile-input.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CodeInputComponent } from 'app/component/code-input/code-input.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeToolbarComponent } from 'app/page/home-toolbar/home-toolbar.component';
import { QaMenuComponent } from 'app/component/qa-menu/qa-menu.component';
import { HotAnswerCardComponent } from 'app/component/hot-answer-card/hot-answer-card.component';
import { HotAnswerFeedsComponent } from 'app/component/hot-answer-feeds/hot-answer-feeds.component';
import { ProfileCardComponent } from 'app/component/profile-card/profile-card.component';
import { ImageCropperComponent } from 'app/component/image-cropper/image-cropper.component';
import { CoverEditorComponent } from 'app/component/cover-editor/cover-editor.component';
import { AskDialogComponent } from 'app/component/ask-dialog/ask-dialog.component';
import { RemovableTagComponent } from 'app/component/removable-tag/removable-tag.component';
import { TopicInputComponent } from 'app/component/topic-input/topic-input.component';
import { SearchTabComponent } from 'app/component/search-tab/search-tab.component';
import { SearchQuestionCardComponent } from 'app/component/search-question-card/search-question-card.component';
import { SearchQuestionFeedsComponent } from 'app/component/search-question-feeds/search-question-feeds.component';
/* PAGE */
import { TopicPageComponent } from 'app/page/topic/topic-page.component';
import { ProfilePageComponent } from 'app/page/profile/profile-page.component';
import { MainPageComponent } from 'app/page/main/main-page.component';
import { HomePageComponent } from 'app/page/home/home-page.component';
import { LoginPageComponent } from 'app/page/login/login-page.component';
import { SignupPanelComponent } from 'app/page/signup-panel/signup-panel.component';
import { LoginPanelComponent } from 'app/page/login-panel/login-panel.component';
import { SearchPageComponent } from 'app/page/search/search-page.component';
import { QuestionPageComponent } from 'app/page/question/question-page.component';
/*  SERVICE */
import { CountryCodeService } from 'app/service/country-code.service';
import { AccountService } from 'app/service/account.service';
import { QuestionService } from 'app/service/question.service';
import { FileService } from 'app/service/file.service';
import { UserService } from 'app/service/user.service';
import { HttpService } from 'app/service/http.service';

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
    HotAnswerCardComponent,
    HotAnswerFeedsComponent,
    ProfilePageComponent,
    ProfileCardComponent,
    MainPageComponent,
    ImageCropperComponent,
    CoverEditorComponent,
    TopicPageComponent,
    SearchPageComponent,
    AskDialogComponent,
    RemovableTagComponent,
    TopicInputComponent,
    QuestionPageComponent,
    SearchTabComponent,
    SearchQuestionCardComponent,
    SearchQuestionFeedsComponent,
  ],
  imports: [
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
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
    AppRoutingModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  providers: [
    CountryCodeService,
    QuestionService,
    AccountService,
    FileService,
    UserService,
    {
      provide: HttpService,
      useFactory: (backend: XHRBackend, options: RequestOptions, router: Router) => {
        return new HttpService(backend, options, router);
      },
      deps: [XHRBackend, RequestOptions]
    }
  ],
  entryComponents: [
    AskDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
