package com.sesac.solbid.service;

import com.sesac.solbid.domain.ProductImage;
import com.sesac.solbid.repository.ProductImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class ProductImageService {
    private final ProductImageRepository productImageRepository;
    private final S3Service s3Service;

    public String upload(MultipartFile file) throws IOException {
        return s3Service.upload(file);
    }

    public void save(ProductImage productImage) {
        productImageRepository.save(productImage);
    }
}
