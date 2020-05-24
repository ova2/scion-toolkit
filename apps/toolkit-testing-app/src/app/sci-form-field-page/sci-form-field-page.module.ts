/*
 * Copyright (c) 2018-2019 Swiss Federal Railways
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 *  SPDX-License-Identifier: EPL-2.0
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SciFormFieldModule } from '@scion/~toolkit/widgets';
import { RouterModule, Routes } from '@angular/router';
import { SciFormFieldPageComponent } from './sci-form-field-page.component';

const routes: Routes = [
  {path: '', component: SciFormFieldPageComponent},
];

@NgModule({
  imports: [
    CommonModule,
    SciFormFieldModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    SciFormFieldPageComponent,
  ],
})
export class SciFormFieldPageModule {
}
