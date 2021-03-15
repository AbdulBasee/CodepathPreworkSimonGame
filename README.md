# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **AbdulBaseer Mahmood**

Time spent: **30** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](your-link-here)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[https://freshman.tech/simon-game/]
[https://en.wikipedia.org/wiki/Simon_(game)]


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[The main challenge was the logic of making the computer repeat the pattern randomly. Since, it had been a long time that 
I had not use Javascript, it took me some time to rethink about the logic of random selection of the buttons by the computer
First of all, since every programming language has some built-in random functions, it struck my mind to use it in javascript.
After some research I came across W3 school's javascript tutorial about random module in javascript. After reading about
the random module, I did use visual studio code to do some experiment with random module. The next problem I faced was
that since Math.random() returns floating point number, my code was breaking. I again had to debug my code to find the error.
To fix this issue I used Math.floor to get rounded number in integer. The other major problem I faced was with images inside div.
When I was using i tag icons inside div, the buttons were no longer clickable. To fix this issue, I had to use background propery in CSS for inserting pictures 
for the buttons.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[I have many questions regarding web development. I came to know so many concepts about development from this prework that will
enable me to learn more indepth about the web development. I wonder how complex web pages such as Facebook, and Amazon became so developed with
millions of users. The next question I have is about the security aspect of the web developlment. How millions of users do online transactions daily using online banking and other transaction hubs?
How opensource projects like visual studio code's extenstion is getting innovative everyday by contribution of millions of web developers.
]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[Since I was taking multiple classes this semester and with mid-term, I couldn't complete the entire optional part of the project. If I had more time, I would
add a timer that would let the player to press the buttons for certain number of seconds. For instance, I would add a function called "countTime()" that would
keep track of the timer and let player know that they have few seconds left for their turn. The next thing I would do would be to add more buttons and make it multiplayer instead of single two player. There 
are infinite ways of endhancing the code, but I learnt by following the tutorials and making the code work.



## License

    Copyright [AbdulBaseer Mahmood]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.