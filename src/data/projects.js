export const projects = [
  {
    id: 'vehicle-price-prediction',
    title: 'Vehicle Price Prediction',
    description: 'Predicted vehicle selling prices using Linear Regression, Gradient Boosting, and Decision Tree models on a real-world Kaggle dataset, achieving up to 99% R² accuracy.',
    tools: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Gradient Boosting', 'Decision Tree'],
    imageUrl: '/vehicle/img21.jpg',
    github: 'https://github.com/sanjanabansal23/vehicle-price-prediction',
    demo: '',
    sections: [
      {
        heading: 'Overview',
        text: 'Vehicle prices are influenced by a wide range of factors — from fuel type and transmission to mileage and ownership history. This project explores the automotive pricing landscape using a real-world dataset from CardDekho on Kaggle, aiming to build a model that accurately predicts a vehicle\'s selling price. I aim to find out the multitude of factors and variables that influence the prices of vehicles, whether new or used, in a constantly changing automotive landscape.',
      },
      {
        heading: 'The Dataset',
        text: 'The dataset was obtained from Kaggle (CardDekho) and contains columns including car name, year, selling price, present price, kilometers driven, fuel type, seller type, transmission, and number of previous owners.',
        image: '/vehicle/img01.png',
        caption: 'Loading and previewing the dataset'
      },
      {
        heading: 'Experiment 1: Linear Regression',
        text: 'For my first experiment I chose to start with a normal linear regression model to see whether it fits my data well. Linear regression shows the relationship between independent and dependent variables, and is evaluated using metrics like MSE, MAE, and R².',
      },
      {
        heading: 'Experiment 1: Preprocessing',
        text: 'Preprocessing is done to remove any null, duplicate, or empty values. I first checked for null values — the dataset had none.',
        // image: '/vehicle/img02.png',
        // caption: 'Checking for null values'
      },
      {
        text: 'I then checked for duplicates and dropped them if any were found.',
        image: '/vehicle/img03.png',
        caption: 'Checking for and dropping duplicates'
      },
      {
        heading: 'Experiment 1: Data Visualization',
        text: 'For visualizing the data I used Matplotlib to create bar graphs comparing different columns, which helped me decide which features to use for prediction.',
        image: '/vehicle/img04.png',
        caption: 'Bar graphs comparing key columns'
      },
      {
        text: 'I also created a heatmap to view the correlation between all columns.',
        image: '/vehicle/img05.png',
        caption: 'Heatmap showing correlations between columns'
      },
      {
        text: 'Finally I plotted the correlation between present price and selling price — showing a clear positive relationship between the two.',
        image: '/vehicle/img06.png',
        caption: 'Correlation between present price and selling price'
      },
      {
        heading: 'Experiment 1: Modeling',
        text: 'I trained a Linear Regression model on my X and Y coordinates.',
        image: '/vehicle/img07.png',
        caption: 'Training the Linear Regression model'
      },
      {
        text: 'I then loaded the model and fit it to my data.',
        image: '/vehicle/img08.png',
        caption: 'Fitting the model to the data'
      },
      {
        heading: 'Experiment 1: Evaluation',
        text: 'I calculated MSE, MAE, and R² score. My R² came out to 82%, showing this model fits the data reasonably well as a baseline.',
        image: '/vehicle/img09.png',
        caption: 'Evaluation metrics for Linear Regression — R² of 82%'
      },
      {
        heading: 'Experiment 2: Gradient Boosting',
        text: 'For my second experiment I used a Gradient Boosting Regressor. Boosting is an ensemble method that trains models sequentially — each new model tries to correct the errors of the previous one, combining several weak learners into a strong one.',
      },
      {
        heading: 'Experiment 2: Data Visualization',
        text: 'The first visualization I did was a heatmap to find correlations between columns.',
        image: '/vehicle/img10.png',
        caption: 'Heatmap for Experiment 2'
      },
      {
        text: 'The second visualization showed which features most affect the selling price.',
        image: '/vehicle/img11.png',
        caption: 'Feature correlation with selling price'
      },
      {
        heading: 'Experiment 2: Preprocessing',
        text: 'For this experiment I encoded categorical columns like fuel type and transmission, since the Gradient Boosting model only works with numerical data.',
        image: '/vehicle/img12.png',
        caption: 'Encoding categorical columns — part 1'
      },
      {
        image: '/vehicle/img13.png',
        caption: 'Encoding categorical columns — part 2'
      },
      {
        heading: 'Experiment 2: Modeling',
        text: 'I loaded the Gradient Boosting Regressor and applied it to my data.',
        image: '/vehicle/img14.png',
        caption: 'Loading the Gradient Boosting Regressor'
      },
      {
        image: '/vehicle/img15.png',
        caption: 'Fitting the Gradient Boosting model'
      },
      {
        heading: 'Experiment 2: Evaluation',
        text: 'My R² score for this experiment was 99% — a massive improvement over the 82% from Linear Regression. This shows the Gradient Booster fits my data significantly better.',
        image: '/vehicle/img16.png',
        caption: 'Evaluation metrics for Gradient Boosting — R² of 99%'
      },
      {
        heading: 'Experiment 3: Decision Tree',
        text: 'For my last experiment I used a Decision Tree — a hierarchical model that splits data based on feature thresholds to minimize prediction error. It is non-parametric and works well for both classification and regression tasks.',
      },
      {
        heading: 'Experiment 3: Data Visualization',
        text: 'I used the same visualizations from Experiment 2 but showed the graphs after encoding the columns.',
        image: '/vehicle/img17.png',
        caption: 'Encoded data visualization for Experiment 3'
      },
      {
        heading: 'Experiment 3: Preprocessing',
        text: 'Preprocessing was mostly the same as Experiment 2. I renamed columns and created a new dataframe to avoid confusion between experiments.',
        image: '/vehicle/img18.png',
        caption: 'Renaming columns and creating a new dataframe'
      },
      {
        heading: 'Experiment 3: Modeling',
        text: 'I applied the Decision Tree Regressor to my data.',
        image: '/vehicle/img19.png',
        caption: 'Fitting the Decision Tree model'
      },
      {
        heading: 'Experiment 3: Evaluation',
        text: 'I got an R² score of 97% — lower than the Gradient Booster but higher than Linear Regression. This shows a Decision Tree is still a strong fit for this data.',
        image: '/vehicle/img20.png',
        caption: 'Evaluation metrics for Decision Tree — R² of 97%'
      },
      {
        heading: 'Conclusion',
        text: 'Across all three experiments, Gradient Boosting performed best with 99% R², followed by Decision Tree at 97% and Linear Regression at 82%. This project showed that boosting methods significantly outperform simple regression for pricing problems, and that careful feature encoding is just as important as model choice. Cross-validation and appropriate evaluation metrics are essential to ensure models generalize well to unseen data.',
      },
    ],
  },
  {
    id: 'foodie-map',
    title: 'Foodie Map',
    description: 'A end-to-end mobile app UI/UX design for discovering restaurants, booking tables, and saving favorites. Designed solo in Figma.',
    tools: ['Figma', 'FigJam'],
    imageUrl: '/foodiemap/main.webp',
    github: '',
    demo: 'https://www.figma.com/proto/XI4BoN8Aewg7LAnhtJ6KkX/Assignment-7?node-id=0-1&t=rvBJ1fXkIKwmBce6-1',
    sections: [
      {
        heading: 'Overview',
        text: 'Foodie Map is a mobile app concept designed to help users discover top-rated restaurants and cafés nearby, book tables in seconds, and save their favorite spots for later. The project was designed end-to-end solo using Figma, covering everything from onboarding to booking confirmation.',
      },
      {
        heading: 'The Problem',
        text: 'Finding and booking restaurants is often a fragmented experience: users switch between Google Maps, Yelp, and OpenTable just to find a place and reserve a table. Foodie Map aimed to bring discovery, decision-making, and booking into one seamless, visually driven mobile experience.',
      },
      {
        heading: 'Onboarding',
        text: 'The onboarding flow introduces the app\'s three core value propositions: discovering hidden gems, booking tables instantly, and saving favorite spots. Each screen pairs a full-bleed food photograph with a bold headline and a simple Next CTA, keeping the experience immersive and fast.',
        image: '/foodiemap/img01.png',
        small: true
      },
      {
        images: [
          { url: '/foodiemap/img02.png'},
          { url: '/foodiemap/img03.png'},
          { url: '/foodiemap/img04.png'},
        ]
      },
      {
        heading: 'Authentication',
        text: 'The auth flow covers sign up, sign in, and forgot password. The design keeps forms minimal and focused: one action per screen with clear labels and a consistent teal accent color for CTAs.',
        images: [
          { url: '/foodiemap/signup.png', caption: 'Create Account' },
          { url: '/foodiemap/signin.png', caption: 'Sign In' },
          { url: '/foodiemap/forgotpassword.png', caption: 'Forgot Password' },
        ]
      },
      {
        heading: 'Home page',
        text: 'The home screen greets the user with a time-aware message and surfaces nearby restaurants in a card grid. Each card shows a photo, name, cuisine, price range, rating, and distance. Quick filter chips (Sushi, Pizza, Cafe, Mexican) let users narrow results without leaving the screen.',
        image: '/foodiemap/homepage.png',
        caption: 'Home screen',
        small: true
      },
      {
        heading: 'Search & Filters',
        text: 'The search screen shows results in a full-width card format for easy scanning. A filter panel slides up from the bottom, letting users filter by price range ($–$$$$), minimum rating, and cuisine type: all without navigating away from results.',
        images: [
          { url: '/foodiemap/search.png', caption: 'Search results' },
          { url: '/foodiemap/Filter.png', caption: 'Filter panel: price, rating, and cuisine filters' },
          { url: '/foodiemap/Filtered.png', caption: 'Filtered results applied' },
        ]
      },
      {
        heading: 'Restaurant Detail',
        text: 'The restaurant detail page leads with a hero image, then surfaces the key information a user needs to make a decision: rating, cuisine tags, description, distance, and hours. Popular menu items are shown with photos and prices, and a persistent Book Table CTA stays anchored at the bottom.',
        image: '/foodiemap/Details.png',
        caption: 'Restaurant detail: Margherita House',
        small: true
      },
      {
        heading: 'Booking Flow',
        text: 'The booking screen lets users select the number of guests, date, time slot, and payment method in a single scrollable view. Time slots are shown as horizontal chips for quick selection. Payment options include Apple Pay and Credit Card. A confirmation screen closes the loop with a success state.',
         images: [
          { url: '/foodiemap/Booking table.png', caption: 'Booking screen: select date, time, and payment' },
          { url: '/foodiemap/Booking confirmed.png', caption: 'Booking confirmed' }
        ]
      },
      {
        heading: 'Favorites',
        text: 'The favorites screen shows saved restaurants in the same card grid as the home screen for visual consistency. A heart icon on each card signals the saved state. Adding a new favorite triggers a full-screen confirmation state with a clear CTA to view favorites.',
        images: [
          { url: '/foodiemap/favorites.png', caption: 'Saved places screen' },
          { url: '/foodiemap/Favorites added.png', caption: 'Added to Favorites confirmation' }
        ]
      },
      {
        heading: 'Profile',
        text: 'The profile screen gives users a quick overview of their activity: bookings, reviews, and favorites count — alongside navigation to manage their account, bookings, and settings.',
        image: '/foodiemap/account.png',
        caption: 'Profile screen',
        small: true
      },
      {
        heading: 'Design Decisions',
        text: 'The color system centers on a teal accent (#00897B range) against a clean white background, giving the app a fresh and appetizing feel without being loud. Typography uses heavy weights for headings to create strong visual hierarchy on small screens. Card-based layouts were chosen throughout to make the UI scannable and touch-friendly. Every screen was designed with a consistent bottom navigation bar to ensure users always know where they are in the app. Scroll up and click on "Live demo" too see the prototype in Figma!',
      },
    ],
  },
  {
  id: 'mosaic-music',
  title: 'Mosaic Music',
  description: 'A social music web app where users can search songs via the Deezer API, build playlists, like tracks, and get personalized recommendations — built with a team of 5 using Python and PostgreSQL.',
  tools: ['Python', 'PostgreSQL', 'JSON', 'Deezer API'],
  imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  github: 'https://github.com/yourusername/ITSC-4155-project8',
  demo: '',
  sections: [
    {
      heading: 'Overview',
      text: 'Mosaic Music is a beta social music application built for users who are enthusiastic about categorizing and sharing music with others. It integrates the Deezer API to let users search for songs, artists, and albums, build playlists, and discover new music through a personalized recommendations page.',
    },
    {
      heading: 'The Problem',
      text: 'Music discovery is often a solo experience — existing platforms don\'t make it easy to share taste, build collaborative playlists, or see what others are listening to. Mosaic Music was built to bring a social layer to music, letting users follow others, view their profiles, and share playlists in one place.',
    },
    {
      heading: 'My Role',
      text: 'I served as Product Owner on a team of 5, working in an Agile/Scrum framework. As Product Owner I defined and prioritized the feature backlog, wrote user stories, and made decisions on scope and direction throughout the development sprints. I also contributed directly to development alongside the team.',
    },
    {
      heading: 'Features',
      text: 'The app was built around five core features: searching and listening to songs, artists, and albums via the Deezer API; user authentication with profile creation and photo upload; playlist creation and song management; a likes system with an artist and song recommendation engine based on listening history; and social profile pages to discover and follow other users.',
    },
    {
      heading: 'Tech Stack',
      text: 'The backend was built in Python with PostgreSQL handling all data persistence — user accounts, playlists, likes, and relationships. The Deezer API was integrated to fetch real music data including track previews, album art, and artist information. JSON was used for API communication between the frontend and backend services.',
    },
    {
      heading: 'Demo',
      text: 'A full walkthrough of the application including search, playlist creation, and the recommendations page is available in the project README on GitHub.',
    },
  ],
},
];