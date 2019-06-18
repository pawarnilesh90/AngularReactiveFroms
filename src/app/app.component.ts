import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CcfChildInputComponentComponent } from './ccf-child-input-component/ccf-child-input-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  parentForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.parentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });

    // this.parentForm.valueChanges.subscribe(newVal => console.log(newVal));
  }

  submitForm() {
    console.log('Form Values :', this.parentForm.value);
  }
}
