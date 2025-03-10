/*
 * Copyright (c) 2018-2019 Swiss Federal Railways
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 *  SPDX-License-Identifier: EPL-2.0
 */

import {NgModule} from '@angular/core';
import {SciPropertyComponent} from './property.component';

/**
 * Allows to show the properties of an object or the entries of a map
 */
@NgModule({
  imports: [
    SciPropertyComponent,
  ],
  exports: [
    SciPropertyComponent,
  ],
})
export class SciPropertyModule {
}
