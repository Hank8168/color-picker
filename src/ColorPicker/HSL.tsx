import { useState, FC, useEffect, memo, useCallback } from "react";
import { H } from "./H";
import { S } from "./S";
import { L } from "./L";

interface Props {
    onSelect: (h: number, s: number, l:number) => void;
}

export const HSL: FC<Props> = ({ onSelect }) => {
    const [initH, initS, initL] = [0, 100, 50];
    const [h, setH] = useState<number>(initH);
    const [s, setS] = useState<number>(initS);
    const [l, setL] = useState<number>(initL);

    useEffect(() => {
        onSelect(h, s, l);
    }, [h, s, l]);

    const handleHSelect = (h: number) => { setH(h);  };
    const handleSSelect = (s: number) => { setS(s);  };
    const handleLSelect = useCallback((l: number) => { setL(l); }, []);

    return(
        <div>
            <H initVal={initH} onSelect={handleHSelect} />
            <S initVal={initS} hue={h} onSelect={handleSSelect} />
            <L initVal={initL} hue={h} onSelect={handleLSelect}/>
        </div>
    );
}

export const MemoHSL = memo(HSL);