# Jeopardy!
This app allows users to create questions with corresponding answers, designed so that enough questions are added to create an interactive trivia game. When viewing all questions, the answers are hidden until the user clicks the question. Once viewing the answer, the user has the ability modify the question or answer, as well as the option to delete the question entirely.

## Important Links
  - [Deployed Web Application](https://tylerr36.github.io/jeopardy-client/)
  - [Deployed back-end API](https://secure-plains-22928.herokuapp.com/)
  - [Jeopardy Client Repository](https://github.com/tylerr36/jeopardy-client)

## Setup and Installation
1. Fork and clone this repository
2. Change into the new directory
3. Install dependencies with `npm install`.
4. Run `git checkout -b yournewbranch` with a branch name of your choice in place of "yournewbranch" to create and move to your new branch.

## Technologies Used
  - Express
  - MongoDB
  - Mongoose
  - Node
  - Git

## The Approach
My approach was to first understand what I wanted for an application, which was to allow for users to start with an empty Jeopardy board, and then choose six categories, each of which would have five questions, thus filling the 30-question board. The signed-in user could create a game board from his or her categories, or from the categories of others. After analyzing what could be accomplished within the four day time limit while meeting all project requirements, I decided to focus on allowing users to be able to create and store their own trivia questions, with answers only able to be viewed after an extra click, so that the user could still display his or her questions to others without immediately revealing answers.

Once I had decided what my plan was within the timeframe, I created wireframes, an ERD, and user stories to represent the app's goals

The back end was built prior to the front end. My first step was to create curl scripts to create, destroy, index, show, and update trivia questions. Using Express, I then created routes and a model for my user's trivia questions. When these were in place, I tested each curl script in my terminal and then proceeded to build the front end.

[Entity Relationship Diagram](https://i.imgur.com/txQltbf.png)

## Events
| Verb | URI Pattern | Controller#Action |
|------|-------------|-------------------|
| GET  | /questions    | questions#index     |
| GET  | /questions/:id  | questions#show      |
| GET | /user-questions | questions#userquestions |
| POST  | /questions  | listings#create      |
| PATCH  | /questions/:id  | questions#update      |
| DELETE  | /questions/:id  | questions#destroy      |

## Future Goals
- Create question categories, with five questions being assigned to each category.
- Assign values to questions.
- View categories created by others, and be able to use their and/or categories to fill a 6-category gameboard.
 - Save your selected 6-category board so you can challenge someone else to the same 30 questions.
 - Add a field to submit answers, so that they are later compared against the correct answer, with points being automatically added or deducted based on a correct or incorrect answer.
