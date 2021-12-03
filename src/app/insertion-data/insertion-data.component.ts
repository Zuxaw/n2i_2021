import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-insertion-data',
  templateUrl: './insertion-data.component.html',
  styleUrls: ['./insertion-data.component.scss']
})
export class InsertionDataComponent implements OnInit {

  admins: any[];
  adminSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.adminSubscription = this.authService.adminSubject.subscribe(
      (admins: any[]) => {
        this.admins = admins;
      }
    );
    this.authService.emitAdminSubject();
  }

  onAddAdmin(){
    this.authService.addAdmin("admin@stks.com");
  }

}
