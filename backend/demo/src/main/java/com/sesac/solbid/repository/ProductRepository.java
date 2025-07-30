package com.sesac.solbid.repository;

import com.sesac.solbid.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
