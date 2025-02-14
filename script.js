const prompts = [
    "What are you grateful for today?",
    "Describe a kind gesture someone did for you recently.",
    "What qualities do you appreciate most about yourself?",
    "Write about a memorable moment with a loved one.",
    "What is something beautiful you saw today?",
    "Who in your life are you most thankful for, and why?",
    "What is a challenge you've overcome that you're grateful for?",
    "Describe a small pleasure that brings you joy.",
    "What is a recent accomplishment you're proud of?",
    "Write about a favorite place and why it makes you happy.",
    "What skills or talents are you grateful to have?",
    "Describe a favorite memory from childhood.",
    "What is something you've learned recently that you're thankful for?",
    "Write about a moment when you felt at peace.",
    "What is a piece of advice you're grateful to have received?",
    "Describe a hobby or activity that brings you joy.",
    "What is something you're looking forward to, and why?",
    "Write about a time when someone supported you.",
    "What is a tradition or ritual you're thankful for?",
    "Describe a favorite meal or food and why it brings you joy.",
    "What made you smile today?",
    "Write about a person who has positively impacted your life.",
    "What is a book, movie, or song you're grateful for?",
    "Describe a recent good meal you enjoyed.",
    "What is something in nature that you appreciate?",
    "Write about a comfortable place in your home.",
    "What is a tool or appliance that makes your life easier?",
    "Describe a recent kind act you witnessed.",
    "What is a skill you're grateful to have learned?",
    "Write about a favorite family tradition.",
    "What is something you use every day that you appreciate?",
    "Describe a moment when you felt truly happy.",
    "What is a favorite holiday memory?",
    "Write about a compliment you received recently.",
    "What is a hobby or activity that you enjoy?",
    "Describe a moment when you felt supported by someone.",
    "What is a small victory you achieved today?",
    "Write about a time when you felt calm and at peace.",
    "What is something you're excited about in the near future?",
    "Describe a favorite scent and why you love it.",
    "Write about a moment when you felt connected to nature.",
    "What is a lesson you've learned from a challenging experience?",
    "Describe a time when you felt proud of yourself.",
    "What is a favorite song that uplifts you?",
    "Write about a person who has inspired you.",
    "What is a physical activity you're grateful for?",
    "Describe a special occasion that brought you joy.",
    "What is a memory that always makes you laugh?",
    "Write about a time when you felt loved.",
    "What is a favorite book that has impacted your life?",
    "What spiritual practice are you grateful for?",
    "Describe a moment when you felt connected to a higher power.",
    "What is a spiritual teaching that has influenced you?",
    "Write about a time when you felt spiritually fulfilled.",
    "What is a sacred place that brings you peace?",
    "Describe a spiritual mentor or guide who has helped you.",
    "What is a spiritual experience that has shaped you?",
    "Write about a moment of deep meditation or prayer.",
    "What spiritual community are you grateful to be a part of?",
    "Describe a spiritual book or text that has inspired you.", 
    "What is a spiritual ritual or ceremony you appreciate?",
    "Write about a time when you felt spiritually supported.",
    "What spiritual tools or symbols are meaningful to you?",
    "Describe a moment when you felt a sense of divine presence.",
    "What is a spiritual lesson you've learned recently?",
    "Write about a time when you experienced spiritual growth.",
    "What spiritual practice helps you find inner peace?",
    "Describe a moment when you felt a deep sense of gratitude during a spiritual practice.",
    "What is a spiritual tradition that resonates with you?",
    "Write about a time when you felt spiritually connected to others.",
    "What spiritual event or retreat are you grateful for attending?",
    "Describe a moment when you felt a sense of awe and wonder.",
    "What is a spiritual quote or affirmation that uplifts you?",
    "Write about a time when you felt aligned with your spiritual path.",
    "What is a spiritual insight that has transformed your perspective?",
    "Describe a moment of spiritual awakening or realization.",
    "What spiritual gift or talent do you feel blessed with?",
    "Write about a time when you felt spiritually rejuvenated.",
    "What is a spiritual tradition you appreciate from another culture?",
    "Describe a moment when you felt unconditional love.",
    "What is something you're grateful for about your health?",
    "Describe a moment when you felt truly content.",
    "What is a favorite time of day and why do you love it?",
    "Write about a moment when you felt inspired.",
    "What is something you're grateful for about your community?",
    "Describe a moment when you felt a sense of belonging.",
    "What is a hobby or interest that brings you joy?",
    "Write about a time when you felt proud of a friend or family member.",
    "What is something you're grateful for about your home?",
    "Describe a moment when you felt a sense of accomplishment.",
    "What is a favorite holiday and why do you love it?",
    "Write about a time when you felt deeply relaxed.",
    "What is something you're grateful for about your work or school?",
    "Describe a moment when you felt a sense of adventure.",
    "What is a favorite quote and why does it resonate with you?",
    "Write about a time when you felt a sense of wonder.",
    "What is something you're grateful for about your pets or animals?",
    "Describe a moment when you felt a sense of purpose.",
    "What is a favorite activity to do with friends or family?",
    "Write about a time when you felt a sense of freedom.",
    "What is a spiritual challenge you've faced and what did you learn from it?",
    "Describe a moment when you felt guided by intuition.",
    "What is a spiritual symbol that holds significant meaning for you?",
    "Write about a time when you felt a profound sense of inner peace.",
    "What is a spiritual goal you're working towards?",
    "Describe a moment when you felt a strong sense of gratitude for life's mysteries.",
    "What is a spiritual practice that helps you stay grounded?",
    "Write about a time when you felt a deep sense of forgiveness.",
    "What is a spiritual lesson you've learned from nature?",
    "Describe a moment when you felt connected to the universe.",
    "What is a spiritual practice that helps you cultivate love and compassion?",
    "Write about a time when you felt a sense of spiritual healing.",
    "What is a spiritual tradition or festival you enjoy?",
    "Describe a moment when you felt a sense of spiritual renewal.",
    "What is a spiritual mentor or teacher you're grateful for?",
    "Write about a time when you felt a deep sense of gratitude for your spiritual journey.",
    "What is a spiritual practice that helps you let go of negativity?",
    "Describe a moment when you felt a sense of unity with all beings.",
    "What is a spiritual experience that has brought you profound insight?",
    "Write about a time when you felt a deep sense of acceptance.",
    "What is something you're grateful for about the weather today?",
    "Describe a moment when you felt a sense of humor and laughter.",
    "What is a favorite book you recently read and why do you appreciate it?",
    "Write about a time when you felt a sense of creativity.",
    "What is something you're grateful for about technology?",
    "Describe a moment when you felt a sense of gratitude for your senses.",
    "What is a favorite place to visit and why do you love it?",
    "Write about a time when you felt a sense of nostalgia.",
    "What is something you're grateful for about your morning routine?",
    "Describe a moment when you felt a sense of gratitude for your emotions.",
    "What is a favorite outdoor activity and why do you enjoy it?",
    "Write about a time when you felt a sense of discovery.",
    "What is something you're grateful for about your evenings?",
    "Describe a moment when you felt a sense of gratitude for your strengths.",
    "What is a favorite indoor activity and why do you enjoy it?",
    "Write about a time when you felt a sense of gratitude for your weaknesses.",
    "What is something you're grateful for about your weekends?",
    "Describe a moment when you felt a sense of gratitude for your challenges.",
    "What is a favorite way to relax and why do you enjoy it?",
    "Write about a time when you felt a sense of gratitude for your achievements.",
    "What is a spiritual practice that helps you find clarity?",
    "Describe a moment when you felt a sense of spiritual surrender.",
    "What is a spiritual lesson you've learned from a mentor or teacher?",
    "Write about a time when you felt a sense of spiritual protection.",
    "What is a spiritual goal you have for the future?",
    "Describe a moment when you felt a deep sense of gratitude for the present moment.",
    "What is a spiritual practice that helps you release fear?",
    "Write about a time when you felt a sense of spiritual empowerment.",
    "What is a spiritual insight you've gained from a challenging experience?",
    "Describe a moment when you felt a sense of spiritual fulfillment.",
    "What is a spiritual practice that helps you cultivate mindfulness?",
    "What is something you enjoyed eating today?",
    "Write about a favorite song and why it makes you happy.",
    "What is a hobby or activity that you love?",
    "Describe a moment when you felt deeply relaxed.",
    "What is a recent gift you received that you're thankful for?",
    "Write about a place you feel safe and comfortable in.",
    "What is a recent act of kindness you experienced?",
    "Describe a moment when you felt supported by someone.",
    "What is a piece of technology that makes your life easier?",
    "Write about a time when you felt a sense of accomplishment.",
    "What is a favorite childhood memory?",
    "Describe a moment when you felt connected to nature.",
    "What is a household item that you appreciate?",
    "Write about a time when you felt inspired by someone.",
    "What is a recent compliment you received?",
    "Describe a moment when you felt proud of yourself.",
    "What is a book or article that impacted you positively?",
    "Write about a time when you had a fun adventure.",
    "What is a favorite piece of clothing you own?",
    "Describe a moment when you felt truly happy.",
    "What is a recent challenge you overcame?",
    "Write about a time when you felt grateful for your health.",
    "What is a recent conversation that made you feel good?",
    "Write about a time when you felt motivated.",
    "What is a personal quality that you're proud of?",
    "Describe a moment when you felt a sense of belonging.",
    "What is a favorite movie or TV show?",
    "Write about a time when you felt grateful for your family.",
    "What is something beautiful you saw today?",
    "Describe a moment when you felt grateful for your friends.",
    "What is a skill you have that you're thankful for?",
    "Write about a time when you felt creative.",
    "What is a favorite way to relax?",
    "Describe a moment when you felt gratitude for your surroundings.",
    "What is a favorite game or activity to do with friends?",
    "Write about a time when you felt supported at work or school.",
    "What is a piece of advice that helped you recently?",
    "Describe a moment when you felt grateful for your independence.",
    "What is a favorite tradition or holiday celebration?",
    "Write about a time when you felt a sense of wonder.",
    "What is a recent success you've had?",
    "Describe a moment when you felt grateful for the weather.",
    "What is something you're passionate about?",
    "Write about a time when you felt content and satisfied.",
    "What is a favorite place to visit?",
    "Describe a moment when you felt grateful for your achievements.",
    "What is a favorite snack or treat?",
    "Write about a time when you felt deeply connected to someone.",
    "Write about a guilty pleasure (but don't feel guilty about it)",
    "Is there a particular memory that makes you smile?",
    "When's the last time you laughed really hard?",
    "Write about your favorite peice of clothing",
    "Write about a treasured memory with a partner or friend",
    "Write about a nice family memory",
    "You could be grateful for a new day",
    "You could be grateful just to be alive",
    "Is there a favorite place where you live that you like to spend time?",
    "Can you remember a silly memory from childhood?",
    "Think of the last time you had a nice surprise",

];

function generatePrompt() {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    document.getElementById("prompt").innerText = prompts[randomIndex];
}

// Generate a prompt when the page loads
window.onload = generatePrompt;
