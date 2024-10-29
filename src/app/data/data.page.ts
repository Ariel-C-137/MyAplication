import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Password } from 'primeng/password';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {
  items: any[] = [];
  newItem: any = { email:'',  Password:'' };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.dataService.getData().subscribe(data => {
      this.items = data.map(e => ({id: e.payload.doc.id, ...e.payload.doc.data() }));
    });
  }

  createItem() {
    this.dataService.createData(this.newItem).then(() => {
      this.newItem = { email: '', Password:'' };
    });
  }

  updateItem(id: string) {
    const updatedData = { email: '', Password:'' };
    this.dataService.updateData(id, updatedData);
  }

  deleteItem(id: string) {
    this.dataService.deleteData(id);
  }

}
