import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { Clients, ClientsService } from '../home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule]
})

export class HomeComponent implements OnInit {
  clients: Clients[] = [];

  constructor(private clientsService: ClientsService) {

  }

  ngOnInit(): void {
    console.log('home.component');
    this.clientsService.PegarTodos().subscribe((resultado) => {
      this.clients = resultado;
    });
  }

  displayedColumns: string[] = ['id', 'name', 'lastName', 'email'];
}