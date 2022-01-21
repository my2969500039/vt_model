package com.vt.thymeleaf;


import com.vt.aop.MultipleSite;
import com.vt.model.EntranceModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RequestMapping("")
@RestController("VTThymeleaf")
public class VTThymeleaf {

    @Autowired
    private EntranceModel entranceModel;

    @GetMapping(value = {"/{name}","/{sectionParent}/{name}"})
    @MultipleSite
    public String section(Model model,
                          @PathVariable(value = "name") String name,
                          @PathVariable(value = "sectionParent",required = false) String sectionParent

    ){
        return entranceModel.Template(model)
                .sectionByName(name)
                .sectionAll()
                .basic()
                .dataList()
                .banner()
                .build();
    }

}
