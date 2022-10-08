<h1>Secret Word</h1>

Secret Word is a simple game where your objective is to find the hidden words that are part of a hidden word, once you find all the letters you win!

<h1>Why Secret Word?</h1>

In the date that I'm posting this project on my GitHub I'm currently doing a ReactJS + NodeJS + TypeScript + MongoDB course on udemy and Secret Word is the first challange of this course. I'm not developing this project the same way the instructor is telling us to do, I'm trying to make it better with a different design and a different approach. I'll explain better what I thought I could change and what don't need to be changed throughout this readme!

<h1>How the game works?</h1>

When you open the page you will be at the home screen wich has a button that will start the game if you click in it. Once you have clicked the button a random word will be selected and the game will start.

![Home Screen Image](https://github.com/igor-ign/secret_word/blob/main/secret_word/readme_images/HomeScreen.jpg)

In the game you will have a hint related to the secret word, the hidden letters, a place where you can submit your attempts and the letter history, wich show the letters that you have already submited and also shows wich letter was correct or incorrect. If a attempt is correct then the letters related to this attempt will be visible for you and they will have a green background on the letter history, if they are incorrect nothing happens in the game and the letters will have a red background in the letter history. The game ends when you guess all the letters.

![Default game screen](https://github.com/igor-ign/secret_word/blob/main/secret_word/readme_images/GameScreenDefault.jpg)

![Game screen when you submit a correct letter](https://github.com/igor-ign/secret_word/blob/main/secret_word/readme_images/GameScreenCorrectLetter.jpg)

![Game screen when you submit a wrong letter](https://github.com/igor-ign/secret_word/blob/main/secret_word/readme_images/GameScreenWrongLetter.jpg)

![Game screen when you win](https://github.com/igor-ign/secret_word/blob/main/secret_word/readme_images/WinScreen.jpg)

<h1>The design</h1>

In my first contact with the challange proposal I looked at the pictures of the final result and I thought that I could do better than that. My idea was to build an application with a design that will make the user feel that he is trying to find a super secret word, something confidential. The original design, to me, looks like more with a child game or some TV reality show game. I will show the pictures of the challange proposal:

<strong>The proposal images are in brazilian portuguese but I will translate that for better understanding</strong>
![Proposal picture](https://github.com/igor-ign/secret_word/blob/main/secret_word/readme_images/ProposalHome.jpg)
<ul>
  <li>Clique no botão abaixo para jogar > Click the button below to play</li>
  <li>Começar jogo > Start the game</li>
</ul>

![Proposal picture](https://github.com/igor-ign/secret_word/blob/main/secret_word/readme_images/ProposalGame.jpg)
<ul>
  <li>Pontuação > score</li>
  <li>Dica sobre a palavra: computador > Hint about the word: computer</li>
  <li>Você ainda tem 2 tentavias > You have two attempts remaining</li>
  <li>Tente adivinhar uma letra da palavra > Try to guess a letter from the word</li>
  <li>Jogar > Play</li>
  <li>Letras já utilizadas > Letters already used</li>
</ul>

![Proposal picture](https://github.com/igor-ign/secret_word/blob/main/secret_word/readme_images/ProposalWin.jpg)
<ul>
  <li>Fim de jogo > End of the game</li>
  <li>Sua pontuação foi: 100 > Your score: 100</li>
  <li>Reiniciar > Restart</li>
</ul>

I decided to make the game look like something really secret, the result is the following:

![Instructor Game](https://github.com/igor-ign/secret_word/blob/main/secret_word/readme_images/ProposalHome.jpg)

![My game](https://github.com/igor-ign/secret_word/blob/main/secret_word/readme_images/HomeScreen.jpg)

![Instructor Game](https://github.com/igor-ign/secret_word/blob/main/secret_word/readme_images/ProposalGame.jpg)

![My game](https://github.com/igor-ign/secret_word/blob/main/secret_word/readme_images/GameScreenWrongLetter.jpg)

<h1>Dependencies</h1>
<ul>
  <li>ReactJS</li>
</ul>

