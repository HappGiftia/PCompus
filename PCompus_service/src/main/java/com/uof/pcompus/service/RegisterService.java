package com.uof.pcompus.service;

import com.uof.pcompus.pojo.User;

import java.util.List;

public interface RegisterService {
    public void registerAccount(User user);

    public List<User> queryUsernameCount(String username);
}
