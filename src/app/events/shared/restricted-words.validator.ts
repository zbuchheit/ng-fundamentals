import { AbstractControl, ValidationErrors } from "@angular/forms"

export function restrictedWords(words: any) {
    return (control: AbstractControl): ValidationErrors | null => {
      if(!words) return null

      var invalidWords = words
      .map((word: any) => control.value.includes(word) ? word: null)
      .filter((word:any) => word != null)

     return invalidWords && invalidWords.length > 0
     ? {'restrictedWords': invalidWords.join(', ')}
     : null
  }
 }
