import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrackEditorComponent } from './track-editor/track-editor.component';
import { RowSelectorComponent } from './row-selector/row-selector.component';
import { ReversePipe } from './pipes';
import { TrackDataDialogComponent } from './track-data-dialog/track-data-dialog.component';
import { TrackDataService } from './service/track-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TrackEditorComponent,
    RowSelectorComponent,
    ReversePipe,
    TrackDataDialogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TrackDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
