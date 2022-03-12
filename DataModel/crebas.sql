/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2022/3/12 21:19:51                           */
/*==============================================================*/


drop table if exists pcompus.auto_echarts;

alter table pcompus.user
   drop primary key;

drop table if exists pcompus.tmp_user;

rename table pcompus.user to tmp_user;

/*==============================================================*/
/* Table: authoiity                                             */
/*==============================================================*/
create table authoiity
(
   authority_name       varchar(10)
);

/*==============================================================*/
/* Table: echarts                                               */
/*==============================================================*/
create table pcompus.echarts
(
   column_id            national varchar(11) not null,
   title                national varchar(10) not null,
   echarts_label        national varchar(50) not null,
   echarts_x            national varchar(50),
   echarts_series_name  national varchar(50) not null,
   echarts_series_type  national varchar(8) not null,
   echarts_series_stack national varchar(50),
   echarts_series_data  national varchar(255) not null,
   update_echarts_time  datetime not null,
   primary key (column_id, title)
);

/*==============================================================*/
/* Table: user                                                  */
/*==============================================================*/
create table user
(
   user_id              bigint not null,
   user_name            varchar(8),
   user_password        varchar(30),
   user_phoneNumber     varchar(11) not null,
   user_email           varchar(25) not null,
   user_imge            longblob,
   login_time           datetime,
   authority            varchar(10),
   primary key (user_id, user_phoneNumber, user_email)
);

#WARNING: The following insert order will fail because it cannot give value to mandatory columns
insert into user (user_id, user_name, user_password, user_phoneNumber, user_email)
select user_id, user_name, user_password, user_phoneNumber, ?
from pcompus.tmp_user;

alter table user add constraint FK_Reference_1 foreign key (authority)
      references authoiity (authority_name) on delete restrict on update restrict;

