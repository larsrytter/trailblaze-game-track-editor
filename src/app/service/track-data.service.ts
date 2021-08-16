import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { TrackModel } from "../model";

@Injectable()
export class TrackDataService {

    public trackData:BehaviorSubject<TrackModel> = new BehaviorSubject(null);

    public setTrackData(trackData: TrackModel) {
        this.trackData.next(trackData);
    }
}