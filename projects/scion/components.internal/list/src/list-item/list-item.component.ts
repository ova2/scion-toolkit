/*
 * Copyright (c) 2018-2019 Swiss Federal Railways
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 *  SPDX-License-Identifier: EPL-2.0
 */

import {Component, ElementRef, HostBinding, Input} from '@angular/core';
import {FocusableOption, FocusOrigin} from '@angular/cdk/a11y';
import {SciListItemDirective} from '../list-item.directive';
import {SciListStyle} from '../metadata';
import {NgFor, NgIf, NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'sci-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgTemplateOutlet,
  ],
})
export class SciListItemComponent implements FocusableOption {

  @Input({required: true})
  public listItem!: SciListItemDirective;

  @HostBinding('class.active')
  @Input()
  public active = false;

  @Input({required: true})
  public style!: SciListStyle;

  @HostBinding('attr.tabindex')
  public tabindex = -1;

  constructor(private _host: ElementRef<HTMLElement>) {
  }

  /**
   * @implements FocusableOption
   */
  public focus(origin?: FocusOrigin): void {
    this._host.nativeElement.focus();
  }

  @HostBinding('class.option')
  public get optionStyle(): boolean {
    return this.style === 'option-item';
  }
}
