package com.Fiszki.api;

import com.Fiszki.domain.Flashcard;
import com.Fiszki.domain.FlashcardId;
import com.Fiszki.domain.FlashcardService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;


import static com.Fiszki.api.FlashcardController.flashcard_baseURL;


@RestController
@RequestMapping(flashcard_baseURL)
@CrossOrigin
public class FlashcardController {

    private final FlashcardService flashcardService;

    public FlashcardController(FlashcardService flashcardService) {
        this.flashcardService = flashcardService;
    }

    @GetMapping
    ResponseEntity<List<FlashcardResponseDto>> getAllFlashcards(){
        return ResponseEntity.ok(
                flashcardService.getFlashcardList()
                        .stream()
                        .map(FlashcardResponseDto::fromDomain)
                        .collect(Collectors.toList()));
    }

    @PostMapping
    ResponseEntity<FlashcardResponseDto> addNewFlashcard(
            @RequestBody FlashcardRequestDto requestDto){
        Flashcard flashcard = flashcardService.addNewFlashcard(
                requestDto.frontside(),
                requestDto.backside());
        return ResponseEntity.created(URI.create("/flashcards" + flashcard.flashcardId().value())).body(
                FlashcardResponseDto.fromDomain(flashcard)
        );
    }

    @GetMapping("/{id}")
    ResponseEntity<FlashcardResponseDto> getFlashcard(@PathVariable String id){
        return ResponseEntity.of(flashcardService.findById(new FlashcardId(id))
                .map(FlashcardResponseDto::fromDomain));
    }


    @DeleteMapping("/{id}")
    ResponseEntity<FlashcardResponseDto> deleteFlashcard(@PathVariable String id){
        flashcardService.deleteFlashcard(new FlashcardId(id));
        return ResponseEntity.noContent().build();
    }



    static final String flashcard_baseURL = "/flashcards";
}
