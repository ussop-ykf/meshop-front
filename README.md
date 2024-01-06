# 机械配件商品城前端

使用h5和javascript实现前后端连接

实现商品城前端部分功能

# 前端接口-产品类型模块（无需用户登录）

### 递归获取产品类型数据接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=db66c14ae5cb40f690a4b3e508716700) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=db66c14ae5cb40f690a4b3e508716700)

请求方式：GET

请求地址：http://localhost:8080/actionmall/param/findallparams.do

详细说明：



该接口用于前台获取产品参数的数据。



返回示例：

```
                                成功返回：
{
    "status": 0,
    "data": [
        {
            "id": 10023,
            "parent_id": 0,
            "name": "混凝土机械",
            "status": true,
            "sort_order": 1,
            "level": 0,
            "created": 1518421458000,
            "updated": 1518421458000,
            "children": [
                {
                    "id": 10064,
                    "parent_id": 10023,
                    "name": "电器元件",
                    "status": true,
                    "sort_order": 0,
                    "level": 1,
                    "created": 1551679846000,
                    "updated": 1551679846000,
                    "children": []
                },
                {
                    "id": 10032,
                    "parent_id": 10023,
                    "name": "泵送搅拌系统",
                    "status": true,
                    "sort_order": 1,
                    "level": 1,
                    "created": 1518421618000,
                    "updated": 1518421618000,
                    "children": [
                        {
                            "id": 10038,
                            "parent_id": 10032,
                            "name": "管阀类",
                            "status": true,
                            "sort_order": 1,
                            "level": 2,
                            "created": 1518421706000,
                            "updated": 1518421706000,
                            "children": []
                        },
                        {
                            "id": 10039,
                            "parent_id": 10032,
                            "name": "易损类",
                            "status": true,
                            "sort_order": 2,
                            "level": 2,
                            "created": 1518421721000,
                            "updated": 1518421721000,
                            "children": []
                        }
                    ]
                },
                {
                    "id": 10033,
                    "parent_id": 10023,
                    "name": "油品",
                    "status": true,
                    "sort_order": 2,
                    "level": 1,
                    "created": 1518421628000,
                    "updated": 1518421628000,
                    "children": [
                        {
                            "id": 10040,
                            "parent_id": 10033,
                            "name": "防冻液",
                            "status": true,
                            "sort_order": 1,
                            "level": 2,
                            "created": 1518421747000,
                            "updated": 1518421747000,
                            "children": []
                        },
                        {
                            "id": 10041,
                            "parent_id": 10033,
                            "name": "齿轮油",
                            "status": true,
                            "sort_order": 2,
                            "level": 2,
                            "created": 1518421757000,
                            "updated": 1518421757000,
                            "children": []
                        },
                        {
                            "id": 10042,
                            "parent_id": 10033,
                            "name": "润滑油",
                            "status": true,
                            "sort_order": 3,
                            "level": 2,
                            "created": 1518421766000,
                            "updated": 1518421766000,
                            "children": []
                        },
                        {
                            "id": 10043,
                            "parent_id": 10033,
                            "name": "液压油",
                            "status": true,
                            "sort_order": 4,
                            "level": 2,
                            "created": 1518421775000,
                            "updated": 1518421775000,
                            "children": []
                        },
                        {
                            "id": 10044,
                            "parent_id": 10033,
                            "name": "锂基油",
                            "status": true,
                            "sort_order": 5,
                            "level": 2,
                            "created": 1518421798000,
                            "updated": 1518421798000,
                            "children": []
                        }
                    ]
                },
                {
                    "id": 10034,
                    "parent_id": 10023,
                    "name": "电器元件",
                    "status": true,
                    "sort_order": 3,
                    "level": 1,
                    "created": 1518421637000,
                    "updated": 1518421637000,
                    "children": [
                        {
                            "id": 10045,
                            "parent_id": 10034,
                            "name": "接触器",
                            "status": true,
                            "sort_order": 1,
                            "level": 2,
                            "created": 1518421835000,
                            "updated": 1518421835000,
                            "children": []
                        },
                        {
                            "id": 10046,
                            "parent_id": 10034,
                            "name": "开关",
                            "status": true,
                            "sort_order": 2,
                            "level": 2,
                            "created": 1518421843000,
                            "updated": 1518421843000,
                            "children": []
                        },
                        {
                            "id": 10047,
                            "parent_id": 10034,
                            "name": "继电器",
                            "status": true,
                            "sort_order": 3,
                            "level": 2,
                            "created": 1518421850000,
                            "updated": 1518421850000,
                            "children": []
                        },
                        {
                            "id": 10048,
                            "parent_id": 10034,
                            "name": "遥控器",
                            "status": true,
                            "sort_order": 4,
                            "level": 2,
                            "created": 1518421856000,
                            "updated": 1518421856000,
                            "children": []
                        },
                        {
                            "id": 10049,
                            "parent_id": 10034,
                            "name": "断路器",
                            "status": true,
                            "sort_order": 5,
                            "level": 2,
                            "created": 1518421877000,
                            "updated": 1518421877000,
                            "children": []
                        },
                        {
                            "id": 10050,
                            "parent_id": 10034,
                            "name": "控制器",
                            "status": true,
                            "sort_order": 6,
                            "level": 2,
                            "created": 1518421886000,
                            "updated": 1518421886000,
                            "children": []
                        }
                    ]
                },
                {
                    "id": 10035,
                    "parent_id": 10023,
                    "name": "地盘配件",
                    "status": true,
                    "sort_order": 4,
                    "level": 1,
                    "created": 1518421648000,
                    "updated": 1518421648000,
                    "children": []
                },
                {
                    "id": 10036,
                    "parent_id": 10023,
                    "name": "发动机件",
                    "status": true,
                    "sort_order": 5,
                    "level": 1,
                    "created": 1518421662000,
                    "updated": 1518421662000,
                    "children": []
                },
                {
                    "id": 10037,
                    "parent_id": 10023,
                    "name": "轮胎",
                    "status": true,
                    "sort_order": 6,
                    "level": 1,
                    "created": 1518421670000,
                    "updated": 1518421670000,
                    "children": []
                }
            ]
        },
        {
            "id": 10024,
            "parent_id": 0,
            "name": "建筑起重机械",
            "status": true,
            "sort_order": 2,
            "level": 0,
            "created": 1518421473000,
            "updated": 1518421473000,
            "children": [
                {
                    "id": 10051,
                    "parent_id": 10024,
                    "name": "轮胎起重机",
                    "status": true,
                    "sort_order": 1,
                    "level": 1,
                    "created": 1518426384000,
                    "updated": 1518426384000,
                    "children": []
                }
            ]
        },
        {
            "id": 10025,
            "parent_id": 0,
            "name": "路面机械",
            "status": true,
            "sort_order": 3,
            "level": 0,
            "created": 1518421483000,
            "updated": 1518421483000,
            "children": [
                {
                    "id": 10068,
                    "parent_id": 10025,
                    "name": "压路机",
                    "status": true,
                    "sort_order": 0,
                    "level": 1,
                    "created": 1552297010000,
                    "updated": 1552297010000,
                    "children": []
                }
            ]
        },
        {
            "id": 10026,
            "parent_id": 0,
            "name": "土方机械",
            "status": true,
            "sort_order": 4,
            "level": 0,
            "created": 1518421493000,
            "updated": 1518421493000,
            "children": [
                {
                    "id": 10069,
                    "parent_id": 10026,
                    "name": "推土机",
                    "status": true,
                    "sort_order": 0,
                    "level": 1,
                    "created": 1552297023000,
                    "updated": 1552297023000,
                    "children": []
                }
            ]
        },
        {
            "id": 10027,
            "parent_id": 0,
            "name": "环卫机械",
            "status": true,
            "sort_order": 5,
            "level": 0,
            "created": 1518421502000,
            "updated": 1518421502000,
            "children": []
        },
        {
            "id": 10028,
            "parent_id": 0,
            "name": "工业车辆",
            "status": true,
            "sort_order": 6,
            "level": 0,
            "created": 1518421513000,
            "updated": 1518421513000,
            "children": [
                {
                    "id": 10052,
                    "parent_id": 10028,
                    "name": "内燃平衡重叉车",
                    "status": true,
                    "sort_order": 1,
                    "level": 1,
                    "created": 1518426459000,
                    "updated": 1518426459000,
                    "children": [
                        {
                            "id": 10053,
                            "parent_id": 10052,
                            "name": "Z系列",
                            "status": true,
                            "sort_order": 1,
                            "level": 2,
                            "created": 1518426485000,
                            "updated": 1518426485000,
                            "children": []
                        },
                        {
                            "id": 10054,
                            "parent_id": 10052,
                            "name": "E系列",
                            "status": true,
                            "sort_order": 2,
                            "level": 2,
                            "created": 1518426495000,
                            "updated": 1518426495000,
                            "children": []
                        }
                    ]
                }
            ]
        },
        {
            "id": 10029,
            "parent_id": 0,
            "name": "模型专区",
            "status": true,
            "sort_order": 7,
            "level": 0,
            "created": 1518421522000,
            "updated": 1518421522000,
            "children": []
        },
        {
            "id": 10030,
            "parent_id": 0,
            "name": "特辑专区",
            "status": true,
            "sort_order": 8,
            "level": 0,
            "created": 1518421536000,
            "updated": 1518421536000,
            "children": []
        },
        {
            "id": 10031,
            "parent_id": 0,
            "name": "运费-01",
            "status": true,
            "sort_order": 9,
            "level": 0,
            "created": 1518421543000,
            "updated": 1518421932000,
            "children": [
                {
                    "id": 10055,
                    "parent_id": 10031,
                    "name": "111",
                    "status": true,
                    "sort_order": 0,
                    "level": 1,
                    "created": 1551665417000,
                    "updated": 1551665417000,
                    "children": []
                }
            ]
        }
    ]
}
                            
```

