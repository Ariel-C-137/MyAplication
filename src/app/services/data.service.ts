import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: AngularFirestore) {}

  createData(data: any): Promise<any> {
    return this.firestore.collection('items').add(data);
  }

  getData(): Observable<any[]> {
    return this.firestore.collection('items').snapshotChanges();
  }

  updateData(id: string, data: any): Promise<void> {
    return this.firestore.collection('items').doc(id).update(data);
  }

  deleteData(id: string): Promise<void> {
    return this.firestore.collection('items').doc(id).delete();
  }
}
