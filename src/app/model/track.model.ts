export interface TrackModel {
    colorDefinitions: ColorDefinitionModel[];
    rows: RowModel[];
}

export interface ColorDefinitionModel {
    colorName: string;
    colorCode: string;
}

export interface RowModel {
    tiles: TileModel[];
}

export interface TileModel {
    colorName: string;
    effect: string;
}
