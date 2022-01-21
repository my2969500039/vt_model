package com.vt.banner;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface VTBannerRepository extends JpaRepository<VTBanner,Long>, JpaSpecificationExecutor<VTBanner> {

        List<VTBanner>findAllByAvailableIsTrueOrderByComparableDesc();

}
