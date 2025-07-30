package com.sesac.solbid.controller;

import com.sesac.solbid.exception.CustomException;
import com.sesac.solbid.exception.ErrorCode;
import com.sesac.solbid.service.S3Service;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class UploadController {
    private final S3Service s3Service;

    @PostMapping("/api/upload")
    public ResponseEntity<Map<String,Object>> uploadFile(@RequestPart MultipartFile file) {
        try {
            String imageUrl = s3Service.upload(file);
            return ResponseEntity.ok(Map.of(
                    "success", true,
                    "imageUrl", imageUrl
            ));
        } catch (IOException e) {
            throw new CustomException(ErrorCode.FILE_UPLOAD_FAILED);
        }
    }
}
