package com.uof.pcompus.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.uof.pcompus.service.EchartsService;
import com.uof.pcompus.pojo.Echarts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @Description: 用于echarts图表数据申请
 * @BelongsProject: PCompus
 * @BelongsPackage: com.uof.pcompus.controller
 * @Author: Happ
 * @CreateTime: 2021-11-26 18:43
 * @Email: 157439173@qq.com
 * @Version: 1.0
 */
@Controller
public class EchartsController {
    @Autowired
    private EchartsService echartsService;
    public static ObjectMapper jsonMapper = new ObjectMapper();

    static {
//       自动通过spi发现Jackson的module并注册
        jsonMapper.findAndRegisterModules();
//        将发送到前端的pojo属性名转换为蛇形命名法
        jsonMapper.setPropertyNamingStrategy(PropertyNamingStrategy.SNAKE_CASE);
    }

    //    @RequestMapping(value = "/auto_echarts",produces = "text/html;charset=utf-8")
    @RequestMapping("/auto_echarts")
    @ResponseBody
    public String autoEcharts(int column_id) throws JsonProcessingException {
        System.out.println("发来的echarts参数：" + column_id);
        Echarts autoColumns = echartsService.queryAutoColumns(column_id);

        String echartsJson = jsonMapper.writeValueAsString(autoColumns);
        System.out.println("controller收到的echarts_json：" + echartsJson);
        return echartsJson;
    }
}
