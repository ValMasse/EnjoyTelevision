import { DramaService } from './../services/drama/drama.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  drama: any;

  imgPath: string;

  constructor(private dramaService: DramaService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.drama = this.dramaService.getElementById(+id);
  }

  ngOnChanges() {
    this.imgPath = 'assets/images/' + this.drama.name.toLowerCase() + '.jpg';
  }

}
