import { DramaService } from './../services/drama/drama.service';
import { Component, OnInit, Input } from '@angular/core';
import { Drama } from '../models/drama.model';

@Component({
  selector: 'app-table-comments',
  templateUrl: './table-comments.component.html',
  styleUrls: ['./table-comments.component.css']
})
export class TableCommentsComponent implements OnInit {

  @Input() idDrama;
  drama: Drama;

  // Tableau de commentaires
  comments: Array<any>;

  constructor(private dramaService: DramaService) { }

  ngOnInit(): void {
    this.drama = this.dramaService.getElementById(+this.idDrama);
    this.comments = this.drama.comments;
  }

}
