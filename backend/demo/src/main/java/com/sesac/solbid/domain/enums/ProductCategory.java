package com.sesac.solbid.domain.enums;

import java.util.Arrays;

public enum ProductCategory {
    SNEAKERS, RUNNING, BASKETBALL, CANVAS;

    public static ProductCategory from(String category) {
        return Arrays.stream(values())
                .filter(b -> b.name().equalsIgnoreCase(category))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 카테고리: " + category));
    }
}
