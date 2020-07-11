speed = 20;
const plantTaron = extendContent(GenericSmelter, "magic-dust-maker", {
drawLayer(tile){
Draw.rect(this.name + "-rotator", tile.drawx(), tile.drawy(), tile.entity.totalProgress*speed + 10);
}
});
plantTaron.layer = Layer.turret
