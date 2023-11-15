import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  getAll():string[] {
    return [
      '/assets/Productos/AlfaRomeo/BuzoAlfaRomeo.jpg',
      '/assets/Productos/AlfaRomeo/Camiseta Alfa Romeo.jpg',
      '/assets/Productos/AlfaRomeo/Campera Alfa Romeo.jpg',
      '/assets/Productos/AlfaRomeo/Coche Alfa Romeo Valtteri Bottas.jpg',
      '/assets/Productos/AlfaRomeo/Coche Alfa Romeo Zhou Guanyu.jpg',
      '/assets/Productos/AlfaRomeo/Gorra Alfa Romeo Guanyu Zhou.jpg',
      '/assets/Productos/AlfaRomeo/Gorra Alfa Romeo Valterri Bottas.jpg',
      '/assets/Productos/AlfaRomeo/Gorra Alfa Romeo.jpg',
      '/assets/Productos/Alpha Tauri/Buzo Alpha Tauri.jpg',
      '/assets/Productos/Alpha Tauri/Camiseta Alpha Tauri.jpg',
      '/assets/Productos/Alpha Tauri/Campera Alpha Tauri.jpg',
      '/assets/Productos/Alpha Tauri/Chomba Alpha Tauri.jpg',
      '/assets/Productos/Alpha Tauri/Coche Alpha Tauri Nyck de Vries.jpg',
      '/assets/Productos/Alpha Tauri/Coche Alpha Tauri Yuki Tsunoda.jpg',
      '/assets/Productos/Alpha Tauri/Gorra Alpha Tauri.jpg',
      '/assets/Productos/Alpine/Buzo Alpine.jpg',
      '/assets/Productos/Alpine/Camiseta Alpine.jpg',
      '/assets/Productos/Alpine/Campera Alpine.jpg',
      '/assets/Productos/Alpine/Chomba Alpine.jpg',
      '/assets/Productos/Alpine/Coche Alpine Esteban Ocon.jpg',
      '/assets/Productos/Alpine/Gorra Alpine.jpg',
      '/assets/Productos/Aston Martin/Buzo Aston Martin.jpg',
      '/assets/Productos/Aston Martin/Camiseta Aston Martin.jpg',
      '/assets/Productos/Aston Martin/Campera Aston Martin.jpg',
      '/assets/Productos/Aston Martin/Chomba-Aston-Martin.jpg',
      '/assets/Productos/Aston Martin/Gorra Aston Martin.jpg',
      '/assets/Productos/Ferrari/Buzo Ferrari.jpg',
      '/assets/Productos/Ferrari/Camiseta Ferrari.jpg',
      '/assets/Productos/Ferrari/Campera Ferrari.jpg',
      '/assets/Productos/Ferrari/Chomba Ferrari.jpg',
      '/assets/Productos/Ferrari/Coche Ferrari Carlos Sainz.jpg',
      '/assets/Productos/Ferrari/Coche Ferrari Charles Leclerc.jpg',
      '/assets/Productos/Ferrari/Gorra Ferrari.jpg',
      '/assets/Productos/McLaren/Buzo McLaren.jpg',
      '/assets/Productos/McLaren/Camiseta McLaren.jpg',
      '/assets/Productos/McLaren/Campera McLaren.jpg',
      '/assets/Productos/McLaren/Chomba McLaren.jpg',
      '/assets/Productos/McLaren/Coche McLaren Lando Norris.jpg',
      '/assets/Productos/McLaren/Gorra McLaren.jpg',
      '/assets/Productos/Mercedes AMG/Buzo Mercedes AMG.jpg',
      '/assets/Productos/Mercedes AMG/Camiseta Mercedes AMG.jpg',
      '/assets/Productos/Mercedes AMG/Campera Mercedes AMG.jpg',
      '/assets/Productos/Mercedes AMG/Chomba Mercedes AMG.jpg',
      '/assets/Productos/Mercedes AMG/Coche Mercedes AMG George Russell.jpg',
      '/assets/Productos/Mercedes AMG/Coche Mercedes AMG Lewis Hamilton.jpg',
      '/assets/Productos/Mercedes AMG/Gorra Mercedes AMG.jpg',
      '/assets/Productos/Red Bull/Buzo Red Bull.jpg',
      '/assets/Productos/Red Bull/Camiseta Red Bull.jpg',
      '/assets/Productos/Red Bull/Campera Red Bull.jpg',
      '/assets/Productos/Red Bull/Chomba Red Bull.jpg',
      '/assets/Productos/Red Bull/Coche Red Bull Max Verstappen.jpg',
      '/assets/Productos/Red Bull/Coche-Red-Bull-Sergio-Perez.jpg',
      '/assets/Productos/Red Bull/Gorra-Red-Bull.jpg',
      '/assets/Productos/Williams/Buzo Williams.jpg',
      '/assets/Productos/Williams/Camiseta Williams.jpg',
      '/assets/Productos/Williams/Campera Williams.jpg',
      '/assets/Productos/Williams/Chomba Williams.jpg',
      '/assets/Productos/Williams/Gorra-Williams.jpg',
    ]
  }
}
