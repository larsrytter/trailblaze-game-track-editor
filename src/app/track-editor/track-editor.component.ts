import { Component, Input, OnInit } from '@angular/core';
import { ColorDefinitionModel, RowModel, TileModel, TrackModel } from '../model';

@Component({
  selector: 'track-editor',
  templateUrl: './track-editor.component.html',
  styleUrls: ['./track-editor.component.css']
})
export class TrackEditorComponent implements OnInit {

  @Input() public trackData: TrackModel = null;
  public availableRows:RowModel[] = [];
  public availableColorDefinitions:ColorDefinitionModel[];
  public colors: {[key:string]: string} = {};

  public rowWidth: number = 5;
  public isDisplayRowSelector: boolean = false;
  public addRowIndex: number = null;
  
  public mouseOverRowIndex: number = null;
  public mouseoverRow(rowIndex: number) {
    this.mouseOverRowIndex = rowIndex;
  }

  public endMouseoverRow(rowIndex: number) {
    if (this.mouseOverRowIndex === rowIndex) {
      this.mouseOverRowIndex = null;
    }
  }
  
  constructor() { }

  ngOnInit() {
    this._loadAvailableRows();
    this._loadStylesFromTrackData();
  }
  public displayRowOptions(rowIndex:number = null) {
    this.isDisplayRowSelector = true;
    this.addRowIndex = rowIndex;
    console.log('add before index', rowIndex);
  }

  public onRowTypeSelected(row: RowModel) {
    if(this.addRowIndex !== null) {
      this.trackData.rows.splice(this.addRowIndex, 0, row);
      this.addRowIndex++;
    } else {
      this.trackData.rows.push(row);
    }
    
  }

  private _loadStylesFromTrackData() {
    if (this.trackData.colorDefinitions) {
      this.availableColorDefinitions = this.trackData.colorDefinitions;
      this.trackData.colorDefinitions.forEach((colorDefinition:ColorDefinitionModel) => {
        this.colors[colorDefinition.colorName] = colorDefinition.colorCode;
      });

    } else {
      this.availableColorDefinitions = [];
    }
  }

  private _loadAvailableRows() {
    if(this.trackData && this.trackData.rows) {
      this.trackData.rows.forEach((row:RowModel) => {
        if(this.availableRows.every((rowOption:RowModel) => !this._areRowsSimiliar(row, rowOption))) {
          this.availableRows.push(row);
        }
      });
    } 
  }

  private _areRowsSimiliar(rowA:RowModel, rowB:RowModel) {
    const rowsEqual:boolean = rowA.tiles.length === rowB.tiles.length
      && rowA.tiles.every((tileA:TileModel, idx) => {
        const tileB = rowB.tiles[idx];
        return tileA.colorName === tileB.colorName && tileA.effect === tileB.effect;
      });

    return rowsEqual;
  }

}
