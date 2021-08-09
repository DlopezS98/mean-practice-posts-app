import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  isExpanded: boolean = false;
  showTooltipDelay: number = 500;
  constructor() { }

  ngOnInit(): void {
  }

}
