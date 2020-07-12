import { ReactComponent as AccountSvg } from './images/account.svg';
import { ReactComponent as CloseSvg } from './images/close.svg';
import { ReactComponent as MenuSvg } from './images/menu.svg';
import { ReactComponent as WavesSvg } from './images/waves.svg';
import React from 'react';

export const AccountIcon = (): JSX.Element => <AccountSvg className="icon-account"/>;
export const CloseIcon = (): JSX.Element => <CloseSvg className="icon-close"/>;
export const MenuIcon = (): JSX.Element => <MenuSvg className="icon-menu"/>;
export const WavesIcon = (): JSX.Element => <WavesSvg className="icon-waves"/>;