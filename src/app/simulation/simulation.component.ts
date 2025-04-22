import { Component, OnInit } from '@angular/core';
import { SimulationService } from './simulation.service';
import { ConfigurationService } from '../configuration/configuration.service';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent implements OnInit {
  totalTicketsToRelease: number = 0;
  currentTicketsAvailable: number = 0;
  totalTicketsSold: number = 0;
  config: any;
  intervalId:any;

  constructor(private simulationService: SimulationService, private configurationService: ConfigurationService) {}

  ngOnInit(): void {
    this.loadConfiguration();
  }

  loadConfiguration(): void {
    this.configurationService.getLastConfig().subscribe(
      (config: any) => {
        this.config = config;
      },
      (error: any) => {
        console.error('Error loading configuration:', error);
      }
    );
  }

  startSimulation(): void {
    if (this.config) {
      this.simulationService.startSimulation(this.config).subscribe({
        next: (response) => {
          console.log(response);
          this.refreshStats();
          this.intervalId = setInterval(() => {
            this.refreshStats();
          }, 1000); // refresh stats every 1 second
          
        },
        error: (err) => {
          console.error('Error starting simulation:', err);
        }
      });
    } else {
      console.error('No configuration found. Please load configuration before starting simulation.');
    }
  }

  stopSimulation(): void {
    this.simulationService.stopSimulation().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.error('Error stopping simulation:', err);
      }
    });
  }

  refreshStats(): void {
    this.simulationService.getSimulationStats().subscribe({
      next: (stats: any) => {
        this.totalTicketsToRelease = stats.totalTicketsToRelease;
        this.currentTicketsAvailable = stats.currentTicketsAvailable;
        this.totalTicketsSold = stats.totalTicketsSold;
      },
      error: (err: any) => {
        console.error('Error fetching stats:', err);
      }
    });
  }
}