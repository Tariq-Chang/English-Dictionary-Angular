import { Definitions } from "./definitions.interface";
import { Meanings } from "./meanings.interface";

export interface Word{
    name: string;
    phonetic: string;
    audio: string;
    meanings: Meanings[];
    sourceUrl: string;
}