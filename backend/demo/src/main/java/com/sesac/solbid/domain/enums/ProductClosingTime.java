package com.sesac.solbid.domain.enums;

public enum ProductClosingTime {
    ONE_DAY(1), FIVE_DAY(5), SEVEN_DAY(7);

    private final int day;

    ProductClosingTime(int day)
    {
        this.day = day;
    }

    public int getDay()
    {
        return day;
    }
}
