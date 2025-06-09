---
layout: page
title: CSSE2 Tri 3 Final Documentation
permalink: /CSSE2T3Documentation/
---

# CSSE2 Trimester 3 Final Documentation
**Student:** Evan Svetina <br>
**Period:** 4<br>
**Date:** June 9th, 2025<br>

## 1. Overview of Work & Unique Qualities

This trimester, I made significant contributions to our adventure game project by architecting and implementing three major systems that enhanced gameplay experience and code quality:

### **Primary Contributions:**
- **Platformer Game Engine**: Built a complete secondary game engine with physics, enemies, and combat
- **Dialogue System Overhaul**: Replaced intrusive alerts with an immersive dialogue management system
- **Enemy AI Implementation**: Created intelligent enemy behavior with pathfinding and collision detection
- **Game Architecture Improvements**: Enhanced the overall game structure and interaction systems

### **Unique Technical Qualities:**
- **Modular Design**: Created reusable components that can be easily integrated into future projects
- **Performance Optimization**: Implemented efficient collision detection and animation systems
- **User Experience Focus**: Prioritized smooth, non-intrusive gameplay mechanics
- **Code Quality**: Maintained clean, well-documented, and scalable code architecture

## 2. Certification of Articulation Success

### **Technical Keywords Demonstrated:**
- **Object-Oriented Programming**: Extensive use of ES6 classes with inheritance patterns
- **Event-Driven Architecture**: Implemented complex event handling for user interactions
- **Game Engine Development**: Built custom physics and rendering systems
- **State Management**: Created sophisticated game state tracking and transitions
- **Collision Detection**: Developed efficient hitbox-based collision systems
- **UI/UX Design**: Crafted intuitive user interfaces with responsive feedback

### **Homework Integration:**
Successfully integrated enemy mechanics from other teams' assignments, demonstrating ability to:
- Adapt external requirements to existing codebase
- Maintain code consistency while adding new features
- Collaborate effectively with team specifications

## 3. Project Showcase for Night at the Museum (June 2025)

### **Demonstration Features:**
1. **Adventure Game Hub**: Navigate through desert world with multiple NPCs and mini-games
2. **Dialogue System**: Interact with characters using modern dialogue boxes instead of browser alerts
3. **Platformer Integration**: Access secondary platformer game through End Ship NPC
4. **End Dimension Challenge**: Collect Eyes of Ender while avoiding the Enderman enemy
5. **Real-time Stats**: Live timer and collection counter with local storage integration

### **Technical Highlights for Visitors:**
- Seamless game-within-game transitions
- Dynamic enemy AI with pathfinding
- Responsive dialogue system with avatar support
- Efficient resource management and cleanup

## 4. Methodologies and Artifacts

### **Development Statistics:**
- **Files Created/Modified**: 15+ core game engine files
- **Lines of Code**: 2000+ lines across multiple systems
- **Issues Resolved**: Multiple collision detection and memory leak bugs
- **Features Implemented**: 3 major systems (Dialogue, Platformer, Enemy AI)

### **Key Technical Artifacts:**

#### **Dialogue System Architecture**
```javascript
class DialogueSystem {
  constructor(options = {}) {
    this.dialogues = options.dialogues || [/* default dialogues */];
    this.id = options.id || "dialogue_" + Math.random().toString(36).substr(2, 9);
    this.isOpen = false;
    this.createDialogueBox();
  }

  showDialogue(message, speaker = "", avatarSrc = null) {
    // Set content and display dialogue box
    this.dialogueBox.style.display = "block";
    this.isOpen = true;
    return this.dialogueBox;
  }
}
```

#### **Enemy AI Implementation**
```javascript
// Intelligent pathfinding and collision detection
update: function() {
  // Find nearest player
  const players = this.gameEnv.gameObjects.filter(obj => 
    obj.constructor.name === 'Player'
  );
  
  // Calculate movement toward target
  const speed = 1.5;
  const dx = nearest.position.x - this.position.x;
  const dy = nearest.position.y - this.position.y;
  const angle = Math.atan2(dy, dx);
  
  this.position.x += Math.cos(angle) * speed;
  this.position.y += Math.sin(angle) * speed;
}
```

#### **Platformer Game Integration**
```javascript
interact: function() {
  const handleKeyPress = (event) => {
    if (event.key.toLowerCase() === 'e') {
      document.removeEventListener('keydown', handleKeyPress);
      window.location.href = '/assets/js/adventureGame/adPlatEngine/endplatformer.html';
    }
  };
  document.addEventListener('keydown', handleKeyPress);
}
```

### **Code Organization Structure:**
```
adventureGame/
├── GameEngine/
│   ├── Character.js          # Base character class
│   ├── Player.js             # Player mechanics
│   ├── Enemy.js              # Enemy base class
│   ├── Npc.js                # NPC interactions
│   └── GameControl.js        # Game state management
├── DialogueSystem.js         # Custom dialogue manager
├── GameLevelDesert.js        # Main hub level
├── GameLevelEnd.js           # End dimension level
└── adPlatEngine/             # Secondary platformer engine
    ├── endplatformer.html    # Platformer game page
    └── [engine files]        # Physics and game logic
```

## 5. Grade Predictor Results

**Current Grade Prediction**: 90% (A)

## Technical Deep Dive

### **Dialogue System Overhaul**
**Problem**: Original alert-based system was intrusive and broke game immersion
**Solution**: Created comprehensive dialogue management system

**Key Features:**
- Non-blocking dialogue boxes with custom styling
- Support for character avatars and speaker names
- Button integration for interactive choices
- Sound effect support (foundation laid)
- Unique instance management to prevent conflicts

```javascript
// Example of advanced button integration
addButtons(buttons) {
  const buttonContainer = document.createElement('div');
  buttons.forEach(button => {
    const btn = document.createElement('button');
    btn.onclick = () => button.action();
    buttonContainer.appendChild(btn);
  });
  this.dialogueBox.insertBefore(buttonContainer, this.closeBtn);
}
```

### **Enemy AI System**
**Innovation**: Created intelligent enemy behavior with real-time pathfinding

**Technical Implementation:**
- Dynamic target selection based on proximity
- Smooth movement with trigonometric calculations
- Collision detection with configurable hitboxes
- State management to prevent duplicate actions

### **Platformer Engine Integration**
**Achievement**: Successfully embedded a complete secondary game within the main adventure game

**Technical Challenges Solved:**
- Resource management between game instances
- State preservation during transitions
- Memory leak prevention
- Seamless user experience

## Conclusion

This trimester demonstrated significant growth in:
- **System Architecture**: Designing complex, interconnected game systems
- **Problem Solving**: Independently resolving technical challenges
- **Code Quality**: Writing maintainable, well-documented code
- **Innovation**: Creating original solutions to enhance user experience

The combination of technical depth, code quality, and innovative features positions this work as a strong demonstration of advanced programming skills suitable for the Night at the Museum showcase.