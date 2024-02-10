package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.stereotype.Repository;

import com.demo.model.UserRequirements;
@Repository
public interface UserRequirementsDao extends JpaRepository<UserRequirements, Integer> {

}
