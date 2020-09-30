
import './useLocalStorage'
import useLocalStorage from './useLocalStorage';

const useDarkMode = (value) => {
    const [isDarkmode, setDarkmode] = useLocalStorage('isDarkmode', value);

    return [isDarkmode, setDarkmode];
}

export default useDarkMode;