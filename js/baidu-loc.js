/*
 *
 *
脚本功能：测试
[rewrite_local]
^https:\/\/api\.map\.baidu\.com\/sdkproxy\/v2\/lbs_iossdk\/geocoder\/v2\?.* url script-response-body https://raw.githubusercontent.com/paungmiao/loon/refs/heads/main/js/baidu-loc.js
# > 全本小说&淘小说 解锁vip，

^https:\/\/loc.map.baidu.com\/sdk.php url script-response-body https://raw.githubusercontent.com/paungmiao/loon/refs/heads/main/js/baidu-loc.js
[mitm]
hostname = *.yinhaiyun.com,*.baidu.com
*
*
*/
// let data = JSON.parse(JSON.stringify($response.body));
// // 检查 body.content 是否存在，如果不存在则创建
// if (!data.content) {
//     data.content = {};
// }
//
// // 检查 body.content.sema 是否存在，如果不存在则创建
// if (!data.content.sema) {
//     data.content.sema = {};
// }

const demoResult = JSON.parse(JSON.stringify({
    "content": {
        "addr": {
            "adcode": "510104",
            "city": "成都市",
            "city_code": "75",
            "country": "中国",
            "country_code": "0",
            "district": "锦江区",
            "province": "四川省",
            "street": "五冶路",
            "street_number": "9号",
            "town_code": "510104036"
        },
        "bldg": "",
        "floor": "",
        "navi": ",,,",
        "net_loc_save": 1,
        "point": {"x": "104.080671", "y": "30.592094"},
        "radius": "60.000000",
        "sema": {
            "aptag": "在银海芯座附近",
            "aptagd": {
                "pois": [{
                    "pid": "8595564073644709853",
                    "pname": "银海芯座",
                    "pr": 0.99000000
                }, {"pid": "17660241240035164159", "pname": "五冶大厦", "pr": 0.99000000}, {
                    "pid": "16438318204265002202",
                    "pname": "银海芯座-B座",
                    "pr": 0.99000000
                }, {
                    "pid": "9444618670681934433",
                    "pname": "艺尚锦江文创中心",
                    "pr": 0.99000000
                }, {"pid": "17843721309795477712", "pname": "火炬动力港", "pr": 0.99000000}]
            }
        }
    }, "result": {"error": "161", "time": "2024-10-08 15:42:41"}
}));
// console.log(data)
// console.log(demoResult)
// // 更新内容
// data['content']['sema'] = demoResult.content.sema;
// data.content.addr = demoResult.content.addr;
// data.content.radius = demoResult.content.radius;
//
// // 获取原始值
// let x = data.content.point.x; // 例如 3.141592
// let y = data.content.point.y; // 例如 30.592055
//
// // 随机增加小数的最后一位
function randomizeLastDecimal(value) {
    const valueStr = value.toString();
    const decimalIndex = valueStr.indexOf('.');

    if (decimalIndex === -1) return value;

    const integerPart = valueStr.slice(0, decimalIndex + 1);
    const decimalPart = valueStr.slice(decimalIndex + 1);

    const randomInt = Math.floor(Math.random() * 10);
    const lastDigit = parseInt(decimalPart[decimalPart.length - 1]);
    const newLastDigit = (lastDigit + randomInt) % 10;
    const newDecimalPart = decimalPart.slice(0, -1) + newLastDigit;

    return parseFloat(integerPart + newDecimalPart);
}

//
// // 更新 x 和 y
// data.content.point.x = randomizeLastDecimal(x);
// data.content.point.y = randomizeLastDecimal(y);
// data.modify = true;
// $done(data);

