package com.spe.project.Repository;

import com.spe.project.Model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface StudentRepo extends JpaRepository<Student, String> {
  
  @Query("SELECT s FROM Student s WHERE s.id=:id AND s.password=:pwd")
  Student findByUsername(String id, String pwd);
}
