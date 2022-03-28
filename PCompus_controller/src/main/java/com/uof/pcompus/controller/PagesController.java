package com.uof.pcompus.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


/**
 * @Description: 用于页面资源请求
 * @BelongsProject: PCompus
 * @BelongsPackage: com.uof.pcompus.controller
 * @Author: Happ
 * @CreateTime: 2021-11-15 18:55
 * @Email: 157439173@qq.com
 * @Version: 1.0
 */

@Controller
public class PagesController {
    /**
     * @Description: 首页资源请求
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Dashboards.Default")
    public String Dashboards_Default() {
        return "Dashboards.Default";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Apps.Calendar")
    public String Apps_Calendar() {
        return "Apps.Calendar";
    }

    /**
     * @Description: 用于
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Apps.Chat")
    public String Apps_Chat() {
        return "Apps.Chat";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Apps.Diary")
    public String Apps_Diary() {
        return "Apps.Diary";
    }


    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Apps.TimeLine")
    public String Time_Line() {
        return "Apps.TimeLine";
    }


    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Blocks.Authentication.ForgotPassword")
    public String Apps_Authentication_ForgotPassword() {
        return "Blocks.Authentication.ForgotPassword";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Blocks.Authentication.Login")
    public String Apps_Authentication_Login() {
        return "Blocks.Authentication.Login";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Blocks.Authentication.Register")
    public String Blocks_Authentication_Register() {
        return "Blocks.Authentication.Register";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Blocks.Authentication.ResetPassword")
    public String Blocks_Authentication_ResetPassword() {
        return "Blocks.Authentication.ResetPassword";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Blocks.FAQ")
    public String Blocks_FAQ() {
        return "Blocks.FAQ";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Blocks.Music.Playing")
    public String Blocks_Music_Playing() {
        return "Blocks.Music.Playing";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Blocks.Public.Chatroom")
    public String Blocks_Public_Chatroom() {
        return "Blocks.Public.Chatroom";
    }


    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Blocks.User.Info")
    public String Blocks_User_Info() {
        return "Blocks.User.Info";
    }


    @RequestMapping("/Dashboards.Community")
    public String Dashboards_Community() {
        return "Dashboards.Community";
    }


    @RequestMapping("/Pages.Products.Detail")
    public String Pages_Products_Detail() {
        return "Pages.Products.Detail";
    }

    @RequestMapping("/Pages.Products.Grid")
    public String Pages_Products_Grid() {
        return "Pages.Products.Grid";
    }


    @RequestMapping("/Dashboards.Compus")
    public String Dashboards_Compus() {
        return "Dashboards.Compus";
    }

    @RequestMapping("/Dashboards.Default.Search")
    public String Dashboards_Default_Search() {
        return "Dashboards.Default.Search";
    }


    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Dashboards.Personal.Data")
    public String Dashboards_Personal_Data() {
        return "Dashboards.Personal.Data";
    }


    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Blog.Detail")
    public String Pages_Blog_Detail() {
        return "Pages.Blog.Detail";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Blog.Grid")
    public String Pages_Blog_Grid() {
        return "Pages.Blog.Grid";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Blog.Write")
    public String Pages_Blog_Write() {
        return "Pages.Blog.Write";
    }


    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Picture.Grid")
    public String Pages_Picture_Grid() {
        return "Pages.Picture.Grid";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Picture.Detail")
    public String Pages_Picture_Detail() {
        return "Pages.Picture.Detail";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Picture.Upload")
    public String Pages_Picture_Upload() {
        return "Pages.Picture.Upload";
    }


    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.News.List")
    public String Pages_News_List() {
        return "Pages.News.List";
    }


    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
//    @RequestMapping("/Pages.News.Detail")
//    public String Pages_News_Detail() {
//        return "Pages.News.Detail";
//    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Videos.Detail")
    public String Pages_Videos_Detail() {
        return "Pages.Videos.Detail";
    }


    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Videos.Grid")
    public String Pages_Videos_Grid() {
        return "Pages.Videos.Grid";
    }


    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Practice.Detail")
    public String Pages_Practice_Detail() {
        return "Pages.Practice.Detail";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Practice.Grid")
    public String Pages_Practice_Grid() {
        return "Pages.Practice.Grid";
    }
}
