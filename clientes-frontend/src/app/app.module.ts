import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClienteService } from './clientes/cliente.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './clientes/form.component';
import { FormsModule } from '@angular/forms';
import { PaginatorComponent } from './paginator/paginator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
import { DetalleComponent } from './clientes/detalle/detalle.component';

registerLocaleData(localeES, 'es')

const routes: Routes = [
  { path: '', redirectTo: '/clientes', pathMatch: 'full'},
  { path: 'clientes', component: ClientesComponent},
  { path: 'clientes/page/:page', component: ClientesComponent},
  { path: 'clientes/form', component: FormComponent},
  { path: 'clientes/form/:id', component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    PaginatorComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
