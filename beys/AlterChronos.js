const Beyblade=require("./Beyblade.js");class AlterChronos extends Beyblade{constructor(){super("Alter Chronos","Balance","https://i.imgur.com/IKOnbBH.png"),this.specials=[{name:"Mode Change",requires:function(e,t,n){return e.sp>=1},execute:function(e,t,n){"Attack"==e.bey.type?(e.bey.type="Stamina",n.add(`[${e.username}] Alter Chronos used **Mode Change**! Bey type set to **Stamina**!`)):(e.bey.type="Attack",n.add(`[${e.username}] Alter Chronos used **Mode Change**! Bey type set to **Attack**!`)),e.sp-=1}},{name:"Slide-On Shoot",requires:function(e,t,n){return"Attack"==e.bey.type&&e.sp>=3},execute:function(e,t,n){t.hp-=50+.3*e.lvl,t.stability-=12,e.sp-=3,n.add(`${e.username} Alter Chronos used **Slide-On Shoot**!`)}},{name:"Slide-Off Shoot",requires:function(e,t,n){return"Stamina"==e.bey.type&&e.sp>=3},execute:function(e,t,n){t.stamina-=1.2+.008*e.lvl,t.stability-=7,e.stamina+=1.2+.008*e.lvl,e.stability+=7,n.add(`${e.username} Alter Chronos used **Slide-Off Shoot**!`)}}],this.passives=[{name:"Tightrope Dive",requires:function(e,t,n){return"Attack"==e.bey.type&&"fight"==t.move&&e.sp>=2},execute:function(e,t,n){t.hp-=2*t.atk,t.stability-=9,t.atk=0,e.sp-=2,n.add(`${e.username} Alter Chronos used **Tightrope Dive**!`)},cd:120},{name:"Moonsault Dive",requires:function(e,t,n){return"fight"==t.move&&e.sp>=3},execute:function(e,t,n){Math.floor(99*Math.random())<=49&&(t.hp-=50+.7*e.lvl,e.stability-=25,e.sp-=3,n.add(`[${e.username}] Alter Chronos used **Moonsaught Dive**!`))},cd:120}],this.StartingMode={active:void 0,requires:function(e,t,n){return!0},boost:function(e,t,n){0==e.bey.AlterMode?(e.bey.type="Attack",n.add(`${e.username} launched Alter Chronos in **Attack** mode!`)):(e.bey.type="Stamina",n.add(`${e.username} launuched Alter Chronos in **Stamina** mode!`))}},this.AlterMode=Math.floor(2*Math.random()),this.sd=0,this.sdchangable=!1}}module.exports=AlterChronos;