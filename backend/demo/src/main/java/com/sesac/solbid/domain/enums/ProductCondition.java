package com.sesac.solbid.domain.enums;

import java.util.Arrays;

public enum ProductCondition {
    NEW, USED;

    public static ProductCondition from(String condition) {
        return Arrays.stream(values())
                .filter(b -> b.name().equalsIgnoreCase(condition))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 컨디션: " + condition));
    }
}
