/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2022/3/13 12:00:05                           */
/*==============================================================*/


/*==============================================================*/
/* Table: administrator                                         */
/*==============================================================*/
create table administrator
(
   admin_id             bigint not null,
   admin_phone          varchar(11) not null,
   admin_password       varchar(15) not null,
   recent_login_time    datetime,
   primary key (admin_id)
);

/*==============================================================*/
/* Table: authority                                             */
/*==============================================================*/
create table authority
(
   authority_name       varchar(10) not null,
   primary key (authority_name)
);

/*==============================================================*/
/* Table: comment                                               */
/*==============================================================*/
create table comment
(
   comment_id           bigint not null,
   comment_type         varchar(8) not null,
   comment_author       bigint not null,
   comment_content      varchar(255) not null,
   create_time          datetime not null,
   primary key (comment_id)
);

/*==============================================================*/
/* Table: echarts                                               */
/*==============================================================*/
create table echarts
(
   echarts_id           bigint not null,
   title                varchar(10) not null,
   echarts_label        varchar(50) not null,
   echarts_x            varchar(50),
   echarts_series_name  varchar(50) not null,
   echarts_series_type  varchar(8) not null,
   echarts_series_stack varchar(50),
   echarts_series_data  varchar(255) not null,
   updata_echarts_time  datetime not null
);

/*==============================================================*/
/* Table: modules_types                                         */
/*==============================================================*/
create table modules_types
(
   modules_names        varchar(8) not null,
   primary key (modules_names)
);

/*==============================================================*/
/* Table: practice                                              */
/*==============================================================*/
create table practice
(
   practice_id          bigint not null,
   practice_name        varchar(20) not null,
   practice_description varchar(255),
   practice_type        varchar(20) not null,
   practice_faculties_range varchar(30),
   paractice_allowed_range varchar(30),
   practice_creator     varchar(8) not null,
   practice_create_time datetime not null,
   practice_start_time  datetime not null,
   practice_end_time    datetime not null,
   practice_cancellate_time datetime,
   practice_enroll_count int not null,
   practice_complete_count int not null,
   practice_bonus_credits real not null,
   practice_bonus_credits_type varchar(20) not null,
   is_finished          bool not null,
   primary key (practice_id, practice_name)
);

/*==============================================================*/
/* Table: reply_info                                            */
/*==============================================================*/
create table reply_info
(
   comment_id           bigint not null,
   comment_reply_id     bigint not null,
   reply_time           datetime not null,
   primary key (comment_id, comment_reply_id)
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
   authority            varchar(10) not null,
   primary key (user_id)
);

alter table administrator add constraint FK_Reference_7 foreign key (admin_id, admin_password, admin_phone, recent_login_time)
      references user (user_id, user_password, user_phoneNumber, login_time) on delete restrict on update restrict;

alter table comment add constraint FK_Reference_5 foreign key (comment_author)
      references user (user_id) on delete restrict on update restrict;

alter table comment add constraint FK_Reference_8 foreign key (comment_type)
      references modules_types (modules_names) on delete restrict on update restrict;

alter table reply_info add constraint FK_Reference_2 foreign key (comment_reply_id)
      references comment (comment_id) on delete restrict on update restrict;

alter table reply_info add constraint FK_Reference_3 foreign key (comment_id)
      references comment (comment_id) on delete restrict on update restrict;

alter table reply_info add constraint FK_Reference_4 foreign key (reply_time)
      references comment (create_time) on delete restrict on update restrict;

alter table user add constraint FK_Reference_1 foreign key (authority)
      references authority (authority_name) on delete restrict on update restrict;

