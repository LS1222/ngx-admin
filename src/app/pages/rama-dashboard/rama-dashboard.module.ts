import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { RamaDashboardComponent } from './rama-dashboard.component';
import { StatusCardComponent } from '../rama-dashboard/status-card/status-card.component';
import { ContactsComponent } from '../rama-dashboard/contacts/contacts.component';
import { RoomsComponent } from '../rama-dashboard/rooms/rooms.component';
import { RoomSelectorComponent } from '../rama-dashboard/rooms/room-selector/room-selector.component';
import { TemperatureComponent } from '../rama-dashboard/temperature/temperature.component';
import { TemperatureDraggerComponent } from '../rama-dashboard/temperature/temperature-dragger/temperature-dragger.component';
import { TeamComponent } from '../rama-dashboard/team/team.component';
import { KittenComponent } from '../rama-dashboard/kitten/kitten.component';
import { SecurityCamerasComponent } from '../rama-dashboard/security-cameras/security-cameras.component';
import { ElectricityComponent } from '../rama-dashboard/electricity/electricity.component';
import { ElectricityChartComponent } from '../rama-dashboard/electricity/electricity-chart/electricity-chart.component';
import { WeatherComponent } from '../rama-dashboard/weather/weather.component';
import { SolarComponent } from '../rama-dashboard/solar/solar.component';
import { PlayerComponent } from '../rama-dashboard/rooms/player/player.component';
import { TrafficComponent } from '../rama-dashboard/traffic/traffic.component';
import { TrafficChartComponent } from '../rama-dashboard/traffic/traffic-chart.component';


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
    RamaDashboardComponent,
    StatusCardComponent,
    TemperatureDraggerComponent,
    ContactsComponent,
    RoomSelectorComponent,
    TemperatureComponent,
    RoomsComponent,
    TeamComponent,
    KittenComponent,
    SecurityCamerasComponent,
    ElectricityComponent,
    ElectricityChartComponent,
    WeatherComponent,
    PlayerComponent,
    SolarComponent,
    TrafficComponent,
    TrafficChartComponent,
  ],
})
export class RamaDashboardModule { }
