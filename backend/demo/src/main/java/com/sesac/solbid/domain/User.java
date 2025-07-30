package com.sesac.solbid.domain;

import com.sesac.solbid.domain.baseentity.BaseEntity;
import com.sesac.solbid.domain.enums.UserStatus;
import com.sesac.solbid.domain.enums.UserType;
import jakarta.persistence.*;
import lombok.Builder;
import org.hibernate.annotations.ColumnDefault;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Enumeration;

@Entity
@Table(name="user")
public class User extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(unique = true, nullable = true)
    private String password;

    @Column(unique = true, nullable = false)
    private String nickname;

    @Column(unique = true, nullable = true)
    private String phone;

    @Column(unique = true, nullable = false)
    private BigDecimal temperature;

    @Column(unique = true, nullable = false)
    @ColumnDefault("0")
    private BigDecimal point;

    @Enumerated(EnumType.STRING)
    private UserStatus userStatus;

    @Enumerated(EnumType.STRING)
    private UserType userType;






}
