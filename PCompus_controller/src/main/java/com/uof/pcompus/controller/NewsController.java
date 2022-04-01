package com.uof.pcompus.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

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
public class NewsController {
    @RequestMapping("/PagesNewsList/getNewsList")
    @ResponseBody
    public String getNewsList(long userId) {
        System.out.println("已调用");
        return null;
    }

    @RequestMapping("/PagesNewsList/JumpPagesById")
    public ModelAndView jumpPagesById(String newsId) {
        System.out.println("前端请求的新闻ID" + newsId);
        ModelAndView modelAndView = new ModelAndView();
        if (null != newsId) {
            modelAndView.addObject("newsId", newsId);
        }
        modelAndView.setViewName("Pajaxges.News.Detail");
        return modelAndView;
    }
}
