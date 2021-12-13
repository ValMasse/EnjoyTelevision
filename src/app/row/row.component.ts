import { DramaService } from './../services/drama/drama.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input() id: number;
  @Input() name: string;
  @Input() releaseDate: string;

  detailsUrl: string;
  editUrl: string;
  commentsUrl: string;

  constructor(private dramaService: DramaService) { }

  ngOnInit(): void {

    this.detailsUrl = '/drama/' + this.id;

    this.editUrl = '/drama/edit/' + this.id;

    this.commentsUrl = '/drama/comments/' + this.id;
  }

  onDeleteDrama(){
    if (confirm("Etes-vous sûr de vouloir supprimer cette série ?")){
      this.dramaService.deleteDrama(+this.id);
    }
  }

}
