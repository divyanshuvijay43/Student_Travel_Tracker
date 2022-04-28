package com.spe.project.Repository;

import com.spe.project.Model.Travel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TravelRepo extends JpaRepository<Travel, Long> {
}
