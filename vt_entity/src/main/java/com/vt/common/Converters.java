package com.vt.common;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;

import javax.persistence.AttributeConverter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@javax.persistence.Converter
@Component
public class Converters implements AttributeConverter<List<String>,String> {
    @Override
    public String convertToDatabaseColumn(List<String> attribute) {
        return attribute != null ? String.join(",", attribute) : null;
    }

    @Override
    public List<String> convertToEntityAttribute(String dbData) {
        if (StringUtils.isNotBlank(dbData))
            return new ArrayList<>(Arrays.asList(dbData.split(",")));
        else return new ArrayList<>();
    }



}
