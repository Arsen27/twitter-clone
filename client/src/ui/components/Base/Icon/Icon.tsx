import { withTheme } from 'styled-components';

import { IconSources, IconTypes } from './types';
import { Container } from './IconStyles';
import customIconsMap from './Custom';
import { getColor } from '../../../styles/utils';
import { TWithThemeProp } from '../../../styles/types';

export type TIconProps = {
  name: string;
  size?: number;
  source?: IconSources;
  type?: IconTypes;
  color?: (theme) => string | string;
}

type TGetIconBySourceProps = {
  name: string;
  style: any;
  type: IconTypes;
}

const iconBySourceMap: Record<string, (props: TGetIconBySourceProps) => JSX.Element> = {
  [IconSources.Bootstrap]: getBootstrapIcon,
  [IconSources.Custom]: getCustomIcon, 
};

const BaseIcon = ({
  name,
  size = 20,
  color,
  source = IconSources.Bootstrap,
  type = IconTypes.Outlined,
  theme,
}: TIconProps & TWithThemeProp) => {
  const style = {
    display: 'flex',
    fontSize: size,
    color: color && getColor(color, theme),
  };

  return (
    <Container>
      { iconBySourceMap[source]({ name, style, type }) }
    </Container>
  )
};

function getBootstrapIcon({ name, style, type }: TGetIconBySourceProps) {
  const ending = type === IconTypes.Filled ? '-fill' : '';
  
  return <i className={`bi bi-${name}${ending}`} style={style} />
}

function getCustomIcon({ name, style, type }: TGetIconBySourceProps) {
  const Icon = customIconsMap[name];

  return <Icon style={style} type={type} />;
}

export default withTheme(BaseIcon);
