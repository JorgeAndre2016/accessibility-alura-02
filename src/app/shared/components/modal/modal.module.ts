import { NgModule } from '@angular/core';

import { ModalComponent } from './modal.component';
import { CommonModule } from '@angular/common';
import { ModalService } from './services/modal.service';

@NgModule({
    imports: [CommonModule],
    exports: [ModalComponent],
    declarations: [ModalComponent],
    providers: [ModalService],
})
export class ModalModule { }
