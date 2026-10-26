import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  contactType: 'tech' | 'edu' | 'tutor' = 'tech';
  isSubmitted = false;

  // Form Model
  nombre = '';
  empresa = '';
  correo = '';
  telefono = '';
  
  // Tech fields
  necesidadTech = 'Digitalización de registros y reportes';
  presupuestoEstimado = '$600.000 - $1.200.000 COP (Piloto)';

  // Edu fields
  nivelEdu = 'Bachillerato';
  asignatura = 'Matemáticas / Cálculo';
  modalidadEdu = 'Virtual';
  esMenor = false;

  // Tutor fields
  carreraOProfesion = '';
  asignaturasTutor = '';

  mensaje = '';

  setContactType(type: 'tech' | 'edu' | 'tutor') {
    this.contactType = type;
    this.isSubmitted = false;
  }

  onSubmit() {
    this.isSubmitted = true;
  }

  resetForm() {
    this.isSubmitted = false;
    this.nombre = '';
    this.correo = '';
    this.telefono = '';
    this.mensaje = '';
  }
}
