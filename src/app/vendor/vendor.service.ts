import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private httpClient: HttpClient){ }
  
  private API_URL = "//localhost:8080/api/vendor";
  

  
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  }


  addVendor(data: any){
    return this.httpClient.post(this.API_URL + "/createVendor", data, this.httpOptions);
  }

  getVendors(){
    return this.httpClient.get(this.API_URL + "/getAllVendors", this.httpOptions);
  }

  deleteVendor(vendorId:any){
    return this.httpClient.delete(this.API_URL + "/deleteVendor/" + vendorId, this.httpOptions)
  }
}