# 前端接口-购物车模块（用户登录后方可使用）

### 获取购物车中商品数量接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=2af65c0cffc24b71b5bb459671fbe71e) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=2af65c0cffc24b71b5bb459671fbe71e)

请求方式：GET

请求地址：http://localhost:8080/actionmall/cart/getcartcount.do

详细说明：



该接口用户获取当前用户购物车中的商品数量。





返回示例：

```
                                成功返回:
{
    "status": 0,
    "data": 3
}

失败返回：
{
    "status": 1,
    "msg": "请登录后，在查看购物车！"
}

                            
```

### 更新购物车中商品数量接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=637471bf13be41b1800555bb4e8509da) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=637471bf13be41b1800555bb4e8509da)

请求方式：GET

请求地址：http://localhost:8080/actionmall/cart/updatecarts.do

| **Query参数名** | 类型   | 必需 | 描述     | 示例 e.g. |
| :-------------- | :----- | :--- | :------- | :-------- |
| productId       | string | 是   | 产品id   | 6         |
| count           | string | 是   | 数量     | 7         |
| checked         | string | 是   | 是否选中 | 1         |

详细说明：



更新购物车中某商品数量的数据接口





返回示例：

```
                                成功时返回：
{
    "status": 0,
    "data": {
        "lists": [
            {
                "id": 18,
                "userId": 1,
                "productId": 6,
                "name": "锂基脂 00#",
                "quantity": 7,
                "price": 215.89,
                "status": 2,
                "totalPrice": 1511.23,
                "stock": 89,
                "iconUrl": "/upload/10a42221-06a8-4001-8cc6-b2deb3b9e964.png",
                "checked": 0
            }
        ],
        "totalPrice": 0
    }
}

失败返回：
{
    "status": 1,
    "msg": "请登录后，在查看购物车！"
}

                            
```

### 清空购物车接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=44241a0aa2fa43b8970fc68b57810355) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=44241a0aa2fa43b8970fc68b57810355)

请求方式：GET

请求地址：http://localhost:8080/actionmall/cart/clearcarts.do

详细说明：



清空登录用户购物车的数据接口





返回示例：

```
                                成功后返回：
{
    "status": 0,
    "msg": "成功清空购物车！"
}

失败后返回：
{
    "status": 1,
    "msg": "请登录后，在查看购物车！"
}
                            
```

### 购物车删除商品接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=73b6097384744bce8348671522adddf8) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=73b6097384744bce8348671522adddf8)

请求方式：POST

请求地址：http://localhost:8080/actionmall/cart/delcarts.do

| **Body参数名** | 类型   | 必需 | 描述 | 示例 e.g. |
| :------------- | :----- | :--- | :--- | :-------- |
| productId      | string | 是   |      | 6         |

详细说明：



删除购物车中某件商品信息的数据接口，需要提供商品编号





返回示例：

```
                                成功返回：
{
    "status": 0,
    "data": {
        "lists": [
            {
                "id": 16,
                "userId": 1,
                "productId": 29,
                "name": "压路机",
                "quantity": 1,
                "price": 11,
                "status": 2,
                "totalPrice": 11,
                "stock": 100,
                "iconUrl": "",
                "checked": 0
            }
        ],
        "totalPrice": 0
    }
}
失败返回：
{
    "status": 1,
    "msg": "请登录后，在查看购物车！"
}
或者
{
    "status": 1,
    "msg": "商品删除失败！"
}
                            
```

### 购物车商品列表接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=fbf17ab98a31409b9529596a25f52991) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=fbf17ab98a31409b9529596a25f52991)

请求方式：GET

请求地址：http://localhost:8080/actionmall/cart/findallcarts.do

详细说明：



获取登录用户购物车中的商品列表及总价格





返回示例：

```
                                成功返回：
{
    "status": 0,
    "data": {
        "lists": [
            {
                "id": 16,
                "userId": 1,
                "productId": 29,
                "name": "压路机",
                "quantity": 1,
                "price": 11,
                "status": 2,
                "totalPrice": 11,
                "stock": 100,
                "iconUrl": "",
                "checked": 0
            },
            {
                "id": 17,
                "userId": 1,
                "productId": 6,
                "name": "锂基脂 00#",
                "quantity": 2,
                "price": 215.89,
                "status": 2,
                "totalPrice": 431.78,
                "stock": 89,
                "iconUrl": "/upload/10a42221-06a8-4001-8cc6-b2deb3b9e964.png",
                "checked": 0
            }
        ],
        "totalPrice": 0
    }
}

失败返回：
{
    "status": 1,
    "msg": "请登录后，在查看购物车！"
}
                            
```

### 购物车新增商品接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=ed39ea8ddf934902889721639f0e6dae) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=ed39ea8ddf934902889721639f0e6dae)

请求方式：POST

请求地址：http://localhost:8080/actionmall/cart/savecart.do

| **Body参数名** | 类型   | 必需 | 描述     | 示例 e.g. |
| :------------- | :----- | :--- | :------- | :-------- |
| productId      | string | 是   | 商品编号 | 6         |
| count          | string | 是   | 商品数量 | 2         |
|                | string | 是   |          |           |

详细说明：



购物车新增数据接口





返回示例：

```
                                成功返回：

{
    "status": 0,
    "msg": "商品已成功加入购物车！"
}

失败返回：
{
    "status": 1,
    "msg": "请登录后，在查看购物车！"
}

                            
```

# 前端接口-地址模块（用户登录后方可使用）

### 收货人地址修改接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=9a9001dcd51f4eccbc349b2e229a2dfd) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=9a9001dcd51f4eccbc349b2e229a2dfd)

请求方式：POST

请求地址：http://localhost:8080/actionmall/addr/findAddressById.do

| **Body参数名** | 类型   | 必需 | 描述   | 示例 e.g. |
| :------------- | :----- | :--- | :----- | :-------- |
| id             | string | 是   | 地址id | 5         |

