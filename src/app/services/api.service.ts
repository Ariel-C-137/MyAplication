import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCvVDqxqee5-zGpftK9vjgQzuiaMuEzEe4&callback=console.debug&libraries=maps,marker&v=beta'

  constructor() { }
}
