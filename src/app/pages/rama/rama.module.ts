import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { RamaRoutingModule, routedComponents } from './rama-routing.module';

@NgModule({
  imports: [ThemeModule, RamaRoutingModule],
  declarations: [...routedComponents],
})
export class RamaModule {}
