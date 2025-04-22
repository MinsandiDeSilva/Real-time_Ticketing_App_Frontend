import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationService } from './configuration.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css'],
})
export class ConfigurationComponent {

  configForm! : FormGroup;

  configurationDetails: any = {};

  //concertConfiguration
  concerts=[
    {name: 'Ateez Concert', price: 2500},
    {name: 'Boynextdoor tour', price: 3000},
    {name: 'Seventeen World Tour', price: 3200},
    {name: 'TXT Asia Tour', price: 2700},
    {name: 'Taylor Swift', price: 4000},
    {name: 'Araiana Grande Live', price: 3500},
    {name: 'One Direction Reunion', price: 5000},
    {name: 'IU Asia Tour', price: 2800},
  ];


  constructor(
    private fb: FormBuilder,
    private router:Router,
    private configurationService:ConfigurationService

    ){}

    ngOnInit(){
      this.configForm = this.fb.group({
        totalTickets:['',[Validators.required,Validators.min(1)]],
        maxTicketCapacity:['',[Validators.required,Validators.min(1)]],
        ticketReleaseRate:['',[Validators.required,Validators.min(1)]],
        customerRetrievalRate:['',[Validators.required,Validators.min(1)]],
        concert:['',Validators.required],

      });
    }

    onSubmit(){
      if(this.configForm.valid){
        console.log('configuration submitted:',this.configForm.value);
        const selectedConcert = this.getSelectedConcert();
        
        if(selectedConcert){
          this.configurationService.setConcertConfig(selectedConcert);

          const newConfiguration = {
            ...this.configForm.value,
            concert: selectedConcert.name, 
          };

        this.saveConfiguration(newConfiguration);
        this.router.navigate(['/vendor']);

        }else {
          console.error('No concert selected!');
        }

        
      }else{
        console.error('Form is invalid');
      }
    }

    loadPreviousConfig(){
      this.configurationService.getLastConfig().subscribe(
        (response:any) =>{
          //patch values to form
          this.configForm.patchValue(response);
      
        },
        (error:any) => {
          console.error('Error loading previous configuration:', error)
        }
      );
    }

    saveConfiguration(configuration:any){
      this.configurationService.create(configuration).subscribe(
        (response:any) => {
          console.log('Configuration saved successfully:', response);

          // After saving, navigate to the vendor component (add vendor screen)
          this.router.navigate(['/vendor']); 
        },
        (error:any) => {
          console.error('Error saving configuration:', error);
        }
      );
    }

    getSelectedConcert(): { name: string; price: number }| null {
      const concertName = this.configForm.get('concert')?.value;
      return this.concerts.find(concert => concert.name === concertName) || null;
    }


    get controls(){
      return this.configForm.controls;
    }




}






 


