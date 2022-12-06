package com.bcnet.viimpt.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class DeleteResponseDto {
    String message;

    public DeleteResponseDto(String message){
        this.message = message;
    }
}
