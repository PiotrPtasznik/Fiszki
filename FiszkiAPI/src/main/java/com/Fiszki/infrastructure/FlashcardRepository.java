package com.Fiszki.infrastructure;

import com.Fiszki.domain.Flashcard;
import com.Fiszki.domain.FlashcardId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FlashcardRepository extends MongoRepository<Flashcard, FlashcardId>{
}
