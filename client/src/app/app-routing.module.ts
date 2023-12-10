import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserTableComponent } from './user/user-table/user-table.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
const routes: Routes = [
    {
        path: '',
        component: UserTableComponent
    },
    {
        path: 'user/login',
        component: LoginComponent
    },
    {
        path: 'user/add',
        component: RegisterComponent
    },
    {
        path: 'user/edit/:id',
        component: EditUserComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}