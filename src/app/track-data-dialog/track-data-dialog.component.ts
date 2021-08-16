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
    const trackJson = event.target.value;
    if (trackJson) {
      this.trackData = JSON.parse(trackJson);
      this._trackDataService.setTrackData(this.trackData);
    }
  }

  ngOnInit() {
    if (!this.trackData) {
      this.trackJson = this._getDefaultTrackData();
      this.trackData = JSON.parse(this.trackJson);
      this._trackDataService.setTrackData(this.trackData);
    }

    this._trackDataService.trackData.subscribe(trackData => {
      console.log('dialog trackData updated', trackData);
      this.trackData = trackData;
      this.trackJson = JSON.stringify(this.trackData);
    });
  }

  public toggleDisplaySource() {
    this.isDisplaySource = !this.isDisplaySource;
  }

  private _getDefaultTrackData() {
    const defaultTrackJson = `{
      "colorDefinitions": [
          {
              "colorName": "grey1",
              "colorCode": "#6B6B6B" 
          },
          {
              "colorName": "grey2",
              "colorCode": "RGB(84, 59, 59)" 
          },
          {
              "colorName": "blue1",
              "colorCode": "#0000DD" 
          },
          {
              "colorName": "purple",
              "colorCode": "#EE00EE" 
          },
          {
              "colorName": "yellow",
              "colorCode": "#FFFF00" 
          },
          {
              "colorName": "blue2",
              "colorCode": "#0000EE"
          },
          {
              "colorName": "blue3",
              "colorCode": "#0000CC"
          }
      ],
      "rows": [
          {
              "tiles": [
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey2",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey2",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "colorName": "grey2",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey2",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey2",
                      "effect": "none"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey2",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey2",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "colorName": "grey2",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey2",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey2",
                      "effect": "none"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "effect": "hole"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "effect": "hole"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "colorName": "grey2",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey2",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey2",
                      "effect": "none"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey2",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey2",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "colorName": "blue1",
                      "effect": "JUMP"
                  },
                  {
                      "colorName": "blue1",
                      "effect": "JUMP"
                  },
                  {
                      "colorName": "blue1",
                      "effect": "JUMP"
                  },
                  {
                      "colorName": "blue1",
                      "effect": "JUMP"
                  },
                  {
                      "colorName": "blue1",
                      "effect": "JUMP"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "effect": "hole"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "effect": "hole"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "effect": "hole"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "effect": "hole"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "effect": "hole"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "effect": "hole"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "effect": "hole"
                  },
                  {
                      "colorName": "purple",
                      "effect": "INVERTCONTROLS"
                  },
                  {
                      "effect": "hole"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "yellow",
                      "effect": "TURBO"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "yellow",
                      "effect": "TURBO"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "yellow",
                      "effect": "TURBO"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "yellow",
                      "effect": "TURBO"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "yellow",
                      "effect": "TURBO"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "yellow",
                      "effect": "TURBO"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "yellow",
                      "effect": "TURBO"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "yellow",
                      "effect": "TURBO"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "yellow",
                      "effect": "TURBO"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "yellow",
                      "effect": "TURBO"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "yellow",
                      "effect": "TURBO"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "yellow",
                      "effect": "TURBO"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey2",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey2",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "colorName": "grey2",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey2",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey2",
                      "effect": "none"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "blue2",
                      "effect": "slow"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "blue2",
                      "effect": "slow"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "effect": "hole"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "effect": "hole"
                  },
                  {
                      "colorName": "grey2",
                      "effect": "none"
                  },
                  {
                      
                      "effect": "hole"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey2",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey2",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  }
              ]
          },
          {
              "tiles": [
                  {
                      "colorName": "grey2",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey2",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey1",
                      "effect": "none"
                  },
                  {
                      "colorName": "grey2",
                      "effect": "none"
                  }
              ]
          }
      ]
  }`;
    return defaultTrackJson;
  }


}
