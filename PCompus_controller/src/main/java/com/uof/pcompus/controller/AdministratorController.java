package com.uof.pcompus.controller;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.uof.pcompus.pojo.Echarts;
import com.uof.pcompus.pojo.Tab;
import com.uof.pcompus.service.EchartsService;
import com.uof.pcompus.service.TabsService;
import com.uof.pcompus.utils.ConverterUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

/**
 * @Description: 管理员控制器
 * @BelongsProject: PCompus
 * @BelongsPackage: com.uof.pcompus.controller
 * @Author: Happ
 * @CreateTime: 2021-11-30 12:41
 * @Email: 157439173@qq.com
 * @Version: 1.0
 */
@Controller
public class AdministratorController {
    @Autowired
    private EchartsService echartsService;
    @Autowired
    private TabsService tabsService;
    public static ObjectMapper jsonMapper = new ObjectMapper();

    static {
//       自动通过spi发现Jackson的module并注册
        jsonMapper.findAndRegisterModules();
//        将发送到前端的pojo属性名转换为驼峰命名法
        jsonMapper.setPropertyNamingStrategy(PropertyNamingStrategy.CAMEL_CASE_TO_LOWER_CASE_WITH_UNDERSCORES);
        jsonMapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);

    }

    /**
     * @Description: 跳转管理员的登录页面
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/30
     */
    @RequestMapping("/Admin")
    public String administrator() {
        return "Administrator";
    }

    /**
     * @Description: 用户角色管理
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/12/3
     */
    @RequestMapping("/role_admin")
    public String roleAdmin() {
        return null;
    }

    /**
     * @Description: 账户信息管理
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/12/3
     */
    @RequestMapping("/account_admin")
    public String accountAdmin() {
        return null;
    }

    /**
     * @Description: 管理echarts图表
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/12/3
     */
    @RequestMapping("/echarts_admin")
    @ResponseBody
    public String echartsAdmin(String administrator_id, String event_type, String data) throws Exception {
        System.out.println("前端发来的数据：" + administrator_id + "," + event_type + "," + data);
        switch (event_type) {
            case "GetRes": {
                List<Echarts> echartsList = echartsService.queryAllEcharts();
                System.out.println("管理员找到的图表数：" + echartsList.size());
                ArrayList<String> echartsJsons = new ArrayList<>();

                for (Echarts echart :
                        echartsList) {
                    String echartsJson = jsonMapper.writeValueAsString(echart);
                    echartsJsons.add(echartsJson);
                }
                String echartsListJson = jsonMapper.writeValueAsString(echartsJsons);
                System.out.println("管理员找到的echarts:" + echartsListJson);
                return echartsListJson;
            }

            case "Delete": {

                String[] tempArray = data.split("&");
                System.out.println("要删除的长度" + tempArray.length);
                long[] tempLong = new long[tempArray.length];
                for (int i = 0; i < tempLong.length; i++) {
                    tempLong[i] = ConverterUtil.getAsLong(tempArray[i]);
                    System.out.println("转换后" + tempLong[i]);
                }
                Long[] datas = new Long[tempLong.length];
                int n = 0;
                for (int m = 0; m < tempLong.length; m++) {
                    datas[n++] = tempLong[m];
                    System.out.println("data的值[" + (n - 1) + "]:" + datas[n - 1]);
                }
                int deleteColumns = echartsService.deleteColumns(datas);
                if (deleteColumns == datas.length) {
                    return "1";
                } else return "0";
            }
            case "Modify": {
                Echarts echarts = jsonMapper.readValue(data, Echarts.class);
                System.out.println("要修改的echarts=>" + echarts);
                int updateCount = echartsService.updateEcharts(echarts);
                if (updateCount == 1) {
                    return "1";
                } else return "0";
            }
            case "Create": {
                Echarts echarts = jsonMapper.readValue(data, Echarts.class);
                long id = 2022031401;
                echarts.setEchartsId(id);
                echarts.setEchartsAuthor(222);
                System.out.println("要创建的echarts=>" + echarts);
                int createCount = echartsService.createEcharts(echarts);

                return String.valueOf(createCount);
            }
            default: {
                return "0";
            }
        }

    }

    /**
     * @Description: 评论管理
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/12/3
     */
    @RequestMapping("/comment_admin")
    public String commentAdmin() {
        return null;
    }

    /**
     * @Description: 校园实践管理
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/12/3
     */
    @RequestMapping("/compus_practice_admin")
    public String compusPracticeAdmin() {
        return null;
    }

    /**
     * @Description: 学生实践管理
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/12/3
     */
    @RequestMapping("/student_practice_admin")
    public String studentPracticeAdmin() {
        return null;
    }

    /**
     * @Description: 商城管理
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/12/3
     */
    @RequestMapping("/sell_admin")
    public String sellAdmin() {
        return null;
    }

    /**
     * @Description: 新闻管理
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/12/3
     */

    @RequestMapping("/news_admin")
    public String newsAdmin() {
        return null;
    }

    /**
     * @Description: 博客管理
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/12/3
     */
    @RequestMapping("/blog_admin")
    public String blogAdmin() {
        return null;
    }

    /**
     * @Description: 视频管理
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/12/3
     */
    @RequestMapping("/videos_admin")
    public String videosAdmin() {
        return null;
    }

    /**
     * @Description: 笔记管理
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/12/3
     */
    @RequestMapping("/note_admin")
    public String noteAdmin() {
        return null;
    }

    /**
     * @Description: 标签管理
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/12/3
     */
    @RequestMapping("/tab_admin")
    public String tabAdmin() {
        return null;
    }

    @RequestMapping("/get_tabs")
    @ResponseBody
    public String getTabs() {
        List<Tab> tabs = tabsService.getAllTabs();
        List<String> tabNames = new ArrayList<>();
        for (Tab tab :
                tabs) {
            tabNames.add(tab.getTabName());
        }
        String tabsString = String.join("&&", tabNames);
        System.out.println("找到的tab==》" + tabsString);
        return tabsString;
    }
}
