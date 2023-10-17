import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from './shared/components/modal/services/modal.service';
import { fade } from './shared/animations/fade';
import { ModalRef } from './shared/components/modal/models/modal-ref';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade]
})
export class AppComponent implements OnInit {
  @ViewChild('Modal') public modalTemplateRef: TemplateRef<any>;

  // @ViewChild('template1') public template1: TemplateRef<any>;
  // @ViewChild('template2') public template2: TemplateRef<any>;
  // public selectedTemplate: TemplateRef<any>;

  title = 'a11y-p2';
  public firstName = "Jorge";
  public modalRef: ModalRef;
  public info = false;
  public form: FormGroup;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder
    // private cd: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['Jorge', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      info: [false]
    });
  }

  // public ngAfterViewInit(): void {
    // this.selectedTemplate = this.template1;
    // this.cd.detectChanges();
  // }

  public openModal(): void {
    // this.selectedTemplate = this.template2;
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    });
  }

  public submit(): void {

    if (this.form.invalid) {
      return;
    }
    
    console.log(this.form.value);
    this.modalRef.close();
  }
}
