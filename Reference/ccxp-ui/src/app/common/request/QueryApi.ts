import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { ClientEndPoint } from "./ClientEndPoint";

@Injectable()
export class QueryApi {
  constructor(private httpClient:HttpClient) {}

  doGet(url: string, params: any) {
    url = ClientEndPoint(url);
    return this.httpClient.get(url, {params: params});
  }

  doPost(url: string, params: any, headers?: any) {
    url = ClientEndPoint(url);
    return this.httpClient.post(url, params, headers);
  }

  doDelete(url: string, params: any) {
    url = ClientEndPoint(url);
    return this.httpClient.delete(url, params);
  }
  doPut(url: string, params: any, headers?: any) {
    url = ClientEndPoint(url);
    return this.httpClient.put(url, params, headers);
  }

  doPatch(url: string, params: any, headers?: any) {
    url = ClientEndPoint(url);
    return this.httpClient.patch(url, params, headers);
  }

  doOptions(url: string, params: any) {
    url = ClientEndPoint(url);
    return this.httpClient.options(url, params);
  }

}
