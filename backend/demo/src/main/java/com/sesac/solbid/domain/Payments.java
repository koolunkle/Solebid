package com.sesac.solbid.domain;

import com.sesac.solbid.domain.baseentity.BaseEntity;
import com.sesac.solbid.domain.enums.PaymentStatus;
import jakarta.persistence.*;
import org.hibernate.annotations.ColumnDefault;

import java.time.LocalDateTime;

@Entity
@Table(name="payments")
public class Payments extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long paymentId;

    private Long userId;

    private int amount;

    private String paymentMethod;

    @Enumerated(EnumType.STRING)
    private PaymentStatus paymentStatus;

    @ColumnDefault("0")
    private int convertedPoint;

    @ColumnDefault("false")
    private Boolean isCharged;

    private LocalDateTime requestedAt;

    private LocalDateTime confirmedAt;


}
