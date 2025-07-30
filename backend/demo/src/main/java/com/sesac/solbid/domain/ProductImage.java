package com.sesac.solbid.domain;

import com.sesac.solbid.domain.baseentity.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity
@Table(name="product_image")
public class ProductImage extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long imageId;

    //이 이미지가 등록된 상품
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="product_id", nullable = false)
    private Product product;

    //이미지 주소
    @Column(nullable = false)
    private String filePath;

    //이미지 이름
    @Column(nullable = false)
    private String fileName;

    //이미지 정렬 순번
    @Column(nullable = false)
    private int sortOrder;

    //이 이미지가 썸네일로 사용되는가?
    @Column(nullable = false)
    private boolean isThumbnail;
}
