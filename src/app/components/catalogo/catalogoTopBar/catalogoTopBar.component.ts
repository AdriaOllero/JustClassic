import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogoTopBar',
  templateUrl: './catalogoTopBar.component.html',
  styleUrls: ['./catalogoTopBar.component.scss']
})
export class CatalogoTopBarComponent implements OnInit {
  nameSearch: string = ""
  constructor(public router:Router,public matDialog: MatDialog) { }

  ngOnInit() {
  }




}
