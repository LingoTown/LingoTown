package com.lingotown.domain.talk.dto.request.speechsuper;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class SdkReqDto {
   private int version = 16777472;
   private int source = 9;
   private int protocol = 2;

}
