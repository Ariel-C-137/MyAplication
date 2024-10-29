import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapComponentPage } from './map-component.page';

describe('MapComponentPage', () => {
  let component: MapComponentPage;
  let fixture: ComponentFixture<MapComponentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
