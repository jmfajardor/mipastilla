import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MocksService {
  prescriptions: any;
  constructor() { }

  getPrescriptions() {
    return this.prescriptions = [
      {
        id: 1,
        creationDate: '2019-11-01',
        hospName: 'MEREDI',
        doctorName: 'CONCEPCION BERNAL',
        speciality: 'MEDICINA GENERAL',
        medicines: [
          {
            name: 'AMOXACILINA',
            cant: '100ML',
            frequency: '8H',
            dose: '2P',
            totalDose: '16P',
            starts: '2019-11-09T23:00',
            status: 'active',
            count: 16,
          },
          {
            name: 'IBUPROFENO',
            cant: '500ML',
            frequency: '3D',
            dose: '1P',
            totalDose: '8D',
            starts: '2019-11-09T21:00',
            status: 'active',
            count: 24,
          },
        ],
        status: 'active',
      },
      {
        id: 2,
        creationDate: '2019-11-01',
        hospName: 'RAMON Y CAJAL',
        doctorName: 'LUISA PAREDES',
        speciality: 'DERMATOLOGIA',
        medicines: [
          {
            name: 'LORATADINA',
            cant: '100ML',
            frequency: '6H',
            dose: '1P',
            totalDose: '24P',
            starts: '2019-17-09T23:00',
            status: 'active',
            count: 24,
          },
          {
            name: 'VIDISAN',
            cant: '200ML',
            frequency: '2D',
            dose: '1P',
            totalDose: '12P',
            starts: '2019-17-09T21:00',
            status: 'active',
            count: 12,
          },
        ],
        status: 'active',
      },
    ];
  }
}
