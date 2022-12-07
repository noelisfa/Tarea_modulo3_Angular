import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
//Inicializar variables de instancia para almacenar los datos con los que trata el servicio
  miPortfolio: any;
  nombre: string = '';
  apellido: string = '';
  profesion1: string = '';
  profesion2: string = '';
  acerca: string = '';
  

  constructor(
    //Inyectar el servicio para tener acceso en las clases a los metodos
    private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el servicio
    this.portfolioService.getDatos().subscribe(portfolio => {
      console.log(portfolio);

      //Definir informacion a mostrar
      this.nombre=portfolio.nombre;
      this.apellido=portfolio.apellido;
      this.profesion1=portfolio.profesion1;
      this.profesion2=portfolio.profesion2;
      this.acerca=portfolio.acerca;
      this.miPortfolio=portfolio;

    });
  }
  
}
