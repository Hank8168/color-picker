import { FC } from 'react';
import { Palette } from './Palette';
import _ from 'lodash';
import { hsl } from './util';

interface Props {
    hue: number;
}
export const L: FC<Props> = ({ hue }) => {
    return <Palette colors={_.range(101).map(l => hsl(hue, 100, l))} />
}