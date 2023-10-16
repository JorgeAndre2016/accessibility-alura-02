import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalRef, ModalService } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('Modal') public modalTemplateRef: TemplateRef<any>;

  // @ViewChild('template1') public template1: TemplateRef<any>;
  // @ViewChild('template2') public template2: TemplateRef<any>;
  // public selectedTemplate: TemplateRef<any>;

  title = 'a11y-p2';
  public firstName = "Jorge";
  public modalRef: ModalRef;

  constructor(
    private modalService: ModalService
    // private cd: ChangeDetectorRef
  ) { }

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
}
