package com.uof.pcompus.pojo;

/**
 * @Description: user实体
 * @BelongsProject: PCompus
 * @BelongsPackage: com.uof.pojo
 * @Author: Happ
 * @CreateTime: 2021-11-26 19:53
 * @Email: 157439173@qq.com
 * @Version: 1.0
 */
public class User {
    private String username;
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}