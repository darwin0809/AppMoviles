
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { IonicModule } from '@ionic/angular'; 
import { Tab3Page } from './tab3.page';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Tab3Page],
  imports: [
    CommonModule,      
    IonicModule,       
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ]
})
export class Tab3PageModule {}
