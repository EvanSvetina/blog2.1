// Game Classes and Logic
class Player {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapon = null;
    }

    takeDamage(damage) {
        this.health = Math.max(0, this.health - damage);
    }

    isAlive() {
        return this.health > 0;
    }
}

class Game {
    constructor() {
        this.players = [
            new Player("Chamber"),
            new Player("Tejo"),
            new Player("Brimstone"),
            new Player("Iso")
        ];
        
        this.weapons = [
            { name: "Sword", damage: 15 },
            { name: "Bow", damage: 10 },
            { name: "Axe", damage: 20 },
            { name: "Dagger", damage: 8 },
            { name: "Spear", damage: 12 },
            { name: "Hammer", damage: 18 },
            { name: "Crossbow", damage: 14 },
            { name: "Mace", damage: 16 },
            { name: "Flail", damage: 13 },
            { name: "Staff", damage: 9 },
        ];
        
        this.round = 1;
        this.gameOver = false;
        this.gameLog = [];
    }

    assignWeapons() {
        this.players.forEach(player => {
            if (player.isAlive()) {
                const weapon = this.weapons[Math.floor(Math.random() * this.weapons.length)];
                player.weapon = {...weapon}; // Create a copy to avoid reference issues
                this.logEvent(`${player.name} equipped a ${weapon.name} (${weapon.damage} damage).`);
            }
        });
    }

    fight() {
        // Create a copy of the players array to avoid mutation issues during iteration
        const activePlayers = this.players.filter(player => player.isAlive());
        
        activePlayers.forEach(attacker => {
            if (attacker.isAlive()) {
                const targets = this.players.filter(player => player !== attacker && player.isAlive());
                if (targets.length > 0) {
                    const target = targets[Math.floor(Math.random() * targets.length)];
                    const damage = attacker.weapon.damage;
                    
                    target.takeDamage(damage);
                    this.logEvent(`${attacker.name} attacks ${target.name} with ${attacker.weapon.name} for ${damage} damage.`);
                    
                    if (!target.isAlive()) {
                        this.logEvent(`${target.name} has been eliminated!`);
                    }
                }
            }
        });
    }

    checkGameOver() {
        const alivePlayers = this.players.filter(player => player.isAlive());
        if (alivePlayers.length <= 1) {
            this.gameOver = true;
            if (alivePlayers.length === 1) {
                this.winner = alivePlayers[0];
                this.logEvent(`Game Over! The winner is ${this.winner.name} with ${this.winner.health} health remaining.`);
            } else {
                this.logEvent("Game Over! It's a draw - everyone has been defeated!");
            }
            return true;
        }
        return false;
    }

    nextRound() {
        if (this.gameOver) return false;
        
        this.logEvent(`\n--- Round ${this.round} ---`);
        this.assignWeapons();
        this.fight();
        
        if (!this.checkGameOver()) {
            this.round++;
            return true;
        }
        
        return false;
    }

    reset() {
        this.players.forEach(player => {
            player.health = 100;
            player.weapon = null;
        });
        
        this.round = 1;
        this.gameOver = false;
        this.winner = null;
        this.gameLog = [];
        this.logEvent("Game has been reset! All players restored to 100 health.");
    }

    logEvent(message) {
        this.gameLog.push(message);
        return message;
    }
}

// UI Interface
class GameUI {
    constructor() {
        this.game = new Game();
        this.logElement = document.getElementById('game-log');
        this.playerStatsElement = document.getElementById('player-stats');
        this.nextRoundButton = document.getElementById('next-round-btn');
        this.resetGameButton = document.getElementById('reset-game-btn');
        this.winnerElement = document.getElementById('winner-announcement');
        
        this.initEventListeners();
        this.renderPlayerStats();
        this.updateLog("Game initialized. Press 'Next Round' to begin!");
    }
    
    initEventListeners() {
        this.nextRoundButton.addEventListener('click', () => this.runNextRound());
        this.resetGameButton.addEventListener('click', () => this.resetGame());
    }
    
    runNextRound() {
        if (this.game.nextRound()) {
            // Update the UI with the new game state
            this.renderPlayerStats();
            this.updateLog();
        } else {
            this.nextRoundButton.disabled = true;
            this.displayWinner();
        }
    }
    
    resetGame() {
        this.game.reset();
        this.nextRoundButton.disabled = false;
        this.winnerElement.textContent = '';
        this.renderPlayerStats();
        this.updateLog();
    }
    
    renderPlayerStats() {
        this.playerStatsElement.innerHTML = '';
        
        this.game.players.forEach(player => {
            const playerCard = document.createElement('div');
            playerCard.className = `player-card ${!player.isAlive() ? 'dead' : ''}`;
            
            const nameElement = document.createElement('h3');
            nameElement.textContent = player.name;
            
            const healthText = document.createElement('div');
            healthText.textContent = `Health: ${player.health}/100`;
            
            const healthBar = document.createElement('div');
            healthBar.className = 'health-bar';
            
            const healthFill = document.createElement('div');
            healthFill.className = 'health-fill';
            healthFill.style.width = `${player.health}%`;
            
            healthBar.appendChild(healthFill);
            
            const weaponInfo = document.createElement('div');
            weaponInfo.className = 'weapon-info';
            
            if (player.weapon) {
                weaponInfo.textContent = `Weapon: ${player.weapon.name} (${player.weapon.damage} dmg)`;
            } else {
                weaponInfo.textContent = 'No weapon';
            }
            
            playerCard.appendChild(nameElement);
            playerCard.appendChild(healthText);
            playerCard.appendChild(healthBar);
            playerCard.appendChild(weaponInfo);
            
            this.playerStatsElement.appendChild(playerCard);
        });
    }
    
    updateLog() {
        // Get only new log messages since last update
        const newLogs = this.game.gameLog.slice(-(this.game.gameLog.length - this.logElement.childElementCount));
        
        newLogs.forEach(message => {
            const logEntry = document.createElement('div');
            logEntry.textContent = message;
            this.logElement.appendChild(logEntry);
        });
        
        // Auto-scroll to the bottom
        this.logElement.scrollTop = this.logElement.scrollHeight;
    }
    
    displayWinner() {
        if (this.game.winner) {
            this.winnerElement.textContent = `🏆 ${this.game.winner.name} wins! 🏆`;
        } else {
            this.winnerElement.textContent = "It's a draw!";
        }
    }
}

// Initialize the game when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const gameUI = new GameUI();
});