package com.uof.pcompus.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.uof.pcompus.pojo.User;
import com.uof.pcompus.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @Description: 用于用户注册提交
 * @BelongsProject: PCompus
 * @BelongsPackage: com.uof.pcompus.controller
 * @Author: Happ
 * @CreateTime: 2021-11-15 18:55
 * @Email: 157439173@qq.com
 * @Version: 1.0
 */


@Controller
public class RegisterController {
    @Autowired
    private RegisterService registerService;
    public static ObjectMapper jsonMapper = new ObjectMapper();

    static {
//       自动通过spi发现Jackson的module并注册
        jsonMapper.findAndRegisterModules();
//        将发送到前端的pojo属性名转换为蛇形命名法
        jsonMapper.setPropertyNamingStrategy(PropertyNamingStrategy.SNAKE_CASE);
    }

    //    注册
    @RequestMapping("/register")
    @ResponseBody
    public void register(User user) {
        System.out.println(user);
        registerService.registerAccount(user);
    }

    //    验证用户名
    @RequestMapping("/query")
    @ResponseBody
    public String query(String username) {
        System.out.println("参数：" + username);
        List<User> userList = registerService.queryUsernameCount(username);
        for (User user : userList) {
            System.out.println(user);
        }
        if (userList.size() != 0)
            return "1";
        else return "0";
    }
}
