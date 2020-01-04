import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    IonicPageModule.forChild(HomePage),
  ],
})
export class ForgotpasswordPageModule {}
