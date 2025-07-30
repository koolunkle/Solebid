package com.sesac.solbid.domain;

import com.sesac.solbid.domain.baseentity.BaseEntity;
import com.sesac.solbid.domain.enums.ProviderEnum;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="sociallogin")
public class SocialLogin extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long socialId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(unique = true, nullable = false)
    private String providerId;

    @Enumerated(EnumType.STRING)
    private ProviderEnum provider;

}
