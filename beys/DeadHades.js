const Beyblade=require("./Beyblade.js");class DeadHades extends Beyblade{constructor(){super("Dead Hades","Balance","https://vignette.wikia.nocookie.net/beyblade/images/0/0c/BBC_DH11TZ%27_Beyblade.png/revision/latest?cb=20181015105727"),this.specials=[{name:"Special",requires:function(e,s,a){return e.sp>3},execute:function(e,s,a){s.hp=s.hp-43;let t=(new Discord.MessageEmbed).setTitle(`[${e.username}] Dead Hades used **Dead Impulse**. 29 damage dealt.`).setColor("#551a8b");a.channel.send(t)}}],this.passives=[{name:"Passive",requires:function(e,s,a){return!1},execute:function(e,s,a){s.hp=s.hp-28;let t=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");a.channel.createMessage({embed:t})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=DeadHades;