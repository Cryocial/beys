const Beyblade=require("./Beyblade.js");class StormSpriggan extends Beyblade{constructor(){super("Storm Spriggan","Balance","https://vignette.wikia.nocookie.net/beyblade/images/a/a7/Beyblade_Spriggan.png/revision/latest?cb=20181218235223"),this.specials=[{name:"Upper Launch",requires:function(e,a,t){return e.sp>=4},execute:function(e,a,t){a.hp-=70+.5*e.lvl,a.stability-=20,e.stamina-=1+.004*e.lvl,e.sp-=4,t.add(`[${e.username}] Storm Spriggan used **Upper Launch**!`)}}],this.passives=[{name:"Counter Break",requires:function(e,a,t){return"fight"==a.move&&e.sp>=2},execute:function(e,a,t){switch(e.bey.TrueCounterChance){case 0:a.hp-=a.atk/100*(120+.3*e.lvl),a.atk-=a.atk/100*(50+.2*e.lvl),a.stability-=10,t.add(`[${e.username}] Storm Spriggan used **Counter Break**!`);break;case 1:a.hp-=a.atk/100*(120+.5*e.lvl),a.atk-=a.atk/100*(30+.4*e.lvl),a.stability-=10,t.add(`[${e.username}] Storm Spriggan used **True Counter Break**!`)}e.sp-=2},cd:80},{name:"Determination Resonance",requires:function(e,a,t){return e.hp<=e.maxhp/100*50},execute:function(e,a,t){e.hp+=e.maxhp/100*10+.1*e.lvl,t.add(`[${e.username}] is determined to win! **Determination Resonance** activated!`)},cd:180}],this.TrueCounterChance=Math.floor(2*Math.random()),this.sd=0,this.sdchangable=!1}}module.exports=StormSpriggan;