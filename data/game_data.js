// data/game_data.js

const gameData = {
    // --- Translations ---
    translations: {
        'id': {
            'game_title': 'Simulator Karir Sepak Bola',
            'player_name_label': 'Nama Pemain:',
            'player_name_placeholder': 'Masukkan nama Anda',
            'player_position_label': 'Posisi:',
            'position_striker': 'Striker',
            'position_midfielder': 'Gelandang',
            'position_defender': 'Bek',
            'position_goalkeeper': 'Kiper',
            'start_game_btn': 'Mulai Petualangan',
            'load_game_btn': 'Muat Game',
            'save_game_btn': 'Simpan',
            'change_lang_btn': 'Ganti Bahasa (EN)',
            'change_lang_game_btn': 'EN', // For the smaller button in game screen
            'player_name_display': 'Nama:',
            'player_position_display': 'Posisi:',
            'player_age_display': 'Umur:',
            'stats_title': 'Statistik Karir',
            'player_goals_display': 'Goals:',
            'player_assists_display': 'Assists:',
            'player_appearances_display': 'Penampilan:',
            'player_clean_sheets_display': 'Clean Sheets:',
            'player_mvps_display': 'MVP Awards:',
            'player_rating_display': 'Rating Rata-rata:',
            'player_skill_display': 'Level Skill:',
            'trophies_title': 'Trophy',
            'player_ucl_display': 'UCL:',
            'player_domestic_display': 'Liga Domestik:',
            'player_cup_display': 'Piala Nasional:',
            'next_year_btn': 'Lanjut Tahun',
            'alert_player_must_choose': 'Pilih nama dan posisi terlebih dahulu!',
            'alert_game_saved': 'Game disimpan!',
            'alert_no_saved_game': 'Tidak ada game tersimpan.',
            'alert_welcome_back': 'Selamat datang kembali, {name}!',
            'story_initial_year': 'Anda berusia {age} tahun. Ini adalah awal dari perjalanan karir sepak bola Anda! Anda siap menaklukkan dunia?',
            'story_persib_offer_15': 'Pada usia {age}, Anda menerima tawaran menggiurkan dari akademi **Persib Bandung**! Mereka melihat potensi besar dalam diri Anda.',
            'story_persib_accepted': 'Anda memutuskan untuk bergabung dengan akademi Persib Bandung. Ini adalah langkah besar pertama Anda menuju karir profesional!',
            'story_persib_rejected': 'Anda menolak tawaran Persib. Anda yakin ada jalan lain yang lebih baik untuk Anda.',
            'story_injury_event': 'Musim ini Anda mengalami cedera hamstring parah. Ini akan menguji ketahanan mental Anda!',
            'story_breakthrough_year': 'Tahun ini adalah tahun terobosan! Anda bermain luar biasa dan menarik perhatian banyak klub besar.',
            'story_team_struggle': 'Tim Anda sedang berjuang keras musim ini. Apakah Anda bisa menjadi pembeda?',
            'story_retirement_40': 'Anda telah mencapai usia 40 tahun dan memutuskan untuk pensiun dari dunia sepak bola. Selamat atas karir yang luar biasa, {name}!',
            'story_max_age_reached': 'Anda telah mencapai batas usia {age} tahun. Karir Anda berakhir di sini.',
            'choice_accept_academy': 'Terima tawaran akademi',
            'choice_reject_academy': 'Tolak, cari klub lain',
            'choice_focus_school': 'Fokus sekolah dulu',
            'choice_train_harder': 'Latihan lebih keras!',
            'choice_rest_recover': 'Istirahat dan pulih total',
            'choice_push_through': 'Paksakan bermain dengan rasa sakit',
            'choice_lead_by_example': 'Pimpin tim dengan performa terbaik',
            'choice_support_teammates': 'Dukung rekan setim dari bangku cadangan',
            'skill_low': 'Rendah',
            'skill_medium': 'Menengah',
            'skill_high': 'Tinggi',
            'skill_elite': 'Elite',
            'event_persebaya_offer': 'Anda menarik perhatian **Persebaya Surabaya**! Mereka menawarkan kontrak profesional. Apa keputusan Anda?',
            'choice_join_persebaya': 'Gabung Persebaya',
            'choice_stay_persib': 'Tetap di Persib'
        },
        'en': {
            'game_title': 'Football Career Simulator',
            'player_name_label': 'Player Name:',
            'player_name_placeholder': 'Enter your name',
            'player_position_label': 'Position:',
            'position_striker': 'Striker',
            'position_midfielder': 'Midfielder',
            'position_defender': 'Defender',
            'position_goalkeeper': 'Goalkeeper',
            'start_game_btn': 'Start Adventure',
            'load_game_btn': 'Load Game',
            'save_game_btn': 'Save',
            'change_lang_btn': 'Ganti Bahasa (ID)',
            'change_lang_game_btn': 'ID', // For the smaller button in game screen
            'player_name_display': 'Name:',
            'player_position_display': 'Position:',
            'player_age_display': 'Age:',
            'stats_title': 'Career Stats',
            'player_goals_display': 'Goals:',
            'player_assists_display': 'Assists:',
            'player_appearances_display': 'Appearances:',
            'player_clean_sheets_display': 'Clean Sheets:',
            'player_mvps_display': 'MVP Awards:',
            'player_rating_display': 'Average Rating:',
            'player_skill_display': 'Skill Level:',
            'trophies_title': 'Trophies',
            'player_ucl_display': 'UCL:',
            'player_domestic_display': 'Domestic League:',
            'player_cup_display': 'National Cup:',
            'next_year_btn': 'Next Year',
            'alert_player_must_choose': 'Please choose a name and position first!',
            'alert_game_saved': 'Game saved!',
            'alert_no_saved_game': 'No saved game found.',
            'alert_welcome_back': 'Welcome back, {name}!',
            'story_initial_year': 'You are {age} years old. This is the start of your football career journey! Are you ready to conquer the world?',
            'story_persib_offer_15': 'At age {age}, you received an exciting offer from **Persib Bandung** academy! They see great potential in you.',
            'story_persib_accepted': 'You decided to join Persib Bandung academy. This is your first big step towards a professional career!',
            'story_persib_rejected': 'You rejected Persib\'s offer. You believe there\'s a better path for you.',
            'story_injury_event': 'This season, you suffered a severe hamstring injury. This will test your mental toughness!',
            'story_breakthrough_year': 'This year is a breakthrough year! You\'ve played exceptionally well and attracted attention from many big clubs.',
            'story_team_struggle': 'Your team is struggling this season. Can you make a difference?',
            'story_retirement_40': 'You have reached 40 years old and decided to retire from football. Congratulations on an amazing career, {name}!',
            'story_max_age_reached': 'You have reached the maximum age of {age}. Your career ends here.',
            'choice_accept_academy': 'Accept academy offer',
            'choice_reject_academy': 'Reject, find another club',
            'choice_focus_school': 'Focus on school first',
            'choice_train_harder': 'Train even harder!',
            'choice_rest_recover': 'Rest and fully recover',
            'choice_push_through': 'Push through the pain and play',
            'choice_lead_by_example': 'Lead the team with best performance',
            'choice_support_teammates': 'Support teammates from the bench',
            'skill_low': 'Low',
            'skill_medium': 'Medium',
            'skill_high': 'High',
            'skill_elite': 'Elite',
            'event_persebaya_offer': 'You\'ve caught the eye of **Persebaya Surabaya**! They\'re offering a professional contract. What\'s your decision?',
            'choice_join_persebaya': 'Join Persebaya',
            'choice_stay_persib': 'Stay at Persib'
        }
    },

    // --- Game Events by Age ---
    events: {
        15: [ // Events that can happen at age 15
            {
                id: 'persib_offer',
                type: 'story',
                text_id: 'story_persib_offer_15', // Reference to translation
                choices: [
                    {
                        text_id: 'choice_accept_academy',
                        effect: (player) => {
                            player.club = 'Persib Bandung (Akademi)';
                            player.skillLevel += 0.5; // Small skill boost
                            player.storyState = 'joined_persib'; // Update state for future events
                            return gameData.translations[player.lang]['story_persib_accepted'];
                        }
                    },
                    {
                        text_id: 'choice_reject_academy',
                        effect: (player) => {
                            player.storyState = 'rejected_persib';
                            return gameData.translations[player.lang]['story_persib_rejected'];
                        }
                    },
                    {
                        text_id: 'choice_focus_school',
                        effect: (player) => {
                            player.skillLevel -= 0.2; // Small skill decrease for less focus
                            player.storyState = 'focus_school';
                            return gameData.translations[player.lang]['choice_focus_school'] + ". Karier sepak bola mungkin tertunda.";
                        }
                    }
                ]
            }
        ],
        18: [
            {
                id: 'persebaya_offer',
                type: 'story',
                condition: (player) => player.storyState === 'joined_persib' && player.age === 18 && player.skillLevel >= 1.5, // Only if joined Persib and good skill
                text_id: 'event_persebaya_offer',
                choices: [
                    {
                        text_id: 'choice_join_persebaya',
                        effect: (player) => {
                            player.club = 'Persebaya Surabaya';
                            player.skillLevel += 1;
                            player.fame += 5;
                            return gameData.translations[player.lang]['story_persebaya_joined']; // You'd need to add this story text
                        }
                    },
                    {
                        text_id: 'choice_stay_persib',
                        effect: (player) => {
                            player.club = 'Persib Bandung (Senior)';
                            player.skillLevel += 0.5;
                            return gameData.translations[player.lang]['story_stayed_persib']; // You'd need to add this story text
                        }
                    }
                ]
            }
        ],
        20: [
             {
                id: 'injury_event',
                type: 'story',
                chance: 0.3, // 30% chance to occur
                text_id: 'story_injury_event',
                choices: [
                    {
                        text_id: 'choice_rest_recover',
                        effect: (player) => {
                            player.skillLevel -= 0.1; // Temporary slight dip
                            player.injuryCount++;
                            return "Anda pulih total, tapi butuh waktu untuk kembali ke performa terbaik.";
                        }
                    },
                    {
                        text_id: 'choice_push_through',
                        effect: (player) => {
                            player.skillLevel -= 0.5; // Significant skill drop for pushing too hard
                            player.injuryCount += 2; // More severe long-term impact
                            return "Anda memaksakan diri, cedera semakin parah dan mempengaruhi performa jangka panjang.";
                        }
                    }
                ]
            }
        ],
        // ... Add more ages and events
    },

    // --- General Yearly Events (not tied to specific age, but conditions) ---
    generalEvents: [
        {
            id: 'breakthrough_year',
            type: 'story',
            chance: 0.1, // 10% chance each year (if no specific age event)
            condition: (player) => player.age >= 18 && player.skillLevel >= 1.5,
            text_id: 'story_breakthrough_year',
            choices: [
                {
                    text_id: 'choice_train_harder',
                    effect: (player) => {
                        player.skillLevel += 0.3;
                        player.fame += 3;
                        return "Dedikasi Anda terbayar! Skill Anda meningkat pesat.";
                    }
                },
                {
                    text_id: 'choice_rest_recover', // Re-using choice text for different context
                    effect: (player) => {
                        player.skillLevel += 0.1; // Still some improvement
                        player.fame += 1;
                        return "Anda menjaga kondisi. Perkembangan stabil.";
                    }
                }
            ]
        },
        {
            id: 'team_struggle',
            type: 'story',
            chance: 0.2,
            condition: (player) => player.age >= 20,
            text_id: 'story_team_struggle',
            choices: [
                {
                    text_id: 'choice_lead_by_example',
                    effect: (player) => {
                        player.skillLevel += 0.2; // Personal growth
                        player.teamMorale += 5; // New stat: team morale
                        return "Anda menjadi pemimpin sejati. Tim mulai bangkit.";
                    }
                },
                {
                    text_id: 'choice_support_teammates',
                    effect: (player) => {
                        player.teamMorale += 10;
                        return "Dukungan Anda meningkatkan semangat tim, meski performa individu standar.";
                    }
                }
            ]
        }
        // Add more general events here...
    ],

    // --- Skill Level Mapping ---
    skillLevels: [
        { threshold: 0, label_id: 'skill_low' },
        { threshold: 1.5, label_id: 'skill_medium' },
        { threshold: 3, label_id: 'skill_high' },
        { threshold: 5, label_id: 'skill_elite' }
    ]
};
          
