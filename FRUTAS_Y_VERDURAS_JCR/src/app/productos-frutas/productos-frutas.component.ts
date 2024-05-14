import { Component } from '@angular/core';

@Component({
  selector: 'app-productos-frutas',
  templateUrl: './productos-frutas.component.html',
  styleUrl: './productos-frutas.component.css'
})
export class ProductosFrutasComponent {
  cards = [
    { imageUrl: '../assets/imagenes/logoJCR.png', title: 'Card 1', description: 'Some quick example text for Card 1.' },
    { imageUrl: '../assets/imagenes/logoJCR.png', title: 'Card 2', description: 'Some quick example text for Card 2.' },
    { imageUrl: '../assets/imagenes/logoJCR.png', title: 'Card 3', description: 'Some quick example text for Card 3.' },
    { imageUrl: '../assets/imagenes/logoJCR.png', title: 'Card 4', description: 'Some quick example text for Card 4.' },
    { imageUrl: '../assets/imagenes/logoJCR.png', title: 'Card 5', description: 'Some quick example text for Card 5.' },
    { imageUrl: '../assets/imagenes/logoJCR.png', title: 'Card 6', description: 'Some quick example text for Card 6.' },
    { imageUrl: '../assets/imagenes/logoJCR.png', title: 'Card 7', description: 'Some quick example text for Card 7.' },
    // Agrega más tarjetas según sea necesario
  ];
}
