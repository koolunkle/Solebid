package com.sesac.solbid.domain;

import jakarta.persistence.*;
import lombok.Getter;

import java.time.LocalDateTime;

@Entity
@Table(name="wishlist")
public class WishList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long wishListId;

    @Column(unique = true, nullable = false)
    private Long userId;

    @Column(unique = true, nullable = false)
    private Long productId;


    private LocalDateTime createdAt;

}
