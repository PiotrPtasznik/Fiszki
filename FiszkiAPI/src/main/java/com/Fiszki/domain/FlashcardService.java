package com.Fiszki.domain;

import com.Fiszki.infrastructure.FlashcardRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.function.Supplier;

@Service
public class FlashcardService {
    private final FlashcardRepository flashcardRepository;

    private final Supplier<FlashcardId> flashcardIdSupplier;

    FlashcardService(FlashcardRepository flashcardRepository, Supplier<FlashcardId> flashcardIdSupplier){
        this.flashcardRepository = flashcardRepository;
        this.flashcardIdSupplier = flashcardIdSupplier;
    }

    public List<Flashcard> getFlashcardList() {
        return flashcardRepository.findAll();
    }

    public void deleteFlashcard(FlashcardId id) {
        flashcardRepository.findById(id)
                .ifPresent(s -> flashcardRepository.deleteById(s.flashcardId()));
    }

    public Optional<Flashcard> findById(FlashcardId id) {
        return flashcardRepository.findById(id);
    }

    public Flashcard addNewFlashcard(String frontside, String backside) {
        return flashcardRepository.save(new Flashcard(flashcardIdSupplier.get(), frontside, backside));
    }

    // new 8.06
    public Flashcard updateFlashcard(FlashcardId id, String updatedFrontside, String updatedBackside) {
        Optional<Flashcard> flashcardOptional = flashcardRepository.findById(id);
        if (flashcardOptional.isPresent()) {
            Flashcard flashcard = flashcardOptional.get();
            flashcard.updateFrontside(updatedFrontside);
            flashcard.updateBackside(updatedBackside);
            return flashcardRepository.save(flashcard);
        }
        return null; // Return null if the flashcard with the given ID is not found
    }

}



