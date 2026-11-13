import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

export interface HandiconProps extends Omit<SVGProps<SVGSVGElement>, "ref"> {
  /** Width and height in px. Default: 24 */
  size?: number | string;
  /** Stroke color. Default: currentColor */
  color?: string;
  /** Stroke width on the 24px grid. Default: 1.75 */
  strokeWidth?: number | string;
}

export type HandiconComponent = ForwardRefExoticComponent<
  HandiconProps & RefAttributes<SVGSVGElement>
>;

export type IconName =
  | "message"
  | "code"
  | "analytics"
  | "wallet"
  | "image"
  | "video"
  | "zap"
  | "settings"
  | "search"
  | "bell"
  | "calendar"
  | "mail"
  | "folder"
  | "file-text"
  | "cloud-upload"
  | "cloud-download"
  | "link"
  | "user"
  | "users"
  | "lock"
  | "shield-check"
  | "trash"
  | "star"
  | "heart"
  | "map-pin"
  | "home"
  | "grid"
  | "toggle-on"
  | "toggle-off"
  | "refresh"
  | "share"
  | "download"
  | "plus-circle"
  | "minus-circle"
  | "check-circle"
  | "x-circle"
  | "arrow-left-circle"
  | "arrow-right-circle"
  | "arrow-up-circle"
  | "arrow-down-circle"
  | "crop"
  | "scan"
  | "chevron-down"
  | "chevron-up"
  | "chevron-left"
  | "chevron-right"
  | "menu"
  | "apps"
  | "brush"
  | "pencil"
  | "wand"
  | "box"
  | "layers"
  | "pie-chart"
  | "trending-up"
  | "bar-chart";

export declare const iconNames: readonly IconName[];

export declare const Message: HandiconComponent;
export declare const MessageIcon: HandiconComponent;
export declare const Code: HandiconComponent;
export declare const CodeIcon: HandiconComponent;
export declare const Analytics: HandiconComponent;
export declare const AnalyticsIcon: HandiconComponent;
export declare const Wallet: HandiconComponent;
export declare const WalletIcon: HandiconComponent;
export declare const Image: HandiconComponent;
export declare const ImageIcon: HandiconComponent;
export declare const Video: HandiconComponent;
export declare const VideoIcon: HandiconComponent;
export declare const Zap: HandiconComponent;
export declare const ZapIcon: HandiconComponent;
export declare const Settings: HandiconComponent;
export declare const SettingsIcon: HandiconComponent;
export declare const Search: HandiconComponent;
export declare const SearchIcon: HandiconComponent;
export declare const Bell: HandiconComponent;
export declare const BellIcon: HandiconComponent;
export declare const Calendar: HandiconComponent;
export declare const CalendarIcon: HandiconComponent;
export declare const Mail: HandiconComponent;
export declare const MailIcon: HandiconComponent;
export declare const Folder: HandiconComponent;
export declare const FolderIcon: HandiconComponent;
export declare const FileText: HandiconComponent;
export declare const FileTextIcon: HandiconComponent;
export declare const CloudUpload: HandiconComponent;
export declare const CloudUploadIcon: HandiconComponent;
export declare const CloudDownload: HandiconComponent;
export declare const CloudDownloadIcon: HandiconComponent;
export declare const Link: HandiconComponent;
export declare const LinkIcon: HandiconComponent;
export declare const User: HandiconComponent;
export declare const UserIcon: HandiconComponent;
export declare const Users: HandiconComponent;
export declare const UsersIcon: HandiconComponent;
export declare const Lock: HandiconComponent;
export declare const LockIcon: HandiconComponent;
export declare const ShieldCheck: HandiconComponent;
export declare const ShieldCheckIcon: HandiconComponent;
export declare const Trash: HandiconComponent;
export declare const TrashIcon: HandiconComponent;
export declare const Star: HandiconComponent;
export declare const StarIcon: HandiconComponent;
export declare const Heart: HandiconComponent;
export declare const HeartIcon: HandiconComponent;
export declare const MapPin: HandiconComponent;
export declare const MapPinIcon: HandiconComponent;
export declare const Home: HandiconComponent;
export declare const HomeIcon: HandiconComponent;
export declare const Grid: HandiconComponent;
export declare const GridIcon: HandiconComponent;
export declare const ToggleOn: HandiconComponent;
export declare const ToggleOnIcon: HandiconComponent;
export declare const ToggleOff: HandiconComponent;
export declare const ToggleOffIcon: HandiconComponent;
export declare const Refresh: HandiconComponent;
export declare const RefreshIcon: HandiconComponent;
export declare const Share: HandiconComponent;
export declare const ShareIcon: HandiconComponent;
export declare const Download: HandiconComponent;
export declare const DownloadIcon: HandiconComponent;
export declare const PlusCircle: HandiconComponent;
export declare const PlusCircleIcon: HandiconComponent;
export declare const MinusCircle: HandiconComponent;
export declare const MinusCircleIcon: HandiconComponent;
export declare const CheckCircle: HandiconComponent;
export declare const CheckCircleIcon: HandiconComponent;
export declare const XCircle: HandiconComponent;
export declare const XCircleIcon: HandiconComponent;
export declare const ArrowLeftCircle: HandiconComponent;
export declare const ArrowLeftCircleIcon: HandiconComponent;
export declare const ArrowRightCircle: HandiconComponent;
export declare const ArrowRightCircleIcon: HandiconComponent;
export declare const ArrowUpCircle: HandiconComponent;
export declare const ArrowUpCircleIcon: HandiconComponent;
export declare const ArrowDownCircle: HandiconComponent;
export declare const ArrowDownCircleIcon: HandiconComponent;
export declare const Crop: HandiconComponent;
export declare const CropIcon: HandiconComponent;
export declare const Scan: HandiconComponent;
export declare const ScanIcon: HandiconComponent;
export declare const ChevronDown: HandiconComponent;
export declare const ChevronDownIcon: HandiconComponent;
export declare const ChevronUp: HandiconComponent;
export declare const ChevronUpIcon: HandiconComponent;
export declare const ChevronLeft: HandiconComponent;
export declare const ChevronLeftIcon: HandiconComponent;
export declare const ChevronRight: HandiconComponent;
export declare const ChevronRightIcon: HandiconComponent;
export declare const Menu: HandiconComponent;
export declare const MenuIcon: HandiconComponent;
export declare const Apps: HandiconComponent;
export declare const AppsIcon: HandiconComponent;
export declare const Brush: HandiconComponent;
export declare const BrushIcon: HandiconComponent;
export declare const Pencil: HandiconComponent;
export declare const PencilIcon: HandiconComponent;
export declare const Wand: HandiconComponent;
export declare const WandIcon: HandiconComponent;
export declare const Box: HandiconComponent;
export declare const BoxIcon: HandiconComponent;
export declare const Layers: HandiconComponent;
export declare const LayersIcon: HandiconComponent;
export declare const PieChart: HandiconComponent;
export declare const PieChartIcon: HandiconComponent;
export declare const TrendingUp: HandiconComponent;
export declare const TrendingUpIcon: HandiconComponent;
export declare const BarChart: HandiconComponent;
export declare const BarChartIcon: HandiconComponent;
