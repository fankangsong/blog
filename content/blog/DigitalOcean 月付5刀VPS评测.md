---
path: '/blog/digitalocean-vps-experience'
date: '2014-07-28'
title: '青年尹吾'
---

# DigitalOcean 月付 5 刀 VPS 评测

一年前我从 Google Blogger 迁移到 VPS，在[DirectSpace](http://www.directspace.net/)租用了年付 15 美刀虚拟主机，一年多期间，directspace 挂了一次，最近一次是因为垃圾邮件被误停机。

停机之后我发起 1 个工单，3 个工作日重新开机，但是数据被清空。停机几天内，我选择了[DigitalOcean](https://www.digitalocean.com/?refcode=3f78995f050c)，最终选择了 DigitalOcean 作为备用机。以下是我对 DigitalOcean 月付 5 美刀机器的评测。网上都是 Linode 和 DigitalOcean 对比评测，我么有用过 Linode，以我实际使用经验来评测。

##配置

**年付 15 美刀**的 DirectSpace 配置：

CPU(1x 3.3Ghz)、内存(512MB/768MB)、硬盘(20GB SSD)、2TB 流量

**月付 5 美刀**的 DigitalOcean 最低配：

CPU(1x 2.0GHz)、内存(512MB)、硬盘(20GB SSD)、1TB 流量

配置方面的 DirectSpace 稍微好点。

##价格

DirectSpace 就不说了，一次性年付（预付款）。DigitalOcean 支持信用卡、Paypal 支付，虽然 DigitalOcean 是月付，但实际是按照小时扣费，也就是说，充值最小单位是 5 美刀，但是每月账单是按照实际使用时间（小时）计算的。另外，DigitalOcean 新用户注册是赠送 10 美刀免费体验 2 个月。**欢迎使用我的邀请码注册**，获得 10 美刀体验：[https://www.digitalocean.com/?refcode=3f78995f050c](https://www.digitalocean.com/?refcode=3f78995f050c)，优惠码`ALLSSD10`。

DigitalOcean 计费的方式：

1. 创建了虚拟主机（开机、关机）都计费，每小时 0.007 美刀；
2. 创建一次虚拟主机，使用不超过 1 小时，扣费 0.01 美刀；
3. 删除虚拟主机，不扣费；

##备份

DirectSpace 没有有备份镜像，但是备份文件不再面板显示，面板也没有提供恢复工具。DirectSpace 使用的是 SolusVM。

DigitalOcean 提供快照、自动备份功能。自动备份功能会增加 20%的费用，所以建议使用快照功能。创建快照实际上是做一次镜像备份，速度很快，大概 2 分钟左右，镜像会保存在服务器，并且 DigitalOcean 的面板支持恢复镜像。你完全可以：

1. 需要使用时，创建虚拟主机；
2. 不想使用了，创建镜像，删除主机，下次使用可以恢复镜像；

##国内访问速度

DirectSpace 网速测试：[http://www.directspace.net/company/network.html](http://www.directspace.net/company/network.html/)

深圳`ping bandwidth.directspace.net`速度平均 300ms 左右

DigitalOcean 各个节点网速测试：[http://speedtest-sfo1.digitalocean.com/](http://speedtest-sfo1.digitalocean.com/)

深圳访问 SFO1 速度不错，一般稳定在 200ms 左右。

##VPN
DirectSpace 使用的 openvz 虚拟方案，DigitalOcean 是 KVM 虚拟方案，都支持 VPN。DirectSpace 貌似不支持 VPN 加密。

##总结

我个人比较**推荐 DigitalOcean**，因为比较看重稳定性和安全。DigitalOcean 据说有不错的资金背景、客户口碑以及服务质量。

目前我仍然在使用 DirectSpace，并且在 DigitalOcean 做好镜像备份，如果下次 DirectSpace 再挂掉，或者账单到期，直接域名切到 DigitalOcean。而且第一次注册赠送的 10 美刀，足够 DigitalOcean 挂掉两个月了。

最后再次广告，**欢迎使用我的邀请码注册**，获得 10 美刀体验：[https://m.do.co/c/3f78995f050c](https://m.do.co/c/3f78995f050c)，优惠码`ALLSSD10`。
