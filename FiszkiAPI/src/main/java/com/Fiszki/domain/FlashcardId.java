package com.Fiszki.domain;

public record FlashcardId(String value) {
    FlashcardId newId(String value){
        return new FlashcardId(value);
    }
}
