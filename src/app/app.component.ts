import {Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('input') input: ElementRef<HTMLInputElement>;
  @ViewChild('textarea') textarea: ElementRef<HTMLTextAreaElement>;

  _bold = false;
  _italic = false;
  _fontSize = 'normal';

  bold(b: boolean) {
    this._bold = b;
  }

  italic(b: boolean) {
    this._italic = b;
  }

  size(s: string) {
    this._fontSize = s;
    console.log(s);
  }

  getTextAreaClasses() {
    let r = `${this._fontSize}`;
    if (this._bold) {
      r += ' bold';
    }
    if (this._italic) {
      r += ' italic';
    }

    return r;
  }

  onNewDocument() {
    this.input.nativeElement.value = 'NEW DOCUMENT';
    this.textarea.nativeElement.value = '';
  }
}