详细说明：



该接口用于用户修改收货地址信息



返回示例：

```
                                成功时返回：
{
    "status": 0,
    "data": {
        "id": 5,
        "uid": 3,
        "name": "张三",
        "phone": null,
        "mobile": "123456789",
        "province": "山东省",
        "city": "烟台市",
        "district": "芝罘区",
        "addr": "魁玉路100号",
        "zip": "264000",
        "default_addr": 0,
        "del_state": 0,
        "created": 1519038756000,
        "updated": 1519038756000
    }
}
失败时返回：
{
    "status": 1,
    "msg": "参数错误！"
}
                            
```

### 收货人默认地址设置接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=1f7fba21070a4bb787026e561321558c) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=1f7fba21070a4bb787026e561321558c)

请求方式：GET

请求地址：http://localhost:8080/actionmall/addr/setdefault.do

| **Query参数名** | 类型   | 必需 | 描述   | 示例 e.g. |
| :-------------- | :----- | :--- | :----- | :-------- |
| id              | string | 是   | 地址id | 29        |

详细说明：



该接口用于设置默认收获地址。





返回示例：

```
                                成功时返回：
{
    "status": 0,
    "data": [
        {
            "id": 29,
            "uid": 1,
            "name": "阿三",
            "phone": null,
            "mobile": "15641515",
            "province": "山东",
            "city": "烟台\n",
            "district": null,
            "addr": null,
            "zip": null,
            "default_addr": 1,
            "del_state": 0,
            "created": 1554361791000,
            "updated": 1554773227000
        },
        {
            "id": 23,
            "uid": 1,
            "name": "啊实打实",
            "phone": null,
            "mobile": "11111111111",
            "province": "河北省",
            "city": "唐山市",
            "district": "路北区",
            "addr": "打算撒大声地",
            "zip": "261300",
            "default_addr": 0,
            "del_state": 0,
            "created": 1552638101000,
            "updated": 1554368779000
        }
    ]
}

失败返回：
{
    "status": 1,
    "msg": "请登录后在进行操作！"
}
或者
{
    "status": 1,
    "msg": "默认地址设置失败！"
}

                            
```

### 收货人地址列表接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=9606f97e5ea1419aa670ec9b9d76c626) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=9606f97e5ea1419aa670ec9b9d76c626)

请求方式：GET

请求地址：http://localhost:8080/actionmall/addr/findaddrs.do

详细说明：



该接口用于获取某个用户的收货人地址信息





返回示例：

```
                                成功返回：
{
    "status": 0,
    "data": [
        {
            "id": 4,
            "uid": 3,
            "name": "李四",
            "phone": null,
            "mobile": "123456789",
            "province": "山东省",
            "city": "烟台市",
            "district": "芝罘区",
            "addr": "魁玉路100号",
            "zip": "264000",
            "dfault": false,
            "created": 1519038748000,
            "updated": 1519039374000
        },
        {
            "id": 5,
            "uid": 3,
            "name": "张三",
            "phone": null,
            "mobile": "123456789",
            "province": "山东省",
            "city": "烟台市",
            "district": "芝罘区",
            "addr": "魁玉路100号",
            "zip": "264000",
            "dfault": false,
            "created": 1519038756000,
            "updated": 1519038756000
        }
    ]
}

失败返回：
{
    "status": 1,
    "msg": "请登录后在进行操作！"
}
                            
```

### 收货人地址删除接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=438177fa4a0f43759ec1b61607890a6d) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=438177fa4a0f43759ec1b61607890a6d)

请求方式：GET

请求地址：http://localhost:8080/actionmall/addr/deladdr.do

| **Query参数名** | 类型   | 必需 | 描述           | 示例 e.g. |
| :-------------- | :----- | :--- | :------------- | :-------- |
| id              | string | 是   | 收货人地址编号 | 30        |

详细说明：



该接口用于删除收货人地址信息





返回示例：

```
                                成功时返回：
{
    "status": 0,
    "data": [
        {
            "id": 29,
            "uid": 1,
            "name": "阿三",
            "phone": null,
            "mobile": "15641515",
            "province": "山东",
            "city": "烟台\n",
            "district": null,
            "addr": null,
            "zip": null,
            "default_addr": 1,
            "del_state": 0,
            "created": 1554361791000,
            "updated": 1554368779000
        },
        {
            "id": 23,
            "uid": 1,
            "name": "啊实打实",
            "phone": null,
            "mobile": "11111111111",
            "province": "河北省",
            "city": "唐山市",
            "district": "路北区",
            "addr": "打算撒大声地",
            "zip": "261300",
            "default_addr": 0,
            "del_state": 0,
            "created": 1552638101000,
            "updated": 1554368779000
        },
        {
            "id": 26,
            "uid": 1,
            "name": "阿萨德",
            "phone": null,
            "mobile": "12345678912",
            "province": "江苏省",
            "city": "常州市",
            "district": "钟楼区",
            "addr": "燃烧",
            "zip": "261300",
            "default_addr": 0,
            "del_state": 0,
            "created": 1552717126000,
            "updated": 1554368660000
        },
        {
            "id": 27,
            "uid": 1,
            "name": "阿三",
            "phone": null,
            "mobile": "15641515",
            "province": "山东",
            "city": "烟台\n",
            "district": null,
            "addr": null,
            "zip": null,
            "default_addr": 0,
            "del_state": 0,
            "created": 1554361340000,
            "updated": 1554361340000
        },
        {
            "id": 21,
            "uid": 1,
            "name": "",
            "phone": null,
            "mobile": "",
            "province": "山东省",
            "city": "济南市",
            "district": null,
            "addr": "",
            "zip": "000000",
            "default_addr": 0,
            "del_state": 0,
            "created": 1552532196000,
            "updated": 1552879850000
        },
        {
            "id": 19,
            "uid": 1,
            "name": "啊啊",
            "phone": null,
            "mobile": "啊啊啊",
            "province": "山东省",
            "city": "济南市",
            "district": null,
            "addr": "啊啊",
            "zip": "000000",
            "default_addr": 0,
            "del_state": 0,
            "created": 1552532011000,
            "updated": 1552721003000
        },
        {
            "id": 22,
            "uid": 1,
            "name": "啊啊啊",
            "phone": null,
            "mobile": "啊啊啊",
            "province": "山东省",
            "city": "济南市",
            "district": null,
            "addr": "啊a",
            "zip": "000000",
            "default_addr": 0,
            "del_state": 0,
            "created": 1552532341000,
            "updated": 1552720018000
        },
        {
            "id": 24,
            "uid": 1,
            "name": "萨阿德",
            "phone": null,
            "mobile": "12312323123",
            "province": "天津市",
            "city": "天津市市辖区",
            "district": "和平区",
            "addr": "阿打算阿萨萨达",
            "zip": "123123",
            "default_addr": 0,
            "del_state": 0,
            "created": 1552716383000,
            "updated": 1552720018000
        },
        {
            "id": 25,
            "uid": 1,
            "name": "阿萨德",
            "phone": null,
            "mobile": "11111111111",
            "province": "黑龙江省",
            "city": "鹤岗市",
            "district": "南山区",
            "addr": "阿萨德",
            "zip": "261300",
            "default_addr": 0,
            "del_state": 0,
            "created": 1552717107000,
            "updated": 1552720018000
        }
    ]
}
失败返回：
{
    "status": 1,
    "msg": "请登录后在进行操作！"
}
或者
{
    "status": 0,
    "msg": "地址删除失败！"
}
                            
```

### 收货人地址新增接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=e341460b8b254976a4795aa18430ec8f) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=e341460b8b254976a4795aa18430ec8f)

请求方式：POST

请求地址：http://localhost:8080/actionmall/addr/saveaddr.do

