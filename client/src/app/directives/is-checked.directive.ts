import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appIsChecked]'
})
export class IsCheckedDirective {
  @Input('ng-checkbox-check') set ngCheckboxCheck(value: boolean) {
    this.isChecked = value
  }

  private isChecked: boolean = false;

  @HostListener('checkedChange', ['$event'])
  onCheckedChange(checked: boolean) {
    this.isChecked = checked;
    console.log('checkbox is checked', this.isChecked);
  }

}
