import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  currentTab: 'repuestos' | 'cotizador' = 'repuestos';

  // Demo 1: Digitalizador Repuestos IA
  isProcessingAi = false;
  aiProcessed = false;
  isHumanVerified = false;
  dailyRecords = [
    { item: 'Juego de pastillas de freno delanteras', medio: 'Efectivo', valor: 85000, validado: true },
    { item: 'Filtro de aceite sintético 10W-40', medio: 'Nequi', valor: 38000, validado: true },
    { item: 'Amortiguador trasero derecho Nissan', medio: 'Bancolombia', valor: 240000, validado: true },
    { item: '4 Bujías de Iridio NGK', medio: 'Efectivo', valor: 110000, validado: true },
    { item: 'Líquido para frenos DOT4 (500ml)', medio: 'Nequi', valor: 25000, validado: false }
  ];

  processPhotoAi() {
    this.isProcessingAi = true;
    setTimeout(() => {
      this.isProcessingAi = false;
      this.aiProcessed = true;
    }, 1200);
  }

  toggleVerification() {
    this.isHumanVerified = !this.isHumanVerified;
    if (this.isHumanVerified) {
      this.dailyRecords.forEach(r => r.validado = true);
    }
  }

  get totalEfectivo(): number {
    return this.dailyRecords
      .filter(r => r.medio === 'Efectivo')
      .reduce((acc, curr) => acc + curr.valor, 0);
  }

  get totalNequi(): number {
    return this.dailyRecords
      .filter(r => r.medio === 'Nequi')
      .reduce((acc, curr) => acc + curr.valor, 0);
  }

  get totalBancolombia(): number {
    return this.dailyRecords
      .filter(r => r.medio === 'Bancolombia')
      .reduce((acc, curr) => acc + curr.valor, 0);
  }

  get granTotal(): number {
    return this.totalEfectivo + this.totalNequi + this.totalBancolombia;
  }

  // Demo 2: Cotizador
  calcDivision: 'tech' | 'edu' = 'tech';
  
  // Cotizador Tech
  techScope: 'piloto' | 'medio' | 'personalizado' = 'piloto';
  includeMaintenance = false;

  get techPrice(): number {
    let base = 900000;
    if (this.techScope === 'piloto') base = 900000;
    if (this.techScope === 'medio') base = 1200000;
    if (this.techScope === 'personalizado') base = 1600000;
    return base;
  }

  get techMaintenance(): number {
    return this.includeMaintenance ? 180000 : 0;
  }

  // Cotizador Edu
  eduLevel: 'primaria' | 'bachillerato' | 'universidad' = 'bachillerato';
  eduModalidad: 'virtual' | 'presencial' = 'virtual';
  eduSessions: number = 5;

  get pricePerHour(): number {
    let rate = 35000;
    if (this.eduLevel === 'primaria') rate = 30000;
    if (this.eduLevel === 'bachillerato') rate = 38000;
    if (this.eduLevel === 'universidad') rate = 48000;
    if (this.eduModalidad === 'presencial') rate += 7000;
    return rate;
  }

  get totalEduPrice(): number {
    const raw = this.pricePerHour * this.eduSessions;
    if (this.eduSessions >= 10) return Math.round(raw * 0.90); // 10% desc
    if (this.eduSessions >= 5) return Math.round(raw * 0.95); // 5% desc
    return raw;
  }
}