| **Body参数名** | 类型   | 必需 | 描述       | 示例 e.g.   |
| :------------- | :----- | :--- | :--------- | :---------- |
| name           | string | 是   | 收货人姓名 | 张三        |
| mobile         | string | 是   | 手机号码   | 123456789   |
| province       | string | 是   | 省份       | 山东省      |
| city           | string | 是   | 城市       | 烟台市      |
| district       | string | 是   | 区/县      | 芝罘区      |
| addr           | string | 是   | 详细地址   | 魁玉路100号 |
| zip            | string | 是   | 邮编       | 264000      |

详细说明：



该接口用于新增收获人地址信息





返回示例：

```
                                {
    "status": 0,
    "data": [
        {
            "id": 29,
            "uid": 1,
            "name": "阿三",
            "phone": null,
            "mobile": "15641515",
            "province": "山东",
            "city": "烟台\n",
            "district": null,
            "addr": null,
            "zip": null,
            "default_addr": 1,
            "del_state": 0,
            "created": 1554361791000,
            "updated": 1554368779000
        },
        {
            "id": 30,
            "uid": 1,
            "name": "张三",
            "phone": null,
            "mobile": "123456789",
            "province": "山东省",
            "city": "烟台市",
            "district": "芝罘区",
            "addr": "魁玉路100号",
            "zip": "264000",
            "default_addr": 0,
            "del_state": 0,
            "created": 1554771911000,
            "updated": 1554771911000
        },
        {
            "id": 23,
            "uid": 1,
            "name": "啊实打实",
            "phone": null,
            "mobile": "11111111111",
            "province": "河北省",
            "city": "唐山市",
            "district": "路北区",
            "addr": "打算撒大声地",
            "zip": "261300",
            "default_addr": 0,
            "del_state": 0,
            "created": 1552638101000,
            "updated": 1554368779000
        },
        {
            "id": 26,
            "uid": 1,
            "name": "阿萨德",
            "phone": null,
            "mobile": "12345678912",
            "province": "江苏省",
            "city": "常州市",
            "district": "钟楼区",
            "addr": "燃烧",
            "zip": "261300",
            "default_addr": 0,
            "del_state": 0,
            "created": 1552717126000,
            "updated": 1554368660000
        },
        {
            "id": 27,
            "uid": 1,
            "name": "阿三",
            "phone": null,
            "mobile": "15641515",
            "province": "山东",
            "city": "烟台\n",
            "district": null,
            "addr": null,
            "zip": null,
            "default_addr": 0,
            "del_state": 0,
            "created": 1554361340000,
            "updated": 1554361340000
        },
        {
            "id": 21,
            "uid": 1,
            "name": "",
            "phone": null,
            "mobile": "",
            "province": "山东省",
            "city": "济南市",
            "district": null,
            "addr": "",
            "zip": "000000",
            "default_addr": 0,
            "del_state": 0,
            "created": 1552532196000,
            "updated": 1552879850000
        },
        {
            "id": 19,
            "uid": 1,
            "name": "啊啊",
            "phone": null,
            "mobile": "啊啊啊",
            "province": "山东省",
            "city": "济南市",
            "district": null,
            "addr": "啊啊",
            "zip": "000000",
            "default_addr": 0,
            "del_state": 0,
            "created": 1552532011000,
            "updated": 1552721003000
        },
        {
            "id": 22,
            "uid": 1,
            "name": "啊啊啊",
            "phone": null,
            "mobile": "啊啊啊",
            "province": "山东省",
            "city": "济南市",
            "district": null,
            "addr": "啊a",
            "zip": "000000",
            "default_addr": 0,
            "del_state": 0,
            "created": 1552532341000,
            "updated": 1552720018000
        },
        {
            "id": 24,
            "uid": 1,
            "name": "萨阿德",
            "phone": null,
            "mobile": "12312323123",
            "province": "天津市",
            "city": "天津市市辖区",
            "district": "和平区",
            "addr": "阿打算阿萨萨达",
            "zip": "123123",
            "default_addr": 0,
            "del_state": 0,
            "created": 1552716383000,
            "updated": 1552720018000
        },
        {
            "id": 25,
            "uid": 1,
            "name": "阿萨德",
            "phone": null,
            "mobile": "11111111111",
            "province": "黑龙江省",
            "city": "鹤岗市",
            "district": "南山区",
            "addr": "阿萨德",
            "zip": "261300",
            "default_addr": 0,
            "del_state": 0,
            "created": 1552717107000,
            "updated": 1552720018000
        }
    ]
}
                            
```

# 前端接口-订单模块（用户登录后方可使用）

### 确认收货接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=55e57141df7a4917884b4b130becf7b3) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=55e57141df7a4917884b4b130becf7b3)

请求方式：POST

请求地址：http://localhost:8080/actionmall/order/confirmreceipt.do

| **Body参数名** | 类型   | 必需 | 描述   | 示例 e.g.     |
| :------------- | :----- | :--- | :----- | :------------ |
| orderNo        | string | 是   | 订单号 | 1554773510026 |

详细说明：



该接口用于用户确认订单收货



返回示例：

```
                                成功时返回：
{
    "status": 0,
    "msg": "订单已确认收货！"
}

失败时返回：
{
    "status": 1,
    "msg": "失败！"
}
                            
```

### 订单详情接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=619168f4293c4c03a74875badd404bd4) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=619168f4293c4c03a74875badd404bd4)

请求方式：GET

请求地址：http://localhost:8080/actionmall/order/getdetail.do

| **Query参数名** | 类型   | 必需 | 描述   | 示例 e.g.     |
| :-------------- | :----- | :--- | :----- | :------------ |
| orderNo         | string | 是   | 订单号 | 1554280269264 |

详细说明：



该接口用于获取订单详情。





返回示例：

```
                                成功时返回：
{
    "status": 0,
    "data": {
        "orderNo": 1554280269264,
        "amount": 242,
        "type": 1,
        "typeDesc": "在线支付",
        "freight": 0,
        "status": 6,
        "statusDesc": "订单取消",
        "paymentTime": "",
        "deliveryTime": "",
        "finishTime": "",
        "closeTime": "",
        "created": "2019-04-03 16:31:09",
        "orderItems": [
            {
                "orderNo": 1554280269264,
                "goodsId": 8,
                "goodsName": "aaaaa",
                "iconUrl": "",
                "curPrice": 11,
                "quantity": 21,
                "totalPrice": 231,
                "created": null
            },
            {
                "orderNo": 1554280269264,
                "goodsId": 29,
                "goodsName": "压路机",
                "iconUrl": "",
                "curPrice": 11,
                "quantity": 1,
                "totalPrice": 11,
                "created": null
            }
        ],
        "addrId": 26,
        "deliveryName": "阿萨德",
        "address": {
            "name": "阿萨德",
            "phone": null,
            "mobile": "12345678912",
            "province": "江苏省",
            "city": "常州市",
            "district": "钟楼区",
            "addr": "燃烧",
            "zip": "261300"
        }
    }
}

失败后返回：
{
    "status": 1,
    "msg": "请登录后在进行操作！"
}
或者
{
    "status": 1,
    "msg": "参数错误！"
}

                            
```

### 订单取消接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=944d0f40f186418fa83522b5b32acf34) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=944d0f40f186418fa83522b5b32acf34)

请求方式：POST

请求地址：http://localhost:8080/actionmall/order/cancelorder.do

| **Body参数名** | 类型   | 必需 | 描述   | 示例 e.g.     |
| :------------- | :----- | :--- | :----- | :------------ |
| orderNo        | string | 是   | 订单号 | 1554280269264 |
|                | string | 是   |        |               |
|                | string | 是   |        |               |

详细说明：



该接口用于取消订单。



返回示例：

```
成功时返回：
{
    "status": 0,
    "msg": "该订单已经取消！"
}
失败时返回：
{
    "status": 1,
    "msg": "失败！"
}

{
    "status": 1,
    "msg": "该用户订单不存在，或已删除！"
}
                            
```

