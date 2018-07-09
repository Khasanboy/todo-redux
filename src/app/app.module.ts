import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgRedux, NgReduxModule} from '@angular-redux/store';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { rootReducer} from './store/store';
import { IAppState, INITIAL_STATE } from './store/state';
import { TodoOverviewComponent } from './components/todo-overview/todo-overview.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoOverviewComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
 }
