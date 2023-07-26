import { Definitions } from "./definitions.interface";

export interface Meanings{
    partOfSpeech: string;
    definitions: Definitions[];
    synonyms: string[];
    antonyms: string[];
}