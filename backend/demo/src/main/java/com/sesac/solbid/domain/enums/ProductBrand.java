package com.sesac.solbid.domain.enums;

import java.util.Arrays;

public enum ProductBrand {
    NIKE, ADIDAS, NB, CONVERSE, VANS, PUMA, REEBOK, ASICS;

    public static ProductBrand from(String brand) {
        return Arrays.stream(values())
                .filter(b -> b.name().equalsIgnoreCase(brand))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 브랜드: " + brand));
    }
}
