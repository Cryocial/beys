const Beyblade=require("./Beyblade.js");class BloodyLonginus extends Beyblade{constructor(){super("Bloody Longinus","Attack","https://static.wikia.nocookie.net/beyblade/images/f/f6/BeybladeBloodyLonginusAnime.png/revision/latest/scale-to-width-down/553?cb=20190918213350"),this.specials=[{name:"Dragon Scream",requires:function(e,a,n){return e.sp>=3&&e.stability>=20+.1*e.lvl},execute:function(e,a,n){a.hp-=40+.2*a.lvl,n.add(`[${e.username}] Bloody Longinus used **Dragon Scream**!`)}},{name:"Bloody Squall",requires:function(e,a,n){return e.sp>=3&&e.stability<=20+.1*e.lvl},execute:function(e,a,n){a.hp-=60+.6*a.lvl,a.stability-=5+.2*a.lvl,n.add(`[${e.username}] Bloody Longinus used **Bloody Squall**!`)}}],this.passives=[{name:"Dragon Scream 2",requires:function(e,a,n){let o=Math.floor(2*Math.random());return!!e.bey.DScream.active&&0==o},execute:function(e,a,n){a.hp-=40+.2*a.lvl,n.add(`[${e.username}] Bloody Longinus activated **Dragon Scream 2**!`)},cd:120},{name:"Dragon Scream 3",requires:function(e,a,n){let o=Math.floor(4*Math.random());return!!e.bey.DScream2.active&&0==o},execute:function(e,a,n){a.hp-=40+.2*a.lvl,n.add(`[${e.username}] Bloody Longinus activated **Dragon Scream 3**!`)},cd:120},{name:"Dragon Scream 4",requires:function(e,a,n){let o=Math.floor(6*Math.random());return!!e.bey.DScream3.active&&0==o},execute:function(e,a,n){a.hp-=40+.2*a.lvl,n.add(`[${e.username}] Bloody Longinus activated **Dragon Scream 4**!`)},cd:120}],this.JoltRush={active:void 0,requires:function(e,a,n){let o=Math.floor(4*Math.random());return"fight"==e.move&&e.stamina>=Math.round(e.maxstamina/100*80)&&0==o},boost:function(e,a,n){e.atk+=.5+.02*e.lvl,e.stamina-=.2-.02*e.lvl,n.add(`[${e.username}] Bloody Longinus is on mode **Jolt Rush**!`)}},this.sd=1,this.sdchangable=!1}}module.exports=BloodyLonginus;