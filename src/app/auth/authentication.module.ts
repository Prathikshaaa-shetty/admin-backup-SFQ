import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreCommonModule } from '@core/common.module';

import { AuthForgotPasswordV1Component } from 'app/auth/auth-forgot-password-v1/auth-forgot-password-v1.component';
import { AuthForgotPasswordV2Component } from 'app/auth/auth-forgot-password-v2/auth-forgot-password-v2.component';

import { AuthLoginV1Component } from 'app/auth/auth-login-v1/auth-login-v1.component';
import { AuthLoginV2Component } from 'app/auth/auth-login-v2/auth-login-v2.component';

import { AuthRegisterV1Component } from 'app/auth/auth-register-v1/auth-register-v1.component';
import { AuthRegisterV2Component } from 'app/auth/auth-register-v2/auth-register-v2.component';

import { AuthResetPasswordV1Component } from 'app/auth/auth-reset-password-v1/auth-reset-password-v1.component';
import { AuthResetPasswordV2Component } from 'app/auth/auth-reset-password-v2/auth-reset-password-v2.component';

// routing
const routes: Routes = [
  {
    path: 'login-v1',
    component: AuthLoginV1Component
  },
  {
    path: 'login',
    component: AuthLoginV2Component
  },
  {
    path: 'register-v1',
    component: AuthRegisterV1Component
  },
  {
    path: 'register-v2',
    component: AuthRegisterV2Component
  },
  {
    path: 'reset-password-v1',
    component: AuthResetPasswordV1Component
  },
  {
    path: 'reset-password-v2',
    component: AuthResetPasswordV2Component
  },
  {
    path: 'forgot-password-v1',
    component: AuthForgotPasswordV1Component
  },
  {
    path: 'forgot-password',
    component: AuthForgotPasswordV2Component
  }
];

@NgModule({
  declarations: [
    AuthLoginV1Component,
    AuthRegisterV1Component,
    AuthLoginV2Component,
    AuthRegisterV2Component,
    AuthForgotPasswordV1Component,
    AuthForgotPasswordV2Component,
    AuthResetPasswordV1Component,
    AuthResetPasswordV2Component
  ],
  imports: [CommonModule, RouterModule.forChild(routes), NgbModule, FormsModule, ReactiveFormsModule, CoreCommonModule]
})
export class AuthenticationModule {}
