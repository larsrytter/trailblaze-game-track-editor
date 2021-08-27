import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TileWithColorCodeModel } from '../model';

@Component({
  selector: 'tile-selector',
  templateUrl: './tile-selector.component.html',
  styleUrls: ['./tile-selector.component.css']
})
export class TileSelectorComponent implements OnInit {

  public color:string = '#ffffff';
  public tileEffect: string = null;
  public tileEffectOptions: TileEffectOption[] = [];
  public colorsInUse: string[] = []; 
  @Input() public colors: {[key:string]: string} = {};
  @Output() public tileSelected: EventEmitter<TileWithColorCodeModel> = new EventEmitter<TileWithColorCodeModel>();
  
  constructor() { }

  ngOnInit() {
    this._loadTileEffectOptions();
    this.colorsInUse = Object.values(this.colors);
  }

  public onValueChanged() {
    if(this.color && this.tileEffect) {
      let colorName = null;

      const colorNames = Object.keys(this.colors);
      colorNames.forEach( key => { 
        if (this.colors[key] === this.color) {
          colorName = key;
        }
      });
      // TODO: Actual input for colorName...
      if (!colorName) {
        colorName = this.color;
      }

      const tile: TileWithColorCodeModel = {
        colorName: colorName,
        colorCode: this.color,
        effect: this.tileEffect
      }
      
      this.tileSelected.emit(tile);
    }
  }

  private _loadTileEffectOptions(): void {
    this.tileEffectOptions = [
      {
        name: 'None',
        value: 'none'
      },
      {
        name: 'Jump',
        value: 'JUMP'
      },
      {
        name: 'Turbo',
        value: 'TURBO'
      },
      {
        name: 'Slow',
        value: 'SLOW'
      },
      {
        name: 'Invert controls',
        value: 'INVERTCONTROLS'
      },
      {
        name: 'Hole',
        value: 'hole'
      }
    ];
  }

}

interface TileEffectOption {
  name: string;
  value: string;
}
