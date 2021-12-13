import { DramaService } from './../services/drama/drama.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Drama } from '../models/drama.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-drama',
  templateUrl: './edit-drama.component.html',
  styleUrls: ['./edit-drama.component.css']
})
export class EditDramaComponent implements OnInit {

  msg: string;

  id: number;

  dramaForm: FormGroup;

  currentDrama: Drama;

  constructor(private formBuilder: FormBuilder,
              private dramaService: DramaService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;
    this.currentDrama = this.dramaService.getElementById(+this.id);
    this._initForm();
  }


  _initForm(){

    this.dramaForm = this.formBuilder.group({
      'dramaName': [this.currentDrama.name, Validators.required],
      'dateRelease': [this.currentDrama.releaseDate, Validators.required],
      'numberSeasons': this.currentDrama.numberSeasons,
      'description': this.currentDrama.description,
      'critical': this.currentDrama.critical,
      'picture': this.currentDrama.picture,
    });

  }

  onSubmitDramaForm(){
    const formVals = this.dramaForm.value;

      this.dramaService.updateDrama(this.id, formVals.dramaName, formVals.dateRelease, formVals.numberSeasons, formVals.description, formVals.critical, formVals.picture)
        this.msg = 'Mise à jour effectuée !'
      this.router.navigate(['dramas']);
  }

}
