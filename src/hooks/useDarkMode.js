
import { useMedia } from 'use-media'
import useLocalStorage from './useLocalStorage'

const usePrefersDarkmode = () => {
    return useMedia(['(perfers-color-scheme: dark'], [true], false)
}

const useDarkMode = () => {
    const [isDarkmode, setDarkmode] = useLocalStorage('isDarkmode', false);

    // Finding OS preferences for dark/light mode
    const prefersDarkmode = usePrefersDarkmode();

    // Setting that value to state
    setDarkmode(prefersDarkmode);

    return [isDarkmode, setDarkmode];
}

export default useDarkMode;