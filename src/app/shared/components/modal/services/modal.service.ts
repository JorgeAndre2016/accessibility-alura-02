import { Injectable, TemplateRef } from '@angular/core';

@Injectable()
export class ModalService {
   
    public open(config: ModalConfig) {
        console.log('open');
        return new ModalRef();
    }
    
}

export interface ModalConfig {
    templateRef: TemplateRef<any>;
    title: string;
}

export class ModalRef {
 
    public close(): void {
        console.log('close');
    }
}