### 订单列表接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=8206603ee0984937a7f2481de516ec5c) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=8206603ee0984937a7f2481de516ec5c)

请求方式：GET

请求地址：http://localhost:8080/actionmall/order/getlist.do

| **Query参数名** | 类型   | 必需 | 描述               | 示例 e.g. |
| :-------------- | :----- | :--- | :----------------- | :-------- |
| pageNo          | string | 是   | 当前页码，默认为1  | 1         |
| pageSize        | string | 是   | 页面大小，默认为10 | 10        |
| status          | string | 是   | 订单状态           | 1         |

详细说明：



该接口用于返回用户订单分页列表。





返回示例：

```
                                成功时返回：
{
    "status": 0,
    "data": {
        "pageNum": 1,
        "pageSize": 10,
        "totalRecord": 15,
        "totalPage": 2,
        "startIndex": 0,
        "data": [
            {
                "orderNo": 1552546163312,
                "amount": 316,
                "type": 1,
                "typeDesc": "在线支付",
                "freight": 0,
                "status": 1,
                "statusDesc": "未付款",
                "paymentTime": "",
                "deliveryTime": "",
                "finishTime": "",
                "closeTime": "",
                "created": "2019-03-14 14:49:23",
                "orderItems": [
                    {
                        "orderNo": 1552546163312,
                        "goodsId": 9,
                        "goodsName": "润滑油",
                        "iconUrl": "/upload/47fb50a7-c9d2-4638-971e-adaa1ddccef2.png",
                        "curPrice": 79,
                        "quantity": 3,
                        "totalPrice": 237,
                        "created": null
                    },
                    {
                        "orderNo": 1552546163312,
                        "goodsId": 10,
                        "goodsName": "润滑油",
                        "iconUrl": "/upload/a688babd-4c45-484a-978d-c746e62618bf.png",
                        "curPrice": 79,
                        "quantity": 1,
                        "totalPrice": 79,
                        "created": null
                    }
                ],
                "addrId": 21,
                "deliveryName": "",
                "address": null
            }
        ],
        "prePage": 1,
        "nextPage": 2
    }
}

失败返回：
{
    "status": 1,
    "msg": "请登录后在进行操作！"
}

                            
```

### 订单创建接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=998c18a95f7547ca88b434b5e518022f) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=998c18a95f7547ca88b434b5e518022f)

请求方式：POST

请求地址：http://localhost:8080/actionmall/order/createorder.do

| **Body参数名** | 类型   | 必需 | 描述   | 示例 e.g. |
| :------------- | :----- | :--- | :----- | :-------- |
| addrId         | string | 是   | 地址id | 4         |

详细说明：



该接口用于创建订单信息





返回示例：

```
                                成功返回：
{
    "status": 0,
    "data": {
        "orderNo": 1519099875344,
        "amount": 863.56,
        "type": 1,
        "typeDesc": "在线支付",
        "freight": 0,
        "status": 1,
        "statusDesc": "未付款",
        "paymentTime": "",
        "deliveryTime": "",
        "finishTime": "",
        "closeTime": "",
        "created": "2018-02-20 12:11:15",
        "orderItems": [
            {
                "orderNo": 1519099875344,
                "goodsId": 7,
                "goodsName": "锂基脂 00#",
                "iconUrl": "/upload/aa2e590f-c4eb-42e0-8260-54af15ed4760.jpg",
                "curPrice": 215.89,
                "quantity": 2,
                "totalPrice": 431.78,
                "created": null
            },
            {
                "orderNo": 1519099875344,
                "goodsId": 6,
                "goodsName": "锂基脂 00#",
                "iconUrl": "/upload/aa2e590f-c4eb-42e0-8260-54af15ed4760.jpg",
                "curPrice": 215.89,
                "quantity": 2,
                "totalPrice": 431.78,
                "created": null
            }
        ],
        "addrId": 4,
        "deliveryName": "李四",
        "address": {
            "name": "李四",
            "phone": null,
            "mobile": "123456789",
            "province": "山东省",
            "city": "烟台市",
            "district": "芝罘区",
            "addr": "魁玉路100号",
            "zip": "264000"
        }
    }
}


失败返回：

{
    "status": 1,
    "msg": "请登录后在进行操作！"
}
或者
{
    "status": 1,
    "msg": "购物车为空，请选择要购买的商品！"
}
或者
{
    "status": 1,
    "msg": "商品锂基脂 00#已经下架，不能在线购买！"
}
或者
{
    "status": 1,
    "msg": "订单创建失败！"
}
                            
```

# 前端接口-用户模块

### 验证用户获得用户对象接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=7b82b494fcb844ceb6908f6dbb3b19a1) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=7b82b494fcb844ceb6908f6dbb3b19a1)

请求方式：POST

请求地址：http://localhost:8080/actionmall/user/getUserByAccount.do

| **Body参数名** | 类型   | 必需 | 描述   | 示例 e.g. |
| :------------- | :----- | :--- | :----- | :-------- |
| account        | string | 是   | 用户名 | admin     |

详细说明：



该接口用于用户验证用户名和获取用户信息。



返回示例：

```
                                成功时返回：
{
    "status": 0,
    "data": {
        "id": 1,
        "account": "admin",
        "password": "",
        "email": "546415155@qq.com",
        "age": 18,
        "sex": 0,
        "del": 0,
        "phone": "17844545452",
        "question": "1",
        "asw": "",
        "role": 1,
        "create_time": 1517672134000,
        "update_time": 1555653582000,
        "name": "小明000"
    }
}
失败时返回：
{
    "status": 1,
    "msg": "用户名错误！"
}
                            
```

### 用户注销登出接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=a6c855e481ff481fa0b8e2803f4982da) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=a6c855e481ff481fa0b8e2803f4982da)

请求方式：POST

请求地址：http://localhost:8080/actionmall/user/do_logout.do

详细说明：



该接口用于用户登出系统。





返回示例：

```
成功返回：
{
    "status": 0
}

                            
```

### 用户信息修改接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=5be0c9e6c1564ad48d4f9d4e25f6e007) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=5be0c9e6c1564ad48d4f9d4e25f6e007)

请求方式：POST

请求地址：http://localhost:8080/actionmall/user/updateuserinfo.do

| **Body参数名** | 类型   | 必需 | 描述     | 示例 e.g.        |
| :------------- | :----- | :--- | :------- | :--------------- |
| email          | string | 是   | 邮箱     | action@action.cn |
| phone          | string | 是   | 电话     | 123456789        |
| question       | string | 是   | 密码问题 | 这是什么问题     |
| asw            | string | 是   | 答案     | 不知道           |
| age            | string | 是   | 年龄     | 18               |
| sex            | string | 是   | 性别     | 男               |

详细说明：



该接口用于登陆用户修改基本信息。





返回示例：

```
                                成功时返回：
{
    "status": 0,
    "msg": "用户信息修改成功！",
    "data": {
        "id": 1,
        "account": "admin",
        "password": "e10adc3949ba59abbe56e057f20f883e",
        "email": "action@action.cn",
        "age": 18,
        "sex": 1,
        "del": 0,
        "phone": "123456789",
        "question": "1",
        "asw": "1",
        "role": 1,
        "create_time": 1517672134000,
        "update_time": 1554775697456,
        "name": null
    }
}
                            
```

### 密码修改接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=51514fdf0b2a4d429f489ec37652df35) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=51514fdf0b2a4d429f489ec37652df35)

请求方式：POST

请求地址：http://localhost:8080/actionmall/user/updatepassword.do

| **Body参数名** | 类型   | 必需 | 描述     | 示例 e.g. |
| :------------- | :----- | :--- | :------- | :-------- |
| newpwd         | string | 是   | 新密码   | 123456789 |
| oldpwd         | string | 是   | 原始密码 | 123456    |

详细说明：



该接口用于登陆用户修改密码。





返回示例：

