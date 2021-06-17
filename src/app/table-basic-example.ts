import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  creacion: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Toyota corala auris 25 14 cv miercoles ej ',
    weight: 1.0079,
    creacion: '14/05/2021',
    symbol: 'H'
  },
  {
    position: 2,
    name: 'Toyota Yaris',
    weight: 4.0026,
    creacion: '14/05/2021',
    symbol: 'He'
  },
  {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    creacion: '14/05/2021',
    symbol: 'Li'
  },
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    creacion: '14/05/2021',
    symbol: 'Be'
  },
  {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    creacion: '14/05/2021',
    symbol: 'B'
  },
  {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    creacion: '14/05/2021',
    symbol: 'C'
  },
  {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    creacion: '14/05/2021',
    symbol: 'N'
  },
  {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    creacion: '14/05/2021',
    symbol: 'O'
  },
  {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    creacion: '14/05/2021',
    symbol: 'F'
  },
  {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    creacion: '14/05/2021',
    symbol: 'Ne'
  }
];

/**
 * @title Table with sorting
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html'
})
export class TableBasicExample implements OnInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'creacion',
    'symbol',
    'actions'
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
