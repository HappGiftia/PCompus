package com.uof.pcompus.service.impl;


import com.uof.pcompus.mapper.RegisterMapper;
import com.uof.pcompus.pojo.User;
import com.uof.pcompus.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service("registerService")
public class RegisterServiceImpl implements RegisterService {
    @Autowired
    private RegisterMapper registerMapper;

    @Override
    public void registerAccount(User user) {

    }

    @Override
    public List<User> queryUsernameCount(String tempUsername) {
        registerMapper.queryUsername(tempUsername);
        return null;
    }
}
