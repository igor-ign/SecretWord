import { Button } from '../../components/index'

import './Home.styles.css'

export const Home = ({handleStartGame}) => {
    return (
        <div className='home__container'>
            <div className="home__content">
                <h1 className="game__title">Secret Word</h1>
                <p className="game__description">Discover the secret word</p>

                <Button text="Play" handle={handleStartGame}/>

            </div>
            
        </div>

    )

}