---
layout: base
title: ValFight
permalink: /valfight/
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ValFight 1.0</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 1200px; /* Increased width from 800px to 1200px */
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        h1 {
            text-align: center;
            color: #333;
        }
        .game-container {
            background-color: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .game-log {
            height: 300px;
            overflow-y: auto;
            border: 1px solid #ddd;
            padding: 10px;
            margin-bottom: 20px;
            background-color: #f9f9f9;
            font-family: monospace;
            white-space: pre-wrap;
            line-height: 1.5;
        }
        .player-stats {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }
        .player-card {
            flex: 1;
            max-width: 23%; /* Slightly increased from 22% */
            padding: 15px; /* Increased padding */
            border: 1px solid #ddd;
            border-radius: 5px;
            text-align: center;
            margin: 0 8px; /* Slightly increased margin */
            position: relative;
        }
        .player-card.dead {
            opacity: 0.5;
        }
        .player-image {
            width: 100%; /* Image will take full width of the card */
            height: auto;
            max-height: 150px; /* Set a max height */
            object-fit: cover;
            border-radius: 5px;
            margin-bottom: 10px;
        }
        .health-bar {
            width: 100%;
            height: 12px; /* Slightly thicker */
            background-color: #e0e0e0;
            margin-top: 8px;
            border-radius: 5px;
            overflow: hidden;
        }
        .health-fill {
            height: 100%;
            background-color: #4caf50;
            transition: width 0.5s;
        }
        .weapon-info {
            margin-top: 12px;
            font-size: 0.95em; /* Slightly larger */
        }
        .controls {
            text-align: center;
            margin-top: 25px;
        }
        button {
            padding: 12px 25px; /* Larger buttons */
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin: 0 8px;
            font-size: 1.1em; /* Larger text */
        }
        button:hover {
            background-color: #45a049;
        }
        button:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
        }
        .winner {
            text-align: center;
            font-size: 1.8em; /* Larger */
            font-weight: bold;
            margin-top: 25px;
            color: #4caf50;
            padding: 10px;
            background-color: #f0f9f0; /* Light background */
            border-radius: 5px;
            display: none; /* Hidden by default, will show when there's a winner */
        }
        /* Player name colors */
        .chamber-text {
            color: #E8A226; /* Yellow/orange/beige for Chamber */
            font-weight: bold;
        }
        .iso-text {
            color: #8E6BBF; /* Lavender shade for Iso */
            font-weight: bold;
        }
        .brimstone-text {
            color: #8B4513; /* Brown for Brimstone */
            font-weight: bold;
        }
        .tejo-text {
            color: #E8D44D; /* Yellow/white-ish for Tejo */
            font-weight: bold;
        }
        /* Weapon damage color gradient classes */
        .weapon-low {
            color: #2ECC40; /* Bright green for low damage */
            font-weight: bold;
        }
        .weapon-low-med {
            color: #ADDC30; /* Green-yellow for low-medium damage */
            font-weight: bold;
        }
        .weapon-med {
            color: #FFDC00; /* Yellow for medium damage */
            font-weight: bold;
        }
        .weapon-med-high {
            color: #FF851B; /* Orange for medium-high damage */
            font-weight: bold;
        }
        .weapon-high {
            color: #FF4136; /* Bright red for high damage */
            font-weight: bold;
        }
        /* Add a divider style */
        .round-divider {
            color: #666;
            font-weight: bold;
        }
        .eliminated-text {
            color: #FF4136;
            font-weight: bold;
        }
        /* Style for rare Brimstone */
        .rare-brimstone {
            border: 2px solid gold;
            box-shadow: 0 0 10px gold;
        }
    </style>
