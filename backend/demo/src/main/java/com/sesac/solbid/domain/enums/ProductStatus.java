package com.sesac.solbid.domain.enums;

import java.util.Arrays;

public enum ProductStatus {

    AVAILABLE, SOLD_OUT, CANCELLED;

    public static ProductStatus from(String status) {
        return Arrays.stream(values())
                .filter(b -> b.name().equalsIgnoreCase(status))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 상태: " + status));
    }
}