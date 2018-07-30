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
        pickRadius: 60,
        // 暂存 Game 对象的引用
        facevalue:0,
        game: {
            default: null,
            serializable: false
        }
    },
    getMoneyCollectorDistance: function () {
        // 根据 MoneyCollector 节点位置判断距离
        var MoneyCollectorPos = this.game.moneycollector.getPosition();
        // 根据两点位置计算两点之间距离
        var dist = cc.pDistance(this.node.position, MoneyCollectorPos);
        return dist;
    },
    onPicked: function() {
        // 调用 Game 脚本的得分方法
        this.game.collectMoney(this.facevalue);
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
/*     update: function (dt) {
        // 每帧判断和主角之间的距离是否小于收集距离
        if (this.getMoneyCollectorDistance() < 150) {
            // 调用收集行为
            //cc.log (this.pickRadius);
            this.onPicked();
            return;
        }
    }, */   
});
