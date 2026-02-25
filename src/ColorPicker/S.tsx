import { FC } from 'react';
import { Palette } from './Palette';
import _ from 'lodash';
import { hsl } from './util';

interface Props {
    hue: number;
}
export const S: FC<Props> = ({ hue }) => {
    return <Palette colors={_.range(101).map(s => hsl(hue, s, 50))} />
}