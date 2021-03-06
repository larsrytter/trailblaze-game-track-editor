import { Component, OnInit } from '@angular/core';
import { TrackModel } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'trailblaze-leveleditor';

  constructor(){}

  ngOnInit(): void {
    
  }

  private _loadTrackData(): TrackModel {
    const trackJson = `{
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
    const trackModel: TrackModel = JSON.parse(trackJson);
    return trackModel;
  }
}