```
成功后返回：
{
    "status": 0,
    "msg": "密码修改成功！"
}

                            
```

### 根据密码问题和答案重置密码接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=fd8ced73ad404938b48bde2f9a8c420d) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=fd8ced73ad404938b48bde2f9a8c420d)

请求方式：POST

请求地址：http://localhost:8080/actionmall/user/resetpassword.do

| **Body参数名** | 类型   | 必需 | 描述   | 示例 e.g. |
| :------------- | :----- | :--- | :----- | :-------- |
| newpwd         | string | 是   | 新密码 | 123456789 |
| userId         | string | 是   | 用户id | 4         |
|                | string | 是   |        |           |

详细说明：



该接口根据用户设置的问题和答案重置密码。





返回示例：

```
                                成功后返回：
{
    "status": 0,
    "msg": "密码修改成功！"
}
                            
```

### 验证用户密码问题答案接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=97dff102547146b8963ce55e27191483) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=97dff102547146b8963ce55e27191483)

请求方式：POST

请求地址：http://localhost:8080/actionmall/user/checkuserasw.do

| **Body参数名** | 类型   | 必需 | 描述             | 示例 e.g.      |
| :------------- | :----- | :--- | :--------------- | :------------- |
| account        | string | 是   | 用户账号         |                |
| question       | string | 是   | 用户密码问题     | 你的密码是什么 |
| asw            | string | 是   | 用户密码问题答案 | 不告诉你       |

详细说明：



该接口用于根据用户账号，用户的密码问题，以及用户密码问题答案，来检测是否可以进行修改密码。





返回示例：

```
                                成功后返回：
{
    "status": 0,
    "msg": "23521a83-0ae0-422e-bd8b-4d27ec79d005"
}

失败后返回：
{
    "status": 1,
    "msg": "问题答案错误！"
}
                            
```

### 获取用户密码问题接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=001eeb673b1b4f84b3bd76e5c1aee3df) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=001eeb673b1b4f84b3bd76e5c1aee3df)

请求方式：POST

请求地址：http://localhost:8080/actionmall/user/getuserquestion.do

| **Body参数名** | 类型   | 必需 | 描述     | 示例 e.g. |
| :------------- | :----- | :--- | :------- | :-------- |
| account        | string | 是   | 用户账号 | action02  |

详细说明：



该接口根据用户账号获取用户的密码问题。





返回示例：

```
                                成功后返回：
{
    "status": 0,
    "data": "你的密码是什么"
}

失败后返回：
{
    "status": 1,
    "data": "未设置密码提示问题"
}
                            
```

### 获取用户信息接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=0571cb443e4b4d028f92070680e1cd94) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=0571cb443e4b4d028f92070680e1cd94)

请求方式：GET

请求地址：http://localhost:8080/actionmall/user/getuserinfo.do

返回示例：

```
                                成功时返回：
{
    "status": 0,
    "data": {
        "id": 1,
        "account": "admin",
        "password": "",
        "email": "24564@qq.com",
        "age": 18,
        "sex": 1,
        "del": 0,
        "phone": "184845445",
        "question": "1",
        "asw": "1",
        "role": 1,
        "create_time": 1517672134000,
        "update_time": 1554083330000,
        "name": "阿三"
    }
}

失败后返回：
{
    "status": 1,
    "msg": "无法获取用户信息！"
}

                            
```

### 用户注册接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=85e75f10a8024f988402e868e18a007e) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=85e75f10a8024f988402e868e18a007e)

请求方式：POST

请求地址：http://localhost:8080/actionmall/user/do_register.do

| **Body参数名** | 类型   | 必需 | 描述               | 示例 e.g.          |
| :------------- | :----- | :--- | :----------------- | :----------------- |
| account        | string | 是   | 用户名             | action01           |
| password       | string | 是   | 密码               | 123                |
| email          | string | 是   | 电子邮箱           | action01@action.cn |
| phone          | string | 是   | 电话号码           | 123456789          |
| question       | string | 是   | 找回密码的问题     | 你的密码是什么     |
| asw            | string | 是   | 找回密码的问题答案 | 不告诉你           |

详细说明：



该接口用于用户注册。





返回示例：

```
                                成功后返回：
{
    "status": 0,
    "msg": "注册成功！"
}

失败后返回：
{
    "status": 1,
    "msg": "注册失败！"
}

                            
```

### 用户登陆接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=51d1f0f499f349e9a220cb5249f330c8) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=51d1f0f499f349e9a220cb5249f330c8)

请求方式：POST

请求地址：http://localhost:8080/actionmall/user/do_login.do

| **Body参数名** | 类型   | 必需 | 描述   | 示例 e.g. |
| :------------- | :----- | :--- | :----- | :-------- |
| account        | string | 是   | 用户名 | admin     |
| password       | string | 是   | 密码   | 123456    |
|                | string | 是   |        |           |

详细说明：



用户登录接口





返回示例：

```
                                成功时返回：
{
    "status": 0,
    "msg": "登陆成功",
    "data": {
        "id": 1,
        "account": "admin",
        "password": "",
        "email": "24564@qq.com",
        "age": 18,
        "sex": 1,
        "del": 0,
        "phone": "184845445",
        "question": "1",
        "asw": "1",
        "role": 1,
        "create_time": 1517672134000,
        "update_time": 1554083330000,
        "name": "阿三"
    }
}

失败返回：
{
    "status": 1,
    "msg": "用户不存在！"
}
或者
{
    "status": 1,
    "msg": "密码错误！"
}
                            
```

### 注册信息检测

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=04f2b7aea1ea4fd08887d765569d7c7d) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=04f2b7aea1ea4fd08887d765569d7c7d)

请求方式：POST

请求地址：http://localhost:8080/actionmall/user/do_check_info.do

| **Body参数名** | 类型   | 必需 | 描述                                   | 示例 e.g. |
| :------------- | :----- | :--- | :------------------------------------- | :-------- |
| info           | string | 是   | 要检测验证的信息                       | admin01   |
| type           | string | 是   | 信息的类型：用户名、电子邮件、移动电话 | account   |

详细说明：



该接口用于注册信息的检测，可检测用户名、电子邮件、移动电话是否已经被注册。

type可以取值为：account、email、phone



返回示例：

```
                                成功后返回：
{"status":0,"msg":"信息验证成功！"}

失败后返回：
{"status":1,"msg":"用户名已经存在"}
或者
{"status":1,"msg":"Email已经存在"}
或者
{"status":1,"msg":"电话号码已经存在！"}
或者
{"status":1,"msg":"信息验证类别错误！"}

                            
```

# 前端接口-商品模块（无需用户登录）

### 首页楼层商品数据接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=fbc4e017a92d484abdf7a38ce42473ea) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=fbc4e017a92d484abdf7a38ce42473ea)

请求方式：POST

请求地址：http://localhost:8080/actionmall/product/findfloors.do

详细说明：



该接口用于获取首页楼层商品数据信息。









返回示例：

