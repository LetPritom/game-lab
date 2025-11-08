import axios from "axios";
import { useEffect, useState } from "react"


const useGameHooks = () => {
    const [game, setGame] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error , setError] = useState(null);

    useEffect(() => {
        axios('/game.json')
        .then((data) => setGame(data.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false))
    } , [])

    return {game , loading , error};
}

export default useGameHooks;