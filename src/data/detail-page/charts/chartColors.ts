import { ChartColor } from './chartInterfaces';

interface ColorShade {
  light: string;
  dark: string;
}

export const chartColors: Record<ChartColor, ColorShade> = {
  purple: {
    light: '#d99cff',
    dark: '#8452a5',
  },
  blue: {
    light: '#7ec2ff',
    dark: '#1f6bad',
  },
  pink: {
    light: '#f4bcd7',
    dark: 'c93a7f',
  },
  green: {
    light: '#aafa87',
    dark: '#629949',
  },
  yellow: {
    light: '#fdf580',
    dark: '#ccbd22',
  },
  red: {
    light: '#ff9198',
    dark: 'ff1c1c',
  },
  bronze: {
    light: '#e7cfae',
    dark: '#924931',
  },
  cyan: {
    light: '#d6fff1',
    dark: '#44fbf6',
  },
};
