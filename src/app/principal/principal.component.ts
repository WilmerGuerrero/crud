import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import {AngularFireModule} from '@angular/fire'


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  user:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
