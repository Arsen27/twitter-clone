import { IconSources, IconTypes } from './types';
import { Container } from './IconStyles';
import customIconsMap from './Custom';

type TIconProps = {
  name: string;
  color?: string;
  size?: number;
  source?: IconSources;
  type?: IconTypes;
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
}: TIconProps) => {
  const style = { fontSize: size, color };

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

export default BaseIcon;
