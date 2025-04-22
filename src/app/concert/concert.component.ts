import { Component } from '@angular/core';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent {
  concerts = [
    {
      name: 'ATEEZ Concert',
      date: 'Dec 14, 2024 - Dec 15, 2024',
      stadium: 'Inspire Arena',
      price: 2500,
      image: 'assets/images/ATEEZ_3.jpg'
    },
    {
      name: 'BOYNEXTDOOR Tour',
      date: 'Dec 20, 2024 - Dec 22, 2024',
      stadium: 'KSPO Dome',
      price: 3000,
      image: 'assets/images/BOYNEXTDOOR TOUR.jpg'
    },
    {
      name: 'SEVENTEEN World Tour',
      date: 'Jan 11, 2025 - Jan 12, 2025',
      stadium: 'Inspire Arena',
      price: 3200,
      image: 'assets/images/SVT 2.jpg'
      // image: 'assets/images/SEVENTEEN.jpg'
    },
    {
      name: 'TXT Asia Tour',
      date: 'Jan 25, 2025 - Jan 26, 2025',
      stadium: 'KSPO Dome',
      price: 2700,
      image: 'assets/images/TXT.jpg'
    },
    {
      name: 'Taylor Swift World Tour',
      date: 'Feb 15, 2025 - Feb 16, 2025',
      stadium: 'Olympic Park',
      price: 4000,
      image: 'assets/images/TS.jpg'
    },
    {
      name: 'Ariana Grande Live',
      date: 'Mar 5, 2025 - Mar 6, 2025',
      stadium: 'Inspire Arena',
      price: 3500,
      image: 'assets/images/AG.jpg'
    },
    {
      name: 'One Direction Reunion',
      date: 'Apr 10, 2025 - Apr 11, 2025',
      stadium: 'San Siro Stadium',
      price: 5000,
      image: 'assets/images/1D_2.jpg'
    },
    {
      name: 'IU Asia Tour',
      date: 'Jan 11, 2025 - Jan 12, 2025',
      stadium: 'Inspire Arena',
      price: 2800,
      image: 'assets/images/IU 2.jpg'
    }
  ];
}

