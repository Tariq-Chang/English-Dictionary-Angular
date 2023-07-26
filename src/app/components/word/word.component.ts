import { Component } from '@angular/core';
import { Definitions } from 'src/app/interfaces/definitions.interface';
import { Meanings } from 'src/app/interfaces/meanings.interface';
import { Word } from 'src/app/interfaces/word.interface';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent {
  word: Word;
  meanings: Meanings[];
  definitions: Definitions[];
  synonyms: string[];
  antonyms: string[];
  inputWord: string = "basic";
  responseStatus: number;
  constructor(private wordService: WordService){}

  ngOnInit(){
    this.wordService.getWord(this.inputWord).subscribe((data) => {
      this.word = data;
      this.meanings = this.word.meanings;
      this.definitions = this.meanings[0].definitions;
      this.synonyms = this.meanings.map(meaning => meaning.synonyms).flat();
      this.antonyms = this.meanings.map(meaning => meaning.antonyms).flat();
    })
  }

  handleSearchInput(e:any){
      this.inputWord = e.target.value;
  }
  handleSearch(){
    console.log(this.inputWord);
    this.responseStatus = 200;
    this.wordService.getWord(this.inputWord).subscribe((data) => {
      this.word = data;
      this.meanings = this.word.meanings;
      this.definitions = this.meanings[0].definitions;
      this.synonyms = this.meanings.map(meaning => meaning.synonyms).flat();
      this.antonyms = this.meanings.map(meaning => meaning.antonyms).flat();
    },
    (error) => {
      this.responseStatus = error.status;
    }
    )
  }

  handleLabelClick(synonym:string){
    this.inputWord = synonym;
    this.handleSearch();
  }
}
