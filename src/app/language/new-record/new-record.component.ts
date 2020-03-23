import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.css']
})
export class NewRecordComponent implements OnInit, AfterViewInit {

  recordTable: FormGroup;
  control: FormArray;
  touchedRows: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.touchedRows = [];
    this.recordTable = this.fb.group({
      tableRows: this.fb.array([])
    });
    this.addRow();
  }

  ngAfterViewInit() {
    this.control = this.recordTable.get('tableRows') as FormArray
  }

  addRow() {
    const control = this.recordTable.get('tableRows') as FormArray;
    control.push(this.initiateForm())
  }

  initiateForm(): FormGroup {
    return this.fb.group({
      english: new FormControl('', {
        updateOn: 'blur',
        validators: [
          Validators.required]
      }),
      korean: new FormControl('', {
        updateOn: 'blur',
        validators: [
          Validators.required]
      }),
      spanish: new FormControl('', {
        updateOn: 'blur',
        validators: [
          Validators.required]
      }),
      check: [''],
      isEditable: [true]
    })
  }

  get getFormControls() {
    return this.recordTable.get('tableRows') as FormArray;
  }

  submitForm() {
    console.info(this.recordTable.value)
  }

  deleteRow(idx: number) {
    this.getFormControls.removeAt(idx)
  }


}
