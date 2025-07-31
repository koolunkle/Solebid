package com.sesac.solbid.dto;

import com.sesac.solbid.domain.Product;
import com.sesac.solbid.domain.User;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductRegisterDto {
    private String name;
    private String brand;
    private String category;
    private String size;
    private int startPrice;
    private int confirmationPrice;
    private String startDate;
    private String endDate;
    private String condition;
    private String description;

    public Product createEntity(User seller)
    {
        return Product.builder()
                .name(name)
                .brand(brand)
                .category(category)
                .size(size)
                .startPrice(startPrice)
                .confirmationPrice(confirmationPrice)
                .startDate(startDate)
                .endDate(endDate)
                .condition(condition)
                .description(description)
                .seller(seller)
                .build();
    }
}
