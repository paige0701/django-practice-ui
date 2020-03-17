import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.css']
})
export class NewRecordComponent implements OnInit {

  items = [];

  recordTable: FormGroup;
  control: FormArray;
  mode: boolean;
  touchedRows: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.touchedRows = [];
    this.recordTable = this.fb.group({
      tableRows: this.fb.array([])
    });
    this.addRow();
    // for (let i = 1 ; i <= 3; i++) {
    //   this.items.push({'no': i, 'kor': '', 'eng': '', 'esp': ''})
    // }
  }

  ngAfterOnInit() {
    this.control = this.recordTable.get('tableRows') as FormArray
  }

  addRow() {
    const control = this.recordTable.get('tableRows') as FormArray;
    control.push(this.initiateForm())
    console.info(control)
  }

  initiateForm(): FormGroup {
    return this.fb.group({
      no: [1],
      english: ['ㅇㅇ'],
      korean: ['ㅇㅇ'],
      spanish: ['ㅇㅇ'],
      delete: ['x'],
      isEditable: [true]
    })
  }

  get getFormControls() {
    return this.recordTable.get('tableRows') as FormArray;
  }

  doneRow() {

  }


}
