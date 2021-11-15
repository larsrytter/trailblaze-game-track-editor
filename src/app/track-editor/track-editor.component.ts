import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorDefinitionModel, RowModel, TileModel, TrackModel } from '../model';
import { TrackDataService } from '../service/track-data.service';

@Component({
  selector: 'track-editor',
  templateUrl: './track-editor.component.html',
  styleUrls: ['./track-editor.component.css']
})
export class TrackEditorComponent implements OnInit {

  @Input() public trackData: TrackModel = null;
  @Output() public trackDataChanged: EventEmitter<TrackModel> = new EventEmitter<TrackModel>();

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

  constructor(private _trackDataService: TrackDataService) { }

  ngOnInit() {
    this._trackDataService.trackData.subscribe(trackData => {
      this.trackData = trackData;
      this._onTrackDataUpdated();
    });

  }

  private _onTrackDataUpdated() {
    if(this.trackData) {
      this._loadAvailableRows();

      this._rebuildColorDefinitions();

      this._loadStylesFromTrackData();
    }
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

    this._rebuildColorDefinitions();

    Object.assign(this.trackData, this.trackData);

    this._trackDataService.setTrackData(this.trackData);
    this._onTrackDataUpdated();
    this.trackDataChanged.emit(this.trackData);
  }

  private _rebuildColorDefinitions() {
    this.trackData.rows.forEach((row: RowModel) => {
      row.tiles.forEach((tile: TileModel) => {
        let colorDefinition: ColorDefinitionModel = this.trackData
                                                        .colorDefinitions
                                                        .find(c => c.colorName === tile.colorName);
        if (!colorDefinition) {
          colorDefinition = {
            colorCode: tile.colorName,
            colorName: tile.colorName
          };
          this.trackData.colorDefinitions.push(colorDefinition);
          this.availableColorDefinitions = this.trackData.colorDefinitions;
        }
      });
    });
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

  public deleteRow(row: RowModel): void {
    const index = this.trackData.rows.indexOf(row);
    if (index !== -1) {
      this.trackData.rows.splice(index, 1);
    }
  }

}
