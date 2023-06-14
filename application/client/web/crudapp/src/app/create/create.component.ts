import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})

export class CreateComponent implements OnInit {
    public ticket:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
    }

    constructor (
        private createService: CreateService,
    ) { }

    ngOnInit() {
        this.ticket.created_by = sessionStorage.getItem('email') || ''; 
        
        
    
    }
    GpCreate() {
        this.createService.GpCreate(this.ticket).subscribe((data:any) => {
            this.ticket.name = ''
 	 	this.ticket.email = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}