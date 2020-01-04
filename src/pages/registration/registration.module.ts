import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrationPage } from './registration';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    RegistrationPage,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    IonicPageModule.forChild(RegistrationPage),
  ],
})
export class RegistrationPageModule {}
