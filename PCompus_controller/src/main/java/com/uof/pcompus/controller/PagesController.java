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
    @RequestMapping("/Apps.Contacts")
    public String Apps_Contacts() {
        return "Apps.Contacts";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Apps.Mailbox")
    public String Apps_Mailbox() {
        return "Apps.Mailbox";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Apps.Tasks")
    public String Apps_Tasks() {
        return "Apps.Tasks";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Blocks.Cta")
    public String Blocks_Cta() {
        return "Blocks.Cta";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Blocks.Details")
    public String Blocks_Details() {
        return "Blocks.Details";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Blocks.Gallery")
    public String Blocks_Gallery() {
        return "Blocks.Gallery";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Blocks.Images")
    public String Blocks_Images() {
        return "Blocks.Images";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Blocks.List")
    public String Blocks_List() {
        return "Blocks.List";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Blocks.Stats")
    public String Blocks_Stats() {
        return "Blocks.Stats";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Blocks.Steps")
    public String Blocks_Steps() {
        return "Blocks.Steps";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Blocks.TabularData")
    public String Blocks_TabularData() {
        return "Blocks.TabularData";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Blocks.Thumbnails")
    public String Blocks_Thumbnails() {
        return "Blocks.Thumbnails";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Dashboards.Analytic")
    public String Dashboards_Analytic() {
        return "Dashboards.Analytic";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Dashboards.Visual")
    public String Dashboards_Visual() {
        return "Dashboards.Visual";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Authentication.ForgotPassword")
    public String Pages_Authentication_ForgotPassword() {
        return "Pages.Authentication.ForgotPassword";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Authentication.Login")
    public String Pages_Authentication_Login() {
        return "Pages.Authentication.Login";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Authentication.Register")
    public String Pages_Authentication_Register() {
        return "Pages.Authentication.Register";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Authentication.ResetPassword")
    public String StringPages_Authentication_ResetPassword() {
        return "Pages.Authentication.ResetPassword";
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
    @RequestMapping("/Pages.Blog.Home")
    public String Pages_Blog_Home() {
        return "Pages.Blog.Home";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Blog.List")
    public String Pages_Blog_List() {
        return "Pages.Blog.List";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Miscellaneous.ComingSoon")
    public String Pages_Miscellaneous_ComingSoon() {
        return "Pages.Miscellaneous.ComingSoon";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Miscellaneous.Empty")
    public String Pages_Miscellaneous_Empty() {
        return "Pages.Miscellaneous.Empty";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Miscellaneous.Error")
    public String Pages_Miscellaneous_Error() {
        return "Pages.Miscellaneous.Error";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Miscellaneous.Faq")
    public String Pages_Miscellaneous_Faq() {
        return "Pages.Miscellaneous.Faq";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Miscellaneous.KnowledgeBase")
    public String Pages_Miscellaneous_KnowledgeBase() {
        return "Pages.Miscellaneous.KnowledgeBase";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Miscellaneous.Pricing")
    public String Pages_Miscellaneous_Pricing() {
        return "Pages.Miscellaneous.Pricing";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Miscellaneous.Mailing")
    public String Pages_Miscellaneous_Mailing() {
        return "Pages.Miscellaneous.Mailing";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Miscellaneous.Search")
    public String Pages_Miscellaneous_Search() {
        return "Pages.Miscellaneous.Search";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Portfolio.Detail")
    public String Pages_Portfolio_Detail() {
        return "Pages.Portfolio.Detail";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Portfolio.Home")
    public String Pages_Portfolio_Home() {
        return "Pages.Portfolio.Home";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Profile.Settings")
    public String Pages_Profile_Settings() {
        return "Pages.Profile.Settings";
    }

    /**
     * @Description:
     * @Param: []
     * @return: java.lang.String
     * @Author: Happ
     * @Date: 2021/11/15
     */
    @RequestMapping("/Pages.Profile.Standard")
    public String Pages_Profile_Standard() {
        return "Pages.Profile.Standard";
    }
}
