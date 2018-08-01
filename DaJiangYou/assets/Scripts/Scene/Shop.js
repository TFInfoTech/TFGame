// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        moneycollector: {
            default: null,
            type: cc.Node
        },
        moneyPrefab: {
            default: null,
            type: cc.Prefab
        },
        goodsPrefab: {
            default: null,
            type: cc.Prefab
        },
        moneySumDisplay: {
            default: null,
            type: cc.Label
        }
    },
    spawnNewMoney: function(facevalue) {
        // 使用给定的模板在场景中生成一个新节点
        var onemoney = cc.instantiate(this.moneyPrefab);
        // 将新增的节点添加到 Canvas 节点下面
        this.moneystarty-=100
        onemoney.getComponent("Money").initial (this,facevalue);
        this.node.addChild(onemoney);
        onemoney.setPosition (-50,this.moneystarty);
        this.moneys.push (onemoney);
    },
    spawnNewGoods: function() {
        // 使用给定的模板在场景中生成一个新节点
        var goods = cc.instantiate(this.goodsPrefab);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(goods);
        // 为星星设置一个随机位置
        goods.setPosition(0,this.goodsstarty);
        this.goodsstarty-=100

    },
    // LIFE-CYCLE CALLBACKS:
    collectMoney: function (money) {
        this.moneysum=0;
        this.moneys.forEach(element => {
            if (element.getComponent('Money').getMoneyCollectorDistance ()<150)
            {
                this.moneysum += element.getComponent('Money').facevalue;
            }
        });

        // 更新 scoreDisplay Label 的文字
        this.moneySumDisplay.string = this.moneysum.toString();
    },

    onLoad: function () {
       // 初始化计分
       this.moneysum = 0;
       this.moneys =[];

       this.moneystarty=300;
       this.goodsstarty=100;
       this.spawnNewMoney(100);
       this.spawnNewMoney(50);
       this.spawnNewGoods ();
    },

    start () {

    },

    update (dt) {
        this.collectMoney ();
    },

});
