import { NgModule } from '@angular/core';
import { FeedbackComponent } from './feedback.component';
import { RatingComponent } from './rating/rating.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule
    ],
    exports: [
        FeedbackComponent,
        RatingComponent
    ],
    declarations: [
        FeedbackComponent,
        RatingComponent
    ],
    providers: [],
})
export class UserFeedbackModule { }
