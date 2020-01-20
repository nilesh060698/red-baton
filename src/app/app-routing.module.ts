import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentConversationComponent } from './content-conversation/content-conversation.component';
// import { UiMenuComponent } from './ui-menu/ui-menu.component';

const routes: Routes = [
  {
    path: '',
    component: ContentConversationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
