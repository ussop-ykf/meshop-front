/*
 Navicat Premium Data Transfer

 Source Server         : aaa
 Source Server Type    : MySQL
 Source Server Version : 80035 (8.0.35)
 Source Host           : localhost:3306
 Source Schema         : meshop

 Target Server Type    : MySQL
 Target Server Version : 80035 (8.0.35)
 File Encoding         : 65001

 Date: 08/01/2024 16:58:25
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for address
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'id自动增长列',
  `user_id` int NOT NULL COMMENT '用户id',
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '收件人姓名',
  `phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '收件人固定电话号码',
  `mobile` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '收件人手机号码',
  `province` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '省份',
  `city` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '城市',
  `district` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '区/县',
  `addr` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '详细地址',
  `zip` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '邮编',
  `dfault` tinyint(1) NULL DEFAULT NULL COMMENT '是否是默认地址，0-非默认、1-默认',
  `isDel` tinyint(1) NOT NULL COMMENT '是否删除，0-正常、1-已删除',
  `created` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `updated` datetime NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of address
-- ----------------------------
INSERT INTO `address` VALUES (2, 4, '酷酷酷', NULL, '12345678900', '黑龙江省', '佳木斯市', '汤原县', '地址', '234567', 0, 1, '2024-01-05 23:12:19', '2024-01-06 14:02:49');
INSERT INTO `address` VALUES (12, 4, '涛涛涛涛', NULL, '12345678900', '黑龙江省', '佳木斯市', '汤原县', '地址', '234567', 0, 1, '2024-01-06 13:40:56', '2024-01-06 14:01:35');
INSERT INTO `address` VALUES (13, 4, '啊啊', NULL, '12345678900', '黑龙江省', '佳木斯市', '汤原县', '地址', '234567', 0, 1, '2024-01-06 13:41:47', '2024-01-06 14:01:35');
INSERT INTO `address` VALUES (17, 4, '酷酷酷1', NULL, '12345678900', '黑龙江省', '佳木斯市', '汤原县', '地址', '234567', 0, 1, '2024-01-06 13:48:10', '2024-01-06 14:01:35');
INSERT INTO `address` VALUES (19, 4, '涛涛涛涛1', NULL, '12345678900', '黑龙江省', '佳木斯市', '汤原县', '地址', '234567', 0, 0, '2024-01-06 13:48:59', '2024-01-06 14:01:35');
INSERT INTO `address` VALUES (21, 4, 'dddd', NULL, '11234567897', '吉林省', '松原市', '前郭尔罗斯蒙古族自治县', '地址', '123456', 0, 1, '2024-01-06 14:01:23', '2024-01-06 14:01:35');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '商品编号，自动增长列',
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '商品名称（配件）',
  `product_id` int NOT NULL COMMENT '产品类型编号，对应goods_category表中parent_id为0的分类',
  `parts_id` int NOT NULL COMMENT '配件分类，对应goods_category表中parent_id非0参数',
  `icon_url` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '商品主照片',
  `sub_images` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL COMMENT '照片地址，一组小图',
  `detail` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL COMMENT '商品详情',
  `spec_param` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL COMMENT '规格参数',
  `price` decimal(20, 2) NOT NULL COMMENT '价格：单位元，保留两位小数',
  `stock` int NOT NULL COMMENT '库存',
  `status` int NOT NULL COMMENT '商品的状态：1-待售，刚保存；2-上架；3-下架，停售；默认值为1',
  `is_hot` int NOT NULL COMMENT '是否热销，1-是，2-否；默认值为2',
  `created` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `updated` datetime NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES (1, '测试', 1, 1, 'f1_r_1_b.png', '111', '1', '1', 1.00, 1, 1, 1, '2023-12-27 10:42:00', '2024-01-24 10:42:04');
INSERT INTO `goods` VALUES (2, '3', 2, 2, 'f1_m_top.jpg', '1', '1', '1', 1.00, 1, 1, 1, NULL, NULL);
INSERT INTO `goods` VALUES (3, '3', 3, 3, 'f1_r_1_m.png', '3', '3', '3', 3.00, 3, 3, 2, NULL, NULL);
INSERT INTO `goods` VALUES (4, '4', 4, 4, 'f1_r_1_t.png', '4', '4', '4', 4.00, 4, 4, 2, NULL, NULL);
INSERT INTO `goods` VALUES (5, '5', 5, 5, 'f1_r_2_b.jpg', '5', '5', '5', 5.00, 5, 5, 2, NULL, NULL);
INSERT INTO `goods` VALUES (6, '6', 6, 6, 'f1_r_2_t.png', '6', '6', '6', 6.00, 6, 6, 1, NULL, NULL);
INSERT INTO `goods` VALUES (7, '7', 7, 7, 'f2_left_big.jpg', '7', '7', '7', 7.00, 7, 7, 1, NULL, NULL);
INSERT INTO `goods` VALUES (8, '7', 7, 7, 'f2_m_b_01.png', '7', '7', '7', 7.00, 7, 7, 1, NULL, NULL);
INSERT INTO `goods` VALUES (9, '9', 9, 9, 'f2_m_b_02.png', '9', '9', '9', 9.00, 9, 9, 1, NULL, NULL);

-- ----------------------------
-- Table structure for goods_category
-- ----------------------------
DROP TABLE IF EXISTS `goods_category`;
CREATE TABLE `goods_category`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'id自动增长列',
  `parent_id` int NOT NULL COMMENT '父类ID，id为0时为根节点，为一类节点',
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '类别名称',
  `sort_order` int NULL DEFAULT NULL COMMENT '同类展示顺序',
  `status` tinyint(1) NOT NULL COMMENT '状态编码，1：有效、0：无效',
  `level` int NULL DEFAULT NULL COMMENT '节点类别，顶层节点为0，依次类推',
  `created` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `updated` datetime NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of goods_category
-- ----------------------------

-- ----------------------------
-- Table structure for goods_order
-- ----------------------------
DROP TABLE IF EXISTS `goods_order`;
CREATE TABLE `goods_order`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '订单项id，自动增长列',
  `uid` int NOT NULL COMMENT '用户编号',
  `order_id` int NOT NULL COMMENT '所属订单id',
  `goods_id` int NOT NULL COMMENT '商品编号',
  `goods_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '商品名称',
  `icon_url` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '商品主图',
  `price` decimal(20, 2) NOT NULL COMMENT '商品单价',
  `quantity` int NOT NULL COMMENT '购买的商品数量',
  `total_price` decimal(20, 2) NOT NULL COMMENT '订单项总价格',
  `created` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `updated` datetime NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of goods_order
-- ----------------------------

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order`  (
  `order_no` bigint NOT NULL AUTO_INCREMENT COMMENT '订单编号',
  `uid` int NOT NULL COMMENT '用户编号',
  `addr_id` int NOT NULL COMMENT '收货地址编号',
  `amount` decimal(20, 2) NOT NULL COMMENT '订单付款金额',
  `type` int NOT NULL COMMENT '付款类型，1-在线支付、2-货到付款',
  `freight` int NOT NULL COMMENT '运费',
  `status` int NOT NULL COMMENT '订单状态，1-未付款、2-已付款，3-已发货、4-交易成功、5-交易关闭、6-已取消',
  `payment_time` datetime NULL DEFAULT NULL COMMENT '支付时间',
  `delivery_time` datetime NULL DEFAULT NULL COMMENT '到货时间',
  `finish_time` datetime NULL DEFAULT NULL COMMENT '交易完成时间',
  `close_time` datetime NULL DEFAULT NULL COMMENT '交易关闭时间',
  `created` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `updated` datetime NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`order_no`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES (1, 4, 2, 600.00, 1, 20, 2, '2024-01-04 10:42:46', '2024-01-06 10:42:56', '2024-01-04 10:43:00', '2024-01-04 13:43:05', NULL, NULL);

-- ----------------------------
-- Table structure for shopping_cart
-- ----------------------------
DROP TABLE IF EXISTS `shopping_cart`;
CREATE TABLE `shopping_cart`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '编号，自动增长列',
  `user_id` int NOT NULL COMMENT '用户id',
  `product_id` int NOT NULL COMMENT '商品id',
  `quantity` int NOT NULL COMMENT '商品数量',
  `created` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `updated` datetime NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of shopping_cart
-- ----------------------------
INSERT INTO `shopping_cart` VALUES (1, 6, 1, 100, '2024-01-06 15:21:43', '2024-01-06 15:21:48');
INSERT INTO `shopping_cart` VALUES (2, 4, 2, 20, '2024-01-23 15:22:06', '2024-01-06 15:22:10');
INSERT INTO `shopping_cart` VALUES (3, 4, 3, 20, '2024-01-06 15:22:33', '2024-01-06 15:22:37');
INSERT INTO `shopping_cart` VALUES (4, 4, 6, 1, '2024-01-08 14:41:38', '2024-01-08 14:41:38');
INSERT INTO `shopping_cart` VALUES (5, 4, 6, 1, '2024-01-08 14:42:26', '2024-01-08 14:42:26');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT COMMENT 'id自动增长列',
  `account` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户名',
  `password` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '密码，MD5加密',
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '邮箱',
  `phone` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '电话',
  `question` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '密码问题',
  `asw` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '找回密码答案',
  `role` int NOT NULL DEFAULT 1 COMMENT '角色 1-普通用户、2-管理员',
  `age` int NOT NULL COMMENT '年龄，在0到120之间取值',
  `sex` tinyint(1) NOT NULL COMMENT '性别，1：男、0：女',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime NOT NULL COMMENT '更新时间',
  `del` tinyint(1) NOT NULL DEFAULT 0 COMMENT '正常：0、删除：1，默认为0',
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT '姓名',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (0000000003, 'action01', '202cb962ac59075b964b07152d234b70', 'action@action.cn', '123456789', '你的密码是多少', '不告诉你', 1, 17, 1, '2023-12-31 10:16:51', '2023-12-31 10:16:51', 0, '');
INSERT INTO `user` VALUES (0000000004, 'action02', 'e10adc3949ba59abbe56e057f20f883e', 'action@action.cn', '12345678910', '你的名字是', '111', 1, 21, 1, '2023-12-31 17:16:34', '2024-01-06 14:00:58', 0, '');
INSERT INTO `user` VALUES (0000000005, 'action04', 'e10adc3949ba59abbe56e057f20f883e', '123@163.com', '1775388', '密码是123', '密码是321', 1, 58, 1, '2024-01-01 11:14:01', '2024-01-02 15:09:33', 0, '');
INSERT INTO `user` VALUES (0000000006, 'action05', 'e10adc3949ba59abbe56e057f20f883e', 'action@action.cn', '123456789', '你的密码是多少', '不告诉你', 1, 17, 1, '2024-01-02 15:05:30', '2024-01-02 15:05:30', 0, '');
INSERT INTO `user` VALUES (0000000007, 'abcde', 'e10adc3949ba59abbe56e057f20f883e', 'abc@qq.com', '12345678978', '111', '111', 1, 18, 1, '2024-01-03 10:57:24', '2024-01-03 10:57:24', 0, '');
INSERT INTO `user` VALUES (0000000008, 'aaaaa', 'e10adc3949ba59abbe56e057f20f883e', 'abc@qq.com', '12345678978', '111', '111', 1, 18, 1, '2024-01-04 22:21:22', '2024-01-04 22:21:22', 0, '');
INSERT INTO `user` VALUES (0000000009, 'bbbbb', 'fcea920f7412b5da7be0cf42b8c93759', '222@qq.com', '12345676543', '111', '111', 1, 19, 1, '2024-01-06 18:15:26', '2024-01-06 18:15:50', 0, '');
INSERT INTO `user` VALUES (0000000010, 'admin', 'e10adc3949ba59abbe56e057f20f883e', 'abc@qq.com', '12345678978', '111', '111', 1, 20, 0, '2024-01-08 14:16:12', '2024-01-08 14:16:12', 0, '');

SET FOREIGN_KEY_CHECKS = 1;
