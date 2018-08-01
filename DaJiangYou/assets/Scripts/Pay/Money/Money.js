cc.Class({
    extends: cc.Component,

    properties: {
        spriteList: {
            default: [],
            type: [cc.SpriteFrame]
        },
        facevalue:0,
        pickRadius: 0,
        // 暂存 Game 对象的引用
        game: {
            default: null,
            serializable: false
        }
    }, 

    // use this for initialization
    onLoad: function () {
        // var randomIdx = Helpers.getRandomInt(0, this.spriteList.length);
        var sprite = this.getComponent(cc.Sprite);
        for ( var i = 0; i <this.spriteList.length; i++){
            if (this.spriteList[i].name==this.facevalue)
            {
                sprite.spriteFrame = this.spriteList[i];
            }
        }
        //this.node.addnode (sprite);
    },
    initial: function (game,facevalue) {
        //cc.log (this.getComponent (cc.Prefab));
        this.game=game;
        this.facevalue=facevalue;
    },
    getMoneyCollectorDistance: function () {
        // 根据 MoneyCollector 节点位置判断距离
        var MoneyCollectorPos = this.game.moneycollector.getPosition();
        // 根据两点位置计算两点之间距离
        var dist = cc.pDistance(this.node.position, MoneyCollectorPos);
        return dist;
    },

});