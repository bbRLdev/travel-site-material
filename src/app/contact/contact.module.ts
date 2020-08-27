import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [ContactComponent, ContactFormComponent],
  imports: [
    MaterialModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: ContactComponent }]),
  ]
})
export class ContactModule { }
