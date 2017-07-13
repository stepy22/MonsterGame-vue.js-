/**
 * Created by vubmc on 7/13/2017.
 */window.onload = function () {
new Vue({
    el:'#app',
    data:{
        playerHealth:100,
        monsterHealth:100,
        gameStarted:false,
        kalasnikovMetci:5,
        turns:[],
    },
    methods:{

    startGame:function () {
        this.gameStarted=true,
        this.playerHealth=100,
            this.monsterHealth=100,
        this.kalasnikovMetci=5
    },
        pucajKalasom:function () {
            if(this.kalasnikovMetci >0){
                var playerDmg=this.calculateDamage(14,4);
                var monsterDmg=this.calculateDamage(6,2);
                this.monsterHealth-=playerDmg;
                var poruka='Ozzzeziiiii saaaaaaa '

                this.playerHealth-=monsterDmg;
                this.showHits(monsterDmg,playerDmg,poruka);
                this.kalasnikovMetci-=1;
                if(this.checkWin()){
                    return;
                }
            }else{
                alert('Nemas Metaka!');
            }
        },
        attack:function () {
      var monsterDmg=this.calculateDamage(6,2);
           var playerDmg= this.calculateDamage(4,1);
            this.monsterHealth-=playerDmg;
            this.playerHealth-=monsterDmg;
            var poruka="Igrac roka sa";
            this.showHits(monsterDmg,playerDmg,poruka);
            if(this.checkWin()){
                return;
            }
        },
        specialAttack:function () {
        var playerDmg=this.calculateDamage(7,1);
        var monsterDmg=this.calculateDamage(6,2);
            this.monsterHealth-=playerDmg;
var poruka='Igrac udara sa '
            this.playerHealth-=monsterDmg;
            this.showHits(monsterDmg,playerDmg,poruka);
            if(this.checkWin()){
                return;
            }
        },
        heal:function () {
        if(this.playerHealth <96) {
            this.playerHealth += 5;
        }else{
            alert('rano je za hilovanje prijatelju');
        }
        },
        giveUp:function () {
            this.gameStarted=false;
            this.turns=[]
        },
        calculateDamage:function (max,min) {
            var damage= Math.max(Math.floor(Math.random()*max)+1,min);
                return damage;
        },
        checkWin: function() {
            if(this.playerHealth<=0) {
                if (confirm('Izgubio si jarane.Os Opet')) {
                    this.startGame();
                }
             }
                else if(this.monsterHealth<=0){
                if (confirm('you won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameStarted = false;
                }return true;}
                return false;

    },
        showHits:function (monsterDmg,playerDmg,poruka) {
            this.turns.unshift({
                isPlayer:true,
                text:poruka + playerDmg + ' dmg'
            });  this.turns.unshift({
                isPlayer:false,
                text:'Cudoviste pucaaaaa saaa ' + monsterDmg +' dmg'
            });
        }
}})}