var doPhp = function () {
    var body = $response.body;
    var obj = JSON.parse(body);
    var x = obj.content.point.x; // 例如 3.141592
    var y = obj.content.point.y; // 例如 30.592055
    console.log('原始X：' + x)
    console.log('原始Y：' + y)
    x = randomizeLastDecimal('104.0905490841838');
    y = randomizeLastDecimal('30.59497520311797');
    console.log('修改后X：' + x)
    console.log('修改后X：' + y)
// // 更新内容
    obj.content.sema = demoResult.content.sema;
    obj.content.addr = demoResult.content.addr;
    obj.content.radius = demoResult.content.radius;
    obj.content.point.x = x;
    obj.content.point.y = y;
    obj.rewrite = true
    body = JSON.stringify(obj)

    $done(body);
}
var doProxy = function () {
    var defaultResp = JSON.parse(JSON.stringify({
            "status": 0,
            "result": {
                "location": {
                    "lng": 104.08967590332024,
                    "lat": 30.595603833286233
                },
                "edz": {
                    "name": ""
                },
                "pois": [
                    {
                        "uid": "993574cec55375ce0d0a70ab",
                        "zip": "",
                        "parent_poi": {
                            "uid": "",
                            "distance": "",
                            "point": {
                                "x": 0,
                                "y": 0
                            },
                            "addr": "",
                            "tag": "",
                            "direction": "",
                            "name": ""
                        },
                        "cp": " ",
                        "addr": "四川省成都市锦江区三色路163号",
                        "tag": "房地产;写字楼",
                        "poiType": "房地产",
                        "point": {
                            "x": 104.09054908418386,
                            "y": 30.594975203117979
                        },
                        "tel": "",
                        "distance": "126",
                        "direction": "西北",
                        "name": "银海芯座"
                    },
                    {
                        "uid": "dffd4642ed7ac4cf3d9a5eaf",
                        "zip": "",
                        "parent_poi": {
                            "uid": "",
                            "distance": "",
                            "point": {
                                "x": 0,
                                "y": 0
                            },
                            "addr": "",
                            "tag": "",
                            "direction": "",
                            "name": ""
                        },
                        "cp": " ",
                        "addr": "四川省成都市锦江区三色路199号",
                        "tag": "房地产;写字楼",
                        "poiType": "房地产",
                        "point": {
                            "x": 104.09080959278177,
                            "y": 30.59551920927121
                        },
                        "tel": "",
                        "distance": "126",
                        "direction": "西",
                        "name": "五冶大厦"
                    },
                    {
                        "uid": "117d7859309030648c55ecc1",
                        "zip": "",
                        "parent_poi": {
                            "uid": "993574cec55375ce0d0a70ab",
                            "distance": "126",
                            "point": {
                                "x": 104.09054908418386,
                                "y": 30.594975203117979
                            },
                            "addr": "四川省成都市锦江区三色路163号",
                            "tag": "房地产;写字楼",
                            "direction": "西北",
                            "name": "银海芯座"
                        },
                        "cp": " ",
                        "addr": "成都市锦江区三色路163号",
                        "tag": "房地产;写字楼",
                        "poiType": "房地产",
                        "point": {
                            "x": 104.09014484670438,
                            "y": 30.595037375405905
                        },
                        "tel": "",
                        "distance": "89",
                        "direction": "西北",
                        "name": "银海芯座-B座"
                    },
                    {
                        "uid": "6a96c67f9b027c863310af6c",
                        "zip": "",
                        "parent_poi": {
                            "uid": "",
                            "distance": "",
                            "point": {
                                "x": 0,
                                "y": 0
                            },
                            "addr": "",
                            "tag": "",
                            "direction": "",
                            "name": ""
                        },
                        "cp": " ",
                        "addr": "四川省成都市锦江区柳江街道永安路666号",
                        "tag": "房地产;写字楼",
                        "poiType": "房地产",
                        "point": {
                            "x": 104.08815060847222,
                            "y": 30.594501138097709
                        },
                        "tel": "",
                        "distance": "221",
                        "direction": "东北",
                        "name": "艺尚锦江文创中心"
                    },
                    {
                        "uid": "e4d84304f1dedc429d9d68b2",
                        "zip": "",
                        "parent_poi": {
                            "uid": "",
                            "distance": "",
                            "point": {
                                "x": 0,
                                "y": 0
                            },
                            "addr": "",
                            "tag": "",
                            "direction": "",
                            "name": ""
                        },
                        "cp": " ",
                        "addr": "三色路209号",
                        "tag": "房地产;写字楼",
                        "poiType": "房地产",
                        "point": {
                            "x": 104.09195044077943,
                            "y": 30.595309378691837
                        },
                        "tel": "",
                        "distance": "256",
                        "direction": "西",
                        "name": "火炬动力港"
                    },
                    {
                        "uid": "f57de0fcee914abffd0eb0a7",
                        "zip": "",
                        "parent_poi": {
                            "uid": "dffd4642ed7ac4cf3d9a5eaf",
                            "distance": "126",
                            "point": {
                                "x": 104.09080959278177,
                                "y": 30.59551920927121
                            },
                            "addr": "四川省成都市锦江区三色路199号",
                            "tag": "房地产;写字楼",
                            "direction": "西",
                            "name": "五冶大厦"
                        },
                        "cp": " ",
                        "addr": "四川省成都市锦江区五冶路9号",
                        "tag": "公司企业",
                        "poiType": "公司企业",
                        "point": {
                            "x": 104.09041433835738,
                            "y": 30.595837840014152
                        },
                        "tel": "",
                        "distance": "87",
                        "direction": "西",
                        "name": "中国五冶集团有限公司"
                    },
                    {
                        "uid": "d3ccb580c36f276dab0dd8c7",
                        "zip": "",
                        "parent_poi": {
                            "uid": "",
                            "distance": "",
                            "point": {
                                "x": 0,
                                "y": 0
                            },
                            "addr": "",
                            "tag": "",
                            "direction": "",
                            "name": ""
                        },
                        "cp": " ",
                        "addr": "成都市锦江区三色路238号",
                        "tag": "房地产;写字楼",
                        "poiType": "房地产",
                        "point": {
                            "x": 104.09252535630581,
                            "y": 30.595713496435494
                        },
                        "tel": "",
                        "distance": "317",
                        "direction": "西",
                        "name": "新华之星"
                    },
                    {
                        "uid": "939b9d8d576fdbf7f60e7703",
                        "zip": "",
                        "parent_poi": {
                            "uid": "117d7859309030648c55ecc1",
                            "distance": "89",
                            "point": {
                                "x": 104.09014484670438,
                                "y": 30.595037375405905
                            },
                            "addr": "成都市锦江区三色路163号",
                            "tag": "房地产;写字楼",
                            "direction": "西北",
                            "name": "银海芯座-B座"
                        },
                        "cp": " ",
                        "addr": "三色路163号银海芯座B座一层大堂",
                        "tag": "美食;咖啡厅",
                        "poiType": "美食",
                        "point": {
                            "x": 104.09035145697167,
                            "y": 30.594975203117979
                        },
                        "tel": "",
                        "distance": "110",
                        "direction": "西北",
                        "name": "luckincoffee瑞幸咖啡(银海芯座B座店)"
                    },
                    {
                        "uid": "fc8fe7a850d139304107c174",
                        "zip": "",
                        "parent_poi": {
                            "uid": "",
                            "distance": "",
                            "point": {
                                "x": 0,
                                "y": 0
                            },
                            "addr": "",
                            "tag": "",
                            "direction": "",
                            "name": ""
                        },
                        "cp": " ",
                        "addr": "成都市锦江区国华街银海芯座-B座西侧约110米",
                        "tag": "医疗",
                        "poiType": "医疗",
                        "point": {
                            "x": 104.08833925262932,
                            "y": 30.594881944610545
                        },
                        "tel": "",
                        "distance": "175",
                        "direction": "东北",
                        "name": "克洛托医疗中心"
                    },
                    {
                        "uid": "0585e677795393850f0a705b",
                        "zip": "",
                        "parent_poi": {
                            "uid": "dffd4642ed7ac4cf3d9a5eaf",
                            "distance": "126",
                            "point": {
                                "x": 104.09080959278177,
                                "y": 30.59551920927121
                            },
                            "addr": "四川省成都市锦江区三色路199号",
                            "tag": "房地产;写字楼",
                            "direction": "西",
                            "name": "五冶大厦"
                        },
                        "cp": " ",
                        "addr": "三色路199号",
                        "tag": "酒店",
                        "poiType": "酒店",
                        "point": {
                            "x": 104.09150128802445,
                            "y": 30.595317150202963
                        },
                        "tel": "",
                        "distance": "206",
                        "direction": "西",
                        "name": "汉唐老窖大酒店"
                    }
                ],
                "poiRegions": [],
                "roads": [],
                "addressComponent": {
                    "town_code": "510104036",
                    "distance": "89",
                    "direction": "西",
                    "province": "四川省",
                    "street": "五冶路",
                    "town": "柳江街道",
                    "street_number": "9号",
                    "city": "成都市",
                    "country_code_iso2": "CN",
                    "district": "锦江区",
                    "adcode": "510104",
                    "country_code_iso": "CHN",
                    "country": "中国",
                    "country_code": 0,
                    "city_level": 2
                },
                "sematic_description": "银海芯座西北126米",
                "formatted_address_poi": "四川省成都市锦江区柳江街道银海芯座西北126米",
                "cityCode": 75,
                "business": "桂溪",
                "formatted_address": "四川省成都市锦江区五冶路9号"
            }
        }
    ))
    defaultResp.result.pois.forEach(e => {
        var distancd = parseFloat(e.distance) - 30
        e.distance = 10
    })
    defaultResp.rewrite = true
    var body = JSON.stringify(defaultResp)
    $done(body)
}
var url = $request.url
console.log('url:' + url)
if ('https://loc.map.baidu.com/sdk.php' == url) {
    doPhp()
} else {
    doProxy()
}