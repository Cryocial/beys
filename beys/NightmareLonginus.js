const Beyblade=require("./Beyblade.js");class NightmareLonginus extends Beyblade{constructor(e,t){super("Nightmare Longinus","Attack","https://vignette.wikia.nocookie.net/beyblade/images/a/a5/Beyblade_Nightmare_Longinus.png/revision/latest?cb=20200218030950",e,t),this.specials=[{name:"Special",requires:function(e,t,s){return e.sp>3},execute:function(e,t,s){if(e.hp>Math.round(e.maxhp/100*90)){let i=t.hp,n=50,o=0;for(var a=0;a<e.lvl;a++)o+=.3;let r=n+o;t.hp=t.hp-r;let h=i-t.hp;e.hp=e.hp-25,e.stamina=e.stamina+1;let l=(new Discord.MessageEmbed).setTitle(`[${e.username}] Nightmare Longinus used **Metal Dragon Destructor**.`).setDescription(`Longinus recoiled off a wall to gain speed at the cost of 25 hp, before slamming into the opponent for ${h}! Longinus used the free spinning ring on it's Destroy driver to negate stamina loss this turn!`).setColor("#551a8b");s.channel.createMessage({embed:l})}else if(e.hp<=Math.round(e.maxhp/100*90)){let i=t.hp,n=70,o=0;for(a=0;a<e.lvl;a++)o+=.5;let r=n+o;t.hp=t.hp-r;let h=i-t.hp;e.stamina=e.stamina-1;let l=(new Discord.MessageEmbed).setTitle(`[${e.username}] Nightmare Longinus used **Metal Dragon Crush**.`).setDescription(`The metal dragon heads on Longinus' layer shifted behind the wings as it got closer to bursting point, putting weight into the two contact points as it gained a huge increase in strength as a result. Longinus crashed into the enemy with a fierce, heavyweight attack for ${h} damage, the weight distribution throwing off balance and dropping stamina by 1`).setColor("#551a8b");s.channel.createMessage({embed:l})}}}],this.passives=[{name:"Passive",requires:function(e,t,s){return!1},execute:function(e,t,s){t.hp=t.hp-28;let a=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");s.channel.createMessage({embed:a})},cd:180}],this.modes=[],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=NightmareLonginus;