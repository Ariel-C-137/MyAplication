import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef; 
  map!: GoogleMap;

  async ngAfterViewInit() {
    await this.loadMap();
  }

  async loadMap() {
    this.map = await GoogleMap.create({
      id: 'google-map',
      element: this.mapContainer.nativeElement,
      apiKey: 'YOUR_API_KEY',
      config: {
        center: {
          lat: -33.025703,
          lng: -71.551844,
        },
        zoom: 12,
      },
    });


    this.map.addMarker({
      coordinate: {
        lat: -33.025703,
        lng: -71.551844,
      },
      title: 'Mi ubicación',
    });
  }

  ngOnDestroy() {
    if (this.map) {
      this.map.destroy();
    }
  }
}
