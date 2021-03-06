import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LanguageService} from '../language.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.css']
})
export class NewRecordComponent implements OnInit, AfterViewInit {

  recordTable: FormGroup;
  control: FormArray;
  touchedRows: any;

  constructor(private fb: FormBuilder,
              private languageService: LanguageService,
              private router: Router) {

  }

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
      eng: new FormControl('', {
        updateOn: 'blur',
        validators: [
          Validators.required]
      }),
      kor: new FormControl('', {
        updateOn: 'blur',
        validators: [
          Validators.required]
      }),
      esp: new FormControl('', {
        updateOn: 'blur',
        validators: [
          Validators.required]
      }),
    })
  }

  get getFormControls() {
    return this.recordTable.get('tableRows') as FormArray;
  }

  submitForm() {
    this.languageService.createRecord(this.recordTable.value['tableRows']).subscribe((result) => {
      console.info(result)
      let date = new Date()
      let today = date.getFullYear() + '-' + (date.getMonth()+1 < 10 ? '0' + (date.getMonth()+1) : date.getMonth()+1) + '-' + (date.getDate() < 10 ? '0'+ date.getDate() : date.getDate())
      this.router.navigateByUrl(`/language/record/${today}`)
    })
  }

  deleteRow(idx: number) {
    this.getFormControls.removeAt(idx)
  }


}
