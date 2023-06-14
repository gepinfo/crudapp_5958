import { Component, OnInit } from '@angular/core';
import { AllscreenService } from './allscreen.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-allscreen',
  templateUrl: './allscreen.component.html',
  styleUrls: ['./allscreen.component.scss'],
})

export class AllscreenComponent implements OnInit {
    columnDefs: any = [{ headerName: 'A', field: 'name'  },{ headerName: 'B', field: 'email'  },];
    public ticket:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any[] = [];
 	rowIndex: Number = 0;

    constructor (
        private allscreenService: AllscreenService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.ticket.created_by = sessionStorage.getItem('email') || ''; 
        
        
    
    }
    GpGetAllValues() {
        this.allscreenService.GpGetAllValues().subscribe((data:any) => {
            this.rowData = data;
 	 	console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpRoute(queryId:any) {
        this.router.navigate(['./updscreen'], { queryParams: { 'id': queryId } })
    }
    onSelectionChanged(values:any) {
        this.GpRoute(values._id);
    }
}