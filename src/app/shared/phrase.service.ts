import { Injectable } from '@angular/core';
import {PHRASES} from "./mock-data";
import {timeout} from "rxjs/operators";
import {Phrase} from "./phrase.class";
import {resolve} from "@angular/compiler-cli/src/ngtsc/file_system";

// const phrasePromise: Promise<Phrase[]> = new Promise((r) => {
//   setTimeout(() => {
//     r(PHRASES)
//   }
//    ,timeout(1000)
//   )});

const phrasePromise = Promise.resolve(PHRASES);



@Injectable({
  providedIn: 'root'
})
export class PhraseService {

  constructor() { }

  getAllPhrases(): Promise<Phrase[]> {

    return phrasePromise
    // return PHRASES
  }

  getPhrase(id: number): Promise<Phrase | undefined> {
  return phrasePromise.then(phrases => phrases.find(phrase => phrase.id === id))
    // PHRASES.find(phrase => phrase.id === id)

  }
}
