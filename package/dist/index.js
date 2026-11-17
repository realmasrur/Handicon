import { createElement, forwardRef } from "react";

const defaults = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function createIcon(name, displayName, nodes) {
  const Icon = forwardRef(function Icon(
    { size = 24, color = "currentColor", strokeWidth = 1.75, className, children, ...rest },
    ref
  ) {
    return createElement(
      "svg",
      {
        ref,
        ...defaults,
        width: size,
        height: size,
        stroke: color,
        strokeWidth,
        className: ["handicon", "handicon-" + name, className].filter(Boolean).join(" "),
        "aria-hidden": rest["aria-label"] || rest["aria-labelledby"] || rest.role ? undefined : true,
        ...rest,
      },
      ...nodes.map(([tag, props], i) => createElement(tag, { key: i, ...props })),
      children
    );
  });
  Icon.displayName = displayName;
  return Icon;
}

const Message = /*#__PURE__*/ createIcon("message", "Message", [["path",{"d":"M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-8l-4 3.5V17H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"}],["circle",{"cx":"8","cy":"10.5","r":"1","fill":"currentColor","stroke":"none"}],["circle",{"cx":"12","cy":"10.5","r":"1","fill":"currentColor","stroke":"none"}],["circle",{"cx":"16","cy":"10.5","r":"1","fill":"currentColor","stroke":"none"}]]);
const Code = /*#__PURE__*/ createIcon("code", "Code", [["path",{"d":"m8 8-4 4 4 4"}],["path",{"d":"m16 8 4 4-4 4"}],["path",{"d":"m13.5 5-3 14"}]]);
const Analytics = /*#__PURE__*/ createIcon("analytics", "Analytics", [["path",{"d":"M3 20.5h18"}],["rect",{"x":"5","y":"15","width":"3.5","height":"5.5","rx":"1"}],["rect",{"x":"10.25","y":"10","width":"3.5","height":"10.5","rx":"1"}],["rect",{"x":"15.5","y":"4","width":"3.5","height":"16.5","rx":"1"}]]);
const Wallet = /*#__PURE__*/ createIcon("wallet", "Wallet", [["rect",{"x":"3","y":"6.5","width":"18","height":"13.5","rx":"2.5"}],["path",{"d":"m6 6.5 9-2.7a1.3 1.3 0 0 1 1.6.9l.4 1.8"}],["path",{"d":"M21 11h-3.2a2.25 2.25 0 0 0 0 4.5H21"}]]);
const Image = /*#__PURE__*/ createIcon("image", "Image", [["rect",{"x":"3","y":"4","width":"18","height":"16","rx":"2.5"}],["circle",{"cx":"15.5","cy":"9.5","r":"1.6"}],["path",{"d":"m3.5 17 5-5 4 4 2.5-2.5 5.5 5.5"}]]);
const Video = /*#__PURE__*/ createIcon("video", "Video", [["rect",{"x":"3","y":"5","width":"18","height":"14","rx":"4"}],["path",{"d":"M10.5 9.5v5l4-2.5z"}]]);
const Zap = /*#__PURE__*/ createIcon("zap", "Zap", [["path",{"d":"M13 2.5 5 13.5h6l-1 8 8-11h-6z"}]]);
const Settings = /*#__PURE__*/ createIcon("settings", "Settings", [["path",{"d":"M9.87 5.02L10.39 2.84L13.61 2.84L14.13 5.02L15.43 5.55L17.33 4.38L19.62 6.67L18.45 8.57L18.98 9.87L21.16 10.39L21.16 13.61L18.98 14.13L18.45 15.43L19.62 17.33L17.33 19.62L15.43 18.45L14.13 18.98L13.61 21.16L10.39 21.16L9.87 18.98L8.57 18.45L6.67 19.62L4.38 17.33L5.55 15.43L5.02 14.13L2.84 13.61L2.84 10.39L5.02 9.87L5.55 8.57L4.38 6.67L6.67 4.38L8.57 5.55z"}],["circle",{"cx":"12","cy":"12","r":"3"}]]);
const Search = /*#__PURE__*/ createIcon("search", "Search", [["circle",{"cx":"10.5","cy":"10.5","r":"6.5"}],["path",{"d":"m20 20-4.9-4.9"}]]);
const Bell = /*#__PURE__*/ createIcon("bell", "Bell", [["path",{"d":"M6 17v-6a6 6 0 0 1 12 0v6l1.5 1.5h-15z"}],["path",{"d":"M10 21a2 2 0 0 0 4 0"}],["path",{"d":"m19.2 4.6 1.6-1.1M19.8 7.5h2"}]]);
const Calendar = /*#__PURE__*/ createIcon("calendar", "Calendar", [["rect",{"x":"3.5","y":"5","width":"17","height":"15.5","rx":"2.5"}],["path",{"d":"M8 3v4M16 3v4M3.5 10h17"}],["circle",{"cx":"8","cy":"14","r":"0.9","fill":"currentColor","stroke":"none"}],["circle",{"cx":"12","cy":"14","r":"0.9","fill":"currentColor","stroke":"none"}],["circle",{"cx":"16","cy":"14","r":"0.9","fill":"currentColor","stroke":"none"}],["circle",{"cx":"8","cy":"17.4","r":"0.9","fill":"currentColor","stroke":"none"}],["circle",{"cx":"12","cy":"17.4","r":"0.9","fill":"currentColor","stroke":"none"}],["circle",{"cx":"16","cy":"17.4","r":"0.9","fill":"currentColor","stroke":"none"}]]);
const Mail = /*#__PURE__*/ createIcon("mail", "Mail", [["rect",{"x":"3","y":"5","width":"18","height":"14","rx":"2.5"}],["path",{"d":"m3.5 7 8.5 6.5L20.5 7"}]]);
const Folder = /*#__PURE__*/ createIcon("folder", "Folder", [["path",{"d":"M3 7.5a2 2 0 0 1 2-2h4l2 2.5h8a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]]);
const FileText = /*#__PURE__*/ createIcon("file-text", "FileText", [["path",{"d":"M14 3H7.5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7.5z"}],["path",{"d":"M14 3v3.5a1 1 0 0 0 1 1h3.5"}],["path",{"d":"M9 12.5h6M9 16h6"}]]);
const CloudUpload = /*#__PURE__*/ createIcon("cloud-upload", "CloudUpload", [["path",{"d":"M7.5 18.5a4 4 0 0 1-.5-7.97 5.5 5.5 0 0 1 10.6-1.1A4.5 4.5 0 0 1 17 18.5z"}],["path",{"d":"M12 16v-5.5m0 0-2.2 2.2M12 10.5l2.2 2.2"}]]);
const CloudDownload = /*#__PURE__*/ createIcon("cloud-download", "CloudDownload", [["path",{"d":"M7.5 18.5a4 4 0 0 1-.5-7.97 5.5 5.5 0 0 1 10.6-1.1A4.5 4.5 0 0 1 17 18.5z"}],["path",{"d":"M12 10.5V16m0 0-2.2-2.2M12 16l2.2-2.2"}]]);
const Link = /*#__PURE__*/ createIcon("link", "Link", [["path",{"d":"M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1"}],["path",{"d":"M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1"}]]);
const User = /*#__PURE__*/ createIcon("user", "User", [["circle",{"cx":"12","cy":"8","r":"4"}],["path",{"d":"M4.5 20.5c0-4 3.4-6.5 7.5-6.5s7.5 2.5 7.5 6.5z"}]]);
const Users = /*#__PURE__*/ createIcon("users", "Users", [["circle",{"cx":"8.5","cy":"8","r":"3"}],["path",{"d":"M2.5 19.5c0-3.3 2.6-5.5 6-5.5s6 2.2 6 5.5z"}],["circle",{"cx":"16.5","cy":"8","r":"3"}],["path",{"d":"M15.8 14.2c3 .2 5.7 2 5.7 5.3"}]]);
const Lock = /*#__PURE__*/ createIcon("lock", "Lock", [["rect",{"x":"5","y":"10.5","width":"14","height":"10","rx":"2.5"}],["path",{"d":"M8 10.5V8a4 4 0 0 1 8 0v2.5"}],["circle",{"cx":"12","cy":"14.8","r":"1.2","fill":"currentColor","stroke":"none"}],["path",{"d":"M12 15.5v2"}]]);
const ShieldCheck = /*#__PURE__*/ createIcon("shield-check", "ShieldCheck", [["path",{"d":"M12 3 4.5 5.8v5.7c0 4.6 3.1 8 7.5 9.5 4.4-1.5 7.5-4.9 7.5-9.5V5.8z"}],["path",{"d":"m8.8 12 2.2 2.2 4.2-4.4"}]]);
const Trash = /*#__PURE__*/ createIcon("trash", "Trash", [["path",{"d":"M4 6.5h16"}],["path",{"d":"M9.5 6.5v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2"}],["path",{"d":"m6 6.5 1 12.5a2 2 0 0 0 2 1.8h6a2 2 0 0 0 2-1.8l1-12.5"}],["path",{"d":"M10 10.5v6M14 10.5v6"}]]);
const Star = /*#__PURE__*/ createIcon("star", "Star", [["path",{"d":"M12 3.7L14.47 9.5L20.75 10.06L15.99 14.2L17.41 20.34L12 17.1L6.59 20.34L8.01 14.2L3.25 10.06L9.53 9.5z"}]]);
const Heart = /*#__PURE__*/ createIcon("heart", "Heart", [["path",{"d":"M12 20.5C7 17 3.5 13.8 3.5 9.8A4.3 4.3 0 0 1 12 8a4.3 4.3 0 0 1 8.5 1.8c0 4-3.5 7.2-8.5 10.7z"}]]);
const MapPin = /*#__PURE__*/ createIcon("map-pin", "MapPin", [["path",{"d":"M12 21s-6.5-5.7-6.5-11a6.5 6.5 0 0 1 13 0c0 5.3-6.5 11-6.5 11z"}],["circle",{"cx":"12","cy":"10","r":"2.5"}]]);
const Home = /*#__PURE__*/ createIcon("home", "Home", [["path",{"d":"m3.5 11 8.5-7.5 8.5 7.5"}],["path",{"d":"M5.5 9.5V20h13V9.5"}],["path",{"d":"M10 20v-5h4v5"}]]);
const Grid = /*#__PURE__*/ createIcon("grid", "Grid", [["rect",{"x":"4","y":"4","width":"7","height":"7","rx":"1.5"}],["rect",{"x":"13","y":"4","width":"7","height":"7","rx":"1.5"}],["rect",{"x":"4","y":"13","width":"7","height":"7","rx":"1.5"}],["rect",{"x":"13","y":"13","width":"7","height":"7","rx":"1.5"}]]);
const ToggleOn = /*#__PURE__*/ createIcon("toggle-on", "ToggleOn", [["rect",{"x":"2","y":"7","width":"20","height":"10","rx":"5"}],["circle",{"cx":"16.5","cy":"12","r":"2.6","fill":"currentColor"}]]);
const ToggleOff = /*#__PURE__*/ createIcon("toggle-off", "ToggleOff", [["rect",{"x":"2","y":"7","width":"20","height":"10","rx":"5"}],["path",{"d":"m7.5 10 4 4m0-4-4 4"}]]);
const Refresh = /*#__PURE__*/ createIcon("refresh", "Refresh", [["path",{"d":"M20 11a8 8 0 0 0-14.4-4.3L4 8.5"}],["path",{"d":"M4 4v4.5h4.5"}],["path",{"d":"M4 13a8 8 0 0 0 14.4 4.3l1.6-1.8"}],["path",{"d":"M20 20v-4.5h-4.5"}]]);
const Share = /*#__PURE__*/ createIcon("share", "Share", [["circle",{"cx":"6","cy":"12","r":"2.5"}],["circle",{"cx":"17.5","cy":"6","r":"2.5"}],["circle",{"cx":"17.5","cy":"18","r":"2.5"}],["path",{"d":"m8.2 10.8 7.1-3.6M8.2 13.2l7.1 3.6"}]]);
const Download = /*#__PURE__*/ createIcon("download", "Download", [["path",{"d":"M12 4v11m0 0-4-4m4 4 4-4"}],["path",{"d":"M4.5 16v3.5h15V16"}]]);
const PlusCircle = /*#__PURE__*/ createIcon("plus-circle", "PlusCircle", [["circle",{"cx":"12","cy":"12","r":"9"}],["path",{"d":"M12 8v8M8 12h8"}]]);
const MinusCircle = /*#__PURE__*/ createIcon("minus-circle", "MinusCircle", [["circle",{"cx":"12","cy":"12","r":"9"}],["path",{"d":"M8 12h8"}]]);
const CheckCircle = /*#__PURE__*/ createIcon("check-circle", "CheckCircle", [["circle",{"cx":"12","cy":"12","r":"9"}],["path",{"d":"m8.2 12.3 2.6 2.6 5-5.3"}]]);
const XCircle = /*#__PURE__*/ createIcon("x-circle", "XCircle", [["circle",{"cx":"12","cy":"12","r":"9"}],["path",{"d":"m9 9 6 6m0-6-6 6"}]]);
const ArrowLeftCircle = /*#__PURE__*/ createIcon("arrow-left-circle", "ArrowLeftCircle", [["circle",{"cx":"12","cy":"12","r":"9"}],["path",{"d":"M16 12H8m0 0 3.5-3.5M8 12l3.5 3.5"}]]);
const ArrowRightCircle = /*#__PURE__*/ createIcon("arrow-right-circle", "ArrowRightCircle", [["circle",{"cx":"12","cy":"12","r":"9"}],["path",{"d":"M8 12h8m0 0-3.5-3.5M16 12l-3.5 3.5"}]]);
const ArrowUpCircle = /*#__PURE__*/ createIcon("arrow-up-circle", "ArrowUpCircle", [["circle",{"cx":"12","cy":"12","r":"9"}],["path",{"d":"M12 16V8m0 0-3.5 3.5M12 8l3.5 3.5"}]]);
const ArrowDownCircle = /*#__PURE__*/ createIcon("arrow-down-circle", "ArrowDownCircle", [["circle",{"cx":"12","cy":"12","r":"9"}],["path",{"d":"M12 8v8m0 0-3.5-3.5M12 16l3.5-3.5"}]]);
const Crop = /*#__PURE__*/ createIcon("crop", "Crop", [["path",{"d":"M6.5 3v14.5H21"}],["path",{"d":"M3 6.5h14.5V21"}]]);
const Scan = /*#__PURE__*/ createIcon("scan", "Scan", [["path",{"d":"M4 9V6a2 2 0 0 1 2-2h3M15 4h3a2 2 0 0 1 2 2v3M20 15v3a2 2 0 0 1-2 2h-3M9 20H6a2 2 0 0 1-2-2v-3"}]]);
const ChevronDown = /*#__PURE__*/ createIcon("chevron-down", "ChevronDown", [["path",{"d":"m6 9.5 6 6 6-6"}]]);
const ChevronUp = /*#__PURE__*/ createIcon("chevron-up", "ChevronUp", [["path",{"d":"m6 14.5 6-6 6 6"}]]);
const ChevronLeft = /*#__PURE__*/ createIcon("chevron-left", "ChevronLeft", [["path",{"d":"m14.5 6-6 6 6 6"}]]);
const ChevronRight = /*#__PURE__*/ createIcon("chevron-right", "ChevronRight", [["path",{"d":"m9.5 6 6 6-6 6"}]]);
const Menu = /*#__PURE__*/ createIcon("menu", "Menu", [["path",{"d":"M4 7h16M4 12h16M4 17h16"}]]);
const Apps = /*#__PURE__*/ createIcon("apps", "Apps", [["rect",{"x":"5","y":"5","width":"5.5","height":"5.5","rx":"1.4"}],["rect",{"x":"13.5","y":"5","width":"5.5","height":"5.5","rx":"1.4"}],["rect",{"x":"5","y":"13.5","width":"5.5","height":"5.5","rx":"1.4"}],["rect",{"x":"13.5","y":"13.5","width":"5.5","height":"5.5","rx":"1.4"}]]);
const Brush = /*#__PURE__*/ createIcon("brush", "Brush", [["path",{"d":"M20.5 3.5 12 12"}],["path",{"d":"m9 11.5 3.5 3.5c0 3-2 5.5-6 5.5-2 0-3-.5-3.5-.5 1.5-1 2-2.5 2-4 0-2.3 1.7-4.5 4-4.5z"}]]);
const Pencil = /*#__PURE__*/ createIcon("pencil", "Pencil", [["path",{"d":"m4 20 1-4.5L16.5 4a2.1 2.1 0 0 1 3 3L8 18.5z"}],["path",{"d":"m14.5 6 3 3"}]]);
const Wand = /*#__PURE__*/ createIcon("wand", "Wand", [["path",{"d":"M14 7.5 16.5 10 7 19.5a1.77 1.77 0 0 1-2.5-2.5z"}],["path",{"d":"M7 3.5v4M5 5.5h4"}],["path",{"d":"M18 15.5v4M16 17.5h4"}]]);
const Box = /*#__PURE__*/ createIcon("box", "Box", [["path",{"d":"M12 3 4 7.5v9L12 21l8-4.5v-9z"}],["path",{"d":"M4 7.5 12 12l8-4.5M12 12v9"}]]);
const Layers = /*#__PURE__*/ createIcon("layers", "Layers", [["path",{"d":"m12 3.5 8.5 4.5-8.5 4.5L3.5 8z"}],["path",{"d":"m3.5 12 8.5 4.5 8.5-4.5"}],["path",{"d":"m3.5 16 8.5 4.5 8.5-4.5"}]]);
const PieChart = /*#__PURE__*/ createIcon("pie-chart", "PieChart", [["path",{"d":"M12 12.75v-7.5a7.5 7.5 0 1 0 7.5 7.5z"}],["path",{"d":"M14.5 3.75a6.5 6.5 0 0 1 6.5 6.5h-6.5z"}]]);
const TrendingUp = /*#__PURE__*/ createIcon("trending-up", "TrendingUp", [["path",{"d":"m3.5 17 6-6 4 4 7-7.5"}],["path",{"d":"M15.5 7.5h5v5"}]]);
const BarChart = /*#__PURE__*/ createIcon("bar-chart", "BarChart", [["rect",{"x":"4","y":"13","width":"4","height":"7","rx":"1"}],["rect",{"x":"10","y":"8.5","width":"4","height":"11.5","rx":"1"}],["rect",{"x":"16","y":"4","width":"4","height":"16","rx":"1"}]]);
const Send = /*#__PURE__*/ createIcon("send", "Send", [["path",{"d":"M20.5 3.5 3.5 10.5l6.5 3 3 6.5z"}],["path",{"d":"m10 13.5 10.5-10"}]]);
const Bookmark = /*#__PURE__*/ createIcon("bookmark", "Bookmark", [["path",{"d":"M7 3.5h10a1 1 0 0 1 1 1v16l-6-4.5-6 4.5v-16a1 1 0 0 1 1-1z"}]]);
const UsersGroup = /*#__PURE__*/ createIcon("users-group", "UsersGroup", [["circle",{"cx":"12","cy":"8","r":"3"}],["path",{"d":"M6.5 20.5c0-3.3 2.4-5.5 5.5-5.5s5.5 2.2 5.5 5.5z"}],["circle",{"cx":"4.8","cy":"9.5","r":"2"}],["path",{"d":"M1.5 18c0-2.2 1.3-3.8 3.3-3.8.5 0 .9.1 1.3.2"}],["circle",{"cx":"19.2","cy":"9.5","r":"2"}],["path",{"d":"M22.5 18c0-2.2-1.3-3.8-3.3-3.8-.5 0-.9.1-1.3.2"}]]);
const Brain = /*#__PURE__*/ createIcon("brain", "Brain", [["path",{"d":"M12 5A2.6 2.6 0 0 0 7.5 5.2A2.6 2.6 0 0 0 4.5 8.5A4.5 4.5 0 0 0 4.5 15A3 3 0 0 0 8 19A2.6 2.6 0 0 0 12 19.5V5"}],["path",{"d":"M12 5A2.6 2.6 0 0 1 16.5 5.2A2.6 2.6 0 0 1 19.5 8.5A4.5 4.5 0 0 1 19.5 15A3 3 0 0 1 16 19A2.6 2.6 0 0 1 12 19.5"}],["path",{"d":"M8.5 10.5c1.4 0 2.5.9 3.5 2.5M15.5 10.5c-1.4 0-2.5.9-3.5 2.5"}]]);
const Bot = /*#__PURE__*/ createIcon("bot", "Bot", [["rect",{"x":"4","y":"8","width":"16","height":"11.5","rx":"4"}],["path",{"d":"M12 8V5.2"}],["circle",{"cx":"12","cy":"4","r":"1.2"}],["path",{"d":"M2 12.5v3M22 12.5v3M10.2 16.8h3.6"}],["circle",{"cx":"9","cy":"13.2","r":"1.1","fill":"currentColor","stroke":"none"}],["circle",{"cx":"15","cy":"13.2","r":"1.1","fill":"currentColor","stroke":"none"}]]);
const Sparkles = /*#__PURE__*/ createIcon("sparkles", "Sparkles", [["path",{"d":"M10 4.5C10.39 8.98 12.02 10.61 16.5 11C12.02 11.39 10.39 13.02 10 17.5C9.61 13.02 7.98 11.39 3.5 11C7.98 10.61 9.61 8.98 10 4.5z"}],["path",{"d":"M18.5 2.5C18.65 4.22 19.28 4.85 21 5C19.28 5.15 18.65 5.78 18.5 7.5C18.35 5.78 17.72 5.15 16 5C17.72 4.85 18.35 4.22 18.5 2.5z"}],["path",{"d":"M17.5 15C17.68 17.07 18.43 17.82 20.5 18C18.43 18.18 17.68 18.93 17.5 21C17.32 18.93 16.57 18.18 14.5 18C16.57 17.82 17.32 17.07 17.5 15z"}]]);
const NeuralNetwork = /*#__PURE__*/ createIcon("neural-network", "NeuralNetwork", [["circle",{"cx":"4.5","cy":"7","r":"1.9"}],["circle",{"cx":"4.5","cy":"17","r":"1.9"}],["circle",{"cx":"12","cy":"7","r":"1.9"}],["circle",{"cx":"12","cy":"17","r":"1.9"}],["circle",{"cx":"19.5","cy":"12","r":"1.9"}],["path",{"d":"M6.4 7L10.1 7"}],["path",{"d":"M5.64 8.52L10.86 15.48"}],["path",{"d":"M5.64 15.48L10.86 8.52"}],["path",{"d":"M6.4 17L10.1 17"}],["path",{"d":"M13.58 8.05L17.92 10.95"}],["path",{"d":"M13.58 15.95L17.92 13.05"}]]);
const AiChip = /*#__PURE__*/ createIcon("ai-chip", "AiChip", [["rect",{"x":"6","y":"6","width":"12","height":"12","rx":"2.5"}],["path",{"d":"M10 3v3M14 3v3M10 18v3M14 18v3M3 10h3M3 14h3M18 10h3M18 14h3"}],["path",{"d":"M12 8.6C12.2 10.95 13.05 11.8 15.4 12C13.05 12.2 12.2 13.05 12 15.4C11.8 13.05 10.95 12.2 8.6 12C10.95 11.8 11.8 10.95 12 8.6z"}]]);
const WandSparkle = /*#__PURE__*/ createIcon("wand-sparkle", "WandSparkle", [["path",{"d":"M4.5 19.5 14.2 9.8"}],["path",{"d":"M17.5 2.9C17.72 5.38 18.62 6.28 21.1 6.5C18.62 6.72 17.72 7.62 17.5 10.1C17.28 7.62 16.38 6.72 13.9 6.5C16.38 6.28 17.28 5.38 17.5 2.9z"}],["path",{"d":"M6 3.5v3M4.5 5h3"}],["path",{"d":"M19.5 15.5v3M18 17h3"}]]);
const Robot = /*#__PURE__*/ createIcon("robot", "Robot", [["rect",{"x":"6.5","y":"6.5","width":"11","height":"7","rx":"2.5"}],["path",{"d":"M12 6.5V4.3"}],["circle",{"cx":"12","cy":"3.2","r":"1.1"}],["rect",{"x":"4.5","y":"15.5","width":"15","height":"5.5","rx":"2"}],["path",{"d":"M12 13.5v2M9.5 18.2h5"}],["circle",{"cx":"9.8","cy":"10","r":"1","fill":"currentColor","stroke":"none"}],["circle",{"cx":"14.2","cy":"10","r":"1","fill":"currentColor","stroke":"none"}]]);
const MagicCursor = /*#__PURE__*/ createIcon("magic-cursor", "MagicCursor", [["path",{"d":"M4 4 15.5 8.5l-5.2 1.8L8.5 15.5z"}],["path",{"d":"M18 14C18.18 16.07 18.93 16.82 21 17C18.93 17.18 18.18 17.93 18 20C17.82 17.93 17.07 17.18 15 17C17.07 16.82 17.82 16.07 18 14z"}],["path",{"d":"M19 2.5v3.5M17.25 4.25h3.5"}]]);
const Model = /*#__PURE__*/ createIcon("model", "Model", [["path",{"d":"M12 3 4.5 7.5v9L12 21l7.5-4.5v-9z"}],["circle",{"cx":"12","cy":"12","r":"2.2"}],["path",{"d":"M12 9.8V3M10.1 13.1 4.5 16.5M13.9 13.1l5.6 3.4"}]]);
const Workflow = /*#__PURE__*/ createIcon("workflow", "Workflow", [["rect",{"x":"3","y":"3.5","width":"6","height":"5","rx":"1.5"}],["rect",{"x":"15","y":"3.5","width":"6","height":"5","rx":"1.5"}],["rect",{"x":"9","y":"15.5","width":"6","height":"5","rx":"1.5"}],["path",{"d":"M6 8.5v1.5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8.5M12 12v3.5"}]]);
const HelpCircle = /*#__PURE__*/ createIcon("help-circle", "HelpCircle", [["circle",{"cx":"12","cy":"12","r":"9"}],["path",{"d":"M9.3 9.4a2.7 2.7 0 1 1 3.9 2.4c-.7.4-1.2 1-1.2 1.8"}],["circle",{"cx":"12","cy":"16.8","r":"1","fill":"currentColor","stroke":"none"}]]);
const InfoCircle = /*#__PURE__*/ createIcon("info-circle", "InfoCircle", [["circle",{"cx":"12","cy":"12","r":"9"}],["path",{"d":"M12 11v5.5"}],["circle",{"cx":"12","cy":"7.8","r":"1","fill":"currentColor","stroke":"none"}]]);
const AlertTriangle = /*#__PURE__*/ createIcon("alert-triangle", "AlertTriangle", [["path",{"d":"M12 3.5 2.8 19.5a1 1 0 0 0 .9 1.5h16.6a1 1 0 0 0 .9-1.5z"}],["path",{"d":"M12 9.5v4.5"}],["circle",{"cx":"12","cy":"17.2","r":"1","fill":"currentColor","stroke":"none"}]]);
const Warning = /*#__PURE__*/ createIcon("warning", "Warning", [["path",{"d":"M8.6 3h6.8L21 8.6v6.8L15.4 21H8.6L3 15.4V8.6z"}],["path",{"d":"M12 8v5"}],["circle",{"cx":"12","cy":"16.3","r":"1","fill":"currentColor","stroke":"none"}]]);
const Eye = /*#__PURE__*/ createIcon("eye", "Eye", [["path",{"d":"M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"}],["circle",{"cx":"12","cy":"12","r":"3"}]]);
const EyeOff = /*#__PURE__*/ createIcon("eye-off", "EyeOff", [["path",{"d":"M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"}],["circle",{"cx":"12","cy":"12","r":"3"}],["path",{"d":"M4.5 4.5l15 15"}]]);
const Copy = /*#__PURE__*/ createIcon("copy", "Copy", [["rect",{"x":"9","y":"9","width":"11.5","height":"11.5","rx":"2.5"}],["path",{"d":"M5.5 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v.5"}]]);
const Clipboard = /*#__PURE__*/ createIcon("clipboard", "Clipboard", [["rect",{"x":"5","y":"4.5","width":"14","height":"16.5","rx":"2.5"}],["rect",{"x":"9","y":"2.5","width":"6","height":"4","rx":"1.5"}],["path",{"d":"M9 12h6M9 16h4"}]]);
const Undo = /*#__PURE__*/ createIcon("undo", "Undo", [["path",{"d":"M9 14 4 9l5-5"}],["path",{"d":"M4 9h10.5a5.5 5.5 0 0 1 0 11H11"}]]);
const Redo = /*#__PURE__*/ createIcon("redo", "Redo", [["path",{"d":"m15 14 5-5-5-5"}],["path",{"d":"M20 9H9.5a5.5 5.5 0 0 0 0 11H13"}]]);
const Filter = /*#__PURE__*/ createIcon("filter", "Filter", [["path",{"d":"M3.5 5h17l-6.5 7.5V19l-4 2v-8.5z"}]]);
const Sort = /*#__PURE__*/ createIcon("sort", "Sort", [["path",{"d":"M8 20V4m0 0L4.5 7.5M8 4l3.5 3.5"}],["path",{"d":"M16 4v16m0 0 3.5-3.5M16 20l-3.5-3.5"}]]);
const ExternalLink = /*#__PURE__*/ createIcon("external-link", "ExternalLink", [["path",{"d":"M13 4h7v7"}],["path",{"d":"M20 4 11 13"}],["path",{"d":"M18 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10"}]]);
const MoreHorizontal = /*#__PURE__*/ createIcon("more-horizontal", "MoreHorizontal", [["circle",{"cx":"5","cy":"12","r":"1.4","fill":"currentColor","stroke":"none"}],["circle",{"cx":"12","cy":"12","r":"1.4","fill":"currentColor","stroke":"none"}],["circle",{"cx":"19","cy":"12","r":"1.4","fill":"currentColor","stroke":"none"}]]);
const MoreVertical = /*#__PURE__*/ createIcon("more-vertical", "MoreVertical", [["circle",{"cx":"12","cy":"5","r":"1.4","fill":"currentColor","stroke":"none"}],["circle",{"cx":"12","cy":"12","r":"1.4","fill":"currentColor","stroke":"none"}],["circle",{"cx":"12","cy":"19","r":"1.4","fill":"currentColor","stroke":"none"}]]);
const Command = /*#__PURE__*/ createIcon("command", "Command", [["path",{"d":"M9 9h6v6H9z"}],["path",{"d":"M9 9V6.5A2.5 2.5 0 1 0 6.5 9H9M15 9V6.5A2.5 2.5 0 1 1 17.5 9H15M9 15v2.5A2.5 2.5 0 1 1 6.5 15H9M15 15v2.5A2.5 2.5 0 1 0 17.5 15H15"}]]);
const Keyboard = /*#__PURE__*/ createIcon("keyboard", "Keyboard", [["rect",{"x":"2.5","y":"5.5","width":"19","height":"13","rx":"2.5"}],["circle",{"cx":"6.5","cy":"9.5","r":"0.9","fill":"currentColor","stroke":"none"}],["circle",{"cx":"10.2","cy":"9.5","r":"0.9","fill":"currentColor","stroke":"none"}],["circle",{"cx":"13.8","cy":"9.5","r":"0.9","fill":"currentColor","stroke":"none"}],["circle",{"cx":"17.5","cy":"9.5","r":"0.9","fill":"currentColor","stroke":"none"}],["circle",{"cx":"6.5","cy":"12.7","r":"0.9","fill":"currentColor","stroke":"none"}],["circle",{"cx":"10.2","cy":"12.7","r":"0.9","fill":"currentColor","stroke":"none"}],["circle",{"cx":"13.8","cy":"12.7","r":"0.9","fill":"currentColor","stroke":"none"}],["circle",{"cx":"17.5","cy":"12.7","r":"0.9","fill":"currentColor","stroke":"none"}],["path",{"d":"M8 15.8h8"}]]);
const CalendarDays = /*#__PURE__*/ createIcon("calendar-days", "CalendarDays", [["rect",{"x":"3.5","y":"5","width":"17","height":"15.5","rx":"2.5"}],["path",{"d":"M8 3v4M16 3v4M3.5 10h17"}],["path",{"d":"M7.5 14h2M11 14h2M14.5 14h2M7.5 17.2h2M11 17.2h2"}]]);

export const iconNames = ["message","code","analytics","wallet","image","video","zap","settings","search","bell","calendar","mail","folder","file-text","cloud-upload","cloud-download","link","user","users","lock","shield-check","trash","star","heart","map-pin","home","grid","toggle-on","toggle-off","refresh","share","download","plus-circle","minus-circle","check-circle","x-circle","arrow-left-circle","arrow-right-circle","arrow-up-circle","arrow-down-circle","crop","scan","chevron-down","chevron-up","chevron-left","chevron-right","menu","apps","brush","pencil","wand","box","layers","pie-chart","trending-up","bar-chart","send","bookmark","users-group","brain","bot","sparkles","neural-network","ai-chip","wand-sparkle","robot","magic-cursor","model","workflow","help-circle","info-circle","alert-triangle","warning","eye","eye-off","copy","clipboard","undo","redo","filter","sort","external-link","more-horizontal","more-vertical","command","keyboard","calendar-days"];

export {
  Message,
  Message as MessageIcon,
  Code,
  Code as CodeIcon,
  Analytics,
  Analytics as AnalyticsIcon,
  Wallet,
  Wallet as WalletIcon,
  Image,
  Image as ImageIcon,
  Video,
  Video as VideoIcon,
  Zap,
  Zap as ZapIcon,
  Settings,
  Settings as SettingsIcon,
  Search,
  Search as SearchIcon,
  Bell,
  Bell as BellIcon,
  Calendar,
  Calendar as CalendarIcon,
  Mail,
  Mail as MailIcon,
  Folder,
  Folder as FolderIcon,
  FileText,
  FileText as FileTextIcon,
  CloudUpload,
  CloudUpload as CloudUploadIcon,
  CloudDownload,
  CloudDownload as CloudDownloadIcon,
  Link,
  Link as LinkIcon,
  User,
  User as UserIcon,
  Users,
  Users as UsersIcon,
  Lock,
  Lock as LockIcon,
  ShieldCheck,
  ShieldCheck as ShieldCheckIcon,
  Trash,
  Trash as TrashIcon,
  Star,
  Star as StarIcon,
  Heart,
  Heart as HeartIcon,
  MapPin,
  MapPin as MapPinIcon,
  Home,
  Home as HomeIcon,
  Grid,
  Grid as GridIcon,
  ToggleOn,
  ToggleOn as ToggleOnIcon,
  ToggleOff,
  ToggleOff as ToggleOffIcon,
  Refresh,
  Refresh as RefreshIcon,
  Share,
  Share as ShareIcon,
  Download,
  Download as DownloadIcon,
  PlusCircle,
  PlusCircle as PlusCircleIcon,
  MinusCircle,
  MinusCircle as MinusCircleIcon,
  CheckCircle,
  CheckCircle as CheckCircleIcon,
  XCircle,
  XCircle as XCircleIcon,
  ArrowLeftCircle,
  ArrowLeftCircle as ArrowLeftCircleIcon,
  ArrowRightCircle,
  ArrowRightCircle as ArrowRightCircleIcon,
  ArrowUpCircle,
  ArrowUpCircle as ArrowUpCircleIcon,
  ArrowDownCircle,
  ArrowDownCircle as ArrowDownCircleIcon,
  Crop,
  Crop as CropIcon,
  Scan,
  Scan as ScanIcon,
  ChevronDown,
  ChevronDown as ChevronDownIcon,
  ChevronUp,
  ChevronUp as ChevronUpIcon,
  ChevronLeft,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight,
  ChevronRight as ChevronRightIcon,
  Menu,
  Menu as MenuIcon,
  Apps,
  Apps as AppsIcon,
  Brush,
  Brush as BrushIcon,
  Pencil,
  Pencil as PencilIcon,
  Wand,
  Wand as WandIcon,
  Box,
  Box as BoxIcon,
  Layers,
  Layers as LayersIcon,
  PieChart,
  PieChart as PieChartIcon,
  TrendingUp,
  TrendingUp as TrendingUpIcon,
  BarChart,
  BarChart as BarChartIcon,
  Send,
  Send as SendIcon,
  Bookmark,
  Bookmark as BookmarkIcon,
  UsersGroup,
  UsersGroup as UsersGroupIcon,
  Brain,
  Brain as BrainIcon,
  Bot,
  Bot as BotIcon,
  Sparkles,
  Sparkles as SparklesIcon,
  NeuralNetwork,
  NeuralNetwork as NeuralNetworkIcon,
  AiChip,
  AiChip as AiChipIcon,
  WandSparkle,
  WandSparkle as WandSparkleIcon,
  Robot,
  Robot as RobotIcon,
  MagicCursor,
  MagicCursor as MagicCursorIcon,
  Model,
  Model as ModelIcon,
  Workflow,
  Workflow as WorkflowIcon,
  HelpCircle,
  HelpCircle as HelpCircleIcon,
  InfoCircle,
  InfoCircle as InfoCircleIcon,
  AlertTriangle,
  AlertTriangle as AlertTriangleIcon,
  Warning,
  Warning as WarningIcon,
  Eye,
  Eye as EyeIcon,
  EyeOff,
  EyeOff as EyeOffIcon,
  Copy,
  Copy as CopyIcon,
  Clipboard,
  Clipboard as ClipboardIcon,
  Undo,
  Undo as UndoIcon,
  Redo,
  Redo as RedoIcon,
  Filter,
  Filter as FilterIcon,
  Sort,
  Sort as SortIcon,
  ExternalLink,
  ExternalLink as ExternalLinkIcon,
  MoreHorizontal,
  MoreHorizontal as MoreHorizontalIcon,
  MoreVertical,
  MoreVertical as MoreVerticalIcon,
  Command,
  Command as CommandIcon,
  Keyboard,
  Keyboard as KeyboardIcon,
  CalendarDays,
  CalendarDays as CalendarDaysIcon,
};
