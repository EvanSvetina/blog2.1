<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Turn-Based Fighting Game</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 800px;
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
        }
        .player-stats {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }
        .player-card {
            flex: 1;
            max-width: 22%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            text-align: center;
            margin: 0 5px;
            position: relative;
        }
        .player-card.dead {
            opacity: 0.5;
        }
        .health-bar {
            width: 100%;
            height: 10px;
            background-color: #e0e0e0;
            margin-top: 5px;
            border-radius: 5px;
            overflow: hidden;
        }
        .health-fill {
            height: 100%;
            background-color: #4caf50;
            transition: width 0.5s;
        }
        .weapon-info {
            margin-top: 10px;
            font-size: 0.9em;
        }
        .controls {
            text-align: center;
            margin-top: 20px;
        }
        button {
            padding: 10px 20px;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin: 0 5px;
            font-size: 1em;
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
            font-size: 1.5em;
            font-weight: bold;
            margin-top: 20px;
            color: #4caf50;
        }
    </style>
</head>
<body>
    <h1>Turn-Based Fighting Game</h1>
    <div class="game-container">
        <div class="player-stats" id="player-stats">
            <!-- Player cards will be generated here -->
        </div>
        <div class="game-log" id="game-log"></div>
        <div class="controls">
            <button id="next-round-btn">Next Round</button>
            <button id="reset-game-btn">Reset Game</button>
        </div>
        <div class="winner" id="winner-announcement"></div>
    </div>

    <script src="game.js"></script>
</body>
</html>