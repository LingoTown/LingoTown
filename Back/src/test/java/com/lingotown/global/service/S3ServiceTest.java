package com.lingotown.global.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectResult;
import com.amazonaws.services.s3.model.S3Object;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class S3ServiceTest {

    @Mock
    private AmazonS3 amazonS3;

    @InjectMocks
    private S3Service s3Service;

    @Mock
    private MultipartFile multipartFile;

//    @Test
//    void uploadFileTest() throws IOException {
//        String originalFilename = "test.jpg";
//        String contentType = "image/jpeg";
//        long fileSize = 1024L;
//        byte[] fileContent = new byte[(int) fileSize]; // 빈 파일 콘텐츠를 위한 바이트 배열
//
//        when(multipartFile.getOriginalFilename()).thenReturn(originalFilename);
//        when(multipartFile.getContentType()).thenReturn(contentType);
//        when(multipartFile.getSize()).thenReturn(fileSize);
//
//        // ByteArrayInputStream을 사용하여 InputStream 모의 설정
//        InputStream inputStream = new ByteArrayInputStream(fileContent);
//        when(multipartFile.getInputStream()).thenReturn(inputStream);
//
//        String s3FileName = "Record/" + UUID.randomUUID() + "_" + originalFilename;
//        URL mockUrl = new URL("http://example.com/" + s3FileName);
//        when(amazonS3.getUrl(anyString(), anyString())).thenReturn(mockUrl);
//
//        // 메서드 호출
//        String returnedUrl = s3Service.uploadFile(multipartFile);
//
//        // 검증
//        assertNotNull(returnedUrl);
//        assertEquals(mockUrl.toString(), returnedUrl);
//
//        // 목 객체의 상호작용 검증
//        verify(amazonS3).putObject(eq("bucket-name"), anyString(), any(), any(ObjectMetadata.class));
//    }

    @Test
    void getExtensionTest() {
        String originalFilename = "test.jpg";
        when(multipartFile.getOriginalFilename()).thenReturn(originalFilename);

        // 메서드 호출
        String extension = s3Service.getExtension(multipartFile);

        // 검증
        assertNotNull(extension);
        assertEquals("jpg", extension);
    }

}