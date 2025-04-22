import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private concertConfig ={name:'svt concert', price:3000}

  constructor(
    private httpClient: HttpClient
    ) { }

    private API_URL = "//localhost:8080/api/config";

    httpOptions ={
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    }

    create(data:any){
      return this.httpClient.post(this.API_URL + "/saveData", data, this.httpOptions);
    }
    // write a method for this in backend
    getLastConfig(){
      return this.httpClient.get(this.API_URL+"/getLastConfig", this.httpOptions)
    }
  

    //concert thing
    setConcertConfig(config:{ name: string; price: number }) {
      this.concertConfig = config;
    }
  
    getConcertConfig(): { name: string; price: number } {
      return this.concertConfig;
    }

    getSimulationData(){
      //use the correct method
      return this.httpClient.get(this.API_URL + "/getAll", this.httpOptions);
    }






}
