import { DramaService } from './../services/drama/drama.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dramas: Array<any>;

  constructor(private dramaService : DramaService) { }

  ngOnInit(): void {
    this.dramas = this.dramaService.dramas;
  }

}
