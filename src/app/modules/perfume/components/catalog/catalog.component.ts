import { Component, OnInit } from '@angular/core';

interface Perfume {
  name: string;
  description: string;
  image: string;
  family: string;
  intensity: string;
  duration: number;
}

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  olfactoryFamilies = ['Florales', 'Amaderadas', 'Cítricas', 'Orientales', 'Frutales'];
  intensities = ['Baja', 'Media', 'Alta'];
  durations = [4, 6, 8, 12];

  selectedFamily: string = '';
  selectedIntensity: string = '';
  selectedDuration: number = 4;

  perfumes: Perfume[] = [
    { name: 'Perfume 1', description: 'Descripción de Perfume 1', image: '/floral 1.png', family: 'Florales', intensity: 'Alta', duration: 8 },
    { name: 'Perfume 2', description: 'Descripción de Perfume 2', image: '/amederado 1.png', family: 'Amaderadas', intensity: 'Media', duration: 6 },
    { name: 'Perfume 3', description: 'Descripción de Perfume 3', image: '/citrica 1.png', family: 'Cítricas', intensity: 'Baja', duration: 4 },
    { name: 'Perfume 4', description: 'Descripción de Perfume 4', image: '/oriental.png', family: 'Orientales', intensity: 'Alta', duration: 12 },
    { name: 'Perfume 5', description: 'Descripción de Perfume 5', image: '/frutal 1.png', family: 'Frutales', intensity: 'Media', duration: 8 },
    { name: 'Perfume 6', description: 'Descripción de Perfume 6', image: '/floral 2.png', family: 'Florales', intensity: 'Alta', duration: 8 },
    { name: 'Perfume 7', description: 'Descripción de Perfume 7', image: '/citrica 2.png', family: 'Cítricas', intensity: 'Baja', duration: 6 },
    { name: 'Perfume 8', description: 'Descripción de Perfume 8', image: '/amaderado 2 .png', family: 'Amaderadas', intensity: 'Media', duration: 4 },
    { name: 'Perfume 9', description: 'Descripción de Perfume 9', image: '/oriental 2.png', family: 'Orientales', intensity: 'Alta', duration: 12 },
    { name: 'Perfume 10', description: 'Descripción de Perfume 10', image: '/floral 3.png', family: 'Florales', intensity: 'Alta', duration: 6 },
    { name: 'Perfume 11', description: 'Descripción de Perfume 11', image: '/amaderado 3.png', family: 'Amaderadas', intensity: 'Baja', duration: 4 },
    { name: 'Perfume 12', description: 'Descripción de Perfume 12', image: '/citrica 3.png', family: 'Cítricas', intensity: 'Alta', duration: 8 },
    { name: 'Perfume 13', description: 'Descripción de Perfume 13', image: '/frutal 2.png', family: 'Frutales', intensity: 'Media', duration: 6 },
    { name: 'Perfume 14', description: 'Descripción de Perfume 14', image: '/oriental 3 .png', family: 'Orientales', intensity: 'Baja', duration: 12 },
    { name: 'Perfume 15', description: 'Descripción de Perfume 15', image: '/floral 4 .png', family: 'Florales', intensity: 'Alta', duration: 8 },
    { name: 'Perfume 16', description: 'Descripción de Perfume 16', image: '/amaderado 4 .png', family: 'Amaderadas', intensity: 'Media', duration: 6 },
    { name: 'Perfume 17', description: 'Descripción de Perfume 17', image: '/citrica 4.png', family: 'Cítricas', intensity: 'Baja', duration: 4 },
    { name: 'Perfume 18', description: 'Descripción de Perfume 18', image: '/oriental 4.png', family: 'Orientales', intensity: 'Alta', duration: 12 },
    { name: 'Perfume 19', description: 'Descripción de Perfume 19', image: '/frutal 3.png', family: 'Frutales', intensity: 'Media', duration: 8 },
    { name: 'Perfume 20', description: 'Descripción de Perfume 20', image: '/floral 5.jpg', family: 'Florales', intensity: 'Baja', duration: 6 }
  ];

  filteredPerfumes: Perfume[] = [...this.perfumes];

  comments = [
    { user: 'Usuario 1', text: 'Me encanta este perfume, es perfecto para el día a día.', rating: 5 },
    { user: 'Usuario 2', text: 'No me gustó mucho, el aroma es muy fuerte.', rating: 2 }
  ];

  internalComments = [
    { user: 'Admin', text: 'Este perfume es un best-seller, se recomienda para el invierno.', rating: 5 }
  ];

  newComment = '';
  newRating = 5;
  newInternalComment = '';
  newInternalRating = 5;

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredPerfumes = this.perfumes.filter(perfume =>
      (!this.selectedFamily || perfume.family === this.selectedFamily) &&
      (!this.selectedIntensity || perfume.intensity === this.selectedIntensity) &&
      (perfume.duration >= this.selectedDuration)
    );
  }

  stars(rating: number) {
    return new Array(rating).fill(0);
  }

  addToFavorites(perfume: Perfume) {
    console.log(`${perfume.name} añadido a favoritos`);
  }

  submitComment() {
    if (this.newComment) {
      this.comments.push({ user: 'Usuario', text: this.newComment, rating: this.newRating });
      this.newComment = '';
      this.newRating = 5;
    }
  }

  submitInternalComment() {
    if (this.newInternalComment) {
      this.internalComments.push({ user: 'Equipo', text: this.newInternalComment, rating: this.newInternalRating });
      this.newInternalComment = '';
      this.newInternalRating = 5;
    }
  }

  viewDetails(perfume: Perfume) {
    console.log('Ver detalles de', perfume);
  }
}
