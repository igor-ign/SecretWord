import { useState } from 'react'

import { Button } from '../../components/index'

import './Game.styles.css'

export const Game = ({wordHint, wordLetters}) => {
    const [isInputDisabled, setIsInputDisabled] = useState(false)
    const [attempt, setAttempt] = useState()

    const handleStoreAttempt = (e) => {
        setIsInputDisabled(true)
        setAttempt(e.target.value)

    }

    const handleValidateAttempt = () => {
        const letterID = document.getElementsByClassName(attempt)
        const notHiddenWords = document.getElementsByClassName('hidden')

        if (letterID.length > 0) {
            for (let i = 0; i <= letterID.length; i++) {
                letterID[i].className = 'letter'

            }

        }

        setAttempt('')
        setIsInputDisabled(false)

    }

    return (
        <div className='game'>
            <div className="game__content">
                <h3 className='word__hint'>Hint: {wordHint}</h3>

                <div className='hidden__word'>
                    {
                        wordLetters.map((letter) => {
                            return <p className={`letter hidden ${letter}`} key={wordLetters.indexOf(letter)}>
                                        {letter}
                                    </p>

                        })

                    }

                </div>

                <label className='label'>
                    <span className='span'>Type a letter down here</span>

                    <input 
                    type="text" 
                    className='letter__input'
                    onChange={handleStoreAttempt}
                    disabled={isInputDisabled}
                    value={attempt}
                    />

                </label>

                <Button text='Guess' handleFunction={handleValidateAttempt}/>

            </div>

        </div>

    )

}