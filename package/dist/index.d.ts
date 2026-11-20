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
  | "bar-chart"
  | "send"
  | "bookmark"
  | "users-group"
  | "brain"
  | "bot"
  | "sparkles"
  | "neural-network"
  | "ai-chip"
  | "wand-sparkle"
  | "robot"
  | "magic-cursor"
  | "model"
  | "workflow"
  | "help-circle"
  | "info-circle"
  | "alert-triangle"
  | "warning"
  | "eye"
  | "eye-off"
  | "copy"
  | "clipboard"
  | "undo"
  | "redo"
  | "filter"
  | "sort"
  | "external-link"
  | "more-horizontal"
  | "more-vertical"
  | "command"
  | "keyboard"
  | "calendar-days"
  | "briefcase"
  | "building"
  | "receipt"
  | "invoice"
  | "calculator"
  | "bank"
  | "coins"
  | "project-timeline"
  | "kanban-board"
  | "task-list"
  | "milestone"
  | "meeting"
  | "presentation"
  | "contract"
  | "signature"
  | "fingerprint";

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
export declare const Send: HandiconComponent;
export declare const SendIcon: HandiconComponent;
export declare const Bookmark: HandiconComponent;
export declare const BookmarkIcon: HandiconComponent;
export declare const UsersGroup: HandiconComponent;
export declare const UsersGroupIcon: HandiconComponent;
export declare const Brain: HandiconComponent;
export declare const BrainIcon: HandiconComponent;
export declare const Bot: HandiconComponent;
export declare const BotIcon: HandiconComponent;
export declare const Sparkles: HandiconComponent;
export declare const SparklesIcon: HandiconComponent;
export declare const NeuralNetwork: HandiconComponent;
export declare const NeuralNetworkIcon: HandiconComponent;
export declare const AiChip: HandiconComponent;
export declare const AiChipIcon: HandiconComponent;
export declare const WandSparkle: HandiconComponent;
export declare const WandSparkleIcon: HandiconComponent;
export declare const Robot: HandiconComponent;
export declare const RobotIcon: HandiconComponent;
export declare const MagicCursor: HandiconComponent;
export declare const MagicCursorIcon: HandiconComponent;
export declare const Model: HandiconComponent;
export declare const ModelIcon: HandiconComponent;
export declare const Workflow: HandiconComponent;
export declare const WorkflowIcon: HandiconComponent;
export declare const HelpCircle: HandiconComponent;
export declare const HelpCircleIcon: HandiconComponent;
export declare const InfoCircle: HandiconComponent;
export declare const InfoCircleIcon: HandiconComponent;
export declare const AlertTriangle: HandiconComponent;
export declare const AlertTriangleIcon: HandiconComponent;
export declare const Warning: HandiconComponent;
export declare const WarningIcon: HandiconComponent;
export declare const Eye: HandiconComponent;
export declare const EyeIcon: HandiconComponent;
export declare const EyeOff: HandiconComponent;
export declare const EyeOffIcon: HandiconComponent;
export declare const Copy: HandiconComponent;
export declare const CopyIcon: HandiconComponent;
export declare const Clipboard: HandiconComponent;
export declare const ClipboardIcon: HandiconComponent;
export declare const Undo: HandiconComponent;
export declare const UndoIcon: HandiconComponent;
export declare const Redo: HandiconComponent;
export declare const RedoIcon: HandiconComponent;
export declare const Filter: HandiconComponent;
export declare const FilterIcon: HandiconComponent;
export declare const Sort: HandiconComponent;
export declare const SortIcon: HandiconComponent;
export declare const ExternalLink: HandiconComponent;
export declare const ExternalLinkIcon: HandiconComponent;
export declare const MoreHorizontal: HandiconComponent;
export declare const MoreHorizontalIcon: HandiconComponent;
export declare const MoreVertical: HandiconComponent;
export declare const MoreVerticalIcon: HandiconComponent;
export declare const Command: HandiconComponent;
export declare const CommandIcon: HandiconComponent;
export declare const Keyboard: HandiconComponent;
export declare const KeyboardIcon: HandiconComponent;
export declare const CalendarDays: HandiconComponent;
export declare const CalendarDaysIcon: HandiconComponent;
export declare const Briefcase: HandiconComponent;
export declare const BriefcaseIcon: HandiconComponent;
export declare const Building: HandiconComponent;
export declare const BuildingIcon: HandiconComponent;
export declare const Receipt: HandiconComponent;
export declare const ReceiptIcon: HandiconComponent;
export declare const Invoice: HandiconComponent;
export declare const InvoiceIcon: HandiconComponent;
export declare const Calculator: HandiconComponent;
export declare const CalculatorIcon: HandiconComponent;
export declare const Bank: HandiconComponent;
export declare const BankIcon: HandiconComponent;
export declare const Coins: HandiconComponent;
export declare const CoinsIcon: HandiconComponent;
export declare const ProjectTimeline: HandiconComponent;
export declare const ProjectTimelineIcon: HandiconComponent;
export declare const KanbanBoard: HandiconComponent;
export declare const KanbanBoardIcon: HandiconComponent;
export declare const TaskList: HandiconComponent;
export declare const TaskListIcon: HandiconComponent;
export declare const Milestone: HandiconComponent;
export declare const MilestoneIcon: HandiconComponent;
export declare const Meeting: HandiconComponent;
export declare const MeetingIcon: HandiconComponent;
export declare const Presentation: HandiconComponent;
export declare const PresentationIcon: HandiconComponent;
export declare const Contract: HandiconComponent;
export declare const ContractIcon: HandiconComponent;
export declare const Signature: HandiconComponent;
export declare const SignatureIcon: HandiconComponent;
export declare const Fingerprint: HandiconComponent;
export declare const FingerprintIcon: HandiconComponent;
