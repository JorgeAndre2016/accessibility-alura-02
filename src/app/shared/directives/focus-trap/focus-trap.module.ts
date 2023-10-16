import { NgModule } from '@angular/core';

import { FocusTrapDirective } from './focus-trap.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [FocusTrapDirective],
    declarations: [FocusTrapDirective],
    providers: [],
})
export class FocusTrapModule { }
