import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

interface HeaderLinkProps {
  Icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  text: string;
  avatar?: boolean;
}
function HeaderLink(props: HeaderLinkProps) {
  const { Icon, text, avatar } = props;

  return (
    <div>
      {avatar ? <Icon className="!h-7 !w-7 lg:!-mb-1" /> : <Icon />}
      <h4>{text}</h4>
    </div>
  );
}

HeaderLink.propTypes = {};

export default HeaderLink;
