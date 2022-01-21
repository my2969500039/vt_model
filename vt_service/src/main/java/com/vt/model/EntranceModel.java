package com.vt.model;

import com.vt.banner.VTBannerRepository;
import com.vt.basic.VTBasicInfo;
import com.vt.basic.VTBasicRepository;
import com.vt.common.NormalException;
import com.vt.data.VTDataRepository;
import com.vt.section.VTSection;
import com.vt.section.VTSectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.thymeleaf.context.WebContext;
import org.thymeleaf.spring5.SpringTemplateEngine;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class EntranceModel {
    private Model model;
    private VTSection section;
    private String userAgent;
    @Autowired
    private VTSectionRepository sectionRepository;
    @Autowired
    private VTDataRepository dataRepository;
    @Autowired
    private VTBannerRepository bannerRepository;
    @Autowired
    private VTBasicRepository basicRepository;
    @Autowired
    private SpringTemplateEngine templateEngine;

    //获取当前栏目
    public Builder sectionByName(String name) {
        VTSection section = sectionRepository.findTopByName(name);
        this.section = section;
        model.addAttribute("SECTION", section);
        return new Builder(this);
    }

    //初始化模板
    public EntranceModel Template(Model model) {
        this.model = model;
        return this;
    }

    public static class Builder {

        private final EntranceModel entranceModel;
        private VTBasicInfo vtBasicInfo;

        public Builder(EntranceModel entranceModel) {
            if (entranceModel.section==null || entranceModel.model==null){
                throw new NormalException("初始化错误");
            }
            this.entranceModel = entranceModel;
        }

        //获取data列表
        public Builder dataList() {
            entranceModel.model.addAttribute("DATALIST", entranceModel.dataRepository.findAllByVTSection_Id(entranceModel.section.getId()));
            return this;
        }

        //构造html
        public String build() {
            HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
            HttpServletResponse response = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getResponse();
            entranceModel.model.addAttribute("userAgent", entranceModel.userAgent);
            return entranceModel.templateEngine.process(this.getTemplate(), new WebContext(request, response, request.getServletContext(),
                    request.getLocale(), entranceModel.model.asMap()));
        }

        //获取所有栏目
        public Builder sectionAll() {
            entranceModel.model.addAttribute("SECTIONLIST", entranceModel.sectionRepository.findAllByParent_IdIsNullAndAvailableIsTrue());
            return this;
        }

        //获取基本信息
        public Builder basic() {
            this.vtBasicInfo=entranceModel.basicRepository.findTopByAvailableIsTrue();
            entranceModel.model.addAttribute("BASIC", this.vtBasicInfo );
            entranceModel.model.addAttribute("TEMPLATE", this.vtBasicInfo.getTemplate() );
            return this;
        }

        //获取栏目广告
        public Builder banner() {
            entranceModel.model.addAttribute("BANNERLIST", entranceModel.bannerRepository.findAllByAvailableIsTrueOrderByComparableDesc());
            return this;
        }

        private String getTemplate(){
            return this.vtBasicInfo.getTemplate()+"/"+entranceModel.section.getTemplate();
        }

    }


}
