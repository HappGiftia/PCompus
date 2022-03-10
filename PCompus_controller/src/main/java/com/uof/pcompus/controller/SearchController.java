package com.uof.pcompus.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @Description: 用于搜索相关资源请求
 * @BelongsProject: PCompus
 * @BelongsPackage: com.uof.pcompus.controller
 * @Author: Happ
 * @CreateTime: 2021-11-24 18:10
 * @Email: 157439173@qq.com
 * @Version: 1.0
 */
@Controller
public class SearchController {
    @RequestMapping("/nav_search")
    @ResponseBody
    public String nav_search(String nav_search) {
        System.out.println(nav_search);
        return "okna";
    }
}
