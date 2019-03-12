import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {
  TextLimitPipe, RatingFilterPipe, CapitalizePipe, staffRatingPipe, typeOfVariablePipe,
  NewlinePipe, PhoneNumber, LangPipe, PercentColorPipe, RatingPercentPipe
} from "./commonPipes";
import {SearchTextBoldPipe} from "./commonPipes";
@NgModule({
  imports: [ CommonModule ],
  declarations: [
    TextLimitPipe,
    RatingFilterPipe,
    CapitalizePipe,
    staffRatingPipe,
    SearchTextBoldPipe,
    typeOfVariablePipe,
    NewlinePipe,
    PhoneNumber,
    LangPipe,
    PercentColorPipe,
    RatingPercentPipe
  ],
  exports: [
    TextLimitPipe,
    RatingFilterPipe,
    CapitalizePipe,
    staffRatingPipe,
    SearchTextBoldPipe,
    typeOfVariablePipe,
    NewlinePipe,
    PhoneNumber,
    LangPipe,
    PercentColorPipe,
    RatingPercentPipe
  ],
  providers: []
})

export class CommonPipesModule {}
