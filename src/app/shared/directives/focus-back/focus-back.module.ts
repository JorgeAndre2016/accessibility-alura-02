import { NgModule } from '@angular/core';

import { FocusBackDirective } from './focus-back.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [FocusBackDirective],
    declarations: [FocusBackDirective],
    providers: [],
})
export class FocusBackModule { }
