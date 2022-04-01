package com.uof.pcompus.controller;

import com.uof.pcompus.utils.FormatUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @Description: 登录控制器
 * @BelongsProject: PCompus
 * @BelongsPackage: com.uof.pcompus.controller
 * @Author: Happ
 * @CreateTime: 2022-03-31 18:52
 * @Email: 157439173@qq.com
 * @Version: 1.0
 */
@Controller
public class LoginController {


    //查询前端发来的邮箱或手机号所得到的用户数
    int queryUserLoginCount;

    @RequestMapping("/loginConfirm")
    public String loginConfirm(String phoneOrEmail, String passwordConfirm) {

        if (FormatUtil.orEmail(phoneOrEmail)) {
//         queryUserLoginCount =   queryUserByEmail
        } else {
//           queryUserLoginCount = queryUserByPhone
        }

        return String.valueOf(queryUserLoginCount == 1 ? 1 : 0);
    }
}