```
                                {
    "status": 0,
    "data": {
        "oneFloor": [
            {
                "id": 6,
                "name": "锂基脂 00#",
                "productId": 10023,
                "partsId": 10044,
                "iconUrl": "/upload/10a42221-06a8-4001-8cc6-b2deb3b9e964.png",
                "subImages": "/upload/10a42221-06a8-4001-8cc6-b2deb3b9e964.png,/upload/6308150b-1afd-41e7-acfa-45627015aa37.png",
                "detail": "商品详情",
                "specParam": "规格参数",
                "price": 215.89,
                "stock": 82,
                "status": 2,
                "hot": 1,
                "created": 1519095352000,
                "updated": 1554773510000
            },
            {
                "id": 8,
                "name": "aaaaa",
                "productId": 10023,
                "partsId": 10038,
                "iconUrl": "",
                "subImages": "",
                "detail": "11111",
                "specParam": null,
                "price": 11,
                "stock": 74,
                "status": 2,
                "hot": 2,
                "created": 1551258352000,
                "updated": 1554280269000
            },
            {
                "id": 7,
                "name": "锂基脂 00#",
                "productId": 10023,
                "partsId": 10044,
                "iconUrl": "",
                "subImages": "",
                "detail": "商品详情",
                "specParam": "规格参数",
                "price": 215.89,
                "stock": 86,
                "status": 2,
                "hot": 1,
                "created": 1519095355000,
                "updated": 1553069114000
            },
            {
                "id": 10,
                "name": "润滑油",
                "productId": 10023,
                "partsId": 10042,
                "iconUrl": "",
                "subImages": "",
                "detail": "好！",
                "specParam": null,
                "price": 79,
                "stock": 98,
                "status": 2,
                "hot": 1,
                "created": 1552265800000,
                "updated": 1553069114000
            },
            {
                "id": 9,
                "name": "润滑油",
                "productId": 10023,
                "partsId": 10042,
                "iconUrl": "",
                "subImages": "",
                "detail": "好！",
                "specParam": null,
                "price": 79,
                "stock": 92,
                "status": 2,
                "hot": 1,
                "created": 1552265754000,
                "updated": 1552614184000
            },
            {
                "id": 11,
                "name": "润滑油",
                "productId": 10023,
                "partsId": 10042,
                "iconUrl": "",
                "subImages": "",
                "detail": "",
                "specParam": null,
                "price": 79,
                "stock": 100,
                "status": 2,
                "hot": 1,
                "created": 1552265825000,
                "updated": 1552292521000
            },
            {
                "id": 12,
                "name": "润滑油",
                "productId": 10023,
                "partsId": 10042,
                "iconUrl": "",
                "subImages": "/upload/1f8bead2-ae95-47ce-b458-90f999461020.png",
                "detail": "啊啊啊",
                "specParam": null,
                "price": 11,
                "stock": 111,
                "status": 2,
                "hot": 2,
                "created": 1552282894000,
                "updated": 1552292521000
            },
            {
                "id": 13,
                "name": "润滑油",
                "productId": 10023,
                "partsId": 10042,
                "iconUrl": "",
                "subImages": "/upload/45d78300-96b2-42af-8406-a6e2abfb5aa3.png",
                "detail": "111",
                "specParam": null,
                "price": 11,
                "stock": 111,
                "status": 2,
                "hot": 2,
                "created": 1552282916000,
                "updated": 1552292520000
            }
        ],
        "twoFloor": [
            {
                "id": 19,
                "name": "机械",
                "productId": 10024,
                "partsId": 10051,
                "iconUrl": "",
                "subImages": "",
                "detail": "啊啊",
                "specParam": null,
                "price": 11,
                "stock": 11,
                "status": 2,
                "hot": 2,
                "created": 1552292883000,
                "updated": 1552974396000
            },
            {
                "id": 20,
                "name": "机械",
                "productId": 10024,
                "partsId": 10051,
                "iconUrl": "",
                "subImages": "/upload/f54d9f3e-b573-4f16-894b-ee11ba39252a.png",
                "detail": "啊啊",
                "specParam": null,
                "price": 11,
                "stock": 11,
                "status": 2,
                "hot": 2,
                "created": 1552292897000,
                "updated": 1552974395000
            },
            {
                "id": 21,
                "name": "机械",
                "productId": 10024,
                "partsId": 10051,
                "iconUrl": "",
                "subImages": "/upload/43e4ebb3-6a4e-4a58-af28-f9c2c81784de.png",
                "detail": "aaa",
                "specParam": null,
                "price": 11,
                "stock": 11,
                "status": 2,
                "hot": 2,
                "created": 1552292909000,
                "updated": 1552974395000
            },
            {
                "id": 18,
                "name": "机械",
                "productId": 10024,
                "partsId": 10051,
                "iconUrl": "",
                "subImages": "/upload/b66f89f2-acca-4aed-bca4-6bd4a6eae544.png",
                "detail": "",
                "specParam": null,
                "price": 11,
                "stock": 11,
                "status": 2,
                "hot": 2,
                "created": 1552292864000,
                "updated": 1552974394000
            },
            {
                "id": 16,
                "name": "机械",
                "productId": 10024,
                "partsId": 10051,
                "iconUrl": "",
                "subImages": "/upload/bb20868e-1f84-4e3e-a131-b27bcd6ce062.png",
                "detail": "啊啊",
                "specParam": null,
                "price": 11,
                "stock": 11,
                "status": 2,
                "hot": 2,
                "created": 1552292814000,
                "updated": 1552974393000
            },
            {
                "id": 17,
                "name": "机械",
                "productId": 10024,
                "partsId": 10051,
                "iconUrl": "",
                "subImages": "/upload/255dd899-2dd9-443d-b0e1-b1112fff9342.png",
                "detail": "啊啊",
                "specParam": null,
                "price": 11,
                "stock": 11,
                "status": 2,
                "hot": 2,
                "created": 1552292851000,
                "updated": 1552974393000
            },
            {
                "id": 15,
                "name": "机械",
                "productId": 10024,
                "partsId": 10051,
                "iconUrl": "",
                "subImages": "/upload/4037c724-8e21-42e8-a939-c3d8f847a246.png",
                "detail": "啊啊",
                "specParam": null,
                "price": 11,
                "stock": 11,
                "status": 2,
                "hot": 2,
                "created": 1552292791000,
                "updated": 1552974392000
            },
            {
                "id": 14,
                "name": "机器",
                "productId": 10024,
                "partsId": 10042,
                "iconUrl": "",
                "subImages": "/upload/cdee6bac-ef20-4965-8a03-fc0a64d9fdc7.png,/upload/03c14732-f8e2-44bb-b6b1-2d7754754e7d.png",
                "detail": "啊啊",
                "specParam": null,
                "price": 11,
                "stock": 121,
                "status": 2,
                "hot": 2,
                "created": 1552292389000,
                "updated": 1552974383000
            }
        ],
        "threeFloor": [
            {
                "id": 29,
                "name": "压路机",
                "productId": 10025,
                "partsId": 10068,
                "iconUrl": "",
                "subImages": "/upload/95686505-35b3-428d-989d-5203181eb647.png",
                "detail": "啊啊啊",
                "specParam": null,
                "price": 11,
                "stock": 100,
                "status": 2,
                "hot": 2,
                "created": 1552297179000,
                "updated": 1554280269000
            },
            {
                "id": 26,
                "name": "压路机",
                "productId": 10025,
                "partsId": 10068,
                "iconUrl": "",
                "subImages": "/upload/6ab778f1-3ab4-4522-94d7-5cad137ea0e6.png",
                "detail": "啊啊",
                "specParam": null,
                "price": 11,
                "stock": 11,
                "status": 2,
                "hot": 2,
                "created": 1552297135000,
                "updated": 1552974400000
            },
            {
                "id": 24,
                "name": "压路机",
                "productId": 10025,
                "partsId": 10068,
                "iconUrl": "",
                "subImages": "/upload/5c28c377-22c2-4fe1-9e0f-67f0c53977ab.png",
                "detail": "啊啊",
                "specParam": null,
                "price": 11,
                "stock": 11,
                "status": 2,
                "hot": 2,
                "created": 1552297109000,
                "updated": 1552974399000
            },
            {
                "id": 25,
                "name": "压路机",
                "productId": 10025,
                "partsId": 10068,
                "iconUrl": "",
                "subImages": "/upload/14e87061-c479-41ef-83d4-ec8b96e3938f.png",
                "detail": "啊啊",
                "specParam": null,
                "price": 11,
                "stock": 11,
                "status": 2,
                "hot": 2,
                "created": 1552297122000,
                "updated": 1552974399000
            },
            {
                "id": 23,
                "name": "压路机",
                "productId": 10025,
                "partsId": 10068,
                "iconUrl": "",
                "subImages": "/upload/80dffea3-ed10-4a5b-a076-6b5b1ea5037d.png",
                "detail": "啊啊",
                "specParam": null,
                "price": 11,
                "stock": 11,
                "status": 2,
                "hot": 2,
                "created": 1552297096000,
                "updated": 1552974398000
            },
            {
                "id": 22,
                "name": "压路机",
                "productId": 10025,
                "partsId": 10068,
                "iconUrl": "",
                "subImages": "/upload/b663dde4-f477-4562-93fa-4e1ceefe3da2.png",
                "detail": "啊啊",
                "specParam": null,
                "price": 11,
                "stock": 11,
                "status": 2,
                "hot": 2,
                "created": 1552297082000,
                "updated": 1552974396000
            },
            {
                "id": 28,
                "name": "压路机",
                "productId": 10025,
                "partsId": 10068,
                "iconUrl": "",
                "subImages": "/upload/a4ffbb60-f25e-4ae3-994f-3a406247b0b8.png",
                "detail": "啊",
                "specParam": null,
                "price": 11,
                "stock": 11,
                "status": 2,
                "hot": 2,
                "created": 1552297167000,
                "updated": 1552297167000
            },
            {
                "id": 27,
                "name": "压路机",
                "productId": 10025,
                "partsId": 10068,
                "iconUrl": "",
                "subImages": "/upload/2eabbe74-2959-4d53-8726-c5e3eb537497.png",
                "detail": "啊啊",
                "specParam": null,
                "price": 11,
                "stock": 11,
                "status": 2,
                "hot": 2,
                "created": 1552297147000,
                "updated": 1552297147000
            }
        ],
        "fourFloor": []
    }
}
失败返回：
{
    "status": 1,
    "msg": "x楼商品数据尚未准备完整！"
}

                            
```

