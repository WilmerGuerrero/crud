import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { User } from 'src/app/model/user.model'
import { Injectable } from '@angular/core';
import { firestore } from 'firebase';
import { AngularFireStorage } from '@angular/fire/storage';




@Injectable({
  providedIn: 'root'
})
export class Service {


  constructor(private database:AngularFireDatabase) { }

  list: AngularFireList<any>;
  getUser() {
    return this.list= this.database.list('User');
}
  addUser(User:User){
    return this.database.list('User').push(User);
  }

  updateUser(user:User, id:string){

    return this.database.list('User').update(id,user);
  }
  deleteUser(id:string){

    return this.database.list('User').remove(id);

  }
}
