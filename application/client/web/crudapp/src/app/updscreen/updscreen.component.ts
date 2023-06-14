import { Component, OnInit } from '@angular/core';
import { UpdscreenService } from './updscreen.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-updscreen',
  templateUrl: './updscreen.component.html',
  styleUrls: ['./updscreen.component.scss'],
})

export class UpdscreenComponent implements OnInit {
    queryId: any;
    public ticket:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
    }

    constructor (
        private updscreenService: UpdscreenService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.ticket.created_by = sessionStorage.getItem('email') || ''; 
        
            this.activatedRoute.queryParams.subscribe(params => { 
 	 	this.queryId = params['id'];
            });
        
        this.GpGetEntityById();
    
    }
    GpUpdate() {
        this.updscreenService.GpUpdate(this.ticket).subscribe((data:any) => {
            this.ticket.name = ''
 	 	this.ticket.email = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpDelete() {
        this.updscreenService.GpDelete(this.queryId).subscribe((data:any) => {
            this.GpGetEntityById();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpGetEntityById() {
        this.updscreenService.GpGetEntityById(this.queryId).subscribe((data:any) => {
            this.ticket = data
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}