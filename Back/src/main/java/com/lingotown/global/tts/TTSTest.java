package com.lingotown.global.tts;

import com.google.cloud.texttospeech.v1.*;
import com.google.protobuf.ByteString;

import java.io.FileOutputStream;
import java.io.OutputStream;

public class TTSTest {

    /** Demonstrates using the Text-to-Speech API. */
    public static void main(String... args) throws Exception {
        System.out.println(System.getenv("GOOGLE_APPLICATION_CREDENTIALS"));

        // textToSpeechClient 초기화
        try (TextToSpeechClient textToSpeechClient = TextToSpeechClient.create()) {
            // Text 입력
            SynthesisInput input = SynthesisInput.newBuilder().setText("Hello, World! I'm SeYun").build();

            // 언어 : en-US
            // 모델 : neutral
            VoiceSelectionParams voice =
                    VoiceSelectionParams.newBuilder()
                            .setLanguageCode("en-US")
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
            try (OutputStream out = new FileOutputStream("output.mp3")) {
                out.write(audioContents.toByteArray());
                System.out.println("Audio content written to file \"output.mp3\"");
            }
        }
    }
}
