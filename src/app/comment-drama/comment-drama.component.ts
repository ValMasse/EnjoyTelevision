import { DramaService } from './../services/drama/drama.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment-drama',
  templateUrl: './comment-drama.component.html',
  styleUrls: ['./comment-drama.component.css']
})
export class CommentDramaComponent implements OnInit {

  idDrama: number;

  constructor(private dramaService: DramaService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idDrama = this.route.snapshot.params.id;
  }

}
