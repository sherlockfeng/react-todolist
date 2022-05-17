import {useState, useTransition, useRef, useEffect} from 'react';

export default function Header() {
    const [isPending, startTransition] = useTransition();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [num, updateNum] = useState(0);

    const onClick = () => {
        // 使用了并发特性useTransition
        startTransition(() => {
            // 本次更新是并发更新
            updateNum(count => count + 2);
        });
    };

    useEffect(() => {
        const button = buttonRef.current;
        let time1: any;
        let time2: any;
        // startTransition(() => {
        time1 = setTimeout(() => updateNum(1), 1000);
        time2 = setTimeout(() => button!.click(), 1005);
        // });
        return () => {
            clearTimeout(time1);
            clearTimeout(time2);
        };
    }, []);

    // useLayoutEffect(() => {
    //     if (num === '2') {
    //         setNum(num + 'layout');
    //     }
    // }, [num]);

    return (
        <div>
            <button ref={buttonRef} onClick={onClick}>
                增加2
            </button>
            <div>
                {Array.from(new Array(450)).map((_, index) => (
                    <span key={index}>{num}</span>
                ))}
            </div>
        </div>
    );
}
