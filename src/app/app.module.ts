import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AppWarningComponent } from './app-warning/app-warning.component';
import { AppSuccessComponent } from './app-success/app-success.component';
import { InputTaskComponent } from './input-task/input-task.component';
import { DirectiveTaskComponent } from './directive-task/directive-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AppWarningComponent,
    AppSuccessComponent,
    InputTaskComponent,
    DirectiveTaskComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
