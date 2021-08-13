import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrackEditorComponent } from './track-editor/track-editor.component';
import { RowSelectorComponent } from './row-selector/row-selector.component';
import { ReversePipe } from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    TrackEditorComponent,
    RowSelectorComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