</head>
<body>
    <h1>ValFight 1.0</h1>
    <div class="game-container">
        <div class="player-stats" id="player-stats">
            <!-- Player cards will be generated here -->
        </div>
        <div class="game-log" id="game-log"></div>
        <div class="controls">
            <button id="next-round-btn">Advance</button>
            <button id="reset-game-btn">Reset Game</button>
        </div>
        <div class="winner" id="winner-announcement"></div>
    </div>
    <script>
    // Game Classes and Logic
    class Player {
        constructor(name) {
            this.name = name;
            this.health = 100+(10*Math.floor(Math.random())-10*Math.floor(Math.random()));
            this.weapon = null;
            // Set image path with local assets
            this.imagePath = this.getImagePath(name);
            this.colorClass = this.getColorClass(name);
        }
        
        getImagePath(name) {
            // Use correct path with navigation/assets structure
            const baseUrl = "/blog2.1/navigation/assets";
            
            switch(name) {
                case "Chamber":
                    return `${baseUrl}/chamber.png`;
                case "Tejo":
                    return `${baseUrl}/tejo.png`;
                case "Brimstone":
                    // 1% chance for alternate Brimstone image
                    if (Math.random() < 0.01) {
                        return `${baseUrl}/brimalt.png`;
                    } else {
                        return `${baseUrl}/brim.png`;
                    }
                case "Iso":
                    return `${baseUrl}/iso.png`;
                default:
                    return "";
            }
        }
        
        getColorClass(name) {
            // Return color class name based on character name
            const colorClasses = {
                "Chamber": "chamber-text",
                "Tejo": "tejo-text",
                "Brimstone": "brimstone-text",
                "Iso": "iso-text"
            };
            return colorClasses[name] || "";
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
                { name: "Classic", damage: 5 },
                { name: "Ghost", damage: 7 },
                { name: "Sheriff", damage: 10 },
                { name: "Knife", damage: 8 },
                { name: "Stinger", damage: 12 },
                { name: "Judge", damage: 15 },
                { name: "Operator", damage: 25 },
                { name: "Vandal", damage: 18 },
                { name: "Phantom", damage: 17 },
                { name: "Guardian", damage: 16 },
            ];
            this.round = 1;
            this.gameOver = false;
            this.gameLog = [];
            this.winner = null; // Initialize winner as null
        }
        
        getWeaponColorClass(damage) {
            if (damage <= 7) return "weapon-low";
            if (damage <= 10) return "weapon-low-med";
            if (damage <= 15) return "weapon-med";
            if (damage <= 18) return "weapon-med-high";
            return "weapon-high";
        }
        
        formatPlayerName(player) {
            return `<span class="${player.colorClass}">${player.name}</span>`;
        }
        
        formatWeapon(weapon) {
            const colorClass = this.getWeaponColorClass(weapon.damage);
            return `<span class="${colorClass}">${weapon.name}</span>`;
        }
        
        assignWeapons() {
            this.players.forEach(player => {
                if (player.isAlive()) {
                    const weapon = this.weapons[Math.floor(Math.random() * this.weapons.length)];
                    player.weapon = {...weapon}; // Create a copy to avoid reference issues
                    // Just report the weapon equipped, not the damage
                    this.logEvent(`${this.formatPlayerName(player)} equipped a ${this.formatWeapon(weapon)}.`);
                }
            });
        }
        
        fight() {
            // Add a line break before fighting starts
            this.logEvent("");
            
            // Create a copy of the players array to avoid mutation issues during iteration
            const activePlayers = this.players.filter(player => player.isAlive());
            activePlayers.forEach(attacker => {
                if (attacker.isAlive()) {
                    const targets = this.players.filter(player => player !== attacker && player.isAlive());
                    if (targets.length > 0) {
                        const target = targets[Math.floor(Math.random() * targets.length)];
                        const damage = attacker.weapon.damage;
                        target.takeDamage(damage);
                        this.logEvent(`${this.formatPlayerName(attacker)} attacks ${this.formatPlayerName(target)} with ${this.formatWeapon(attacker.weapon)} for ${damage} damage.`);
                        if (!target.isAlive()) {
                            this.logEvent(`<span class="eliminated-text">${this.formatPlayerName(target)} has been eliminated!</span>`);
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
                    this.logEvent(`Game Over! The winner is ${this.formatPlayerName(this.winner)} with ${Math.round(this.winner.health)} health remaining.`);
                } else {
                    this.logEvent("Game Over! It's a draw - everyone has been defeated!");
                }
                return true;
            }
            return false;
        }
        
        nextRound() {
            if (this.gameOver) return false;
            this.logEvent(`<span class="round-divider">--- Round ${this.round} ---</span>`);
            this.assignWeapons();
            this.fight();
            const isGameOver = this.checkGameOver();
            if (!isGameOver) {
                this.round++;
            }
            return !isGameOver;
        }
        
        reset() {
            this.players.forEach(player => {
                player.health = 100 + (10 * Math.floor(Math.random()) - 10 * Math.floor(Math.random()));
                player.weapon = null;
                
                // Reassign images to potentially get the rare Brimstone
                if (player.name === "Brimstone") {
                    player.imagePath = player.getImagePath("Brimstone");
                }
            });
            this.round = 1;
            this.gameOver = false;
            this.winner = null;
            this.gameLog = [];
            this.logEvent("Game has been reset! All players restored to health.");
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
            this.updateLog("Game initialized. Press 'Advance' to begin!");
        }
        
        initEventListeners() {
            this.nextRoundButton.addEventListener('click', () => this.runNextRound());
            this.resetGameButton.addEventListener('click', () => this.resetGame());
        }
        
        runNextRound() {
            const gameRunning = this.game.nextRound();
            // Always update UI
            this.renderPlayerStats();
            this.updateLog();
            
            if (!gameRunning) {
                this.nextRoundButton.disabled = true;
                this.displayWinner();
            }
        }
        
        resetGame() {
            this.game.reset();
            this.nextRoundButton.disabled = false;
            this.winnerElement.style.display = 'none'; // Hide winner announcement
            this.renderPlayerStats();
            this.updateLog();
        }
        
        renderPlayerStats() {
            this.playerStatsElement.innerHTML = '';
            
            this.game.players.forEach(player => {
                const playerCard = document.createElement('div');
                playerCard.className = `player-card ${!player.isAlive() ? 'dead' : ''}`;
                
                // Add image if available
                if (player.imagePath) {
                    const playerImage = document.createElement('img');
                    playerImage.src = player.imagePath;
                    playerImage.alt = `${player.name} avatar`;
                    playerImage.className = 'player-image';
                    // Add a special class if it's the rare Brimstone image
                    if (player.name === "Brimstone" && player.imagePath.includes("brimalt")) {
                        playerImage.className += ' rare-brimstone';
                    }
                    playerCard.appendChild(playerImage);
                }
                
                const nameElement = document.createElement('h3');
                nameElement.textContent = player.name;
                nameElement.className = player.colorClass; // Add player's color class
                
                const healthText = document.createElement('div');
                healthText.textContent = `Health: ${Math.round(player.health)}/100`;
                
                const healthBar = document.createElement('div');
                healthBar.className = 'health-bar';
                
                const healthFill = document.createElement('div');
                healthFill.className = 'health-fill';
                healthFill.style.width = `${player.health}%`;
                
                healthBar.appendChild(healthFill);
                
                const weaponInfo = document.createElement('div');
                weaponInfo.className = 'weapon-info';
                
                if (player.weapon) {
                    // Apply weapon color based on damage
                    const weaponColorClass = this.game.getWeaponColorClass(player.weapon.damage);
                    weaponInfo.innerHTML = `Weapon: <span class="${weaponColorClass}">${player.weapon.name}</span> (${player.weapon.damage} dmg)`;
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
                logEntry.innerHTML = message; // Use innerHTML to support the HTML formatting
                this.logElement.appendChild(logEntry);
            });
            
            // Auto-scroll to the bottom
            this.logElement.scrollTop = this.logElement.scrollHeight;
        }
        
        displayWinner() {
            this.winnerElement.style.display = 'block'; // Show winner element
            
            if (this.game.winner) {
                // Use the formatted player name with color
                this.winnerElement.innerHTML = `🏆 ${this.game.formatPlayerName(this.game.winner)} wins with ${Math.round(this.game.winner.health)} health remaining! 🏆`;
                
                // Also highlight the winner's card
                const cards = this.playerStatsElement.querySelectorAll('.player-card');
                cards.forEach((card, index) => {
                    if (this.game.players[index] === this.game.winner) {
                        card.style.boxShadow = '0 0 10px 5px gold';
                        card.style.border = '2px solid gold';
                    }
                });
            } else {
                this.winnerElement.textContent = "It's a draw - everyone has been defeated!";
            }
        }
    }
    
    // Initialize the game when the DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
        const gameUI = new GameUI();
    });
    </script>
</body>