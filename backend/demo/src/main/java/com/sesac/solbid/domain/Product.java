package com.sesac.solbid.domain;

import com.sesac.solbid.domain.baseentity.BaseEntity;
import com.sesac.solbid.domain.enums.ProductStatus;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity
public class Product extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    @Column(unique = true, nullable = false)
    private Long sellerId;

    @Column(unique = true, nullable = false)
    private Long categoryId;

    @Column(unique = true, nullable = false)
    private String title;

    @Enumerated(EnumType.STRING)
    private ProductStatus productStatus;





}
