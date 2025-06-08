// script.js

document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const startScreen = document.getElementById('start-screen');
    const gameScreen = document.getElementById('game-screen');
    const playerNameInput = document.getElementById('player-name');
    const playerPositionSelect = document.getElementById('player-position');
    const startGameBtn = document.getElementById('start-game-btn');
    const loadGameBtn = document.getElementById('load-game-btn');
    const saveGameBtn = document.getElementById('save-game-btn');
    const changeLangBtn = document.getElementById('change-lang-btn'); // For start screen
    const changeLangGameBtn = document.getElementById('change-lang-game-btn'); // For game screen
    const nextYearBtn = document.getElementById('next-year-btn');

    // Player stats display
    const displayName = document.getElementById('display-name');
    const displayPosition = document.getElementById('display-position');
    const displayAge = document.getElementById('display-age');
    const displayGoals = document.getElementById('display-goals');
    const displayAssists = document.getElementById('display-assists');
    const displayAppearances = document.getElementById('display-appearances');
    const displayCleanSheets = document.getElementById('display-clean-sheets');
    const displayMVPs = document.getElementById('display-mvps');
    const displayRating = document.getElementById('display-rating');
    const displaySkill = document.getElementById('display-skill');
    const displayUCL = document.getElementById('display-ucl');
    const displayDomestic = document.getElementById('display-domestic');
    const displayCup = document.getElementById('display-cup');

    const storyText = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices-container');

    // --- Game State ---
    let player = {};
    let currentLang = 'id'; // Default language

    // --- Utility Functions ---

    /**
     * Translates a given text ID based on the current language.
     * @param {string} key - The ID of the text to translate.
     * @param {object} [replacements={}] - Optional key-value pairs for placeholders.
     * @returns {string} The translated text.
     */
    function i18n(key, replacements = {}) {
        let text = gameData.translations[currentLang][key] || key; // Fallback to key if not found
        for (const [placeholder, value] of Object.entries(replacements)) {
            text = text.replace(`{${placeholder}}`, value);
        }
        return text;
    }

    /**
     * Updates all UI elements with data-i18n and data-i18n-placeholder attributes.
     */
    function updateLanguageUI() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = i18n(key);
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = i18n(key);
        });

        // Update language button text
        changeLangBtn.textContent = currentLang === 'id' ? i18n('change_lang_btn') : i18n('change_lang_btn');
        changeLangGameBtn.textContent = currentLang === 'id' ? i18n('change_lang_game_btn') : i18n('change_lang_game_btn');

        // Re-render game screen if active to update dynamic text
        if (!gameScreen.classList.contains('hidden')) {
            renderGameScreen();
        }
    }

    /**
     * Initializes a new game or loads an existing one.
     * @param {object} [loadedPlayer=null] - Player object from a loaded game.
     */
    function initGame(loadedPlayer = null) {
        if (loadedPlayer) {
            player = loadedPlayer;
            alert(i18n('alert_welcome_back', { name: player.name }));
        } else {
            const name = playerNameInput.value.trim();
            const position = playerPositionSelect.value;

            if (!name) {
                alert(i18n('alert_player_must_choose'));
                return;
            }

            player = {
                name: name,
                position: position,
                age: 15,
                goals: 0,
                assists: 0,
                appearances: 0,
                cleanSheets: 0, // Relevant for Goalkeeper/Defender
                mvpAwards: 0,
                averageRating: 7.0,
                skillLevel: 1.0, // Start with a base skill level
                uclTrophies: 0,
                domesticTrophies: 0,
                cupTrophies: 0,
                club: 'No Club',
                storyState: 'initial', // To track player's current progression in the story
                eventTriggered: {}, // To track which specific events have occurred for this player
                lang: currentLang // Store player's chosen language
            };
        }

        currentLang = player.lang; // Ensure game uses player's saved language
        updateLanguageUI(); // Update UI based on player's language

        startScreen.classList.add('hidden');
        gameScreen.classList.remove('hidden');
        renderGameScreen();
    }

    /**
     * Renders the game screen with current player stats and story/choices.
     */
    function renderGameScreen() {
        displayName.textContent = player.name;
        displayPosition.textContent = player.position;
        displayAge.textContent = player.age;
        displayGoals.textContent = player.goals;
        displayAssists.textContent = player.assists;
        displayAppearances.textContent = player.appearances;
        displayCleanSheets.textContent = player.cleanSheets;
        displayMVPs.textContent = player.mvpAwards;
        displayRating.textContent = player.averageRating.toFixed(1);

        // Determine skill level label
        let skillLabel = i18n('skill_low');
        for (const skill of gameData.skillLevels) {
            if (player.skillLevel >= skill.threshold) {
                skillLabel = i18n(skill.label_id);
            }
        }
        displaySkill.textContent = skillLabel;

        displayUCL.textContent = player.uclTrophies;
        displayDomestic.textContent = player.domesticTrophies;
        displayCup.textContent = player.cupTrophies;

        choicesContainer.innerHTML = ''; // Clear previous choices
        nextYearBtn.classList.add('hidden'); // Hide next year button by default

        handleGameEvent();
    }

    /**
     * Handles determining and displaying the current game event/story.
     */
    function handleGameEvent() {
        const age = player.age;

        if (age > 40) {
            storyText.textContent = i18n('story_max_age_reached', { age: age });
            choicesContainer.innerHTML = '';
            nextYearBtn.classList.add('hidden');
            saveGameBtn.classList.add('hidden');
            return;
        } else if (age === 40) {
            storyText.textContent = i18n('story_retirement_40', { name: player.name, age: age });
            choicesContainer.innerHTML = '';
            nextYearBtn.classList.add('hidden');
            saveGameBtn.classList.add('hidden');
            return;
        }

        // Try to find an event specific to the current age that hasn't been triggered
        const ageEvents = gameData.events[age];
        let eventFound = false;

        if (ageEvents) {
            for (const event of ageEvents) {
                // Check if event already triggered or if it has a condition not met
                if (player.eventTriggered[event.id] || (event.condition && !event.condition(player))) {
                    continue;
                }

                // Check for chance-based events
                if (event.chance && Math.random() > event.chance) {
                    continue;
                }

                // Event found and ready to be displayed
                storyText.innerHTML = i18n(event.text_id, { age: age, club: player.club || 'No Club' });
                createChoices(event.choices);
                player.eventTriggered[event.id] = true; // Mark as triggered
                eventFound = true;
                break; // Only trigger one age-specific event per year for simplicity
            }
        }

        // If no age-specific event, try general events
        if (!eventFound) {
            for (const event of gameData.generalEvents) {
                 if (player.eventTriggered[event.id + '_' + age] || (event.condition && !event.condition(player))) {
                    continue;
                }
                if (event.chance && Math.random() > event.chance) {
                    continue;
                }

                storyText.innerHTML = i18n(event.text_id, { age: age, club: player.club || 'No Club' });
                createChoices(event.choices);
                player.eventTriggered[event.id + '_' + age] = true; // Mark general event as triggered for THIS age
                eventFound = true;
                break; // Only trigger one general event if no age-specific
            }
        }

        // If no specific or general event, show default year message
        if (!eventFound) {
            storyText.textContent = i18n('story_initial_year', { age: age });
            // For simple years, just allow moving to next year
            nextYearBtn.classList.remove('hidden');
        }
    }

    /**
     * Creates choice buttons for a given array of choices.
     * @param {Array} choices - An array of choice objects.
     */
    function createChoices(choices) {
        choicesContainer.innerHTML = ''; // Clear previous choices
        choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = i18n(choice.text_id);
            button.classList.add('choice-button'); // Add class for styling
            button.addEventListener('click', () => {
                choicesContainer.innerHTML = ''; // Clear choices after selection
                const effectMessage = choice.effect(player) || ""; // Apply effect
                if (effectMessage) {
                    storyText.textContent = effectMessage; // Update story with effect message
                }
                nextYearBtn.classList.remove('hidden'); // Show next year button after choice
            });
            choicesContainer.appendChild(button);
        });
    }

    /**
     * Simulates a year's progress for the player, updating stats.
     * This is where you can add much more complexity!
     */
    function simulateYearlyProgress() {
        player.appearances += Math.floor(Math.random() * (40 - 20) + 20); // 20-40 appearances
        player.averageRating = parseFloat((Math.random() * (9.0 - 6.0) + 6.0).toFixed(1)); // 6.0 - 9.0

        // Stat generation based on position and skill
        const skillFactor = player.skillLevel / 5; // Normalize skill to a factor
        switch (player.position) {
            case 'Striker':
                player.goals += Math.floor(Math.random() * (15 + (10 * skillFactor)) + (5 * skillFactor)); // More goals
                player.assists += Math.floor(Math.random() * (5 + (3 * skillFactor)));
                break;
            case 'Midfielder':
                player.goals += Math.floor(Math.random() * (8 + (5 * skillFactor)) + (1 * skillFactor));
                player.assists += Math.floor(Math.random() * (12 + (8 * skillFactor)) + (3 * skillFactor)); // More assists
                break;
            case 'Defender':
                player.goals += Math.floor(Math.random() * (3 + (2 * skillFactor)));
                player.assists += Math.floor(Math.random() * (5 + (3 * skillFactor)));
                if (Math.random() < (0.2 + (0.1 * skillFactor))) { // Chance for clean sheets
                    player.cleanSheets += Math.floor(Math.random() * (10 + (5 * skillFactor)) + 2);
                }
                break;
            case 'Goalkeeper':
                if (Math.random() < (0.3 + (0.2 * skillFactor))) { // Higher chance for clean sheets
                    player.cleanSheets += Math.floor(Math.random() * (15 + (10 * skillFactor)) + 5);
                }
                break;
        }

        // Random chance for trophies (adjust probabilities as needed)
        if (Math.random() < (0.02 + (player.skillLevel * 0.01))) { // Higher skill = higher chance
            player.uclTrophies++;
        }
        if (Math.random() < (0.1 + (player.skillLevel * 0.02))) {
            player.domesticTrophies++;
        }
        if (Math.random() < (0.07 + (player.skillLevel * 0.015))) {
            player.cupTrophies++;
        }

        if (Math.random() < (0.1 + (player.skillLevel * 0.03))) { // Chance for MVP award
            player.mvpAwards++;
        }

        // Skill level progression (can be tied to choices, performance, etc.)
        // For now, a slight random increase or decrease
        player.skillLevel += (Math.random() * 0.2 - 0.1); // +/- 0.1 each year
        if (player.skillLevel < 0.5) player.skillLevel = 0.5; // Minimum skill
        if (player.skillLevel > 6.0) player.skillLevel = 6.0; // Maximum skill

        // Decrease skill after certain age
        if (player.age >= 30) {
            player.skillLevel -= (Math.random() * 0.1 + 0.05); // Faster decline
            if (player.skillLevel < 0.5) player.skillLevel = 0.5;
        }

        // Apply any specific club bonuses/penalties if you implement clubs later
    }

    /**
     * Saves the current game state to localStorage.
     */
    function saveGame() {
        localStorage.setItem('footballCareerSave', JSON.stringify(player));
        alert(i18n('alert_game_saved'));
    }

    /**
     * Loads a game state from localStorage.
     */
    function loadGame() {
        const savedGame = localStorage.getItem('footballCareerSave');
        if (savedGame) {
            initGame(JSON.parse(savedGame));
        } else {
            alert(i18n('alert_no_saved_game'));
        }
    }

    // --- Event Listeners ---
    startGameBtn.addEventListener('click', () => initGame());
    loadGameBtn.addEventListener('click', () => loadGame());
    saveGameBtn.addEventListener('click', () => saveGame());

    nextYearBtn.addEventListener('click', () => {
        player.age++;
        simulateYearlyProgress(); // Simulate progress before new event
        renderGameScreen();
    });

    changeLangBtn.addEventListener('click', () => {
        currentLang = currentLang === 'id' ? 'en' : 'id';
        updateLanguageUI();
    });

    changeLangGameBtn.addEventListener('click', () => {
        currentLang = currentLang === 'id' ? 'en' : 'id';
        player.lang = currentLang; // Save player's preferred language
        updateLanguageUI();
    });


    // Initial setup
    updateLanguageUI(); // Apply translations on load
});
