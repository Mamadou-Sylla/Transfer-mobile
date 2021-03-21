import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private Authlogout: AuthService ) { }

  ngOnInit() {
  }
  logout(){
    this.Authlogout.logout();
  }
}
