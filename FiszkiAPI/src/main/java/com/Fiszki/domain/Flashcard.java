package com.Fiszki.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public record Flashcard(
        @Id
        FlashcardId flashcardId,
        String frontside,
        String backside) {

}
