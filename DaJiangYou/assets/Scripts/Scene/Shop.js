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
        moneySumDisplay: {
            default: null,
            type: cc.Label
        }
    },
    spawnNewMoney: function() {
        // 使用给定的模板在场景中生成一个新节点
        let onemoney = cc.instantiate(this.moneyPrefab);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(onemoney);
        // 为星星设置一个随机位置
        onemoney.setPosition(-50,this.moneystarty);
        this.moneystarty-=100
        onemoney.getComponent('Money').game = this;
        this.moneys.push (onemoney);

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
       this.spawnNewMoney();
       this.spawnNewMoney();
    },

    start () {

    },

    update (dt) {
        this.collectMoney ();
    },

});
