package com.uof.pcompus.utils;

/**
 * @Description: 格式转换工具
 * @BelongsProject: PCompus
 * @BelongsPackage: com.uof.pcompus.utils
 * @Author: Happ
 * @CreateTime: 2022-03-31 19:03
 * @Email: 157439173@qq.com
 * @Version: 1.0
 */
public class FormatUtil {
    /**
     * @Description: 判断是否是邮箱
     * @Param: [email]
     * @return: boolean
     * @Author: Happ
     * @Date: 2022/3/31
     */
    public static boolean orEmail(String email) {
        if (email == null || "".equals(email)) return false;
        String regex = "\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*";
        return email.matches(regex);
    }

    /***
     * @Description: 判断是否是电话号码
     * @Param:
     * @return:
     * @Author: Happ
     * @Date: 2022/3/31
     */

    public static boolean orPhoneNumber(String phoneNumber) {
        if (phoneNumber == null || "".equals(phoneNumber))
            return false;
        String regex = "^1[3|4|5|8][0-9]\\d{8}$";
        return phoneNumber.matches(regex);
    }

}
