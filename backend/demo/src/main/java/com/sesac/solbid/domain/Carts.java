package com.sesac.solbid.domain;

import com.sesac.solbid.domain.baseentity.BaseEntity;
import jakarta.persistence.*;
import lombok.extern.apachecommons.CommonsLog;

import java.math.BigDecimal;

@Entity
@Table(name="carts")
public class Carts  extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cartId;

    private Long productId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(unique = true, nullable = false)
    private BigDecimal productPrice;
}
