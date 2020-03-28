<div align="center">
    <img  src="https://res.cloudinary.com/dajuujhvs/image/upload/v1584974863/Simon/Title_yaufra.png" alt="Main Screen screen for pc">
</div>
<!-- contents -->

## Contents

- [Contents](#contents)
- [Overview](#overview)
- [UX](#ux)
    - [user](#User)
    - [design](#design)
       - [scope](#scope)
       - [audio](#audio)
       - [visual](#visual)      
- [Wireframes](#wireframes)
    - [PC Mockups](#pc-mockups)
    - [Tablet Mockups](#tablet-mockups)
    - [Smartphone Mockups](#smartphone-mockups)
    - [Screen Shots](#screenshots)
- [Features](#features)
    - [Quotes API](#quotes-api)
    - [Game Modes](#game-modes)
    - [Themes](#themes)
    - [Favicon](#favicon)
    - [Modal](#modal)
    - [Game Buttons](#game-buttons)
    - [Title texts](#logo-and-game-over-text)
    - [Help menu](#help-menu)
    - [Settings menu](#settings-menu)
    - [Game Over menu](#game-over-menu)
    - [Game screen](#game-screen)
    - [Not implemented](#features-left-to-implement)  
- [Technologies Used](#technologies-used)
- [Other Tools](#other-tools-used)
- [Testing](#testing)
    - [Markup](#w3c-markuphttpsvalidatorw3org)
    - [CSS](#w3c-csshttpsjigsaww3orgcss-validator)
    - [Auto Prefixing](#autoprefixerhttpsautoprefixergithubio)
    - [jshint](#jshinthttpsjshintcom)
    - [Pycharm](#pycharmhttpswwwjetbrainscompycharm)
    - [Devices](#devices-and-browsers)
    - [user testing](#user-testing)
    - [jasmine](#jasmin)
- [Deployment](#deployment)
    - [Cloning](#cloning)
    - [Deploying](#deploying)
    - [Contribution](#contribution)
- [Credits](#credits)
  - [Content](#content)
  - [Media](#media)
  - [Acknowledgements](#acknowledgements)
  - [Other](#other)

<!-- overview -->

## Overview
Simon is not only a fun and challenging game but also a tool to help improve memory. This particular iteration of the 1978 classic game has four game modes. 
Each mode brings on a new set of challenges that add a modern twist to the game. There is also a random inspirational quote shown at the beginning of each game to help mentally prepare you for the challenge. 
The use of themes also make for an interesting change of scenery. you can find the deployed game here: https://frozenaught.github.io/Milestone-2---Simon-Game/

<!-- Top -->


<div align="center">

---
[Top](#Contents)

---

</div>

<!-- ux -->

## UX

The goal of this project was to recreate Simon, the classic 1978 electronic game in a more modern software form. 

### User
As a user ...
- I want a way to improve my memory and coordination in a fun but challenging way. 
- I would like an application that I can use on my computer but also one that is available on my mobile devices.
- I would like the application to have both visual and auditory cues.
- I would like to be able to read the instructions for the game without leaving the game.
- I would like various game modes to challenge myself in fun and interesting ways.
- I would like the game to show me when I hit the wrong button.
- I would like an endless game experience that will increase in speed incrementally.
- I would like to see my score after each game as well as my best score.
- I would like the game to have different themes to make it more customizable to mey own linking.

<!-- Top -->


<div align="center">

---
[Top](#Contents)

---

</div>

### Design

#### Scope
The goal of this project was to recreate the classic 1978 electronic game called Simon. This is a more modern approach and is focused on delivering a clean and responsive user interface. 
Keeping any effects subtle but still notable, without overwhelming the user with too much information at once makes for a simple but fun endless game.
 

#### Audio
Audio plays a big part in the experience of the game and because of this, most of the audio assets used are original. All the audio files are both in mp3 and Ogg format to ensure compatibility on a wide range of devices.

#### Visual
I wanted the experience to feel like a modern game to achieve this I made use of some assets that I purchased. When it came time to create the main game buttons I used very saturated colours and added some visual effects to indicate that the button had been activated. 


---

### Wireframes
Before starting the project I used [Balsamiq](https://balsamiq.com/) to create the following wireframes. The licence for the software was provided by Code Institute.
Here You can find my [Balsamiq project files](/Wireframes/) as well as higher resolution wireframes.


#### PC Mockups

<br>

<!-- Main Screen PC -->
<img src="https://res.cloudinary.com/dajuujhvs/image/upload/c_scale,w_300/v1584982757/Simon/wireframes/Main_Screen_-_WEB_bzhhgh.png" alt="Main Screen screen for pc">

<!-- Game Screen PC -->
<img src="https://res.cloudinary.com/dajuujhvs/image/upload/c_scale,w_300/v1584982757/Simon/wireframes/Game_Screen_-_WEB_dyqizn.png" alt="Game screen for pc">

<!-- Settings Screen PC -->
<img src="https://res.cloudinary.com/dajuujhvs/image/upload/c_scale,w_300/v1584982757/Simon/wireframes/Settings_-_WEB_byhb2b.png" alt="Game settings screen for pc">

<!-- Game Over Screen PC -->
<img src="https://res.cloudinary.com/dajuujhvs/image/upload/c_scale,w_300/v1584982756/Simon/wireframes/Game_Over_-_WEB_q5ldla.png" alt="Game Over screen for pc">

<!-- Top -->


<div align="center">

---
[Top](#Contents)

---

</div>

#### Tablet Mockups

<br>

<!-- Main Screen iPad -->
<img src="https://res.cloudinary.com/dajuujhvs/image/upload/c_scale,w_300/v1584982757/Simon/wireframes/Main_Screen_-_iPad_ylhkfb.png" alt="Main Screen screen for iPad">

<!-- Game Screen iPad -->
<img src="https://res.cloudinary.com/dajuujhvs/image/upload/c_scale,w_300/v1584982757/Simon/wireframes/Game_Screen_-_iPad_zg6bim.png" alt="Game screen for iPad">

<!-- Settings Screen iPad -->
<img src="https://res.cloudinary.com/dajuujhvs/image/upload/c_scale,w_300/v1584982757/Simon/wireframes/Settings_-_iPad_eanauv.png" alt="Game settings screen for iPad">

<!-- Game Over Screen iPad -->
<img src="https://res.cloudinary.com/dajuujhvs/image/upload/c_scale,w_300/v1584982757/Simon/wireframes/Game_Over_-_iPad_gxu4vw.png" alt="Game Over screen for iPad">

<!-- Top -->


<div align="center">

---
[Top](#Contents)

---

</div>

#### Smartphone Mockups

<br>

<!-- Main Screen iPhone -->
<img src="https://res.cloudinary.com/dajuujhvs/image/upload/c_scale,w_300/v1584982757/Simon/wireframes/Main_Screen_-_iPhone_xwveb9.png" alt="Main Screen screen for iPhone">

<!-- Game Screen iPhone -->
<img src="https://res.cloudinary.com/dajuujhvs/image/upload/c_scale,w_300/v1584982757/Simon/wireframes/Game_Screen_-_iPhone_i0rhfi.png" alt="Game screen for iPhone">

<!-- Settings Screen iPhone -->
<img src="https://res.cloudinary.com/dajuujhvs/image/upload/c_scale,w_300/v1584982757/Simon/wireframes/Settings_-_iPhone_tqtut6.png" alt="Game settings screen for iPhone">

<!-- Game Over Screen iPhone -->
<img src="https://res.cloudinary.com/dajuujhvs/image/upload/c_scale,w_300/v1584982757/Simon/wireframes/Game_Over_-_iPhone_ttmzvn.png" alt="Game Over screen for iPhone">

<!-- Top -->


<div align="center">

---
[Top](#Contents)

---

</div>

#### ScreenShots

<!-- Main Screen PC -->
<img src="https://res.cloudinary.com/dajuujhvs/image/upload/c_scale,w_300/v1584981568/Simon/Screenshots/Main_PC_qnx3nf.png" alt="Main Screen game screen for pc">
<!-- Game Screen PC -->
<img src="https://res.cloudinary.com/dajuujhvs/image/upload/c_scale,w_300/v1584981568/Simon/Screenshots/Game_PC_klrnko.png" alt="Game screen for pc">
<!-- Game Over Screen PC -->
<img src="https://res.cloudinary.com/dajuujhvs/image/upload/c_scale,w_300/v1584981568/Simon/Screenshots/Game_Over_PC_ekicut.png" alt="Game Over screen for pc">
<!-- Main Screen Mobile -->
<img src="https://res.cloudinary.com/dajuujhvs/image/upload/c_scale,w_300/v1584981568/Simon/Screenshots/Main_Mobile_hwla7w.png" alt="Main Screen game screen for mobile">
<!-- Game Screen Mobile -->
<img src="https://res.cloudinary.com/dajuujhvs/image/upload/c_scale,w_300/v1584981568/Simon/Screenshots/Game_Mobile_nqyzon.png" alt="Game screen for mobile">
<!-- Game Over Screen Mobile -->
<img src="https://res.cloudinary.com/dajuujhvs/image/upload/c_scale,h_300/v1584981568/Simon/Screenshots/Game_Over_Mobile_jna9xp.png" alt="Game Over screen for mobile">

<!-- Top -->


<div align="center">

---
[Top](#Contents)

---

</div>

<!-- features -->

## Features

### Quotes API
At the start of the game, you will be presented with an inspirational quote. 
These quotes are fetched for [this API](https://type.fit/api/quotes) found via this [article](https://www.freecodecamp.org/forum/t/free-api-inspirational-quotes-json-with-code-examples/311373). 
Once all the data from the API is retrieved a random quote is selected and displayed on the main game screen. After every round, a new random quote will be selected and displayed. 
There are some instances where quotes would not have an author, in these cases the author is displayed as *'unknown'*.

### Game Modes
This project has four unique game modes, each one brings new challenges, this helps to keep the game both fun and challenging for a variety of users. 
The game modes are as detailed as follows:

**Classic:** 
   - When playing the game in this mode you will be presented with a set of four coloured buttons. 
   - The buttons will highlight in a sequence as well as play an auditory cue. 
   - Each step in the sequence is randomly generated. 
   - The sequence in its entirety remains the same throughout the round but gets progressively longer. 
   - After every 5th step, the sequence gets faster.
   - The player must repeat all the steps in the sequence in the original order.
   - If the player hits the incorrect coloured button a cracking sound is triggered and a cracked image overlay is displayed on the button.
   - The object to get as long a sequence as possible, you will be presented with your best score as well as the last rounds score once the game is over.
   
**Random:**  
   - When playing the game in this mode you will be presented with a set of four coloured buttons. 
   - The buttons will highlight in a sequence as well as play an auditory cue. 
   - Each step in the sequence is randomly generated.
   - Each round sequence is then randomised before the player's turn. 
   - This random sequence gets progressively longer after each round. 
   - After every 5th step, the sequence gets faster.
   - The player must repeat all the steps in the sequence in the original order. 
   - If the player hits the incorrect coloured button a cracking sound is triggered and a cracked image overlay is displayed on the button.
   - The object to get as long a sequence as possible, you will be presented with your best score as well as the last rounds score once the game is over.
   
**Single:**
   - When playing the game in this mode you will be presented with a set of four coloured buttons. 
   - Only the newest colour added to the sequence will highlight in a sequence as well as play an auditory cue.  
   - Each step in the sequence is randomly generated. 
   - The sequence in its entirety remains the same throughout the round but gets progressively longer. 
   - After every 5th step, the sequence gets faster.
   - The player must repeat all the steps in the sequence in the original order. 
   - If the player hits the incorrect coloured button a cracking sound is triggered and a cracked image overlay is displayed on the button.
   - The object to get as long a sequence as possible, you will be presented with your best score as well as the last rounds score once the game is over.
   
**Reverse:**
   - When playing the game in this mode you will be presented with a set of four coloured buttons. 
   - The buttons will highlight in a sequence as well as play an auditory cue. 
   - Each step in the sequence is randomly generated. 
   - The sequence in its entirety remains the same throughout the round but gets progressively longer. 
   - After every 5th step, the sequence gets faster.
   - The player must repeat the steps in the sequence in the reverse order. 
   - If the player hits the incorrect coloured button a cracking sound is triggered and a cracked image overlay is displayed on the button.
   - The object to get as long a sequence as possible, you will be presented with your best score as well as the last rounds score once the game is over.

<!-- Top -->


<div align="center">

---
[Top](#Contents)

---

</div>

### GUI Elements
With the use of well designed GUI elements, that were either purchased, free or custom created for the Graphical User Interface the game looks neat and feels like a native application.

#### Themes
To add another interesting twist to the game I have included the options of themes, these themes help to add a fresh design to teh games interface.

**Classic**

This is the plain smooth buttons that the game was originally designed to have.

<img  src="https://res.cloudinary.com/dajuujhvs/image/upload/c_scale,w_300/v1584981568/Simon/Screenshots/Game_PC_klrnko.png" alt="Classic Game screen for pc">

<br>

**Brick**

The Game buttons will have a Brick texture and look like four colored walls.

<img src="https://res.cloudinary.com/dajuujhvs/image/upload/c_scale,w_300/v1585391962/Simon/BrickScreenshot_yace6t.png" alt="Brick Game screen for pc">

<br>

**Lego**

The Game buttons will have a Lego texture and look like four colored lego pieces.

<img src="https://res.cloudinary.com/dajuujhvs/image/upload/c_scale,w_300/v1585391962/Simon/LegoScreenshot_bwghmx.png" alt="Lego Game screen for pc">

<br>

**Metal**

The Game buttons will have a Lego texture and look like four colored lego pieces.

<img src="https://res.cloudinary.com/dajuujhvs/image/upload/c_scale,w_300/v1585391962/Simon/LegoScreenshot_bwghmx.png" alt="Metal Game screen for pc">

<!-- Top -->


<div align="center">

---
[Top](#Contents)

---

</div>

##### Favicon

With the use of this [article](https://www.w3.org/2005/10/howto-favicon) a favicon was added to the browser tab, this helped to make it feel like a more professional web game. The <span><img src="/assets/images/favicon.png" alt="Favicon Icon"></span> png file, is an original that was created using [Adobe PhotoShop](https://www.adobe.com/uk/products/photoshop.html?gclid=CjwKCAjwvOHzBRBoEiwA48i6AtbSWstaKzHCUaUKzSlnKYFxv7dELw1rAOJgZhYShhzdXSxrCp3JHxoCnG4QAvD_BwE&sdid=88X75SKR&mv=search&ef_id=CjwKCAjwvOHzBRBoEiwA48i6AtbSWstaKzHCUaUKzSlnKYFxv7dELw1rAOJgZhYShhzdXSxrCp3JHxoCnG4QAvD_BwE:G:s&s_kwcid=AL!3085!3!340669891884!e!!g!!photoshop),
it was designed to look like a tiny version of the game screen.

##### Modal

All the game menu elements are contained in a modal. The window in the modal has a white border that is used to add to the overall look of the menu. 
The modal is made using and an external jQuery library called [jQuery Modal](https://jquerymodal.com/), you can find the GitHub repository for the library [here](https://github.com/kylefox/jquery-modal). 
There is also a slight fade animation on the modal to make it have a smooth transition between the modal and the game screen.

##### Game Buttons

All the menu buttons and icons are from a mobile GUI pack that was sourced from [Graphic Burger](https://graphicburger.com/mobile-game-gui/). In conjunction with [Adobe PhotoShop](https://www.adobe.com/uk/products/photoshop.html?gclid=CjwKCAjwvOHzBRBoEiwA48i6AtbSWstaKzHCUaUKzSlnKYFxv7dELw1rAOJgZhYShhzdXSxrCp3JHxoCnG4QAvD_BwE&sdid=88X75SKR&mv=search&ef_id=CjwKCAjwvOHzBRBoEiwA48i6AtbSWstaKzHCUaUKzSlnKYFxv7dELw1rAOJgZhYShhzdXSxrCp3JHxoCnG4QAvD_BwE:G:s&s_kwcid=AL!3085!3!340669891884!e!!g!!photoshop) I 
was able to extract the elements I wanted from the source file. All images are served by the content delivery system [Cloudinary](https://cloudinary.com/) to maximize the performance of the application. 
When a user selects any of the buttons there will be an audio cue to indicate the button was pressed. Hovering over the button will change the cursor the grab symbol and the button will increase slightly in size.   

##### Logo and Game Over text

The content pack for this is something io purchased some time back, created by [Asa Faly Rayyan](https://www.facebook.com/asafalyrayyan) and provided in .ai format. 
With the aid of [Adobe Illustrator](https://www.adobe.com/uk/products/illustrator.html?gclid=CjwKCAjw3-bzBRBhEiwAgnnLCiFDFYsUaqMcRHmDmhhvqiX-2gtK55h9ro6Pmep8P7GkxZjHNlzHsBoCvN0QAvD_BwE&sdid=88X75SKR&mv=search&ef_id=CjwKCAjw3-bzBRBhEiwAgnnLCiFDFYsUaqMcRHmDmhhvqiX-2gtK55h9ro6Pmep8P7GkxZjHNlzHsBoCvN0QAvD_BwE:G:s&s_kwcid=AL!3085!3!340693010824!e!!g!!adobe%20illistrator) I was able to create both the game title text and the game over text. 
As with the button images, these are also served by the content delivery system [Cloudinary](https://cloudinary.com/). 

##### Help Menu

The help menu describes the overall object of the game, the instructions are arranged in such a way as to describe the overall game rules as well as the individual gameplay options.
With the use or headings and red underlines, the content is organised in an easy to follow way. 

##### Settings Menu

In this menu, you can find the options available to the player. Each choice in the game mode section can be selected by using the left and right arrows. 
If you are at the end of the list the arrow will be greyed out indicating there are no further options in that direction. 
Underneath the selection, there is a brief description of what to expect from that option.

##### Game Over Menu

When the player loses the round they will be presented with the game over screen. On this screen, there is a summary of the results of the game.
- Score: This will be the score from the round just played, the score is the number of rounds the player has completed in the previous session. 
- Best: This indicated the Top Score the player as achieved since the start of playing the game.
- Mode: This indicated the Game Mode the player had selected when playing the round.
<br>
At the bottom of the game over screen there social media links so that the player can share there experience with the game, these currently got to the homepage of the selected social link.
The player can now either restart the game using the replay button or access the main menu using the menu button on the bottom left. The score will be persistent until the player either close the browser tab ore refreshes the page.
If the player chooses to go back to the main menu they will be presented with a new random quote for inspiration.

<!-- Top -->


<div align="center">

---
[Top](#Contents)

---

</div>

### Game Screen

The main game screen has the following elements:

**Buttons**

The four coloured game buttons will be the main game buttons when playing. Whenever the button is pressed by either the computer of the player, 
it will scale down and play a relative audio sound. It the player get the sequence correct the computer will start the next round if not then the button will display a cracked overlay and
play a crack sound. This will then trigger the Game Over modal. The buttons have rounded edges and an inset shadow to make them look and feel smooth. 

**Circle**

In the centre of the screen, there is a circle that is used to indicate the current round the player is on. The circle also has an inset colour ring that indicates the following:
- RED - Computers turn, player controls are disabled.
- GREEN - Players turn, player controls are enabled. 

#### General
The page is responsive and with the use of media queries, it caters for a wide range of screen sizes. 

#### Features Left to Implement
- Permanent score storage
- Timer between rounds - it may make for some interesting game play.
- Strict mode and standard mode

<!-- Top -->


<div align="center">

---
[Top](#Contents)

---

</div>

<!-- technologies used -->

## Technologies Used
I used the following technologies to create this website:

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) 
    - Used as the basis of the website.
- [CSS3](https://developer.mozilla.org/en-US/docs/Archive/CSS3) 
    - Used for the overall look of the site and its elements.
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    - Used in various places to aid site functionality.
- [Google fonts](https://fonts.google.com/) 
    - Used to get fonts for my site.
- [JQuery](https://jquery.com) 
    - Used to simplify DOM manipulation.
- [Git](https://git-scm.com/)
    - Used for version control. 
- [Jasmine](https://jasmine.github.io/)
    - Used for automated testing.
- [jQuery Modal](https://jquerymodal.com/)
    - Used to simplify the modal presentation.
- [jasmine jQuery](https://www.npmjs.com/package/jasmine-jquery)
    - Used to extend the testing capabilities of the jasmine library.
    
### Other tools used

- [Pycharm](https://www.jetbrains.com/pycharm/) 
    - This is the main IDE I used to build the website.
- [Adobe Photoshop](https://www.adobe.com/uk/products/photoshop.html?gclid=CjwKCAjwvOHzBRBoEiwA48i6AtbSWstaKzHCUaUKzSlnKYFxv7dELw1rAOJgZhYShhzdXSxrCp3JHxoCnG4QAvD_BwE&sdid=88X75SKR&mv=search&ef_id=CjwKCAjwvOHzBRBoEiwA48i6AtbSWstaKzHCUaUKzSlnKYFxv7dELw1rAOJgZhYShhzdXSxrCp3JHxoCnG4QAvD_BwE:G:s&s_kwcid=AL!3085!3!340669891884!e!!g!!photoshop)
    - Used to manipulate and create content for the website.
- [Adobe Illustrator](https://www.adobe.com/uk/products/illustrator.html?gclid=CjwKCAjw3-bzBRBhEiwAgnnLCiFDFYsUaqMcRHmDmhhvqiX-2gtK55h9ro6Pmep8P7GkxZjHNlzHsBoCvN0QAvD_BwE&sdid=88X75SKR&mv=search&ef_id=CjwKCAjw3-bzBRBhEiwAgnnLCiFDFYsUaqMcRHmDmhhvqiX-2gtK55h9ro6Pmep8P7GkxZjHNlzHsBoCvN0QAvD_BwE:G:s&s_kwcid=AL!3085!3!340693010824!e!!g!!adobe%20illistrator)
    - Used to create logos and titles for the website.
- [Balsamq](https://balsamiq.com/) - All my wireframes were created in the desktop version of Balsamiq.
    - Used to create wireframes for the website.
- [VS Code](https://code.visualstudio.com/) - Used this editor for building parts of the website.
    - Used for some coding due to its wide range of add-ins.
- [Git Hub](https://github.com/) - Used this site to manage my projects storage as well as host the website.
    - Used to store my project files as well as host my site via GitHub pages. 
- [Grammarly](https://www.grammarly.com/) 
    - Used to double-check all my spelling and grammar.
- [W3C Markup](https://validator.w3.org/) 
    - Used this to check my HTML for errors and typos.
- [W3C CSS](https://jigsaw.w3.org/css-validator/) 
    - Used this to check the validity of my CSS.
- [jshint](https://jshint.com/)
    - Used to validate JavaScript.
- [Autoprefixer](https://autoprefixer.github.io/) 
    - I used this tool to make sure I did not miss any prefixing in my code.
- [Bosca Ceoil](https://boscaceoil.net/) 
    - Used to create some of the game sounds.
- [BFXR](https://www.bfxr.net/)
    - Used to create some of the game sounds.

  <!-- Top -->


<div align="center">

---
[Top](#Contents)

---

</div>

<!-- testing -->

## Testing

Extensive testing and error checking was undertaken throughout the development process. With the aid of the following tools, I was able to catch and fix errors and bugs in my code.

##### [W3C Markup](https://validator.w3.org/)

Checking my [index.html](/index.html) file with the validator helped me find some small errors in my code including forgetting a ```</div>``` and a ```>``` too many as well as missing out ```lang="en"``` in my HTML element. 
After fixing these and some other minor errors in the HTML file I got the following message in the editor ``Document checking completed. No errors or warnings to show.``

##### [W3C CSS](https://jigsaw.w3.org/css-validator/)

Using the [style.css](/assets/css/style.css) file in the CSS validator resulted in no errors, I was constantly checking these files and fixing any errors that occurred as they were spotted. The
results of this test were displayed as ``Congratulations! No Error Found.`` 

##### [Autoprefixer](https://autoprefixer.github.io/)

After finishing up my CSS and before the validation of CSS I used this tool to make sure I had not left out any prefixing in my code. 

##### [jshint](https://jshint.com/)

After using this on [game.js](/assets/js/game.js) I picked up some lines of code where I had left out the ``;`` as well as some unused variables. After fixing these errors and running again the following was found:
```
Metrics
There are 38 functions in this file.
Function with the largest signature takes 1 argument, while the median is 0.
The largest function has 9 statements in it, while the median is 4.
The most complex function has a cyclomatic complexity value of 6 while the median is 1.
```
##### [Pycharm](https://www.jetbrains.com/pycharm/)

Pycharm professional comes with a set of tools to check code quality as well as spelling errors. 
These were used regularly to keep the code syntactically correct and well as catch spelling errors. This is also what I used to format the code and help with refactoring when needed.

##### Devices and Browsers
- Chrome:
    - Version 80.0.3987.149 (Official Build) (64-bit)
    - tested responsiveness using chrome development tools.
    - tested lag on slower networks using the network tools in developer tools, this helped me fix an audio lag bug.
    - Running an audit with the developer tools helped me solves a bug where I was triggering the audio before a player was interacting. Final results as follows:
<img src="tests/images/google audit.png" alt="Goggle Audit image"> 
     
- Safari:
    - Version 13.0
    - Tested on an iMac and iPhone and iPad.
    - Issues with audio lag and audio not playing were eventually resolved using this [article](https://stackoverflow.com/questions/22216954/whats-causing-this-slow-delayed-audio-playback-in-safari)
    - Issues with touch not being sensitive enough fixed by using ``touchstart`` instead of ``touch`` in my event listeners.

- Other:
    - Used various models of android phones and tablets to test and adjust for mobile devices. 
    - Tested with:
        - FireFox - Version 74.0 (64-bit)
        - Edge - Version 80.0.361.69 (Official build) (64-bit)
        - Opera Version 7.0 
        - Samsung galaxy s9 and A10
        - Samsung galaxy tablet
  
##### User testing

I had some friends and family test the site and the feedback was invaluable. This helped me pick up compatibility issues with different devices, I made some changes based on the feedback I received. 
There was feedback from multiple players that the game had a level-up text that was very distracting when it flashed on the screen so this was removed, they also picked up some small grammar issues I had missed. 
There was some feedback that the app was a bit unresponsive to touch sometimes, I changed the code slightly to accommodate for this. 

##### Jasmin
Using Jasmin I was able to test if the code was working as expected. The test files can be found [here](tests). 
I have broken the spec's into three separate files to make it a bit easier to navigate the tests. I have used some ideas for testing from [Tim Nelson](https://github.com/TravelTimN/simon-game).
ani i made use of [jasmine jQuery](https://www.npmjs.com/package/jasmine-jquery) to help with unit testing. You can run the automated test simply by running the [test.html](/tests/tests.html).

<img src="/tests/images/jasmine_test.png" alt="Jasmine test results">


<!-- Top -->


<div align="center">

---
[Top](#Contents)

---

</div>

<!-- Deployment -->

## Deployment

This project is hosted on  [GitHub](https://github.com/) and used GitHub pages to serve the site to the world. If you would like to contribute to this project or run it locally
 you would need to first have some sort of code editor installed like [VS Code](https://code.visualstudio.com/) and some version control software like [Git](https://git-scm.com/), you will also need a GitHub account.
 
 Once you have these tools installed and everything is working you can follow the steps below:

 ##### Cloning
  - You are now ready to clone a copy of this project to your local machine for editing.
  - At the top of the repository click on the ``Clone or download button``
  - Copy the path to the repo ``https://github.com/Frozenaught/Milestone-2---Simon-Game.git``
  - In your command-line, navigate to the folder where you would like to make a copy of this repository -``c:\MyRepos> `` .
  - Type the following to clone the repo ``c:\MyRepos> git clone https://github.com/Frozenaught/Milestone-2---Simon-Game.git``
  - You should see a similar output to the following: 
  ```
    Cloning into 'Milestone-2---Simon-Game'...
     remote: Enumerating objects: 252, done.
     remote: Counting objects: 100% (252/252), done.
     remote: Compressing objects: 100% (140/140), done.

     Receiving objects: 100% (535/535), 1.37 MiB | 3.00 MiB/s, done.
     Resolving deltas: 100% (162/162), done.
  ```
  - now you can navigate to the newly created directory ``c:\MyRepos\Milestone-2---Simon-Game>``
  - To run the project locally, simple launch the index.html file from your Machine.
  - You can now edit any of the code using your code editor of choice. 
  
 ##### Deploying
 
  - To deploy this to your Github account, navigate to Github and create a new repository.
  - Give the repository a name and click the ``Create repository`` button.
  - push the cloned repository to your Github account with the following commands in the command-line
    
    ``` 
        git remote add origin https://github.com/Frozenaught/<repo name>.git 
        git push -u origin master
    ```
  
  - Once you have uploaded your repo you can make use of Github pages to host the website.
  - Go to Settings using the settings button at the top of the repository page, navigate down to Github pages and choose the master branch.
  - This project will now be published and you will get a link like https://frozenaught.github.io/Milestone-2---Simon-Game/ to share.
   
 ##### Contribution
  - If you chose to make changes to the website I would recommend using separate branches so that you can go back to the original master branch if the changes don't work as expected.
  - Use ``git checkout -b <brancname>`` to create a new branch and edit the files accordingly.
  - If you are happy with the changes to use ``git commit -m "my commit message of changes I have made"`` to commit the changes.
  - Use ``git push `` to push the changes to the repository.
  - As these changes are on a different branch they will not be available on the deployed site until you merge them to the master branch.
  - To merge the new branch to the master branch switch to the new branch on Github using the branch selector dropdown menu. 
  - create a new pull request and state what changes were made in the comment section. 
  - submit the pull request and switch back to the master branch.
  - now you will have the option to merge the pull request and you will be done.
  - sometimes there is a slight delay in getting the update being live on the GitHub pages site. 
  
<!-- Top -->


<div align="center">

---
[Top](#Contents)

---

</div>

<!-- Credits -->

## Credits

### Content
-  [Rules](https://www.ultraboardgames.com/simon/game-rules.php)
    - used to help with understanding the rules of the game as well as some working for the instructions.
-  Wiki page
    - used to understand the object of the game and the rules of the game cna find it here https://en.wikipedia.org/wiki/Simon_(game).
 

### Media
- [GUI buttons](https://graphicburger.com/mobile-game-gui/)
    - used this content for the graphical user interface buttons.
- [Crack Image](https://www.searchpng.com/download-png/?imageid=3548)
    - used to get the png image for the crack overlay.
- [Brick Image](https://www.jing.fm/iclipt/u2q8w7q8y3o0t4o0/)
    - used for a theme image, some editing was done th make it more transparent.
- [Lego Image](https://www.publicdomainpictures.net/en/view-image.php?image=36176&picture=yellow-lego-texture)
    - used for a theme image, some editing was done th make it more transparent.
- [Metal Image](https://ya-webdesign.com/imgdownload.html)
    - used for a theme image, some editing was done th make it more transparent.
- [Logo and Game Over text](http://www.dafont.com/flying-leatherneck.font)
    - purchased as part of a game assets bundle and created by [Asa Faly Rayyan](https://www.facebook.com/asafalyrayyan)
- [Crack Sound](https://freesound.org/people/JustInvoke/sounds/446118/)
    - the sound used to complement the crack image overlay.
 - [Quotes API](https://type.fit/api/quotes)
    - API used for the inspirational messages with help from [this Article](https://www.freecodecamp.org/forum/t/free-api-inspirational-quotes-json-with-code-examples/311373)

<!-- Top -->


<div align="center">

---
[Top](#Contents)

---

</div>

### Acknowledgements

[Tim Nelson](https://github.com/TravelTimN/simon-game)

   - Tim's project was used for inspiration as he is a mentor I figured his work would be a great help. 
   - I used his work to help me with my approach to jasmine testing.
   - I also used his code to help understand different ways to approach a problem.
   - I also drew some inspiration from his readme file as I think he did an excellent job.

[Simon Says](https://play.google.com/store/apps/details?id=hackman.trevor.copycat&hl=en_GB)

   - This game helped with inspiration for the overall design of the game as well as some of the different game modes.
   - some wording was also used for inspiration.
    

#### Other

 I  used these sites for reference along the development process.
- [CSS Tricks](https://css-tricks.com/) 
    - For CSS documentation and help when needed.
- [Can I Use](https://caniuse.com/) 
    - For CSS decision making.
- [Stack Overflow](https://stackoverflow.com/) 
    - For those times when I could not figure out why I was not getting the result, I expected to like this [article](https://stackoverflow.com/questions/22216954/whats-causing-this-slow-delayed-audio-playback-in-safari)
- [MDN](https://developer.mozilla.org/en-US/)
    - For code referencing, while trying to get my code to do what I wanted it to do rather than what I told it to do.
- [Timed array loops](https://scottiestech.info/2014/07/01/javascript-fun-looping-with-a-delay/) 
    - This was helpful in figuring a way to play back each element in an array with a delay between each step.
- [setTimout test](https://makandracards.com/makandra/32477-testing-settimeout-and-setinterval-with-jasmine)
    - used for help with timeout tests.
- [Stack Overflow Audio Problem](https://stackoverflow.com/questions/22216954/whats-causing-this-slow-delayed-audio-playback-in-safari)
    - used to help solve a bug on safari with audio not playing
- [falsy truthy](https://www.sitepoint.com/javascript-truthy-falsy/)
    - used as guide when figuing out how th check for undefined and empty variables
- [fetch](https://javascript.info/fetch)
    - used for help with api handling.
- [remove outline](https://stackoverflow.com/questions/20340138/remove-blue-border-from-css-custom-styled-button-in-chrome)
    - this helped me to remove the outline on my button elements
 
 <!-- Top -->


<div align="center">

---
[Top](#Contents)

---

</div>