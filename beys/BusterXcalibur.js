const Beyblade=require("./Beyblade.js");class BusterXcalibur extends Beyblade{constructor(){super("Buster Xcalibur","Attack","https://static.wikia.nocookie.net/beyblade/images/1/10/BBC_Buster_Xcalibur_Beyblade.png/revision/latest/scale-to-width-down/370?cb=20190918213101"),this.specials=[{name:"Triple Saber",requires:function(e,t,a){return e.sp>=4&&e.hp>=Math.round(e.maxhp/100*40)},execute:function(e,t,a){t.hp-=40+.2*t.lvl,t.stability-=5+.1*t.lvl,a.add(`[${e.username}] Buster Xcalibur used **Triple Saber**!`)}},{name:"Penta Saber",requires:function(e,t,a){return e.sp>=4&&e.hp<=Math.round(e.maxhp/100*40)},execute:function(e,t,a){t.hp-=60+.6*t.lvl,t.stability-=0+.1*t.lvl,a.add(`[${e.username}] Buster Xcalibur used **Penta Saber**!`)}}],this.passives=[{name:"Saber Wall",requires:function(e,t,a){let r=Math.floor(10*Math.random());return!e.bey.PSaber.active&&0==r&&t.hp<=Math.round(t.maxhp/100*30)},execute:function(e,t,a){t.hp=0,t.stability=0,t.stamina=0,a.add(`[${e.username}] Buster Xcalibur activated **Saber Wall**!`)},cd:150}],this.BusterMode={active:void 0,requires:function(e,t,a){return"fight"==e.move&&"spin"==t.move},boost:function(e,t,a){setTimeout(()=>{e.bey.BusterM.active=!1},2e4),e.atk+=.8,e.stamina-=.3,a.add(`[${e.username}] Buster Xcalibur is on mode **Buster Mode**!`)}},this.BalanceMode={active:void 0,requires:function(e,t,a){return!e.bey.BusterM},boost:function(e,t,a){t.atk-=.5,e.stamina+=.2,a.add(`[${e.username}] Buster Xcalibur is on mode **Balance Mode**!`)}},this.sd=0,this.sdchangable=!1}}module.exports=BusterXcalibur;