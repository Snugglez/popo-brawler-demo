module.exports = function reee(d) {
d.hook('S_LOGIN', 13, (e) => {
d.log(e)
if(d.game.me.class == 'fighter'){
e.templateId = 10911
e.appearance = {unk: 101, skinColor: 12, faceStyle: 8, faceDecal: 3, hairColor: 1, tattoos: 0 }
return true
}
})
}