package com.Fiszki.infrastructure;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.Fiszki.domain.FlashcardId;
import java.util.UUID;
import java.util.function.Supplier;

@Configuration
public class IdSupplierConfig {
    @Bean
    public Supplier<FlashcardId> productIdSupplier() {return () -> new FlashcardId(UUID.randomUUID().toString());}
}

