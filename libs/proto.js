/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.BaseDefine = (function() {

  /**
   * Namespace BaseDefine.
   * @exports BaseDefine
   * @namespace
   */
  var BaseDefine = {};

  /**
   * ServiceID enum.
   * @name BaseDefine.ServiceID
   * @enum {number}
   * @property {number} SID_NONE=0 SID_NONE value
   * @property {number} SID_LOGIN=1 SID_LOGIN value
   * @property {number} SID_NOTIFY=2 SID_NOTIFY value
   * @property {number} SID_MSG=3 SID_MSG value
   * @property {number} SID_DRIVER=4 SID_DRIVER value
   * @property {number} SID_FILE=5 SID_FILE value
   * @property {number} SID_SWITCH_SERVICE=6 SID_SWITCH_SERVICE value
   * @property {number} SID_OTHER=7 SID_OTHER value
   * @property {number} SID_INTERNAL=8 SID_INTERNAL value
   * @property {number} SID_AVCALL=9 SID_AVCALL value
   */
  BaseDefine.ServiceID = (function() {
    var valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "SID_NONE"] = 0;
    values[valuesById[1] = "SID_LOGIN"] = 1;
    values[valuesById[2] = "SID_NOTIFY"] = 2;
    values[valuesById[3] = "SID_MSG"] = 3;
    values[valuesById[4] = "SID_DRIVER"] = 4;
    values[valuesById[5] = "SID_FILE"] = 5;
    values[valuesById[6] = "SID_SWITCH_SERVICE"] = 6;
    values[valuesById[7] = "SID_OTHER"] = 7;
    values[valuesById[8] = "SID_INTERNAL"] = 8;
    values[valuesById[9] = "SID_AVCALL"] = 9;
    return values;
  })();

  /**
   * LoginCmdID enum.
   * @name BaseDefine.LoginCmdID
   * @enum {number}
   * @property {number} CID_LOGIN_NONE=0 CID_LOGIN_NONE value
   * @property {number} CID_LOGIN_REQ_MSGSERVER=257 CID_LOGIN_REQ_MSGSERVER value
   * @property {number} CID_LOGIN_RES_MSGSERVER=258 CID_LOGIN_RES_MSGSERVER value
   * @property {number} CID_LOGIN_REQ_USERLOGIN=259 CID_LOGIN_REQ_USERLOGIN value
   * @property {number} CID_LOGIN_RES_USERLOGIN=260 CID_LOGIN_RES_USERLOGIN value
   * @property {number} CID_LOGIN_REQ_LOGINOUT=261 CID_LOGIN_REQ_LOGINOUT value
   * @property {number} CID_LOGIN_RES_LOGINOUT=262 CID_LOGIN_RES_LOGINOUT value
   * @property {number} CID_LOGIN_KICK_USER=263 CID_LOGIN_KICK_USER value
   * @property {number} CID_LOGIN_REQ_DEVICETOKEN=264 CID_LOGIN_REQ_DEVICETOKEN value
   * @property {number} CID_LOGIN_RES_DEVICETOKEN=265 CID_LOGIN_RES_DEVICETOKEN value
   * @property {number} CID_LOGIN_REQ_KICKPCCLIENT=266 CID_LOGIN_REQ_KICKPCCLIENT value
   * @property {number} CID_LOGIN_RES_KICKPCCLIENT=267 CID_LOGIN_RES_KICKPCCLIENT value
   * @property {number} CID_LOGIN_REQ_PUSH_SHIELD=268 CID_LOGIN_REQ_PUSH_SHIELD value
   * @property {number} CID_LOGIN_RES_PUSH_SHIELD=269 CID_LOGIN_RES_PUSH_SHIELD value
   * @property {number} CID_LOGIN_REQ_QUERY_PUSH_SHIELD=270 CID_LOGIN_REQ_QUERY_PUSH_SHIELD value
   * @property {number} CID_LOGIN_RES_QUERY_PUSH_SHIELD=271 CID_LOGIN_RES_QUERY_PUSH_SHIELD value
   */
  BaseDefine.LoginCmdID = (function() {
    var valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "CID_LOGIN_NONE"] = 0;
    values[valuesById[257] = "CID_LOGIN_REQ_MSGSERVER"] = 257;
    values[valuesById[258] = "CID_LOGIN_RES_MSGSERVER"] = 258;
    values[valuesById[259] = "CID_LOGIN_REQ_USERLOGIN"] = 259;
    values[valuesById[260] = "CID_LOGIN_RES_USERLOGIN"] = 260;
    values[valuesById[261] = "CID_LOGIN_REQ_LOGINOUT"] = 261;
    values[valuesById[262] = "CID_LOGIN_RES_LOGINOUT"] = 262;
    values[valuesById[263] = "CID_LOGIN_KICK_USER"] = 263;
    values[valuesById[264] = "CID_LOGIN_REQ_DEVICETOKEN"] = 264;
    values[valuesById[265] = "CID_LOGIN_RES_DEVICETOKEN"] = 265;
    values[valuesById[266] = "CID_LOGIN_REQ_KICKPCCLIENT"] = 266;
    values[valuesById[267] = "CID_LOGIN_RES_KICKPCCLIENT"] = 267;
    values[valuesById[268] = "CID_LOGIN_REQ_PUSH_SHIELD"] = 268;
    values[valuesById[269] = "CID_LOGIN_RES_PUSH_SHIELD"] = 269;
    values[valuesById[270] = "CID_LOGIN_REQ_QUERY_PUSH_SHIELD"] = 270;
    values[valuesById[271] = "CID_LOGIN_RES_QUERY_PUSH_SHIELD"] = 271;
    return values;
  })();

  /**
   * NotifyCmdID enum.
   * @name BaseDefine.NotifyCmdID
   * @enum {number}
   * @property {number} CID_NOTIFY_NONE=0 CID_NOTIFY_NONE value
   * @property {number} CID_NOTIFY_REQ_ABOUT_ORDER=513 CID_NOTIFY_REQ_ABOUT_ORDER value
   * @property {number} CID_NOTIFY_RES_ABOUT_ORDER=514 CID_NOTIFY_RES_ABOUT_ORDER value
   * @property {number} CID_NOTIFY_REQ_ABOUT_PAY=515 CID_NOTIFY_REQ_ABOUT_PAY value
   * @property {number} CID_NOTIFY_RES_ABOUT_PAY=516 CID_NOTIFY_RES_ABOUT_PAY value
   * @property {number} CID_DRIVER_POSITION_REQ_ABOUT_ORDER=517 CID_DRIVER_POSITION_REQ_ABOUT_ORDER value
   * @property {number} CID_DRIVER_POSITION_RES_ABOUT_ORDER=518 CID_DRIVER_POSITION_RES_ABOUT_ORDER value
   * @property {number} CID_PUSH_REQ_ABOUT_ORDER=519 CID_PUSH_REQ_ABOUT_ORDER value
   * @property {number} CID_PUSH_RES_ABOUT_ORDER=520 CID_PUSH_RES_ABOUT_ORDER value
   * @property {number} CID_ROB_REQ_ABOUT_ORDER=512 CID_ROB_REQ_ABOUT_ORDER value
   * @property {number} CID_ROB_RES_ABOUT_ORDER=528 CID_ROB_RES_ABOUT_ORDER value
   * @property {number} CID_CHECK_APPEARANCE_REQ_ABOUT_DRIVER=529 CID_CHECK_APPEARANCE_REQ_ABOUT_DRIVER value
   * @property {number} CID_CHECK_APPEARANCE_RES_ABOUT_DRIVER=530 CID_CHECK_APPEARANCE_RES_ABOUT_DRIVER value
   * @property {number} CID_CHANGE_ORDER_REQ_ABOUT_ORDER=531 CID_CHANGE_ORDER_REQ_ABOUT_ORDER value
   * @property {number} CID_CHANGE_ORDER_RES_ABOUT_ORDER=532 CID_CHANGE_ORDER_RES_ABOUT_ORDER value
   * @property {number} CID_CHANGE_ORDER_DEST_REQ_ABOUT_MEMBER=535 CID_CHANGE_ORDER_DEST_REQ_ABOUT_MEMBER value
   * @property {number} CID_CHANGE_ORDER_DEST_RES_ABOUT_MEMBER=536 CID_CHANGE_ORDER_DEST_RES_ABOUT_MEMBER value
   * @property {number} CID_OUT_ADMIN_REQ_ABOUT_DRIVER=537 CID_OUT_ADMIN_REQ_ABOUT_DRIVER value
   */
  BaseDefine.NotifyCmdID = (function() {
    var valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "CID_NOTIFY_NONE"] = 0;
    values[valuesById[513] = "CID_NOTIFY_REQ_ABOUT_ORDER"] = 513;
    values[valuesById[514] = "CID_NOTIFY_RES_ABOUT_ORDER"] = 514;
    values[valuesById[515] = "CID_NOTIFY_REQ_ABOUT_PAY"] = 515;
    values[valuesById[516] = "CID_NOTIFY_RES_ABOUT_PAY"] = 516;
    values[valuesById[517] = "CID_DRIVER_POSITION_REQ_ABOUT_ORDER"] = 517;
    values[valuesById[518] = "CID_DRIVER_POSITION_RES_ABOUT_ORDER"] = 518;
    values[valuesById[519] = "CID_PUSH_REQ_ABOUT_ORDER"] = 519;
    values[valuesById[520] = "CID_PUSH_RES_ABOUT_ORDER"] = 520;
    values[valuesById[512] = "CID_ROB_REQ_ABOUT_ORDER"] = 512;
    values[valuesById[528] = "CID_ROB_RES_ABOUT_ORDER"] = 528;
    values[valuesById[529] = "CID_CHECK_APPEARANCE_REQ_ABOUT_DRIVER"] = 529;
    values[valuesById[530] = "CID_CHECK_APPEARANCE_RES_ABOUT_DRIVER"] = 530;
    values[valuesById[531] = "CID_CHANGE_ORDER_REQ_ABOUT_ORDER"] = 531;
    values[valuesById[532] = "CID_CHANGE_ORDER_RES_ABOUT_ORDER"] = 532;
    values[valuesById[535] = "CID_CHANGE_ORDER_DEST_REQ_ABOUT_MEMBER"] = 535;
    values[valuesById[536] = "CID_CHANGE_ORDER_DEST_RES_ABOUT_MEMBER"] = 536;
    values[valuesById[537] = "CID_OUT_ADMIN_REQ_ABOUT_DRIVER"] = 537;
    return values;
  })();

  /**
   * MessageCmdID enum.
   * @name BaseDefine.MessageCmdID
   * @enum {number}
   * @property {number} CID_MSG_NONE=0 CID_MSG_NONE value
   * @property {number} CID_MSG_DATA=769 CID_MSG_DATA value
   * @property {number} CID_MSG_DATA_ACK=770 CID_MSG_DATA_ACK value
   * @property {number} CID_MSG_READ_ACK=771 CID_MSG_READ_ACK value
   * @property {number} CID_MSG_READ_NOTIFY=772 CID_MSG_READ_NOTIFY value
   * @property {number} CID_MSG_TIME_REQUEST=773 CID_MSG_TIME_REQUEST value
   * @property {number} CID_MSG_TIME_RESPONSE=774 CID_MSG_TIME_RESPONSE value
   * @property {number} CID_MSG_UNREAD_CNT_REQUEST=775 CID_MSG_UNREAD_CNT_REQUEST value
   * @property {number} CID_MSG_UNREAD_CNT_RESPONSE=776 CID_MSG_UNREAD_CNT_RESPONSE value
   * @property {number} CID_MSG_LIST_REQUEST=777 CID_MSG_LIST_REQUEST value
   * @property {number} CID_MSG_LIST_RESPONSE=778 CID_MSG_LIST_RESPONSE value
   * @property {number} CID_MSG_GET_LATEST_MSG_ID_REQ=779 CID_MSG_GET_LATEST_MSG_ID_REQ value
   * @property {number} CID_MSG_GET_LATEST_MSG_ID_RSP=780 CID_MSG_GET_LATEST_MSG_ID_RSP value
   * @property {number} CID_MSG_GET_BY_MSG_ID_REQ=781 CID_MSG_GET_BY_MSG_ID_REQ value
   * @property {number} CID_MSG_GET_BY_MSG_ID_RES=782 CID_MSG_GET_BY_MSG_ID_RES value
   */
  BaseDefine.MessageCmdID = (function() {
    var valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "CID_MSG_NONE"] = 0;
    values[valuesById[769] = "CID_MSG_DATA"] = 769;
    values[valuesById[770] = "CID_MSG_DATA_ACK"] = 770;
    values[valuesById[771] = "CID_MSG_READ_ACK"] = 771;
    values[valuesById[772] = "CID_MSG_READ_NOTIFY"] = 772;
    values[valuesById[773] = "CID_MSG_TIME_REQUEST"] = 773;
    values[valuesById[774] = "CID_MSG_TIME_RESPONSE"] = 774;
    values[valuesById[775] = "CID_MSG_UNREAD_CNT_REQUEST"] = 775;
    values[valuesById[776] = "CID_MSG_UNREAD_CNT_RESPONSE"] = 776;
    values[valuesById[777] = "CID_MSG_LIST_REQUEST"] = 777;
    values[valuesById[778] = "CID_MSG_LIST_RESPONSE"] = 778;
    values[valuesById[779] = "CID_MSG_GET_LATEST_MSG_ID_REQ"] = 779;
    values[valuesById[780] = "CID_MSG_GET_LATEST_MSG_ID_RSP"] = 780;
    values[valuesById[781] = "CID_MSG_GET_BY_MSG_ID_REQ"] = 781;
    values[valuesById[782] = "CID_MSG_GET_BY_MSG_ID_RES"] = 782;
    return values;
  })();

  /**
   * FileCmdID enum.
   * @name BaseDefine.FileCmdID
   * @enum {number}
   * @property {number} CID_FILE_NONE=0 CID_FILE_NONE value
   * @property {number} CID_FILE_LOGIN_REQ=1281 CID_FILE_LOGIN_REQ value
   * @property {number} CID_FILE_LOGIN_RES=1282 CID_FILE_LOGIN_RES value
   * @property {number} CID_FILE_STATE=1283 CID_FILE_STATE value
   * @property {number} CID_FILE_PULL_DATA_REQ=1284 CID_FILE_PULL_DATA_REQ value
   * @property {number} CID_FILE_PULL_DATA_RSP=1285 CID_FILE_PULL_DATA_RSP value
   * @property {number} CID_FILE_REQUEST=1286 CID_FILE_REQUEST value
   * @property {number} CID_FILE_RESPONSE=1287 CID_FILE_RESPONSE value
   * @property {number} CID_FILE_NOTIFY=1288 CID_FILE_NOTIFY value
   * @property {number} CID_FILE_HAS_OFFLINE_REQ=1289 CID_FILE_HAS_OFFLINE_REQ value
   * @property {number} CID_FILE_HAS_OFFLINE_RES=1290 CID_FILE_HAS_OFFLINE_RES value
   * @property {number} CID_FILE_ADD_OFFLINE_REQ=1291 CID_FILE_ADD_OFFLINE_REQ value
   * @property {number} CID_FILE_DEL_OFFLINE_REQ=1292 CID_FILE_DEL_OFFLINE_REQ value
   */
  BaseDefine.FileCmdID = (function() {
    var valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "CID_FILE_NONE"] = 0;
    values[valuesById[1281] = "CID_FILE_LOGIN_REQ"] = 1281;
    values[valuesById[1282] = "CID_FILE_LOGIN_RES"] = 1282;
    values[valuesById[1283] = "CID_FILE_STATE"] = 1283;
    values[valuesById[1284] = "CID_FILE_PULL_DATA_REQ"] = 1284;
    values[valuesById[1285] = "CID_FILE_PULL_DATA_RSP"] = 1285;
    values[valuesById[1286] = "CID_FILE_REQUEST"] = 1286;
    values[valuesById[1287] = "CID_FILE_RESPONSE"] = 1287;
    values[valuesById[1288] = "CID_FILE_NOTIFY"] = 1288;
    values[valuesById[1289] = "CID_FILE_HAS_OFFLINE_REQ"] = 1289;
    values[valuesById[1290] = "CID_FILE_HAS_OFFLINE_RES"] = 1290;
    values[valuesById[1291] = "CID_FILE_ADD_OFFLINE_REQ"] = 1291;
    values[valuesById[1292] = "CID_FILE_DEL_OFFLINE_REQ"] = 1292;
    return values;
  })();

  /**
   * OtherCmdID enum.
   * @name BaseDefine.OtherCmdID
   * @enum {number}
   * @property {number} CID_OTHER_NONE=0 CID_OTHER_NONE value
   * @property {number} CID_OTHER_HEARTBEAT=1793 CID_OTHER_HEARTBEAT value
   * @property {number} CID_OTHER_STOP_RECV_PACKET=1794 CID_OTHER_STOP_RECV_PACKET value
   * @property {number} CID_OTHER_VALIDATE_REQ=1795 CID_OTHER_VALIDATE_REQ value
   * @property {number} CID_OTHER_VALIDATE_RSP=1796 CID_OTHER_VALIDATE_RSP value
   * @property {number} CID_OTHER_GET_DEVICE_TOKEN_REQ=1797 CID_OTHER_GET_DEVICE_TOKEN_REQ value
   * @property {number} CID_OTHER_GET_DEVICE_TOKEN_RSP=1798 CID_OTHER_GET_DEVICE_TOKEN_RSP value
   * @property {number} CID_OTHER_ROLE_SET=1799 CID_OTHER_ROLE_SET value
   * @property {number} CID_OTHER_ONLINE_USER_INFO=1800 CID_OTHER_ONLINE_USER_INFO value
   * @property {number} CID_OTHER_MSG_SERV_INFO=1801 CID_OTHER_MSG_SERV_INFO value
   * @property {number} CID_OTHER_USER_STATUS_UPDATE=1802 CID_OTHER_USER_STATUS_UPDATE value
   * @property {number} CID_OTHER_USER_CNT_UPDATE=1803 CID_OTHER_USER_CNT_UPDATE value
   * @property {number} CID_OTHER_SERVER_KICK_USER=1805 CID_OTHER_SERVER_KICK_USER value
   * @property {number} CID_OTHER_LOGIN_STATUS_NOTIFY=1806 CID_OTHER_LOGIN_STATUS_NOTIFY value
   * @property {number} CID_OTHER_PUSH_TO_USER_REQ=1807 CID_OTHER_PUSH_TO_USER_REQ value
   * @property {number} CID_OTHER_PUSH_TO_USER_RSP=1808 CID_OTHER_PUSH_TO_USER_RSP value
   * @property {number} CID_OTHER_GET_SHIELD_REQ=1809 CID_OTHER_GET_SHIELD_REQ value
   * @property {number} CID_OTHER_GET_SHIELD_RSP=1810 CID_OTHER_GET_SHIELD_RSP value
   * @property {number} CID_OTHER_FILE_TRANSFER_REQ=1841 CID_OTHER_FILE_TRANSFER_REQ value
   * @property {number} CID_OTHER_FILE_TRANSFER_RSP=1842 CID_OTHER_FILE_TRANSFER_RSP value
   * @property {number} CID_OTHER_FILE_SERVER_IP_REQ=1843 CID_OTHER_FILE_SERVER_IP_REQ value
   * @property {number} CID_OTHER_FILE_SERVER_IP_RSP=1844 CID_OTHER_FILE_SERVER_IP_RSP value
   */
  BaseDefine.OtherCmdID = (function() {
    var valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "CID_OTHER_NONE"] = 0;
    values[valuesById[1793] = "CID_OTHER_HEARTBEAT"] = 1793;
    values[valuesById[1794] = "CID_OTHER_STOP_RECV_PACKET"] = 1794;
    values[valuesById[1795] = "CID_OTHER_VALIDATE_REQ"] = 1795;
    values[valuesById[1796] = "CID_OTHER_VALIDATE_RSP"] = 1796;
    values[valuesById[1797] = "CID_OTHER_GET_DEVICE_TOKEN_REQ"] = 1797;
    values[valuesById[1798] = "CID_OTHER_GET_DEVICE_TOKEN_RSP"] = 1798;
    values[valuesById[1799] = "CID_OTHER_ROLE_SET"] = 1799;
    values[valuesById[1800] = "CID_OTHER_ONLINE_USER_INFO"] = 1800;
    values[valuesById[1801] = "CID_OTHER_MSG_SERV_INFO"] = 1801;
    values[valuesById[1802] = "CID_OTHER_USER_STATUS_UPDATE"] = 1802;
    values[valuesById[1803] = "CID_OTHER_USER_CNT_UPDATE"] = 1803;
    values[valuesById[1805] = "CID_OTHER_SERVER_KICK_USER"] = 1805;
    values[valuesById[1806] = "CID_OTHER_LOGIN_STATUS_NOTIFY"] = 1806;
    values[valuesById[1807] = "CID_OTHER_PUSH_TO_USER_REQ"] = 1807;
    values[valuesById[1808] = "CID_OTHER_PUSH_TO_USER_RSP"] = 1808;
    values[valuesById[1809] = "CID_OTHER_GET_SHIELD_REQ"] = 1809;
    values[valuesById[1810] = "CID_OTHER_GET_SHIELD_RSP"] = 1810;
    values[valuesById[1841] = "CID_OTHER_FILE_TRANSFER_REQ"] = 1841;
    values[valuesById[1842] = "CID_OTHER_FILE_TRANSFER_RSP"] = 1842;
    values[valuesById[1843] = "CID_OTHER_FILE_SERVER_IP_REQ"] = 1843;
    values[valuesById[1844] = "CID_OTHER_FILE_SERVER_IP_RSP"] = 1844;
    return values;
  })();

  /**
   * ResultType enum.
   * @name BaseDefine.ResultType
   * @enum {number}
   * @property {number} REFUSE_REASON_NONE=0 REFUSE_REASON_NONE value
   * @property {number} REFUSE_REASON_NO_MSG_SERVER=1 REFUSE_REASON_NO_MSG_SERVER value
   * @property {number} REFUSE_REASON_MSG_SERVER_FULL=2 REFUSE_REASON_MSG_SERVER_FULL value
   * @property {number} REFUSE_REASON_NO_DB_SERVER=3 REFUSE_REASON_NO_DB_SERVER value
   * @property {number} REFUSE_REASON_NO_LOGIN_SERVER=4 REFUSE_REASON_NO_LOGIN_SERVER value
   * @property {number} REFUSE_REASON_NO_ROUTE_SERVER=5 REFUSE_REASON_NO_ROUTE_SERVER value
   * @property {number} REFUSE_REASON_DB_VALIDATE_FAILED=6 REFUSE_REASON_DB_VALIDATE_FAILED value
   * @property {number} REFUSE_REASON_VERSION_TOO_OLD=7 REFUSE_REASON_VERSION_TOO_OLD value
   */
  BaseDefine.ResultType = (function() {
    var valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "REFUSE_REASON_NONE"] = 0;
    values[valuesById[1] = "REFUSE_REASON_NO_MSG_SERVER"] = 1;
    values[valuesById[2] = "REFUSE_REASON_MSG_SERVER_FULL"] = 2;
    values[valuesById[3] = "REFUSE_REASON_NO_DB_SERVER"] = 3;
    values[valuesById[4] = "REFUSE_REASON_NO_LOGIN_SERVER"] = 4;
    values[valuesById[5] = "REFUSE_REASON_NO_ROUTE_SERVER"] = 5;
    values[valuesById[6] = "REFUSE_REASON_DB_VALIDATE_FAILED"] = 6;
    values[valuesById[7] = "REFUSE_REASON_VERSION_TOO_OLD"] = 7;
    return values;
  })();

  /**
   * KickReasonType enum.
   * @name BaseDefine.KickReasonType
   * @enum {number}
   * @property {number} KICK_REASON_NONE=0 KICK_REASON_NONE value
   * @property {number} KICK_REASON_DUPLICATE_USER=1 KICK_REASON_DUPLICATE_USER value
   * @property {number} KICK_REASON_MOBILE_KICK=2 KICK_REASON_MOBILE_KICK value
   */
  BaseDefine.KickReasonType = (function() {
    var valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "KICK_REASON_NONE"] = 0;
    values[valuesById[1] = "KICK_REASON_DUPLICATE_USER"] = 1;
    values[valuesById[2] = "KICK_REASON_MOBILE_KICK"] = 2;
    return values;
  })();

  /**
   * OnlineListType enum.
   * @name BaseDefine.OnlineListType
   * @enum {number}
   * @property {number} ONLINE_LIST_TYPE_NONE=0 ONLINE_LIST_TYPE_NONE value
   * @property {number} ONLINE_LIST_TYPE_FRIEND_LIST=1 ONLINE_LIST_TYPE_FRIEND_LIST value
   */
  BaseDefine.OnlineListType = (function() {
    var valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "ONLINE_LIST_TYPE_NONE"] = 0;
    values[valuesById[1] = "ONLINE_LIST_TYPE_FRIEND_LIST"] = 1;
    return values;
  })();

  /**
   * UserType enum.
   * @name BaseDefine.UserType
   * @enum {number}
   * @property {number} USER_NONE=0 USER_NONE value
   * @property {number} USER=1 USER value
   * @property {number} MEMBER=2 MEMBER value
   * @property {number} DRIVER=3 DRIVER value
   */
  BaseDefine.UserType = (function() {
    var valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "USER_NONE"] = 0;
    values[valuesById[1] = "USER"] = 1;
    values[valuesById[2] = "MEMBER"] = 2;
    values[valuesById[3] = "DRIVER"] = 3;
    return values;
  })();

  /**
   * UserStatType enum.
   * @name BaseDefine.UserStatType
   * @enum {number}
   * @property {number} USER_STATUS_NONE=0 USER_STATUS_NONE value
   * @property {number} USER_STATUS_ONLINE=1 USER_STATUS_ONLINE value
   * @property {number} USER_STATUS_OFFLINE=2 USER_STATUS_OFFLINE value
   * @property {number} USER_STATUS_LEAVE=3 USER_STATUS_LEAVE value
   */
  BaseDefine.UserStatType = (function() {
    var valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "USER_STATUS_NONE"] = 0;
    values[valuesById[1] = "USER_STATUS_ONLINE"] = 1;
    values[valuesById[2] = "USER_STATUS_OFFLINE"] = 2;
    values[valuesById[3] = "USER_STATUS_LEAVE"] = 3;
    return values;
  })();

  /**
   * SessionType enum.
   * @name BaseDefine.SessionType
   * @enum {number}
   * @property {number} SESSION_TYPE_NONE=0 SESSION_TYPE_NONE value
   * @property {number} SESSION_TYPE_SINGLE=1 SESSION_TYPE_SINGLE value
   * @property {number} SESSION_TYPE_GROUP=2 SESSION_TYPE_GROUP value
   */
  BaseDefine.SessionType = (function() {
    var valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "SESSION_TYPE_NONE"] = 0;
    values[valuesById[1] = "SESSION_TYPE_SINGLE"] = 1;
    values[valuesById[2] = "SESSION_TYPE_GROUP"] = 2;
    return values;
  })();

  /**
   * MsgType enum.
   * @name BaseDefine.MsgType
   * @enum {number}
   * @property {number} MSG_TYPE_SINGLE_NONE=0 MSG_TYPE_SINGLE_NONE value
   * @property {number} MSG_TYPE_SINGLE_TEXT=1 MSG_TYPE_SINGLE_TEXT value
   * @property {number} MSG_TYPE_SINGLE_AUDIO=2 MSG_TYPE_SINGLE_AUDIO value
   * @property {number} MSG_TYPE_GROUP_TEXT=17 MSG_TYPE_GROUP_TEXT value
   * @property {number} MSG_TYPE_GROUP_AUDIO=18 MSG_TYPE_GROUP_AUDIO value
   */
  BaseDefine.MsgType = (function() {
    var valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "MSG_TYPE_SINGLE_NONE"] = 0;
    values[valuesById[1] = "MSG_TYPE_SINGLE_TEXT"] = 1;
    values[valuesById[2] = "MSG_TYPE_SINGLE_AUDIO"] = 2;
    values[valuesById[17] = "MSG_TYPE_GROUP_TEXT"] = 17;
    values[valuesById[18] = "MSG_TYPE_GROUP_AUDIO"] = 18;
    return values;
  })();

  /**
   * ClientType enum.
   * @name BaseDefine.ClientType
   * @enum {number}
   * @property {number} CLIENT_TYPE_NONE=0 CLIENT_TYPE_NONE value
   * @property {number} CLIENT_TYPE_WINDOWS=1 CLIENT_TYPE_WINDOWS value
   * @property {number} CLIENT_TYPE_MAC=2 CLIENT_TYPE_MAC value
   * @property {number} CLIENT_TYPE_IOS=17 CLIENT_TYPE_IOS value
   * @property {number} CLIENT_TYPE_ANDROID=18 CLIENT_TYPE_ANDROID value
   * @property {number} CLIENT_TYPE_WEB=19 CLIENT_TYPE_WEB value
   */
  BaseDefine.ClientType = (function() {
    var valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "CLIENT_TYPE_NONE"] = 0;
    values[valuesById[1] = "CLIENT_TYPE_WINDOWS"] = 1;
    values[valuesById[2] = "CLIENT_TYPE_MAC"] = 2;
    values[valuesById[17] = "CLIENT_TYPE_IOS"] = 17;
    values[valuesById[18] = "CLIENT_TYPE_ANDROID"] = 18;
    values[valuesById[19] = "CLIENT_TYPE_WEB"] = 19;
    return values;
  })();

  /**
   * GroupType enum.
   * @name BaseDefine.GroupType
   * @enum {number}
   * @property {number} GROUP_TYPE_NONE=0 GROUP_TYPE_NONE value
   * @property {number} GROUP_TYPE_NORMAL=1 GROUP_TYPE_NORMAL value
   * @property {number} GROUP_TYPE_TMP=2 GROUP_TYPE_TMP value
   */
  BaseDefine.GroupType = (function() {
    var valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "GROUP_TYPE_NONE"] = 0;
    values[valuesById[1] = "GROUP_TYPE_NORMAL"] = 1;
    values[valuesById[2] = "GROUP_TYPE_TMP"] = 2;
    return values;
  })();

  /**
   * GroupModifyType enum.
   * @name BaseDefine.GroupModifyType
   * @enum {number}
   * @property {number} GROUP_MODIFY_TYPE_NONE=0 GROUP_MODIFY_TYPE_NONE value
   * @property {number} GROUP_MODIFY_TYPE_ADD=1 GROUP_MODIFY_TYPE_ADD value
   * @property {number} GROUP_MODIFY_TYPE_DEL=2 GROUP_MODIFY_TYPE_DEL value
   */
  BaseDefine.GroupModifyType = (function() {
    var valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "GROUP_MODIFY_TYPE_NONE"] = 0;
    values[valuesById[1] = "GROUP_MODIFY_TYPE_ADD"] = 1;
    values[valuesById[2] = "GROUP_MODIFY_TYPE_DEL"] = 2;
    return values;
  })();

  /**
   * TransferFileType enum.
   * @name BaseDefine.TransferFileType
   * @enum {number}
   * @property {number} FILE_TYPE_NONE=0 FILE_TYPE_NONE value
   * @property {number} FILE_TYPE_ONLINE=1 FILE_TYPE_ONLINE value
   * @property {number} FILE_TYPE_OFFLINE=2 FILE_TYPE_OFFLINE value
   */
  BaseDefine.TransferFileType = (function() {
    var valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "FILE_TYPE_NONE"] = 0;
    values[valuesById[1] = "FILE_TYPE_ONLINE"] = 1;
    values[valuesById[2] = "FILE_TYPE_OFFLINE"] = 2;
    return values;
  })();

  /**
   * ClientFileState enum.
   * @name BaseDefine.ClientFileState
   * @enum {number}
   * @property {number} CLIENT_FILE_PEER_READY=0 CLIENT_FILE_PEER_READY value
   * @property {number} CLIENT_FILE_CANCEL=1 CLIENT_FILE_CANCEL value
   * @property {number} CLIENT_FILE_REFUSE=2 CLIENT_FILE_REFUSE value
   * @property {number} CLIENT_FILE_DONE=3 CLIENT_FILE_DONE value
   */
  BaseDefine.ClientFileState = (function() {
    var valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "CLIENT_FILE_PEER_READY"] = 0;
    values[valuesById[1] = "CLIENT_FILE_CANCEL"] = 1;
    values[valuesById[2] = "CLIENT_FILE_REFUSE"] = 2;
    values[valuesById[3] = "CLIENT_FILE_DONE"] = 3;
    return values;
  })();

  /**
   * ClientFileRole enum.
   * @name BaseDefine.ClientFileRole
   * @enum {number}
   * @property {number} CLIENT_REALTIME_NONE=0 CLIENT_REALTIME_NONE value
   * @property {number} CLIENT_REALTIME_SENDER=1 CLIENT_REALTIME_SENDER value
   * @property {number} CLIENT_REALTIME_RECVER=2 CLIENT_REALTIME_RECVER value
   * @property {number} CLIENT_OFFLINE_UPLOAD=3 CLIENT_OFFLINE_UPLOAD value
   * @property {number} CLIENT_OFFLINE_DOWNLOAD=4 CLIENT_OFFLINE_DOWNLOAD value
   */
  BaseDefine.ClientFileRole = (function() {
    var valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "CLIENT_REALTIME_NONE"] = 0;
    values[valuesById[1] = "CLIENT_REALTIME_SENDER"] = 1;
    values[valuesById[2] = "CLIENT_REALTIME_RECVER"] = 2;
    values[valuesById[3] = "CLIENT_OFFLINE_UPLOAD"] = 3;
    values[valuesById[4] = "CLIENT_OFFLINE_DOWNLOAD"] = 4;
    return values;
  })();

  /**
   * FileServerError enum.
   * @name BaseDefine.FileServerError
   * @enum {number}
   * @property {number} FILE_SERVER_ERRNO_OK=0 FILE_SERVER_ERRNO_OK value
   * @property {number} FILE_SERVER_ERRNO_CREATE_TASK_ID_ERROR=1 FILE_SERVER_ERRNO_CREATE_TASK_ID_ERROR value
   * @property {number} FILE_SERVER_ERRNO_CREATE_TASK_ERROR=2 FILE_SERVER_ERRNO_CREATE_TASK_ERROR value
   * @property {number} FILE_SERVER_ERRNO_LOGIN_INVALID_TOKEN=3 FILE_SERVER_ERRNO_LOGIN_INVALID_TOKEN value
   * @property {number} FILE_SERVER_ERRNO_INVALID_USER_FOR_TASK=4 FILE_SERVER_ERRNO_INVALID_USER_FOR_TASK value
   * @property {number} FILE_SERVER_ERRNO_PULL_DATA_WITH_INVALID_TASK_ID=5 FILE_SERVER_ERRNO_PULL_DATA_WITH_INVALID_TASK_ID value
   * @property {number} FILE_SERVER_ERRNO_PULL_DATA_ILLIEAGE_USER=6 FILE_SERVER_ERRNO_PULL_DATA_ILLIEAGE_USER value
   * @property {number} FILE_SERVER_ERRNO_PULL_DATA_MKDIR_ERROR=7 FILE_SERVER_ERRNO_PULL_DATA_MKDIR_ERROR value
   * @property {number} FILE_SERVER_ERRNO_PULL_DATA_OPEN_FILE_ERROR=8 FILE_SERVER_ERRNO_PULL_DATA_OPEN_FILE_ERROR value
   * @property {number} FILE_SERVER_ERRNO_PULL_DATA_READ_FILE_HEADER_ERROR=9 FILE_SERVER_ERRNO_PULL_DATA_READ_FILE_HEADER_ERROR value
   * @property {number} FILE_SERVER_ERRNO_PULL_DATA_ALLOC_MEM_ERROR=10 FILE_SERVER_ERRNO_PULL_DATA_ALLOC_MEM_ERROR value
   * @property {number} FILE_SERVER_ERRNO_PULL_DATA_SEEK_OFFSET_ERROR=11 FILE_SERVER_ERRNO_PULL_DATA_SEEK_OFFSET_ERROR value
   * @property {number} FILE_SERVER_ERRNO_PULL_DATA_FINISHED=12 FILE_SERVER_ERRNO_PULL_DATA_FINISHED value
   */
  BaseDefine.FileServerError = (function() {
    var valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "FILE_SERVER_ERRNO_OK"] = 0;
    values[valuesById[1] = "FILE_SERVER_ERRNO_CREATE_TASK_ID_ERROR"] = 1;
    values[valuesById[2] = "FILE_SERVER_ERRNO_CREATE_TASK_ERROR"] = 2;
    values[valuesById[3] = "FILE_SERVER_ERRNO_LOGIN_INVALID_TOKEN"] = 3;
    values[valuesById[4] = "FILE_SERVER_ERRNO_INVALID_USER_FOR_TASK"] = 4;
    values[valuesById[5] = "FILE_SERVER_ERRNO_PULL_DATA_WITH_INVALID_TASK_ID"] = 5;
    values[valuesById[6] = "FILE_SERVER_ERRNO_PULL_DATA_ILLIEAGE_USER"] = 6;
    values[valuesById[7] = "FILE_SERVER_ERRNO_PULL_DATA_MKDIR_ERROR"] = 7;
    values[valuesById[8] = "FILE_SERVER_ERRNO_PULL_DATA_OPEN_FILE_ERROR"] = 8;
    values[valuesById[9] = "FILE_SERVER_ERRNO_PULL_DATA_READ_FILE_HEADER_ERROR"] = 9;
    values[valuesById[10] = "FILE_SERVER_ERRNO_PULL_DATA_ALLOC_MEM_ERROR"] = 10;
    values[valuesById[11] = "FILE_SERVER_ERRNO_PULL_DATA_SEEK_OFFSET_ERROR"] = 11;
    values[valuesById[12] = "FILE_SERVER_ERRNO_PULL_DATA_FINISHED"] = 12;
    return values;
  })();

  /**
   * SessionStatusType enum.
   * @name BaseDefine.SessionStatusType
   * @enum {number}
   * @property {number} SESSION_STATUS_OK=0 SESSION_STATUS_OK value
   * @property {number} SESSION_STATUS_DELETE=1 SESSION_STATUS_DELETE value
   */
  BaseDefine.SessionStatusType = (function() {
    var valuesById = {},
      values = Object.create(valuesById);
    values[valuesById[0] = "SESSION_STATUS_OK"] = 0;
    values[valuesById[1] = "SESSION_STATUS_DELETE"] = 1;
    return values;
  })();

  BaseDefine.IpAddr = (function() {

    /**
     * Properties of an IpAddr.
     * @memberof BaseDefine
     * @interface IIpAddr
     * @property {string|null} [ip] IpAddr ip
     * @property {number|null} [port] IpAddr port
     */

    /**
     * Constructs a new IpAddr.
     * @memberof BaseDefine
     * @classdesc Represents an IpAddr.
     * @implements IIpAddr
     * @constructor
     * @param {BaseDefine.IIpAddr=} [properties] Properties to set
     */
    function IpAddr(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * IpAddr ip.
     * @member {string} ip
     * @memberof BaseDefine.IpAddr
     * @instance
     */
    IpAddr.prototype.ip = "";

    /**
     * IpAddr port.
     * @member {number} port
     * @memberof BaseDefine.IpAddr
     * @instance
     */
    IpAddr.prototype.port = 0;

    /**
     * Creates a new IpAddr instance using the specified properties.
     * @function create
     * @memberof BaseDefine.IpAddr
     * @static
     * @param {BaseDefine.IIpAddr=} [properties] Properties to set
     * @returns {BaseDefine.IpAddr} IpAddr instance
     */
    IpAddr.create = function create(properties) {
      return new IpAddr(properties);
    };

    /**
     * Encodes the specified IpAddr message. Does not implicitly {@link BaseDefine.IpAddr.verify|verify} messages.
     * @function encode
     * @memberof BaseDefine.IpAddr
     * @static
     * @param {BaseDefine.IIpAddr} message IpAddr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IpAddr.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
        writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.ip);
      if (message.port != null && Object.hasOwnProperty.call(message, "port"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).uint32(message.port);
      return writer;
    };

    /**
     * Encodes the specified IpAddr message, length delimited. Does not implicitly {@link BaseDefine.IpAddr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BaseDefine.IpAddr
     * @static
     * @param {BaseDefine.IIpAddr} message IpAddr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IpAddr.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an IpAddr message from the specified reader or buffer.
     * @function decode
     * @memberof BaseDefine.IpAddr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BaseDefine.IpAddr} IpAddr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IpAddr.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.BaseDefine.IpAddr();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.ip = reader.string();
          break;
        case 2:
          message.port = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes an IpAddr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BaseDefine.IpAddr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BaseDefine.IpAddr} IpAddr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IpAddr.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an IpAddr message.
     * @function verify
     * @memberof BaseDefine.IpAddr
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IpAddr.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.ip != null && message.hasOwnProperty("ip"))
        if (!$util.isString(message.ip))
          return "ip: string expected";
      if (message.port != null && message.hasOwnProperty("port"))
        if (!$util.isInteger(message.port))
          return "port: integer expected";
      return null;
    };

    /**
     * Creates an IpAddr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BaseDefine.IpAddr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BaseDefine.IpAddr} IpAddr
     */
    IpAddr.fromObject = function fromObject(object) {
      if (object instanceof $root.BaseDefine.IpAddr)
        return object;
      var message = new $root.BaseDefine.IpAddr();
      if (object.ip != null)
        message.ip = String(object.ip);
      if (object.port != null)
        message.port = object.port >>> 0;
      return message;
    };

    /**
     * Creates a plain object from an IpAddr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BaseDefine.IpAddr
     * @static
     * @param {BaseDefine.IpAddr} message IpAddr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IpAddr.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.ip = "";
        object.port = 0;
      }
      if (message.ip != null && message.hasOwnProperty("ip"))
        object.ip = message.ip;
      if (message.port != null && message.hasOwnProperty("port"))
        object.port = message.port;
      return object;
    };

    /**
     * Converts this IpAddr to JSON.
     * @function toJSON
     * @memberof BaseDefine.IpAddr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IpAddr.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return IpAddr;
  })();

  BaseDefine.UserInfo = (function() {

    /**
     * Properties of a UserInfo.
     * @memberof BaseDefine
     * @interface IUserInfo
     * @property {number|Long|null} [userId] UserInfo userId
     * @property {number|null} [userGender] 用户性别,男：1 ;女：2; 未知：0
     * @property {string|null} [userNickName] UserInfo userNickName
     * @property {string|null} [avatarUrl] UserInfo avatarUrl
     * @property {number|Long|null} [departmentId] UserInfo departmentId
     * @property {string|null} [email] UserInfo email
     * @property {string|null} [userRealName] UserInfo userRealName
     * @property {string|null} [userTel] UserInfo userTel
     * @property {string|null} [userDomain] UserInfo userDomain
     * @property {number|null} [status] UserInfo status
     * @property {string|null} [signInfo] UserInfo signInfo
     */

    /**
     * Constructs a new UserInfo.
     * @memberof BaseDefine
     * @classdesc Represents a UserInfo.
     * @implements IUserInfo
     * @constructor
     * @param {BaseDefine.IUserInfo=} [properties] Properties to set
     */
    function UserInfo(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserInfo userId.
     * @member {number|Long} userId
     * @memberof BaseDefine.UserInfo
     * @instance
     */
    UserInfo.prototype.userId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * 用户性别,男：1 ;女：2; 未知：0
     * @member {number} userGender
     * @memberof BaseDefine.UserInfo
     * @instance
     */
    UserInfo.prototype.userGender = 0;

    /**
     * UserInfo userNickName.
     * @member {string} userNickName
     * @memberof BaseDefine.UserInfo
     * @instance
     */
    UserInfo.prototype.userNickName = "";

    /**
     * UserInfo avatarUrl.
     * @member {string} avatarUrl
     * @memberof BaseDefine.UserInfo
     * @instance
     */
    UserInfo.prototype.avatarUrl = "";

    /**
     * UserInfo departmentId.
     * @member {number|Long} departmentId
     * @memberof BaseDefine.UserInfo
     * @instance
     */
    UserInfo.prototype.departmentId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * UserInfo email.
     * @member {string} email
     * @memberof BaseDefine.UserInfo
     * @instance
     */
    UserInfo.prototype.email = "";

    /**
     * UserInfo userRealName.
     * @member {string} userRealName
     * @memberof BaseDefine.UserInfo
     * @instance
     */
    UserInfo.prototype.userRealName = "";

    /**
     * UserInfo userTel.
     * @member {string} userTel
     * @memberof BaseDefine.UserInfo
     * @instance
     */
    UserInfo.prototype.userTel = "";

    /**
     * UserInfo userDomain.
     * @member {string} userDomain
     * @memberof BaseDefine.UserInfo
     * @instance
     */
    UserInfo.prototype.userDomain = "";

    /**
     * UserInfo status.
     * @member {number} status
     * @memberof BaseDefine.UserInfo
     * @instance
     */
    UserInfo.prototype.status = 0;

    /**
     * UserInfo signInfo.
     * @member {string} signInfo
     * @memberof BaseDefine.UserInfo
     * @instance
     */
    UserInfo.prototype.signInfo = "";

    /**
     * Creates a new UserInfo instance using the specified properties.
     * @function create
     * @memberof BaseDefine.UserInfo
     * @static
     * @param {BaseDefine.IUserInfo=} [properties] Properties to set
     * @returns {BaseDefine.UserInfo} UserInfo instance
     */
    UserInfo.create = function create(properties) {
      return new UserInfo(properties);
    };

    /**
     * Encodes the specified UserInfo message. Does not implicitly {@link BaseDefine.UserInfo.verify|verify} messages.
     * @function encode
     * @memberof BaseDefine.UserInfo
     * @static
     * @param {BaseDefine.IUserInfo} message UserInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserInfo.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint64(message.userId);
      if (message.userGender != null && Object.hasOwnProperty.call(message, "userGender"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).uint32(message.userGender);
      if (message.userNickName != null && Object.hasOwnProperty.call(message, "userNickName"))
        writer.uint32( /* id 3, wireType 2 =*/ 26).string(message.userNickName);
      if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
        writer.uint32( /* id 4, wireType 2 =*/ 34).string(message.avatarUrl);
      if (message.departmentId != null && Object.hasOwnProperty.call(message, "departmentId"))
        writer.uint32( /* id 5, wireType 0 =*/ 40).uint64(message.departmentId);
      if (message.email != null && Object.hasOwnProperty.call(message, "email"))
        writer.uint32( /* id 6, wireType 2 =*/ 50).string(message.email);
      if (message.userRealName != null && Object.hasOwnProperty.call(message, "userRealName"))
        writer.uint32( /* id 7, wireType 2 =*/ 58).string(message.userRealName);
      if (message.userTel != null && Object.hasOwnProperty.call(message, "userTel"))
        writer.uint32( /* id 8, wireType 2 =*/ 66).string(message.userTel);
      if (message.userDomain != null && Object.hasOwnProperty.call(message, "userDomain"))
        writer.uint32( /* id 9, wireType 2 =*/ 74).string(message.userDomain);
      if (message.status != null && Object.hasOwnProperty.call(message, "status"))
        writer.uint32( /* id 10, wireType 0 =*/ 80).uint32(message.status);
      if (message.signInfo != null && Object.hasOwnProperty.call(message, "signInfo"))
        writer.uint32( /* id 11, wireType 2 =*/ 90).string(message.signInfo);
      return writer;
    };

    /**
     * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link BaseDefine.UserInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BaseDefine.UserInfo
     * @static
     * @param {BaseDefine.IUserInfo} message UserInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserInfo message from the specified reader or buffer.
     * @function decode
     * @memberof BaseDefine.UserInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BaseDefine.UserInfo} UserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserInfo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.BaseDefine.UserInfo();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint64();
          break;
        case 2:
          message.userGender = reader.uint32();
          break;
        case 3:
          message.userNickName = reader.string();
          break;
        case 4:
          message.avatarUrl = reader.string();
          break;
        case 5:
          message.departmentId = reader.uint64();
          break;
        case 6:
          message.email = reader.string();
          break;
        case 7:
          message.userRealName = reader.string();
          break;
        case 8:
          message.userTel = reader.string();
          break;
        case 9:
          message.userDomain = reader.string();
          break;
        case 10:
          message.status = reader.uint32();
          break;
        case 11:
          message.signInfo = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a UserInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BaseDefine.UserInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BaseDefine.UserInfo} UserInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserInfo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserInfo message.
     * @function verify
     * @memberof BaseDefine.UserInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserInfo.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) &&
            $util.isInteger(message.userId.high)))
          return "userId: integer|Long expected";
      if (message.userGender != null && message.hasOwnProperty("userGender"))
        if (!$util.isInteger(message.userGender))
          return "userGender: integer expected";
      if (message.userNickName != null && message.hasOwnProperty("userNickName"))
        if (!$util.isString(message.userNickName))
          return "userNickName: string expected";
      if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
        if (!$util.isString(message.avatarUrl))
          return "avatarUrl: string expected";
      if (message.departmentId != null && message.hasOwnProperty("departmentId"))
        if (!$util.isInteger(message.departmentId) && !(message.departmentId && $util.isInteger(message
          .departmentId.low) && $util.isInteger(message.departmentId.high)))
          return "departmentId: integer|Long expected";
      if (message.email != null && message.hasOwnProperty("email"))
        if (!$util.isString(message.email))
          return "email: string expected";
      if (message.userRealName != null && message.hasOwnProperty("userRealName"))
        if (!$util.isString(message.userRealName))
          return "userRealName: string expected";
      if (message.userTel != null && message.hasOwnProperty("userTel"))
        if (!$util.isString(message.userTel))
          return "userTel: string expected";
      if (message.userDomain != null && message.hasOwnProperty("userDomain"))
        if (!$util.isString(message.userDomain))
          return "userDomain: string expected";
      if (message.status != null && message.hasOwnProperty("status"))
        if (!$util.isInteger(message.status))
          return "status: integer expected";
      if (message.signInfo != null && message.hasOwnProperty("signInfo"))
        if (!$util.isString(message.signInfo))
          return "signInfo: string expected";
      return null;
    };

    /**
     * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BaseDefine.UserInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BaseDefine.UserInfo} UserInfo
     */
    UserInfo.fromObject = function fromObject(object) {
      if (object instanceof $root.BaseDefine.UserInfo)
        return object;
      var message = new $root.BaseDefine.UserInfo();
      if (object.userId != null)
        if ($util.Long)
          (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
        else if (typeof object.userId === "string")
          message.userId = parseInt(object.userId, 10);
        else if (typeof object.userId === "number")
          message.userId = object.userId;
        else if (typeof object.userId === "object")
          message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
      if (object.userGender != null)
        message.userGender = object.userGender >>> 0;
      if (object.userNickName != null)
        message.userNickName = String(object.userNickName);
      if (object.avatarUrl != null)
        message.avatarUrl = String(object.avatarUrl);
      if (object.departmentId != null)
        if ($util.Long)
          (message.departmentId = $util.Long.fromValue(object.departmentId)).unsigned = true;
        else if (typeof object.departmentId === "string")
          message.departmentId = parseInt(object.departmentId, 10);
        else if (typeof object.departmentId === "number")
          message.departmentId = object.departmentId;
        else if (typeof object.departmentId === "object")
          message.departmentId = new $util.LongBits(object.departmentId.low >>> 0, object.departmentId.high >>>
          0).toNumber(true);
      if (object.email != null)
        message.email = String(object.email);
      if (object.userRealName != null)
        message.userRealName = String(object.userRealName);
      if (object.userTel != null)
        message.userTel = String(object.userTel);
      if (object.userDomain != null)
        message.userDomain = String(object.userDomain);
      if (object.status != null)
        message.status = object.status >>> 0;
      if (object.signInfo != null)
        message.signInfo = String(object.signInfo);
      return message;
    };

    /**
     * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BaseDefine.UserInfo
     * @static
     * @param {BaseDefine.UserInfo} message UserInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserInfo.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.userId = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.userId = options.longs === String ? "0" : 0;
        object.userGender = 0;
        object.userNickName = "";
        object.avatarUrl = "";
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.departmentId = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.departmentId = options.longs === String ? "0" : 0;
        object.email = "";
        object.userRealName = "";
        object.userTel = "";
        object.userDomain = "";
        object.status = 0;
        object.signInfo = "";
      }
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (typeof message.userId === "number")
          object.userId = options.longs === String ? String(message.userId) : message.userId;
        else
          object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) :
            options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0)
              .toNumber(true) : message.userId;
      if (message.userGender != null && message.hasOwnProperty("userGender"))
        object.userGender = message.userGender;
      if (message.userNickName != null && message.hasOwnProperty("userNickName"))
        object.userNickName = message.userNickName;
      if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
        object.avatarUrl = message.avatarUrl;
      if (message.departmentId != null && message.hasOwnProperty("departmentId"))
        if (typeof message.departmentId === "number")
          object.departmentId = options.longs === String ? String(message.departmentId) : message
            .departmentId;
        else
          object.departmentId = options.longs === String ? $util.Long.prototype.toString.call(message
            .departmentId) : options.longs === Number ? new $util.LongBits(message.departmentId.low >>> 0,
            message.departmentId.high >>> 0).toNumber(true) : message.departmentId;
      if (message.email != null && message.hasOwnProperty("email"))
        object.email = message.email;
      if (message.userRealName != null && message.hasOwnProperty("userRealName"))
        object.userRealName = message.userRealName;
      if (message.userTel != null && message.hasOwnProperty("userTel"))
        object.userTel = message.userTel;
      if (message.userDomain != null && message.hasOwnProperty("userDomain"))
        object.userDomain = message.userDomain;
      if (message.status != null && message.hasOwnProperty("status"))
        object.status = message.status;
      if (message.signInfo != null && message.hasOwnProperty("signInfo"))
        object.signInfo = message.signInfo;
      return object;
    };

    /**
     * Converts this UserInfo to JSON.
     * @function toJSON
     * @memberof BaseDefine.UserInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserInfo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserInfo;
  })();

  BaseDefine.ContactSessionInfo = (function() {

    /**
     * Properties of a ContactSessionInfo.
     * @memberof BaseDefine
     * @interface IContactSessionInfo
     * @property {number|Long|null} [sessionId] ContactSessionInfo sessionId
     * @property {BaseDefine.SessionType|null} [sessionType] ContactSessionInfo sessionType
     * @property {BaseDefine.SessionStatusType|null} [sessionStatus] ContactSessionInfo sessionStatus
     * @property {number|null} [updatedTime] ContactSessionInfo updatedTime
     * @property {number|Long|null} [latestMsgId] ContactSessionInfo latestMsgId
     * @property {Uint8Array|null} [latestMsgData] ContactSessionInfo latestMsgData
     * @property {BaseDefine.MsgType|null} [latestMsgType] ContactSessionInfo latestMsgType
     * @property {number|Long|null} [latestMsgFromUserId] ContactSessionInfo latestMsgFromUserId
     */

    /**
     * Constructs a new ContactSessionInfo.
     * @memberof BaseDefine
     * @classdesc Represents a ContactSessionInfo.
     * @implements IContactSessionInfo
     * @constructor
     * @param {BaseDefine.IContactSessionInfo=} [properties] Properties to set
     */
    function ContactSessionInfo(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * ContactSessionInfo sessionId.
     * @member {number|Long} sessionId
     * @memberof BaseDefine.ContactSessionInfo
     * @instance
     */
    ContactSessionInfo.prototype.sessionId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * ContactSessionInfo sessionType.
     * @member {BaseDefine.SessionType} sessionType
     * @memberof BaseDefine.ContactSessionInfo
     * @instance
     */
    ContactSessionInfo.prototype.sessionType = 0;

    /**
     * ContactSessionInfo sessionStatus.
     * @member {BaseDefine.SessionStatusType} sessionStatus
     * @memberof BaseDefine.ContactSessionInfo
     * @instance
     */
    ContactSessionInfo.prototype.sessionStatus = 0;

    /**
     * ContactSessionInfo updatedTime.
     * @member {number} updatedTime
     * @memberof BaseDefine.ContactSessionInfo
     * @instance
     */
    ContactSessionInfo.prototype.updatedTime = 0;

    /**
     * ContactSessionInfo latestMsgId.
     * @member {number|Long} latestMsgId
     * @memberof BaseDefine.ContactSessionInfo
     * @instance
     */
    ContactSessionInfo.prototype.latestMsgId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * ContactSessionInfo latestMsgData.
     * @member {Uint8Array} latestMsgData
     * @memberof BaseDefine.ContactSessionInfo
     * @instance
     */
    ContactSessionInfo.prototype.latestMsgData = $util.newBuffer([]);

    /**
     * ContactSessionInfo latestMsgType.
     * @member {BaseDefine.MsgType} latestMsgType
     * @memberof BaseDefine.ContactSessionInfo
     * @instance
     */
    ContactSessionInfo.prototype.latestMsgType = 0;

    /**
     * ContactSessionInfo latestMsgFromUserId.
     * @member {number|Long} latestMsgFromUserId
     * @memberof BaseDefine.ContactSessionInfo
     * @instance
     */
    ContactSessionInfo.prototype.latestMsgFromUserId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * Creates a new ContactSessionInfo instance using the specified properties.
     * @function create
     * @memberof BaseDefine.ContactSessionInfo
     * @static
     * @param {BaseDefine.IContactSessionInfo=} [properties] Properties to set
     * @returns {BaseDefine.ContactSessionInfo} ContactSessionInfo instance
     */
    ContactSessionInfo.create = function create(properties) {
      return new ContactSessionInfo(properties);
    };

    /**
     * Encodes the specified ContactSessionInfo message. Does not implicitly {@link BaseDefine.ContactSessionInfo.verify|verify} messages.
     * @function encode
     * @memberof BaseDefine.ContactSessionInfo
     * @static
     * @param {BaseDefine.IContactSessionInfo} message ContactSessionInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ContactSessionInfo.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint64(message.sessionId);
      if (message.sessionType != null && Object.hasOwnProperty.call(message, "sessionType"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).int32(message.sessionType);
      if (message.sessionStatus != null && Object.hasOwnProperty.call(message, "sessionStatus"))
        writer.uint32( /* id 3, wireType 0 =*/ 24).int32(message.sessionStatus);
      if (message.updatedTime != null && Object.hasOwnProperty.call(message, "updatedTime"))
        writer.uint32( /* id 4, wireType 0 =*/ 32).uint32(message.updatedTime);
      if (message.latestMsgId != null && Object.hasOwnProperty.call(message, "latestMsgId"))
        writer.uint32( /* id 5, wireType 0 =*/ 40).uint64(message.latestMsgId);
      if (message.latestMsgData != null && Object.hasOwnProperty.call(message, "latestMsgData"))
        writer.uint32( /* id 6, wireType 2 =*/ 50).bytes(message.latestMsgData);
      if (message.latestMsgType != null && Object.hasOwnProperty.call(message, "latestMsgType"))
        writer.uint32( /* id 7, wireType 0 =*/ 56).int32(message.latestMsgType);
      if (message.latestMsgFromUserId != null && Object.hasOwnProperty.call(message, "latestMsgFromUserId"))
        writer.uint32( /* id 8, wireType 0 =*/ 64).uint64(message.latestMsgFromUserId);
      return writer;
    };

    /**
     * Encodes the specified ContactSessionInfo message, length delimited. Does not implicitly {@link BaseDefine.ContactSessionInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BaseDefine.ContactSessionInfo
     * @static
     * @param {BaseDefine.IContactSessionInfo} message ContactSessionInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ContactSessionInfo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ContactSessionInfo message from the specified reader or buffer.
     * @function decode
     * @memberof BaseDefine.ContactSessionInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BaseDefine.ContactSessionInfo} ContactSessionInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ContactSessionInfo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.BaseDefine.ContactSessionInfo();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.sessionId = reader.uint64();
          break;
        case 2:
          message.sessionType = reader.int32();
          break;
        case 3:
          message.sessionStatus = reader.int32();
          break;
        case 4:
          message.updatedTime = reader.uint32();
          break;
        case 5:
          message.latestMsgId = reader.uint64();
          break;
        case 6:
          message.latestMsgData = reader.bytes();
          break;
        case 7:
          message.latestMsgType = reader.int32();
          break;
        case 8:
          message.latestMsgFromUserId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a ContactSessionInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BaseDefine.ContactSessionInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BaseDefine.ContactSessionInfo} ContactSessionInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ContactSessionInfo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ContactSessionInfo message.
     * @function verify
     * @memberof BaseDefine.ContactSessionInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ContactSessionInfo.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.sessionId != null && message.hasOwnProperty("sessionId"))
        if (!$util.isInteger(message.sessionId) && !(message.sessionId && $util.isInteger(message.sessionId
          .low) && $util.isInteger(message.sessionId.high)))
          return "sessionId: integer|Long expected";
      if (message.sessionType != null && message.hasOwnProperty("sessionType"))
        switch (message.sessionType) {
        default:
          return "sessionType: enum value expected";
        case 0:
        case 1:
        case 2:
          break;
        }
      if (message.sessionStatus != null && message.hasOwnProperty("sessionStatus"))
        switch (message.sessionStatus) {
        default:
          return "sessionStatus: enum value expected";
        case 0:
        case 1:
          break;
        }
      if (message.updatedTime != null && message.hasOwnProperty("updatedTime"))
        if (!$util.isInteger(message.updatedTime))
          return "updatedTime: integer expected";
      if (message.latestMsgId != null && message.hasOwnProperty("latestMsgId"))
        if (!$util.isInteger(message.latestMsgId) && !(message.latestMsgId && $util.isInteger(message
          .latestMsgId.low) && $util.isInteger(message.latestMsgId.high)))
          return "latestMsgId: integer|Long expected";
      if (message.latestMsgData != null && message.hasOwnProperty("latestMsgData"))
        if (!(message.latestMsgData && typeof message.latestMsgData.length === "number" || $util.isString(
          message.latestMsgData)))
          return "latestMsgData: buffer expected";
      if (message.latestMsgType != null && message.hasOwnProperty("latestMsgType"))
        switch (message.latestMsgType) {
        default:
          return "latestMsgType: enum value expected";
        case 0:
        case 1:
        case 2:
        case 17:
        case 18:
          break;
        }
      if (message.latestMsgFromUserId != null && message.hasOwnProperty("latestMsgFromUserId"))
        if (!$util.isInteger(message.latestMsgFromUserId) && !(message.latestMsgFromUserId && $util.isInteger(
          message.latestMsgFromUserId.low) && $util.isInteger(message.latestMsgFromUserId.high)))
          return "latestMsgFromUserId: integer|Long expected";
      return null;
    };

    /**
     * Creates a ContactSessionInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BaseDefine.ContactSessionInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BaseDefine.ContactSessionInfo} ContactSessionInfo
     */
    ContactSessionInfo.fromObject = function fromObject(object) {
      if (object instanceof $root.BaseDefine.ContactSessionInfo)
        return object;
      var message = new $root.BaseDefine.ContactSessionInfo();
      if (object.sessionId != null)
        if ($util.Long)
          (message.sessionId = $util.Long.fromValue(object.sessionId)).unsigned = true;
        else if (typeof object.sessionId === "string")
          message.sessionId = parseInt(object.sessionId, 10);
        else if (typeof object.sessionId === "number")
          message.sessionId = object.sessionId;
        else if (typeof object.sessionId === "object")
          message.sessionId = new $util.LongBits(object.sessionId.low >>> 0, object.sessionId.high >>> 0)
            .toNumber(true);
      switch (object.sessionType) {
      case "SESSION_TYPE_NONE":
      case 0:
        message.sessionType = 0;
        break;
      case "SESSION_TYPE_SINGLE":
      case 1:
        message.sessionType = 1;
        break;
      case "SESSION_TYPE_GROUP":
      case 2:
        message.sessionType = 2;
        break;
      }
      switch (object.sessionStatus) {
      case "SESSION_STATUS_OK":
      case 0:
        message.sessionStatus = 0;
        break;
      case "SESSION_STATUS_DELETE":
      case 1:
        message.sessionStatus = 1;
        break;
      }
      if (object.updatedTime != null)
        message.updatedTime = object.updatedTime >>> 0;
      if (object.latestMsgId != null)
        if ($util.Long)
          (message.latestMsgId = $util.Long.fromValue(object.latestMsgId)).unsigned = true;
        else if (typeof object.latestMsgId === "string")
          message.latestMsgId = parseInt(object.latestMsgId, 10);
        else if (typeof object.latestMsgId === "number")
          message.latestMsgId = object.latestMsgId;
        else if (typeof object.latestMsgId === "object")
          message.latestMsgId = new $util.LongBits(object.latestMsgId.low >>> 0, object.latestMsgId.high >>> 0)
            .toNumber(true);
      if (object.latestMsgData != null)
        if (typeof object.latestMsgData === "string")
          $util.base64.decode(object.latestMsgData, message.latestMsgData = $util.newBuffer($util.base64
            .length(object.latestMsgData)), 0);
        else if (object.latestMsgData.length)
          message.latestMsgData = object.latestMsgData;
      switch (object.latestMsgType) {
      case "MSG_TYPE_SINGLE_NONE":
      case 0:
        message.latestMsgType = 0;
        break;
      case "MSG_TYPE_SINGLE_TEXT":
      case 1:
        message.latestMsgType = 1;
        break;
      case "MSG_TYPE_SINGLE_AUDIO":
      case 2:
        message.latestMsgType = 2;
        break;
      case "MSG_TYPE_GROUP_TEXT":
      case 17:
        message.latestMsgType = 17;
        break;
      case "MSG_TYPE_GROUP_AUDIO":
      case 18:
        message.latestMsgType = 18;
        break;
      }
      if (object.latestMsgFromUserId != null)
        if ($util.Long)
          (message.latestMsgFromUserId = $util.Long.fromValue(object.latestMsgFromUserId)).unsigned = true;
        else if (typeof object.latestMsgFromUserId === "string")
          message.latestMsgFromUserId = parseInt(object.latestMsgFromUserId, 10);
        else if (typeof object.latestMsgFromUserId === "number")
          message.latestMsgFromUserId = object.latestMsgFromUserId;
        else if (typeof object.latestMsgFromUserId === "object")
          message.latestMsgFromUserId = new $util.LongBits(object.latestMsgFromUserId.low >>> 0, object
            .latestMsgFromUserId.high >>> 0).toNumber(true);
      return message;
    };

    /**
     * Creates a plain object from a ContactSessionInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BaseDefine.ContactSessionInfo
     * @static
     * @param {BaseDefine.ContactSessionInfo} message ContactSessionInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ContactSessionInfo.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.sessionId = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.sessionId = options.longs === String ? "0" : 0;
        object.sessionType = options.enums === String ? "SESSION_TYPE_NONE" : 0;
        object.sessionStatus = options.enums === String ? "SESSION_STATUS_OK" : 0;
        object.updatedTime = 0;
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.latestMsgId = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.latestMsgId = options.longs === String ? "0" : 0;
        if (options.bytes === String)
          object.latestMsgData = "";
        else {
          object.latestMsgData = [];
          if (options.bytes !== Array)
            object.latestMsgData = $util.newBuffer(object.latestMsgData);
        }
        object.latestMsgType = options.enums === String ? "MSG_TYPE_SINGLE_NONE" : 0;
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.latestMsgFromUserId = options.longs === String ? long.toString() : options.longs === Number ?
            long.toNumber() : long;
        } else
          object.latestMsgFromUserId = options.longs === String ? "0" : 0;
      }
      if (message.sessionId != null && message.hasOwnProperty("sessionId"))
        if (typeof message.sessionId === "number")
          object.sessionId = options.longs === String ? String(message.sessionId) : message.sessionId;
        else
          object.sessionId = options.longs === String ? $util.Long.prototype.toString.call(message
            .sessionId) : options.longs === Number ? new $util.LongBits(message.sessionId.low >>> 0, message
            .sessionId.high >>> 0).toNumber(true) : message.sessionId;
      if (message.sessionType != null && message.hasOwnProperty("sessionType"))
        object.sessionType = options.enums === String ? $root.BaseDefine.SessionType[message.sessionType] :
          message.sessionType;
      if (message.sessionStatus != null && message.hasOwnProperty("sessionStatus"))
        object.sessionStatus = options.enums === String ? $root.BaseDefine.SessionStatusType[message
          .sessionStatus] : message.sessionStatus;
      if (message.updatedTime != null && message.hasOwnProperty("updatedTime"))
        object.updatedTime = message.updatedTime;
      if (message.latestMsgId != null && message.hasOwnProperty("latestMsgId"))
        if (typeof message.latestMsgId === "number")
          object.latestMsgId = options.longs === String ? String(message.latestMsgId) : message.latestMsgId;
        else
          object.latestMsgId = options.longs === String ? $util.Long.prototype.toString.call(message
            .latestMsgId) : options.longs === Number ? new $util.LongBits(message.latestMsgId.low >>> 0,
            message.latestMsgId.high >>> 0).toNumber(true) : message.latestMsgId;
      if (message.latestMsgData != null && message.hasOwnProperty("latestMsgData"))
        object.latestMsgData = options.bytes === String ? $util.base64.encode(message.latestMsgData, 0,
          message.latestMsgData.length) : options.bytes === Array ? Array.prototype.slice.call(message
          .latestMsgData) : message.latestMsgData;
      if (message.latestMsgType != null && message.hasOwnProperty("latestMsgType"))
        object.latestMsgType = options.enums === String ? $root.BaseDefine.MsgType[message.latestMsgType] :
          message.latestMsgType;
      if (message.latestMsgFromUserId != null && message.hasOwnProperty("latestMsgFromUserId"))
        if (typeof message.latestMsgFromUserId === "number")
          object.latestMsgFromUserId = options.longs === String ? String(message.latestMsgFromUserId) :
            message.latestMsgFromUserId;
        else
          object.latestMsgFromUserId = options.longs === String ? $util.Long.prototype.toString.call(message
            .latestMsgFromUserId) : options.longs === Number ? new $util.LongBits(message.latestMsgFromUserId
            .low >>> 0, message.latestMsgFromUserId.high >>> 0).toNumber(true) : message.latestMsgFromUserId;
      return object;
    };

    /**
     * Converts this ContactSessionInfo to JSON.
     * @function toJSON
     * @memberof BaseDefine.ContactSessionInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ContactSessionInfo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ContactSessionInfo;
  })();

  BaseDefine.UserStat = (function() {

    /**
     * Properties of a UserStat.
     * @memberof BaseDefine
     * @interface IUserStat
     * @property {number|Long|null} [userId] UserStat userId
     * @property {BaseDefine.UserStatType|null} [status] UserStat status
     */

    /**
     * Constructs a new UserStat.
     * @memberof BaseDefine
     * @classdesc Represents a UserStat.
     * @implements IUserStat
     * @constructor
     * @param {BaseDefine.IUserStat=} [properties] Properties to set
     */
    function UserStat(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserStat userId.
     * @member {number|Long} userId
     * @memberof BaseDefine.UserStat
     * @instance
     */
    UserStat.prototype.userId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * UserStat status.
     * @member {BaseDefine.UserStatType} status
     * @memberof BaseDefine.UserStat
     * @instance
     */
    UserStat.prototype.status = 0;

    /**
     * Creates a new UserStat instance using the specified properties.
     * @function create
     * @memberof BaseDefine.UserStat
     * @static
     * @param {BaseDefine.IUserStat=} [properties] Properties to set
     * @returns {BaseDefine.UserStat} UserStat instance
     */
    UserStat.create = function create(properties) {
      return new UserStat(properties);
    };

    /**
     * Encodes the specified UserStat message. Does not implicitly {@link BaseDefine.UserStat.verify|verify} messages.
     * @function encode
     * @memberof BaseDefine.UserStat
     * @static
     * @param {BaseDefine.IUserStat} message UserStat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserStat.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint64(message.userId);
      if (message.status != null && Object.hasOwnProperty.call(message, "status"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).int32(message.status);
      return writer;
    };

    /**
     * Encodes the specified UserStat message, length delimited. Does not implicitly {@link BaseDefine.UserStat.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BaseDefine.UserStat
     * @static
     * @param {BaseDefine.IUserStat} message UserStat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserStat.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserStat message from the specified reader or buffer.
     * @function decode
     * @memberof BaseDefine.UserStat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BaseDefine.UserStat} UserStat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserStat.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.BaseDefine.UserStat();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint64();
          break;
        case 2:
          message.status = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a UserStat message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BaseDefine.UserStat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BaseDefine.UserStat} UserStat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserStat.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserStat message.
     * @function verify
     * @memberof BaseDefine.UserStat
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserStat.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) &&
            $util.isInteger(message.userId.high)))
          return "userId: integer|Long expected";
      if (message.status != null && message.hasOwnProperty("status"))
        switch (message.status) {
        default:
          return "status: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
          break;
        }
      return null;
    };

    /**
     * Creates a UserStat message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BaseDefine.UserStat
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BaseDefine.UserStat} UserStat
     */
    UserStat.fromObject = function fromObject(object) {
      if (object instanceof $root.BaseDefine.UserStat)
        return object;
      var message = new $root.BaseDefine.UserStat();
      if (object.userId != null)
        if ($util.Long)
          (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
        else if (typeof object.userId === "string")
          message.userId = parseInt(object.userId, 10);
        else if (typeof object.userId === "number")
          message.userId = object.userId;
        else if (typeof object.userId === "object")
          message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
      switch (object.status) {
      case "USER_STATUS_NONE":
      case 0:
        message.status = 0;
        break;
      case "USER_STATUS_ONLINE":
      case 1:
        message.status = 1;
        break;
      case "USER_STATUS_OFFLINE":
      case 2:
        message.status = 2;
        break;
      case "USER_STATUS_LEAVE":
      case 3:
        message.status = 3;
        break;
      }
      return message;
    };

    /**
     * Creates a plain object from a UserStat message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BaseDefine.UserStat
     * @static
     * @param {BaseDefine.UserStat} message UserStat
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserStat.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.userId = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.userId = options.longs === String ? "0" : 0;
        object.status = options.enums === String ? "USER_STATUS_NONE" : 0;
      }
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (typeof message.userId === "number")
          object.userId = options.longs === String ? String(message.userId) : message.userId;
        else
          object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) :
            options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0)
              .toNumber(true) : message.userId;
      if (message.status != null && message.hasOwnProperty("status"))
        object.status = options.enums === String ? $root.BaseDefine.UserStatType[message.status] : message
          .status;
      return object;
    };

    /**
     * Converts this UserStat to JSON.
     * @function toJSON
     * @memberof BaseDefine.UserStat
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserStat.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserStat;
  })();

  BaseDefine.ServerUserStat = (function() {

    /**
     * Properties of a ServerUserStat.
     * @memberof BaseDefine
     * @interface IServerUserStat
     * @property {number|Long|null} [userId] ServerUserStat userId
     * @property {BaseDefine.UserStatType|null} [status] ServerUserStat status
     * @property {BaseDefine.ClientType|null} [clientType] ServerUserStat clientType
     */

    /**
     * Constructs a new ServerUserStat.
     * @memberof BaseDefine
     * @classdesc Represents a ServerUserStat.
     * @implements IServerUserStat
     * @constructor
     * @param {BaseDefine.IServerUserStat=} [properties] Properties to set
     */
    function ServerUserStat(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerUserStat userId.
     * @member {number|Long} userId
     * @memberof BaseDefine.ServerUserStat
     * @instance
     */
    ServerUserStat.prototype.userId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * ServerUserStat status.
     * @member {BaseDefine.UserStatType} status
     * @memberof BaseDefine.ServerUserStat
     * @instance
     */
    ServerUserStat.prototype.status = 0;

    /**
     * ServerUserStat clientType.
     * @member {BaseDefine.ClientType} clientType
     * @memberof BaseDefine.ServerUserStat
     * @instance
     */
    ServerUserStat.prototype.clientType = 0;

    /**
     * Creates a new ServerUserStat instance using the specified properties.
     * @function create
     * @memberof BaseDefine.ServerUserStat
     * @static
     * @param {BaseDefine.IServerUserStat=} [properties] Properties to set
     * @returns {BaseDefine.ServerUserStat} ServerUserStat instance
     */
    ServerUserStat.create = function create(properties) {
      return new ServerUserStat(properties);
    };

    /**
     * Encodes the specified ServerUserStat message. Does not implicitly {@link BaseDefine.ServerUserStat.verify|verify} messages.
     * @function encode
     * @memberof BaseDefine.ServerUserStat
     * @static
     * @param {BaseDefine.IServerUserStat} message ServerUserStat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerUserStat.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint64(message.userId);
      if (message.status != null && Object.hasOwnProperty.call(message, "status"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).int32(message.status);
      if (message.clientType != null && Object.hasOwnProperty.call(message, "clientType"))
        writer.uint32( /* id 3, wireType 0 =*/ 24).int32(message.clientType);
      return writer;
    };

    /**
     * Encodes the specified ServerUserStat message, length delimited. Does not implicitly {@link BaseDefine.ServerUserStat.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BaseDefine.ServerUserStat
     * @static
     * @param {BaseDefine.IServerUserStat} message ServerUserStat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerUserStat.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerUserStat message from the specified reader or buffer.
     * @function decode
     * @memberof BaseDefine.ServerUserStat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BaseDefine.ServerUserStat} ServerUserStat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerUserStat.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.BaseDefine.ServerUserStat();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint64();
          break;
        case 2:
          message.status = reader.int32();
          break;
        case 3:
          message.clientType = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a ServerUserStat message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BaseDefine.ServerUserStat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BaseDefine.ServerUserStat} ServerUserStat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerUserStat.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerUserStat message.
     * @function verify
     * @memberof BaseDefine.ServerUserStat
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerUserStat.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) &&
            $util.isInteger(message.userId.high)))
          return "userId: integer|Long expected";
      if (message.status != null && message.hasOwnProperty("status"))
        switch (message.status) {
        default:
          return "status: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
          break;
        }
      if (message.clientType != null && message.hasOwnProperty("clientType"))
        switch (message.clientType) {
        default:
          return "clientType: enum value expected";
        case 0:
        case 1:
        case 2:
        case 17:
        case 18:
        case 19:
          break;
        }
      return null;
    };

    /**
     * Creates a ServerUserStat message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BaseDefine.ServerUserStat
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BaseDefine.ServerUserStat} ServerUserStat
     */
    ServerUserStat.fromObject = function fromObject(object) {
      if (object instanceof $root.BaseDefine.ServerUserStat)
        return object;
      var message = new $root.BaseDefine.ServerUserStat();
      if (object.userId != null)
        if ($util.Long)
          (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
        else if (typeof object.userId === "string")
          message.userId = parseInt(object.userId, 10);
        else if (typeof object.userId === "number")
          message.userId = object.userId;
        else if (typeof object.userId === "object")
          message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
      switch (object.status) {
      case "USER_STATUS_NONE":
      case 0:
        message.status = 0;
        break;
      case "USER_STATUS_ONLINE":
      case 1:
        message.status = 1;
        break;
      case "USER_STATUS_OFFLINE":
      case 2:
        message.status = 2;
        break;
      case "USER_STATUS_LEAVE":
      case 3:
        message.status = 3;
        break;
      }
      switch (object.clientType) {
      case "CLIENT_TYPE_NONE":
      case 0:
        message.clientType = 0;
        break;
      case "CLIENT_TYPE_WINDOWS":
      case 1:
        message.clientType = 1;
        break;
      case "CLIENT_TYPE_MAC":
      case 2:
        message.clientType = 2;
        break;
      case "CLIENT_TYPE_IOS":
      case 17:
        message.clientType = 17;
        break;
      case "CLIENT_TYPE_ANDROID":
      case 18:
        message.clientType = 18;
        break;
      case "CLIENT_TYPE_WEB":
      case 19:
        message.clientType = 19;
        break;
      }
      return message;
    };

    /**
     * Creates a plain object from a ServerUserStat message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BaseDefine.ServerUserStat
     * @static
     * @param {BaseDefine.ServerUserStat} message ServerUserStat
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerUserStat.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.userId = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.userId = options.longs === String ? "0" : 0;
        object.status = options.enums === String ? "USER_STATUS_NONE" : 0;
        object.clientType = options.enums === String ? "CLIENT_TYPE_NONE" : 0;
      }
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (typeof message.userId === "number")
          object.userId = options.longs === String ? String(message.userId) : message.userId;
        else
          object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) :
            options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0)
              .toNumber(true) : message.userId;
      if (message.status != null && message.hasOwnProperty("status"))
        object.status = options.enums === String ? $root.BaseDefine.UserStatType[message.status] : message
          .status;
      if (message.clientType != null && message.hasOwnProperty("clientType"))
        object.clientType = options.enums === String ? $root.BaseDefine.ClientType[message.clientType] :
          message.clientType;
      return object;
    };

    /**
     * Converts this ServerUserStat to JSON.
     * @function toJSON
     * @memberof BaseDefine.ServerUserStat
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerUserStat.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerUserStat;
  })();

  BaseDefine.UnreadInfo = (function() {

    /**
     * Properties of an UnreadInfo.
     * @memberof BaseDefine
     * @interface IUnreadInfo
     * @property {number|Long|null} [sessionId] UnreadInfo sessionId
     * @property {BaseDefine.SessionType|null} [sessionType] UnreadInfo sessionType
     * @property {number|null} [unreadCnt] UnreadInfo unreadCnt
     * @property {number|Long|null} [latestMsgId] UnreadInfo latestMsgId
     * @property {Uint8Array|null} [latestMsgData] UnreadInfo latestMsgData
     * @property {BaseDefine.MsgType|null} [latestMsgType] UnreadInfo latestMsgType
     * @property {number|Long|null} [latestMsgFromUserId] UnreadInfo latestMsgFromUserId
     */

    /**
     * Constructs a new UnreadInfo.
     * @memberof BaseDefine
     * @classdesc Represents an UnreadInfo.
     * @implements IUnreadInfo
     * @constructor
     * @param {BaseDefine.IUnreadInfo=} [properties] Properties to set
     */
    function UnreadInfo(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * UnreadInfo sessionId.
     * @member {number|Long} sessionId
     * @memberof BaseDefine.UnreadInfo
     * @instance
     */
    UnreadInfo.prototype.sessionId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * UnreadInfo sessionType.
     * @member {BaseDefine.SessionType} sessionType
     * @memberof BaseDefine.UnreadInfo
     * @instance
     */
    UnreadInfo.prototype.sessionType = 0;

    /**
     * UnreadInfo unreadCnt.
     * @member {number} unreadCnt
     * @memberof BaseDefine.UnreadInfo
     * @instance
     */
    UnreadInfo.prototype.unreadCnt = 0;

    /**
     * UnreadInfo latestMsgId.
     * @member {number|Long} latestMsgId
     * @memberof BaseDefine.UnreadInfo
     * @instance
     */
    UnreadInfo.prototype.latestMsgId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * UnreadInfo latestMsgData.
     * @member {Uint8Array} latestMsgData
     * @memberof BaseDefine.UnreadInfo
     * @instance
     */
    UnreadInfo.prototype.latestMsgData = $util.newBuffer([]);

    /**
     * UnreadInfo latestMsgType.
     * @member {BaseDefine.MsgType} latestMsgType
     * @memberof BaseDefine.UnreadInfo
     * @instance
     */
    UnreadInfo.prototype.latestMsgType = 0;

    /**
     * UnreadInfo latestMsgFromUserId.
     * @member {number|Long} latestMsgFromUserId
     * @memberof BaseDefine.UnreadInfo
     * @instance
     */
    UnreadInfo.prototype.latestMsgFromUserId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * Creates a new UnreadInfo instance using the specified properties.
     * @function create
     * @memberof BaseDefine.UnreadInfo
     * @static
     * @param {BaseDefine.IUnreadInfo=} [properties] Properties to set
     * @returns {BaseDefine.UnreadInfo} UnreadInfo instance
     */
    UnreadInfo.create = function create(properties) {
      return new UnreadInfo(properties);
    };

    /**
     * Encodes the specified UnreadInfo message. Does not implicitly {@link BaseDefine.UnreadInfo.verify|verify} messages.
     * @function encode
     * @memberof BaseDefine.UnreadInfo
     * @static
     * @param {BaseDefine.IUnreadInfo} message UnreadInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UnreadInfo.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint64(message.sessionId);
      if (message.sessionType != null && Object.hasOwnProperty.call(message, "sessionType"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).int32(message.sessionType);
      if (message.unreadCnt != null && Object.hasOwnProperty.call(message, "unreadCnt"))
        writer.uint32( /* id 3, wireType 0 =*/ 24).uint32(message.unreadCnt);
      if (message.latestMsgId != null && Object.hasOwnProperty.call(message, "latestMsgId"))
        writer.uint32( /* id 4, wireType 0 =*/ 32).uint64(message.latestMsgId);
      if (message.latestMsgData != null && Object.hasOwnProperty.call(message, "latestMsgData"))
        writer.uint32( /* id 5, wireType 2 =*/ 42).bytes(message.latestMsgData);
      if (message.latestMsgType != null && Object.hasOwnProperty.call(message, "latestMsgType"))
        writer.uint32( /* id 6, wireType 0 =*/ 48).int32(message.latestMsgType);
      if (message.latestMsgFromUserId != null && Object.hasOwnProperty.call(message, "latestMsgFromUserId"))
        writer.uint32( /* id 7, wireType 0 =*/ 56).uint64(message.latestMsgFromUserId);
      return writer;
    };

    /**
     * Encodes the specified UnreadInfo message, length delimited. Does not implicitly {@link BaseDefine.UnreadInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BaseDefine.UnreadInfo
     * @static
     * @param {BaseDefine.IUnreadInfo} message UnreadInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UnreadInfo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UnreadInfo message from the specified reader or buffer.
     * @function decode
     * @memberof BaseDefine.UnreadInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BaseDefine.UnreadInfo} UnreadInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UnreadInfo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.BaseDefine.UnreadInfo();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.sessionId = reader.uint64();
          break;
        case 2:
          message.sessionType = reader.int32();
          break;
        case 3:
          message.unreadCnt = reader.uint32();
          break;
        case 4:
          message.latestMsgId = reader.uint64();
          break;
        case 5:
          message.latestMsgData = reader.bytes();
          break;
        case 6:
          message.latestMsgType = reader.int32();
          break;
        case 7:
          message.latestMsgFromUserId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes an UnreadInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BaseDefine.UnreadInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BaseDefine.UnreadInfo} UnreadInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UnreadInfo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UnreadInfo message.
     * @function verify
     * @memberof BaseDefine.UnreadInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UnreadInfo.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.sessionId != null && message.hasOwnProperty("sessionId"))
        if (!$util.isInteger(message.sessionId) && !(message.sessionId && $util.isInteger(message.sessionId
          .low) && $util.isInteger(message.sessionId.high)))
          return "sessionId: integer|Long expected";
      if (message.sessionType != null && message.hasOwnProperty("sessionType"))
        switch (message.sessionType) {
        default:
          return "sessionType: enum value expected";
        case 0:
        case 1:
        case 2:
          break;
        }
      if (message.unreadCnt != null && message.hasOwnProperty("unreadCnt"))
        if (!$util.isInteger(message.unreadCnt))
          return "unreadCnt: integer expected";
      if (message.latestMsgId != null && message.hasOwnProperty("latestMsgId"))
        if (!$util.isInteger(message.latestMsgId) && !(message.latestMsgId && $util.isInteger(message
          .latestMsgId.low) && $util.isInteger(message.latestMsgId.high)))
          return "latestMsgId: integer|Long expected";
      if (message.latestMsgData != null && message.hasOwnProperty("latestMsgData"))
        if (!(message.latestMsgData && typeof message.latestMsgData.length === "number" || $util.isString(
          message.latestMsgData)))
          return "latestMsgData: buffer expected";
      if (message.latestMsgType != null && message.hasOwnProperty("latestMsgType"))
        switch (message.latestMsgType) {
        default:
          return "latestMsgType: enum value expected";
        case 0:
        case 1:
        case 2:
        case 17:
        case 18:
          break;
        }
      if (message.latestMsgFromUserId != null && message.hasOwnProperty("latestMsgFromUserId"))
        if (!$util.isInteger(message.latestMsgFromUserId) && !(message.latestMsgFromUserId && $util.isInteger(
          message.latestMsgFromUserId.low) && $util.isInteger(message.latestMsgFromUserId.high)))
          return "latestMsgFromUserId: integer|Long expected";
      return null;
    };

    /**
     * Creates an UnreadInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BaseDefine.UnreadInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BaseDefine.UnreadInfo} UnreadInfo
     */
    UnreadInfo.fromObject = function fromObject(object) {
      if (object instanceof $root.BaseDefine.UnreadInfo)
        return object;
      var message = new $root.BaseDefine.UnreadInfo();
      if (object.sessionId != null)
        if ($util.Long)
          (message.sessionId = $util.Long.fromValue(object.sessionId)).unsigned = true;
        else if (typeof object.sessionId === "string")
          message.sessionId = parseInt(object.sessionId, 10);
        else if (typeof object.sessionId === "number")
          message.sessionId = object.sessionId;
        else if (typeof object.sessionId === "object")
          message.sessionId = new $util.LongBits(object.sessionId.low >>> 0, object.sessionId.high >>> 0)
            .toNumber(true);
      switch (object.sessionType) {
      case "SESSION_TYPE_NONE":
      case 0:
        message.sessionType = 0;
        break;
      case "SESSION_TYPE_SINGLE":
      case 1:
        message.sessionType = 1;
        break;
      case "SESSION_TYPE_GROUP":
      case 2:
        message.sessionType = 2;
        break;
      }
      if (object.unreadCnt != null)
        message.unreadCnt = object.unreadCnt >>> 0;
      if (object.latestMsgId != null)
        if ($util.Long)
          (message.latestMsgId = $util.Long.fromValue(object.latestMsgId)).unsigned = true;
        else if (typeof object.latestMsgId === "string")
          message.latestMsgId = parseInt(object.latestMsgId, 10);
        else if (typeof object.latestMsgId === "number")
          message.latestMsgId = object.latestMsgId;
        else if (typeof object.latestMsgId === "object")
          message.latestMsgId = new $util.LongBits(object.latestMsgId.low >>> 0, object.latestMsgId.high >>> 0)
            .toNumber(true);
      if (object.latestMsgData != null)
        if (typeof object.latestMsgData === "string")
          $util.base64.decode(object.latestMsgData, message.latestMsgData = $util.newBuffer($util.base64
            .length(object.latestMsgData)), 0);
        else if (object.latestMsgData.length)
          message.latestMsgData = object.latestMsgData;
      switch (object.latestMsgType) {
      case "MSG_TYPE_SINGLE_NONE":
      case 0:
        message.latestMsgType = 0;
        break;
      case "MSG_TYPE_SINGLE_TEXT":
      case 1:
        message.latestMsgType = 1;
        break;
      case "MSG_TYPE_SINGLE_AUDIO":
      case 2:
        message.latestMsgType = 2;
        break;
      case "MSG_TYPE_GROUP_TEXT":
      case 17:
        message.latestMsgType = 17;
        break;
      case "MSG_TYPE_GROUP_AUDIO":
      case 18:
        message.latestMsgType = 18;
        break;
      }
      if (object.latestMsgFromUserId != null)
        if ($util.Long)
          (message.latestMsgFromUserId = $util.Long.fromValue(object.latestMsgFromUserId)).unsigned = true;
        else if (typeof object.latestMsgFromUserId === "string")
          message.latestMsgFromUserId = parseInt(object.latestMsgFromUserId, 10);
        else if (typeof object.latestMsgFromUserId === "number")
          message.latestMsgFromUserId = object.latestMsgFromUserId;
        else if (typeof object.latestMsgFromUserId === "object")
          message.latestMsgFromUserId = new $util.LongBits(object.latestMsgFromUserId.low >>> 0, object
            .latestMsgFromUserId.high >>> 0).toNumber(true);
      return message;
    };

    /**
     * Creates a plain object from an UnreadInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BaseDefine.UnreadInfo
     * @static
     * @param {BaseDefine.UnreadInfo} message UnreadInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UnreadInfo.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.sessionId = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.sessionId = options.longs === String ? "0" : 0;
        object.sessionType = options.enums === String ? "SESSION_TYPE_NONE" : 0;
        object.unreadCnt = 0;
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.latestMsgId = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.latestMsgId = options.longs === String ? "0" : 0;
        if (options.bytes === String)
          object.latestMsgData = "";
        else {
          object.latestMsgData = [];
          if (options.bytes !== Array)
            object.latestMsgData = $util.newBuffer(object.latestMsgData);
        }
        object.latestMsgType = options.enums === String ? "MSG_TYPE_SINGLE_NONE" : 0;
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.latestMsgFromUserId = options.longs === String ? long.toString() : options.longs === Number ?
            long.toNumber() : long;
        } else
          object.latestMsgFromUserId = options.longs === String ? "0" : 0;
      }
      if (message.sessionId != null && message.hasOwnProperty("sessionId"))
        if (typeof message.sessionId === "number")
          object.sessionId = options.longs === String ? String(message.sessionId) : message.sessionId;
        else
          object.sessionId = options.longs === String ? $util.Long.prototype.toString.call(message
            .sessionId) : options.longs === Number ? new $util.LongBits(message.sessionId.low >>> 0, message
            .sessionId.high >>> 0).toNumber(true) : message.sessionId;
      if (message.sessionType != null && message.hasOwnProperty("sessionType"))
        object.sessionType = options.enums === String ? $root.BaseDefine.SessionType[message.sessionType] :
          message.sessionType;
      if (message.unreadCnt != null && message.hasOwnProperty("unreadCnt"))
        object.unreadCnt = message.unreadCnt;
      if (message.latestMsgId != null && message.hasOwnProperty("latestMsgId"))
        if (typeof message.latestMsgId === "number")
          object.latestMsgId = options.longs === String ? String(message.latestMsgId) : message.latestMsgId;
        else
          object.latestMsgId = options.longs === String ? $util.Long.prototype.toString.call(message
            .latestMsgId) : options.longs === Number ? new $util.LongBits(message.latestMsgId.low >>> 0,
            message.latestMsgId.high >>> 0).toNumber(true) : message.latestMsgId;
      if (message.latestMsgData != null && message.hasOwnProperty("latestMsgData"))
        object.latestMsgData = options.bytes === String ? $util.base64.encode(message.latestMsgData, 0,
          message.latestMsgData.length) : options.bytes === Array ? Array.prototype.slice.call(message
          .latestMsgData) : message.latestMsgData;
      if (message.latestMsgType != null && message.hasOwnProperty("latestMsgType"))
        object.latestMsgType = options.enums === String ? $root.BaseDefine.MsgType[message.latestMsgType] :
          message.latestMsgType;
      if (message.latestMsgFromUserId != null && message.hasOwnProperty("latestMsgFromUserId"))
        if (typeof message.latestMsgFromUserId === "number")
          object.latestMsgFromUserId = options.longs === String ? String(message.latestMsgFromUserId) :
            message.latestMsgFromUserId;
        else
          object.latestMsgFromUserId = options.longs === String ? $util.Long.prototype.toString.call(message
            .latestMsgFromUserId) : options.longs === Number ? new $util.LongBits(message.latestMsgFromUserId
            .low >>> 0, message.latestMsgFromUserId.high >>> 0).toNumber(true) : message.latestMsgFromUserId;
      return object;
    };

    /**
     * Converts this UnreadInfo to JSON.
     * @function toJSON
     * @memberof BaseDefine.UnreadInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UnreadInfo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UnreadInfo;
  })();

  BaseDefine.NotifyInfo = (function() {

    /**
     * Properties of a NotifyInfo.
     * @memberof BaseDefine
     * @interface INotifyInfo
     * @property {number|Long|null} [notifyId] NotifyInfo notifyId
     * @property {number|Long|null} [fromSessionId] NotifyInfo fromSessionId
     * @property {number|Long|null} [createTime] NotifyInfo createTime
     * @property {Uint8Array|null} [notifyData] NotifyInfo notifyData
     */

    /**
     * Constructs a new NotifyInfo.
     * @memberof BaseDefine
     * @classdesc Represents a NotifyInfo.
     * @implements INotifyInfo
     * @constructor
     * @param {BaseDefine.INotifyInfo=} [properties] Properties to set
     */
    function NotifyInfo(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * NotifyInfo notifyId.
     * @member {number|Long} notifyId
     * @memberof BaseDefine.NotifyInfo
     * @instance
     */
    NotifyInfo.prototype.notifyId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * NotifyInfo fromSessionId.
     * @member {number|Long} fromSessionId
     * @memberof BaseDefine.NotifyInfo
     * @instance
     */
    NotifyInfo.prototype.fromSessionId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * NotifyInfo createTime.
     * @member {number|Long} createTime
     * @memberof BaseDefine.NotifyInfo
     * @instance
     */
    NotifyInfo.prototype.createTime = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * NotifyInfo notifyData.
     * @member {Uint8Array} notifyData
     * @memberof BaseDefine.NotifyInfo
     * @instance
     */
    NotifyInfo.prototype.notifyData = $util.newBuffer([]);

    /**
     * Creates a new NotifyInfo instance using the specified properties.
     * @function create
     * @memberof BaseDefine.NotifyInfo
     * @static
     * @param {BaseDefine.INotifyInfo=} [properties] Properties to set
     * @returns {BaseDefine.NotifyInfo} NotifyInfo instance
     */
    NotifyInfo.create = function create(properties) {
      return new NotifyInfo(properties);
    };

    /**
     * Encodes the specified NotifyInfo message. Does not implicitly {@link BaseDefine.NotifyInfo.verify|verify} messages.
     * @function encode
     * @memberof BaseDefine.NotifyInfo
     * @static
     * @param {BaseDefine.INotifyInfo} message NotifyInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NotifyInfo.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.notifyId != null && Object.hasOwnProperty.call(message, "notifyId"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint64(message.notifyId);
      if (message.fromSessionId != null && Object.hasOwnProperty.call(message, "fromSessionId"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).uint64(message.fromSessionId);
      if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
        writer.uint32( /* id 3, wireType 0 =*/ 24).uint64(message.createTime);
      if (message.notifyData != null && Object.hasOwnProperty.call(message, "notifyData"))
        writer.uint32( /* id 5, wireType 2 =*/ 42).bytes(message.notifyData);
      return writer;
    };

    /**
     * Encodes the specified NotifyInfo message, length delimited. Does not implicitly {@link BaseDefine.NotifyInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BaseDefine.NotifyInfo
     * @static
     * @param {BaseDefine.INotifyInfo} message NotifyInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NotifyInfo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NotifyInfo message from the specified reader or buffer.
     * @function decode
     * @memberof BaseDefine.NotifyInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BaseDefine.NotifyInfo} NotifyInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NotifyInfo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.BaseDefine.NotifyInfo();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.notifyId = reader.uint64();
          break;
        case 2:
          message.fromSessionId = reader.uint64();
          break;
        case 3:
          message.createTime = reader.uint64();
          break;
        case 5:
          message.notifyData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a NotifyInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BaseDefine.NotifyInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BaseDefine.NotifyInfo} NotifyInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NotifyInfo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NotifyInfo message.
     * @function verify
     * @memberof BaseDefine.NotifyInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NotifyInfo.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.notifyId != null && message.hasOwnProperty("notifyId"))
        if (!$util.isInteger(message.notifyId) && !(message.notifyId && $util.isInteger(message.notifyId
          .low) && $util.isInteger(message.notifyId.high)))
          return "notifyId: integer|Long expected";
      if (message.fromSessionId != null && message.hasOwnProperty("fromSessionId"))
        if (!$util.isInteger(message.fromSessionId) && !(message.fromSessionId && $util.isInteger(message
          .fromSessionId.low) && $util.isInteger(message.fromSessionId.high)))
          return "fromSessionId: integer|Long expected";
      if (message.createTime != null && message.hasOwnProperty("createTime"))
        if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime
          .low) && $util.isInteger(message.createTime.high)))
          return "createTime: integer|Long expected";
      if (message.notifyData != null && message.hasOwnProperty("notifyData"))
        if (!(message.notifyData && typeof message.notifyData.length === "number" || $util.isString(message
          .notifyData)))
          return "notifyData: buffer expected";
      return null;
    };

    /**
     * Creates a NotifyInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BaseDefine.NotifyInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BaseDefine.NotifyInfo} NotifyInfo
     */
    NotifyInfo.fromObject = function fromObject(object) {
      if (object instanceof $root.BaseDefine.NotifyInfo)
        return object;
      var message = new $root.BaseDefine.NotifyInfo();
      if (object.notifyId != null)
        if ($util.Long)
          (message.notifyId = $util.Long.fromValue(object.notifyId)).unsigned = true;
        else if (typeof object.notifyId === "string")
          message.notifyId = parseInt(object.notifyId, 10);
        else if (typeof object.notifyId === "number")
          message.notifyId = object.notifyId;
        else if (typeof object.notifyId === "object")
          message.notifyId = new $util.LongBits(object.notifyId.low >>> 0, object.notifyId.high >>> 0).toNumber(
            true);
      if (object.fromSessionId != null)
        if ($util.Long)
          (message.fromSessionId = $util.Long.fromValue(object.fromSessionId)).unsigned = true;
        else if (typeof object.fromSessionId === "string")
          message.fromSessionId = parseInt(object.fromSessionId, 10);
        else if (typeof object.fromSessionId === "number")
          message.fromSessionId = object.fromSessionId;
        else if (typeof object.fromSessionId === "object")
          message.fromSessionId = new $util.LongBits(object.fromSessionId.low >>> 0, object.fromSessionId
            .high >>> 0).toNumber(true);
      if (object.createTime != null)
        if ($util.Long)
          (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = true;
        else if (typeof object.createTime === "string")
          message.createTime = parseInt(object.createTime, 10);
        else if (typeof object.createTime === "number")
          message.createTime = object.createTime;
        else if (typeof object.createTime === "object")
          message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0)
            .toNumber(true);
      if (object.notifyData != null)
        if (typeof object.notifyData === "string")
          $util.base64.decode(object.notifyData, message.notifyData = $util.newBuffer($util.base64.length(
            object.notifyData)), 0);
        else if (object.notifyData.length)
          message.notifyData = object.notifyData;
      return message;
    };

    /**
     * Creates a plain object from a NotifyInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BaseDefine.NotifyInfo
     * @static
     * @param {BaseDefine.NotifyInfo} message NotifyInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NotifyInfo.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.notifyId = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.notifyId = options.longs === String ? "0" : 0;
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.fromSessionId = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.fromSessionId = options.longs === String ? "0" : 0;
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.createTime = options.longs === String ? "0" : 0;
        if (options.bytes === String)
          object.notifyData = "";
        else {
          object.notifyData = [];
          if (options.bytes !== Array)
            object.notifyData = $util.newBuffer(object.notifyData);
        }
      }
      if (message.notifyId != null && message.hasOwnProperty("notifyId"))
        if (typeof message.notifyId === "number")
          object.notifyId = options.longs === String ? String(message.notifyId) : message.notifyId;
        else
          object.notifyId = options.longs === String ? $util.Long.prototype.toString.call(message.notifyId) :
            options.longs === Number ? new $util.LongBits(message.notifyId.low >>> 0, message.notifyId.high >>>
            0).toNumber(true) : message.notifyId;
      if (message.fromSessionId != null && message.hasOwnProperty("fromSessionId"))
        if (typeof message.fromSessionId === "number")
          object.fromSessionId = options.longs === String ? String(message.fromSessionId) : message
            .fromSessionId;
        else
          object.fromSessionId = options.longs === String ? $util.Long.prototype.toString.call(message
            .fromSessionId) : options.longs === Number ? new $util.LongBits(message.fromSessionId.low >>> 0,
            message.fromSessionId.high >>> 0).toNumber(true) : message.fromSessionId;
      if (message.createTime != null && message.hasOwnProperty("createTime"))
        if (typeof message.createTime === "number")
          object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
        else
          object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message
            .createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message
            .createTime.high >>> 0).toNumber(true) : message.createTime;
      if (message.notifyData != null && message.hasOwnProperty("notifyData"))
        object.notifyData = options.bytes === String ? $util.base64.encode(message.notifyData, 0, message
          .notifyData.length) : options.bytes === Array ? Array.prototype.slice.call(message.notifyData) :
          message.notifyData;
      return object;
    };

    /**
     * Converts this NotifyInfo to JSON.
     * @function toJSON
     * @memberof BaseDefine.NotifyInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NotifyInfo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return NotifyInfo;
  })();

  BaseDefine.MsgInfo = (function() {

    /**
     * Properties of a MsgInfo.
     * @memberof BaseDefine
     * @interface IMsgInfo
     * @property {number|Long|null} [msgId] MsgInfo msgId
     * @property {number|Long|null} [fromSessionId] MsgInfo fromSessionId
     * @property {number|Long|null} [createTime] MsgInfo createTime
     * @property {BaseDefine.MsgType|null} [msgType] MsgInfo msgType
     * @property {Uint8Array|null} [msgData] MsgInfo msgData
     */

    /**
     * Constructs a new MsgInfo.
     * @memberof BaseDefine
     * @classdesc Represents a MsgInfo.
     * @implements IMsgInfo
     * @constructor
     * @param {BaseDefine.IMsgInfo=} [properties] Properties to set
     */
    function MsgInfo(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * MsgInfo msgId.
     * @member {number|Long} msgId
     * @memberof BaseDefine.MsgInfo
     * @instance
     */
    MsgInfo.prototype.msgId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * MsgInfo fromSessionId.
     * @member {number|Long} fromSessionId
     * @memberof BaseDefine.MsgInfo
     * @instance
     */
    MsgInfo.prototype.fromSessionId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * MsgInfo createTime.
     * @member {number|Long} createTime
     * @memberof BaseDefine.MsgInfo
     * @instance
     */
    MsgInfo.prototype.createTime = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * MsgInfo msgType.
     * @member {BaseDefine.MsgType} msgType
     * @memberof BaseDefine.MsgInfo
     * @instance
     */
    MsgInfo.prototype.msgType = 0;

    /**
     * MsgInfo msgData.
     * @member {Uint8Array} msgData
     * @memberof BaseDefine.MsgInfo
     * @instance
     */
    MsgInfo.prototype.msgData = $util.newBuffer([]);

    /**
     * Creates a new MsgInfo instance using the specified properties.
     * @function create
     * @memberof BaseDefine.MsgInfo
     * @static
     * @param {BaseDefine.IMsgInfo=} [properties] Properties to set
     * @returns {BaseDefine.MsgInfo} MsgInfo instance
     */
    MsgInfo.create = function create(properties) {
      return new MsgInfo(properties);
    };

    /**
     * Encodes the specified MsgInfo message. Does not implicitly {@link BaseDefine.MsgInfo.verify|verify} messages.
     * @function encode
     * @memberof BaseDefine.MsgInfo
     * @static
     * @param {BaseDefine.IMsgInfo} message MsgInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MsgInfo.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.msgId != null && Object.hasOwnProperty.call(message, "msgId"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint64(message.msgId);
      if (message.fromSessionId != null && Object.hasOwnProperty.call(message, "fromSessionId"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).uint64(message.fromSessionId);
      if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
        writer.uint32( /* id 3, wireType 0 =*/ 24).uint64(message.createTime);
      if (message.msgType != null && Object.hasOwnProperty.call(message, "msgType"))
        writer.uint32( /* id 4, wireType 0 =*/ 32).int32(message.msgType);
      if (message.msgData != null && Object.hasOwnProperty.call(message, "msgData"))
        writer.uint32( /* id 5, wireType 2 =*/ 42).bytes(message.msgData);
      return writer;
    };

    /**
     * Encodes the specified MsgInfo message, length delimited. Does not implicitly {@link BaseDefine.MsgInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BaseDefine.MsgInfo
     * @static
     * @param {BaseDefine.IMsgInfo} message MsgInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MsgInfo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MsgInfo message from the specified reader or buffer.
     * @function decode
     * @memberof BaseDefine.MsgInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BaseDefine.MsgInfo} MsgInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MsgInfo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.BaseDefine.MsgInfo();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.msgId = reader.uint64();
          break;
        case 2:
          message.fromSessionId = reader.uint64();
          break;
        case 3:
          message.createTime = reader.uint64();
          break;
        case 4:
          message.msgType = reader.int32();
          break;
        case 5:
          message.msgData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a MsgInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BaseDefine.MsgInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BaseDefine.MsgInfo} MsgInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MsgInfo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MsgInfo message.
     * @function verify
     * @memberof BaseDefine.MsgInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MsgInfo.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.msgId != null && message.hasOwnProperty("msgId"))
        if (!$util.isInteger(message.msgId) && !(message.msgId && $util.isInteger(message.msgId.low) && $util
          .isInteger(message.msgId.high)))
          return "msgId: integer|Long expected";
      if (message.fromSessionId != null && message.hasOwnProperty("fromSessionId"))
        if (!$util.isInteger(message.fromSessionId) && !(message.fromSessionId && $util.isInteger(message
          .fromSessionId.low) && $util.isInteger(message.fromSessionId.high)))
          return "fromSessionId: integer|Long expected";
      if (message.createTime != null && message.hasOwnProperty("createTime"))
        if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime
          .low) && $util.isInteger(message.createTime.high)))
          return "createTime: integer|Long expected";
      if (message.msgType != null && message.hasOwnProperty("msgType"))
        switch (message.msgType) {
        default:
          return "msgType: enum value expected";
        case 0:
        case 1:
        case 2:
        case 17:
        case 18:
          break;
        }
      if (message.msgData != null && message.hasOwnProperty("msgData"))
        if (!(message.msgData && typeof message.msgData.length === "number" || $util.isString(message
          .msgData)))
          return "msgData: buffer expected";
      return null;
    };

    /**
     * Creates a MsgInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BaseDefine.MsgInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BaseDefine.MsgInfo} MsgInfo
     */
    MsgInfo.fromObject = function fromObject(object) {
      if (object instanceof $root.BaseDefine.MsgInfo)
        return object;
      var message = new $root.BaseDefine.MsgInfo();
      if (object.msgId != null)
        if ($util.Long)
          (message.msgId = $util.Long.fromValue(object.msgId)).unsigned = true;
        else if (typeof object.msgId === "string")
          message.msgId = parseInt(object.msgId, 10);
        else if (typeof object.msgId === "number")
          message.msgId = object.msgId;
        else if (typeof object.msgId === "object")
          message.msgId = new $util.LongBits(object.msgId.low >>> 0, object.msgId.high >>> 0).toNumber(true);
      if (object.fromSessionId != null)
        if ($util.Long)
          (message.fromSessionId = $util.Long.fromValue(object.fromSessionId)).unsigned = true;
        else if (typeof object.fromSessionId === "string")
          message.fromSessionId = parseInt(object.fromSessionId, 10);
        else if (typeof object.fromSessionId === "number")
          message.fromSessionId = object.fromSessionId;
        else if (typeof object.fromSessionId === "object")
          message.fromSessionId = new $util.LongBits(object.fromSessionId.low >>> 0, object.fromSessionId
            .high >>> 0).toNumber(true);
      if (object.createTime != null)
        if ($util.Long)
          (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = true;
        else if (typeof object.createTime === "string")
          message.createTime = parseInt(object.createTime, 10);
        else if (typeof object.createTime === "number")
          message.createTime = object.createTime;
        else if (typeof object.createTime === "object")
          message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0)
            .toNumber(true);
      switch (object.msgType) {
      case "MSG_TYPE_SINGLE_NONE":
      case 0:
        message.msgType = 0;
        break;
      case "MSG_TYPE_SINGLE_TEXT":
      case 1:
        message.msgType = 1;
        break;
      case "MSG_TYPE_SINGLE_AUDIO":
      case 2:
        message.msgType = 2;
        break;
      case "MSG_TYPE_GROUP_TEXT":
      case 17:
        message.msgType = 17;
        break;
      case "MSG_TYPE_GROUP_AUDIO":
      case 18:
        message.msgType = 18;
        break;
      }
      if (object.msgData != null)
        if (typeof object.msgData === "string")
          $util.base64.decode(object.msgData, message.msgData = $util.newBuffer($util.base64.length(object
            .msgData)), 0);
        else if (object.msgData.length)
          message.msgData = object.msgData;
      return message;
    };

    /**
     * Creates a plain object from a MsgInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BaseDefine.MsgInfo
     * @static
     * @param {BaseDefine.MsgInfo} message MsgInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MsgInfo.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.msgId = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.msgId = options.longs === String ? "0" : 0;
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.fromSessionId = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.fromSessionId = options.longs === String ? "0" : 0;
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.createTime = options.longs === String ? "0" : 0;
        object.msgType = options.enums === String ? "MSG_TYPE_SINGLE_NONE" : 0;
        if (options.bytes === String)
          object.msgData = "";
        else {
          object.msgData = [];
          if (options.bytes !== Array)
            object.msgData = $util.newBuffer(object.msgData);
        }
      }
      if (message.msgId != null && message.hasOwnProperty("msgId"))
        if (typeof message.msgId === "number")
          object.msgId = options.longs === String ? String(message.msgId) : message.msgId;
        else
          object.msgId = options.longs === String ? $util.Long.prototype.toString.call(message.msgId) :
            options.longs === Number ? new $util.LongBits(message.msgId.low >>> 0, message.msgId.high >>> 0)
              .toNumber(true) : message.msgId;
      if (message.fromSessionId != null && message.hasOwnProperty("fromSessionId"))
        if (typeof message.fromSessionId === "number")
          object.fromSessionId = options.longs === String ? String(message.fromSessionId) : message
            .fromSessionId;
        else
          object.fromSessionId = options.longs === String ? $util.Long.prototype.toString.call(message
            .fromSessionId) : options.longs === Number ? new $util.LongBits(message.fromSessionId.low >>> 0,
            message.fromSessionId.high >>> 0).toNumber(true) : message.fromSessionId;
      if (message.createTime != null && message.hasOwnProperty("createTime"))
        if (typeof message.createTime === "number")
          object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
        else
          object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message
            .createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message
            .createTime.high >>> 0).toNumber(true) : message.createTime;
      if (message.msgType != null && message.hasOwnProperty("msgType"))
        object.msgType = options.enums === String ? $root.BaseDefine.MsgType[message.msgType] : message
          .msgType;
      if (message.msgData != null && message.hasOwnProperty("msgData"))
        object.msgData = options.bytes === String ? $util.base64.encode(message.msgData, 0, message.msgData
          .length) : options.bytes === Array ? Array.prototype.slice.call(message.msgData) : message.msgData;
      return object;
    };

    /**
     * Converts this MsgInfo to JSON.
     * @function toJSON
     * @memberof BaseDefine.MsgInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MsgInfo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MsgInfo;
  })();

  BaseDefine.UserTokenInfo = (function() {

    /**
     * Properties of a UserTokenInfo.
     * @memberof BaseDefine
     * @interface IUserTokenInfo
     * @property {number|Long|null} [userId] UserTokenInfo userId
     * @property {BaseDefine.ClientType|null} [userType] UserTokenInfo userType
     * @property {string|null} [token] UserTokenInfo token
     * @property {number|null} [pushCount] UserTokenInfo pushCount
     * @property {number|null} [pushType] UserTokenInfo pushType
     */

    /**
     * Constructs a new UserTokenInfo.
     * @memberof BaseDefine
     * @classdesc Represents a UserTokenInfo.
     * @implements IUserTokenInfo
     * @constructor
     * @param {BaseDefine.IUserTokenInfo=} [properties] Properties to set
     */
    function UserTokenInfo(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserTokenInfo userId.
     * @member {number|Long} userId
     * @memberof BaseDefine.UserTokenInfo
     * @instance
     */
    UserTokenInfo.prototype.userId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * UserTokenInfo userType.
     * @member {BaseDefine.ClientType} userType
     * @memberof BaseDefine.UserTokenInfo
     * @instance
     */
    UserTokenInfo.prototype.userType = 0;

    /**
     * UserTokenInfo token.
     * @member {string} token
     * @memberof BaseDefine.UserTokenInfo
     * @instance
     */
    UserTokenInfo.prototype.token = "";

    /**
     * UserTokenInfo pushCount.
     * @member {number} pushCount
     * @memberof BaseDefine.UserTokenInfo
     * @instance
     */
    UserTokenInfo.prototype.pushCount = 0;

    /**
     * UserTokenInfo pushType.
     * @member {number} pushType
     * @memberof BaseDefine.UserTokenInfo
     * @instance
     */
    UserTokenInfo.prototype.pushType = 0;

    /**
     * Creates a new UserTokenInfo instance using the specified properties.
     * @function create
     * @memberof BaseDefine.UserTokenInfo
     * @static
     * @param {BaseDefine.IUserTokenInfo=} [properties] Properties to set
     * @returns {BaseDefine.UserTokenInfo} UserTokenInfo instance
     */
    UserTokenInfo.create = function create(properties) {
      return new UserTokenInfo(properties);
    };

    /**
     * Encodes the specified UserTokenInfo message. Does not implicitly {@link BaseDefine.UserTokenInfo.verify|verify} messages.
     * @function encode
     * @memberof BaseDefine.UserTokenInfo
     * @static
     * @param {BaseDefine.IUserTokenInfo} message UserTokenInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserTokenInfo.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint64(message.userId);
      if (message.userType != null && Object.hasOwnProperty.call(message, "userType"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).int32(message.userType);
      if (message.token != null && Object.hasOwnProperty.call(message, "token"))
        writer.uint32( /* id 3, wireType 2 =*/ 26).string(message.token);
      if (message.pushCount != null && Object.hasOwnProperty.call(message, "pushCount"))
        writer.uint32( /* id 4, wireType 0 =*/ 32).uint32(message.pushCount);
      if (message.pushType != null && Object.hasOwnProperty.call(message, "pushType"))
        writer.uint32( /* id 5, wireType 0 =*/ 40).uint32(message.pushType);
      return writer;
    };

    /**
     * Encodes the specified UserTokenInfo message, length delimited. Does not implicitly {@link BaseDefine.UserTokenInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BaseDefine.UserTokenInfo
     * @static
     * @param {BaseDefine.IUserTokenInfo} message UserTokenInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserTokenInfo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserTokenInfo message from the specified reader or buffer.
     * @function decode
     * @memberof BaseDefine.UserTokenInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BaseDefine.UserTokenInfo} UserTokenInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserTokenInfo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.BaseDefine.UserTokenInfo();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint64();
          break;
        case 2:
          message.userType = reader.int32();
          break;
        case 3:
          message.token = reader.string();
          break;
        case 4:
          message.pushCount = reader.uint32();
          break;
        case 5:
          message.pushType = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a UserTokenInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BaseDefine.UserTokenInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BaseDefine.UserTokenInfo} UserTokenInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserTokenInfo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserTokenInfo message.
     * @function verify
     * @memberof BaseDefine.UserTokenInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserTokenInfo.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) &&
            $util.isInteger(message.userId.high)))
          return "userId: integer|Long expected";
      if (message.userType != null && message.hasOwnProperty("userType"))
        switch (message.userType) {
        default:
          return "userType: enum value expected";
        case 0:
        case 1:
        case 2:
        case 17:
        case 18:
        case 19:
          break;
        }
      if (message.token != null && message.hasOwnProperty("token"))
        if (!$util.isString(message.token))
          return "token: string expected";
      if (message.pushCount != null && message.hasOwnProperty("pushCount"))
        if (!$util.isInteger(message.pushCount))
          return "pushCount: integer expected";
      if (message.pushType != null && message.hasOwnProperty("pushType"))
        if (!$util.isInteger(message.pushType))
          return "pushType: integer expected";
      return null;
    };

    /**
     * Creates a UserTokenInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BaseDefine.UserTokenInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BaseDefine.UserTokenInfo} UserTokenInfo
     */
    UserTokenInfo.fromObject = function fromObject(object) {
      if (object instanceof $root.BaseDefine.UserTokenInfo)
        return object;
      var message = new $root.BaseDefine.UserTokenInfo();
      if (object.userId != null)
        if ($util.Long)
          (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
        else if (typeof object.userId === "string")
          message.userId = parseInt(object.userId, 10);
        else if (typeof object.userId === "number")
          message.userId = object.userId;
        else if (typeof object.userId === "object")
          message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
      switch (object.userType) {
      case "CLIENT_TYPE_NONE":
      case 0:
        message.userType = 0;
        break;
      case "CLIENT_TYPE_WINDOWS":
      case 1:
        message.userType = 1;
        break;
      case "CLIENT_TYPE_MAC":
      case 2:
        message.userType = 2;
        break;
      case "CLIENT_TYPE_IOS":
      case 17:
        message.userType = 17;
        break;
      case "CLIENT_TYPE_ANDROID":
      case 18:
        message.userType = 18;
        break;
      case "CLIENT_TYPE_WEB":
      case 19:
        message.userType = 19;
        break;
      }
      if (object.token != null)
        message.token = String(object.token);
      if (object.pushCount != null)
        message.pushCount = object.pushCount >>> 0;
      if (object.pushType != null)
        message.pushType = object.pushType >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a UserTokenInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BaseDefine.UserTokenInfo
     * @static
     * @param {BaseDefine.UserTokenInfo} message UserTokenInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserTokenInfo.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.userId = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.userId = options.longs === String ? "0" : 0;
        object.userType = options.enums === String ? "CLIENT_TYPE_NONE" : 0;
        object.token = "";
        object.pushCount = 0;
        object.pushType = 0;
      }
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (typeof message.userId === "number")
          object.userId = options.longs === String ? String(message.userId) : message.userId;
        else
          object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) :
            options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0)
              .toNumber(true) : message.userId;
      if (message.userType != null && message.hasOwnProperty("userType"))
        object.userType = options.enums === String ? $root.BaseDefine.ClientType[message.userType] : message
          .userType;
      if (message.token != null && message.hasOwnProperty("token"))
        object.token = message.token;
      if (message.pushCount != null && message.hasOwnProperty("pushCount"))
        object.pushCount = message.pushCount;
      if (message.pushType != null && message.hasOwnProperty("pushType"))
        object.pushType = message.pushType;
      return object;
    };

    /**
     * Converts this UserTokenInfo to JSON.
     * @function toJSON
     * @memberof BaseDefine.UserTokenInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserTokenInfo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserTokenInfo;
  })();

  BaseDefine.PushResult = (function() {

    /**
     * Properties of a PushResult.
     * @memberof BaseDefine
     * @interface IPushResult
     * @property {string|null} [userToken] PushResult userToken
     * @property {number|null} [resultCode] PushResult resultCode
     */

    /**
     * Constructs a new PushResult.
     * @memberof BaseDefine
     * @classdesc Represents a PushResult.
     * @implements IPushResult
     * @constructor
     * @param {BaseDefine.IPushResult=} [properties] Properties to set
     */
    function PushResult(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * PushResult userToken.
     * @member {string} userToken
     * @memberof BaseDefine.PushResult
     * @instance
     */
    PushResult.prototype.userToken = "";

    /**
     * PushResult resultCode.
     * @member {number} resultCode
     * @memberof BaseDefine.PushResult
     * @instance
     */
    PushResult.prototype.resultCode = 0;

    /**
     * Creates a new PushResult instance using the specified properties.
     * @function create
     * @memberof BaseDefine.PushResult
     * @static
     * @param {BaseDefine.IPushResult=} [properties] Properties to set
     * @returns {BaseDefine.PushResult} PushResult instance
     */
    PushResult.create = function create(properties) {
      return new PushResult(properties);
    };

    /**
     * Encodes the specified PushResult message. Does not implicitly {@link BaseDefine.PushResult.verify|verify} messages.
     * @function encode
     * @memberof BaseDefine.PushResult
     * @static
     * @param {BaseDefine.IPushResult} message PushResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushResult.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.userToken != null && Object.hasOwnProperty.call(message, "userToken"))
        writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.userToken);
      if (message.resultCode != null && Object.hasOwnProperty.call(message, "resultCode"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).uint32(message.resultCode);
      return writer;
    };

    /**
     * Encodes the specified PushResult message, length delimited. Does not implicitly {@link BaseDefine.PushResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BaseDefine.PushResult
     * @static
     * @param {BaseDefine.IPushResult} message PushResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushResult.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PushResult message from the specified reader or buffer.
     * @function decode
     * @memberof BaseDefine.PushResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BaseDefine.PushResult} PushResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushResult.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.BaseDefine.PushResult();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.userToken = reader.string();
          break;
        case 2:
          message.resultCode = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a PushResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BaseDefine.PushResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BaseDefine.PushResult} PushResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushResult.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PushResult message.
     * @function verify
     * @memberof BaseDefine.PushResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PushResult.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.userToken != null && message.hasOwnProperty("userToken"))
        if (!$util.isString(message.userToken))
          return "userToken: string expected";
      if (message.resultCode != null && message.hasOwnProperty("resultCode"))
        if (!$util.isInteger(message.resultCode))
          return "resultCode: integer expected";
      return null;
    };

    /**
     * Creates a PushResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BaseDefine.PushResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BaseDefine.PushResult} PushResult
     */
    PushResult.fromObject = function fromObject(object) {
      if (object instanceof $root.BaseDefine.PushResult)
        return object;
      var message = new $root.BaseDefine.PushResult();
      if (object.userToken != null)
        message.userToken = String(object.userToken);
      if (object.resultCode != null)
        message.resultCode = object.resultCode >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a PushResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BaseDefine.PushResult
     * @static
     * @param {BaseDefine.PushResult} message PushResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PushResult.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.userToken = "";
        object.resultCode = 0;
      }
      if (message.userToken != null && message.hasOwnProperty("userToken"))
        object.userToken = message.userToken;
      if (message.resultCode != null && message.hasOwnProperty("resultCode"))
        object.resultCode = message.resultCode;
      return object;
    };

    /**
     * Converts this PushResult to JSON.
     * @function toJSON
     * @memberof BaseDefine.PushResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PushResult.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PushResult;
  })();

  BaseDefine.ShieldStatus = (function() {

    /**
     * Properties of a ShieldStatus.
     * @memberof BaseDefine
     * @interface IShieldStatus
     * @property {number|Long|null} [userId] ShieldStatus userId
     * @property {number|Long|null} [groupId] ShieldStatus groupId
     * @property {number|null} [shieldStatus] ShieldStatus shieldStatus
     */

    /**
     * Constructs a new ShieldStatus.
     * @memberof BaseDefine
     * @classdesc Represents a ShieldStatus.
     * @implements IShieldStatus
     * @constructor
     * @param {BaseDefine.IShieldStatus=} [properties] Properties to set
     */
    function ShieldStatus(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * ShieldStatus userId.
     * @member {number|Long} userId
     * @memberof BaseDefine.ShieldStatus
     * @instance
     */
    ShieldStatus.prototype.userId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * ShieldStatus groupId.
     * @member {number|Long} groupId
     * @memberof BaseDefine.ShieldStatus
     * @instance
     */
    ShieldStatus.prototype.groupId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * ShieldStatus shieldStatus.
     * @member {number} shieldStatus
     * @memberof BaseDefine.ShieldStatus
     * @instance
     */
    ShieldStatus.prototype.shieldStatus = 0;

    /**
     * Creates a new ShieldStatus instance using the specified properties.
     * @function create
     * @memberof BaseDefine.ShieldStatus
     * @static
     * @param {BaseDefine.IShieldStatus=} [properties] Properties to set
     * @returns {BaseDefine.ShieldStatus} ShieldStatus instance
     */
    ShieldStatus.create = function create(properties) {
      return new ShieldStatus(properties);
    };

    /**
     * Encodes the specified ShieldStatus message. Does not implicitly {@link BaseDefine.ShieldStatus.verify|verify} messages.
     * @function encode
     * @memberof BaseDefine.ShieldStatus
     * @static
     * @param {BaseDefine.IShieldStatus} message ShieldStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ShieldStatus.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint64(message.userId);
      if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).uint64(message.groupId);
      if (message.shieldStatus != null && Object.hasOwnProperty.call(message, "shieldStatus"))
        writer.uint32( /* id 3, wireType 0 =*/ 24).uint32(message.shieldStatus);
      return writer;
    };

    /**
     * Encodes the specified ShieldStatus message, length delimited. Does not implicitly {@link BaseDefine.ShieldStatus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BaseDefine.ShieldStatus
     * @static
     * @param {BaseDefine.IShieldStatus} message ShieldStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ShieldStatus.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ShieldStatus message from the specified reader or buffer.
     * @function decode
     * @memberof BaseDefine.ShieldStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BaseDefine.ShieldStatus} ShieldStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ShieldStatus.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.BaseDefine.ShieldStatus();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint64();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.shieldStatus = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a ShieldStatus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BaseDefine.ShieldStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BaseDefine.ShieldStatus} ShieldStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ShieldStatus.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ShieldStatus message.
     * @function verify
     * @memberof BaseDefine.ShieldStatus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ShieldStatus.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) &&
            $util.isInteger(message.userId.high)))
          return "userId: integer|Long expected";
      if (message.groupId != null && message.hasOwnProperty("groupId"))
        if (!$util.isInteger(message.groupId) && !(message.groupId && $util.isInteger(message.groupId.low) &&
            $util.isInteger(message.groupId.high)))
          return "groupId: integer|Long expected";
      if (message.shieldStatus != null && message.hasOwnProperty("shieldStatus"))
        if (!$util.isInteger(message.shieldStatus))
          return "shieldStatus: integer expected";
      return null;
    };

    /**
     * Creates a ShieldStatus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BaseDefine.ShieldStatus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BaseDefine.ShieldStatus} ShieldStatus
     */
    ShieldStatus.fromObject = function fromObject(object) {
      if (object instanceof $root.BaseDefine.ShieldStatus)
        return object;
      var message = new $root.BaseDefine.ShieldStatus();
      if (object.userId != null)
        if ($util.Long)
          (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
        else if (typeof object.userId === "string")
          message.userId = parseInt(object.userId, 10);
        else if (typeof object.userId === "number")
          message.userId = object.userId;
        else if (typeof object.userId === "object")
          message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
      if (object.groupId != null)
        if ($util.Long)
          (message.groupId = $util.Long.fromValue(object.groupId)).unsigned = true;
        else if (typeof object.groupId === "string")
          message.groupId = parseInt(object.groupId, 10);
        else if (typeof object.groupId === "number")
          message.groupId = object.groupId;
        else if (typeof object.groupId === "object")
          message.groupId = new $util.LongBits(object.groupId.low >>> 0, object.groupId.high >>> 0).toNumber(
            true);
      if (object.shieldStatus != null)
        message.shieldStatus = object.shieldStatus >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a ShieldStatus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BaseDefine.ShieldStatus
     * @static
     * @param {BaseDefine.ShieldStatus} message ShieldStatus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ShieldStatus.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.userId = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.userId = options.longs === String ? "0" : 0;
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.groupId = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.groupId = options.longs === String ? "0" : 0;
        object.shieldStatus = 0;
      }
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (typeof message.userId === "number")
          object.userId = options.longs === String ? String(message.userId) : message.userId;
        else
          object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) :
            options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0)
              .toNumber(true) : message.userId;
      if (message.groupId != null && message.hasOwnProperty("groupId"))
        if (typeof message.groupId === "number")
          object.groupId = options.longs === String ? String(message.groupId) : message.groupId;
        else
          object.groupId = options.longs === String ? $util.Long.prototype.toString.call(message.groupId) :
            options.longs === Number ? new $util.LongBits(message.groupId.low >>> 0, message.groupId.high >>> 0)
              .toNumber(true) : message.groupId;
      if (message.shieldStatus != null && message.hasOwnProperty("shieldStatus"))
        object.shieldStatus = message.shieldStatus;
      return object;
    };

    /**
     * Converts this ShieldStatus to JSON.
     * @function toJSON
     * @memberof BaseDefine.ShieldStatus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ShieldStatus.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ShieldStatus;
  })();

  BaseDefine.OfflineFileInfo = (function() {

    /**
     * Properties of an OfflineFileInfo.
     * @memberof BaseDefine
     * @interface IOfflineFileInfo
     * @property {number|Long|null} [fromUserId] OfflineFileInfo fromUserId
     * @property {string|null} [taskId] OfflineFileInfo taskId
     * @property {string|null} [fileName] OfflineFileInfo fileName
     * @property {number|null} [fileSize] OfflineFileInfo fileSize
     */

    /**
     * Constructs a new OfflineFileInfo.
     * @memberof BaseDefine
     * @classdesc Represents an OfflineFileInfo.
     * @implements IOfflineFileInfo
     * @constructor
     * @param {BaseDefine.IOfflineFileInfo=} [properties] Properties to set
     */
    function OfflineFileInfo(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * OfflineFileInfo fromUserId.
     * @member {number|Long} fromUserId
     * @memberof BaseDefine.OfflineFileInfo
     * @instance
     */
    OfflineFileInfo.prototype.fromUserId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * OfflineFileInfo taskId.
     * @member {string} taskId
     * @memberof BaseDefine.OfflineFileInfo
     * @instance
     */
    OfflineFileInfo.prototype.taskId = "";

    /**
     * OfflineFileInfo fileName.
     * @member {string} fileName
     * @memberof BaseDefine.OfflineFileInfo
     * @instance
     */
    OfflineFileInfo.prototype.fileName = "";

    /**
     * OfflineFileInfo fileSize.
     * @member {number} fileSize
     * @memberof BaseDefine.OfflineFileInfo
     * @instance
     */
    OfflineFileInfo.prototype.fileSize = 0;

    /**
     * Creates a new OfflineFileInfo instance using the specified properties.
     * @function create
     * @memberof BaseDefine.OfflineFileInfo
     * @static
     * @param {BaseDefine.IOfflineFileInfo=} [properties] Properties to set
     * @returns {BaseDefine.OfflineFileInfo} OfflineFileInfo instance
     */
    OfflineFileInfo.create = function create(properties) {
      return new OfflineFileInfo(properties);
    };

    /**
     * Encodes the specified OfflineFileInfo message. Does not implicitly {@link BaseDefine.OfflineFileInfo.verify|verify} messages.
     * @function encode
     * @memberof BaseDefine.OfflineFileInfo
     * @static
     * @param {BaseDefine.IOfflineFileInfo} message OfflineFileInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OfflineFileInfo.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.fromUserId != null && Object.hasOwnProperty.call(message, "fromUserId"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint64(message.fromUserId);
      if (message.taskId != null && Object.hasOwnProperty.call(message, "taskId"))
        writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.taskId);
      if (message.fileName != null && Object.hasOwnProperty.call(message, "fileName"))
        writer.uint32( /* id 3, wireType 2 =*/ 26).string(message.fileName);
      if (message.fileSize != null && Object.hasOwnProperty.call(message, "fileSize"))
        writer.uint32( /* id 4, wireType 0 =*/ 32).uint32(message.fileSize);
      return writer;
    };

    /**
     * Encodes the specified OfflineFileInfo message, length delimited. Does not implicitly {@link BaseDefine.OfflineFileInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BaseDefine.OfflineFileInfo
     * @static
     * @param {BaseDefine.IOfflineFileInfo} message OfflineFileInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OfflineFileInfo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an OfflineFileInfo message from the specified reader or buffer.
     * @function decode
     * @memberof BaseDefine.OfflineFileInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BaseDefine.OfflineFileInfo} OfflineFileInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OfflineFileInfo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.BaseDefine.OfflineFileInfo();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.fromUserId = reader.uint64();
          break;
        case 2:
          message.taskId = reader.string();
          break;
        case 3:
          message.fileName = reader.string();
          break;
        case 4:
          message.fileSize = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes an OfflineFileInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BaseDefine.OfflineFileInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BaseDefine.OfflineFileInfo} OfflineFileInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OfflineFileInfo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an OfflineFileInfo message.
     * @function verify
     * @memberof BaseDefine.OfflineFileInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    OfflineFileInfo.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.fromUserId != null && message.hasOwnProperty("fromUserId"))
        if (!$util.isInteger(message.fromUserId) && !(message.fromUserId && $util.isInteger(message.fromUserId
          .low) && $util.isInteger(message.fromUserId.high)))
          return "fromUserId: integer|Long expected";
      if (message.taskId != null && message.hasOwnProperty("taskId"))
        if (!$util.isString(message.taskId))
          return "taskId: string expected";
      if (message.fileName != null && message.hasOwnProperty("fileName"))
        if (!$util.isString(message.fileName))
          return "fileName: string expected";
      if (message.fileSize != null && message.hasOwnProperty("fileSize"))
        if (!$util.isInteger(message.fileSize))
          return "fileSize: integer expected";
      return null;
    };

    /**
     * Creates an OfflineFileInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BaseDefine.OfflineFileInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BaseDefine.OfflineFileInfo} OfflineFileInfo
     */
    OfflineFileInfo.fromObject = function fromObject(object) {
      if (object instanceof $root.BaseDefine.OfflineFileInfo)
        return object;
      var message = new $root.BaseDefine.OfflineFileInfo();
      if (object.fromUserId != null)
        if ($util.Long)
          (message.fromUserId = $util.Long.fromValue(object.fromUserId)).unsigned = true;
        else if (typeof object.fromUserId === "string")
          message.fromUserId = parseInt(object.fromUserId, 10);
        else if (typeof object.fromUserId === "number")
          message.fromUserId = object.fromUserId;
        else if (typeof object.fromUserId === "object")
          message.fromUserId = new $util.LongBits(object.fromUserId.low >>> 0, object.fromUserId.high >>> 0)
            .toNumber(true);
      if (object.taskId != null)
        message.taskId = String(object.taskId);
      if (object.fileName != null)
        message.fileName = String(object.fileName);
      if (object.fileSize != null)
        message.fileSize = object.fileSize >>> 0;
      return message;
    };

    /**
     * Creates a plain object from an OfflineFileInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BaseDefine.OfflineFileInfo
     * @static
     * @param {BaseDefine.OfflineFileInfo} message OfflineFileInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    OfflineFileInfo.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.fromUserId = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.fromUserId = options.longs === String ? "0" : 0;
        object.taskId = "";
        object.fileName = "";
        object.fileSize = 0;
      }
      if (message.fromUserId != null && message.hasOwnProperty("fromUserId"))
        if (typeof message.fromUserId === "number")
          object.fromUserId = options.longs === String ? String(message.fromUserId) : message.fromUserId;
        else
          object.fromUserId = options.longs === String ? $util.Long.prototype.toString.call(message
            .fromUserId) : options.longs === Number ? new $util.LongBits(message.fromUserId.low >>> 0, message
            .fromUserId.high >>> 0).toNumber(true) : message.fromUserId;
      if (message.taskId != null && message.hasOwnProperty("taskId"))
        object.taskId = message.taskId;
      if (message.fileName != null && message.hasOwnProperty("fileName"))
        object.fileName = message.fileName;
      if (message.fileSize != null && message.hasOwnProperty("fileSize"))
        object.fileSize = message.fileSize;
      return object;
    };

    /**
     * Converts this OfflineFileInfo to JSON.
     * @function toJSON
     * @memberof BaseDefine.OfflineFileInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    OfflineFileInfo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return OfflineFileInfo;
  })();

  BaseDefine.PushShieldStatus = (function() {

    /**
     * Properties of a PushShieldStatus.
     * @memberof BaseDefine
     * @interface IPushShieldStatus
     * @property {number|Long|null} [userId] PushShieldStatus userId
     * @property {number|null} [shieldStatus] PushShieldStatus shieldStatus
     */

    /**
     * Constructs a new PushShieldStatus.
     * @memberof BaseDefine
     * @classdesc Represents a PushShieldStatus.
     * @implements IPushShieldStatus
     * @constructor
     * @param {BaseDefine.IPushShieldStatus=} [properties] Properties to set
     */
    function PushShieldStatus(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * PushShieldStatus userId.
     * @member {number|Long} userId
     * @memberof BaseDefine.PushShieldStatus
     * @instance
     */
    PushShieldStatus.prototype.userId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * PushShieldStatus shieldStatus.
     * @member {number} shieldStatus
     * @memberof BaseDefine.PushShieldStatus
     * @instance
     */
    PushShieldStatus.prototype.shieldStatus = 0;

    /**
     * Creates a new PushShieldStatus instance using the specified properties.
     * @function create
     * @memberof BaseDefine.PushShieldStatus
     * @static
     * @param {BaseDefine.IPushShieldStatus=} [properties] Properties to set
     * @returns {BaseDefine.PushShieldStatus} PushShieldStatus instance
     */
    PushShieldStatus.create = function create(properties) {
      return new PushShieldStatus(properties);
    };

    /**
     * Encodes the specified PushShieldStatus message. Does not implicitly {@link BaseDefine.PushShieldStatus.verify|verify} messages.
     * @function encode
     * @memberof BaseDefine.PushShieldStatus
     * @static
     * @param {BaseDefine.IPushShieldStatus} message PushShieldStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushShieldStatus.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint64(message.userId);
      if (message.shieldStatus != null && Object.hasOwnProperty.call(message, "shieldStatus"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).uint32(message.shieldStatus);
      return writer;
    };

    /**
     * Encodes the specified PushShieldStatus message, length delimited. Does not implicitly {@link BaseDefine.PushShieldStatus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BaseDefine.PushShieldStatus
     * @static
     * @param {BaseDefine.IPushShieldStatus} message PushShieldStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PushShieldStatus.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PushShieldStatus message from the specified reader or buffer.
     * @function decode
     * @memberof BaseDefine.PushShieldStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BaseDefine.PushShieldStatus} PushShieldStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushShieldStatus.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.BaseDefine.PushShieldStatus();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint64();
          break;
        case 2:
          message.shieldStatus = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a PushShieldStatus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BaseDefine.PushShieldStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BaseDefine.PushShieldStatus} PushShieldStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PushShieldStatus.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PushShieldStatus message.
     * @function verify
     * @memberof BaseDefine.PushShieldStatus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PushShieldStatus.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) &&
            $util.isInteger(message.userId.high)))
          return "userId: integer|Long expected";
      if (message.shieldStatus != null && message.hasOwnProperty("shieldStatus"))
        if (!$util.isInteger(message.shieldStatus))
          return "shieldStatus: integer expected";
      return null;
    };

    /**
     * Creates a PushShieldStatus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BaseDefine.PushShieldStatus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BaseDefine.PushShieldStatus} PushShieldStatus
     */
    PushShieldStatus.fromObject = function fromObject(object) {
      if (object instanceof $root.BaseDefine.PushShieldStatus)
        return object;
      var message = new $root.BaseDefine.PushShieldStatus();
      if (object.userId != null)
        if ($util.Long)
          (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
        else if (typeof object.userId === "string")
          message.userId = parseInt(object.userId, 10);
        else if (typeof object.userId === "number")
          message.userId = object.userId;
        else if (typeof object.userId === "object")
          message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
      if (object.shieldStatus != null)
        message.shieldStatus = object.shieldStatus >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a PushShieldStatus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BaseDefine.PushShieldStatus
     * @static
     * @param {BaseDefine.PushShieldStatus} message PushShieldStatus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PushShieldStatus.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.userId = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.userId = options.longs === String ? "0" : 0;
        object.shieldStatus = 0;
      }
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (typeof message.userId === "number")
          object.userId = options.longs === String ? String(message.userId) : message.userId;
        else
          object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) :
            options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0)
              .toNumber(true) : message.userId;
      if (message.shieldStatus != null && message.hasOwnProperty("shieldStatus"))
        object.shieldStatus = message.shieldStatus;
      return object;
    };

    /**
     * Converts this PushShieldStatus to JSON.
     * @function toJSON
     * @memberof BaseDefine.PushShieldStatus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PushShieldStatus.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PushShieldStatus;
  })();

  return BaseDefine;
})();

$root.Login = (function() {

  /**
   * Namespace Login.
   * @exports Login
   * @namespace
   */
  var Login = {};

  Login.IMMsgServReq = (function() {

    /**
     * Properties of a IMMsgServReq.
     * @memberof Login
     * @interface IIMMsgServReq
     */

    /**
     * Constructs a new IMMsgServReq.
     * @memberof Login
     * @classdesc Represents a IMMsgServReq.
     * @implements IIMMsgServReq
     * @constructor
     * @param {Login.IIMMsgServReq=} [properties] Properties to set
     */
    function IMMsgServReq(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new IMMsgServReq instance using the specified properties.
     * @function create
     * @memberof Login.IMMsgServReq
     * @static
     * @param {Login.IIMMsgServReq=} [properties] Properties to set
     * @returns {Login.IMMsgServReq} IMMsgServReq instance
     */
    IMMsgServReq.create = function create(properties) {
      return new IMMsgServReq(properties);
    };

    /**
     * Encodes the specified IMMsgServReq message. Does not implicitly {@link Login.IMMsgServReq.verify|verify} messages.
     * @function encode
     * @memberof Login.IMMsgServReq
     * @static
     * @param {Login.IIMMsgServReq} message IMMsgServReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMMsgServReq.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      return writer;
    };

    /**
     * Encodes the specified IMMsgServReq message, length delimited. Does not implicitly {@link Login.IMMsgServReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Login.IMMsgServReq
     * @static
     * @param {Login.IIMMsgServReq} message IMMsgServReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMMsgServReq.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a IMMsgServReq message from the specified reader or buffer.
     * @function decode
     * @memberof Login.IMMsgServReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Login.IMMsgServReq} IMMsgServReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMMsgServReq.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Login.IMMsgServReq();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a IMMsgServReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Login.IMMsgServReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Login.IMMsgServReq} IMMsgServReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMMsgServReq.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a IMMsgServReq message.
     * @function verify
     * @memberof Login.IMMsgServReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IMMsgServReq.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      return null;
    };

    /**
     * Creates a IMMsgServReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Login.IMMsgServReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Login.IMMsgServReq} IMMsgServReq
     */
    IMMsgServReq.fromObject = function fromObject(object) {
      if (object instanceof $root.Login.IMMsgServReq)
        return object;
      return new $root.Login.IMMsgServReq();
    };

    /**
     * Creates a plain object from a IMMsgServReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Login.IMMsgServReq
     * @static
     * @param {Login.IMMsgServReq} message IMMsgServReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IMMsgServReq.toObject = function toObject() {
      return {};
    };

    /**
     * Converts this IMMsgServReq to JSON.
     * @function toJSON
     * @memberof Login.IMMsgServReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IMMsgServReq.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return IMMsgServReq;
  })();

  Login.IMMsgServRsp = (function() {

    /**
     * Properties of a IMMsgServRsp.
     * @memberof Login
     * @interface IIMMsgServRsp
     * @property {BaseDefine.ResultType|null} [resultCode] IMMsgServRsp resultCode
     * @property {string|null} [priorIp] IMMsgServRsp priorIp
     * @property {string|null} [backipIp] IMMsgServRsp backipIp
     * @property {number|null} [port] IMMsgServRsp port
     */

    /**
     * Constructs a new IMMsgServRsp.
     * @memberof Login
     * @classdesc Represents a IMMsgServRsp.
     * @implements IIMMsgServRsp
     * @constructor
     * @param {Login.IIMMsgServRsp=} [properties] Properties to set
     */
    function IMMsgServRsp(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * IMMsgServRsp resultCode.
     * @member {BaseDefine.ResultType} resultCode
     * @memberof Login.IMMsgServRsp
     * @instance
     */
    IMMsgServRsp.prototype.resultCode = 0;

    /**
     * IMMsgServRsp priorIp.
     * @member {string} priorIp
     * @memberof Login.IMMsgServRsp
     * @instance
     */
    IMMsgServRsp.prototype.priorIp = "";

    /**
     * IMMsgServRsp backipIp.
     * @member {string} backipIp
     * @memberof Login.IMMsgServRsp
     * @instance
     */
    IMMsgServRsp.prototype.backipIp = "";

    /**
     * IMMsgServRsp port.
     * @member {number} port
     * @memberof Login.IMMsgServRsp
     * @instance
     */
    IMMsgServRsp.prototype.port = 0;

    /**
     * Creates a new IMMsgServRsp instance using the specified properties.
     * @function create
     * @memberof Login.IMMsgServRsp
     * @static
     * @param {Login.IIMMsgServRsp=} [properties] Properties to set
     * @returns {Login.IMMsgServRsp} IMMsgServRsp instance
     */
    IMMsgServRsp.create = function create(properties) {
      return new IMMsgServRsp(properties);
    };

    /**
     * Encodes the specified IMMsgServRsp message. Does not implicitly {@link Login.IMMsgServRsp.verify|verify} messages.
     * @function encode
     * @memberof Login.IMMsgServRsp
     * @static
     * @param {Login.IIMMsgServRsp} message IMMsgServRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMMsgServRsp.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.resultCode != null && Object.hasOwnProperty.call(message, "resultCode"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).int32(message.resultCode);
      if (message.priorIp != null && Object.hasOwnProperty.call(message, "priorIp"))
        writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.priorIp);
      if (message.backipIp != null && Object.hasOwnProperty.call(message, "backipIp"))
        writer.uint32( /* id 3, wireType 2 =*/ 26).string(message.backipIp);
      if (message.port != null && Object.hasOwnProperty.call(message, "port"))
        writer.uint32( /* id 4, wireType 0 =*/ 32).uint32(message.port);
      return writer;
    };

    /**
     * Encodes the specified IMMsgServRsp message, length delimited. Does not implicitly {@link Login.IMMsgServRsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Login.IMMsgServRsp
     * @static
     * @param {Login.IIMMsgServRsp} message IMMsgServRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMMsgServRsp.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a IMMsgServRsp message from the specified reader or buffer.
     * @function decode
     * @memberof Login.IMMsgServRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Login.IMMsgServRsp} IMMsgServRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMMsgServRsp.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Login.IMMsgServRsp();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.resultCode = reader.int32();
          break;
        case 2:
          message.priorIp = reader.string();
          break;
        case 3:
          message.backipIp = reader.string();
          break;
        case 4:
          message.port = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a IMMsgServRsp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Login.IMMsgServRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Login.IMMsgServRsp} IMMsgServRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMMsgServRsp.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a IMMsgServRsp message.
     * @function verify
     * @memberof Login.IMMsgServRsp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IMMsgServRsp.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.resultCode != null && message.hasOwnProperty("resultCode"))
        switch (message.resultCode) {
        default:
          return "resultCode: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          break;
        }
      if (message.priorIp != null && message.hasOwnProperty("priorIp"))
        if (!$util.isString(message.priorIp))
          return "priorIp: string expected";
      if (message.backipIp != null && message.hasOwnProperty("backipIp"))
        if (!$util.isString(message.backipIp))
          return "backipIp: string expected";
      if (message.port != null && message.hasOwnProperty("port"))
        if (!$util.isInteger(message.port))
          return "port: integer expected";
      return null;
    };

    /**
     * Creates a IMMsgServRsp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Login.IMMsgServRsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Login.IMMsgServRsp} IMMsgServRsp
     */
    IMMsgServRsp.fromObject = function fromObject(object) {
      if (object instanceof $root.Login.IMMsgServRsp)
        return object;
      var message = new $root.Login.IMMsgServRsp();
      switch (object.resultCode) {
      case "REFUSE_REASON_NONE":
      case 0:
        message.resultCode = 0;
        break;
      case "REFUSE_REASON_NO_MSG_SERVER":
      case 1:
        message.resultCode = 1;
        break;
      case "REFUSE_REASON_MSG_SERVER_FULL":
      case 2:
        message.resultCode = 2;
        break;
      case "REFUSE_REASON_NO_DB_SERVER":
      case 3:
        message.resultCode = 3;
        break;
      case "REFUSE_REASON_NO_LOGIN_SERVER":
      case 4:
        message.resultCode = 4;
        break;
      case "REFUSE_REASON_NO_ROUTE_SERVER":
      case 5:
        message.resultCode = 5;
        break;
      case "REFUSE_REASON_DB_VALIDATE_FAILED":
      case 6:
        message.resultCode = 6;
        break;
      case "REFUSE_REASON_VERSION_TOO_OLD":
      case 7:
        message.resultCode = 7;
        break;
      }
      if (object.priorIp != null)
        message.priorIp = String(object.priorIp);
      if (object.backipIp != null)
        message.backipIp = String(object.backipIp);
      if (object.port != null)
        message.port = object.port >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a IMMsgServRsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Login.IMMsgServRsp
     * @static
     * @param {Login.IMMsgServRsp} message IMMsgServRsp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IMMsgServRsp.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.resultCode = options.enums === String ? "REFUSE_REASON_NONE" : 0;
        object.priorIp = "";
        object.backipIp = "";
        object.port = 0;
      }
      if (message.resultCode != null && message.hasOwnProperty("resultCode"))
        object.resultCode = options.enums === String ? $root.BaseDefine.ResultType[message.resultCode] :
          message.resultCode;
      if (message.priorIp != null && message.hasOwnProperty("priorIp"))
        object.priorIp = message.priorIp;
      if (message.backipIp != null && message.hasOwnProperty("backipIp"))
        object.backipIp = message.backipIp;
      if (message.port != null && message.hasOwnProperty("port"))
        object.port = message.port;
      return object;
    };

    /**
     * Converts this IMMsgServRsp to JSON.
     * @function toJSON
     * @memberof Login.IMMsgServRsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IMMsgServRsp.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return IMMsgServRsp;
  })();

  Login.IMLoginReq = (function() {

    /**
     * Properties of a IMLoginReq.
     * @memberof Login
     * @interface IIMLoginReq
     * @property {string|null} [userName] IMLoginReq userName
     * @property {string|null} [password] IMLoginReq password
     * @property {BaseDefine.UserStatType|null} [onlineStatus] IMLoginReq onlineStatus
     * @property {BaseDefine.ClientType|null} [clientType] IMLoginReq clientType
     * @property {string|null} [clientVersion] IMLoginReq clientVersion
     * @property {string|null} [token] IMLoginReq token
     * @property {BaseDefine.UserType|null} [userType] IMLoginReq userType
     */

    /**
     * Constructs a new IMLoginReq.
     * @memberof Login
     * @classdesc Represents a IMLoginReq.
     * @implements IIMLoginReq
     * @constructor
     * @param {Login.IIMLoginReq=} [properties] Properties to set
     */
    function IMLoginReq(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * IMLoginReq userName.
     * @member {string} userName
     * @memberof Login.IMLoginReq
     * @instance
     */
    IMLoginReq.prototype.userName = "";

    /**
     * IMLoginReq password.
     * @member {string} password
     * @memberof Login.IMLoginReq
     * @instance
     */
    IMLoginReq.prototype.password = "";

    /**
     * IMLoginReq onlineStatus.
     * @member {BaseDefine.UserStatType} onlineStatus
     * @memberof Login.IMLoginReq
     * @instance
     */
    IMLoginReq.prototype.onlineStatus = 0;

    /**
     * IMLoginReq clientType.
     * @member {BaseDefine.ClientType} clientType
     * @memberof Login.IMLoginReq
     * @instance
     */
    IMLoginReq.prototype.clientType = 0;

    /**
     * IMLoginReq clientVersion.
     * @member {string} clientVersion
     * @memberof Login.IMLoginReq
     * @instance
     */
    IMLoginReq.prototype.clientVersion = "";

    /**
     * IMLoginReq token.
     * @member {string} token
     * @memberof Login.IMLoginReq
     * @instance
     */
    IMLoginReq.prototype.token = "";

    /**
     * IMLoginReq userType.
     * @member {BaseDefine.UserType} userType
     * @memberof Login.IMLoginReq
     * @instance
     */
    IMLoginReq.prototype.userType = 0;

    /**
     * Creates a new IMLoginReq instance using the specified properties.
     * @function create
     * @memberof Login.IMLoginReq
     * @static
     * @param {Login.IIMLoginReq=} [properties] Properties to set
     * @returns {Login.IMLoginReq} IMLoginReq instance
     */
    IMLoginReq.create = function create(properties) {
      return new IMLoginReq(properties);
    };

    /**
     * Encodes the specified IMLoginReq message. Does not implicitly {@link Login.IMLoginReq.verify|verify} messages.
     * @function encode
     * @memberof Login.IMLoginReq
     * @static
     * @param {Login.IIMLoginReq} message IMLoginReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMLoginReq.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
        writer.uint32( /* id 1, wireType 2 =*/ 10).string(message.userName);
      if (message.password != null && Object.hasOwnProperty.call(message, "password"))
        writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.password);
      if (message.onlineStatus != null && Object.hasOwnProperty.call(message, "onlineStatus"))
        writer.uint32( /* id 3, wireType 0 =*/ 24).int32(message.onlineStatus);
      if (message.clientType != null && Object.hasOwnProperty.call(message, "clientType"))
        writer.uint32( /* id 4, wireType 0 =*/ 32).int32(message.clientType);
      if (message.clientVersion != null && Object.hasOwnProperty.call(message, "clientVersion"))
        writer.uint32( /* id 5, wireType 2 =*/ 42).string(message.clientVersion);
      if (message.token != null && Object.hasOwnProperty.call(message, "token"))
        writer.uint32( /* id 6, wireType 2 =*/ 50).string(message.token);
      if (message.userType != null && Object.hasOwnProperty.call(message, "userType"))
        writer.uint32( /* id 7, wireType 0 =*/ 56).int32(message.userType);
      return writer;
    };

    /**
     * Encodes the specified IMLoginReq message, length delimited. Does not implicitly {@link Login.IMLoginReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Login.IMLoginReq
     * @static
     * @param {Login.IIMLoginReq} message IMLoginReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMLoginReq.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a IMLoginReq message from the specified reader or buffer.
     * @function decode
     * @memberof Login.IMLoginReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Login.IMLoginReq} IMLoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMLoginReq.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Login.IMLoginReq();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.userName = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        case 3:
          message.onlineStatus = reader.int32();
          break;
        case 4:
          message.clientType = reader.int32();
          break;
        case 5:
          message.clientVersion = reader.string();
          break;
        case 6:
          message.token = reader.string();
          break;
        case 7:
          message.userType = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a IMLoginReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Login.IMLoginReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Login.IMLoginReq} IMLoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMLoginReq.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a IMLoginReq message.
     * @function verify
     * @memberof Login.IMLoginReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IMLoginReq.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.userName != null && message.hasOwnProperty("userName"))
        if (!$util.isString(message.userName))
          return "userName: string expected";
      if (message.password != null && message.hasOwnProperty("password"))
        if (!$util.isString(message.password))
          return "password: string expected";
      if (message.onlineStatus != null && message.hasOwnProperty("onlineStatus"))
        switch (message.onlineStatus) {
        default:
          return "onlineStatus: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
          break;
        }
      if (message.clientType != null && message.hasOwnProperty("clientType"))
        switch (message.clientType) {
        default:
          return "clientType: enum value expected";
        case 0:
        case 1:
        case 2:
        case 17:
        case 18:
        case 19:
          break;
        }
      if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
        if (!$util.isString(message.clientVersion))
          return "clientVersion: string expected";
      if (message.token != null && message.hasOwnProperty("token"))
        if (!$util.isString(message.token))
          return "token: string expected";
      if (message.userType != null && message.hasOwnProperty("userType"))
        switch (message.userType) {
        default:
          return "userType: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
          break;
        }
      return null;
    };

    /**
     * Creates a IMLoginReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Login.IMLoginReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Login.IMLoginReq} IMLoginReq
     */
    IMLoginReq.fromObject = function fromObject(object) {
      if (object instanceof $root.Login.IMLoginReq)
        return object;
      var message = new $root.Login.IMLoginReq();
      if (object.userName != null)
        message.userName = String(object.userName);
      if (object.password != null)
        message.password = String(object.password);
      switch (object.onlineStatus) {
      case "USER_STATUS_NONE":
      case 0:
        message.onlineStatus = 0;
        break;
      case "USER_STATUS_ONLINE":
      case 1:
        message.onlineStatus = 1;
        break;
      case "USER_STATUS_OFFLINE":
      case 2:
        message.onlineStatus = 2;
        break;
      case "USER_STATUS_LEAVE":
      case 3:
        message.onlineStatus = 3;
        break;
      }
      switch (object.clientType) {
      case "CLIENT_TYPE_NONE":
      case 0:
        message.clientType = 0;
        break;
      case "CLIENT_TYPE_WINDOWS":
      case 1:
        message.clientType = 1;
        break;
      case "CLIENT_TYPE_MAC":
      case 2:
        message.clientType = 2;
        break;
      case "CLIENT_TYPE_IOS":
      case 17:
        message.clientType = 17;
        break;
      case "CLIENT_TYPE_ANDROID":
      case 18:
        message.clientType = 18;
        break;
      case "CLIENT_TYPE_WEB":
      case 19:
        message.clientType = 19;
        break;
      }
      if (object.clientVersion != null)
        message.clientVersion = String(object.clientVersion);
      if (object.token != null)
        message.token = String(object.token);
      switch (object.userType) {
      case "USER_NONE":
      case 0:
        message.userType = 0;
        break;
      case "USER":
      case 1:
        message.userType = 1;
        break;
      case "MEMBER":
      case 2:
        message.userType = 2;
        break;
      case "DRIVER":
      case 3:
        message.userType = 3;
        break;
      }
      return message;
    };

    /**
     * Creates a plain object from a IMLoginReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Login.IMLoginReq
     * @static
     * @param {Login.IMLoginReq} message IMLoginReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IMLoginReq.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.userName = "";
        object.password = "";
        object.onlineStatus = options.enums === String ? "USER_STATUS_NONE" : 0;
        object.clientType = options.enums === String ? "CLIENT_TYPE_NONE" : 0;
        object.clientVersion = "";
        object.token = "";
        object.userType = options.enums === String ? "USER_NONE" : 0;
      }
      if (message.userName != null && message.hasOwnProperty("userName"))
        object.userName = message.userName;
      if (message.password != null && message.hasOwnProperty("password"))
        object.password = message.password;
      if (message.onlineStatus != null && message.hasOwnProperty("onlineStatus"))
        object.onlineStatus = options.enums === String ? $root.BaseDefine.UserStatType[message.onlineStatus] :
          message.onlineStatus;
      if (message.clientType != null && message.hasOwnProperty("clientType"))
        object.clientType = options.enums === String ? $root.BaseDefine.ClientType[message.clientType] :
          message.clientType;
      if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
        object.clientVersion = message.clientVersion;
      if (message.token != null && message.hasOwnProperty("token"))
        object.token = message.token;
      if (message.userType != null && message.hasOwnProperty("userType"))
        object.userType = options.enums === String ? $root.BaseDefine.UserType[message.userType] : message
          .userType;
      return object;
    };

    /**
     * Converts this IMLoginReq to JSON.
     * @function toJSON
     * @memberof Login.IMLoginReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IMLoginReq.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return IMLoginReq;
  })();

  Login.IMLoginRes = (function() {

    /**
     * Properties of a IMLoginRes.
     * @memberof Login
     * @interface IIMLoginRes
     * @property {number|null} [serverTime] IMLoginRes serverTime
     * @property {BaseDefine.ResultType|null} [resultCode] IMLoginRes resultCode
     * @property {string|null} [resultString] IMLoginRes resultString
     * @property {BaseDefine.UserStatType|null} [onlineStatus] IMLoginRes onlineStatus
     * @property {BaseDefine.IUserInfo|null} [userInfo] IMLoginRes userInfo
     */

    /**
     * Constructs a new IMLoginRes.
     * @memberof Login
     * @classdesc Represents a IMLoginRes.
     * @implements IIMLoginRes
     * @constructor
     * @param {Login.IIMLoginRes=} [properties] Properties to set
     */
    function IMLoginRes(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * IMLoginRes serverTime.
     * @member {number} serverTime
     * @memberof Login.IMLoginRes
     * @instance
     */
    IMLoginRes.prototype.serverTime = 0;

    /**
     * IMLoginRes resultCode.
     * @member {BaseDefine.ResultType} resultCode
     * @memberof Login.IMLoginRes
     * @instance
     */
    IMLoginRes.prototype.resultCode = 0;

    /**
     * IMLoginRes resultString.
     * @member {string} resultString
     * @memberof Login.IMLoginRes
     * @instance
     */
    IMLoginRes.prototype.resultString = "";

    /**
     * IMLoginRes onlineStatus.
     * @member {BaseDefine.UserStatType} onlineStatus
     * @memberof Login.IMLoginRes
     * @instance
     */
    IMLoginRes.prototype.onlineStatus = 0;

    /**
     * IMLoginRes userInfo.
     * @member {BaseDefine.IUserInfo|null|undefined} userInfo
     * @memberof Login.IMLoginRes
     * @instance
     */
    IMLoginRes.prototype.userInfo = null;

    /**
     * Creates a new IMLoginRes instance using the specified properties.
     * @function create
     * @memberof Login.IMLoginRes
     * @static
     * @param {Login.IIMLoginRes=} [properties] Properties to set
     * @returns {Login.IMLoginRes} IMLoginRes instance
     */
    IMLoginRes.create = function create(properties) {
      return new IMLoginRes(properties);
    };

    /**
     * Encodes the specified IMLoginRes message. Does not implicitly {@link Login.IMLoginRes.verify|verify} messages.
     * @function encode
     * @memberof Login.IMLoginRes
     * @static
     * @param {Login.IIMLoginRes} message IMLoginRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMLoginRes.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.serverTime != null && Object.hasOwnProperty.call(message, "serverTime"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint32(message.serverTime);
      if (message.resultCode != null && Object.hasOwnProperty.call(message, "resultCode"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).int32(message.resultCode);
      if (message.resultString != null && Object.hasOwnProperty.call(message, "resultString"))
        writer.uint32( /* id 3, wireType 2 =*/ 26).string(message.resultString);
      if (message.onlineStatus != null && Object.hasOwnProperty.call(message, "onlineStatus"))
        writer.uint32( /* id 4, wireType 0 =*/ 32).int32(message.onlineStatus);
      if (message.userInfo != null && Object.hasOwnProperty.call(message, "userInfo"))
        $root.BaseDefine.UserInfo.encode(message.userInfo, writer.uint32( /* id 5, wireType 2 =*/ 42).fork())
          .ldelim();
      return writer;
    };

    /**
     * Encodes the specified IMLoginRes message, length delimited. Does not implicitly {@link Login.IMLoginRes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Login.IMLoginRes
     * @static
     * @param {Login.IIMLoginRes} message IMLoginRes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMLoginRes.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a IMLoginRes message from the specified reader or buffer.
     * @function decode
     * @memberof Login.IMLoginRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Login.IMLoginRes} IMLoginRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMLoginRes.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Login.IMLoginRes();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.serverTime = reader.uint32();
          break;
        case 2:
          message.resultCode = reader.int32();
          break;
        case 3:
          message.resultString = reader.string();
          break;
        case 4:
          message.onlineStatus = reader.int32();
          break;
        case 5:
          message.userInfo = $root.BaseDefine.UserInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a IMLoginRes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Login.IMLoginRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Login.IMLoginRes} IMLoginRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMLoginRes.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a IMLoginRes message.
     * @function verify
     * @memberof Login.IMLoginRes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IMLoginRes.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.serverTime != null && message.hasOwnProperty("serverTime"))
        if (!$util.isInteger(message.serverTime))
          return "serverTime: integer expected";
      if (message.resultCode != null && message.hasOwnProperty("resultCode"))
        switch (message.resultCode) {
        default:
          return "resultCode: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          break;
        }
      if (message.resultString != null && message.hasOwnProperty("resultString"))
        if (!$util.isString(message.resultString))
          return "resultString: string expected";
      if (message.onlineStatus != null && message.hasOwnProperty("onlineStatus"))
        switch (message.onlineStatus) {
        default:
          return "onlineStatus: enum value expected";
        case 0:
        case 1:
        case 2:
        case 3:
          break;
        }
      if (message.userInfo != null && message.hasOwnProperty("userInfo")) {
        var error = $root.BaseDefine.UserInfo.verify(message.userInfo);
        if (error)
          return "userInfo." + error;
      }
      return null;
    };

    /**
     * Creates a IMLoginRes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Login.IMLoginRes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Login.IMLoginRes} IMLoginRes
     */
    IMLoginRes.fromObject = function fromObject(object) {
      if (object instanceof $root.Login.IMLoginRes)
        return object;
      var message = new $root.Login.IMLoginRes();
      if (object.serverTime != null)
        message.serverTime = object.serverTime >>> 0;
      switch (object.resultCode) {
      case "REFUSE_REASON_NONE":
      case 0:
        message.resultCode = 0;
        break;
      case "REFUSE_REASON_NO_MSG_SERVER":
      case 1:
        message.resultCode = 1;
        break;
      case "REFUSE_REASON_MSG_SERVER_FULL":
      case 2:
        message.resultCode = 2;
        break;
      case "REFUSE_REASON_NO_DB_SERVER":
      case 3:
        message.resultCode = 3;
        break;
      case "REFUSE_REASON_NO_LOGIN_SERVER":
      case 4:
        message.resultCode = 4;
        break;
      case "REFUSE_REASON_NO_ROUTE_SERVER":
      case 5:
        message.resultCode = 5;
        break;
      case "REFUSE_REASON_DB_VALIDATE_FAILED":
      case 6:
        message.resultCode = 6;
        break;
      case "REFUSE_REASON_VERSION_TOO_OLD":
      case 7:
        message.resultCode = 7;
        break;
      }
      if (object.resultString != null)
        message.resultString = String(object.resultString);
      switch (object.onlineStatus) {
      case "USER_STATUS_NONE":
      case 0:
        message.onlineStatus = 0;
        break;
      case "USER_STATUS_ONLINE":
      case 1:
        message.onlineStatus = 1;
        break;
      case "USER_STATUS_OFFLINE":
      case 2:
        message.onlineStatus = 2;
        break;
      case "USER_STATUS_LEAVE":
      case 3:
        message.onlineStatus = 3;
        break;
      }
      if (object.userInfo != null) {
        if (typeof object.userInfo !== "object")
          throw TypeError(".Login.IMLoginRes.userInfo: object expected");
        message.userInfo = $root.BaseDefine.UserInfo.fromObject(object.userInfo);
      }
      return message;
    };

    /**
     * Creates a plain object from a IMLoginRes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Login.IMLoginRes
     * @static
     * @param {Login.IMLoginRes} message IMLoginRes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IMLoginRes.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        object.serverTime = 0;
        object.resultCode = options.enums === String ? "REFUSE_REASON_NONE" : 0;
        object.resultString = "";
        object.onlineStatus = options.enums === String ? "USER_STATUS_NONE" : 0;
        object.userInfo = null;
      }
      if (message.serverTime != null && message.hasOwnProperty("serverTime"))
        object.serverTime = message.serverTime;
      if (message.resultCode != null && message.hasOwnProperty("resultCode"))
        object.resultCode = options.enums === String ? $root.BaseDefine.ResultType[message.resultCode] :
          message.resultCode;
      if (message.resultString != null && message.hasOwnProperty("resultString"))
        object.resultString = message.resultString;
      if (message.onlineStatus != null && message.hasOwnProperty("onlineStatus"))
        object.onlineStatus = options.enums === String ? $root.BaseDefine.UserStatType[message.onlineStatus] :
          message.onlineStatus;
      if (message.userInfo != null && message.hasOwnProperty("userInfo"))
        object.userInfo = $root.BaseDefine.UserInfo.toObject(message.userInfo, options);
      return object;
    };

    /**
     * Converts this IMLoginRes to JSON.
     * @function toJSON
     * @memberof Login.IMLoginRes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IMLoginRes.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return IMLoginRes;
  })();

  Login.IMLogoutReq = (function() {

    /**
     * Properties of a IMLogoutReq.
     * @memberof Login
     * @interface IIMLogoutReq
     */

    /**
     * Constructs a new IMLogoutReq.
     * @memberof Login
     * @classdesc Represents a IMLogoutReq.
     * @implements IIMLogoutReq
     * @constructor
     * @param {Login.IIMLogoutReq=} [properties] Properties to set
     */
    function IMLogoutReq(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new IMLogoutReq instance using the specified properties.
     * @function create
     * @memberof Login.IMLogoutReq
     * @static
     * @param {Login.IIMLogoutReq=} [properties] Properties to set
     * @returns {Login.IMLogoutReq} IMLogoutReq instance
     */
    IMLogoutReq.create = function create(properties) {
      return new IMLogoutReq(properties);
    };

    /**
     * Encodes the specified IMLogoutReq message. Does not implicitly {@link Login.IMLogoutReq.verify|verify} messages.
     * @function encode
     * @memberof Login.IMLogoutReq
     * @static
     * @param {Login.IIMLogoutReq} message IMLogoutReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMLogoutReq.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      return writer;
    };

    /**
     * Encodes the specified IMLogoutReq message, length delimited. Does not implicitly {@link Login.IMLogoutReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Login.IMLogoutReq
     * @static
     * @param {Login.IIMLogoutReq} message IMLogoutReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMLogoutReq.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a IMLogoutReq message from the specified reader or buffer.
     * @function decode
     * @memberof Login.IMLogoutReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Login.IMLogoutReq} IMLogoutReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMLogoutReq.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Login.IMLogoutReq();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a IMLogoutReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Login.IMLogoutReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Login.IMLogoutReq} IMLogoutReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMLogoutReq.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a IMLogoutReq message.
     * @function verify
     * @memberof Login.IMLogoutReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IMLogoutReq.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      return null;
    };

    /**
     * Creates a IMLogoutReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Login.IMLogoutReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Login.IMLogoutReq} IMLogoutReq
     */
    IMLogoutReq.fromObject = function fromObject(object) {
      if (object instanceof $root.Login.IMLogoutReq)
        return object;
      return new $root.Login.IMLogoutReq();
    };

    /**
     * Creates a plain object from a IMLogoutReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Login.IMLogoutReq
     * @static
     * @param {Login.IMLogoutReq} message IMLogoutReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IMLogoutReq.toObject = function toObject() {
      return {};
    };

    /**
     * Converts this IMLogoutReq to JSON.
     * @function toJSON
     * @memberof Login.IMLogoutReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IMLogoutReq.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return IMLogoutReq;
  })();

  Login.IMLogoutRsp = (function() {

    /**
     * Properties of a IMLogoutRsp.
     * @memberof Login
     * @interface IIMLogoutRsp
     * @property {number|null} [resultCode] IMLogoutRsp resultCode
     */

    /**
     * Constructs a new IMLogoutRsp.
     * @memberof Login
     * @classdesc Represents a IMLogoutRsp.
     * @implements IIMLogoutRsp
     * @constructor
     * @param {Login.IIMLogoutRsp=} [properties] Properties to set
     */
    function IMLogoutRsp(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * IMLogoutRsp resultCode.
     * @member {number} resultCode
     * @memberof Login.IMLogoutRsp
     * @instance
     */
    IMLogoutRsp.prototype.resultCode = 0;

    /**
     * Creates a new IMLogoutRsp instance using the specified properties.
     * @function create
     * @memberof Login.IMLogoutRsp
     * @static
     * @param {Login.IIMLogoutRsp=} [properties] Properties to set
     * @returns {Login.IMLogoutRsp} IMLogoutRsp instance
     */
    IMLogoutRsp.create = function create(properties) {
      return new IMLogoutRsp(properties);
    };

    /**
     * Encodes the specified IMLogoutRsp message. Does not implicitly {@link Login.IMLogoutRsp.verify|verify} messages.
     * @function encode
     * @memberof Login.IMLogoutRsp
     * @static
     * @param {Login.IIMLogoutRsp} message IMLogoutRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMLogoutRsp.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.resultCode != null && Object.hasOwnProperty.call(message, "resultCode"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint32(message.resultCode);
      return writer;
    };

    /**
     * Encodes the specified IMLogoutRsp message, length delimited. Does not implicitly {@link Login.IMLogoutRsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Login.IMLogoutRsp
     * @static
     * @param {Login.IIMLogoutRsp} message IMLogoutRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMLogoutRsp.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a IMLogoutRsp message from the specified reader or buffer.
     * @function decode
     * @memberof Login.IMLogoutRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Login.IMLogoutRsp} IMLogoutRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMLogoutRsp.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Login.IMLogoutRsp();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.resultCode = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a IMLogoutRsp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Login.IMLogoutRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Login.IMLogoutRsp} IMLogoutRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMLogoutRsp.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a IMLogoutRsp message.
     * @function verify
     * @memberof Login.IMLogoutRsp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IMLogoutRsp.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.resultCode != null && message.hasOwnProperty("resultCode"))
        if (!$util.isInteger(message.resultCode))
          return "resultCode: integer expected";
      return null;
    };

    /**
     * Creates a IMLogoutRsp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Login.IMLogoutRsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Login.IMLogoutRsp} IMLogoutRsp
     */
    IMLogoutRsp.fromObject = function fromObject(object) {
      if (object instanceof $root.Login.IMLogoutRsp)
        return object;
      var message = new $root.Login.IMLogoutRsp();
      if (object.resultCode != null)
        message.resultCode = object.resultCode >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a IMLogoutRsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Login.IMLogoutRsp
     * @static
     * @param {Login.IMLogoutRsp} message IMLogoutRsp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IMLogoutRsp.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults)
        object.resultCode = 0;
      if (message.resultCode != null && message.hasOwnProperty("resultCode"))
        object.resultCode = message.resultCode;
      return object;
    };

    /**
     * Converts this IMLogoutRsp to JSON.
     * @function toJSON
     * @memberof Login.IMLogoutRsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IMLogoutRsp.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return IMLogoutRsp;
  })();

  Login.IMKickUser = (function() {

    /**
     * Properties of a IMKickUser.
     * @memberof Login
     * @interface IIMKickUser
     * @property {number|Long|null} [userId] IMKickUser userId
     * @property {BaseDefine.KickReasonType|null} [kickReason] IMKickUser kickReason
     */

    /**
     * Constructs a new IMKickUser.
     * @memberof Login
     * @classdesc Represents a IMKickUser.
     * @implements IIMKickUser
     * @constructor
     * @param {Login.IIMKickUser=} [properties] Properties to set
     */
    function IMKickUser(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * IMKickUser userId.
     * @member {number|Long} userId
     * @memberof Login.IMKickUser
     * @instance
     */
    IMKickUser.prototype.userId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * IMKickUser kickReason.
     * @member {BaseDefine.KickReasonType} kickReason
     * @memberof Login.IMKickUser
     * @instance
     */
    IMKickUser.prototype.kickReason = 0;

    /**
     * Creates a new IMKickUser instance using the specified properties.
     * @function create
     * @memberof Login.IMKickUser
     * @static
     * @param {Login.IIMKickUser=} [properties] Properties to set
     * @returns {Login.IMKickUser} IMKickUser instance
     */
    IMKickUser.create = function create(properties) {
      return new IMKickUser(properties);
    };

    /**
     * Encodes the specified IMKickUser message. Does not implicitly {@link Login.IMKickUser.verify|verify} messages.
     * @function encode
     * @memberof Login.IMKickUser
     * @static
     * @param {Login.IIMKickUser} message IMKickUser message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMKickUser.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint64(message.userId);
      if (message.kickReason != null && Object.hasOwnProperty.call(message, "kickReason"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).int32(message.kickReason);
      return writer;
    };

    /**
     * Encodes the specified IMKickUser message, length delimited. Does not implicitly {@link Login.IMKickUser.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Login.IMKickUser
     * @static
     * @param {Login.IIMKickUser} message IMKickUser message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMKickUser.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a IMKickUser message from the specified reader or buffer.
     * @function decode
     * @memberof Login.IMKickUser
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Login.IMKickUser} IMKickUser
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMKickUser.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Login.IMKickUser();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint64();
          break;
        case 2:
          message.kickReason = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a IMKickUser message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Login.IMKickUser
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Login.IMKickUser} IMKickUser
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMKickUser.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a IMKickUser message.
     * @function verify
     * @memberof Login.IMKickUser
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IMKickUser.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) &&
            $util.isInteger(message.userId.high)))
          return "userId: integer|Long expected";
      if (message.kickReason != null && message.hasOwnProperty("kickReason"))
        switch (message.kickReason) {
        default:
          return "kickReason: enum value expected";
        case 0:
        case 1:
        case 2:
          break;
        }
      return null;
    };

    /**
     * Creates a IMKickUser message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Login.IMKickUser
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Login.IMKickUser} IMKickUser
     */
    IMKickUser.fromObject = function fromObject(object) {
      if (object instanceof $root.Login.IMKickUser)
        return object;
      var message = new $root.Login.IMKickUser();
      if (object.userId != null)
        if ($util.Long)
          (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
        else if (typeof object.userId === "string")
          message.userId = parseInt(object.userId, 10);
        else if (typeof object.userId === "number")
          message.userId = object.userId;
        else if (typeof object.userId === "object")
          message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
      switch (object.kickReason) {
      case "KICK_REASON_NONE":
      case 0:
        message.kickReason = 0;
        break;
      case "KICK_REASON_DUPLICATE_USER":
      case 1:
        message.kickReason = 1;
        break;
      case "KICK_REASON_MOBILE_KICK":
      case 2:
        message.kickReason = 2;
        break;
      }
      return message;
    };

    /**
     * Creates a plain object from a IMKickUser message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Login.IMKickUser
     * @static
     * @param {Login.IMKickUser} message IMKickUser
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IMKickUser.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.userId = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.userId = options.longs === String ? "0" : 0;
        object.kickReason = options.enums === String ? "KICK_REASON_NONE" : 0;
      }
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (typeof message.userId === "number")
          object.userId = options.longs === String ? String(message.userId) : message.userId;
        else
          object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) :
            options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0)
              .toNumber(true) : message.userId;
      if (message.kickReason != null && message.hasOwnProperty("kickReason"))
        object.kickReason = options.enums === String ? $root.BaseDefine.KickReasonType[message.kickReason] :
          message.kickReason;
      return object;
    };

    /**
     * Converts this IMKickUser to JSON.
     * @function toJSON
     * @memberof Login.IMKickUser
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IMKickUser.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return IMKickUser;
  })();

  Login.IMDeviceTokenReq = (function() {

    /**
     * Properties of a IMDeviceTokenReq.
     * @memberof Login
     * @interface IIMDeviceTokenReq
     * @property {number|Long|null} [userId] IMDeviceTokenReq userId
     * @property {string|null} [deviceToken] IMDeviceTokenReq deviceToken
     * @property {BaseDefine.ClientType|null} [clientType] IMDeviceTokenReq clientType
     * @property {Uint8Array|null} [attachData] IMDeviceTokenReq attachData
     */

    /**
     * Constructs a new IMDeviceTokenReq.
     * @memberof Login
     * @classdesc Represents a IMDeviceTokenReq.
     * @implements IIMDeviceTokenReq
     * @constructor
     * @param {Login.IIMDeviceTokenReq=} [properties] Properties to set
     */
    function IMDeviceTokenReq(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * IMDeviceTokenReq userId.
     * @member {number|Long} userId
     * @memberof Login.IMDeviceTokenReq
     * @instance
     */
    IMDeviceTokenReq.prototype.userId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * IMDeviceTokenReq deviceToken.
     * @member {string} deviceToken
     * @memberof Login.IMDeviceTokenReq
     * @instance
     */
    IMDeviceTokenReq.prototype.deviceToken = "";

    /**
     * IMDeviceTokenReq clientType.
     * @member {BaseDefine.ClientType} clientType
     * @memberof Login.IMDeviceTokenReq
     * @instance
     */
    IMDeviceTokenReq.prototype.clientType = 0;

    /**
     * IMDeviceTokenReq attachData.
     * @member {Uint8Array} attachData
     * @memberof Login.IMDeviceTokenReq
     * @instance
     */
    IMDeviceTokenReq.prototype.attachData = $util.newBuffer([]);

    /**
     * Creates a new IMDeviceTokenReq instance using the specified properties.
     * @function create
     * @memberof Login.IMDeviceTokenReq
     * @static
     * @param {Login.IIMDeviceTokenReq=} [properties] Properties to set
     * @returns {Login.IMDeviceTokenReq} IMDeviceTokenReq instance
     */
    IMDeviceTokenReq.create = function create(properties) {
      return new IMDeviceTokenReq(properties);
    };

    /**
     * Encodes the specified IMDeviceTokenReq message. Does not implicitly {@link Login.IMDeviceTokenReq.verify|verify} messages.
     * @function encode
     * @memberof Login.IMDeviceTokenReq
     * @static
     * @param {Login.IIMDeviceTokenReq} message IMDeviceTokenReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMDeviceTokenReq.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint64(message.userId);
      if (message.deviceToken != null && Object.hasOwnProperty.call(message, "deviceToken"))
        writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.deviceToken);
      if (message.clientType != null && Object.hasOwnProperty.call(message, "clientType"))
        writer.uint32( /* id 3, wireType 0 =*/ 24).int32(message.clientType);
      if (message.attachData != null && Object.hasOwnProperty.call(message, "attachData"))
        writer.uint32( /* id 20, wireType 2 =*/ 162).bytes(message.attachData);
      return writer;
    };

    /**
     * Encodes the specified IMDeviceTokenReq message, length delimited. Does not implicitly {@link Login.IMDeviceTokenReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Login.IMDeviceTokenReq
     * @static
     * @param {Login.IIMDeviceTokenReq} message IMDeviceTokenReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMDeviceTokenReq.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a IMDeviceTokenReq message from the specified reader or buffer.
     * @function decode
     * @memberof Login.IMDeviceTokenReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Login.IMDeviceTokenReq} IMDeviceTokenReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMDeviceTokenReq.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Login.IMDeviceTokenReq();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint64();
          break;
        case 2:
          message.deviceToken = reader.string();
          break;
        case 3:
          message.clientType = reader.int32();
          break;
        case 20:
          message.attachData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a IMDeviceTokenReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Login.IMDeviceTokenReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Login.IMDeviceTokenReq} IMDeviceTokenReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMDeviceTokenReq.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a IMDeviceTokenReq message.
     * @function verify
     * @memberof Login.IMDeviceTokenReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IMDeviceTokenReq.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) &&
            $util.isInteger(message.userId.high)))
          return "userId: integer|Long expected";
      if (message.deviceToken != null && message.hasOwnProperty("deviceToken"))
        if (!$util.isString(message.deviceToken))
          return "deviceToken: string expected";
      if (message.clientType != null && message.hasOwnProperty("clientType"))
        switch (message.clientType) {
        default:
          return "clientType: enum value expected";
        case 0:
        case 1:
        case 2:
        case 17:
        case 18:
        case 19:
          break;
        }
      if (message.attachData != null && message.hasOwnProperty("attachData"))
        if (!(message.attachData && typeof message.attachData.length === "number" || $util.isString(message
          .attachData)))
          return "attachData: buffer expected";
      return null;
    };

    /**
     * Creates a IMDeviceTokenReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Login.IMDeviceTokenReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Login.IMDeviceTokenReq} IMDeviceTokenReq
     */
    IMDeviceTokenReq.fromObject = function fromObject(object) {
      if (object instanceof $root.Login.IMDeviceTokenReq)
        return object;
      var message = new $root.Login.IMDeviceTokenReq();
      if (object.userId != null)
        if ($util.Long)
          (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
        else if (typeof object.userId === "string")
          message.userId = parseInt(object.userId, 10);
        else if (typeof object.userId === "number")
          message.userId = object.userId;
        else if (typeof object.userId === "object")
          message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
      if (object.deviceToken != null)
        message.deviceToken = String(object.deviceToken);
      switch (object.clientType) {
      case "CLIENT_TYPE_NONE":
      case 0:
        message.clientType = 0;
        break;
      case "CLIENT_TYPE_WINDOWS":
      case 1:
        message.clientType = 1;
        break;
      case "CLIENT_TYPE_MAC":
      case 2:
        message.clientType = 2;
        break;
      case "CLIENT_TYPE_IOS":
      case 17:
        message.clientType = 17;
        break;
      case "CLIENT_TYPE_ANDROID":
      case 18:
        message.clientType = 18;
        break;
      case "CLIENT_TYPE_WEB":
      case 19:
        message.clientType = 19;
        break;
      }
      if (object.attachData != null)
        if (typeof object.attachData === "string")
          $util.base64.decode(object.attachData, message.attachData = $util.newBuffer($util.base64.length(
            object.attachData)), 0);
        else if (object.attachData.length)
          message.attachData = object.attachData;
      return message;
    };

    /**
     * Creates a plain object from a IMDeviceTokenReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Login.IMDeviceTokenReq
     * @static
     * @param {Login.IMDeviceTokenReq} message IMDeviceTokenReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IMDeviceTokenReq.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.userId = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.userId = options.longs === String ? "0" : 0;
        object.deviceToken = "";
        object.clientType = options.enums === String ? "CLIENT_TYPE_NONE" : 0;
        if (options.bytes === String)
          object.attachData = "";
        else {
          object.attachData = [];
          if (options.bytes !== Array)
            object.attachData = $util.newBuffer(object.attachData);
        }
      }
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (typeof message.userId === "number")
          object.userId = options.longs === String ? String(message.userId) : message.userId;
        else
          object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) :
            options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0)
              .toNumber(true) : message.userId;
      if (message.deviceToken != null && message.hasOwnProperty("deviceToken"))
        object.deviceToken = message.deviceToken;
      if (message.clientType != null && message.hasOwnProperty("clientType"))
        object.clientType = options.enums === String ? $root.BaseDefine.ClientType[message.clientType] :
          message.clientType;
      if (message.attachData != null && message.hasOwnProperty("attachData"))
        object.attachData = options.bytes === String ? $util.base64.encode(message.attachData, 0, message
          .attachData.length) : options.bytes === Array ? Array.prototype.slice.call(message.attachData) :
          message.attachData;
      return object;
    };

    /**
     * Converts this IMDeviceTokenReq to JSON.
     * @function toJSON
     * @memberof Login.IMDeviceTokenReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IMDeviceTokenReq.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return IMDeviceTokenReq;
  })();

  Login.IMDeviceTokenRsp = (function() {

    /**
     * Properties of a IMDeviceTokenRsp.
     * @memberof Login
     * @interface IIMDeviceTokenRsp
     * @property {number|Long|null} [userId] IMDeviceTokenRsp userId
     * @property {Uint8Array|null} [attachData] IMDeviceTokenRsp attachData
     */

    /**
     * Constructs a new IMDeviceTokenRsp.
     * @memberof Login
     * @classdesc Represents a IMDeviceTokenRsp.
     * @implements IIMDeviceTokenRsp
     * @constructor
     * @param {Login.IIMDeviceTokenRsp=} [properties] Properties to set
     */
    function IMDeviceTokenRsp(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * IMDeviceTokenRsp userId.
     * @member {number|Long} userId
     * @memberof Login.IMDeviceTokenRsp
     * @instance
     */
    IMDeviceTokenRsp.prototype.userId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * IMDeviceTokenRsp attachData.
     * @member {Uint8Array} attachData
     * @memberof Login.IMDeviceTokenRsp
     * @instance
     */
    IMDeviceTokenRsp.prototype.attachData = $util.newBuffer([]);

    /**
     * Creates a new IMDeviceTokenRsp instance using the specified properties.
     * @function create
     * @memberof Login.IMDeviceTokenRsp
     * @static
     * @param {Login.IIMDeviceTokenRsp=} [properties] Properties to set
     * @returns {Login.IMDeviceTokenRsp} IMDeviceTokenRsp instance
     */
    IMDeviceTokenRsp.create = function create(properties) {
      return new IMDeviceTokenRsp(properties);
    };

    /**
     * Encodes the specified IMDeviceTokenRsp message. Does not implicitly {@link Login.IMDeviceTokenRsp.verify|verify} messages.
     * @function encode
     * @memberof Login.IMDeviceTokenRsp
     * @static
     * @param {Login.IIMDeviceTokenRsp} message IMDeviceTokenRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMDeviceTokenRsp.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint64(message.userId);
      if (message.attachData != null && Object.hasOwnProperty.call(message, "attachData"))
        writer.uint32( /* id 20, wireType 2 =*/ 162).bytes(message.attachData);
      return writer;
    };

    /**
     * Encodes the specified IMDeviceTokenRsp message, length delimited. Does not implicitly {@link Login.IMDeviceTokenRsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Login.IMDeviceTokenRsp
     * @static
     * @param {Login.IIMDeviceTokenRsp} message IMDeviceTokenRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMDeviceTokenRsp.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a IMDeviceTokenRsp message from the specified reader or buffer.
     * @function decode
     * @memberof Login.IMDeviceTokenRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Login.IMDeviceTokenRsp} IMDeviceTokenRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMDeviceTokenRsp.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Login.IMDeviceTokenRsp();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint64();
          break;
        case 20:
          message.attachData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a IMDeviceTokenRsp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Login.IMDeviceTokenRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Login.IMDeviceTokenRsp} IMDeviceTokenRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMDeviceTokenRsp.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a IMDeviceTokenRsp message.
     * @function verify
     * @memberof Login.IMDeviceTokenRsp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IMDeviceTokenRsp.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) &&
            $util.isInteger(message.userId.high)))
          return "userId: integer|Long expected";
      if (message.attachData != null && message.hasOwnProperty("attachData"))
        if (!(message.attachData && typeof message.attachData.length === "number" || $util.isString(message
          .attachData)))
          return "attachData: buffer expected";
      return null;
    };

    /**
     * Creates a IMDeviceTokenRsp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Login.IMDeviceTokenRsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Login.IMDeviceTokenRsp} IMDeviceTokenRsp
     */
    IMDeviceTokenRsp.fromObject = function fromObject(object) {
      if (object instanceof $root.Login.IMDeviceTokenRsp)
        return object;
      var message = new $root.Login.IMDeviceTokenRsp();
      if (object.userId != null)
        if ($util.Long)
          (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
        else if (typeof object.userId === "string")
          message.userId = parseInt(object.userId, 10);
        else if (typeof object.userId === "number")
          message.userId = object.userId;
        else if (typeof object.userId === "object")
          message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
      if (object.attachData != null)
        if (typeof object.attachData === "string")
          $util.base64.decode(object.attachData, message.attachData = $util.newBuffer($util.base64.length(
            object.attachData)), 0);
        else if (object.attachData.length)
          message.attachData = object.attachData;
      return message;
    };

    /**
     * Creates a plain object from a IMDeviceTokenRsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Login.IMDeviceTokenRsp
     * @static
     * @param {Login.IMDeviceTokenRsp} message IMDeviceTokenRsp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IMDeviceTokenRsp.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.userId = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.userId = options.longs === String ? "0" : 0;
        if (options.bytes === String)
          object.attachData = "";
        else {
          object.attachData = [];
          if (options.bytes !== Array)
            object.attachData = $util.newBuffer(object.attachData);
        }
      }
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (typeof message.userId === "number")
          object.userId = options.longs === String ? String(message.userId) : message.userId;
        else
          object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) :
            options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0)
              .toNumber(true) : message.userId;
      if (message.attachData != null && message.hasOwnProperty("attachData"))
        object.attachData = options.bytes === String ? $util.base64.encode(message.attachData, 0, message
          .attachData.length) : options.bytes === Array ? Array.prototype.slice.call(message.attachData) :
          message.attachData;
      return object;
    };

    /**
     * Converts this IMDeviceTokenRsp to JSON.
     * @function toJSON
     * @memberof Login.IMDeviceTokenRsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IMDeviceTokenRsp.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return IMDeviceTokenRsp;
  })();

  Login.IMKickPCClientReq = (function() {

    /**
     * Properties of a IMKickPCClientReq.
     * @memberof Login
     * @interface IIMKickPCClientReq
     * @property {number|Long|null} [userId] IMKickPCClientReq userId
     */

    /**
     * Constructs a new IMKickPCClientReq.
     * @memberof Login
     * @classdesc Represents a IMKickPCClientReq.
     * @implements IIMKickPCClientReq
     * @constructor
     * @param {Login.IIMKickPCClientReq=} [properties] Properties to set
     */
    function IMKickPCClientReq(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * IMKickPCClientReq userId.
     * @member {number|Long} userId
     * @memberof Login.IMKickPCClientReq
     * @instance
     */
    IMKickPCClientReq.prototype.userId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * Creates a new IMKickPCClientReq instance using the specified properties.
     * @function create
     * @memberof Login.IMKickPCClientReq
     * @static
     * @param {Login.IIMKickPCClientReq=} [properties] Properties to set
     * @returns {Login.IMKickPCClientReq} IMKickPCClientReq instance
     */
    IMKickPCClientReq.create = function create(properties) {
      return new IMKickPCClientReq(properties);
    };

    /**
     * Encodes the specified IMKickPCClientReq message. Does not implicitly {@link Login.IMKickPCClientReq.verify|verify} messages.
     * @function encode
     * @memberof Login.IMKickPCClientReq
     * @static
     * @param {Login.IIMKickPCClientReq} message IMKickPCClientReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMKickPCClientReq.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint64(message.userId);
      return writer;
    };

    /**
     * Encodes the specified IMKickPCClientReq message, length delimited. Does not implicitly {@link Login.IMKickPCClientReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Login.IMKickPCClientReq
     * @static
     * @param {Login.IIMKickPCClientReq} message IMKickPCClientReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMKickPCClientReq.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a IMKickPCClientReq message from the specified reader or buffer.
     * @function decode
     * @memberof Login.IMKickPCClientReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Login.IMKickPCClientReq} IMKickPCClientReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMKickPCClientReq.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Login.IMKickPCClientReq();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a IMKickPCClientReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Login.IMKickPCClientReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Login.IMKickPCClientReq} IMKickPCClientReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMKickPCClientReq.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a IMKickPCClientReq message.
     * @function verify
     * @memberof Login.IMKickPCClientReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IMKickPCClientReq.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) &&
            $util.isInteger(message.userId.high)))
          return "userId: integer|Long expected";
      return null;
    };

    /**
     * Creates a IMKickPCClientReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Login.IMKickPCClientReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Login.IMKickPCClientReq} IMKickPCClientReq
     */
    IMKickPCClientReq.fromObject = function fromObject(object) {
      if (object instanceof $root.Login.IMKickPCClientReq)
        return object;
      var message = new $root.Login.IMKickPCClientReq();
      if (object.userId != null)
        if ($util.Long)
          (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
        else if (typeof object.userId === "string")
          message.userId = parseInt(object.userId, 10);
        else if (typeof object.userId === "number")
          message.userId = object.userId;
        else if (typeof object.userId === "object")
          message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
      return message;
    };

    /**
     * Creates a plain object from a IMKickPCClientReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Login.IMKickPCClientReq
     * @static
     * @param {Login.IMKickPCClientReq} message IMKickPCClientReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IMKickPCClientReq.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults)
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.userId = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.userId = options.longs === String ? "0" : 0;
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (typeof message.userId === "number")
          object.userId = options.longs === String ? String(message.userId) : message.userId;
        else
          object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) :
            options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0)
              .toNumber(true) : message.userId;
      return object;
    };

    /**
     * Converts this IMKickPCClientReq to JSON.
     * @function toJSON
     * @memberof Login.IMKickPCClientReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IMKickPCClientReq.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return IMKickPCClientReq;
  })();

  Login.IMKickPCClientRsp = (function() {

    /**
     * Properties of a IMKickPCClientRsp.
     * @memberof Login
     * @interface IIMKickPCClientRsp
     * @property {number|Long|null} [userId] IMKickPCClientRsp userId
     * @property {number|null} [resultCode] IMKickPCClientRsp resultCode
     */

    /**
     * Constructs a new IMKickPCClientRsp.
     * @memberof Login
     * @classdesc Represents a IMKickPCClientRsp.
     * @implements IIMKickPCClientRsp
     * @constructor
     * @param {Login.IIMKickPCClientRsp=} [properties] Properties to set
     */
    function IMKickPCClientRsp(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * IMKickPCClientRsp userId.
     * @member {number|Long} userId
     * @memberof Login.IMKickPCClientRsp
     * @instance
     */
    IMKickPCClientRsp.prototype.userId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * IMKickPCClientRsp resultCode.
     * @member {number} resultCode
     * @memberof Login.IMKickPCClientRsp
     * @instance
     */
    IMKickPCClientRsp.prototype.resultCode = 0;

    /**
     * Creates a new IMKickPCClientRsp instance using the specified properties.
     * @function create
     * @memberof Login.IMKickPCClientRsp
     * @static
     * @param {Login.IIMKickPCClientRsp=} [properties] Properties to set
     * @returns {Login.IMKickPCClientRsp} IMKickPCClientRsp instance
     */
    IMKickPCClientRsp.create = function create(properties) {
      return new IMKickPCClientRsp(properties);
    };

    /**
     * Encodes the specified IMKickPCClientRsp message. Does not implicitly {@link Login.IMKickPCClientRsp.verify|verify} messages.
     * @function encode
     * @memberof Login.IMKickPCClientRsp
     * @static
     * @param {Login.IIMKickPCClientRsp} message IMKickPCClientRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMKickPCClientRsp.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint64(message.userId);
      if (message.resultCode != null && Object.hasOwnProperty.call(message, "resultCode"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).uint32(message.resultCode);
      return writer;
    };

    /**
     * Encodes the specified IMKickPCClientRsp message, length delimited. Does not implicitly {@link Login.IMKickPCClientRsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Login.IMKickPCClientRsp
     * @static
     * @param {Login.IIMKickPCClientRsp} message IMKickPCClientRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMKickPCClientRsp.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a IMKickPCClientRsp message from the specified reader or buffer.
     * @function decode
     * @memberof Login.IMKickPCClientRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Login.IMKickPCClientRsp} IMKickPCClientRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMKickPCClientRsp.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Login.IMKickPCClientRsp();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint64();
          break;
        case 2:
          message.resultCode = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a IMKickPCClientRsp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Login.IMKickPCClientRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Login.IMKickPCClientRsp} IMKickPCClientRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMKickPCClientRsp.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a IMKickPCClientRsp message.
     * @function verify
     * @memberof Login.IMKickPCClientRsp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IMKickPCClientRsp.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) &&
            $util.isInteger(message.userId.high)))
          return "userId: integer|Long expected";
      if (message.resultCode != null && message.hasOwnProperty("resultCode"))
        if (!$util.isInteger(message.resultCode))
          return "resultCode: integer expected";
      return null;
    };

    /**
     * Creates a IMKickPCClientRsp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Login.IMKickPCClientRsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Login.IMKickPCClientRsp} IMKickPCClientRsp
     */
    IMKickPCClientRsp.fromObject = function fromObject(object) {
      if (object instanceof $root.Login.IMKickPCClientRsp)
        return object;
      var message = new $root.Login.IMKickPCClientRsp();
      if (object.userId != null)
        if ($util.Long)
          (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
        else if (typeof object.userId === "string")
          message.userId = parseInt(object.userId, 10);
        else if (typeof object.userId === "number")
          message.userId = object.userId;
        else if (typeof object.userId === "object")
          message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
      if (object.resultCode != null)
        message.resultCode = object.resultCode >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a IMKickPCClientRsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Login.IMKickPCClientRsp
     * @static
     * @param {Login.IMKickPCClientRsp} message IMKickPCClientRsp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IMKickPCClientRsp.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.userId = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.userId = options.longs === String ? "0" : 0;
        object.resultCode = 0;
      }
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (typeof message.userId === "number")
          object.userId = options.longs === String ? String(message.userId) : message.userId;
        else
          object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) :
            options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0)
              .toNumber(true) : message.userId;
      if (message.resultCode != null && message.hasOwnProperty("resultCode"))
        object.resultCode = message.resultCode;
      return object;
    };

    /**
     * Converts this IMKickPCClientRsp to JSON.
     * @function toJSON
     * @memberof Login.IMKickPCClientRsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IMKickPCClientRsp.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return IMKickPCClientRsp;
  })();

  Login.IMPushShieldReq = (function() {

    /**
     * Properties of a IMPushShieldReq.
     * @memberof Login
     * @interface IIMPushShieldReq
     * @property {number|Long|null} [userId] IMPushShieldReq userId
     * @property {number|null} [shieldStatus] IMPushShieldReq shieldStatus
     * @property {Uint8Array|null} [attachData] IMPushShieldReq attachData
     */

    /**
     * Constructs a new IMPushShieldReq.
     * @memberof Login
     * @classdesc Represents a IMPushShieldReq.
     * @implements IIMPushShieldReq
     * @constructor
     * @param {Login.IIMPushShieldReq=} [properties] Properties to set
     */
    function IMPushShieldReq(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * IMPushShieldReq userId.
     * @member {number|Long} userId
     * @memberof Login.IMPushShieldReq
     * @instance
     */
    IMPushShieldReq.prototype.userId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * IMPushShieldReq shieldStatus.
     * @member {number} shieldStatus
     * @memberof Login.IMPushShieldReq
     * @instance
     */
    IMPushShieldReq.prototype.shieldStatus = 0;

    /**
     * IMPushShieldReq attachData.
     * @member {Uint8Array} attachData
     * @memberof Login.IMPushShieldReq
     * @instance
     */
    IMPushShieldReq.prototype.attachData = $util.newBuffer([]);

    /**
     * Creates a new IMPushShieldReq instance using the specified properties.
     * @function create
     * @memberof Login.IMPushShieldReq
     * @static
     * @param {Login.IIMPushShieldReq=} [properties] Properties to set
     * @returns {Login.IMPushShieldReq} IMPushShieldReq instance
     */
    IMPushShieldReq.create = function create(properties) {
      return new IMPushShieldReq(properties);
    };

    /**
     * Encodes the specified IMPushShieldReq message. Does not implicitly {@link Login.IMPushShieldReq.verify|verify} messages.
     * @function encode
     * @memberof Login.IMPushShieldReq
     * @static
     * @param {Login.IIMPushShieldReq} message IMPushShieldReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMPushShieldReq.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint64(message.userId);
      if (message.shieldStatus != null && Object.hasOwnProperty.call(message, "shieldStatus"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).uint32(message.shieldStatus);
      if (message.attachData != null && Object.hasOwnProperty.call(message, "attachData"))
        writer.uint32( /* id 20, wireType 2 =*/ 162).bytes(message.attachData);
      return writer;
    };

    /**
     * Encodes the specified IMPushShieldReq message, length delimited. Does not implicitly {@link Login.IMPushShieldReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Login.IMPushShieldReq
     * @static
     * @param {Login.IIMPushShieldReq} message IMPushShieldReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMPushShieldReq.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a IMPushShieldReq message from the specified reader or buffer.
     * @function decode
     * @memberof Login.IMPushShieldReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Login.IMPushShieldReq} IMPushShieldReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMPushShieldReq.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Login.IMPushShieldReq();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint64();
          break;
        case 2:
          message.shieldStatus = reader.uint32();
          break;
        case 20:
          message.attachData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a IMPushShieldReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Login.IMPushShieldReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Login.IMPushShieldReq} IMPushShieldReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMPushShieldReq.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a IMPushShieldReq message.
     * @function verify
     * @memberof Login.IMPushShieldReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IMPushShieldReq.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) &&
            $util.isInteger(message.userId.high)))
          return "userId: integer|Long expected";
      if (message.shieldStatus != null && message.hasOwnProperty("shieldStatus"))
        if (!$util.isInteger(message.shieldStatus))
          return "shieldStatus: integer expected";
      if (message.attachData != null && message.hasOwnProperty("attachData"))
        if (!(message.attachData && typeof message.attachData.length === "number" || $util.isString(message
          .attachData)))
          return "attachData: buffer expected";
      return null;
    };

    /**
     * Creates a IMPushShieldReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Login.IMPushShieldReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Login.IMPushShieldReq} IMPushShieldReq
     */
    IMPushShieldReq.fromObject = function fromObject(object) {
      if (object instanceof $root.Login.IMPushShieldReq)
        return object;
      var message = new $root.Login.IMPushShieldReq();
      if (object.userId != null)
        if ($util.Long)
          (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
        else if (typeof object.userId === "string")
          message.userId = parseInt(object.userId, 10);
        else if (typeof object.userId === "number")
          message.userId = object.userId;
        else if (typeof object.userId === "object")
          message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
      if (object.shieldStatus != null)
        message.shieldStatus = object.shieldStatus >>> 0;
      if (object.attachData != null)
        if (typeof object.attachData === "string")
          $util.base64.decode(object.attachData, message.attachData = $util.newBuffer($util.base64.length(
            object.attachData)), 0);
        else if (object.attachData.length)
          message.attachData = object.attachData;
      return message;
    };

    /**
     * Creates a plain object from a IMPushShieldReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Login.IMPushShieldReq
     * @static
     * @param {Login.IMPushShieldReq} message IMPushShieldReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IMPushShieldReq.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.userId = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.userId = options.longs === String ? "0" : 0;
        object.shieldStatus = 0;
        if (options.bytes === String)
          object.attachData = "";
        else {
          object.attachData = [];
          if (options.bytes !== Array)
            object.attachData = $util.newBuffer(object.attachData);
        }
      }
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (typeof message.userId === "number")
          object.userId = options.longs === String ? String(message.userId) : message.userId;
        else
          object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) :
            options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0)
              .toNumber(true) : message.userId;
      if (message.shieldStatus != null && message.hasOwnProperty("shieldStatus"))
        object.shieldStatus = message.shieldStatus;
      if (message.attachData != null && message.hasOwnProperty("attachData"))
        object.attachData = options.bytes === String ? $util.base64.encode(message.attachData, 0, message
          .attachData.length) : options.bytes === Array ? Array.prototype.slice.call(message.attachData) :
          message.attachData;
      return object;
    };

    /**
     * Converts this IMPushShieldReq to JSON.
     * @function toJSON
     * @memberof Login.IMPushShieldReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IMPushShieldReq.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return IMPushShieldReq;
  })();

  Login.IMPushShieldRsp = (function() {

    /**
     * Properties of a IMPushShieldRsp.
     * @memberof Login
     * @interface IIMPushShieldRsp
     * @property {number|Long|null} [userId] IMPushShieldRsp userId
     * @property {number|null} [resultCode] IMPushShieldRsp resultCode
     * @property {number|null} [shieldStatus] IMPushShieldRsp shieldStatus
     * @property {Uint8Array|null} [attachData] IMPushShieldRsp attachData
     */

    /**
     * Constructs a new IMPushShieldRsp.
     * @memberof Login
     * @classdesc Represents a IMPushShieldRsp.
     * @implements IIMPushShieldRsp
     * @constructor
     * @param {Login.IIMPushShieldRsp=} [properties] Properties to set
     */
    function IMPushShieldRsp(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * IMPushShieldRsp userId.
     * @member {number|Long} userId
     * @memberof Login.IMPushShieldRsp
     * @instance
     */
    IMPushShieldRsp.prototype.userId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * IMPushShieldRsp resultCode.
     * @member {number} resultCode
     * @memberof Login.IMPushShieldRsp
     * @instance
     */
    IMPushShieldRsp.prototype.resultCode = 0;

    /**
     * IMPushShieldRsp shieldStatus.
     * @member {number} shieldStatus
     * @memberof Login.IMPushShieldRsp
     * @instance
     */
    IMPushShieldRsp.prototype.shieldStatus = 0;

    /**
     * IMPushShieldRsp attachData.
     * @member {Uint8Array} attachData
     * @memberof Login.IMPushShieldRsp
     * @instance
     */
    IMPushShieldRsp.prototype.attachData = $util.newBuffer([]);

    /**
     * Creates a new IMPushShieldRsp instance using the specified properties.
     * @function create
     * @memberof Login.IMPushShieldRsp
     * @static
     * @param {Login.IIMPushShieldRsp=} [properties] Properties to set
     * @returns {Login.IMPushShieldRsp} IMPushShieldRsp instance
     */
    IMPushShieldRsp.create = function create(properties) {
      return new IMPushShieldRsp(properties);
    };

    /**
     * Encodes the specified IMPushShieldRsp message. Does not implicitly {@link Login.IMPushShieldRsp.verify|verify} messages.
     * @function encode
     * @memberof Login.IMPushShieldRsp
     * @static
     * @param {Login.IIMPushShieldRsp} message IMPushShieldRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMPushShieldRsp.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint64(message.userId);
      if (message.resultCode != null && Object.hasOwnProperty.call(message, "resultCode"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).uint32(message.resultCode);
      if (message.shieldStatus != null && Object.hasOwnProperty.call(message, "shieldStatus"))
        writer.uint32( /* id 3, wireType 0 =*/ 24).uint32(message.shieldStatus);
      if (message.attachData != null && Object.hasOwnProperty.call(message, "attachData"))
        writer.uint32( /* id 20, wireType 2 =*/ 162).bytes(message.attachData);
      return writer;
    };

    /**
     * Encodes the specified IMPushShieldRsp message, length delimited. Does not implicitly {@link Login.IMPushShieldRsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Login.IMPushShieldRsp
     * @static
     * @param {Login.IIMPushShieldRsp} message IMPushShieldRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMPushShieldRsp.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a IMPushShieldRsp message from the specified reader or buffer.
     * @function decode
     * @memberof Login.IMPushShieldRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Login.IMPushShieldRsp} IMPushShieldRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMPushShieldRsp.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Login.IMPushShieldRsp();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint64();
          break;
        case 2:
          message.resultCode = reader.uint32();
          break;
        case 3:
          message.shieldStatus = reader.uint32();
          break;
        case 20:
          message.attachData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a IMPushShieldRsp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Login.IMPushShieldRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Login.IMPushShieldRsp} IMPushShieldRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMPushShieldRsp.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a IMPushShieldRsp message.
     * @function verify
     * @memberof Login.IMPushShieldRsp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IMPushShieldRsp.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) &&
            $util.isInteger(message.userId.high)))
          return "userId: integer|Long expected";
      if (message.resultCode != null && message.hasOwnProperty("resultCode"))
        if (!$util.isInteger(message.resultCode))
          return "resultCode: integer expected";
      if (message.shieldStatus != null && message.hasOwnProperty("shieldStatus"))
        if (!$util.isInteger(message.shieldStatus))
          return "shieldStatus: integer expected";
      if (message.attachData != null && message.hasOwnProperty("attachData"))
        if (!(message.attachData && typeof message.attachData.length === "number" || $util.isString(message
          .attachData)))
          return "attachData: buffer expected";
      return null;
    };

    /**
     * Creates a IMPushShieldRsp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Login.IMPushShieldRsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Login.IMPushShieldRsp} IMPushShieldRsp
     */
    IMPushShieldRsp.fromObject = function fromObject(object) {
      if (object instanceof $root.Login.IMPushShieldRsp)
        return object;
      var message = new $root.Login.IMPushShieldRsp();
      if (object.userId != null)
        if ($util.Long)
          (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
        else if (typeof object.userId === "string")
          message.userId = parseInt(object.userId, 10);
        else if (typeof object.userId === "number")
          message.userId = object.userId;
        else if (typeof object.userId === "object")
          message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
      if (object.resultCode != null)
        message.resultCode = object.resultCode >>> 0;
      if (object.shieldStatus != null)
        message.shieldStatus = object.shieldStatus >>> 0;
      if (object.attachData != null)
        if (typeof object.attachData === "string")
          $util.base64.decode(object.attachData, message.attachData = $util.newBuffer($util.base64.length(
            object.attachData)), 0);
        else if (object.attachData.length)
          message.attachData = object.attachData;
      return message;
    };

    /**
     * Creates a plain object from a IMPushShieldRsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Login.IMPushShieldRsp
     * @static
     * @param {Login.IMPushShieldRsp} message IMPushShieldRsp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IMPushShieldRsp.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.userId = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.userId = options.longs === String ? "0" : 0;
        object.resultCode = 0;
        object.shieldStatus = 0;
        if (options.bytes === String)
          object.attachData = "";
        else {
          object.attachData = [];
          if (options.bytes !== Array)
            object.attachData = $util.newBuffer(object.attachData);
        }
      }
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (typeof message.userId === "number")
          object.userId = options.longs === String ? String(message.userId) : message.userId;
        else
          object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) :
            options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0)
              .toNumber(true) : message.userId;
      if (message.resultCode != null && message.hasOwnProperty("resultCode"))
        object.resultCode = message.resultCode;
      if (message.shieldStatus != null && message.hasOwnProperty("shieldStatus"))
        object.shieldStatus = message.shieldStatus;
      if (message.attachData != null && message.hasOwnProperty("attachData"))
        object.attachData = options.bytes === String ? $util.base64.encode(message.attachData, 0, message
          .attachData.length) : options.bytes === Array ? Array.prototype.slice.call(message.attachData) :
          message.attachData;
      return object;
    };

    /**
     * Converts this IMPushShieldRsp to JSON.
     * @function toJSON
     * @memberof Login.IMPushShieldRsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IMPushShieldRsp.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return IMPushShieldRsp;
  })();

  Login.IMQueryPushShieldReq = (function() {

    /**
     * Properties of a IMQueryPushShieldReq.
     * @memberof Login
     * @interface IIMQueryPushShieldReq
     * @property {number|Long|null} [userId] IMQueryPushShieldReq userId
     * @property {Uint8Array|null} [attachData] IMQueryPushShieldReq attachData
     */

    /**
     * Constructs a new IMQueryPushShieldReq.
     * @memberof Login
     * @classdesc Represents a IMQueryPushShieldReq.
     * @implements IIMQueryPushShieldReq
     * @constructor
     * @param {Login.IIMQueryPushShieldReq=} [properties] Properties to set
     */
    function IMQueryPushShieldReq(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * IMQueryPushShieldReq userId.
     * @member {number|Long} userId
     * @memberof Login.IMQueryPushShieldReq
     * @instance
     */
    IMQueryPushShieldReq.prototype.userId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * IMQueryPushShieldReq attachData.
     * @member {Uint8Array} attachData
     * @memberof Login.IMQueryPushShieldReq
     * @instance
     */
    IMQueryPushShieldReq.prototype.attachData = $util.newBuffer([]);

    /**
     * Creates a new IMQueryPushShieldReq instance using the specified properties.
     * @function create
     * @memberof Login.IMQueryPushShieldReq
     * @static
     * @param {Login.IIMQueryPushShieldReq=} [properties] Properties to set
     * @returns {Login.IMQueryPushShieldReq} IMQueryPushShieldReq instance
     */
    IMQueryPushShieldReq.create = function create(properties) {
      return new IMQueryPushShieldReq(properties);
    };

    /**
     * Encodes the specified IMQueryPushShieldReq message. Does not implicitly {@link Login.IMQueryPushShieldReq.verify|verify} messages.
     * @function encode
     * @memberof Login.IMQueryPushShieldReq
     * @static
     * @param {Login.IIMQueryPushShieldReq} message IMQueryPushShieldReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMQueryPushShieldReq.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint64(message.userId);
      if (message.attachData != null && Object.hasOwnProperty.call(message, "attachData"))
        writer.uint32( /* id 20, wireType 2 =*/ 162).bytes(message.attachData);
      return writer;
    };

    /**
     * Encodes the specified IMQueryPushShieldReq message, length delimited. Does not implicitly {@link Login.IMQueryPushShieldReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Login.IMQueryPushShieldReq
     * @static
     * @param {Login.IIMQueryPushShieldReq} message IMQueryPushShieldReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMQueryPushShieldReq.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a IMQueryPushShieldReq message from the specified reader or buffer.
     * @function decode
     * @memberof Login.IMQueryPushShieldReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Login.IMQueryPushShieldReq} IMQueryPushShieldReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMQueryPushShieldReq.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Login.IMQueryPushShieldReq();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint64();
          break;
        case 20:
          message.attachData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a IMQueryPushShieldReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Login.IMQueryPushShieldReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Login.IMQueryPushShieldReq} IMQueryPushShieldReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMQueryPushShieldReq.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a IMQueryPushShieldReq message.
     * @function verify
     * @memberof Login.IMQueryPushShieldReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IMQueryPushShieldReq.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) &&
            $util.isInteger(message.userId.high)))
          return "userId: integer|Long expected";
      if (message.attachData != null && message.hasOwnProperty("attachData"))
        if (!(message.attachData && typeof message.attachData.length === "number" || $util.isString(message
          .attachData)))
          return "attachData: buffer expected";
      return null;
    };

    /**
     * Creates a IMQueryPushShieldReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Login.IMQueryPushShieldReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Login.IMQueryPushShieldReq} IMQueryPushShieldReq
     */
    IMQueryPushShieldReq.fromObject = function fromObject(object) {
      if (object instanceof $root.Login.IMQueryPushShieldReq)
        return object;
      var message = new $root.Login.IMQueryPushShieldReq();
      if (object.userId != null)
        if ($util.Long)
          (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
        else if (typeof object.userId === "string")
          message.userId = parseInt(object.userId, 10);
        else if (typeof object.userId === "number")
          message.userId = object.userId;
        else if (typeof object.userId === "object")
          message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
      if (object.attachData != null)
        if (typeof object.attachData === "string")
          $util.base64.decode(object.attachData, message.attachData = $util.newBuffer($util.base64.length(
            object.attachData)), 0);
        else if (object.attachData.length)
          message.attachData = object.attachData;
      return message;
    };

    /**
     * Creates a plain object from a IMQueryPushShieldReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Login.IMQueryPushShieldReq
     * @static
     * @param {Login.IMQueryPushShieldReq} message IMQueryPushShieldReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IMQueryPushShieldReq.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.userId = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.userId = options.longs === String ? "0" : 0;
        if (options.bytes === String)
          object.attachData = "";
        else {
          object.attachData = [];
          if (options.bytes !== Array)
            object.attachData = $util.newBuffer(object.attachData);
        }
      }
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (typeof message.userId === "number")
          object.userId = options.longs === String ? String(message.userId) : message.userId;
        else
          object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) :
            options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0)
              .toNumber(true) : message.userId;
      if (message.attachData != null && message.hasOwnProperty("attachData"))
        object.attachData = options.bytes === String ? $util.base64.encode(message.attachData, 0, message
          .attachData.length) : options.bytes === Array ? Array.prototype.slice.call(message.attachData) :
          message.attachData;
      return object;
    };

    /**
     * Converts this IMQueryPushShieldReq to JSON.
     * @function toJSON
     * @memberof Login.IMQueryPushShieldReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IMQueryPushShieldReq.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return IMQueryPushShieldReq;
  })();

  Login.IMQueryPushShieldRsp = (function() {

    /**
     * Properties of a IMQueryPushShieldRsp.
     * @memberof Login
     * @interface IIMQueryPushShieldRsp
     * @property {number|Long|null} [userId] IMQueryPushShieldRsp userId
     * @property {number|null} [resultCode] IMQueryPushShieldRsp resultCode
     * @property {number|null} [shieldStatus] IMQueryPushShieldRsp shieldStatus
     * @property {Uint8Array|null} [attachData] IMQueryPushShieldRsp attachData
     */

    /**
     * Constructs a new IMQueryPushShieldRsp.
     * @memberof Login
     * @classdesc Represents a IMQueryPushShieldRsp.
     * @implements IIMQueryPushShieldRsp
     * @constructor
     * @param {Login.IIMQueryPushShieldRsp=} [properties] Properties to set
     */
    function IMQueryPushShieldRsp(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * IMQueryPushShieldRsp userId.
     * @member {number|Long} userId
     * @memberof Login.IMQueryPushShieldRsp
     * @instance
     */
    IMQueryPushShieldRsp.prototype.userId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * IMQueryPushShieldRsp resultCode.
     * @member {number} resultCode
     * @memberof Login.IMQueryPushShieldRsp
     * @instance
     */
    IMQueryPushShieldRsp.prototype.resultCode = 0;

    /**
     * IMQueryPushShieldRsp shieldStatus.
     * @member {number} shieldStatus
     * @memberof Login.IMQueryPushShieldRsp
     * @instance
     */
    IMQueryPushShieldRsp.prototype.shieldStatus = 0;

    /**
     * IMQueryPushShieldRsp attachData.
     * @member {Uint8Array} attachData
     * @memberof Login.IMQueryPushShieldRsp
     * @instance
     */
    IMQueryPushShieldRsp.prototype.attachData = $util.newBuffer([]);

    /**
     * Creates a new IMQueryPushShieldRsp instance using the specified properties.
     * @function create
     * @memberof Login.IMQueryPushShieldRsp
     * @static
     * @param {Login.IIMQueryPushShieldRsp=} [properties] Properties to set
     * @returns {Login.IMQueryPushShieldRsp} IMQueryPushShieldRsp instance
     */
    IMQueryPushShieldRsp.create = function create(properties) {
      return new IMQueryPushShieldRsp(properties);
    };

    /**
     * Encodes the specified IMQueryPushShieldRsp message. Does not implicitly {@link Login.IMQueryPushShieldRsp.verify|verify} messages.
     * @function encode
     * @memberof Login.IMQueryPushShieldRsp
     * @static
     * @param {Login.IIMQueryPushShieldRsp} message IMQueryPushShieldRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMQueryPushShieldRsp.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint64(message.userId);
      if (message.resultCode != null && Object.hasOwnProperty.call(message, "resultCode"))
        writer.uint32( /* id 2, wireType 0 =*/ 16).uint32(message.resultCode);
      if (message.shieldStatus != null && Object.hasOwnProperty.call(message, "shieldStatus"))
        writer.uint32( /* id 3, wireType 0 =*/ 24).uint32(message.shieldStatus);
      if (message.attachData != null && Object.hasOwnProperty.call(message, "attachData"))
        writer.uint32( /* id 20, wireType 2 =*/ 162).bytes(message.attachData);
      return writer;
    };

    /**
     * Encodes the specified IMQueryPushShieldRsp message, length delimited. Does not implicitly {@link Login.IMQueryPushShieldRsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Login.IMQueryPushShieldRsp
     * @static
     * @param {Login.IIMQueryPushShieldRsp} message IMQueryPushShieldRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMQueryPushShieldRsp.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a IMQueryPushShieldRsp message from the specified reader or buffer.
     * @function decode
     * @memberof Login.IMQueryPushShieldRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Login.IMQueryPushShieldRsp} IMQueryPushShieldRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMQueryPushShieldRsp.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Login.IMQueryPushShieldRsp();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint64();
          break;
        case 2:
          message.resultCode = reader.uint32();
          break;
        case 3:
          message.shieldStatus = reader.uint32();
          break;
        case 20:
          message.attachData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a IMQueryPushShieldRsp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Login.IMQueryPushShieldRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Login.IMQueryPushShieldRsp} IMQueryPushShieldRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMQueryPushShieldRsp.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a IMQueryPushShieldRsp message.
     * @function verify
     * @memberof Login.IMQueryPushShieldRsp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IMQueryPushShieldRsp.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) &&
            $util.isInteger(message.userId.high)))
          return "userId: integer|Long expected";
      if (message.resultCode != null && message.hasOwnProperty("resultCode"))
        if (!$util.isInteger(message.resultCode))
          return "resultCode: integer expected";
      if (message.shieldStatus != null && message.hasOwnProperty("shieldStatus"))
        if (!$util.isInteger(message.shieldStatus))
          return "shieldStatus: integer expected";
      if (message.attachData != null && message.hasOwnProperty("attachData"))
        if (!(message.attachData && typeof message.attachData.length === "number" || $util.isString(message
          .attachData)))
          return "attachData: buffer expected";
      return null;
    };

    /**
     * Creates a IMQueryPushShieldRsp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Login.IMQueryPushShieldRsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Login.IMQueryPushShieldRsp} IMQueryPushShieldRsp
     */
    IMQueryPushShieldRsp.fromObject = function fromObject(object) {
      if (object instanceof $root.Login.IMQueryPushShieldRsp)
        return object;
      var message = new $root.Login.IMQueryPushShieldRsp();
      if (object.userId != null)
        if ($util.Long)
          (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
        else if (typeof object.userId === "string")
          message.userId = parseInt(object.userId, 10);
        else if (typeof object.userId === "number")
          message.userId = object.userId;
        else if (typeof object.userId === "object")
          message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
      if (object.resultCode != null)
        message.resultCode = object.resultCode >>> 0;
      if (object.shieldStatus != null)
        message.shieldStatus = object.shieldStatus >>> 0;
      if (object.attachData != null)
        if (typeof object.attachData === "string")
          $util.base64.decode(object.attachData, message.attachData = $util.newBuffer($util.base64.length(
            object.attachData)), 0);
        else if (object.attachData.length)
          message.attachData = object.attachData;
      return message;
    };

    /**
     * Creates a plain object from a IMQueryPushShieldRsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Login.IMQueryPushShieldRsp
     * @static
     * @param {Login.IMQueryPushShieldRsp} message IMQueryPushShieldRsp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IMQueryPushShieldRsp.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.userId = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.userId = options.longs === String ? "0" : 0;
        object.resultCode = 0;
        object.shieldStatus = 0;
        if (options.bytes === String)
          object.attachData = "";
        else {
          object.attachData = [];
          if (options.bytes !== Array)
            object.attachData = $util.newBuffer(object.attachData);
        }
      }
      if (message.userId != null && message.hasOwnProperty("userId"))
        if (typeof message.userId === "number")
          object.userId = options.longs === String ? String(message.userId) : message.userId;
        else
          object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) :
            options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0)
              .toNumber(true) : message.userId;
      if (message.resultCode != null && message.hasOwnProperty("resultCode"))
        object.resultCode = message.resultCode;
      if (message.shieldStatus != null && message.hasOwnProperty("shieldStatus"))
        object.shieldStatus = message.shieldStatus;
      if (message.attachData != null && message.hasOwnProperty("attachData"))
        object.attachData = options.bytes === String ? $util.base64.encode(message.attachData, 0, message
          .attachData.length) : options.bytes === Array ? Array.prototype.slice.call(message.attachData) :
          message.attachData;
      return object;
    };

    /**
     * Converts this IMQueryPushShieldRsp to JSON.
     * @function toJSON
     * @memberof Login.IMQueryPushShieldRsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IMQueryPushShieldRsp.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return IMQueryPushShieldRsp;
  })();

  return Login;
})();

$root.Other = (function() {

  /**
   * Namespace Other.
   * @exports Other
   * @namespace
   */
  var Other = {};

  Other.IMHeartBeatReq = (function() {

    /**
     * Properties of a IMHeartBeatReq.
     * @memberof Other
     * @interface IIMHeartBeatReq
     * @property {number|Long|null} [currentTime] IMHeartBeatReq currentTime
     * @property {string|null} [lon] IMHeartBeatReq lon
     * @property {string|null} [lat] IMHeartBeatReq lat
     * @property {string|null} [address] IMHeartBeatReq address
     * @property {string|null} [locationType] IMHeartBeatReq locationType
     * @property {string|null} [accuracy] IMHeartBeatReq accuracy
     */

    /**
     * Constructs a new IMHeartBeatReq.
     * @memberof Other
     * @classdesc Represents a IMHeartBeatReq.
     * @implements IIMHeartBeatReq
     * @constructor
     * @param {Other.IIMHeartBeatReq=} [properties] Properties to set
     */
    function IMHeartBeatReq(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * IMHeartBeatReq currentTime.
     * @member {number|Long} currentTime
     * @memberof Other.IMHeartBeatReq
     * @instance
     */
    IMHeartBeatReq.prototype.currentTime = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * IMHeartBeatReq lon.
     * @member {string} lon
     * @memberof Other.IMHeartBeatReq
     * @instance
     */
    IMHeartBeatReq.prototype.lon = "";

    /**
     * IMHeartBeatReq lat.
     * @member {string} lat
     * @memberof Other.IMHeartBeatReq
     * @instance
     */
    IMHeartBeatReq.prototype.lat = "";

    /**
     * IMHeartBeatReq address.
     * @member {string} address
     * @memberof Other.IMHeartBeatReq
     * @instance
     */
    IMHeartBeatReq.prototype.address = "";

    /**
     * IMHeartBeatReq locationType.
     * @member {string} locationType
     * @memberof Other.IMHeartBeatReq
     * @instance
     */
    IMHeartBeatReq.prototype.locationType = "";

    /**
     * IMHeartBeatReq accuracy.
     * @member {string} accuracy
     * @memberof Other.IMHeartBeatReq
     * @instance
     */
    IMHeartBeatReq.prototype.accuracy = "";

    /**
     * Creates a new IMHeartBeatReq instance using the specified properties.
     * @function create
     * @memberof Other.IMHeartBeatReq
     * @static
     * @param {Other.IIMHeartBeatReq=} [properties] Properties to set
     * @returns {Other.IMHeartBeatReq} IMHeartBeatReq instance
     */
    IMHeartBeatReq.create = function create(properties) {
      return new IMHeartBeatReq(properties);
    };

    /**
     * Encodes the specified IMHeartBeatReq message. Does not implicitly {@link Other.IMHeartBeatReq.verify|verify} messages.
     * @function encode
     * @memberof Other.IMHeartBeatReq
     * @static
     * @param {Other.IIMHeartBeatReq} message IMHeartBeatReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMHeartBeatReq.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.currentTime != null && Object.hasOwnProperty.call(message, "currentTime"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint64(message.currentTime);
      if (message.lon != null && Object.hasOwnProperty.call(message, "lon"))
        writer.uint32( /* id 2, wireType 2 =*/ 18).string(message.lon);
      if (message.lat != null && Object.hasOwnProperty.call(message, "lat"))
        writer.uint32( /* id 3, wireType 2 =*/ 26).string(message.lat);
      if (message.address != null && Object.hasOwnProperty.call(message, "address"))
        writer.uint32( /* id 4, wireType 2 =*/ 34).string(message.address);
      if (message.locationType != null && Object.hasOwnProperty.call(message, "locationType"))
        writer.uint32( /* id 5, wireType 2 =*/ 42).string(message.locationType);
      if (message.accuracy != null && Object.hasOwnProperty.call(message, "accuracy"))
        writer.uint32( /* id 6, wireType 2 =*/ 50).string(message.accuracy);
      return writer;
    };

    /**
     * Encodes the specified IMHeartBeatReq message, length delimited. Does not implicitly {@link Other.IMHeartBeatReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Other.IMHeartBeatReq
     * @static
     * @param {Other.IIMHeartBeatReq} message IMHeartBeatReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMHeartBeatReq.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a IMHeartBeatReq message from the specified reader or buffer.
     * @function decode
     * @memberof Other.IMHeartBeatReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Other.IMHeartBeatReq} IMHeartBeatReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMHeartBeatReq.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Other.IMHeartBeatReq();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.currentTime = reader.uint64();
          break;
        case 2:
          message.lon = reader.string();
          break;
        case 3:
          message.lat = reader.string();
          break;
        case 4:
          message.address = reader.string();
          break;
        case 5:
          message.locationType = reader.string();
          break;
        case 6:
          message.accuracy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a IMHeartBeatReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Other.IMHeartBeatReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Other.IMHeartBeatReq} IMHeartBeatReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMHeartBeatReq.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a IMHeartBeatReq message.
     * @function verify
     * @memberof Other.IMHeartBeatReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IMHeartBeatReq.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.currentTime != null && message.hasOwnProperty("currentTime"))
        if (!$util.isInteger(message.currentTime) && !(message.currentTime && $util.isInteger(message
          .currentTime.low) && $util.isInteger(message.currentTime.high)))
          return "currentTime: integer|Long expected";
      if (message.lon != null && message.hasOwnProperty("lon"))
        if (!$util.isString(message.lon))
          return "lon: string expected";
      if (message.lat != null && message.hasOwnProperty("lat"))
        if (!$util.isString(message.lat))
          return "lat: string expected";
      if (message.address != null && message.hasOwnProperty("address"))
        if (!$util.isString(message.address))
          return "address: string expected";
      if (message.locationType != null && message.hasOwnProperty("locationType"))
        if (!$util.isString(message.locationType))
          return "locationType: string expected";
      if (message.accuracy != null && message.hasOwnProperty("accuracy"))
        if (!$util.isString(message.accuracy))
          return "accuracy: string expected";
      return null;
    };

    /**
     * Creates a IMHeartBeatReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Other.IMHeartBeatReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Other.IMHeartBeatReq} IMHeartBeatReq
     */
    IMHeartBeatReq.fromObject = function fromObject(object) {
      if (object instanceof $root.Other.IMHeartBeatReq)
        return object;
      var message = new $root.Other.IMHeartBeatReq();
      if (object.currentTime != null)
        if ($util.Long)
          (message.currentTime = $util.Long.fromValue(object.currentTime)).unsigned = true;
        else if (typeof object.currentTime === "string")
          message.currentTime = parseInt(object.currentTime, 10);
        else if (typeof object.currentTime === "number")
          message.currentTime = object.currentTime;
        else if (typeof object.currentTime === "object")
          message.currentTime = new $util.LongBits(object.currentTime.low >>> 0, object.currentTime.high >>> 0)
            .toNumber(true);
      if (object.lon != null)
        message.lon = String(object.lon);
      if (object.lat != null)
        message.lat = String(object.lat);
      if (object.address != null)
        message.address = String(object.address);
      if (object.locationType != null)
        message.locationType = String(object.locationType);
      if (object.accuracy != null)
        message.accuracy = String(object.accuracy);
      return message;
    };

    /**
     * Creates a plain object from a IMHeartBeatReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Other.IMHeartBeatReq
     * @static
     * @param {Other.IMHeartBeatReq} message IMHeartBeatReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IMHeartBeatReq.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.currentTime = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.currentTime = options.longs === String ? "0" : 0;
        object.lon = "";
        object.lat = "";
        object.address = "";
        object.locationType = "";
        object.accuracy = "";
      }
      if (message.currentTime != null && message.hasOwnProperty("currentTime"))
        if (typeof message.currentTime === "number")
          object.currentTime = options.longs === String ? String(message.currentTime) : message.currentTime;
        else
          object.currentTime = options.longs === String ? $util.Long.prototype.toString.call(message
            .currentTime) : options.longs === Number ? new $util.LongBits(message.currentTime.low >>> 0,
            message.currentTime.high >>> 0).toNumber(true) : message.currentTime;
      if (message.lon != null && message.hasOwnProperty("lon"))
        object.lon = message.lon;
      if (message.lat != null && message.hasOwnProperty("lat"))
        object.lat = message.lat;
      if (message.address != null && message.hasOwnProperty("address"))
        object.address = message.address;
      if (message.locationType != null && message.hasOwnProperty("locationType"))
        object.locationType = message.locationType;
      if (message.accuracy != null && message.hasOwnProperty("accuracy"))
        object.accuracy = message.accuracy;
      return object;
    };

    /**
     * Converts this IMHeartBeatReq to JSON.
     * @function toJSON
     * @memberof Other.IMHeartBeatReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IMHeartBeatReq.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return IMHeartBeatReq;
  })();

  Other.IMHeartBeatRsp = (function() {

    /**
     * Properties of a IMHeartBeatRsp.
     * @memberof Other
     * @interface IIMHeartBeatRsp
     * @property {number|Long|null} [currentTime] IMHeartBeatRsp currentTime
     */

    /**
     * Constructs a new IMHeartBeatRsp.
     * @memberof Other
     * @classdesc Represents a IMHeartBeatRsp.
     * @implements IIMHeartBeatRsp
     * @constructor
     * @param {Other.IIMHeartBeatRsp=} [properties] Properties to set
     */
    function IMHeartBeatRsp(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * IMHeartBeatRsp currentTime.
     * @member {number|Long} currentTime
     * @memberof Other.IMHeartBeatRsp
     * @instance
     */
    IMHeartBeatRsp.prototype.currentTime = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * Creates a new IMHeartBeatRsp instance using the specified properties.
     * @function create
     * @memberof Other.IMHeartBeatRsp
     * @static
     * @param {Other.IIMHeartBeatRsp=} [properties] Properties to set
     * @returns {Other.IMHeartBeatRsp} IMHeartBeatRsp instance
     */
    IMHeartBeatRsp.create = function create(properties) {
      return new IMHeartBeatRsp(properties);
    };

    /**
     * Encodes the specified IMHeartBeatRsp message. Does not implicitly {@link Other.IMHeartBeatRsp.verify|verify} messages.
     * @function encode
     * @memberof Other.IMHeartBeatRsp
     * @static
     * @param {Other.IIMHeartBeatRsp} message IMHeartBeatRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMHeartBeatRsp.encode = function encode(message, writer) {
      if (!writer)
        writer = $Writer.create();
      if (message.currentTime != null && Object.hasOwnProperty.call(message, "currentTime"))
        writer.uint32( /* id 1, wireType 0 =*/ 8).uint64(message.currentTime);
      return writer;
    };

    /**
     * Encodes the specified IMHeartBeatRsp message, length delimited. Does not implicitly {@link Other.IMHeartBeatRsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Other.IMHeartBeatRsp
     * @static
     * @param {Other.IIMHeartBeatRsp} message IMHeartBeatRsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IMHeartBeatRsp.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a IMHeartBeatRsp message from the specified reader or buffer.
     * @function decode
     * @memberof Other.IMHeartBeatRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Other.IMHeartBeatRsp} IMHeartBeatRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMHeartBeatRsp.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader))
        reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.Other.IMHeartBeatRsp();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
        case 1:
          message.currentTime = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
        }
      }
      return message;
    };

    /**
     * Decodes a IMHeartBeatRsp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Other.IMHeartBeatRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Other.IMHeartBeatRsp} IMHeartBeatRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IMHeartBeatRsp.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader))
        reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a IMHeartBeatRsp message.
     * @function verify
     * @memberof Other.IMHeartBeatRsp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IMHeartBeatRsp.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.currentTime != null && message.hasOwnProperty("currentTime"))
        if (!$util.isInteger(message.currentTime) && !(message.currentTime && $util.isInteger(message
          .currentTime.low) && $util.isInteger(message.currentTime.high)))
          return "currentTime: integer|Long expected";
      return null;
    };

    /**
     * Creates a IMHeartBeatRsp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Other.IMHeartBeatRsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Other.IMHeartBeatRsp} IMHeartBeatRsp
     */
    IMHeartBeatRsp.fromObject = function fromObject(object) {
      if (object instanceof $root.Other.IMHeartBeatRsp)
        return object;
      var message = new $root.Other.IMHeartBeatRsp();
      if (object.currentTime != null)
        if ($util.Long)
          (message.currentTime = $util.Long.fromValue(object.currentTime)).unsigned = true;
        else if (typeof object.currentTime === "string")
          message.currentTime = parseInt(object.currentTime, 10);
        else if (typeof object.currentTime === "number")
          message.currentTime = object.currentTime;
        else if (typeof object.currentTime === "object")
          message.currentTime = new $util.LongBits(object.currentTime.low >>> 0, object.currentTime.high >>> 0)
            .toNumber(true);
      return message;
    };

    /**
     * Creates a plain object from a IMHeartBeatRsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Other.IMHeartBeatRsp
     * @static
     * @param {Other.IMHeartBeatRsp} message IMHeartBeatRsp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IMHeartBeatRsp.toObject = function toObject(message, options) {
      if (!options)
        options = {};
      var object = {};
      if (options.defaults)
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.currentTime = options.longs === String ? long.toString() : options.longs === Number ? long
            .toNumber() : long;
        } else
          object.currentTime = options.longs === String ? "0" : 0;
      if (message.currentTime != null && message.hasOwnProperty("currentTime"))
        if (typeof message.currentTime === "number")
          object.currentTime = options.longs === String ? String(message.currentTime) : message.currentTime;
        else
          object.currentTime = options.longs === String ? $util.Long.prototype.toString.call(message
            .currentTime) : options.longs === Number ? new $util.LongBits(message.currentTime.low >>> 0,
            message.currentTime.high >>> 0).toNumber(true) : message.currentTime;
      return object;
    };

    /**
     * Converts this IMHeartBeatRsp to JSON.
     * @function toJSON
     * @memberof Other.IMHeartBeatRsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IMHeartBeatRsp.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return IMHeartBeatRsp;
  })();

  return Other;
})();

module.exports = $root;
