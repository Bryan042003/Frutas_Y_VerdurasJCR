import { Component, OnInit } from '@angular/core';
import { Map, tileLayer, Marker } from 'leaflet';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent implements OnInit {
  private map: any;
  private marker: any;

  private cargarMapa2(): void {
    this.map = L.map('map', {
      center: [9.880730, -84.083961],
      zoom: 18
    });
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19, minZoom: 17
    }).addTo(this.map);

    var greenIcon = L.icon({
      iconUrl: '../assets/imagenes/logoJCR.png',
      iconSize: [100, 100], // size of the icon
      iconAnchor: [50, 25], // point of the icon which will correspond to marker's location
      popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    this.marker = L.marker([9.880730, -84.083961], { icon: greenIcon }).addTo(this.map);

    var customControl = L.Control.extend({
      options: {
        position: 'topright'
      },
      onAdd: function () {
        var container = L.DomUtil.create('button');
        container.textContent = 'Como llegar';
        container.style.backgroundColor = '#79AD00';
        container.style.color = 'white';
        container.style.fontSize = '20px';
        container.style.width = '300px';
        container.style.height = '60px';
        container.style.padding = '10px';
        container.style.borderRadius = '10px';
        container.style.border = '2px solid white';
        container.style.cursor = 'pointer';
        container.style.display = 'flex';
        container.style.justifyContent = 'center';
        container.style.alignItems = 'center';
        container.innerHTML = '<i class="material-icons" style="font-size:30px; margin-right: 20px">assistant_direction</i><p style="margin: 0;">Cómo llegar</p>';

        container.onmouseover = function () {
          (this as HTMLElement).style.backgroundColor = '#9BCD00'; // Change to the hover color you want
          (this as HTMLElement).style.transform = 'scale(1.05)'; // Change to the hover color you want
        }
        container.onmouseout = function () {
          (this as HTMLElement).style.backgroundColor = '#79AD00'; // Change back to the original color
          (this as HTMLElement).style.transform = 'scale(1)'; // Change back to the original color
          (this as HTMLElement).style.transition = 'all 0.4s'; // Change back to the original color
        }


        container.onclick = function () {
          window.open('https://www.google.com/maps/dir/?api=1&destination=9.880730,-84.083961', '_blank');
        }
        return container;
      }
    });
    this.map.addControl(new customControl());
  }
  ngOnInit(): void {
    this.cargarMapa2();
  }



}
