import { FC, useMemo } from 'react';
import { Palette } from './Palette';
import { hsl } from './util';
import _ from 'lodash';

interface Props {
    initVal: number;
    onSelect: (v: number) => void;
}

export const H: FC<Props> = ({ initVal, onSelect }) => {
    const colors = useMemo(() => _.range(360).map(h => { console.log(h); return hsl(h, 100, 50)}), []);

    return (
         <Palette 
         initVal={initVal}
         colors={colors} 
         onSelect={onSelect}
          />
    );
}