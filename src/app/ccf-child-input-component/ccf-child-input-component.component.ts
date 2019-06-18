import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ccf-child-input-component',
  templateUrl: './ccf-child-input-component.component.html',
  styleUrls: ['./ccf-child-input-component.component.css']
})
export class CcfChildInputComponentComponent implements OnInit {

  @Input('parentForm') parentForm: FormGroup;
  constructor() { 
    console.log('Parent Form : ', this.parentForm);
  }

  ngOnInit() {
  }

}
