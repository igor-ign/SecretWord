import './Game.styles.css'

export const Game = ({wordHint, wordLetters}) => {
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
                    <input type="text" className='letter__input'/>

                </label>

            </div>

        </div>

    )

}