package com.spe.project.Model;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
public class Travel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "travel_id")
    private Long id;

    @Column()
    private String username;

    @Column
    private Date date;

    @Column(columnDefinition = "VARCHAR(20) CHECK (status in ('Departing', 'Arriving'))")
    private String status;

    public Travel(String username, Date date, String status) {
        this.username = username;
        this.date = date;
        this.status = status;
    }

    public Travel() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
