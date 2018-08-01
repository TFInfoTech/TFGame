cc.Class({
    extends: cc.Component,

    properties: {
        spriteList: {
            default: [],
            type: [cc.Prefab]
        }
    }, 

    // use this for initialization
    onLoad: function () {
        // var randomIdx = Helpers.getRandomInt(0, this.spriteList.length);
        var sprite = cc.instantiate(this.spriteList[0]);
        this.node.addChild(sprite);
    }

});