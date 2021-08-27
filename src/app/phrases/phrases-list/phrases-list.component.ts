import { Component, OnInit } from '@angular/core';
import {Phrase} from "../../shared/phrase.class";
import {PHRASES} from "../../shared/mock-data";
import {PhraseService} from "../../shared/phrase.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-prases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.css']
})
export class PhrasesListComponent implements OnInit {

  phrases!: Phrase[];
  selectedID!: number;

  constructor(
    private phraseService: PhraseService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.selectedID = +params.id;
      this.phraseService
        .getAllPhrases()
        .then(res => this.phrases = res)
    })
      // this.phraseService.getAllPhrases()
  }

  onSelect(phrase: Phrase) {
    this.router.navigate([phrase.id], {relativeTo: this.activatedRoute}).then()
  }

  isSelected (phrase: Phrase): boolean {
    return phrase.id === this.selectedID
  }



}
