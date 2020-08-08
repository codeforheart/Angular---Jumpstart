import { sandboxOf } from 'angular-playground';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { DataService } from '../../core/services/data.service';
import { CreateOrderComponent } from './create-order.component';
import { MockDataService, MockActivatedRoute, getActivatedRouteWithParent } from '../../shared/mocks';
import { ActivatedRoute } from '@angular/router';

const sandboxConfig = {
  imports: [ SharedModule, CoreModule ],
  providers: [
      { provide: DataService, useClass: MockDataService },
      { provide: ActivatedRoute, useFactory: () => {
        const route = getActivatedRouteWithParent([{ id: '1' }]);
        return route;
      }}
  ],
  label: 'Customer Details Component'
};

export default sandboxOf(CreateOrderComponent, sandboxConfig)
  .add('With a Customer', {
    template: `<cm-create-order></cm-create-order>`
  })
  .add('Without a Customer', {
    template: `<cm-create-order></cm-create-order>`,
    providers: [
      { provide: ActivatedRoute, useFactory: () => {
        const route = getActivatedRouteWithParent([{ id: null }]);
        return route;
      }}
    ]
  });
