import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor( private httpClient: HttpClient) { }
  private API_URL = "//localhost:8080/api/customer";

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  }
  addCustomer(data: any){
    return this.httpClient.post(this.API_URL + "/createCustomer", data, this.httpOptions);
  }

  getCustomers(){
    return this.httpClient.get(this.API_URL + "/getAllCustomers", this.httpOptions);
  }
  
  deleteCustomer(customerId:any){
    return this.httpClient.delete(this.API_URL + "/deleteCustomer/" + customerId, this.httpOptions)
  }


}
