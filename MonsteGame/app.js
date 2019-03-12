new Vue({
    el:'#app',
    data: {
        playerHealth: 100,
        enemyHealth: 100,
        gameRunning: false,
        turns: [] 
    },
    methods: {
        startGame: function() {
            this.gameRunning= true;
            this.playerHealth= 100;
            this.enemyHealth= 100;
            this.turns= [];
        },
        attack: function() {
            var damage = this.calcDmg(7,10);
            this.enemyHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage
            })
           if(this.checkWin()){
               return
           }
            this.monsterAttacks();
            this.checkWin();
        },
        specialAttack: function() {
            var specialDmg= this.calcDmg(10,20);
            this.enemyHealth -= specialDmg
            this.turns.unshift({
                isPlayer: true,
                text: 'Player special attacks monster for ' + specialDmg
            })
            if(this.checkWin()){
                return
            }
           this.monsterAttacks();
        },
        heal: function() {
            if(this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10'
            })
            this.monsterAttacks();
        },
        giveUp: function() {
            console.log('giveup');
            this.gameRunning=false;
            alert("You gave up noob!")
        },

        monsterAttacks: function() {
            var monsterDmg= this.calcDmg(5,12);
            this.playerHealth -= monsterDmg;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits player for ' + monsterDmg
            })
            this.checkWin();
        },
        calcDmg: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function() {
            if(this.enemyHealth <= 0) {
                if(confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameRunning= false
                }
                return true;
            } else if(this.playerHealth <=0) {
                if(confirm('You lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameRunning= false
                }
                return true;
            }
            return false;
        }
        
    }
});