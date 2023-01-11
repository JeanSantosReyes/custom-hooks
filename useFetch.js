import { useEffect, useState } from "react"

export const useFetch = (url) => {


    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true
        });

        const resp = await fetch(url);
        const data = await resp.json();

        // console.log(data);

        setState({
            data,
            isLoading: false,
            hasError: null
        });

    }

    // Si el url es el mismo no se dispara nuevamente, si el url es distinto se vuelve a disparar
    useEffect(() => {
        getFetch();
    }, [url]);

    return {
        ...state,
        state,
    };
}
