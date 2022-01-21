package com.vt.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface VTDataRepository extends JpaRepository<VTDataManage,Long>, JpaSpecificationExecutor<VTDataManage> {

    List<VTDataManage>findAllByVTSection_Id(Long sectionId);

}
