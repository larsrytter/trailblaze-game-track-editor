import { Component, OnInit } from '@angular/core';
import { TrackModel } from '../model';
import { TrackDataService } from '../service/track-data.service';

@Component({
  selector: 'track-data-dialog',
  templateUrl: './track-data-dialog.component.html',
  styleUrls: ['./track-data-dialog.component.css'],
})
export class TrackDataDialogComponent implements OnInit {

  public trackData: TrackModel = null;
  
  public trackJson: string = null;
  
  public isDisplaySource: boolean = false;

  constructor(//private _differs: KeyValueDiffers
    private _trackDataService: TrackDataService) { }

  public trackInputChanged(event) {
    console.log('trackInputChanged event', event);
    console.log('trackInputChanged trackData', this.trackData);
    const trackJson = event.target.value;
    if (trackJson) {
      this.trackData = JSON.parse(trackJson);
      this._trackDataService.setTrackData(this.trackData);
    }
  }

  ngOnInit() {
    console.log('dialog ngOnInit', this.trackData);
    

    this._trackDataService.trackData.subscribe(trackData => {
      console.log('dialog trackData updated', trackData);
      this.trackData = trackData;
      this.trackJson = JSON.stringify(this.trackData);
    });
  }

  public toggleDisplaySource() {
    this.isDisplaySource = !this.isDisplaySource;
  }


}
