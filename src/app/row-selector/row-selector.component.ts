import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorDefinitionModel, RowModel, TileModel, TileWithColorCodeModel } from '../model';

@Component({
  selector: 'row-selector',
  templateUrl: './row-selector.component.html',
  styleUrls: ['./row-selector.component.css']
})
export class RowSelectorComponent implements OnInit {

  @Input() public availableRowTypes: RowModel[] = [];
  @Input() public availableColorDefinitions: ColorDefinitionModel[];
  @Input() public colors: {[key:string]: string} = {};
  @Output() public rowTypeSelected: EventEmitter<RowModel> = new EventEmitter<RowModel>();

  public numberOfTilesPerRow: number = 5;
  public newTilesArray:number[] = [];

  public isNewRowValid: boolean = false;

  public showNewTileSelector: boolean = true;

  private _newRowType: TileModel[] = [];

  constructor() { }

  ngOnInit() {
    this.newTilesArray = new Array(this.numberOfTilesPerRow);
  }

  public selectRowType(row: RowModel): void {
    const newRow = this._copyRow(row);
    this.rowTypeSelected.emit(newRow);
  }

  private _copyRow(sourceRow): RowModel {
    const newRow: RowModel = {
      tiles: []
    };

    sourceRow.tiles.forEach((sourceTile: TileModel) => {
      newRow.tiles.push({
        colorName: sourceTile.colorName,
        effect: sourceTile.effect
      });
    });
    return newRow;
  }

  public onNewTileSelected(tile: TileWithColorCodeModel, columnIndex) {
    if (!this.colors[tile.colorName]) {
      this.colors[tile.colorName] = `${tile.colorCode}`;
    }

    const newTile: TileModel = {
      colorName: tile.colorName,
      effect: tile.effect
    };
    
    this._newRowType[columnIndex] = newTile;
    this._validateNewRow();
  }

  private _validateNewRow() {
    this.isNewRowValid = false;
    if(this._newRowType.length === this.numberOfTilesPerRow 
        && this._newRowType.every(x => x !== null) ) {
          this.isNewRowValid = true;
        }
  }

  public onShowNewTileSelectorClicked(): void {
    this.showNewTileSelector = true;
  }

  public addNewRow() {
    const rowTypeToAdd: RowModel = {
      tiles: []
    }

    this._newRowType.forEach(tile => {
      rowTypeToAdd.tiles.push({
        colorName: tile.colorName,
        effect: tile.effect
      });
    })
    
    this.availableRowTypes.push(rowTypeToAdd);
    // Force change-detection on array by creating new instance - is there not a better way??!?
    this.availableRowTypes = this.availableRowTypes.map( x => x);
    // TODO: Clear tile-selector controls
    this._newRowType = [];
    this.showNewTileSelector = false;
    this.isNewRowValid = false;
  }
}
