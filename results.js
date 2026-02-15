// Pathway information
const pathwayInfo = {
    'Naturalist': {
        slug: 'naturalist',
        description: 'Loves God outdoors, surrounded by creation'
    },
    'Sensate': {
        slug: 'sensate',
        description: 'Loves God through the senses and beauty'
    },
    'Traditionalist': {
        slug: 'traditionalist',
        description: 'Loves God through ritual and symbol'
    },
    'Ascetic': {
        slug: 'ascetic',
        description: 'Loves God in solitude and simplicity'
    },
    'Activist': {
        slug: 'activist',
        description: 'Loves God through confronting injustice'
    },
    'Caregiver': {
        slug: 'caregiver',
        description: 'Loves God by serving others'
    },
    'Enthusiast': {
        slug: 'enthusiast',
        description: 'Loves God through celebration and mystery'
    },
    'Contemplative': {
        slug: 'contemplative',
        description: 'Loves God through adoration and intimacy'
    },
    'Intellectual': {
        slug: 'intellectual',
        description: 'Loves God through learning and study'
    }
};

// Load and display scores
document.addEventListener('DOMContentLoaded', function() {
    const scoresData = sessionStorage.getItem('sacredPathwaysScores');
    
    if (!scoresData) {
        window.location.href = 'index.html';
        return;
    }
    
    const scores = JSON.parse(scoresData);
    
    // Convert to array and sort by score (highest first)
    const sortedScores = Object.entries(scores)
        .map(([pathway, score]) => ({ pathway, score }))
        .sort((a, b) => b.score - a.score);
    
    // Maximum possible score is 30 (6 questions × 5 points each)
    const maxScore = 30;
    
    // Display scores
    const scoresGrid = document.getElementById('scores-grid');
    sortedScores.forEach((item, index) => {
        const isHighScore = item.score >= 15;
        const percentage = (item.score / maxScore) * 100;
        
        const scoreCard = document.createElement('div');
        scoreCard.className = `pathway-score ${isHighScore ? 'high-score' : ''}`;
        scoreCard.style.animationDelay = `${index * 0.1}s`;
        scoreCard.onclick = () => window.location.href = `pathways/${pathwayInfo[item.pathway].slug}.html`;
        
        scoreCard.innerHTML = `
            <div class="pathway-name">${item.pathway}</div>
            <div class="pathway-bar">
                <div class="pathway-bar-fill" style="width: ${percentage}%"></div>
            </div>
            <div class="pathway-value">${item.score}</div>
            ${isHighScore ? '<span class="high-score-badge">Primary</span>' : ''}
        `;
        
        scoresGrid.appendChild(scoreCard);
    });
    
    // Display high-scoring pathways with links
    const highScorePathways = sortedScores.filter(item => item.score >= 15);
    
    if (highScorePathways.length > 0) {
        const primaryPathwaysDiv = document.getElementById('primary-pathways');
        
        const heading = document.createElement('h3');
        heading.textContent = 'Explore Your Primary Pathways:';
        primaryPathwaysDiv.appendChild(heading);
        
        const linksContainer = document.createElement('div');
        linksContainer.className = 'pathway-links';
        
        highScorePathways.forEach(item => {
            const link = document.createElement('a');
            link.href = `pathways/${pathwayInfo[item.pathway].slug}.html`;
            link.className = 'pathway-link';
            link.textContent = item.pathway;
            linksContainer.appendChild(link);
        });
        
        primaryPathwaysDiv.appendChild(linksContainer);
    }
});
