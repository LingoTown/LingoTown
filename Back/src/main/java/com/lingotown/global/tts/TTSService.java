package com.lingotown.global.tts;

import com.google.cloud.texttospeech.v1.*;
import com.google.protobuf.ByteString;
import com.lingotown.domain.talk.dto.request.TalkReqDto;
import com.lingotown.domain.talk.entity.Talk;
import com.lingotown.domain.talk.repository.TalkRepository;
import com.lingotown.global.aspect.executeTime.TrackExecutionTime;
import com.lingotown.global.data.GenderType;
import com.lingotown.global.exception.CustomException;
import com.lingotown.global.exception.ExceptionStatus;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Slf4j
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class TTSService {

    private final TalkRepository talkRepository;

    @TrackExecutionTime
    public MultipartFile useTTS(String prompt, TalkReqDto talkReqDto) throws Exception{

        log.info(prompt);
        log.info(talkReqDto.getLanguage());

        Talk talk = talkRepository.findById(talkReqDto.getTalkId())
                .orElseThrow(() -> new CustomException(ExceptionStatus.TALK_NOT_FOUND));

        GenderType npcGender = talk.getMemberNPC().getNpc().getGenderType();

        String sttLanguage;
        String sttModelName;
        SsmlVoiceGender sttGender;

        // 프랑스
        if(talkReqDto.getLanguage().equals("FR")) {
            sttLanguage = "fr-FR";

            if(npcGender == GenderType.WOMAN) {
                sttGender = SsmlVoiceGender.FEMALE;
                sttModelName = "fr-FR-Standard-C";
            }
            else {
                sttGender = SsmlVoiceGender.MALE;
                sttModelName = "fr-FR-Standard-D";
            }
        }
        // 영국
        else if(talkReqDto.getLanguage().equals("UK")) {
            sttLanguage = "en-GB";

            if(npcGender == GenderType.WOMAN) {
                sttGender = SsmlVoiceGender.FEMALE;
                sttModelName = "en-GB-Standard-F";
            }
            else {
                sttGender = SsmlVoiceGender.MALE;
                sttModelName = "en-GB-Wavenet-B";
            }
        }
        // 미국
        else {
            sttLanguage = "en-US";

            if(npcGender == GenderType.WOMAN) {
                sttGender = SsmlVoiceGender.FEMALE;
                sttModelName = "en-US-Standard-F";
            }
            else {
                sttGender = SsmlVoiceGender.MALE;
                sttModelName = "en-US-Polyglot-1";
            }
        }

        // textToSpeechClient 초기화
        try (TextToSpeechClient textToSpeechClient = TextToSpeechClient.create()) {
            // Text 입력
            SynthesisInput input = SynthesisInput.newBuilder().setText(prompt).build();

            // 언어 : en-US
            // 모델 : neutral
            VoiceSelectionParams voice =
                    VoiceSelectionParams.newBuilder()
                            .setLanguageCode(sttLanguage)
                            .setName(sttModelName)
                            .setSsmlGender(sttGender)
                            .build();

            // 리턴 받을 오디오 타입
            AudioConfig audioConfig =
                    AudioConfig.newBuilder().setAudioEncoding(AudioEncoding.MP3).build();

            // Perform the TTS request on the text input with the selected voice parameters and
            // audio file type
            SynthesizeSpeechResponse response =
                    textToSpeechClient.synthesizeSpeech(input, voice, audioConfig);

            // Get the audio contents from the response
            ByteString audioContents = response.getAudioContent();

            return new MockMultipartFile(
                    "file",
                    "output.mp3",
                    "audio/mpeg",
                    audioContents.toByteArray()
            );
        }
    }
}
