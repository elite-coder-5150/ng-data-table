import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

import { DataTableComponent } from './data-table/data-table.component';
import { CustomCheckboxComponent } from './custom-checkbox/custom-checkbox.component';
import { PaginationComponent } from './pagination/pagination.component';
import { UserComponent } from './user/user.component';
import { UserTableComponent } from './user/user-table/user-table.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFormComponent } from './search-form/search-form.component';
import { IsCheckedDirective } from './directives/is-checked.directive';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    CustomCheckboxComponent,
    PaginationComponent,
    UserComponent,
    UserTableComponent,
    SearchResultsComponent,
    SearchComponent,
    SearchFormComponent,
    IsCheckedDirective,
    EditUserComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
