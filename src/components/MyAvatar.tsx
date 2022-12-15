// hooks
//
import { MAvatar } from './@material-extend';
import { createAvatar } from '../utils';

export default function MyAvatar({
  name,
  photoURL,
  ...other
}: {
  name: string;
  photoURL: string;
}) {
  return (
    <MAvatar
      src={photoURL}
      alt={name}
      color={photoURL ? 'default' : createAvatar(name).color}
      {...other}
    >
      {createAvatar(name).name}
    </MAvatar>
  );
}
