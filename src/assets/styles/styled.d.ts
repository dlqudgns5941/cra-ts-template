import 'styled-components';

interface IMode {
  mainBackground: string;
  title: string;
  primaryText: string;
  secondaryText: string;
  disable: string;
  border: string;
  divider: string;
  background: string;
  tableHeader: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    dark: IMode;
    light: IMode;
  }
}
