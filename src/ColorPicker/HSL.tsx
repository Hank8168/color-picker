import { useState, FC } from "react";
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

    const handleHSelect = (h: number) => { setH(h); onSelect(h, s, l); };
    const handleSSelect = (s: number) => { setH(h); onSelect(h, s, l); };
    const handleLSelect = (l: number) => { setH(h); onSelect(h, s, l); };

    return(
        <div>
            <H initVal={initH} onSelect={handleHSelect} />
            <S initVal={initS} hue={h} onSelect={handleSSelect} />
            <L initVal={initL} hue={h} onSelect={handleLSelect}/>
        </div>
    );
}