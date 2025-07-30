package com.sesac.solbid.domain;

import com.sesac.solbid.domain.baseentity.BaseEntity;
import com.sesac.solbid.domain.enums.EventEnum;
import jakarta.persistence.*;
import org.hibernate.annotations.ColumnDefault;

import java.math.BigDecimal;

@Entity
@Table(name="auctionevent")
public class AuctionEvent  extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long  auctionEventId;

    private Long productId;

    private BigDecimal startPrice;

    private BigDecimal buyoutPrice;

    @Enumerated(EnumType.STRING)
    private EventEnum eventType;

    @ColumnDefault("0")
    private int viewCount;

    @ColumnDefault("false")
    private Boolean isBlind;


}
