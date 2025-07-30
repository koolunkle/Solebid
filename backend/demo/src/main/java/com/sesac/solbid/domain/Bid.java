package com.sesac.solbid.domain;

import com.sesac.solbid.domain.baseentity.BaseEntity;
import jakarta.persistence.*;
import org.hibernate.annotations.ColumnDefault;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "bid")
public class Bid {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bidId;

    @Column(unique = true, nullable = false)
    private Long auctionEventId;

    @Column(unique = true, nullable = false)
    private Long bidderId;

    @Column(unique = true, nullable = false)
    private BigDecimal bidAmount;

    @ColumnDefault("false")
    @Column(unique = true, nullable = false)
    private Boolean isWinning;

    private LocalDateTime bidTime;
}
