package com.sesac.solbid.domain;


import com.sesac.solbid.domain.enums.TransEnum;
import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name="point_transaction")
public class PointTransaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long transactionId;

    private Long userId;

    @Enumerated(EnumType.STRING)
    private TransEnum transEnum;

    @Column(unique = true, nullable = false)
    private BigDecimal balanceAfter;

    private String description;

    private String paymentMethod;

    @Column(unique = true, nullable = false)
    private LocalDateTime createdAt;




}
