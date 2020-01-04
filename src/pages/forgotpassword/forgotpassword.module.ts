import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgotpasswordPage } from './forgotpassword';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ForgotpasswordPage,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    IonicPageModule.forChild(ForgotpasswordPage),
  ],
})
export class ForgotpasswordPageModule {}
