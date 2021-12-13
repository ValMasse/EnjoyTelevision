import { Router } from '@angular/router';
import { DramaService } from './../services/drama/drama.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-new-drama',
  templateUrl: './new-drama.component.html',
  styleUrls: ['./new-drama.component.css']
})
export class NewDramaComponent implements OnInit {

  constructor(private dramaService: DramaService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitNewDrama(form: NgForm){

    const name = form.value.dramaName;
    const releaseDate = form.value.dateRelease;
    const numberSeasons = form.value.numberSeasons;
    const description = form.value.description;
    const critical = form.value.critical;
    const picture = form.value.picture;

    this.dramaService.addDrama(name, releaseDate, numberSeasons, description, critical, picture);

    this.router.navigate(['dramas']);

  }

}
