/*
 * Copyright (c) 2018-2019 Swiss Federal Railways
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 *  SPDX-License-Identifier: EPL-2.0
 */

import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {KeyValue, KeyValuePipe, NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'sci-qualifier-chip-list',
  templateUrl: './qualifier-chip-list.component.html',
  styleUrls: ['./qualifier-chip-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    KeyValuePipe,
  ],
})
export class SciQualifierChipListComponent implements OnChanges {

  private _qualifierKeys: string[] = [];

  @Input()
  public qualifier?: Qualifier | undefined | null;

  @Input()
  public type?: string | undefined;

  public ngOnChanges(changes: SimpleChanges): void {
    this._qualifierKeys = Object.keys(this.qualifier ?? {});
  }

  /**
   * Compares qualifier entries by their position in the object.
   */
  public qualifierKeyCompareFn = (a: KeyValue<string, any>, b: KeyValue<string, any>): number => {
    return this._qualifierKeys.indexOf(a.key) - this._qualifierKeys.indexOf(b.key);
  };
}

export interface Qualifier {
  [key: string]: string | number | boolean;
}
