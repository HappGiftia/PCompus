package com.uof.pcompus.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @Description: 新闻资源控制器
 * @BelongsProject: PCompus
 * @BelongsPackage: com.uof.pcompus.controller
 * @Author: Happ
 * @CreateTime: 2022-03-19 17:44
 * @Email: 157439173@qq.com
 * @Version: 1.0
 */
@Controller
@RequestMapping("/Pages.News.Detail")
public class NewsController {
    @RequestMapping("/getNewsList")
    @ResponseBody
    public String getNewsList(long userId) {
        return null;
    }

}
