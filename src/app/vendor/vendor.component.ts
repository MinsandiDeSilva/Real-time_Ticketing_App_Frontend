import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VendorService } from './vendor.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css'],
})
export class VendorComponent {

  // vendor = { name: '', email: '', contact: '' };
  // vendors: Array<{ name: string; email: string; contact: string }> = [];

  // constructor(private router: Router) {}

  // addVendor(): void {
  //   this.vendors.push({ ...this.vendor });
  //   this.vendor = { name: '', email: '', contact: '' };
  // }

  // AddCustomers(): void {
  //   this.router.navigate(['/customer']);
  // }

  vendorForm! : FormGroup;
  vendors:any[] = [];

  constructor(
    private fb: FormBuilder,
    private vendorService: VendorService,
    private router: Router
  ){}

  ngOnInit(){
    this.initForm();
    this.fetchvendors();
  }

  initForm(){
    this.vendorForm = this.fb.group({
      vendorName: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      contactNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
  }

  addVendor(){
    if(this.vendorForm.valid){
      const newVendor = this.vendorForm.value;
      console.log('Form data before submitting:', newVendor);

      this.vendorService.addVendor(newVendor).subscribe(() => {
        this.fetchvendors();
        this.vendorForm.reset();

      });
    }
  }
  
  fetchvendors(){
    this.vendorService.getVendors().subscribe({
      next: (response: any) => {
        console.log('API Response:', response);
        this.vendors = response; // Adjust if `vendors` is a property of the API response
      },
    });
  }

  delete(vendorId:any){
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
        this.vendorService.deleteVendor(vendorId).subscribe({
          next: (response: any) => {
            console.log('Delete response:', response);
  
            Swal.fire({
              title: 'Deleted!',
              text: 'The vendor has been deleted.',
              icon: 'success',
            });
  
            // Refresh the vendor list
            this.fetchvendors();
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

  addCustomer(){
    this.router.navigate(['/customer'])
  }

  


}
