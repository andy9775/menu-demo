import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {CdkMenuItem, CdkMenuItemCheckbox, CdkMenuItemRadio} from '@angular/cdk-experimental/menu';
import {EventManager} from '@angular/platform-browser';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent {
  private _fontId = 'normal';

  @Output() bold = new EventEmitter<boolean>();
  _bold = false;

  @Output() italic = new EventEmitter<boolean>();
  _italic = false;

  @Output() fontSize = new EventEmitter<string>();

  @Output() onNewDocument = new EventEmitter<void>();

  onToggleCheckbox(item: CdkMenuItemCheckbox) {
    if (item.id === 'bf') {
      this._bold = item.checked;
      this.bold.emit(this._bold);
    } else {
      this._italic = item.checked;
      this.italic.emit(this._italic);
    }
  }

  onToggleRadio(item: CdkMenuItemRadio) {
    this._fontId = item.id;
    this.fontSize.emit(this._fontId);
  }

  isRadioChecked(id: 'small' | 'normal' | 'large') {
    return this._fontId === id;
  }
}
