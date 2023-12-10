create database `datatable`;
use `datatable`;

create table `users` (
    `u_id` int(11) AUTO_INCREMENT primary key,
    `name` varchar(255) NOT NULL,
    `status` enum('active', 'inactive') NOT NULL,
    `role` enum(
        'product designer', 
        'frontend developer', 
        'backend developer', 
        'ui/ux designer', 
        'product manager') NOT NULL,
    `email_addr` varchar(255) NOT NULL,
    `teams` enum('design', 'product', 'marketing') NOT NULL
);

alter table `users`
    add column `profile_pic_url` varchar(255) NOT NULL after `name`;
use `datatable`;
insert into `users` (`name`, `profile_pic_url`, `status`, `role`, `email_addr`, `teams`)
values('darrell parkhouse', '', 'active', 'frontend developer', 'parkhousedarrell7@gmail.com', 'product');
insert into `users` (`name`, `profile_pic_url`, `status`, `role`, `email_addr`, `teams`)
values('robert graf', '', 'active', 'frontend developer', 'r.graf@gmail.com', 'product');
insert into `users` (`name`, `profile_pic_url`, `status`, `role`, `email_addr`, `teams`)
values('kevin buckner', '', 'active', 'frontend developer', 'alabama-5150@gmail.com', 'product');

use `datatable`;
select * from `users` where `name` = 'darrell parkhouse';

drop database `untitled_components`;
drop database `untitled_ui_kit`;
drop database `furniture_shop`;

use `kaylios`;

use portfolio_2023;

create table `categories` (
    `cat_id` int(11) unsigned AUTO_INCREMENT primary key,
    `cat_name` varchar(255) NOT NULL
);

select * from `online_users`;

-- uid, username, status, last_seen_at

create table `online_users` (
    `u_id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `u_name` varchar(255) NOT NULL,
    `status` enum('online', 'offline') NOT NULL default 'offline',
    `last_seen` DATETIME not null
);

insert into `online_users` (`u_name`, `status`, `last_seen`)
values ('darrell parkhouse', 'online', now());
insert into `online_users` (`u_name`, `status`, `last_seen`)
values ('john doe', 'offline', now());
insert into `online_users` (`u_name`, `status`, `last_seen`)
values ('robert graf', 'online', now());

select uo.*
from `online_users` as uo;
use `datatable`;
alter table `users`
    add column `password` varchar(255) not null after `name`;

use `datatable`;
alter table `users`
    add column `confPass` varchar(255) not null after `password`;