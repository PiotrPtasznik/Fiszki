package com.Fiszki.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public record Flashcard(
        @Id
        FlashcardId flashcardId,
        String frontside,
        String backside) {


        //new 8.06
        public Flashcard updateFrontside(String updatedFrontside) {
                return new Flashcard(flashcardId, updatedFrontside, backside);
        }

        public Flashcard updateBackside(String updatedBackside) {
                return new Flashcard(flashcardId, frontside, updatedBackside);
        }
}
