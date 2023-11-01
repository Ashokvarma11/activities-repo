package com.npci.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.yaml.snakeyaml.events.Event.ID;
import com.npci.beans.Product;

public interface ProductDao extends JpaRepository<Product, Integer> {

	@Query("select p from Product p where p.product_id= ?1")
	public Product getProductId(int product_id);
	
	@Query("select p from Product p where p.product_id= ?1")
	public Product deleteProduct(int product_id);
}
