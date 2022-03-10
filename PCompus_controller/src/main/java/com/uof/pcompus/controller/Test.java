package com.uof.pcompus.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class Test {
    @RequestMapping("/testajax")
    public String testAjax() {

        return "testajax";
    }

    @RequestMapping("/testusername")
    @ResponseBody
    public String testUsername(String username) {
        System.out.println("当前输入用户名" + username);
        return "true";
    }
}
