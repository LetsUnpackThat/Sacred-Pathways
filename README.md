# Sacred Pathways Assessment Quiz

A beautiful, interactive web-based quiz to help people discover their spiritual temperament among 9 sacred pathways.

## What's Included

- **index.html** - Landing page that introduces the assessment
- **quiz.html** - The 54-question quiz interface with 1-5 rating scale
- **results.html** - Results page showing scores for all 9 pathways
- **quiz-data.js** - All 54 questions with pathway mappings
- **quiz.js** - Quiz functionality and scoring logic
- **results.js** - Results display and pathway linking
- **pathways/** - 9 individual pathway pages (templates ready for your content)

## How to Deploy (GitHub Pages - Free!)

### Option 1: GitHub Pages (Recommended)

1. Create a free GitHub account at https://github.com
2. Create a new repository (call it something like "sacred-pathways-quiz")
3. Upload all these files to the repository
4. Go to Settings → Pages
5. Under "Source", select "main" branch and click Save
6. Your site will be live at: `https://yourusername.github.io/sacred-pathways-quiz`

### Option 2: Netlify (Also Free)

1. Go to https://www.netlify.com
2. Sign up for a free account
3. Drag and drop all these files into Netlify
4. Your site is instantly live at a URL like: `yoursite.netlify.app`

### Option 3: Any Web Host

Simply upload all files to any web hosting service. The quiz is pure HTML/CSS/JavaScript with no server requirements.

## Customizing the Pathway Pages

Each pathway page in the `pathways/` folder has placeholder sections for you to fill in:

- **Characteristics** - Describe this pathway type
- **Spiritual Practices** - Recommend specific practices
- **Challenges & Growth** - Address common struggles
- **Resources** - List books, websites, podcasts, etc.

Just replace the gray placeholder boxes with your actual content!

## How It Works

1. Users answer 54 questions on a 1-5 scale
2. Each question corresponds to one of 9 pathways
3. Scores are calculated (6 questions × max 5 points = 30 max per pathway)
4. Any score of 15+ indicates a primary pathway
5. Users can click through to detailed pages for their top pathways

## File Structure

```
/
├── index.html              (landing page)
├── quiz.html               (54 questions)
├── results.html            (score display)
├── quiz-data.js            (question database)
├── quiz.js                 (quiz logic)
├── results.js              (results logic)
└── pathways/
    ├── naturalist.html
    ├── sensate.html
    ├── traditionalist.html
    ├── ascetic.html
    ├── activist.html
    ├── caregiver.html
    ├── enthusiast.html
    ├── contemplative.html
    └── intellectual.html
```

## Next Steps

1. Deploy the site using one of the options above
2. Fill in the content for each pathway page
3. Test the quiz yourself
4. Share the link!

## Need Help?

- The quiz requires no database or backend
- Works on any device (mobile-friendly)
- All scoring happens in the browser
- No personal data is stored or transmitted

Enjoy your Sacred Pathways Assessment! 🙏
