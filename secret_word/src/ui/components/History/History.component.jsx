import './History.styles.css'

export const History = ({history}) => {
    return (
        <>
            {
                history.map((item) => {
                    return <p className={`history__letter ${item.isCorrect? 'correct' : 'wrong'}`}>{item.letter}</p>

                })
            }
        </>

    )

}