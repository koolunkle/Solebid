package com.sesac.solbid.domain;

import com.sesac.solbid.domain.enums.NotificationType;
import jakarta.persistence.*;
import org.hibernate.annotations.ColumnDefault;

import java.time.LocalDateTime;

@Entity
@Table(name="notification")
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long notificationId;

    private Long userId;

    @Enumerated(EnumType.STRING)
    private NotificationType notificationType;

    private String title;

    private String content;

    private String linkUrl;

    @ColumnDefault("false")
    private Boolean isRead;

    private LocalDateTime createAt;

}
