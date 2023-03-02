import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  singularWord: string = '';
  pluralWord: string = '';
  ruleApplied: string = '';
  wordConverted: boolean = false;
  invalidWord: boolean = false;

  convertWord(): void {
    if (this.singularWord == '') {
      this.invalidWord = true;
      return;
    }
    let lastCharacter = this.singularWord.slice(this.singularWord.length - 2);
    if (
      lastCharacter == 'ss' ||
      lastCharacter == 'sh' ||
      lastCharacter == 'ch' ||
      lastCharacter.charAt(lastCharacter.length - 1) == 'o' ||
      lastCharacter.charAt(lastCharacter.length - 1) == 'z' ||
      lastCharacter.charAt(lastCharacter.length - 1) == 'x'
    ) {
      this.ruleApplied =
        'If the word ends with "ss", "sh", "ch", "o", "z" or "x", then it maintains it\'s original form and adds "es" in the end.';
      this.pluralWord = this.singularWord + 'es';
    } else if (
      this.singularWord.charAt(this.singularWord.length - 1) == 'y' &&
      this.verifyConsonant(lastCharacter)
    ) {
      this.ruleApplied =
        'If the word ends with a consonant before an "y", then the "y" is removed and the "ies" is added in the end.';
      this.pluralWord = this.singularWord.replace(
        this.singularWord.charAt(this.singularWord.length - 1),
        'ies'
      );
    } else {
      this.ruleApplied =
        'The default rule, adding the "s" in the end, was applided.';
      this.pluralWord = this.singularWord + 's';
    }

    this.invalidWord = false;
    this.wordConverted = true;
  }

  goBack(): void {
    this.singularWord = '';
    this.wordConverted = false;
  }

  verifyConsonant(text: string): boolean {
    const consonantArray = [
      'b',
      'c',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      'm',
      'n',
      'p',
      'q',
      'r',
      's',
      't',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];
    return consonantArray.includes(text.charAt(text.length - 1));
  }

  validateWord(): void {
    this.invalidWord = false;
  }
}
