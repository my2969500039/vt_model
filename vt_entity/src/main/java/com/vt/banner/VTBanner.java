package com.vt.banner;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.vt.common.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Data
@EqualsAndHashCode(callSuper = true)
@Entity(name = "vt_ad")
@Table(name = "vt_ad")
public class VTBanner extends BaseEntity {

    private String title;

    private String shortTitle;

    private String remark;

    private Long sectionId;

    private String image;

    private String url;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date startTime;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date endTime;

}
