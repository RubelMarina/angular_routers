import { Component, OnInit } from '@angular/core';
import {PhraseService} from "../../shared/phrase.service";
import {Phrase} from "../../shared/phrase.class";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.css']
})
export class PhraseDetailsComponent implements OnInit {

  phrase!: Phrase | undefined;

  constructor(
    private phraseService: PhraseService,
    private activatedRoute: ActivatedRoute,
    private rooter: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = +params.id
      if (isNaN(id)) return
      this.phraseService.getPhrase(id).then(res => this.phrase = res)
    })
  }

  gotoPhrasesList(): void {
    this.rooter.navigate(['../', {id: this.phrase?.id}], {relativeTo: this.activatedRoute}).then()
  }

  }


