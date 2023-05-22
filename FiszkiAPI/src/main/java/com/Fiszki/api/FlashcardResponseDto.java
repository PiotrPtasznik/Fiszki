package com.Fiszki.api;

import com.Fiszki.domain.Flashcard;

public record FlashcardResponseDto(
    String flashcardId,

    String frontside,

    String backside){

    public static FlashcardResponseDto fromDomain(Flashcard flashcard){
        return new FlashcardResponseDto(
                flashcard.flashcardId().value(),
                flashcard.frontside(),
                flashcard.backside());
    }
}
