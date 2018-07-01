import chevronIcon from '!url-loader!src/assets/svg/chevron.svg';
import draggableIcon from '!url-loader!src/assets/svg/draggable.svg';
import logoIcon from '!url-loader!src/assets/svg/logo.svg';
import plusIcon from '!url-loader!src/assets/svg/plus.svg';
import searchIcon from '!url-loader!src/assets/svg/search.svg';
import trashIcon from '!url-loader!src/assets/svg/trash.svg';

type T_CHEVRON_ICON = 'CHEVRON_ICON';
type T_DRAGGABLE_ICON = 'DRAGGABLE_ICON';
type T_LOGO_ICON = 'LOGO_ICON';
type T_PLUS_ICON = 'PLUS_ICON';
type T_SEARCH_ICON = 'SEARCH_ICON';
type T_TRASH_ICON = 'TRASH_ICON';

export const CHEVRON_ICON: T_CHEVRON_ICON = 'CHEVRON_ICON';
export const DRAGGABLE_ICON: T_DRAGGABLE_ICON = 'DRAGGABLE_ICON';
export const LOGO_ICON: T_LOGO_ICON = 'LOGO_ICON';
export const PLUS_ICON: T_PLUS_ICON = 'PLUS_ICON';
export const SEARCH_ICON: T_SEARCH_ICON = 'SEARCH_ICON';
export const TRASH_ICON: T_TRASH_ICON = 'TRASH_ICON';

export const ICONS_MAP = {
  [CHEVRON_ICON]: chevronIcon,
  [DRAGGABLE_ICON]: draggableIcon,
  [LOGO_ICON]: logoIcon,
  [PLUS_ICON]: plusIcon,
  [SEARCH_ICON]: searchIcon,
  [TRASH_ICON]: trashIcon,
};

export type T_ICON = (
  T_CHEVRON_ICON |
  T_DRAGGABLE_ICON |
  T_LOGO_ICON |
  T_PLUS_ICON |
  T_SEARCH_ICON |
  T_TRASH_ICON
);
