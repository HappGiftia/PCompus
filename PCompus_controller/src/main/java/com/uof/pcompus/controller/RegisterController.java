package com.uof.pcompus.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.uof.pcompus.pojo.User;
import com.uof.pcompus.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.Map;

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
    private UserService userService;
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
    public String register(String userName, String password, String email) throws JsonProcessingException {
        System.out.println(userName + password + email);
        User user = new User();
        user.setUserId(20220402L);
        user.setUserName(userName);
        user.setUserPassword(password);
        user.setUserEmail(email);
        user.setUserPhoneNumber("");
        user.setAuthority("student");
        ModelAndView modelAndView = new ModelAndView();
        if (userService.insertUser(user) == 1) {
            System.out.println("注册成功：" + userName);
            Map<String, String> map = new HashMap<String, String>();
            map.put("userName", userName);
            map.put("userPassword", password);
            return jsonMapper.writeValueAsString(map);
        }
        return "0";
    }

    //    验证用户名
    @RequestMapping("/queryUserName")
    @ResponseBody
    public int query(String userName) {
        System.out.println("参数：" + userName);
        int userCount = userService.queryUserCountByUserName(userName);
        return userCount;
    }
}
