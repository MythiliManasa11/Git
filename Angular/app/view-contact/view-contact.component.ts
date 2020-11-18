import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../contact-service.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  conn: Contact = new Contact();
  constructor(private service: ContactServiceService){
   
  }
  

  ngOnInit(): void {
  }
  getContact(){
    console.log(this.conn.contactName);
    this.service.findDepartment(this.conn.contactName)
    .subscribe((data: Contact) => {
        this.conn = data;
     
    });
    
  }
}
