package com.spe.project.Model;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
public class Travel {

    @Id
    @Column()
    private String username;

    @Column
    private LocalDate date;

    @Column(columnDefinition = "VARCHAR(20) CHECK (status in ('Departing', 'Arriving'))")
    private String status;

    public Travel(String username, LocalDate date, String status) {
        this.username = username;
        this.date = date;
        this.status = status;
    }

    public Travel() {

    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
