import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/Rx";

@Injectable()
export class InterceptorService {
  public loaderStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(){}

  /**
   * for displaying spinner in every request
   * @param {boolean} value
   */
  displaySpinner=(value: boolean)=>{
    this.loaderStatus.next(value);
  }
}
