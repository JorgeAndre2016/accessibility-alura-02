import { NgModule } from '@angular/core';

import { ModalComponent } from './modal.component';
import { CommonModule } from '@angular/common';
import { ModalService } from './services/modal.service';
import { FocusTrapModule } from '../../directives/focus-trap/focus-trap.module';
import { FocusBackModule } from '../../directives/focus-back/focus-back.module';

@NgModule({
    imports: [
        CommonModule,
        FocusTrapModule,
        FocusBackModule
    ],
    exports: [ModalComponent],
    declarations: [ModalComponent],
    providers: [ModalService],
})
export class ModalModule { }
