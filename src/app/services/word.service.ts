import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Word } from '../interfaces/word.interface';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WordService {
  private readonly apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en"
  constructor(private http:HttpClient) { }

  ngOnInit(){
  }

  // Fetch word
  getWord(word: string): Observable<Word>{
    return this.http.get<Word>(`${this.apiUrl}/${word}`)
    .pipe(
      map((data) => this.processData(data))
    )
  }

  processData(word: any): Word{
    console.log("word", word);
    return {
      name: word[0].word,
      phonetic: word[0].phonetic,
      audio: word[0].phonetics[0].audio,
      meanings: word[0].meanings,
      sourceUrl: word[0].sourceUrls[0]
    }
  }
}
