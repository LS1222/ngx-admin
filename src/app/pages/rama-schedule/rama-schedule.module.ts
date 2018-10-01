import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { RamaScheduleComponent } from './rama-schedule.component';
import { StatusCardComponent } from '../rama-schedule/status-card/status-card.component';
import { ContactsComponent } from '../rama-schedule/contacts/contacts.component';
import { RoomsComponent } from '../rama-schedule/rooms/rooms.component';
import { RoomSelectorComponent } from '../rama-schedule/rooms/room-selector/room-selector.component';
import { TemperatureComponent } from '../rama-schedule/temperature/temperature.component';
import { TemperatureDraggerComponent } from '../rama-schedule/temperature/temperature-dragger/temperature-dragger.component';
import { TeamComponent } from '../rama-schedule/team/team.component';
import { KittenComponent } from '../rama-schedule/kitten/kitten.component';
import { SecurityCamerasComponent } from '../rama-schedule/security-cameras/security-cameras.component';
import { ElectricityComponent } from '../rama-schedule/electricity/electricity.component';
import { ElectricityChartComponent } from '../rama-schedule/electricity/electricity-chart/electricity-chart.component';
import { WeatherComponent } from '../rama-schedule/weather/weather.component';
import { SolarComponent } from '../rama-schedule/solar/solar.component';
import { PlayerComponent } from '../rama-schedule/rooms/player/player.component';
import { TrafficComponent } from '../rama-schedule/traffic/traffic.component';
import { TrafficChartComponent } from '../rama-schedule/traffic/traffic-chart.component';


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
    RamaScheduleComponent,
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
export class RamaScheduleModule { }
