// All 54 questions with their corresponding pathways
const questions = [
    {
        id: 1,
        text: "I feel closest to God when I see him in the needy, the poor, the sick, and the imprisoned. I feel God's presence most strongly when I am sitting quietly beside the bed of someone who is lonely or ill or taking a meal to someone in need. You can count on me to offer a ride or volunteer for helping activities.",
        pathway: "Caregiver"
    },
    {
        id: 2,
        text: "I feel closest to God when I'm participating in a familiar form of worship that has memories dating back to my childhood. Rituals and traditions move me more than anything else.",
        pathway: "Traditionalist"
    },
    {
        id: 3,
        text: "I get frustrated when the church focuses too much on feelings and spiritual experience. Of far more importance is the need to understand the Christian faith and have proper doctrine.",
        pathway: "Intellectual"
    },
    {
        id: 4,
        text: "I feel cut off if I have to spend too much time indoors, just listening to speakers or singing songs. Nothing makes me feel closer to God than being outside.",
        pathway: "Naturalist"
    },
    {
        id: 5,
        text: "I feel closest to God when I am alone and there is nothing to distract me from focusing on his presence.",
        pathway: "Ascetic"
    },
    {
        id: 6,
        text: "I get very frustrated if I see apathetic Christians who don't become active. I want to drop everything else I'm doing and help the church overcome its apathy.",
        pathway: "Activist"
    },
    {
        id: 7,
        text: "God is an exciting God, and we should be excited about worshiping him. I don't understand how some Christians can say they love God, and then act like they're going to a funeral whenever they walk into church.",
        pathway: "Enthusiast"
    },
    {
        id: 8,
        text: "I feel closest to God when my emotions are awakened, when God quietly touches my heart, tells me that he loves me, and makes me feel like I'm his closest friend. I would rather be alone with God, contemplating his love, than participating in a formal liturgy or being distracted by a walk outside.",
        pathway: "Contemplative"
    },
    {
        id: 9,
        text: "I enjoy attending a \"high church\" service with incense and formal Communion or Eucharist.",
        pathway: "Sensate"
    },
    {
        id: 10,
        text: "I feel closest to God when I learn something new about him that I didn't understand before. My mind needs to be stimulated. It's very important to me that I know exactly what I believe.",
        pathway: "Intellectual"
    },
    {
        id: 11,
        text: "The most difficult times in my faith are when I can't feel God's presence within me.",
        pathway: "Contemplative"
    },
    {
        id: 12,
        text: "I feel closest to God when my heart is sent soaring and I feel like I want to burst, worship God all day long, and shout out his Name. Celebrating God and his love is my favorite form of worship.",
        pathway: "Enthusiast"
    },
    {
        id: 13,
        text: "I grow weary of Christians who spend their time singing songs while a sick neighbor goes without a hot meal or a family in need doesn't get help fixing their car.",
        pathway: "Caregiver"
    },
    {
        id: 14,
        text: "I feel closest to God when I'm cooperating with him in standing up for his justice: writing letters to government officials and newspaper editors, picketing at an abortion clinic, urging people to vote, or becoming familiar with current issues.",
        pathway: "Activist"
    },
    {
        id: 15,
        text: "I would describe my faith as more \"internal\" than \"external.\"",
        pathway: "Ascetic"
    },
    {
        id: 16,
        text: "Individualism within the church is a real danger. Christianity is a corporate faith, and most of our worship should have a corporate expression.",
        pathway: "Traditionalist"
    },
    {
        id: 17,
        text: "I feel closest to God when I'm in a church that allows my senses to come alive – when I can see, smell, hear, and almost taste his majesty.",
        pathway: "Sensate"
    },
    {
        id: 18,
        text: "I feel closest to God when I'm surrounded by what he has made – the mountains, the forests, or the sea.",
        pathway: "Naturalist"
    },
    {
        id: 19,
        text: "The words tradition and history are very appealing to me.",
        pathway: "Traditionalist"
    },
    {
        id: 20,
        text: "The words courageous confrontation and social activism are very appealing to me.",
        pathway: "Activist"
    },
    {
        id: 21,
        text: "The words concepts and truth are very appealing to me.",
        pathway: "Intellectual"
    },
    {
        id: 22,
        text: "The words sensuous, colorful, and aromatic are very appealing to me.",
        pathway: "Sensate"
    },
    {
        id: 23,
        text: "The words silence, solitude, and discipline are very appealing to me.",
        pathway: "Ascetic"
    },
    {
        id: 24,
        text: "The words service and compassion are very appealing to me.",
        pathway: "Caregiver"
    },
    {
        id: 25,
        text: "The words celebration and joy are very appealing to me.",
        pathway: "Enthusiast"
    },
    {
        id: 26,
        text: "The words love, intimacy, and heart are very appealing to me.",
        pathway: "Contemplative"
    },
    {
        id: 27,
        text: "Taking an overnight retreat by myself at a monastery where I could spend large amounts of time alone in a small room, praying to God and studying his Word, and fasting for one or more days are all activities I would enjoy.",
        pathway: "Ascetic"
    },
    {
        id: 28,
        text: "I sense God's power when I am counseling a friend who has lost a job, preparing meals for or fixing the car of a family in need, or spending a week at an orphanage in Mexico.",
        pathway: "Caregiver"
    },
    {
        id: 29,
        text: "I would enjoy attending a workshop on learning to worship through dance or attending several worship sessions with contemporary music. I expect that God is going to move in some unexpected ways.",
        pathway: "Enthusiast"
    },
    {
        id: 30,
        text: "I feel close to God when I participate in several hours of uninterrupted study time – reading God's Word or good Christian books and then perhaps having an opportunity to teach [or participate in a discussion with] a small group.",
        pathway: "Intellectual"
    },
    {
        id: 31,
        text: "I would prefer to worship God by spending an hour beside a small brook than by participating in a group service.",
        pathway: "Naturalist"
    },
    {
        id: 32,
        text: "I'd have a difficult time worshiping in a church building that is plain and lacks a sense of awe or majesty. Beauty is very important to me, and I have a difficult time worshiping through second-rate Christian art or music.",
        pathway: "Sensate"
    },
    {
        id: 33,
        text: "Activities like confronting a social evil, attending a meeting to challenge the new curriculum before the local school board, and volunteering on a political campaign are important to me.",
        pathway: "Activist"
    },
    {
        id: 34,
        text: "I really enjoy having thirty minutes of uninterrupted time a day to sit in quiet prayer and \"hold hands\" with God, writing love letters to him and enjoying his presence.",
        pathway: "Contemplative"
    },
    {
        id: 35,
        text: "Participating in a formal liturgy or prayer-book service, developing symbols that I could place in my car, home, of office, and developing a Christian calendar for our family to follow are activities that I would enjoy.",
        pathway: "Traditionalist"
    },
    {
        id: 36,
        text: "If I could escape to a garden to pray on a cold day, walk through a meadow on a warm day, and take a trip by myself to the mountains on another day, I would be very happy.",
        pathway: "Naturalist"
    },
    {
        id: 37,
        text: "I would enjoy reading the book A Place Apart: Monastic Prayer and Practice for Everyone.",
        pathway: "Ascetic"
    },
    {
        id: 38,
        text: "A book entitled 99 Ways to Help Your Neighbor would be very appealing to me.",
        pathway: "Caregiver"
    },
    {
        id: 39,
        text: "A book called The Beauty of Worship would be appealing to me.",
        pathway: "Sensate"
    },
    {
        id: 40,
        text: "A book on church dogmatics and doctrines would be appealing to me.",
        pathway: "Intellectual"
    },
    {
        id: 41,
        text: "I would enjoy reading the book The Mystery and Excitement of Walking with God.",
        pathway: "Enthusiast"
    },
    {
        id: 42,
        text: "A book called Nature's Sanctuaries: A Picturebook would be appealing to me.",
        pathway: "Naturalist"
    },
    {
        id: 43,
        text: "A book titled Symbolism and Liturgy in Personal Worship would be appealing to me.",
        pathway: "Traditionalist"
    },
    {
        id: 44,
        text: "The book written by Frank Schaeffer, A Time for Anger, would be an important book for me to read.",
        pathway: "Activist"
    },
    {
        id: 45,
        text: "I would enjoy reading The Transforming Friendship.",
        pathway: "Contemplative"
    },
    {
        id: 46,
        text: "I spend more money on books than music tapes.",
        pathway: "Intellectual"
    },
    {
        id: 47,
        text: "I would really enjoy spending time on a night watch, taking a short vow of silence, simplifying my life.",
        pathway: "Ascetic"
    },
    {
        id: 48,
        text: "I would rather nurse someone to health or help someone repair their house than teach an adult Sunday school class, go on a prayer and fasting retreat, or take a lonely walk in the woods.",
        pathway: "Caregiver"
    },
    {
        id: 49,
        text: "Seeing God's beauty in nature is more moving to me than understanding new concepts, participating in a formal religious service, or participating in social causes.",
        pathway: "Naturalist"
    },
    {
        id: 50,
        text: "I spend more money on music and worship tapes than on Christian books.",
        pathway: "Enthusiast"
    },
    {
        id: 51,
        text: "When I think of God, I think of love, friendship, and adoration more than anything else.",
        pathway: "Contemplative"
    },
    {
        id: 52,
        text: "I would really enjoy using drawing exercises or art to improve my prayer life.",
        pathway: "Sensate"
    },
    {
        id: 53,
        text: "I would like to awaken the church from its apathy.",
        pathway: "Activist"
    },
    {
        id: 54,
        text: "I would really enjoy developing a personal rule [or ritual] of prayer.",
        pathway: "Traditionalist"
    }
];