### 热销商品接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=fa7d571bd75748a4b6a3b5b7d3b1b1ce) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=fa7d571bd75748a4b6a3b5b7d3b1b1ce)

请求方式：POST

请求地址：http://localhost:8080/actionmall/product/findhotproducts.do

| **Body参数名** | 类型   | 必需 | 描述           | 示例 e.g. |
| :------------- | :----- | :--- | :------------- | :-------- |
| num            | string | 是   | 热销商品的数量 | 5         |

详细说明：



该接口用户获取热销商品数据。



返回示例：

```
                                成功返回：
{
    "status": 0,
    "data": [
        {
            "id": 11,
            "name": "润滑油",
            "productId": 10023,
            "partsId": 10042,
            "iconUrl": "",
            "subImages": "",
            "detail": "",
            "specParam": null,
            "price": 79,
            "stock": 100,
            "status": 2,
            "hot": 1,
            "created": 1552265825000,
            "updated": 1552292521000
        },
        {
            "id": 9,
            "name": "润滑油",
            "productId": 10023,
            "partsId": 10042,
            "iconUrl": "",
            "subImages": "",
            "detail": "好！",
            "specParam": null,
            "price": 79,
            "stock": 92,
            "status": 2,
            "hot": 1,
            "created": 1552265754000,
            "updated": 1552614184000
        },
        {
            "id": 10,
            "name": "润滑油",
            "productId": 10023,
            "partsId": 10042,
            "iconUrl": "",
            "subImages": "",
            "detail": "好！",
            "specParam": null,
            "price": 79,
            "stock": 98,
            "status": 2,
            "hot": 1,
            "created": 1552265800000,
            "updated": 1553069114000
        },
        {
            "id": 7,
            "name": "锂基脂 00#",
            "productId": 10023,
            "partsId": 10044,
            "iconUrl": "",
            "subImages": "",
            "detail": "商品详情",
            "specParam": "规格参数",
            "price": 215.89,
            "stock": 86,
            "status": 2,
            "hot": 1,
            "created": 1519095355000,
            "updated": 1553069114000
        },
        {
            "id": 6,
            "name": "锂基脂 00#",
            "productId": 10023,
            "partsId": 10044,
            "iconUrl": "/upload/10a42221-06a8-4001-8cc6-b2deb3b9e964.png",
            "subImages": "/upload/10a42221-06a8-4001-8cc6-b2deb3b9e964.png,/upload/6308150b-1afd-41e7-acfa-45627015aa37.png",
            "detail": "商品详情",
            "specParam": "规格参数",
            "price": 215.89,
            "stock": 82,
            "status": 2,
            "hot": 1,
            "created": 1519095352000,
            "updated": 1554773510000
        }
    ]
}

失败返回：
{
    "status": 1,
    "msg": "尚未设置热销商品！"
}
                            
```

### 商品详情数据接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=04b764427b464d9a9c88f57fbba25f47) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=04b764427b464d9a9c88f57fbba25f47)

请求方式：POST

请求地址：http://localhost:8080/actionmall/product/getdetail.do

| **Body参数名** | 类型   | 必需 | 描述   | 示例 e.g. |
| :------------- | :----- | :--- | :----- | :-------- |
| productId      | string | 是   | 产品id | 6         |

详细说明：



该接口用于用户获取商品详细信息的数据接口





返回示例：

```
                                成功时返回：
{
    "status": 0,
    "data": {
        "id": 6,
        "name": "锂基脂 00#",
        "productId": 10023,
        "partsId": 10044,
        "iconUrl": "/upload/10a42221-06a8-4001-8cc6-b2deb3b9e964.png",
        "subImages": "/upload/10a42221-06a8-4001-8cc6-b2deb3b9e964.png,/upload/6308150b-1afd-41e7-acfa-45627015aa37.png",
        "detail": "商品详情",
        "specParam": "规格参数",
        "price": 215.89,
        "stock": 82,
        "status": 2,
        "hot": 1,
        "created": 1519095352000,
        "updated": 1554773510000
    }
}
失败时返回：
{
    "status": 1,
    "msg": "产品已经下架！"
}
                            
```

### 商品分页列表接口

[在线测试](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=a1eee77aab3d4e1f8c49b987f7d5519f) [在线浏览](https://apizza.net/pro/#/project/9c8f08225e6df23b7d4c9c0f0f1aec5e/browse?api=a1eee77aab3d4e1f8c49b987f7d5519f)

请求方式：POST

请求地址：http://localhost:8080/actionmall/product/findproducts.do

| **Body参数名** | 类型   | 必需 | 描述                                      | 示例 e.g. |
| :------------- | :----- | :--- | :---------------------------------------- | :-------- |
| productTypeId  | string | 是   | 产品类型编号，action_params一级子节点编号 | 0         |
| partsId        | string | 是   | 配件类型编号，action_params三级子节点编号 | 0         |
| pageNum        | string | 是   | 页码，默认值为1                           | 1         |
| pageSize       | string | 是   | 页面大小，默认值为10                      | 10        |
| name           | string | 是   | 产品名称                                  | 锂基脂    |

详细说明：



该接口用于获取商品列表信息的数据接口，可根据产品编号、配件编号、产品名称进行查询





返回示例：

```
                                成功时返回：
{
    "status": 0,
    "data": {
        "pageNum": 1,
        "pageSize": 10,
        "totalRecord": 2,
        "totalPage": 1,
        "startIndex": 0,
        "data": [
            {
                "id": 6,
                "name": "锂基脂 00#",
                "price": 215.89,
                "status": 2,
                "statusDesc": "在售",
                "productCategory": "混凝土机械",
                "partsCategory": "锂基油",
                "iconUrl": "/upload/10a42221-06a8-4001-8cc6-b2deb3b9e964.png",
                "hot": 1,
                "hotStatus": "热销"
            },
            {
                "id": 7,
                "name": "锂基脂 00#",
                "price": 215.89,
                "status": 2,
                "statusDesc": "在售",
                "productCategory": "混凝土机械",
                "partsCategory": "锂基油",
                "iconUrl": "",
                "hot": 1,
                "hotStatus": "热销"
            }
        ],
        "prePage": 1,
        "nextPage": 1
    }
}
```
