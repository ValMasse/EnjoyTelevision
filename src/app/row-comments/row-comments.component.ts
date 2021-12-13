import { DramaService } from './../services/drama/drama.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-row-comments]',
  templateUrl: './row-comments.component.html',
  styleUrls: ['./row-comments.component.css']
})
export class RowCommentsComponent implements OnInit {

  @Input() id: number;
  @Input() date: string;
  @Input() author: string;
  @Input() content: string;
  @Input() idDrama: number;

  constructor(private dramaService: DramaService,) { }

  ngOnInit(): void {
  }

  onDeleteComment(){
    if (confirm("Etes-vous sûr de vouloir supprimer ce commentaire ?")){
      this.dramaService.deleteComment(+this.idDrama, +this.id);
    }
  }



}
