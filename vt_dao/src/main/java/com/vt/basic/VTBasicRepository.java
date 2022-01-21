package com.vt.basic;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface VTBasicRepository extends JpaRepository<VTBasicInfo,Long>, JpaSpecificationExecutor<VTBasicInfo> {

    VTBasicInfo findTopByAvailableIsTrue();

}
