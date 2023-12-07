import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ng-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent  {
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      query: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(300)
      ]]
    });  
  }

  onSubmit(): void {
    const query = this.searchForm.value.query;
    console.log('Searching for : ' + query);
  }
}
