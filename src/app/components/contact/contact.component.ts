import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactFormData } from 'src/models/contact-form-data.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Output() public sendForm: EventEmitter<ContactFormData> = new EventEmitter<ContactFormData>();

  public btnDisabled = true;
  public formData: ContactFormData = {
    email: "",
    message: ""
  };

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.btnDisabled = false;
    }, 5000);
  }

  public submitForm(): void {
    this.sendForm.emit(this.formData);
  }

  public showInputData(event: any): void {
    console.log(event.target.value)
  }
}
