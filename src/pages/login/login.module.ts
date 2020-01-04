import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
