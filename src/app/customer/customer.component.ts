import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';
import { ConfigurationService } from '../configuration/configuration.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent {
//   customer = { name: '', email: '', contact: '' };
//   customers: Array<{ name: string; email: string; contact: string }> = [];

//   constructor(private router: Router) {}

//   addCustomer(): void {
//     this.customers.push({ ...this.customer });
//     this.customer = { name: '', email: '', contact: '' };
//   }

//  Simulation(): void {
//     this.router.navigate(['/simulation']);
//   }

  customerForm!: FormGroup;
  customers:any[] = [];
  concertName:string = '';
  price: number = 0;

  constructor(
    private fb: FormBuilder,
    private customerService:CustomerService,
    private configurationService:ConfigurationService,
    private router: Router

  ){}

  ngOnInit(){
    this.initForm();
    this.loadConcertInfo();
    this.fetchCustomers();
  }

  initForm(){
    this.customerForm = this.fb.group({
      customerName: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      contactNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
  }

  loadConcertInfo(){
    const config = this.configurationService.getConcertConfig();
    this.concertName = config.name;
    this.price = config.price;
  }


  addCustomer(){
    if(this.customerForm.valid){
      const newCustomer = {
        //search on this 3 dots
        ...this.customerForm.value,
        concertName:this.concertName,
        price:this.price
      };

      this.customerService.addCustomer(newCustomer).subscribe(() => {
        this.fetchCustomers();
        this.customerForm.reset();
      });
    }
  }



  fetchCustomers() {
    this.customerService.getCustomers().subscribe(
      (customers:any) => {
        this.customers = customers;
      },
      (error: any) => {
        console.error('Error fetching customers:', error);
      }
    );
  }

  delete(customerId:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.customerService.deleteCustomer(customerId).subscribe({
          next: (response: any) => {
            console.log('Delete response:', response);
  
            Swal.fire({
              title: 'Deleted!',
              text: 'The vendor has been deleted.',
              icon: 'success',
            });
  
            // Refresh the vendor list
            this.fetchCustomers();
          },
          error: (err: any) => {
            console.error('Delete error:', err);
  
            Swal.fire({
              title: 'Error!',
              text: 'There was an error deleting the vendor.',
              icon: 'error',
            });
          },
        });
      }
    });
  
  }



  next(){
    this.router.navigate(['/simulation'],{ replaceUrl: true })
  }

  

}
