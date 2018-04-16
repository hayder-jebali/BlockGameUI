import { NgModule } from '@angular/core';
/*Import module material here*/
import {
  MatButtonModule, 
  MatCheckboxModule,
  MatMenuModule,
  MatListModule,
  MatExpansionModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatSnackBarModule} from '@angular/material';
  import {MatToolbarModule} from '@angular/material/toolbar';
  import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule
  ],
  declarations: []
})
export class MaterialModule { }
