import './ColorPicker.scss';
import { FC, useCallback, useState } from 'react';
import _ from 'lodash';
import cv from 'color-convert';
import { HSL, MemoHSL } from './HSL';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';


export const ColorPicker: FC = () => {
    const [rgb, setRgb] = useState<[number, number, number]>([255, 0, 0]);
    const rgbStr = `#${cv.rgb.hex(rgb)}`;
    const[r, g, b] = rgb;
    const fontColor = 0.299 * r + 0.587 * g + 0.114 *b < 128 ? 'white' : 'black' ;
    
    const handleHslSelect = useCallback(
    (h: number, s: number, l: number) => setRgb(cv.hsl.rgb([h, s, l])),
    []
    );

    return (
        <div className="color-picker">
            <div className="columns is-mobile">
                <div className="column is-3">
                    <div className="preview" style={{backgroundColor: rgbStr}}>
                    <p 
                    className="rgb" 
                    style={{color : fontColor}}>
                        {rgbStr}
                    </p>
                    <div 
                    className="copy is-clickable"
                    onClick={() => navigator.clipboard.writeText(rgbStr)}
                    >
                    <FontAwesomeIcon icon ={faCopy} size='lg' color={fontColor} />
                    </div>
                </div>
                </div>
            <div className="column">
            <MemoHSL onSelect={handleHslSelect} />
        </div>
    </div>
</div>
    );
};