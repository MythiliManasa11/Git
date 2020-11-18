import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';

import { ModifyContactComponent } from './modify-contact/modify-contact.component';
import { ViewAllContactsComponent } from './view-all-contacts/view-all-contacts.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  {path:"addContacts",component:AddContactComponent},
  {path:"modify",component:ModifyContactComponent},
  {path:"allcontacts",component:ViewAllContactsComponent},
  {path:"viewContact",component:ViewContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
