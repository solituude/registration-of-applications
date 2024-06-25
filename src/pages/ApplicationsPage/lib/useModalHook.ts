import {useState} from 'react';

const useModal = (): [boolean, () => void ] => {
    const [isShowing, setIsShowing] = useState<boolean>(false);

    function toggle(): void {
        setIsShowing(!isShowing);
    }

    return [
        isShowing,
        toggle
    ];
}

export default useModal;
