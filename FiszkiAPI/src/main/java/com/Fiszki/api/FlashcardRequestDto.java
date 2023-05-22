package com.Fiszki.api;

public record FlashcardRequestDto(
        String frontside,
        String backside
) {
}
