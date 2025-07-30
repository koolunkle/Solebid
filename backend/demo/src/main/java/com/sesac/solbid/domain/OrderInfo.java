package com.sesac.solbid.domain;

import com.sesac.solbid.domain.enums.DeliveryStatus;
import com.sesac.solbid.domain.enums.PaymentStatus;
import jakarta.persistence.*;
import org.hibernate.annotations.ColumnDefault;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name="orderInfo")
public class OrderInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    private Long auctionEventId;

    private Long winnerId;

    private Long sellerId;

    private BigDecimal finalPrice;

    @Enumerated(EnumType.STRING)
    private PaymentStatus paymentStatus;

    @Enumerated(EnumType.STRING)
    private DeliveryStatus deliveryStatus;

    private String deliveryAddress;

    private int trackingNumber;

    private LocalDateTime orderDate;

    private LocalDateTime paymentDate;

    private LocalDateTime deliveryDate;



}
