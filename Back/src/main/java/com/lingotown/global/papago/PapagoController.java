package com.lingotown.global.papago;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.lingotown.global.response.DataResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/papago")
public class PapagoController {

    private final PapagoService papagoService;

    @PostMapping
    public DataResponse<String> translate(@RequestBody PapagoRequestDto requestDto) throws JsonProcessingException {
        return papagoService.translate(requestDto);
    }

}
