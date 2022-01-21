package com.vt.section;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;


public interface VTSectionRepository extends JpaRepository<VTSection,Long>, JpaSpecificationExecutor<VTSection> {

         VTSection findTopByName(String name);

         List<VTSection> findAllByParent_IdIsNullAndAvailableIsTrue();

}
