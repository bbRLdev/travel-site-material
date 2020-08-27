import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailService } from 'src/app/shared/email.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  isLoading: boolean = false;
  doneLoading: boolean = false;
  error = null;

  contactForm: FormGroup;
  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup(
      {
        'firstName': new FormControl(null, { validators: [Validators.required] }),
        'lastName': new FormControl(null, { validators: [Validators.required] }),
        'email': new FormControl(null, { validators: [Validators.required, Validators.email] }),
        'message': new FormControl(null, { validators: [Validators.required, Validators.minLength(12)] }),
      }
    );
  }

  onFormSubmit() {
    this.isLoading = true;
    this.emailService.postMail(this.contactForm.value).subscribe(
      () => {
        this.isLoading = false;
        this.doneLoading = true;
        this.error = null;
      }, error => {
        this.error = 'An unknown error occurred.';
        this.isLoading = false;
        this.doneLoading = false;
      }
    );
    // setTimeout(() => { 
    //   this.contactForm.reset();
    //   this.isLoading = false;
    //   this.doneLoading = true;
    // }, 3000);

  } 

  onClearSuccessMessage() {
    this.isLoading = false;
    this.doneLoading = false;
  }

  onClearError() {
    this.error = null;
    this.isLoading = false;
    this.doneLoading = false;
    this.contactForm.reset();
  }

}
