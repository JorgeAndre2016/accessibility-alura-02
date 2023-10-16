import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from '@angular/core';
import { ModalConfig } from '../interfaces/modal-config';
import { ModalComponent } from '../modal.component';
import { BodyInjectorService } from 'src/app/shared/services/body-injector';

@Injectable()
export class ModalService {
   
    private componentFactory: ComponentFactory<ModalComponent>;

    constructor(
        componentFactortResolver: ComponentFactoryResolver,
        private injector: Injector,
        private bodyInjectorService: BodyInjectorService
    ) {
        this.componentFactory = componentFactortResolver.resolveComponentFactory(ModalComponent);
    }

    public open(config: ModalConfig) {
        const componentRef = this.createComponentRef();
        componentRef.instance.config = config;
        console.log('open');
        this.bodyInjectorService.stackBeforeAppRoot(componentRef);
        return new ModalRef(componentRef);
    }

    private createComponentRef(): ComponentRef<ModalComponent> {
        return this.componentFactory.create(this.injector);
    }
    
}

export class ModalRef {
 
    constructor(private componentRef: ComponentRef<ModalComponent>) { }

    public close(): void {
        console.log('close');
        this.componentRef.destroy();
    }
}