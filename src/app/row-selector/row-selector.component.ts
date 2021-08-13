import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorDefinitionModel, RowModel, TileModel } from '../model';

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

  constructor() { }

  ngOnInit() {

  }

  public selectRowType(row: RowModel): void {
    console.log('RowType selected', row);
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
}
