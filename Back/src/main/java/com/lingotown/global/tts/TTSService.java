package com.lingotown.global.tts;

import com.google.cloud.texttospeech.v1.*;
import com.google.protobuf.ByteString;
import com.lingotown.global.service.S3Service;
import lombok.RequiredArgsConstructor;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class TTSService {

    private S3Service s3Service;

    public String UseTTS() throws Exception{
        // textToSpeechClient 초기화
        try (TextToSpeechClient textToSpeechClient = TextToSpeechClient.create()) {
            // Text 입력
            SynthesisInput input = SynthesisInput.newBuilder().setText("Hello, World! I'm SeYun").build();

            // 언어 : en-US
            // 모델 : neutral
            VoiceSelectionParams voice =
                    VoiceSelectionParams.newBuilder()
                            .setLanguageCode("en-US")
                            .setName("en-US-Wavenet-F")
                            .setSsmlGender(SsmlVoiceGender.FEMALE)
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

            // Write the response to the output file.
//            try (OutputStream out = new FileOutputStream("output.mp3")) {
//                out.write(audioContents.toByteArray());
//                System.out.println("Audio content written to file \"output.mp3\"");
//            }

            // Convert ByteString to MultipartFile
            MultipartFile audioFile = new MockMultipartFile("file", "output.mp3", "audio/mpeg", audioContents.toByteArray());

            String fileUrl = s3Service.uploadFile(audioFile);

            return fileUrl;
        }
    }
}
