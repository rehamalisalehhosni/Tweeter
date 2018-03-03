import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "fontFamily": "sans-serif",
        "MsTextSizeAdjust": "100%",
        "WebkitTextSizeAdjust": "100%",
        "fontSize": 10,
        "WebkitTapHighlightColor": "transparent"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "Raleway,sans-serif",
        "fontSize": 14,
        "lineHeight": 1.6,
        "color": "#636b6f",
        "backgroundColor": "#f5f8fa"
    },
    "article": {
        "display": "block"
    },
    "aside": {
        "display": "block"
    },
    "details": {
        "display": "block"
    },
    "figcaption": {
        "display": "block"
    },
    "figure": {
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "footer": {
        "display": "block"
    },
    "header": {
        "display": "block"
    },
    "hgroup": {
        "display": "block"
    },
    "main": {
        "display": "block"
    },
    "menu": {
        "display": "block"
    },
    "nav": {
        "display": "block",
        "marginBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "section": {
        "display": "block"
    },
    "summary": {
        "display": "block"
    },
    "audio": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "canvas": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "progress": {
        "display": "inline-block",
        "verticalAlign": "baseline",
        "overflow": "hidden",
        "height": 22,
        "marginBottom": 22,
        "backgroundColor": "#f5f5f5",
        "borderRadius": 4,
        "WebkitBoxShadow": "inset 0 1px 2px rgba(0,0,0,.1)",
        "boxShadow": "inset 0 1px 2px rgba(0,0,0,.1)"
    },
    "video": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "audio:not([controls])": {
        "display": "none",
        "height": 0
    },
    "[hidden]": {
        "display": "none"
    },
    "template": {
        "display": "none"
    },
    "a": {
        "backgroundColor": "transparent",
        "color": "#3097d1",
        "textDecoration": "none"
    },
    "a:active": {
        "outline": 0
    },
    "a:hover": {
        "outline": 0,
        "color": "#216a94",
        "textDecoration": "underline"
    },
    "abbr[title]": {
        "borderBottom": "1px dotted #777",
        "cursor": "help"
    },
    "b": {
        "fontWeight": "700"
    },
    "strong": {
        "fontWeight": "700"
    },
    "dfn": {
        "fontStyle": "italic"
    },
    "h1": {
        "fontSize": 36,
        "marginTop": 22,
        "marginRight": 0,
        "marginBottom": 11,
        "marginLeft": 0,
        "fontFamily": "inherit",
        "fontWeight": "500",
        "lineHeight": 1.1,
        "color": "inherit"
    },
    "mark": {
        "background": "#ff0",
        "color": "#000",
        "backgroundColor": "#fcf8e3",
        "paddingTop": 0.2,
        "paddingRight": 0.2,
        "paddingBottom": 0.2,
        "paddingLeft": 0.2
    },
    "small": {
        "fontSize": "85%"
    },
    "sub": {
        "fontSize": "75%",
        "lineHeight": 0,
        "position": "relative",
        "verticalAlign": "baseline",
        "bottom": -0.25
    },
    "sup": {
        "fontSize": "75%",
        "lineHeight": 0,
        "position": "relative",
        "verticalAlign": "baseline",
        "top": -0.5
    },
    "img": {
        "border": 0,
        "verticalAlign": "middle"
    },
    "svg:not(:root)": {
        "overflow": "hidden"
    },
    "hr": {
        "WebkitBoxSizing": "content-box",
        "boxSizing": "content-box",
        "height": 0,
        "marginTop": 22,
        "marginBottom": 22,
        "border": 0,
        "borderTop": "1px solid #eee"
    },
    "pre": {
        "overflow": "auto",
        "fontFamily": "Menlo,Monaco,Consolas,Courier New,monospace",
        "fontSize": 13,
        "display": "block",
        "paddingTop": 10.5,
        "paddingRight": 10.5,
        "paddingBottom": 10.5,
        "paddingLeft": 10.5,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 11,
        "marginLeft": 0,
        "lineHeight": 1.6,
        "wordBreak": "break-all",
        "wordWrap": "break-word",
        "color": "#333",
        "backgroundColor": "#f5f5f5",
        "border": "1px solid #ccc",
        "borderRadius": 4
    },
    "code": {
        "fontFamily": "Menlo,Monaco,Consolas,Courier New,monospace",
        "fontSize": "90%",
        "color": "#c7254e",
        "backgroundColor": "#f9f2f4",
        "borderRadius": 4,
        "paddingTop": 2,
        "paddingRight": 4,
        "paddingBottom": 2,
        "paddingLeft": 4
    },
    "kbd": {
        "fontFamily": "Menlo,Monaco,Consolas,Courier New,monospace",
        "fontSize": "90%",
        "paddingTop": 2,
        "paddingRight": 4,
        "paddingBottom": 2,
        "paddingLeft": 4,
        "color": "#fff",
        "backgroundColor": "#333",
        "borderRadius": 3,
        "WebkitBoxShadow": "inset 0 -1px 0 rgba(0,0,0,.25)",
        "boxShadow": "inset 0 -1px 0 rgba(0,0,0,.25)"
    },
    "samp": {
        "fontFamily": "Menlo,Monaco,Consolas,Courier New,monospace",
        "fontSize": 1
    },
    "button": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "visible",
        "textTransform": "none",
        "WebkitAppearance": "button",
        "cursor": "pointer",
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "lineHeight": "inherit"
    },
    "input": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": "inherit",
        "fontFamily": "inherit",
        "fontSize": "inherit"
    },
    "optgroup": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontWeight": "700"
    },
    "select": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "textTransform": "none",
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "lineHeight": "inherit"
    },
    "textarea": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "auto",
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "lineHeight": "inherit"
    },
    "html input[type=button]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input[type=reset]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input[type=submit]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "button[disabled]": {
        "cursor": "default"
    },
    "html input[disabled]": {
        "cursor": "default"
    },
    "button::-moz-focus-inner": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input::-moz-focus-inner": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input[type=checkbox]": {
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": "1px\\9",
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": "normal"
    },
    "input[type=radio]": {
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": "1px\\9",
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": "normal"
    },
    "input[type=number]::-webkit-inner-spin-button": {
        "height": "auto"
    },
    "input[type=number]::-webkit-outer-spin-button": {
        "height": "auto"
    },
    "input[type=search]": {
        "WebkitAppearance": "none",
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "input[type=search]::-webkit-search-cancel-button": {
        "WebkitAppearance": "none"
    },
    "input[type=search]::-webkit-search-decoration": {
        "WebkitAppearance": "none"
    },
    "fieldset": {
        "border": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minWidth": 0
    },
    "table": {
        "borderCollapse": "collapse",
        "borderSpacing": 0,
        "backgroundColor": "transparent",
        "width": "100%",
        "maxWidth": "100%",
        "marginBottom": 22
    },
    "td": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "th": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textAlign": "left"
    },
    "glyphicon": {
        "position": "relative",
        "top": 1,
        "display": "inline-block",
        "fontFamily": "Glyphicons Halflings",
        "fontStyle": "normal",
        "fontWeight": "400",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "glyphicon-asterisk:before": {
        "content": "*"
    },
    "glyphicon-plus:before": {
        "content": "+"
    },
    "glyphicon-eur:before": {
        "content": "\\20AC"
    },
    "glyphicon-euro:before": {
        "content": "\\20AC"
    },
    "glyphicon-minus:before": {
        "content": "\\2212"
    },
    "glyphicon-cloud:before": {
        "content": "\\2601"
    },
    "glyphicon-envelope:before": {
        "content": "\\2709"
    },
    "glyphicon-pencil:before": {
        "content": "\\270F"
    },
    "glyphicon-glass:before": {
        "content": "\\E001"
    },
    "glyphicon-music:before": {
        "content": "\\E002"
    },
    "glyphicon-search:before": {
        "content": "\\E003"
    },
    "glyphicon-heart:before": {
        "content": "\\E005"
    },
    "glyphicon-star:before": {
        "content": "\\E006"
    },
    "glyphicon-star-empty:before": {
        "content": "\\E007"
    },
    "glyphicon-user:before": {
        "content": "\\E008"
    },
    "glyphicon-film:before": {
        "content": "\\E009"
    },
    "glyphicon-th-large:before": {
        "content": "\\E010"
    },
    "glyphicon-th:before": {
        "content": "\\E011"
    },
    "glyphicon-th-list:before": {
        "content": "\\E012"
    },
    "glyphicon-ok:before": {
        "content": "\\E013"
    },
    "glyphicon-remove:before": {
        "content": "\\E014"
    },
    "glyphicon-zoom-in:before": {
        "content": "\\E015"
    },
    "glyphicon-zoom-out:before": {
        "content": "\\E016"
    },
    "glyphicon-off:before": {
        "content": "\\E017"
    },
    "glyphicon-signal:before": {
        "content": "\\E018"
    },
    "glyphicon-cog:before": {
        "content": "\\E019"
    },
    "glyphicon-trash:before": {
        "content": "\\E020"
    },
    "glyphicon-home:before": {
        "content": "\\E021"
    },
    "glyphicon-file:before": {
        "content": "\\E022"
    },
    "glyphicon-time:before": {
        "content": "\\E023"
    },
    "glyphicon-road:before": {
        "content": "\\E024"
    },
    "glyphicon-download-alt:before": {
        "content": "\\E025"
    },
    "glyphicon-download:before": {
        "content": "\\E026"
    },
    "glyphicon-upload:before": {
        "content": "\\E027"
    },
    "glyphicon-inbox:before": {
        "content": "\\E028"
    },
    "glyphicon-play-circle:before": {
        "content": "\\E029"
    },
    "glyphicon-repeat:before": {
        "content": "\\E030"
    },
    "glyphicon-refresh:before": {
        "content": "\\E031"
    },
    "glyphicon-list-alt:before": {
        "content": "\\E032"
    },
    "glyphicon-lock:before": {
        "content": "\\E033"
    },
    "glyphicon-flag:before": {
        "content": "\\E034"
    },
    "glyphicon-headphones:before": {
        "content": "\\E035"
    },
    "glyphicon-volume-off:before": {
        "content": "\\E036"
    },
    "glyphicon-volume-down:before": {
        "content": "\\E037"
    },
    "glyphicon-volume-up:before": {
        "content": "\\E038"
    },
    "glyphicon-qrcode:before": {
        "content": "\\E039"
    },
    "glyphicon-barcode:before": {
        "content": "\\E040"
    },
    "glyphicon-tag:before": {
        "content": "\\E041"
    },
    "glyphicon-tags:before": {
        "content": "\\E042"
    },
    "glyphicon-book:before": {
        "content": "\\E043"
    },
    "glyphicon-bookmark:before": {
        "content": "\\E044"
    },
    "glyphicon-print:before": {
        "content": "\\E045"
    },
    "glyphicon-camera:before": {
        "content": "\\E046"
    },
    "glyphicon-font:before": {
        "content": "\\E047"
    },
    "glyphicon-bold:before": {
        "content": "\\E048"
    },
    "glyphicon-italic:before": {
        "content": "\\E049"
    },
    "glyphicon-text-height:before": {
        "content": "\\E050"
    },
    "glyphicon-text-width:before": {
        "content": "\\E051"
    },
    "glyphicon-align-left:before": {
        "content": "\\E052"
    },
    "glyphicon-align-center:before": {
        "content": "\\E053"
    },
    "glyphicon-align-right:before": {
        "content": "\\E054"
    },
    "glyphicon-align-justify:before": {
        "content": "\\E055"
    },
    "glyphicon-list:before": {
        "content": "\\E056"
    },
    "glyphicon-indent-left:before": {
        "content": "\\E057"
    },
    "glyphicon-indent-right:before": {
        "content": "\\E058"
    },
    "glyphicon-facetime-video:before": {
        "content": "\\E059"
    },
    "glyphicon-picture:before": {
        "content": "\\E060"
    },
    "glyphicon-map-marker:before": {
        "content": "\\E062"
    },
    "glyphicon-adjust:before": {
        "content": "\\E063"
    },
    "glyphicon-tint:before": {
        "content": "\\E064"
    },
    "glyphicon-edit:before": {
        "content": "\\E065"
    },
    "glyphicon-share:before": {
        "content": "\\E066"
    },
    "glyphicon-check:before": {
        "content": "\\E067"
    },
    "glyphicon-move:before": {
        "content": "\\E068"
    },
    "glyphicon-step-backward:before": {
        "content": "\\E069"
    },
    "glyphicon-fast-backward:before": {
        "content": "\\E070"
    },
    "glyphicon-backward:before": {
        "content": "\\E071"
    },
    "glyphicon-play:before": {
        "content": "\\E072"
    },
    "glyphicon-pause:before": {
        "content": "\\E073"
    },
    "glyphicon-stop:before": {
        "content": "\\E074"
    },
    "glyphicon-forward:before": {
        "content": "\\E075"
    },
    "glyphicon-fast-forward:before": {
        "content": "\\E076"
    },
    "glyphicon-step-forward:before": {
        "content": "\\E077"
    },
    "glyphicon-eject:before": {
        "content": "\\E078"
    },
    "glyphicon-chevron-left:before": {
        "content": "\\E079"
    },
    "glyphicon-chevron-right:before": {
        "content": "\\E080"
    },
    "glyphicon-plus-sign:before": {
        "content": "\\E081"
    },
    "glyphicon-minus-sign:before": {
        "content": "\\E082"
    },
    "glyphicon-remove-sign:before": {
        "content": "\\E083"
    },
    "glyphicon-ok-sign:before": {
        "content": "\\E084"
    },
    "glyphicon-question-sign:before": {
        "content": "\\E085"
    },
    "glyphicon-info-sign:before": {
        "content": "\\E086"
    },
    "glyphicon-screenshot:before": {
        "content": "\\E087"
    },
    "glyphicon-remove-circle:before": {
        "content": "\\E088"
    },
    "glyphicon-ok-circle:before": {
        "content": "\\E089"
    },
    "glyphicon-ban-circle:before": {
        "content": "\\E090"
    },
    "glyphicon-arrow-left:before": {
        "content": "\\E091"
    },
    "glyphicon-arrow-right:before": {
        "content": "\\E092"
    },
    "glyphicon-arrow-up:before": {
        "content": "\\E093"
    },
    "glyphicon-arrow-down:before": {
        "content": "\\E094"
    },
    "glyphicon-share-alt:before": {
        "content": "\\E095"
    },
    "glyphicon-resize-full:before": {
        "content": "\\E096"
    },
    "glyphicon-resize-small:before": {
        "content": "\\E097"
    },
    "glyphicon-exclamation-sign:before": {
        "content": "\\E101"
    },
    "glyphicon-gift:before": {
        "content": "\\E102"
    },
    "glyphicon-leaf:before": {
        "content": "\\E103"
    },
    "glyphicon-fire:before": {
        "content": "\\E104"
    },
    "glyphicon-eye-open:before": {
        "content": "\\E105"
    },
    "glyphicon-eye-close:before": {
        "content": "\\E106"
    },
    "glyphicon-warning-sign:before": {
        "content": "\\E107"
    },
    "glyphicon-plane:before": {
        "content": "\\E108"
    },
    "glyphicon-calendar:before": {
        "content": "\\E109"
    },
    "glyphicon-random:before": {
        "content": "\\E110"
    },
    "glyphicon-comment:before": {
        "content": "\\E111"
    },
    "glyphicon-magnet:before": {
        "content": "\\E112"
    },
    "glyphicon-chevron-up:before": {
        "content": "\\E113"
    },
    "glyphicon-chevron-down:before": {
        "content": "\\E114"
    },
    "glyphicon-retweet:before": {
        "content": "\\E115"
    },
    "glyphicon-shopping-cart:before": {
        "content": "\\E116"
    },
    "glyphicon-folder-close:before": {
        "content": "\\E117"
    },
    "glyphicon-folder-open:before": {
        "content": "\\E118"
    },
    "glyphicon-resize-vertical:before": {
        "content": "\\E119"
    },
    "glyphicon-resize-horizontal:before": {
        "content": "\\E120"
    },
    "glyphicon-hdd:before": {
        "content": "\\E121"
    },
    "glyphicon-bullhorn:before": {
        "content": "\\E122"
    },
    "glyphicon-bell:before": {
        "content": "\\E123"
    },
    "glyphicon-certificate:before": {
        "content": "\\E124"
    },
    "glyphicon-thumbs-up:before": {
        "content": "\\E125"
    },
    "glyphicon-thumbs-down:before": {
        "content": "\\E126"
    },
    "glyphicon-hand-right:before": {
        "content": "\\E127"
    },
    "glyphicon-hand-left:before": {
        "content": "\\E128"
    },
    "glyphicon-hand-up:before": {
        "content": "\\E129"
    },
    "glyphicon-hand-down:before": {
        "content": "\\E130"
    },
    "glyphicon-circle-arrow-right:before": {
        "content": "\\E131"
    },
    "glyphicon-circle-arrow-left:before": {
        "content": "\\E132"
    },
    "glyphicon-circle-arrow-up:before": {
        "content": "\\E133"
    },
    "glyphicon-circle-arrow-down:before": {
        "content": "\\E134"
    },
    "glyphicon-globe:before": {
        "content": "\\E135"
    },
    "glyphicon-wrench:before": {
        "content": "\\E136"
    },
    "glyphicon-tasks:before": {
        "content": "\\E137"
    },
    "glyphicon-filter:before": {
        "content": "\\E138"
    },
    "glyphicon-briefcase:before": {
        "content": "\\E139"
    },
    "glyphicon-fullscreen:before": {
        "content": "\\E140"
    },
    "glyphicon-dashboard:before": {
        "content": "\\E141"
    },
    "glyphicon-paperclip:before": {
        "content": "\\E142"
    },
    "glyphicon-heart-empty:before": {
        "content": "\\E143"
    },
    "glyphicon-link:before": {
        "content": "\\E144"
    },
    "glyphicon-phone:before": {
        "content": "\\E145"
    },
    "glyphicon-pushpin:before": {
        "content": "\\E146"
    },
    "glyphicon-usd:before": {
        "content": "\\E148"
    },
    "glyphicon-gbp:before": {
        "content": "\\E149"
    },
    "glyphicon-sort:before": {
        "content": "\\E150"
    },
    "glyphicon-sort-by-alphabet:before": {
        "content": "\\E151"
    },
    "glyphicon-sort-by-alphabet-alt:before": {
        "content": "\\E152"
    },
    "glyphicon-sort-by-order:before": {
        "content": "\\E153"
    },
    "glyphicon-sort-by-order-alt:before": {
        "content": "\\E154"
    },
    "glyphicon-sort-by-attributes:before": {
        "content": "\\E155"
    },
    "glyphicon-sort-by-attributes-alt:before": {
        "content": "\\E156"
    },
    "glyphicon-unchecked:before": {
        "content": "\\E157"
    },
    "glyphicon-expand:before": {
        "content": "\\E158"
    },
    "glyphicon-collapse-down:before": {
        "content": "\\E159"
    },
    "glyphicon-collapse-up:before": {
        "content": "\\E160"
    },
    "glyphicon-log-in:before": {
        "content": "\\E161"
    },
    "glyphicon-flash:before": {
        "content": "\\E162"
    },
    "glyphicon-log-out:before": {
        "content": "\\E163"
    },
    "glyphicon-new-window:before": {
        "content": "\\E164"
    },
    "glyphicon-record:before": {
        "content": "\\E165"
    },
    "glyphicon-save:before": {
        "content": "\\E166"
    },
    "glyphicon-open:before": {
        "content": "\\E167"
    },
    "glyphicon-saved:before": {
        "content": "\\E168"
    },
    "glyphicon-import:before": {
        "content": "\\E169"
    },
    "glyphicon-export:before": {
        "content": "\\E170"
    },
    "glyphicon-send:before": {
        "content": "\\E171"
    },
    "glyphicon-floppy-disk:before": {
        "content": "\\E172"
    },
    "glyphicon-floppy-saved:before": {
        "content": "\\E173"
    },
    "glyphicon-floppy-remove:before": {
        "content": "\\E174"
    },
    "glyphicon-floppy-save:before": {
        "content": "\\E175"
    },
    "glyphicon-floppy-open:before": {
        "content": "\\E176"
    },
    "glyphicon-credit-card:before": {
        "content": "\\E177"
    },
    "glyphicon-transfer:before": {
        "content": "\\E178"
    },
    "glyphicon-cutlery:before": {
        "content": "\\E179"
    },
    "glyphicon-header:before": {
        "content": "\\E180"
    },
    "glyphicon-compressed:before": {
        "content": "\\E181"
    },
    "glyphicon-earphone:before": {
        "content": "\\E182"
    },
    "glyphicon-phone-alt:before": {
        "content": "\\E183"
    },
    "glyphicon-tower:before": {
        "content": "\\E184"
    },
    "glyphicon-stats:before": {
        "content": "\\E185"
    },
    "glyphicon-sd-video:before": {
        "content": "\\E186"
    },
    "glyphicon-hd-video:before": {
        "content": "\\E187"
    },
    "glyphicon-subtitles:before": {
        "content": "\\E188"
    },
    "glyphicon-sound-stereo:before": {
        "content": "\\E189"
    },
    "glyphicon-sound-dolby:before": {
        "content": "\\E190"
    },
    "glyphicon-sound-5-1:before": {
        "content": "\\E191"
    },
    "glyphicon-sound-6-1:before": {
        "content": "\\E192"
    },
    "glyphicon-sound-7-1:before": {
        "content": "\\E193"
    },
    "glyphicon-copyright-mark:before": {
        "content": "\\E194"
    },
    "glyphicon-registration-mark:before": {
        "content": "\\E195"
    },
    "glyphicon-cloud-download:before": {
        "content": "\\E197"
    },
    "glyphicon-cloud-upload:before": {
        "content": "\\E198"
    },
    "glyphicon-tree-conifer:before": {
        "content": "\\E199"
    },
    "glyphicon-tree-deciduous:before": {
        "content": "\\E200"
    },
    "glyphicon-cd:before": {
        "content": "\\E201"
    },
    "glyphicon-save-file:before": {
        "content": "\\E202"
    },
    "glyphicon-open-file:before": {
        "content": "\\E203"
    },
    "glyphicon-level-up:before": {
        "content": "\\E204"
    },
    "glyphicon-copy:before": {
        "content": "\\E205"
    },
    "glyphicon-paste:before": {
        "content": "\\E206"
    },
    "glyphicon-alert:before": {
        "content": "\\E209"
    },
    "glyphicon-equalizer:before": {
        "content": "\\E210"
    },
    "glyphicon-king:before": {
        "content": "\\E211"
    },
    "glyphicon-queen:before": {
        "content": "\\E212"
    },
    "glyphicon-pawn:before": {
        "content": "\\E213"
    },
    "glyphicon-bishop:before": {
        "content": "\\E214"
    },
    "glyphicon-knight:before": {
        "content": "\\E215"
    },
    "glyphicon-baby-formula:before": {
        "content": "\\E216"
    },
    "glyphicon-tent:before": {
        "content": "\\26FA"
    },
    "glyphicon-blackboard:before": {
        "content": "\\E218"
    },
    "glyphicon-bed:before": {
        "content": "\\E219"
    },
    "glyphicon-apple:before": {
        "content": "\\F8FF"
    },
    "glyphicon-erase:before": {
        "content": "\\E221"
    },
    "glyphicon-hourglass:before": {
        "content": "\\231B"
    },
    "glyphicon-lamp:before": {
        "content": "\\E223"
    },
    "glyphicon-duplicate:before": {
        "content": "\\E224"
    },
    "glyphicon-piggy-bank:before": {
        "content": "\\E225"
    },
    "glyphicon-scissors:before": {
        "content": "\\E226"
    },
    "glyphicon-bitcoin:before": {
        "content": "\\E227"
    },
    "glyphicon-btc:before": {
        "content": "\\E227"
    },
    "glyphicon-xbt:before": {
        "content": "\\E227"
    },
    "glyphicon-jpy:before": {
        "content": "\\A5"
    },
    "glyphicon-yen:before": {
        "content": "\\A5"
    },
    "glyphicon-rub:before": {
        "content": "\\20BD"
    },
    "glyphicon-ruble:before": {
        "content": "\\20BD"
    },
    "glyphicon-scale:before": {
        "content": "\\E230"
    },
    "glyphicon-ice-lolly:before": {
        "content": "\\E231"
    },
    "glyphicon-ice-lolly-tasted:before": {
        "content": "\\E232"
    },
    "glyphicon-education:before": {
        "content": "\\E233"
    },
    "glyphicon-option-horizontal:before": {
        "content": "\\E234"
    },
    "glyphicon-option-vertical:before": {
        "content": "\\E235"
    },
    "glyphicon-menu-hamburger:before": {
        "content": "\\E236"
    },
    "glyphicon-modal-window:before": {
        "content": "\\E237"
    },
    "glyphicon-oil:before": {
        "content": "\\E238"
    },
    "glyphicon-grain:before": {
        "content": "\\E239"
    },
    "glyphicon-sunglasses:before": {
        "content": "\\E240"
    },
    "glyphicon-text-size:before": {
        "content": "\\E241"
    },
    "glyphicon-text-color:before": {
        "content": "\\E242"
    },
    "glyphicon-text-background:before": {
        "content": "\\E243"
    },
    "glyphicon-object-align-top:before": {
        "content": "\\E244"
    },
    "glyphicon-object-align-bottom:before": {
        "content": "\\E245"
    },
    "glyphicon-object-align-horizontal:before": {
        "content": "\\E246"
    },
    "glyphicon-object-align-left:before": {
        "content": "\\E247"
    },
    "glyphicon-object-align-vertical:before": {
        "content": "\\E248"
    },
    "glyphicon-object-align-right:before": {
        "content": "\\E249"
    },
    "glyphicon-triangle-right:before": {
        "content": "\\E250"
    },
    "glyphicon-triangle-left:before": {
        "content": "\\E251"
    },
    "glyphicon-triangle-bottom:before": {
        "content": "\\E252"
    },
    "glyphicon-triangle-top:before": {
        "content": "\\E253"
    },
    "glyphicon-console:before": {
        "content": "\\E254"
    },
    "glyphicon-superscript:before": {
        "content": "\\E255"
    },
    "glyphicon-subscript:before": {
        "content": "\\E256"
    },
    "glyphicon-menu-left:before": {
        "content": "\\E257"
    },
    "glyphicon-menu-right:before": {
        "content": "\\E258"
    },
    "glyphicon-menu-down:before": {
        "content": "\\E259"
    },
    "glyphicon-menu-up:before": {
        "content": "\\E260"
    },
    "*": {
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    ":after": {
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    ":before": {
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "a:focus": {
        "color": "#216a94",
        "textDecoration": "underline",
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "img-responsive": {
        "display": "block",
        "maxWidth": "100%",
        "height": "auto"
    },
    "img-rounded": {
        "borderRadius": 6
    },
    "img-thumbnail": {
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "lineHeight": 1.6,
        "backgroundColor": "#f5f8fa",
        "border": "1px solid #ddd",
        "borderRadius": 4,
        "WebkitTransition": "all .2s ease-in-out",
        "transition": "all .2s ease-in-out",
        "display": "inline-block",
        "maxWidth": "100%",
        "height": "auto"
    },
    "img-circle": {
        "borderRadius": "50%"
    },
    "sr-only": {
        "position": "absolute",
        "width": 1,
        "height": 1,
        "marginTop": -1,
        "marginRight": -1,
        "marginBottom": -1,
        "marginLeft": -1,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "overflow": "hidden",
        "clip": "rect(0,0,0,0)",
        "border": 0
    },
    "sr-only-focusable:active": {
        "position": "static",
        "width": "auto",
        "height": "auto",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "visible",
        "clip": "auto"
    },
    "sr-only-focusable:focus": {
        "position": "static",
        "width": "auto",
        "height": "auto",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "visible",
        "clip": "auto"
    },
    "[role=button]": {
        "cursor": "pointer"
    },
    "h2": {
        "fontFamily": "inherit",
        "fontWeight": "500",
        "lineHeight": 1.1,
        "color": "inherit",
        "marginTop": 22,
        "marginBottom": 11,
        "fontSize": 30
    },
    "h3": {
        "fontFamily": "inherit",
        "fontWeight": "500",
        "lineHeight": 1.1,
        "color": "inherit",
        "marginTop": 22,
        "marginBottom": 11,
        "fontSize": 24
    },
    "h4": {
        "fontFamily": "inherit",
        "fontWeight": "500",
        "lineHeight": 1.1,
        "color": "inherit",
        "marginTop": 11,
        "marginBottom": 11,
        "fontSize": 18
    },
    "h5": {
        "fontFamily": "inherit",
        "fontWeight": "500",
        "lineHeight": 1.1,
        "color": "inherit",
        "marginTop": 11,
        "marginBottom": 11,
        "fontSize": 14
    },
    "h6": {
        "fontFamily": "inherit",
        "fontWeight": "500",
        "lineHeight": 1.1,
        "color": "inherit",
        "marginTop": 11,
        "marginBottom": 11,
        "fontSize": 12
    },
    "h1 small": {
        "fontWeight": "400",
        "lineHeight": 1,
        "color": "#777",
        "fontSize": "65%"
    },
    "h2 small": {
        "fontWeight": "400",
        "lineHeight": 1,
        "color": "#777",
        "fontSize": "65%"
    },
    "h3 small": {
        "fontWeight": "400",
        "lineHeight": 1,
        "color": "#777",
        "fontSize": "65%"
    },
    "h4 small": {
        "fontWeight": "400",
        "lineHeight": 1,
        "color": "#777",
        "fontSize": "75%"
    },
    "h5 small": {
        "fontWeight": "400",
        "lineHeight": 1,
        "color": "#777",
        "fontSize": "75%"
    },
    "h6 small": {
        "fontWeight": "400",
        "lineHeight": 1,
        "color": "#777",
        "fontSize": "75%"
    },
    "p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 11,
        "marginLeft": 0
    },
    "lead": {
        "marginBottom": 22,
        "fontSize": 16,
        "fontWeight": "300",
        "lineHeight": 1.4
    },
    "text-left": {
        "textAlign": "left"
    },
    "text-right": {
        "textAlign": "right"
    },
    "text-center": {
        "textAlign": "center"
    },
    "text-justify": {
        "textAlign": "justify"
    },
    "text-nowrap": {
        "whiteSpace": "nowrap"
    },
    "text-lowercase": {
        "textTransform": "lowercase"
    },
    "initialism": {
        "textTransform": "uppercase",
        "fontSize": "90%"
    },
    "text-uppercase": {
        "textTransform": "uppercase"
    },
    "text-capitalize": {
        "textTransform": "capitalize"
    },
    "text-muted": {
        "color": "#777"
    },
    "text-primary": {
        "color": "#3097d1"
    },
    "atext-primary:focus": {
        "color": "#2579a9"
    },
    "atext-primary:hover": {
        "color": "#2579a9"
    },
    "text-success": {
        "color": "#3c763d"
    },
    "atext-success:focus": {
        "color": "#2b542c"
    },
    "atext-success:hover": {
        "color": "#2b542c"
    },
    "text-info": {
        "color": "#31708f"
    },
    "atext-info:focus": {
        "color": "#245269"
    },
    "atext-info:hover": {
        "color": "#245269"
    },
    "text-warning": {
        "color": "#8a6d3b"
    },
    "atext-warning:focus": {
        "color": "#66512c"
    },
    "atext-warning:hover": {
        "color": "#66512c"
    },
    "text-danger": {
        "color": "#a94442"
    },
    "atext-danger:focus": {
        "color": "#843534"
    },
    "atext-danger:hover": {
        "color": "#843534"
    },
    "bg-primary": {
        "color": "#fff",
        "backgroundColor": "#3097d1"
    },
    "abg-primary:focus": {
        "backgroundColor": "#2579a9"
    },
    "abg-primary:hover": {
        "backgroundColor": "#2579a9"
    },
    "bg-success": {
        "backgroundColor": "#dff0d8"
    },
    "abg-success:focus": {
        "backgroundColor": "#c1e2b3"
    },
    "abg-success:hover": {
        "backgroundColor": "#c1e2b3"
    },
    "bg-info": {
        "backgroundColor": "#d9edf7"
    },
    "abg-info:focus": {
        "backgroundColor": "#afd9ee"
    },
    "abg-info:hover": {
        "backgroundColor": "#afd9ee"
    },
    "bg-warning": {
        "backgroundColor": "#fcf8e3"
    },
    "abg-warning:focus": {
        "backgroundColor": "#f7ecb5"
    },
    "abg-warning:hover": {
        "backgroundColor": "#f7ecb5"
    },
    "bg-danger": {
        "backgroundColor": "#f2dede"
    },
    "abg-danger:focus": {
        "backgroundColor": "#e4b9b9"
    },
    "abg-danger:hover": {
        "backgroundColor": "#e4b9b9"
    },
    "page-header": {
        "paddingBottom": 10,
        "marginTop": 44,
        "marginRight": 0,
        "marginBottom": 22,
        "marginLeft": 0,
        "borderBottom": "1px solid #eee"
    },
    "ol": {
        "marginTop": 0,
        "marginBottom": 11
    },
    "ul": {
        "marginTop": 0,
        "marginBottom": 11
    },
    "ol ol": {
        "marginBottom": 0
    },
    "ol ul": {
        "marginBottom": 0
    },
    "ul ol": {
        "marginBottom": 0
    },
    "ul ul": {
        "marginBottom": 0
    },
    "list-inline": {
        "paddingLeft": 0,
        "listStyle": "none",
        "marginLeft": -5
    },
    "list-unstyled": {
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "list-inline>li": {
        "display": "inline-block",
        "paddingLeft": 5,
        "paddingRight": 5
    },
    "dl": {
        "marginTop": 0,
        "marginBottom": 22
    },
    "dd": {
        "lineHeight": 1.6,
        "marginLeft": 0
    },
    "dt": {
        "lineHeight": 1.6,
        "fontWeight": "700"
    },
    "dl-horizontal dd:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "dl-horizontal dd:before": {
        "content": " ",
        "display": "table"
    },
    "abbr[data-original-title]": {
        "cursor": "help",
        "borderBottom": "1px dotted #777"
    },
    "blockquote": {
        "paddingTop": 11,
        "paddingRight": 22,
        "paddingBottom": 11,
        "paddingLeft": 22,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 22,
        "marginLeft": 0,
        "fontSize": 17.5,
        "borderLeft": "5px solid #eee"
    },
    "blockquote ol:last-child": {
        "marginBottom": 0
    },
    "blockquote p:last-child": {
        "marginBottom": 0
    },
    "blockquote ul:last-child": {
        "marginBottom": 0
    },
    "blockquote small": {
        "display": "block",
        "fontSize": "80%",
        "lineHeight": 1.6,
        "color": "#777"
    },
    "blockquote footer": {
        "display": "block",
        "fontSize": "80%",
        "lineHeight": 1.6,
        "color": "#777"
    },
    "blockquote small:before": {
        "content": "\\2014   \\A0"
    },
    "blockquote footer:before": {
        "content": "\\2014   \\A0"
    },
    "blockquote-reverse": {
        "paddingRight": 15,
        "paddingLeft": 0,
        "borderRight": "5px solid #eee",
        "borderLeft": 0,
        "textAlign": "right"
    },
    "blockquotepull-right": {
        "paddingRight": 15,
        "paddingLeft": 0,
        "borderRight": "5px solid #eee",
        "borderLeft": 0,
        "textAlign": "right"
    },
    "blockquote-reverse small:before": {
        "content": ""
    },
    "blockquote-reverse footer:before": {
        "content": ""
    },
    "blockquotepull-right small:before": {
        "content": ""
    },
    "blockquotepull-right footer:before": {
        "content": ""
    },
    "blockquote-reverse small:after": {
        "content": "\\A0   \\2014"
    },
    "blockquote-reverse footer:after": {
        "content": "\\A0   \\2014"
    },
    "blockquotepull-right small:after": {
        "content": "\\A0   \\2014"
    },
    "blockquotepull-right footer:after": {
        "content": "\\A0   \\2014"
    },
    "address": {
        "marginBottom": 22,
        "fontStyle": "normal",
        "lineHeight": 1.6
    },
    "kbd kbd": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontSize": "100%",
        "fontWeight": "700",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "pre code": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontSize": "inherit",
        "color": "inherit",
        "whiteSpace": "pre-wrap",
        "backgroundColor": "transparent",
        "borderRadius": 0
    },
    "pre-scrollable": {
        "maxHeight": 340,
        "overflowY": "scroll"
    },
    "container": {
        "marginRight": "auto",
        "marginLeft": "auto",
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "container:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "container:before": {
        "content": " ",
        "display": "table"
    },
    "container-fluid": {
        "marginRight": "auto",
        "marginLeft": "auto",
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "container-fluid:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "container-fluid:before": {
        "content": " ",
        "display": "table"
    },
    "row": {
        "marginLeft": -15,
        "marginRight": -15
    },
    "row:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "row:before": {
        "content": " ",
        "display": "table"
    },
    "col-lg-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-sm-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-sm-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-sm-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-sm-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-sm-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-sm-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-sm-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-sm-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-sm-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-sm-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-sm-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-sm-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "8.33333333%"
    },
    "col-xs-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "16.66666667%"
    },
    "col-xs-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "25%"
    },
    "col-xs-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "33.33333333%"
    },
    "col-xs-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "41.66666667%"
    },
    "col-xs-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "50%"
    },
    "col-xs-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "58.33333333%"
    },
    "col-xs-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "66.66666667%"
    },
    "col-xs-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "75%"
    },
    "col-xs-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "83.33333333%"
    },
    "col-xs-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "91.66666667%"
    },
    "col-xs-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "100%"
    },
    "col-xs-pull-0": {
        "right": "auto"
    },
    "col-xs-pull-1": {
        "right": "8.33333333%"
    },
    "col-xs-pull-2": {
        "right": "16.66666667%"
    },
    "col-xs-pull-3": {
        "right": "25%"
    },
    "col-xs-pull-4": {
        "right": "33.33333333%"
    },
    "col-xs-pull-5": {
        "right": "41.66666667%"
    },
    "col-xs-pull-6": {
        "right": "50%"
    },
    "col-xs-pull-7": {
        "right": "58.33333333%"
    },
    "col-xs-pull-8": {
        "right": "66.66666667%"
    },
    "col-xs-pull-9": {
        "right": "75%"
    },
    "col-xs-pull-10": {
        "right": "83.33333333%"
    },
    "col-xs-pull-11": {
        "right": "91.66666667%"
    },
    "col-xs-pull-12": {
        "right": "100%"
    },
    "col-xs-push-0": {
        "left": "auto"
    },
    "col-xs-push-1": {
        "left": "8.33333333%"
    },
    "col-xs-push-2": {
        "left": "16.66666667%"
    },
    "col-xs-push-3": {
        "left": "25%"
    },
    "col-xs-push-4": {
        "left": "33.33333333%"
    },
    "col-xs-push-5": {
        "left": "41.66666667%"
    },
    "col-xs-push-6": {
        "left": "50%"
    },
    "col-xs-push-7": {
        "left": "58.33333333%"
    },
    "col-xs-push-8": {
        "left": "66.66666667%"
    },
    "col-xs-push-9": {
        "left": "75%"
    },
    "col-xs-push-10": {
        "left": "83.33333333%"
    },
    "col-xs-push-11": {
        "left": "91.66666667%"
    },
    "col-xs-push-12": {
        "left": "100%"
    },
    "col-xs-offset-0": {
        "marginLeft": 0
    },
    "col-xs-offset-1": {
        "marginLeft": "8.33333333%"
    },
    "col-xs-offset-2": {
        "marginLeft": "16.66666667%"
    },
    "col-xs-offset-3": {
        "marginLeft": "25%"
    },
    "col-xs-offset-4": {
        "marginLeft": "33.33333333%"
    },
    "col-xs-offset-5": {
        "marginLeft": "41.66666667%"
    },
    "col-xs-offset-6": {
        "marginLeft": "50%"
    },
    "col-xs-offset-7": {
        "marginLeft": "58.33333333%"
    },
    "col-xs-offset-8": {
        "marginLeft": "66.66666667%"
    },
    "col-xs-offset-9": {
        "marginLeft": "75%"
    },
    "col-xs-offset-10": {
        "marginLeft": "83.33333333%"
    },
    "col-xs-offset-11": {
        "marginLeft": "91.66666667%"
    },
    "col-xs-offset-12": {
        "marginLeft": "100%"
    },
    "caption": {
        "paddingTop": 8,
        "paddingBottom": 8,
        "color": "#777",
        "textAlign": "left"
    },
    "table>tbody>tr>td": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.6,
        "verticalAlign": "top",
        "borderTop": "1px solid #ddd"
    },
    "table>tbody>tr>th": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.6,
        "verticalAlign": "top",
        "borderTop": "1px solid #ddd"
    },
    "table>tfoot>tr>td": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.6,
        "verticalAlign": "top",
        "borderTop": "1px solid #ddd"
    },
    "table>tfoot>tr>th": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.6,
        "verticalAlign": "top",
        "borderTop": "1px solid #ddd"
    },
    "table>thead>tr>td": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.6,
        "verticalAlign": "top",
        "borderTop": "1px solid #ddd"
    },
    "table>thead>tr>th": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.6,
        "verticalAlign": "bottom",
        "borderTop": "1px solid #ddd",
        "borderBottom": "2px solid #ddd"
    },
    "table>caption+thead>tr:first-child>td": {
        "borderTop": 0
    },
    "table>caption+thead>tr:first-child>th": {
        "borderTop": 0
    },
    "table>colgroup+thead>tr:first-child>td": {
        "borderTop": 0
    },
    "table>colgroup+thead>tr:first-child>th": {
        "borderTop": 0
    },
    "table>thead:first-child>tr:first-child>td": {
        "borderTop": 0
    },
    "table>thead:first-child>tr:first-child>th": {
        "borderTop": 0
    },
    "table>tbody+tbody": {
        "borderTop": "2px solid #ddd"
    },
    "table table": {
        "backgroundColor": "#f5f8fa"
    },
    "table-condensed>tbody>tr>td": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "table-condensed>tbody>tr>th": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "table-condensed>tfoot>tr>td": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "table-condensed>tfoot>tr>th": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "table-condensed>thead>tr>td": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "table-condensed>thead>tr>th": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "table-bordered": {
        "border": "1px solid #ddd"
    },
    "table-bordered>tbody>tr>td": {
        "border": "1px solid #ddd"
    },
    "table-bordered>tbody>tr>th": {
        "border": "1px solid #ddd"
    },
    "table-bordered>tfoot>tr>td": {
        "border": "1px solid #ddd"
    },
    "table-bordered>tfoot>tr>th": {
        "border": "1px solid #ddd"
    },
    "table-bordered>thead>tr>td": {
        "border": "1px solid #ddd",
        "borderBottomWidth": 2
    },
    "table-bordered>thead>tr>th": {
        "border": "1px solid #ddd",
        "borderBottomWidth": 2
    },
    "table-striped>tbody>tr:nth-of-type(odd)": {
        "backgroundColor": "#f9f9f9"
    },
    "table-hover>tbody>tr:hover": {
        "backgroundColor": "#f5f5f5"
    },
    "table col[class*=col-]": {
        "position": "static",
        "float": "none",
        "display": "table-column"
    },
    "table td[class*=col-]": {
        "position": "static",
        "float": "none",
        "display": "table-cell"
    },
    "table th[class*=col-]": {
        "position": "static",
        "float": "none",
        "display": "table-cell"
    },
    "table>tbody>tractive>td": {
        "backgroundColor": "#f5f5f5"
    },
    "table>tbody>tractive>th": {
        "backgroundColor": "#f5f5f5"
    },
    "table>tbody>tr>tdactive": {
        "backgroundColor": "#f5f5f5"
    },
    "table>tbody>tr>thactive": {
        "backgroundColor": "#f5f5f5"
    },
    "table>tfoot>tractive>td": {
        "backgroundColor": "#f5f5f5"
    },
    "table>tfoot>tractive>th": {
        "backgroundColor": "#f5f5f5"
    },
    "table>tfoot>tr>tdactive": {
        "backgroundColor": "#f5f5f5"
    },
    "table>tfoot>tr>thactive": {
        "backgroundColor": "#f5f5f5"
    },
    "table>thead>tractive>td": {
        "backgroundColor": "#f5f5f5"
    },
    "table>thead>tractive>th": {
        "backgroundColor": "#f5f5f5"
    },
    "table>thead>tr>tdactive": {
        "backgroundColor": "#f5f5f5"
    },
    "table>thead>tr>thactive": {
        "backgroundColor": "#f5f5f5"
    },
    "table-hover>tbody>tractive:hover>td": {
        "backgroundColor": "#e8e8e8"
    },
    "table-hover>tbody>tractive:hover>th": {
        "backgroundColor": "#e8e8e8"
    },
    "table-hover>tbody>tr:hover>active": {
        "backgroundColor": "#e8e8e8"
    },
    "table-hover>tbody>tr>tdactive:hover": {
        "backgroundColor": "#e8e8e8"
    },
    "table-hover>tbody>tr>thactive:hover": {
        "backgroundColor": "#e8e8e8"
    },
    "table>tbody>trsuccess>td": {
        "backgroundColor": "#dff0d8"
    },
    "table>tbody>trsuccess>th": {
        "backgroundColor": "#dff0d8"
    },
    "table>tbody>tr>tdsuccess": {
        "backgroundColor": "#dff0d8"
    },
    "table>tbody>tr>thsuccess": {
        "backgroundColor": "#dff0d8"
    },
    "table>tfoot>trsuccess>td": {
        "backgroundColor": "#dff0d8"
    },
    "table>tfoot>trsuccess>th": {
        "backgroundColor": "#dff0d8"
    },
    "table>tfoot>tr>tdsuccess": {
        "backgroundColor": "#dff0d8"
    },
    "table>tfoot>tr>thsuccess": {
        "backgroundColor": "#dff0d8"
    },
    "table>thead>trsuccess>td": {
        "backgroundColor": "#dff0d8"
    },
    "table>thead>trsuccess>th": {
        "backgroundColor": "#dff0d8"
    },
    "table>thead>tr>tdsuccess": {
        "backgroundColor": "#dff0d8"
    },
    "table>thead>tr>thsuccess": {
        "backgroundColor": "#dff0d8"
    },
    "table-hover>tbody>trsuccess:hover>td": {
        "backgroundColor": "#d0e9c6"
    },
    "table-hover>tbody>trsuccess:hover>th": {
        "backgroundColor": "#d0e9c6"
    },
    "table-hover>tbody>tr:hover>success": {
        "backgroundColor": "#d0e9c6"
    },
    "table-hover>tbody>tr>tdsuccess:hover": {
        "backgroundColor": "#d0e9c6"
    },
    "table-hover>tbody>tr>thsuccess:hover": {
        "backgroundColor": "#d0e9c6"
    },
    "table>tbody>trinfo>td": {
        "backgroundColor": "#d9edf7"
    },
    "table>tbody>trinfo>th": {
        "backgroundColor": "#d9edf7"
    },
    "table>tbody>tr>tdinfo": {
        "backgroundColor": "#d9edf7"
    },
    "table>tbody>tr>thinfo": {
        "backgroundColor": "#d9edf7"
    },
    "table>tfoot>trinfo>td": {
        "backgroundColor": "#d9edf7"
    },
    "table>tfoot>trinfo>th": {
        "backgroundColor": "#d9edf7"
    },
    "table>tfoot>tr>tdinfo": {
        "backgroundColor": "#d9edf7"
    },
    "table>tfoot>tr>thinfo": {
        "backgroundColor": "#d9edf7"
    },
    "table>thead>trinfo>td": {
        "backgroundColor": "#d9edf7"
    },
    "table>thead>trinfo>th": {
        "backgroundColor": "#d9edf7"
    },
    "table>thead>tr>tdinfo": {
        "backgroundColor": "#d9edf7"
    },
    "table>thead>tr>thinfo": {
        "backgroundColor": "#d9edf7"
    },
    "table-hover>tbody>trinfo:hover>td": {
        "backgroundColor": "#c4e3f3"
    },
    "table-hover>tbody>trinfo:hover>th": {
        "backgroundColor": "#c4e3f3"
    },
    "table-hover>tbody>tr:hover>info": {
        "backgroundColor": "#c4e3f3"
    },
    "table-hover>tbody>tr>tdinfo:hover": {
        "backgroundColor": "#c4e3f3"
    },
    "table-hover>tbody>tr>thinfo:hover": {
        "backgroundColor": "#c4e3f3"
    },
    "table>tbody>trwarning>td": {
        "backgroundColor": "#fcf8e3"
    },
    "table>tbody>trwarning>th": {
        "backgroundColor": "#fcf8e3"
    },
    "table>tbody>tr>tdwarning": {
        "backgroundColor": "#fcf8e3"
    },
    "table>tbody>tr>thwarning": {
        "backgroundColor": "#fcf8e3"
    },
    "table>tfoot>trwarning>td": {
        "backgroundColor": "#fcf8e3"
    },
    "table>tfoot>trwarning>th": {
        "backgroundColor": "#fcf8e3"
    },
    "table>tfoot>tr>tdwarning": {
        "backgroundColor": "#fcf8e3"
    },
    "table>tfoot>tr>thwarning": {
        "backgroundColor": "#fcf8e3"
    },
    "table>thead>trwarning>td": {
        "backgroundColor": "#fcf8e3"
    },
    "table>thead>trwarning>th": {
        "backgroundColor": "#fcf8e3"
    },
    "table>thead>tr>tdwarning": {
        "backgroundColor": "#fcf8e3"
    },
    "table>thead>tr>thwarning": {
        "backgroundColor": "#fcf8e3"
    },
    "table-hover>tbody>trwarning:hover>td": {
        "backgroundColor": "#faf2cc"
    },
    "table-hover>tbody>trwarning:hover>th": {
        "backgroundColor": "#faf2cc"
    },
    "table-hover>tbody>tr:hover>warning": {
        "backgroundColor": "#faf2cc"
    },
    "table-hover>tbody>tr>tdwarning:hover": {
        "backgroundColor": "#faf2cc"
    },
    "table-hover>tbody>tr>thwarning:hover": {
        "backgroundColor": "#faf2cc"
    },
    "table>tbody>trdanger>td": {
        "backgroundColor": "#f2dede"
    },
    "table>tbody>trdanger>th": {
        "backgroundColor": "#f2dede"
    },
    "table>tbody>tr>tddanger": {
        "backgroundColor": "#f2dede"
    },
    "table>tbody>tr>thdanger": {
        "backgroundColor": "#f2dede"
    },
    "table>tfoot>trdanger>td": {
        "backgroundColor": "#f2dede"
    },
    "table>tfoot>trdanger>th": {
        "backgroundColor": "#f2dede"
    },
    "table>tfoot>tr>tddanger": {
        "backgroundColor": "#f2dede"
    },
    "table>tfoot>tr>thdanger": {
        "backgroundColor": "#f2dede"
    },
    "table>thead>trdanger>td": {
        "backgroundColor": "#f2dede"
    },
    "table>thead>trdanger>th": {
        "backgroundColor": "#f2dede"
    },
    "table>thead>tr>tddanger": {
        "backgroundColor": "#f2dede"
    },
    "table>thead>tr>thdanger": {
        "backgroundColor": "#f2dede"
    },
    "table-hover>tbody>trdanger:hover>td": {
        "backgroundColor": "#ebcccc"
    },
    "table-hover>tbody>trdanger:hover>th": {
        "backgroundColor": "#ebcccc"
    },
    "table-hover>tbody>tr:hover>danger": {
        "backgroundColor": "#ebcccc"
    },
    "table-hover>tbody>tr>tddanger:hover": {
        "backgroundColor": "#ebcccc"
    },
    "table-hover>tbody>tr>thdanger:hover": {
        "backgroundColor": "#ebcccc"
    },
    "table-responsive": {
        "overflowX": "auto",
        "minHeight": ".01%"
    },
    "legend": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "display": "block",
        "width": "100%",
        "marginBottom": 22,
        "fontSize": 21,
        "lineHeight": "inherit",
        "color": "#333",
        "borderBottom": "1px solid #e5e5e5"
    },
    "label": {
        "display": "inline",
        "maxWidth": "100%",
        "marginBottom": 5,
        "fontWeight": "700",
        "paddingTop": 0.2,
        "paddingRight": 0.6,
        "paddingBottom": 0.3,
        "paddingLeft": 0.6,
        "fontSize": "75%",
        "lineHeight": 1,
        "color": "#fff",
        "textAlign": "center",
        "whiteSpace": "nowrap",
        "verticalAlign": "baseline",
        "borderRadius": 0.25
    },
    "input[type=file]": {
        "display": "block"
    },
    "input[type=range]": {
        "display": "block",
        "width": "100%"
    },
    "select[multiple]": {
        "height": "auto"
    },
    "select[size]": {
        "height": "auto"
    },
    "input[type=checkbox]:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "input[type=file]:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "input[type=radio]:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "output": {
        "paddingTop": 7,
        "display": "block",
        "fontSize": 14,
        "lineHeight": 1.6,
        "color": "#555"
    },
    "form-control": {
        "display": "block",
        "fontSize": 14,
        "lineHeight": 1.6,
        "color": "#555",
        "width": "100%",
        "height": 36,
        "paddingTop": 6,
        "paddingRight": 12,
        "paddingBottom": 6,
        "paddingLeft": 12,
        "backgroundColor": "#fff",
        "backgroundImage": "none",
        "border": "1px solid #ccd0d2",
        "borderRadius": 4,
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "WebkitTransition": "border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out",
        "transition": "border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out"
    },
    "form-control:focus": {
        "borderColor": "#98cbe8",
        "outline": 0,
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(152,203,232,.6)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(152,203,232,.6)"
    },
    "form-control::-moz-placeholder": {
        "color": "#b1b7ba",
        "opacity": 1
    },
    "form-control:-ms-input-placeholder": {
        "color": "#b1b7ba"
    },
    "form-control::-webkit-input-placeholder": {
        "color": "#b1b7ba"
    },
    "form-control::-ms-expand": {
        "border": 0,
        "backgroundColor": "transparent"
    },
    "form-control[disabled]": {
        "backgroundColor": "#eee",
        "opacity": 1,
        "cursor": "not-allowed"
    },
    "form-control[readonly]": {
        "backgroundColor": "#eee",
        "opacity": 1
    },
    "fieldset[disabled] form-control": {
        "backgroundColor": "#eee",
        "opacity": 1,
        "cursor": "not-allowed"
    },
    "textareaform-control": {
        "height": "auto"
    },
    "form-group": {
        "marginBottom": 15
    },
    "checkbox": {
        "position": "relative",
        "display": "block",
        "marginTop": 10,
        "marginBottom": 10
    },
    "radio": {
        "position": "relative",
        "display": "block",
        "marginTop": 10,
        "marginBottom": 10
    },
    "checkbox label": {
        "minHeight": 22,
        "paddingLeft": 20,
        "marginBottom": 0,
        "fontWeight": "400",
        "cursor": "pointer"
    },
    "radio label": {
        "minHeight": 22,
        "paddingLeft": 20,
        "marginBottom": 0,
        "fontWeight": "400",
        "cursor": "pointer"
    },
    "checkbox-inline input[type=checkbox]": {
        "position": "absolute",
        "marginLeft": -20,
        "marginTop": "4px\\9"
    },
    "checkbox input[type=checkbox]": {
        "position": "absolute",
        "marginLeft": -20,
        "marginTop": "4px\\9"
    },
    "radio-inline input[type=radio]": {
        "position": "absolute",
        "marginLeft": -20,
        "marginTop": "4px\\9"
    },
    "radio input[type=radio]": {
        "position": "absolute",
        "marginLeft": -20,
        "marginTop": "4px\\9"
    },
    "checkbox+checkbox": {
        "marginTop": -5
    },
    "radio+radio": {
        "marginTop": -5
    },
    "checkbox-inline": {
        "position": "relative",
        "display": "inline-block",
        "paddingLeft": 20,
        "marginBottom": 0,
        "verticalAlign": "middle",
        "fontWeight": "400",
        "cursor": "pointer"
    },
    "radio-inline": {
        "position": "relative",
        "display": "inline-block",
        "paddingLeft": 20,
        "marginBottom": 0,
        "verticalAlign": "middle",
        "fontWeight": "400",
        "cursor": "pointer"
    },
    "checkbox-inline+checkbox-inline": {
        "marginTop": 0,
        "marginLeft": 10
    },
    "radio-inline+radio-inline": {
        "marginTop": 0,
        "marginLeft": 10
    },
    "checkbox-inlinedisabled": {
        "cursor": "not-allowed"
    },
    "checkboxdisabled label": {
        "cursor": "not-allowed"
    },
    "radio-inlinedisabled": {
        "cursor": "not-allowed"
    },
    "radiodisabled label": {
        "cursor": "not-allowed"
    },
    "fieldset[disabled] checkbox-inline": {
        "cursor": "not-allowed"
    },
    "fieldset[disabled] checkbox label": {
        "cursor": "not-allowed"
    },
    "fieldset[disabled] radio-inline": {
        "cursor": "not-allowed"
    },
    "fieldset[disabled] radio label": {
        "cursor": "not-allowed"
    },
    "fieldset[disabled] input[type=checkbox]": {
        "cursor": "not-allowed"
    },
    "fieldset[disabled] input[type=radio]": {
        "cursor": "not-allowed"
    },
    "input[type=checkbox]disabled": {
        "cursor": "not-allowed"
    },
    "input[type=checkbox][disabled]": {
        "cursor": "not-allowed"
    },
    "input[type=radio]disabled": {
        "cursor": "not-allowed"
    },
    "input[type=radio][disabled]": {
        "cursor": "not-allowed"
    },
    "form-control-static": {
        "paddingTop": 7,
        "paddingBottom": 7,
        "marginBottom": 0,
        "minHeight": 36
    },
    "form-control-staticinput-lg": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "form-control-staticinput-sm": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "input-group-lg>form-control-staticform-control": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "input-group-lg>form-control-staticinput-group-addon": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "input-group-lg>input-group-btn>form-control-staticbtn": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "input-group-sm>form-control-staticform-control": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "input-group-sm>form-control-staticinput-group-addon": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "input-group-sm>input-group-btn>form-control-staticbtn": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "input-group-sm>form-control": {
        "height": 30,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 12,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "input-group-sm>input-group-addon": {
        "height": 30,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 12,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "input-group-sm>input-group-btn>btn": {
        "height": 30,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 12,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "input-sm": {
        "height": 30,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 12,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "input-group-sm>input-group-btn>selectbtn": {
        "height": 30,
        "lineHeight": 30
    },
    "input-group-sm>selectform-control": {
        "height": 30,
        "lineHeight": 30
    },
    "input-group-sm>selectinput-group-addon": {
        "height": 30,
        "lineHeight": 30
    },
    "selectinput-sm": {
        "height": 30,
        "lineHeight": 30
    },
    "input-group-sm>input-group-btn>select[multiple]btn": {
        "height": "auto"
    },
    "input-group-sm>input-group-btn>textareabtn": {
        "height": "auto"
    },
    "input-group-sm>select[multiple]form-control": {
        "height": "auto"
    },
    "input-group-sm>select[multiple]input-group-addon": {
        "height": "auto"
    },
    "input-group-sm>textareaform-control": {
        "height": "auto"
    },
    "input-group-sm>textareainput-group-addon": {
        "height": "auto"
    },
    "select[multiple]input-sm": {
        "height": "auto"
    },
    "textareainput-sm": {
        "height": "auto"
    },
    "form-group-sm form-control": {
        "height": 30,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 12,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "form-group-sm selectform-control": {
        "height": 30,
        "lineHeight": 30
    },
    "form-group-sm select[multiple]form-control": {
        "height": "auto"
    },
    "form-group-sm textareaform-control": {
        "height": "auto"
    },
    "form-group-sm form-control-static": {
        "height": 30,
        "minHeight": 34,
        "paddingTop": 6,
        "paddingRight": 10,
        "paddingBottom": 6,
        "paddingLeft": 10,
        "fontSize": 12,
        "lineHeight": 1.5
    },
    "input-group-lg>form-control": {
        "height": 46,
        "paddingTop": 10,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.3333333,
        "borderRadius": 6
    },
    "input-group-lg>input-group-addon": {
        "height": 46,
        "paddingTop": 10,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.3333333,
        "borderRadius": 6
    },
    "input-group-lg>input-group-btn>btn": {
        "height": 46,
        "paddingTop": 10,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.3333333,
        "borderRadius": 6
    },
    "input-lg": {
        "height": 46,
        "paddingTop": 10,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.3333333,
        "borderRadius": 6
    },
    "input-group-lg>input-group-btn>selectbtn": {
        "height": 46,
        "lineHeight": 46
    },
    "input-group-lg>selectform-control": {
        "height": 46,
        "lineHeight": 46
    },
    "input-group-lg>selectinput-group-addon": {
        "height": 46,
        "lineHeight": 46
    },
    "selectinput-lg": {
        "height": 46,
        "lineHeight": 46
    },
    "input-group-lg>input-group-btn>select[multiple]btn": {
        "height": "auto"
    },
    "input-group-lg>input-group-btn>textareabtn": {
        "height": "auto"
    },
    "input-group-lg>select[multiple]form-control": {
        "height": "auto"
    },
    "input-group-lg>select[multiple]input-group-addon": {
        "height": "auto"
    },
    "input-group-lg>textareaform-control": {
        "height": "auto"
    },
    "input-group-lg>textareainput-group-addon": {
        "height": "auto"
    },
    "select[multiple]input-lg": {
        "height": "auto"
    },
    "textareainput-lg": {
        "height": "auto"
    },
    "form-group-lg form-control": {
        "height": 46,
        "paddingTop": 10,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.3333333,
        "borderRadius": 6
    },
    "form-group-lg selectform-control": {
        "height": 46,
        "lineHeight": 46
    },
    "form-group-lg select[multiple]form-control": {
        "height": "auto"
    },
    "form-group-lg textareaform-control": {
        "height": "auto"
    },
    "form-group-lg form-control-static": {
        "height": 46,
        "minHeight": 40,
        "paddingTop": 11,
        "paddingRight": 16,
        "paddingBottom": 11,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.3333333
    },
    "has-feedback": {
        "position": "relative"
    },
    "has-feedback form-control": {
        "paddingRight": 45
    },
    "form-control-feedback": {
        "position": "absolute",
        "top": 0,
        "right": 0,
        "zIndex": 2,
        "display": "block",
        "width": 36,
        "height": 36,
        "lineHeight": 36,
        "textAlign": "center",
        "pointerEvents": "none"
    },
    "form-group-lg form-control+form-control-feedback": {
        "width": 46,
        "height": 46,
        "lineHeight": 46
    },
    "input-group-lg+form-control-feedback": {
        "width": 46,
        "height": 46,
        "lineHeight": 46
    },
    "input-group-lg>form-control+form-control-feedback": {
        "width": 46,
        "height": 46,
        "lineHeight": 46
    },
    "input-group-lg>input-group-addon+form-control-feedback": {
        "width": 46,
        "height": 46,
        "lineHeight": 46
    },
    "input-group-lg>input-group-btn>btn+form-control-feedback": {
        "width": 46,
        "height": 46,
        "lineHeight": 46
    },
    "input-lg+form-control-feedback": {
        "width": 46,
        "height": 46,
        "lineHeight": 46
    },
    "form-group-sm form-control+form-control-feedback": {
        "width": 30,
        "height": 30,
        "lineHeight": 30
    },
    "input-group-sm+form-control-feedback": {
        "width": 30,
        "height": 30,
        "lineHeight": 30
    },
    "input-group-sm>form-control+form-control-feedback": {
        "width": 30,
        "height": 30,
        "lineHeight": 30
    },
    "input-group-sm>input-group-addon+form-control-feedback": {
        "width": 30,
        "height": 30,
        "lineHeight": 30
    },
    "input-group-sm>input-group-btn>btn+form-control-feedback": {
        "width": 30,
        "height": 30,
        "lineHeight": 30
    },
    "input-sm+form-control-feedback": {
        "width": 30,
        "height": 30,
        "lineHeight": 30
    },
    "has-success checkbox": {
        "color": "#3c763d"
    },
    "has-success checkbox-inline": {
        "color": "#3c763d"
    },
    "has-successcheckbox-inline label": {
        "color": "#3c763d"
    },
    "has-successcheckbox label": {
        "color": "#3c763d"
    },
    "has-success control-label": {
        "color": "#3c763d"
    },
    "has-success help-block": {
        "color": "#3c763d"
    },
    "has-success radio": {
        "color": "#3c763d"
    },
    "has-success radio-inline": {
        "color": "#3c763d"
    },
    "has-successradio-inline label": {
        "color": "#3c763d"
    },
    "has-successradio label": {
        "color": "#3c763d"
    },
    "has-success form-control": {
        "borderColor": "#3c763d",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)"
    },
    "has-success form-control:focus": {
        "borderColor": "#2b542c",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168"
    },
    "has-success input-group-addon": {
        "color": "#3c763d",
        "borderColor": "#3c763d",
        "backgroundColor": "#dff0d8"
    },
    "has-success form-control-feedback": {
        "color": "#3c763d"
    },
    "has-warning checkbox": {
        "color": "#8a6d3b"
    },
    "has-warning checkbox-inline": {
        "color": "#8a6d3b"
    },
    "has-warningcheckbox-inline label": {
        "color": "#8a6d3b"
    },
    "has-warningcheckbox label": {
        "color": "#8a6d3b"
    },
    "has-warning control-label": {
        "color": "#8a6d3b"
    },
    "has-warning help-block": {
        "color": "#8a6d3b"
    },
    "has-warning radio": {
        "color": "#8a6d3b"
    },
    "has-warning radio-inline": {
        "color": "#8a6d3b"
    },
    "has-warningradio-inline label": {
        "color": "#8a6d3b"
    },
    "has-warningradio label": {
        "color": "#8a6d3b"
    },
    "has-warning form-control": {
        "borderColor": "#8a6d3b",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)"
    },
    "has-warning form-control:focus": {
        "borderColor": "#66512c",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b"
    },
    "has-warning input-group-addon": {
        "color": "#8a6d3b",
        "borderColor": "#8a6d3b",
        "backgroundColor": "#fcf8e3"
    },
    "has-warning form-control-feedback": {
        "color": "#8a6d3b"
    },
    "has-error checkbox": {
        "color": "#a94442"
    },
    "has-error checkbox-inline": {
        "color": "#a94442"
    },
    "has-errorcheckbox-inline label": {
        "color": "#a94442"
    },
    "has-errorcheckbox label": {
        "color": "#a94442"
    },
    "has-error control-label": {
        "color": "#a94442"
    },
    "has-error help-block": {
        "color": "#a94442"
    },
    "has-error radio": {
        "color": "#a94442"
    },
    "has-error radio-inline": {
        "color": "#a94442"
    },
    "has-errorradio-inline label": {
        "color": "#a94442"
    },
    "has-errorradio label": {
        "color": "#a94442"
    },
    "has-error form-control": {
        "borderColor": "#a94442",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075)"
    },
    "has-error form-control:focus": {
        "borderColor": "#843534",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483"
    },
    "has-error input-group-addon": {
        "color": "#a94442",
        "borderColor": "#a94442",
        "backgroundColor": "#f2dede"
    },
    "has-error form-control-feedback": {
        "color": "#a94442"
    },
    "has-feedback label~form-control-feedback": {
        "top": 27
    },
    "has-feedback labelsr-only~form-control-feedback": {
        "top": 0
    },
    "help-block": {
        "display": "block",
        "marginTop": 5,
        "marginBottom": 10,
        "color": "#a4aaae"
    },
    "form-horizontal checkbox": {
        "marginTop": 0,
        "marginBottom": 0,
        "paddingTop": 7,
        "minHeight": 29
    },
    "form-horizontal checkbox-inline": {
        "marginTop": 0,
        "marginBottom": 0,
        "paddingTop": 7
    },
    "form-horizontal radio": {
        "marginTop": 0,
        "marginBottom": 0,
        "paddingTop": 7,
        "minHeight": 29
    },
    "form-horizontal radio-inline": {
        "marginTop": 0,
        "marginBottom": 0,
        "paddingTop": 7
    },
    "form-horizontal form-group": {
        "marginLeft": -15,
        "marginRight": -15
    },
    "form-horizontal form-group:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "form-horizontal form-group:before": {
        "content": " ",
        "display": "table"
    },
    "form-horizontal has-feedback form-control-feedback": {
        "right": 15
    },
    "btn": {
        "display": "inline-block",
        "marginBottom": 0,
        "fontWeight": "400",
        "textAlign": "center",
        "verticalAlign": "middle",
        "MsTouchAction": "manipulation",
        "touchAction": "manipulation",
        "cursor": "pointer",
        "backgroundImage": "none",
        "border": "1px solid transparent",
        "whiteSpace": "nowrap",
        "paddingTop": 6,
        "paddingRight": 12,
        "paddingBottom": 6,
        "paddingLeft": 12,
        "fontSize": 14,
        "lineHeight": 1.6,
        "borderRadius": 4,
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none"
    },
    "btnactivefocus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "btnactive:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "btnfocus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2,
        "color": "#636b6f",
        "textDecoration": "none"
    },
    "btn:activefocus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "btn:active:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "btn:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2,
        "color": "#636b6f",
        "textDecoration": "none"
    },
    "btn:hover": {
        "color": "#636b6f",
        "textDecoration": "none"
    },
    "btnactive": {
        "outline": 0,
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,.125)"
    },
    "btn:active": {
        "outline": 0,
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,.125)"
    },
    "btndisabled": {
        "cursor": "not-allowed",
        "opacity": 0.65,
        "filter": "alpha(opacity=65)",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "btn[disabled]": {
        "cursor": "not-allowed",
        "opacity": 0.65,
        "filter": "alpha(opacity=65)",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "fieldset[disabled] btn": {
        "cursor": "not-allowed",
        "opacity": 0.65,
        "filter": "alpha(opacity=65)",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "abtndisabled": {
        "pointerEvents": "none"
    },
    "fieldset[disabled] abtn": {
        "pointerEvents": "none"
    },
    "btn-default": {
        "color": "#636b6f",
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-defaultfocus": {
        "color": "#636b6f",
        "backgroundColor": "#e6e5e5",
        "borderColor": "#8c8c8c"
    },
    "btn-default:focus": {
        "color": "#636b6f",
        "backgroundColor": "#e6e5e5",
        "borderColor": "#8c8c8c"
    },
    "btn-defaultactive": {
        "color": "#636b6f",
        "backgroundColor": "#e6e5e5",
        "borderColor": "#adadad",
        "backgroundImage": "none"
    },
    "btn-default:active": {
        "color": "#636b6f",
        "backgroundColor": "#e6e5e5",
        "borderColor": "#adadad",
        "backgroundImage": "none"
    },
    "btn-default:hover": {
        "color": "#636b6f",
        "backgroundColor": "#e6e5e5",
        "borderColor": "#adadad"
    },
    "open>btn-defaultdropdown-toggle": {
        "color": "#636b6f",
        "backgroundColor": "#e6e5e5",
        "borderColor": "#adadad",
        "backgroundImage": "none"
    },
    "btn-defaultactivefocus": {
        "color": "#636b6f",
        "backgroundColor": "#d4d4d4",
        "borderColor": "#8c8c8c"
    },
    "btn-defaultactive:focus": {
        "color": "#636b6f",
        "backgroundColor": "#d4d4d4",
        "borderColor": "#8c8c8c"
    },
    "btn-defaultactive:hover": {
        "color": "#636b6f",
        "backgroundColor": "#d4d4d4",
        "borderColor": "#8c8c8c"
    },
    "btn-default:activefocus": {
        "color": "#636b6f",
        "backgroundColor": "#d4d4d4",
        "borderColor": "#8c8c8c"
    },
    "btn-default:active:focus": {
        "color": "#636b6f",
        "backgroundColor": "#d4d4d4",
        "borderColor": "#8c8c8c"
    },
    "btn-default:active:hover": {
        "color": "#636b6f",
        "backgroundColor": "#d4d4d4",
        "borderColor": "#8c8c8c"
    },
    "open>btn-defaultdropdown-togglefocus": {
        "color": "#636b6f",
        "backgroundColor": "#d4d4d4",
        "borderColor": "#8c8c8c"
    },
    "open>btn-defaultdropdown-toggle:focus": {
        "color": "#636b6f",
        "backgroundColor": "#d4d4d4",
        "borderColor": "#8c8c8c"
    },
    "open>btn-defaultdropdown-toggle:hover": {
        "color": "#636b6f",
        "backgroundColor": "#d4d4d4",
        "borderColor": "#8c8c8c"
    },
    "btn-defaultdisabledfocus": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-defaultdisabled:focus": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-defaultdisabled:hover": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-default[disabled]focus": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-default[disabled]:focus": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-default[disabled]:hover": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "fieldset[disabled] btn-defaultfocus": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "fieldset[disabled] btn-default:focus": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "fieldset[disabled] btn-default:hover": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-default badge": {
        "color": "#fff",
        "backgroundColor": "#636b6f"
    },
    "btn-primary": {
        "color": "#fff",
        "backgroundColor": "#3097d1",
        "borderColor": "#2a88bd"
    },
    "btn-primaryfocus": {
        "color": "#fff",
        "backgroundColor": "#2579a9",
        "borderColor": "#133d55"
    },
    "btn-primary:focus": {
        "color": "#fff",
        "backgroundColor": "#2579a9",
        "borderColor": "#133d55"
    },
    "btn-primaryactive": {
        "color": "#fff",
        "backgroundColor": "#2579a9",
        "borderColor": "#1f648b",
        "backgroundImage": "none"
    },
    "btn-primary:active": {
        "color": "#fff",
        "backgroundColor": "#2579a9",
        "borderColor": "#1f648b",
        "backgroundImage": "none"
    },
    "btn-primary:hover": {
        "color": "#fff",
        "backgroundColor": "#2579a9",
        "borderColor": "#1f648b"
    },
    "open>btn-primarydropdown-toggle": {
        "color": "#fff",
        "backgroundColor": "#2579a9",
        "borderColor": "#1f648b",
        "backgroundImage": "none"
    },
    "btn-primaryactivefocus": {
        "color": "#fff",
        "backgroundColor": "#1f648b",
        "borderColor": "#133d55"
    },
    "btn-primaryactive:focus": {
        "color": "#fff",
        "backgroundColor": "#1f648b",
        "borderColor": "#133d55"
    },
    "btn-primaryactive:hover": {
        "color": "#fff",
        "backgroundColor": "#1f648b",
        "borderColor": "#133d55"
    },
    "btn-primary:activefocus": {
        "color": "#fff",
        "backgroundColor": "#1f648b",
        "borderColor": "#133d55"
    },
    "btn-primary:active:focus": {
        "color": "#fff",
        "backgroundColor": "#1f648b",
        "borderColor": "#133d55"
    },
    "btn-primary:active:hover": {
        "color": "#fff",
        "backgroundColor": "#1f648b",
        "borderColor": "#133d55"
    },
    "open>btn-primarydropdown-togglefocus": {
        "color": "#fff",
        "backgroundColor": "#1f648b",
        "borderColor": "#133d55"
    },
    "open>btn-primarydropdown-toggle:focus": {
        "color": "#fff",
        "backgroundColor": "#1f648b",
        "borderColor": "#133d55"
    },
    "open>btn-primarydropdown-toggle:hover": {
        "color": "#fff",
        "backgroundColor": "#1f648b",
        "borderColor": "#133d55"
    },
    "btn-primarydisabledfocus": {
        "backgroundColor": "#3097d1",
        "borderColor": "#2a88bd"
    },
    "btn-primarydisabled:focus": {
        "backgroundColor": "#3097d1",
        "borderColor": "#2a88bd"
    },
    "btn-primarydisabled:hover": {
        "backgroundColor": "#3097d1",
        "borderColor": "#2a88bd"
    },
    "btn-primary[disabled]focus": {
        "backgroundColor": "#3097d1",
        "borderColor": "#2a88bd"
    },
    "btn-primary[disabled]:focus": {
        "backgroundColor": "#3097d1",
        "borderColor": "#2a88bd"
    },
    "btn-primary[disabled]:hover": {
        "backgroundColor": "#3097d1",
        "borderColor": "#2a88bd"
    },
    "fieldset[disabled] btn-primaryfocus": {
        "backgroundColor": "#3097d1",
        "borderColor": "#2a88bd"
    },
    "fieldset[disabled] btn-primary:focus": {
        "backgroundColor": "#3097d1",
        "borderColor": "#2a88bd"
    },
    "fieldset[disabled] btn-primary:hover": {
        "backgroundColor": "#3097d1",
        "borderColor": "#2a88bd"
    },
    "btn-primary badge": {
        "color": "#3097d1",
        "backgroundColor": "#fff"
    },
    "btn-success": {
        "color": "#fff",
        "backgroundColor": "#2ab27b",
        "borderColor": "#259d6d"
    },
    "btn-successfocus": {
        "color": "#fff",
        "backgroundColor": "#20895e",
        "borderColor": "#0d3625"
    },
    "btn-success:focus": {
        "color": "#fff",
        "backgroundColor": "#20895e",
        "borderColor": "#0d3625"
    },
    "btn-successactive": {
        "color": "#fff",
        "backgroundColor": "#20895e",
        "borderColor": "#196c4b",
        "backgroundImage": "none"
    },
    "btn-success:active": {
        "color": "#fff",
        "backgroundColor": "#20895e",
        "borderColor": "#196c4b",
        "backgroundImage": "none"
    },
    "btn-success:hover": {
        "color": "#fff",
        "backgroundColor": "#20895e",
        "borderColor": "#196c4b"
    },
    "open>btn-successdropdown-toggle": {
        "color": "#fff",
        "backgroundColor": "#20895e",
        "borderColor": "#196c4b",
        "backgroundImage": "none"
    },
    "btn-successactivefocus": {
        "color": "#fff",
        "backgroundColor": "#196c4b",
        "borderColor": "#0d3625"
    },
    "btn-successactive:focus": {
        "color": "#fff",
        "backgroundColor": "#196c4b",
        "borderColor": "#0d3625"
    },
    "btn-successactive:hover": {
        "color": "#fff",
        "backgroundColor": "#196c4b",
        "borderColor": "#0d3625"
    },
    "btn-success:activefocus": {
        "color": "#fff",
        "backgroundColor": "#196c4b",
        "borderColor": "#0d3625"
    },
    "btn-success:active:focus": {
        "color": "#fff",
        "backgroundColor": "#196c4b",
        "borderColor": "#0d3625"
    },
    "btn-success:active:hover": {
        "color": "#fff",
        "backgroundColor": "#196c4b",
        "borderColor": "#0d3625"
    },
    "open>btn-successdropdown-togglefocus": {
        "color": "#fff",
        "backgroundColor": "#196c4b",
        "borderColor": "#0d3625"
    },
    "open>btn-successdropdown-toggle:focus": {
        "color": "#fff",
        "backgroundColor": "#196c4b",
        "borderColor": "#0d3625"
    },
    "open>btn-successdropdown-toggle:hover": {
        "color": "#fff",
        "backgroundColor": "#196c4b",
        "borderColor": "#0d3625"
    },
    "btn-successdisabledfocus": {
        "backgroundColor": "#2ab27b",
        "borderColor": "#259d6d"
    },
    "btn-successdisabled:focus": {
        "backgroundColor": "#2ab27b",
        "borderColor": "#259d6d"
    },
    "btn-successdisabled:hover": {
        "backgroundColor": "#2ab27b",
        "borderColor": "#259d6d"
    },
    "btn-success[disabled]focus": {
        "backgroundColor": "#2ab27b",
        "borderColor": "#259d6d"
    },
    "btn-success[disabled]:focus": {
        "backgroundColor": "#2ab27b",
        "borderColor": "#259d6d"
    },
    "btn-success[disabled]:hover": {
        "backgroundColor": "#2ab27b",
        "borderColor": "#259d6d"
    },
    "fieldset[disabled] btn-successfocus": {
        "backgroundColor": "#2ab27b",
        "borderColor": "#259d6d"
    },
    "fieldset[disabled] btn-success:focus": {
        "backgroundColor": "#2ab27b",
        "borderColor": "#259d6d"
    },
    "fieldset[disabled] btn-success:hover": {
        "backgroundColor": "#2ab27b",
        "borderColor": "#259d6d"
    },
    "btn-success badge": {
        "color": "#2ab27b",
        "backgroundColor": "#fff"
    },
    "btn-info": {
        "color": "#fff",
        "backgroundColor": "#8eb4cb",
        "borderColor": "#7da8c3"
    },
    "btn-infofocus": {
        "color": "#fff",
        "backgroundColor": "#6b9dbb",
        "borderColor": "#3d6983"
    },
    "btn-info:focus": {
        "color": "#fff",
        "backgroundColor": "#6b9dbb",
        "borderColor": "#3d6983"
    },
    "btn-infoactive": {
        "color": "#fff",
        "backgroundColor": "#6b9dbb",
        "borderColor": "#538db0",
        "backgroundImage": "none"
    },
    "btn-info:active": {
        "color": "#fff",
        "backgroundColor": "#6b9dbb",
        "borderColor": "#538db0",
        "backgroundImage": "none"
    },
    "btn-info:hover": {
        "color": "#fff",
        "backgroundColor": "#6b9dbb",
        "borderColor": "#538db0"
    },
    "open>btn-infodropdown-toggle": {
        "color": "#fff",
        "backgroundColor": "#6b9dbb",
        "borderColor": "#538db0",
        "backgroundImage": "none"
    },
    "btn-infoactivefocus": {
        "color": "#fff",
        "backgroundColor": "#538db0",
        "borderColor": "#3d6983"
    },
    "btn-infoactive:focus": {
        "color": "#fff",
        "backgroundColor": "#538db0",
        "borderColor": "#3d6983"
    },
    "btn-infoactive:hover": {
        "color": "#fff",
        "backgroundColor": "#538db0",
        "borderColor": "#3d6983"
    },
    "btn-info:activefocus": {
        "color": "#fff",
        "backgroundColor": "#538db0",
        "borderColor": "#3d6983"
    },
    "btn-info:active:focus": {
        "color": "#fff",
        "backgroundColor": "#538db0",
        "borderColor": "#3d6983"
    },
    "btn-info:active:hover": {
        "color": "#fff",
        "backgroundColor": "#538db0",
        "borderColor": "#3d6983"
    },
    "open>btn-infodropdown-togglefocus": {
        "color": "#fff",
        "backgroundColor": "#538db0",
        "borderColor": "#3d6983"
    },
    "open>btn-infodropdown-toggle:focus": {
        "color": "#fff",
        "backgroundColor": "#538db0",
        "borderColor": "#3d6983"
    },
    "open>btn-infodropdown-toggle:hover": {
        "color": "#fff",
        "backgroundColor": "#538db0",
        "borderColor": "#3d6983"
    },
    "btn-infodisabledfocus": {
        "backgroundColor": "#8eb4cb",
        "borderColor": "#7da8c3"
    },
    "btn-infodisabled:focus": {
        "backgroundColor": "#8eb4cb",
        "borderColor": "#7da8c3"
    },
    "btn-infodisabled:hover": {
        "backgroundColor": "#8eb4cb",
        "borderColor": "#7da8c3"
    },
    "btn-info[disabled]focus": {
        "backgroundColor": "#8eb4cb",
        "borderColor": "#7da8c3"
    },
    "btn-info[disabled]:focus": {
        "backgroundColor": "#8eb4cb",
        "borderColor": "#7da8c3"
    },
    "btn-info[disabled]:hover": {
        "backgroundColor": "#8eb4cb",
        "borderColor": "#7da8c3"
    },
    "fieldset[disabled] btn-infofocus": {
        "backgroundColor": "#8eb4cb",
        "borderColor": "#7da8c3"
    },
    "fieldset[disabled] btn-info:focus": {
        "backgroundColor": "#8eb4cb",
        "borderColor": "#7da8c3"
    },
    "fieldset[disabled] btn-info:hover": {
        "backgroundColor": "#8eb4cb",
        "borderColor": "#7da8c3"
    },
    "btn-info badge": {
        "color": "#8eb4cb",
        "backgroundColor": "#fff"
    },
    "btn-warning": {
        "color": "#fff",
        "backgroundColor": "#cbb956",
        "borderColor": "#c5b143"
    },
    "btn-warningfocus": {
        "color": "#fff",
        "backgroundColor": "#b6a338",
        "borderColor": "#685d20"
    },
    "btn-warning:focus": {
        "color": "#fff",
        "backgroundColor": "#b6a338",
        "borderColor": "#685d20"
    },
    "btn-warningactive": {
        "color": "#fff",
        "backgroundColor": "#b6a338",
        "borderColor": "#9b8a30",
        "backgroundImage": "none"
    },
    "btn-warning:active": {
        "color": "#fff",
        "backgroundColor": "#b6a338",
        "borderColor": "#9b8a30",
        "backgroundImage": "none"
    },
    "btn-warning:hover": {
        "color": "#fff",
        "backgroundColor": "#b6a338",
        "borderColor": "#9b8a30"
    },
    "open>btn-warningdropdown-toggle": {
        "color": "#fff",
        "backgroundColor": "#b6a338",
        "borderColor": "#9b8a30",
        "backgroundImage": "none"
    },
    "btn-warningactivefocus": {
        "color": "#fff",
        "backgroundColor": "#9b8a30",
        "borderColor": "#685d20"
    },
    "btn-warningactive:focus": {
        "color": "#fff",
        "backgroundColor": "#9b8a30",
        "borderColor": "#685d20"
    },
    "btn-warningactive:hover": {
        "color": "#fff",
        "backgroundColor": "#9b8a30",
        "borderColor": "#685d20"
    },
    "btn-warning:activefocus": {
        "color": "#fff",
        "backgroundColor": "#9b8a30",
        "borderColor": "#685d20"
    },
    "btn-warning:active:focus": {
        "color": "#fff",
        "backgroundColor": "#9b8a30",
        "borderColor": "#685d20"
    },
    "btn-warning:active:hover": {
        "color": "#fff",
        "backgroundColor": "#9b8a30",
        "borderColor": "#685d20"
    },
    "open>btn-warningdropdown-togglefocus": {
        "color": "#fff",
        "backgroundColor": "#9b8a30",
        "borderColor": "#685d20"
    },
    "open>btn-warningdropdown-toggle:focus": {
        "color": "#fff",
        "backgroundColor": "#9b8a30",
        "borderColor": "#685d20"
    },
    "open>btn-warningdropdown-toggle:hover": {
        "color": "#fff",
        "backgroundColor": "#9b8a30",
        "borderColor": "#685d20"
    },
    "btn-warningdisabledfocus": {
        "backgroundColor": "#cbb956",
        "borderColor": "#c5b143"
    },
    "btn-warningdisabled:focus": {
        "backgroundColor": "#cbb956",
        "borderColor": "#c5b143"
    },
    "btn-warningdisabled:hover": {
        "backgroundColor": "#cbb956",
        "borderColor": "#c5b143"
    },
    "btn-warning[disabled]focus": {
        "backgroundColor": "#cbb956",
        "borderColor": "#c5b143"
    },
    "btn-warning[disabled]:focus": {
        "backgroundColor": "#cbb956",
        "borderColor": "#c5b143"
    },
    "btn-warning[disabled]:hover": {
        "backgroundColor": "#cbb956",
        "borderColor": "#c5b143"
    },
    "fieldset[disabled] btn-warningfocus": {
        "backgroundColor": "#cbb956",
        "borderColor": "#c5b143"
    },
    "fieldset[disabled] btn-warning:focus": {
        "backgroundColor": "#cbb956",
        "borderColor": "#c5b143"
    },
    "fieldset[disabled] btn-warning:hover": {
        "backgroundColor": "#cbb956",
        "borderColor": "#c5b143"
    },
    "btn-warning badge": {
        "color": "#cbb956",
        "backgroundColor": "#fff"
    },
    "btn-danger": {
        "color": "#fff",
        "backgroundColor": "#bf5329",
        "borderColor": "#aa4a24"
    },
    "btn-dangerfocus": {
        "color": "#fff",
        "backgroundColor": "#954120",
        "borderColor": "#411c0e"
    },
    "btn-danger:focus": {
        "color": "#fff",
        "backgroundColor": "#954120",
        "borderColor": "#411c0e"
    },
    "btn-dangeractive": {
        "color": "#fff",
        "backgroundColor": "#954120",
        "borderColor": "#78341a",
        "backgroundImage": "none"
    },
    "btn-danger:active": {
        "color": "#fff",
        "backgroundColor": "#954120",
        "borderColor": "#78341a",
        "backgroundImage": "none"
    },
    "btn-danger:hover": {
        "color": "#fff",
        "backgroundColor": "#954120",
        "borderColor": "#78341a"
    },
    "open>btn-dangerdropdown-toggle": {
        "color": "#fff",
        "backgroundColor": "#954120",
        "borderColor": "#78341a",
        "backgroundImage": "none"
    },
    "btn-dangeractivefocus": {
        "color": "#fff",
        "backgroundColor": "#78341a",
        "borderColor": "#411c0e"
    },
    "btn-dangeractive:focus": {
        "color": "#fff",
        "backgroundColor": "#78341a",
        "borderColor": "#411c0e"
    },
    "btn-dangeractive:hover": {
        "color": "#fff",
        "backgroundColor": "#78341a",
        "borderColor": "#411c0e"
    },
    "btn-danger:activefocus": {
        "color": "#fff",
        "backgroundColor": "#78341a",
        "borderColor": "#411c0e"
    },
    "btn-danger:active:focus": {
        "color": "#fff",
        "backgroundColor": "#78341a",
        "borderColor": "#411c0e"
    },
    "btn-danger:active:hover": {
        "color": "#fff",
        "backgroundColor": "#78341a",
        "borderColor": "#411c0e"
    },
    "open>btn-dangerdropdown-togglefocus": {
        "color": "#fff",
        "backgroundColor": "#78341a",
        "borderColor": "#411c0e"
    },
    "open>btn-dangerdropdown-toggle:focus": {
        "color": "#fff",
        "backgroundColor": "#78341a",
        "borderColor": "#411c0e"
    },
    "open>btn-dangerdropdown-toggle:hover": {
        "color": "#fff",
        "backgroundColor": "#78341a",
        "borderColor": "#411c0e"
    },
    "btn-dangerdisabledfocus": {
        "backgroundColor": "#bf5329",
        "borderColor": "#aa4a24"
    },
    "btn-dangerdisabled:focus": {
        "backgroundColor": "#bf5329",
        "borderColor": "#aa4a24"
    },
    "btn-dangerdisabled:hover": {
        "backgroundColor": "#bf5329",
        "borderColor": "#aa4a24"
    },
    "btn-danger[disabled]focus": {
        "backgroundColor": "#bf5329",
        "borderColor": "#aa4a24"
    },
    "btn-danger[disabled]:focus": {
        "backgroundColor": "#bf5329",
        "borderColor": "#aa4a24"
    },
    "btn-danger[disabled]:hover": {
        "backgroundColor": "#bf5329",
        "borderColor": "#aa4a24"
    },
    "fieldset[disabled] btn-dangerfocus": {
        "backgroundColor": "#bf5329",
        "borderColor": "#aa4a24"
    },
    "fieldset[disabled] btn-danger:focus": {
        "backgroundColor": "#bf5329",
        "borderColor": "#aa4a24"
    },
    "fieldset[disabled] btn-danger:hover": {
        "backgroundColor": "#bf5329",
        "borderColor": "#aa4a24"
    },
    "btn-danger badge": {
        "color": "#bf5329",
        "backgroundColor": "#fff"
    },
    "btn-link": {
        "color": "#3097d1",
        "fontWeight": "400",
        "borderRadius": 0,
        "backgroundColor": "transparent",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "borderColor": "transparent"
    },
    "btn-linkactive": {
        "backgroundColor": "transparent",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "btn-link:active": {
        "backgroundColor": "transparent",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "borderColor": "transparent"
    },
    "btn-link[disabled]": {
        "backgroundColor": "transparent",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "fieldset[disabled] btn-link": {
        "backgroundColor": "transparent",
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "btn-link:focus": {
        "borderColor": "transparent",
        "color": "#216a94",
        "textDecoration": "underline",
        "backgroundColor": "transparent"
    },
    "btn-link:hover": {
        "borderColor": "transparent",
        "color": "#216a94",
        "textDecoration": "underline",
        "backgroundColor": "transparent"
    },
    "btn-link[disabled]:focus": {
        "color": "#777",
        "textDecoration": "none"
    },
    "btn-link[disabled]:hover": {
        "color": "#777",
        "textDecoration": "none"
    },
    "fieldset[disabled] btn-link:focus": {
        "color": "#777",
        "textDecoration": "none"
    },
    "fieldset[disabled] btn-link:hover": {
        "color": "#777",
        "textDecoration": "none"
    },
    "btn-group-lg>btn": {
        "paddingTop": 10,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.3333333,
        "borderRadius": 6
    },
    "btn-lg": {
        "paddingTop": 10,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.3333333,
        "borderRadius": 6
    },
    "btn-group-sm>btn": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 12,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "btn-sm": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 12,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "btn-group-xs>btn": {
        "paddingTop": 1,
        "paddingRight": 5,
        "paddingBottom": 1,
        "paddingLeft": 5,
        "fontSize": 12,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "btn-xs": {
        "paddingTop": 1,
        "paddingRight": 5,
        "paddingBottom": 1,
        "paddingLeft": 5,
        "fontSize": 12,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "btn-block": {
        "display": "block",
        "width": "100%"
    },
    "btn-block+btn-block": {
        "marginTop": 5
    },
    "input[type=button]btn-block": {
        "width": "100%"
    },
    "input[type=reset]btn-block": {
        "width": "100%"
    },
    "input[type=submit]btn-block": {
        "width": "100%"
    },
    "fade": {
        "opacity": 0,
        "WebkitTransition": "opacity .15s linear",
        "transition": "opacity .15s linear"
    },
    "fadein": {
        "opacity": 1
    },
    "collapse": {
        "display": "none"
    },
    "collapsein": {
        "display": "block"
    },
    "trcollapsein": {
        "display": "table-row"
    },
    "tbodycollapsein": {
        "display": "table-row-group"
    },
    "collapsing": {
        "position": "relative",
        "height": 0,
        "overflow": "hidden",
        "WebkitTransitionProperty": "height,visibility",
        "transitionProperty": "height,visibility",
        "WebkitTransitionDuration": ".35s",
        "transitionDuration": ".35s",
        "WebkitTransitionTimingFunction": "ease",
        "transitionTimingFunction": "ease"
    },
    "caret": {
        "display": "inline-block",
        "width": 0,
        "height": 0,
        "marginLeft": 2,
        "verticalAlign": "middle",
        "borderTop": "4px solid\\9",
        "borderRight": "4px solid transparent",
        "borderLeft": "4px solid transparent"
    },
    "dropdown": {
        "position": "relative"
    },
    "dropup": {
        "position": "relative"
    },
    "dropdown-toggle:focus": {
        "outline": 0
    },
    "dropdown-menu": {
        "position": "absolute",
        "top": "100%",
        "left": 0,
        "zIndex": 1000,
        "display": "none",
        "float": "left",
        "minWidth": 160,
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0,
        "marginTop": 2,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "listStyle": "none",
        "fontSize": 14,
        "textAlign": "left",
        "backgroundColor": "#fff",
        "border": "1px solid rgba(0,0,0,.15)",
        "borderRadius": 4,
        "WebkitBoxShadow": "0 6px 12px rgba(0,0,0,.175)",
        "boxShadow": "0 6px 12px rgba(0,0,0,.175)",
        "backgroundClip": "padding-box"
    },
    "dropdown-menupull-right": {
        "right": 0,
        "left": "auto"
    },
    "dropdown-menu divider": {
        "height": 1,
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "overflow": "hidden",
        "backgroundColor": "#e5e5e5"
    },
    "dropdown-menu>li>a": {
        "display": "block",
        "paddingTop": 3,
        "paddingRight": 20,
        "paddingBottom": 3,
        "paddingLeft": 20,
        "clear": "both",
        "fontWeight": "400",
        "lineHeight": 1.6,
        "color": "#333",
        "whiteSpace": "nowrap"
    },
    "dropdown-menu>li>a:focus": {
        "textDecoration": "none",
        "color": "#262626",
        "backgroundColor": "#f5f5f5"
    },
    "dropdown-menu>li>a:hover": {
        "textDecoration": "none",
        "color": "#262626",
        "backgroundColor": "#f5f5f5"
    },
    "dropdown-menu>active>a": {
        "color": "#fff",
        "textDecoration": "none",
        "outline": 0,
        "backgroundColor": "#3097d1"
    },
    "dropdown-menu>active>a:focus": {
        "color": "#fff",
        "textDecoration": "none",
        "outline": 0,
        "backgroundColor": "#3097d1"
    },
    "dropdown-menu>active>a:hover": {
        "color": "#fff",
        "textDecoration": "none",
        "outline": 0,
        "backgroundColor": "#3097d1"
    },
    "dropdown-menu>disabled>a": {
        "color": "#777"
    },
    "dropdown-menu>disabled>a:focus": {
        "color": "#777",
        "textDecoration": "none",
        "backgroundColor": "transparent",
        "backgroundImage": "none",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled = false)",
        "cursor": "not-allowed"
    },
    "dropdown-menu>disabled>a:hover": {
        "color": "#777",
        "textDecoration": "none",
        "backgroundColor": "transparent",
        "backgroundImage": "none",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled = false)",
        "cursor": "not-allowed"
    },
    "open>dropdown-menu": {
        "display": "block"
    },
    "open>a": {
        "outline": 0
    },
    "dropdown-menu-right": {
        "left": "auto",
        "right": 0
    },
    "dropdown-menu-left": {
        "left": 0,
        "right": "auto"
    },
    "dropdown-header": {
        "display": "block",
        "paddingTop": 3,
        "paddingRight": 20,
        "paddingBottom": 3,
        "paddingLeft": 20,
        "fontSize": 12,
        "lineHeight": 1.6,
        "color": "#777",
        "whiteSpace": "nowrap"
    },
    "dropdown-backdrop": {
        "position": "fixed",
        "left": 0,
        "right": 0,
        "bottom": 0,
        "top": 0,
        "zIndex": 990
    },
    "pull-right>dropdown-menu": {
        "right": 0,
        "left": "auto"
    },
    "dropup caret": {
        "borderTop": 0,
        "borderBottom": "4px solid\\9",
        "content": ""
    },
    "navbar-fixed-bottom dropdown caret": {
        "borderTop": 0,
        "borderBottom": "4px solid\\9",
        "content": ""
    },
    "dropup dropdown-menu": {
        "top": "auto",
        "bottom": "100%",
        "marginBottom": 2
    },
    "navbar-fixed-bottom dropdown dropdown-menu": {
        "top": "auto",
        "bottom": "100%",
        "marginBottom": 2
    },
    "btn-group": {
        "position": "relative",
        "display": "inline-block",
        "verticalAlign": "middle"
    },
    "btn-group-vertical": {
        "position": "relative",
        "display": "inline-block",
        "verticalAlign": "middle"
    },
    "btn-group-vertical>btn": {
        "position": "relative",
        "float": "none",
        "display": "block",
        "width": "100%",
        "maxWidth": "100%"
    },
    "btn-group>btn": {
        "position": "relative",
        "float": "left"
    },
    "btn-group-vertical>btnactive": {
        "zIndex": 2
    },
    "btn-group-vertical>btn:active": {
        "zIndex": 2
    },
    "btn-group-vertical>btn:focus": {
        "zIndex": 2
    },
    "btn-group-vertical>btn:hover": {
        "zIndex": 2
    },
    "btn-group>btnactive": {
        "zIndex": 2
    },
    "btn-group>btn:active": {
        "zIndex": 2
    },
    "btn-group>btn:focus": {
        "zIndex": 2
    },
    "btn-group>btn:hover": {
        "zIndex": 2
    },
    "btn-group btn+btn": {
        "marginLeft": -1
    },
    "btn-group btn+btn-group": {
        "marginLeft": -1
    },
    "btn-group btn-group+btn": {
        "marginLeft": -1
    },
    "btn-group btn-group+btn-group": {
        "marginLeft": -1
    },
    "btn-toolbar": {
        "marginLeft": -5
    },
    "btn-toolbar:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "btn-toolbar:before": {
        "content": " ",
        "display": "table"
    },
    "btn-toolbar btn": {
        "float": "left"
    },
    "btn-toolbar btn-group": {
        "float": "left"
    },
    "btn-toolbar input-group": {
        "float": "left"
    },
    "btn-toolbar>btn": {
        "marginLeft": 5
    },
    "btn-toolbar>btn-group": {
        "marginLeft": 5
    },
    "btn-toolbar>input-group": {
        "marginLeft": 5
    },
    "btn-group>btn:not(:first-child):not(:last-child):not(dropdown-toggle)": {
        "borderRadius": 0
    },
    "btn-group>btn:first-child": {
        "marginLeft": 0
    },
    "btn-group>btn:first-child:not(:last-child):not(dropdown-toggle)": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0
    },
    "btn-group>btn:last-child:not(:first-child)": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0
    },
    "btn-group>dropdown-toggle:not(:first-child)": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0
    },
    "btn-group>btn-group": {
        "float": "left"
    },
    "btn-group>btn-group:not(:first-child):not(:last-child)>btn": {
        "borderRadius": 0
    },
    "btn-group>btn-group:first-child:not(:last-child)>btn:last-child": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0
    },
    "btn-group>btn-group:first-child:not(:last-child)>dropdown-toggle": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0
    },
    "btn-group>btn-group:last-child:not(:first-child)>btn:first-child": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0
    },
    "btn-group dropdown-toggle:active": {
        "outline": 0
    },
    "btn-groupopen dropdown-toggle": {
        "outline": 0,
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,.125)"
    },
    "btn-group>btn+dropdown-toggle": {
        "paddingLeft": 8,
        "paddingRight": 8
    },
    "btn-group-lgbtn-group>btn+dropdown-toggle": {
        "paddingLeft": 12,
        "paddingRight": 12
    },
    "btn-group>btn-lg+dropdown-toggle": {
        "paddingLeft": 12,
        "paddingRight": 12
    },
    "btn-groupopen dropdown-togglebtn-link": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none"
    },
    "btn caret": {
        "marginLeft": 0
    },
    "btn-group-lg>btn caret": {
        "borderWidth": "5px 5px 0",
        "borderBottomWidth": 0
    },
    "btn-lg caret": {
        "borderWidth": "5px 5px 0",
        "borderBottomWidth": 0
    },
    "dropup btn-group-lg>btn caret": {
        "borderWidth": "0 5px 5px"
    },
    "dropup btn-lg caret": {
        "borderWidth": "0 5px 5px"
    },
    "btn-group-vertical>btn-group": {
        "display": "block",
        "float": "none",
        "width": "100%",
        "maxWidth": "100%"
    },
    "btn-group-vertical>btn-group>btn": {
        "display": "block",
        "float": "none",
        "width": "100%",
        "maxWidth": "100%"
    },
    "btn-group-vertical>btn-group:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "btn-group-vertical>btn-group:before": {
        "content": " ",
        "display": "table"
    },
    "btn-group-vertical>btn+btn": {
        "marginTop": -1,
        "marginLeft": 0
    },
    "btn-group-vertical>btn+btn-group": {
        "marginTop": -1,
        "marginLeft": 0
    },
    "btn-group-vertical>btn-group+btn": {
        "marginTop": -1,
        "marginLeft": 0
    },
    "btn-group-vertical>btn-group+btn-group": {
        "marginTop": -1,
        "marginLeft": 0
    },
    "btn-group-vertical>btn:not(:first-child):not(:last-child)": {
        "borderRadius": 0
    },
    "btn-group-vertical>btn:first-child:not(:last-child)": {
        "borderTopRightRadius": 4,
        "borderTopLeftRadius": 4,
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "btn-group-vertical>btn:last-child:not(:first-child)": {
        "borderTopRightRadius": 0,
        "borderTopLeftRadius": 0,
        "borderBottomRightRadius": 4,
        "borderBottomLeftRadius": 4
    },
    "btn-group-vertical>btn-group:not(:first-child):not(:last-child)>btn": {
        "borderRadius": 0
    },
    "btn-group-vertical>btn-group:first-child:not(:last-child)>btn:last-child": {
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "btn-group-vertical>btn-group:first-child:not(:last-child)>dropdown-toggle": {
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "btn-group-vertical>btn-group:last-child:not(:first-child)>btn:first-child": {
        "borderTopRightRadius": 0,
        "borderTopLeftRadius": 0
    },
    "btn-group-justified": {
        "display": "table",
        "width": "100%",
        "tableLayout": "fixed",
        "borderCollapse": "separate"
    },
    "btn-group-justified>btn": {
        "float": "none",
        "display": "table-cell",
        "width": "1%"
    },
    "btn-group-justified>btn-group": {
        "float": "none",
        "display": "table-cell",
        "width": "1%"
    },
    "btn-group-justified>btn-group btn": {
        "width": "100%"
    },
    "btn-group-justified>btn-group dropdown-menu": {
        "left": "auto"
    },
    "[data-toggle=buttons]>btn-group>btn input[type=checkbox]": {
        "position": "absolute",
        "clip": "rect(0,0,0,0)",
        "pointerEvents": "none"
    },
    "[data-toggle=buttons]>btn-group>btn input[type=radio]": {
        "position": "absolute",
        "clip": "rect(0,0,0,0)",
        "pointerEvents": "none"
    },
    "[data-toggle=buttons]>btn input[type=checkbox]": {
        "position": "absolute",
        "clip": "rect(0,0,0,0)",
        "pointerEvents": "none"
    },
    "[data-toggle=buttons]>btn input[type=radio]": {
        "position": "absolute",
        "clip": "rect(0,0,0,0)",
        "pointerEvents": "none"
    },
    "input-group": {
        "position": "relative",
        "display": "table",
        "borderCollapse": "separate"
    },
    "input-group[class*=col-]": {
        "float": "none",
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "input-group form-control": {
        "position": "relative",
        "zIndex": 2,
        "float": "left",
        "width": "100%",
        "marginBottom": 0,
        "display": "table-cell"
    },
    "input-group form-control:focus": {
        "zIndex": 3
    },
    "input-group-addon": {
        "display": "table-cell",
        "width": "1%",
        "whiteSpace": "nowrap",
        "verticalAlign": "middle",
        "paddingTop": 6,
        "paddingRight": 12,
        "paddingBottom": 6,
        "paddingLeft": 12,
        "fontSize": 14,
        "fontWeight": "400",
        "lineHeight": 1,
        "color": "#555",
        "textAlign": "center",
        "backgroundColor": "#eee",
        "border": "1px solid #ccd0d2",
        "borderRadius": 4
    },
    "input-group-btn": {
        "display": "table-cell",
        "width": "1%",
        "whiteSpace": "nowrap",
        "verticalAlign": "middle",
        "fontSize": 0,
        "position": "relative"
    },
    "input-group-addon:not(:first-child):not(:last-child)": {
        "borderRadius": 0
    },
    "input-group-btn:not(:first-child):not(:last-child)": {
        "borderRadius": 0
    },
    "input-group form-control:not(:first-child):not(:last-child)": {
        "borderRadius": 0
    },
    "input-group-addoninput-sm": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 12,
        "borderRadius": 3
    },
    "input-group-sm>input-group-btn>input-group-addonbtn": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 12,
        "borderRadius": 3
    },
    "input-group-addoninput-lg": {
        "paddingTop": 10,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 18,
        "borderRadius": 6
    },
    "input-group-lg>input-group-btn>input-group-addonbtn": {
        "paddingTop": 10,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 18,
        "borderRadius": 6
    },
    "input-group-addon input[type=checkbox]": {
        "marginTop": 0
    },
    "input-group-addon input[type=radio]": {
        "marginTop": 0
    },
    "input-group-addon:first-child": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0,
        "borderRight": 0
    },
    "input-group-btn:first-child>btn": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0,
        "marginRight": -1
    },
    "input-group-btn:first-child>btn-group>btn": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0
    },
    "input-group-btn:first-child>dropdown-toggle": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0
    },
    "input-group-btn:last-child>btn-group:not(:last-child)>btn": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0
    },
    "input-group-btn:last-child>btn:not(:last-child):not(dropdown-toggle)": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0
    },
    "input-group form-control:first-child": {
        "borderBottomRightRadius": 0,
        "borderTopRightRadius": 0
    },
    "input-group-addon:last-child": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0,
        "borderLeft": 0
    },
    "input-group-btn:first-child>btn-group:not(:first-child)>btn": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0
    },
    "input-group-btn:first-child>btn:not(:first-child)": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0
    },
    "input-group-btn:last-child>btn": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0,
        "zIndex": 2,
        "marginLeft": -1
    },
    "input-group-btn:last-child>btn-group>btn": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0
    },
    "input-group-btn:last-child>dropdown-toggle": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0
    },
    "input-group form-control:last-child": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0
    },
    "input-group-btn>btn": {
        "position": "relative"
    },
    "input-group-btn>btn+btn": {
        "marginLeft": -1
    },
    "input-group-btn>btn:active": {
        "zIndex": 2
    },
    "input-group-btn>btn:focus": {
        "zIndex": 2
    },
    "input-group-btn>btn:hover": {
        "zIndex": 2
    },
    "input-group-btn:first-child>btn-group": {
        "marginRight": -1
    },
    "input-group-btn:last-child>btn-group": {
        "zIndex": 2,
        "marginLeft": -1
    },
    "nav:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "nav:before": {
        "content": " ",
        "display": "table"
    },
    "nav>li": {
        "position": "relative",
        "display": "block"
    },
    "nav>li>a": {
        "position": "relative",
        "display": "block",
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15
    },
    "nav>li>a:focus": {
        "textDecoration": "none",
        "backgroundColor": "#eee"
    },
    "nav>li>a:hover": {
        "textDecoration": "none",
        "backgroundColor": "#eee"
    },
    "nav>lidisabled>a": {
        "color": "#777"
    },
    "nav>lidisabled>a:focus": {
        "color": "#777",
        "textDecoration": "none",
        "backgroundColor": "transparent",
        "cursor": "not-allowed"
    },
    "nav>lidisabled>a:hover": {
        "color": "#777",
        "textDecoration": "none",
        "backgroundColor": "transparent",
        "cursor": "not-allowed"
    },
    "nav open>a": {
        "backgroundColor": "#eee",
        "borderColor": "#3097d1"
    },
    "nav open>a:focus": {
        "backgroundColor": "#eee",
        "borderColor": "#3097d1"
    },
    "nav open>a:hover": {
        "backgroundColor": "#eee",
        "borderColor": "#3097d1"
    },
    "nav nav-divider": {
        "height": 1,
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "overflow": "hidden",
        "backgroundColor": "#e5e5e5"
    },
    "nav>li>a>img": {
        "maxWidth": "none"
    },
    "nav-tabs": {
        "borderBottom": "1px solid #ddd"
    },
    "nav-tabs>li": {
        "float": "left",
        "marginBottom": -1
    },
    "nav-tabs>li>a": {
        "marginRight": 2,
        "lineHeight": 1.6,
        "border": "1px solid transparent",
        "borderRadius": "4px 4px 0 0"
    },
    "nav-tabs>li>a:hover": {
        "borderColor": "#eee #eee #ddd"
    },
    "nav-tabs>liactive>a": {
        "color": "#555",
        "backgroundColor": "#f5f8fa",
        "border": "1px solid #ddd",
        "borderBottomColor": "transparent",
        "cursor": "default"
    },
    "nav-tabs>liactive>a:focus": {
        "color": "#555",
        "backgroundColor": "#f5f8fa",
        "border": "1px solid #ddd",
        "borderBottomColor": "transparent",
        "cursor": "default"
    },
    "nav-tabs>liactive>a:hover": {
        "color": "#555",
        "backgroundColor": "#f5f8fa",
        "border": "1px solid #ddd",
        "borderBottomColor": "transparent",
        "cursor": "default"
    },
    "nav-pills>li": {
        "float": "left"
    },
    "nav-pills>li>a": {
        "borderRadius": 4
    },
    "nav-pills>li+li": {
        "marginLeft": 2
    },
    "nav-pills>liactive>a": {
        "color": "#fff",
        "backgroundColor": "#3097d1"
    },
    "nav-pills>liactive>a:focus": {
        "color": "#fff",
        "backgroundColor": "#3097d1"
    },
    "nav-pills>liactive>a:hover": {
        "color": "#fff",
        "backgroundColor": "#3097d1"
    },
    "nav-stacked>li": {
        "float": "none"
    },
    "nav-stacked>li+li": {
        "marginTop": 2,
        "marginLeft": 0
    },
    "nav-justified": {
        "width": "100%"
    },
    "nav-tabsnav-justified": {
        "width": "100%",
        "borderBottom": 0
    },
    "nav-justified>li": {
        "float": "none"
    },
    "nav-tabsnav-justified>li": {
        "float": "none"
    },
    "nav-justified>li>a": {
        "textAlign": "center",
        "marginBottom": 5
    },
    "nav-tabsnav-justified>li>a": {
        "textAlign": "center",
        "marginBottom": 5,
        "marginRight": 0,
        "borderRadius": 4
    },
    "nav-justified>dropdown dropdown-menu": {
        "top": "auto",
        "left": "auto"
    },
    "nav-tabs-justified": {
        "borderBottom": 0
    },
    "nav-tabs-justified>li>a": {
        "marginRight": 0,
        "borderRadius": 4
    },
    "nav-tabs-justified>active>a": {
        "border": "1px solid #ddd"
    },
    "nav-tabs-justified>active>a:focus": {
        "border": "1px solid #ddd"
    },
    "nav-tabs-justified>active>a:hover": {
        "border": "1px solid #ddd"
    },
    "nav-tabsnav-justified>active>a": {
        "border": "1px solid #ddd"
    },
    "nav-tabsnav-justified>active>a:focus": {
        "border": "1px solid #ddd"
    },
    "nav-tabsnav-justified>active>a:hover": {
        "border": "1px solid #ddd"
    },
    "tab-content>tab-pane": {
        "display": "none"
    },
    "tab-content>active": {
        "display": "block"
    },
    "nav-tabs dropdown-menu": {
        "marginTop": -1,
        "borderTopRightRadius": 0,
        "borderTopLeftRadius": 0
    },
    "navbar": {
        "position": "relative",
        "minHeight": 50,
        "marginBottom": 22,
        "border": "1px solid transparent"
    },
    "navbar:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "navbar:before": {
        "content": " ",
        "display": "table"
    },
    "navbar-header:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "navbar-header:before": {
        "content": " ",
        "display": "table"
    },
    "navbar-collapse": {
        "overflowX": "visible",
        "paddingRight": 15,
        "paddingLeft": 15,
        "borderTop": "1px solid transparent",
        "WebkitBoxShadow": "inset 0 1px 0 hsla(0,0%,100%,.1)",
        "boxShadow": "inset 0 1px 0 hsla(0,0%,100%,.1)",
        "WebkitOverflowScrolling": "touch"
    },
    "navbar-collapse:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "navbar-collapse:before": {
        "content": " ",
        "display": "table"
    },
    "navbar-collapsein": {
        "overflowY": "auto"
    },
    "navbar-fixed-bottom navbar-collapse": {
        "maxHeight": 340
    },
    "navbar-fixed-top navbar-collapse": {
        "maxHeight": 340
    },
    "container-fluid>navbar-collapse": {
        "marginRight": -15,
        "marginLeft": -15
    },
    "container-fluid>navbar-header": {
        "marginRight": -15,
        "marginLeft": -15
    },
    "container>navbar-collapse": {
        "marginRight": -15,
        "marginLeft": -15
    },
    "container>navbar-header": {
        "marginRight": -15,
        "marginLeft": -15
    },
    "navbar-static-top": {
        "zIndex": 1000,
        "borderWidth": "0 0 1px"
    },
    "navbar-fixed-bottom": {
        "position": "fixed",
        "right": 0,
        "left": 0,
        "zIndex": 1030,
        "bottom": 0,
        "marginBottom": 0,
        "borderWidth": "1px 0 0"
    },
    "navbar-fixed-top": {
        "position": "fixed",
        "right": 0,
        "left": 0,
        "zIndex": 1030,
        "top": 0,
        "borderWidth": "0 0 1px"
    },
    "navbar-brand": {
        "float": "left",
        "paddingTop": 14,
        "paddingRight": 15,
        "paddingBottom": 14,
        "paddingLeft": 15,
        "fontSize": 18,
        "lineHeight": 22,
        "height": 50
    },
    "navbar-brand:focus": {
        "textDecoration": "none"
    },
    "navbar-brand:hover": {
        "textDecoration": "none"
    },
    "navbar-brand>img": {
        "display": "block"
    },
    "navbar-toggle": {
        "position": "relative",
        "float": "right",
        "marginRight": 15,
        "paddingTop": 9,
        "paddingRight": 10,
        "paddingBottom": 9,
        "paddingLeft": 10,
        "marginTop": 8,
        "marginBottom": 8,
        "backgroundColor": "transparent",
        "backgroundImage": "none",
        "border": "1px solid transparent",
        "borderRadius": 4
    },
    "navbar-toggle:focus": {
        "outline": 0
    },
    "navbar-toggle icon-bar": {
        "display": "block",
        "width": 22,
        "height": 2,
        "borderRadius": 1
    },
    "navbar-toggle icon-bar+icon-bar": {
        "marginTop": 4
    },
    "navbar-nav": {
        "marginTop": 7,
        "marginRight": -15,
        "marginBottom": 7,
        "marginLeft": -15
    },
    "navbar-nav>li>a": {
        "paddingTop": 10,
        "paddingBottom": 10,
        "lineHeight": 22
    },
    "navbar-form": {
        "marginTop": 7,
        "marginRight": -15,
        "marginBottom": 7,
        "marginLeft": -15,
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "borderTop": "1px solid transparent",
        "borderBottom": "1px solid transparent",
        "WebkitBoxShadow": "inset 0 1px 0 hsla(0,0%,100%,.1),0 1px 0 hsla(0,0%,100%,.1)",
        "boxShadow": "inset 0 1px 0 hsla(0,0%,100%,.1),0 1px 0 hsla(0,0%,100%,.1)"
    },
    "navbar-nav>li>dropdown-menu": {
        "marginTop": 0,
        "borderTopRightRadius": 0,
        "borderTopLeftRadius": 0
    },
    "navbar-fixed-bottom navbar-nav>li>dropdown-menu": {
        "marginBottom": 0,
        "borderTopRightRadius": 4,
        "borderTopLeftRadius": 4,
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "navbar-btn": {
        "marginTop": 7,
        "marginBottom": 7
    },
    "btn-group-sm>navbar-btnbtn": {
        "marginTop": 10,
        "marginBottom": 10
    },
    "navbar-btnbtn-sm": {
        "marginTop": 10,
        "marginBottom": 10
    },
    "btn-group-xs>navbar-btnbtn": {
        "marginTop": 14,
        "marginBottom": 14
    },
    "navbar-btnbtn-xs": {
        "marginTop": 14,
        "marginBottom": 14
    },
    "navbar-text": {
        "marginTop": 14,
        "marginBottom": 14
    },
    "navbar-default": {
        "backgroundColor": "#fff",
        "borderColor": "#d3e0e9"
    },
    "navbar-default navbar-brand": {
        "color": "#777"
    },
    "navbar-default navbar-brand:focus": {
        "color": "#5e5d5d",
        "backgroundColor": "transparent"
    },
    "navbar-default navbar-brand:hover": {
        "color": "#5e5d5d",
        "backgroundColor": "transparent"
    },
    "navbar-default navbar-nav>li>a": {
        "color": "#777"
    },
    "navbar-default navbar-text": {
        "color": "#777"
    },
    "navbar-default navbar-nav>li>a:focus": {
        "color": "#333",
        "backgroundColor": "transparent"
    },
    "navbar-default navbar-nav>li>a:hover": {
        "color": "#333",
        "backgroundColor": "transparent"
    },
    "navbar-default navbar-nav>active>a": {
        "color": "#555",
        "backgroundColor": "#eee"
    },
    "navbar-default navbar-nav>active>a:focus": {
        "color": "#555",
        "backgroundColor": "#eee"
    },
    "navbar-default navbar-nav>active>a:hover": {
        "color": "#555",
        "backgroundColor": "#eee"
    },
    "navbar-default navbar-nav>disabled>a": {
        "color": "#ccc",
        "backgroundColor": "transparent"
    },
    "navbar-default navbar-nav>disabled>a:focus": {
        "color": "#ccc",
        "backgroundColor": "transparent"
    },
    "navbar-default navbar-nav>disabled>a:hover": {
        "color": "#ccc",
        "backgroundColor": "transparent"
    },
    "navbar-default navbar-toggle": {
        "borderColor": "#ddd"
    },
    "navbar-default navbar-toggle:focus": {
        "backgroundColor": "#ddd"
    },
    "navbar-default navbar-toggle:hover": {
        "backgroundColor": "#ddd"
    },
    "navbar-default navbar-toggle icon-bar": {
        "backgroundColor": "#888"
    },
    "navbar-default navbar-collapse": {
        "borderColor": "#d3e0e9"
    },
    "navbar-default navbar-form": {
        "borderColor": "#d3e0e9"
    },
    "navbar-default navbar-nav>open>a": {
        "backgroundColor": "#eee",
        "color": "#555"
    },
    "navbar-default navbar-nav>open>a:focus": {
        "backgroundColor": "#eee",
        "color": "#555"
    },
    "navbar-default navbar-nav>open>a:hover": {
        "backgroundColor": "#eee",
        "color": "#555"
    },
    "navbar-default navbar-link": {
        "color": "#777"
    },
    "navbar-default navbar-link:hover": {
        "color": "#333"
    },
    "navbar-default btn-link": {
        "color": "#777"
    },
    "navbar-default btn-link:focus": {
        "color": "#333"
    },
    "navbar-default btn-link:hover": {
        "color": "#333"
    },
    "navbar-default btn-link[disabled]:focus": {
        "color": "#ccc"
    },
    "navbar-default btn-link[disabled]:hover": {
        "color": "#ccc"
    },
    "fieldset[disabled] navbar-default btn-link:focus": {
        "color": "#ccc"
    },
    "fieldset[disabled] navbar-default btn-link:hover": {
        "color": "#ccc"
    },
    "navbar-inverse": {
        "backgroundColor": "#222",
        "borderColor": "#090909"
    },
    "navbar-inverse navbar-brand": {
        "color": "#9d9d9d"
    },
    "navbar-inverse navbar-brand:focus": {
        "color": "#fff",
        "backgroundColor": "transparent"
    },
    "navbar-inverse navbar-brand:hover": {
        "color": "#fff",
        "backgroundColor": "transparent"
    },
    "navbar-inverse navbar-nav>li>a": {
        "color": "#9d9d9d"
    },
    "navbar-inverse navbar-text": {
        "color": "#9d9d9d"
    },
    "navbar-inverse navbar-nav>li>a:focus": {
        "color": "#fff",
        "backgroundColor": "transparent"
    },
    "navbar-inverse navbar-nav>li>a:hover": {
        "color": "#fff",
        "backgroundColor": "transparent"
    },
    "navbar-inverse navbar-nav>active>a": {
        "color": "#fff",
        "backgroundColor": "#090909"
    },
    "navbar-inverse navbar-nav>active>a:focus": {
        "color": "#fff",
        "backgroundColor": "#090909"
    },
    "navbar-inverse navbar-nav>active>a:hover": {
        "color": "#fff",
        "backgroundColor": "#090909"
    },
    "navbar-inverse navbar-nav>disabled>a": {
        "color": "#444",
        "backgroundColor": "transparent"
    },
    "navbar-inverse navbar-nav>disabled>a:focus": {
        "color": "#444",
        "backgroundColor": "transparent"
    },
    "navbar-inverse navbar-nav>disabled>a:hover": {
        "color": "#444",
        "backgroundColor": "transparent"
    },
    "navbar-inverse navbar-toggle": {
        "borderColor": "#333"
    },
    "navbar-inverse navbar-toggle:focus": {
        "backgroundColor": "#333"
    },
    "navbar-inverse navbar-toggle:hover": {
        "backgroundColor": "#333"
    },
    "navbar-inverse navbar-toggle icon-bar": {
        "backgroundColor": "#fff"
    },
    "navbar-inverse navbar-collapse": {
        "borderColor": "#101010"
    },
    "navbar-inverse navbar-form": {
        "borderColor": "#101010"
    },
    "navbar-inverse navbar-nav>open>a": {
        "backgroundColor": "#090909",
        "color": "#fff"
    },
    "navbar-inverse navbar-nav>open>a:focus": {
        "backgroundColor": "#090909",
        "color": "#fff"
    },
    "navbar-inverse navbar-nav>open>a:hover": {
        "backgroundColor": "#090909",
        "color": "#fff"
    },
    "navbar-inverse navbar-link": {
        "color": "#9d9d9d"
    },
    "navbar-inverse navbar-link:hover": {
        "color": "#fff"
    },
    "navbar-inverse btn-link": {
        "color": "#9d9d9d"
    },
    "navbar-inverse btn-link:focus": {
        "color": "#fff"
    },
    "navbar-inverse btn-link:hover": {
        "color": "#fff"
    },
    "navbar-inverse btn-link[disabled]:focus": {
        "color": "#444"
    },
    "navbar-inverse btn-link[disabled]:hover": {
        "color": "#444"
    },
    "fieldset[disabled] navbar-inverse btn-link:focus": {
        "color": "#444"
    },
    "fieldset[disabled] navbar-inverse btn-link:hover": {
        "color": "#444"
    },
    "breadcrumb": {
        "paddingTop": 8,
        "paddingRight": 15,
        "paddingBottom": 8,
        "paddingLeft": 15,
        "marginBottom": 22,
        "listStyle": "none",
        "backgroundColor": "#f5f5f5",
        "borderRadius": 4
    },
    "breadcrumb>li": {
        "display": "inline-block"
    },
    "breadcrumb>li+li:before": {
        "content": "/\\A0",
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "color": "#ccc"
    },
    "breadcrumb>active": {
        "color": "#777"
    },
    "pagination": {
        "display": "inline-block",
        "paddingLeft": 0,
        "marginTop": 22,
        "marginRight": 0,
        "marginBottom": 22,
        "marginLeft": 0,
        "borderRadius": 4
    },
    "pagination>li": {
        "display": "inline"
    },
    "pagination>li>a": {
        "position": "relative",
        "float": "left",
        "paddingTop": 6,
        "paddingRight": 12,
        "paddingBottom": 6,
        "paddingLeft": 12,
        "lineHeight": 1.6,
        "textDecoration": "none",
        "color": "#3097d1",
        "backgroundColor": "#fff",
        "border": "1px solid #ddd",
        "marginLeft": -1
    },
    "pagination>li>span": {
        "position": "relative",
        "float": "left",
        "paddingTop": 6,
        "paddingRight": 12,
        "paddingBottom": 6,
        "paddingLeft": 12,
        "lineHeight": 1.6,
        "textDecoration": "none",
        "color": "#3097d1",
        "backgroundColor": "#fff",
        "border": "1px solid #ddd",
        "marginLeft": -1
    },
    "pagination>li:first-child>a": {
        "marginLeft": 0,
        "borderBottomLeftRadius": 4,
        "borderTopLeftRadius": 4
    },
    "pagination>li:first-child>span": {
        "marginLeft": 0,
        "borderBottomLeftRadius": 4,
        "borderTopLeftRadius": 4
    },
    "pagination>li:last-child>a": {
        "borderBottomRightRadius": 4,
        "borderTopRightRadius": 4
    },
    "pagination>li:last-child>span": {
        "borderBottomRightRadius": 4,
        "borderTopRightRadius": 4
    },
    "pagination>li>a:focus": {
        "zIndex": 2,
        "color": "#216a94",
        "backgroundColor": "#eee",
        "borderColor": "#ddd"
    },
    "pagination>li>a:hover": {
        "zIndex": 2,
        "color": "#216a94",
        "backgroundColor": "#eee",
        "borderColor": "#ddd"
    },
    "pagination>li>span:focus": {
        "zIndex": 2,
        "color": "#216a94",
        "backgroundColor": "#eee",
        "borderColor": "#ddd"
    },
    "pagination>li>span:hover": {
        "zIndex": 2,
        "color": "#216a94",
        "backgroundColor": "#eee",
        "borderColor": "#ddd"
    },
    "pagination>active>a": {
        "zIndex": 3,
        "color": "#fff",
        "backgroundColor": "#3097d1",
        "borderColor": "#3097d1",
        "cursor": "default"
    },
    "pagination>active>a:focus": {
        "zIndex": 3,
        "color": "#fff",
        "backgroundColor": "#3097d1",
        "borderColor": "#3097d1",
        "cursor": "default"
    },
    "pagination>active>a:hover": {
        "zIndex": 3,
        "color": "#fff",
        "backgroundColor": "#3097d1",
        "borderColor": "#3097d1",
        "cursor": "default"
    },
    "pagination>active>span": {
        "zIndex": 3,
        "color": "#fff",
        "backgroundColor": "#3097d1",
        "borderColor": "#3097d1",
        "cursor": "default"
    },
    "pagination>active>span:focus": {
        "zIndex": 3,
        "color": "#fff",
        "backgroundColor": "#3097d1",
        "borderColor": "#3097d1",
        "cursor": "default"
    },
    "pagination>active>span:hover": {
        "zIndex": 3,
        "color": "#fff",
        "backgroundColor": "#3097d1",
        "borderColor": "#3097d1",
        "cursor": "default"
    },
    "pagination>disabled>a": {
        "color": "#777",
        "backgroundColor": "#fff",
        "borderColor": "#ddd",
        "cursor": "not-allowed"
    },
    "pagination>disabled>a:focus": {
        "color": "#777",
        "backgroundColor": "#fff",
        "borderColor": "#ddd",
        "cursor": "not-allowed"
    },
    "pagination>disabled>a:hover": {
        "color": "#777",
        "backgroundColor": "#fff",
        "borderColor": "#ddd",
        "cursor": "not-allowed"
    },
    "pagination>disabled>span": {
        "color": "#777",
        "backgroundColor": "#fff",
        "borderColor": "#ddd",
        "cursor": "not-allowed"
    },
    "pagination>disabled>span:focus": {
        "color": "#777",
        "backgroundColor": "#fff",
        "borderColor": "#ddd",
        "cursor": "not-allowed"
    },
    "pagination>disabled>span:hover": {
        "color": "#777",
        "backgroundColor": "#fff",
        "borderColor": "#ddd",
        "cursor": "not-allowed"
    },
    "pagination-lg>li>a": {
        "paddingTop": 10,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.3333333
    },
    "pagination-lg>li>span": {
        "paddingTop": 10,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.3333333
    },
    "pagination-lg>li:first-child>a": {
        "borderBottomLeftRadius": 6,
        "borderTopLeftRadius": 6
    },
    "pagination-lg>li:first-child>span": {
        "borderBottomLeftRadius": 6,
        "borderTopLeftRadius": 6
    },
    "pagination-lg>li:last-child>a": {
        "borderBottomRightRadius": 6,
        "borderTopRightRadius": 6
    },
    "pagination-lg>li:last-child>span": {
        "borderBottomRightRadius": 6,
        "borderTopRightRadius": 6
    },
    "pagination-sm>li>a": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 12,
        "lineHeight": 1.5
    },
    "pagination-sm>li>span": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 12,
        "lineHeight": 1.5
    },
    "pagination-sm>li:first-child>a": {
        "borderBottomLeftRadius": 3,
        "borderTopLeftRadius": 3
    },
    "pagination-sm>li:first-child>span": {
        "borderBottomLeftRadius": 3,
        "borderTopLeftRadius": 3
    },
    "pagination-sm>li:last-child>a": {
        "borderBottomRightRadius": 3,
        "borderTopRightRadius": 3
    },
    "pagination-sm>li:last-child>span": {
        "borderBottomRightRadius": 3,
        "borderTopRightRadius": 3
    },
    "pager": {
        "paddingLeft": 0,
        "marginTop": 22,
        "marginRight": 0,
        "marginBottom": 22,
        "marginLeft": 0,
        "listStyle": "none",
        "textAlign": "center"
    },
    "pager:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "pager:before": {
        "content": " ",
        "display": "table"
    },
    "pager li": {
        "display": "inline"
    },
    "pager li>a": {
        "display": "inline-block",
        "paddingTop": 5,
        "paddingRight": 14,
        "paddingBottom": 5,
        "paddingLeft": 14,
        "backgroundColor": "#fff",
        "border": "1px solid #ddd",
        "borderRadius": 15
    },
    "pager li>span": {
        "display": "inline-block",
        "paddingTop": 5,
        "paddingRight": 14,
        "paddingBottom": 5,
        "paddingLeft": 14,
        "backgroundColor": "#fff",
        "border": "1px solid #ddd",
        "borderRadius": 15
    },
    "pager li>a:focus": {
        "textDecoration": "none",
        "backgroundColor": "#eee"
    },
    "pager li>a:hover": {
        "textDecoration": "none",
        "backgroundColor": "#eee"
    },
    "pager next>a": {
        "float": "right"
    },
    "pager next>span": {
        "float": "right"
    },
    "pager previous>a": {
        "float": "left"
    },
    "pager previous>span": {
        "float": "left"
    },
    "pager disabled>a": {
        "color": "#777",
        "backgroundColor": "#fff",
        "cursor": "not-allowed"
    },
    "pager disabled>a:focus": {
        "color": "#777",
        "backgroundColor": "#fff",
        "cursor": "not-allowed"
    },
    "pager disabled>a:hover": {
        "color": "#777",
        "backgroundColor": "#fff",
        "cursor": "not-allowed"
    },
    "pager disabled>span": {
        "color": "#777",
        "backgroundColor": "#fff",
        "cursor": "not-allowed"
    },
    "label:empty": {
        "display": "none"
    },
    "btn label": {
        "position": "relative",
        "top": -1
    },
    "alabel:focus": {
        "color": "#fff",
        "textDecoration": "none",
        "cursor": "pointer"
    },
    "alabel:hover": {
        "color": "#fff",
        "textDecoration": "none",
        "cursor": "pointer"
    },
    "label-default": {
        "backgroundColor": "#777"
    },
    "label-default[href]:focus": {
        "backgroundColor": "#5e5e5e"
    },
    "label-default[href]:hover": {
        "backgroundColor": "#5e5e5e"
    },
    "label-primary": {
        "backgroundColor": "#3097d1"
    },
    "label-primary[href]:focus": {
        "backgroundColor": "#2579a9"
    },
    "label-primary[href]:hover": {
        "backgroundColor": "#2579a9"
    },
    "label-success": {
        "backgroundColor": "#2ab27b"
    },
    "label-success[href]:focus": {
        "backgroundColor": "#20895e"
    },
    "label-success[href]:hover": {
        "backgroundColor": "#20895e"
    },
    "label-info": {
        "backgroundColor": "#8eb4cb"
    },
    "label-info[href]:focus": {
        "backgroundColor": "#6b9dbb"
    },
    "label-info[href]:hover": {
        "backgroundColor": "#6b9dbb"
    },
    "label-warning": {
        "backgroundColor": "#cbb956"
    },
    "label-warning[href]:focus": {
        "backgroundColor": "#b6a338"
    },
    "label-warning[href]:hover": {
        "backgroundColor": "#b6a338"
    },
    "label-danger": {
        "backgroundColor": "#bf5329"
    },
    "label-danger[href]:focus": {
        "backgroundColor": "#954120"
    },
    "label-danger[href]:hover": {
        "backgroundColor": "#954120"
    },
    "badge": {
        "display": "inline-block",
        "minWidth": 10,
        "paddingTop": 3,
        "paddingRight": 7,
        "paddingBottom": 3,
        "paddingLeft": 7,
        "fontSize": 12,
        "fontWeight": "700",
        "color": "#fff",
        "lineHeight": 1,
        "verticalAlign": "middle",
        "whiteSpace": "nowrap",
        "textAlign": "center",
        "backgroundColor": "#777",
        "borderRadius": 10
    },
    "badge:empty": {
        "display": "none"
    },
    "btn badge": {
        "position": "relative",
        "top": -1
    },
    "btn-group-xs>btn badge": {
        "top": 0,
        "paddingTop": 1,
        "paddingRight": 5,
        "paddingBottom": 1,
        "paddingLeft": 5
    },
    "btn-xs badge": {
        "top": 0,
        "paddingTop": 1,
        "paddingRight": 5,
        "paddingBottom": 1,
        "paddingLeft": 5
    },
    "list-group-itemactive>badge": {
        "color": "#3097d1",
        "backgroundColor": "#fff"
    },
    "nav-pills>active>a>badge": {
        "color": "#3097d1",
        "backgroundColor": "#fff"
    },
    "list-group-item>badge": {
        "float": "right"
    },
    "list-group-item>badge+badge": {
        "marginRight": 5
    },
    "nav-pills>li>a>badge": {
        "marginLeft": 3
    },
    "abadge:focus": {
        "color": "#fff",
        "textDecoration": "none",
        "cursor": "pointer"
    },
    "abadge:hover": {
        "color": "#fff",
        "textDecoration": "none",
        "cursor": "pointer"
    },
    "jumbotron": {
        "paddingTop": 30,
        "paddingBottom": 30,
        "marginBottom": 30,
        "backgroundColor": "#eee",
        "color": "inherit"
    },
    "jumbotron h1": {
        "color": "inherit"
    },
    "jumbotron p": {
        "marginBottom": 15,
        "fontSize": 21,
        "fontWeight": "200"
    },
    "jumbotron>hr": {
        "borderTopColor": "#d5d5d5"
    },
    "container-fluid jumbotron": {
        "borderRadius": 6,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "container jumbotron": {
        "borderRadius": 6,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "jumbotron container": {
        "maxWidth": "100%"
    },
    "thumbnail": {
        "display": "block",
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "marginBottom": 22,
        "lineHeight": 1.6,
        "backgroundColor": "#f5f8fa",
        "border": "1px solid #ddd",
        "borderRadius": 4,
        "WebkitTransition": "border .2s ease-in-out",
        "transition": "border .2s ease-in-out"
    },
    "thumbnail>img": {
        "display": "block",
        "maxWidth": "100%",
        "height": "auto",
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "thumbnail a>img": {
        "display": "block",
        "maxWidth": "100%",
        "height": "auto",
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "thumbnail caption": {
        "paddingTop": 9,
        "paddingRight": 9,
        "paddingBottom": 9,
        "paddingLeft": 9,
        "color": "#636b6f"
    },
    "athumbnailactive": {
        "borderColor": "#3097d1"
    },
    "athumbnail:focus": {
        "borderColor": "#3097d1"
    },
    "athumbnail:hover": {
        "borderColor": "#3097d1"
    },
    "alert": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "marginBottom": 22,
        "border": "1px solid transparent",
        "borderRadius": 4
    },
    "alert h4": {
        "marginTop": 0,
        "color": "inherit"
    },
    "alert alert-link": {
        "fontWeight": "700"
    },
    "alert>p": {
        "marginBottom": 0
    },
    "alert>ul": {
        "marginBottom": 0
    },
    "alert>p+p": {
        "marginTop": 5
    },
    "alert-dismissable": {
        "paddingRight": 35
    },
    "alert-dismissible": {
        "paddingRight": 35
    },
    "alert-dismissable close": {
        "position": "relative",
        "top": -2,
        "right": -21,
        "color": "inherit"
    },
    "alert-dismissible close": {
        "position": "relative",
        "top": -2,
        "right": -21,
        "color": "inherit"
    },
    "alert-success": {
        "backgroundColor": "#dff0d8",
        "borderColor": "#d6e9c6",
        "color": "#3c763d"
    },
    "alert-success hr": {
        "borderTopColor": "#c9e2b3"
    },
    "alert-success alert-link": {
        "color": "#2b542c"
    },
    "alert-info": {
        "backgroundColor": "#d9edf7",
        "borderColor": "#bce8f1",
        "color": "#31708f"
    },
    "alert-info hr": {
        "borderTopColor": "#a6e1ec"
    },
    "alert-info alert-link": {
        "color": "#245269"
    },
    "alert-warning": {
        "backgroundColor": "#fcf8e3",
        "borderColor": "#faebcc",
        "color": "#8a6d3b"
    },
    "alert-warning hr": {
        "borderTopColor": "#f7e1b5"
    },
    "alert-warning alert-link": {
        "color": "#66512c"
    },
    "alert-danger": {
        "backgroundColor": "#f2dede",
        "borderColor": "#ebccd1",
        "color": "#a94442"
    },
    "alert-danger hr": {
        "borderTopColor": "#e4b9c0"
    },
    "alert-danger alert-link": {
        "color": "#843534"
    },
    "progress-bar": {
        "float": "left",
        "width": 0,
        "height": "100%",
        "fontSize": 12,
        "lineHeight": 22,
        "color": "#fff",
        "textAlign": "center",
        "backgroundColor": "#3097d1",
        "WebkitBoxShadow": "inset 0 -1px 0 rgba(0,0,0,.15)",
        "boxShadow": "inset 0 -1px 0 rgba(0,0,0,.15)",
        "WebkitTransition": "width .6s ease",
        "transition": "width .6s ease"
    },
    "progress-bar-striped": {
        "backgroundImage": "linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)",
        "backgroundSize": "40px 40px"
    },
    "progress-striped progress-bar": {
        "backgroundImage": "linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)",
        "backgroundSize": "40px 40px"
    },
    "progress-baractive": {
        "WebkitAnimation": "progress-bar-stripes 2s linear infinite",
        "animation": "progress-bar-stripes 2s linear infinite"
    },
    "progressactive progress-bar": {
        "WebkitAnimation": "progress-bar-stripes 2s linear infinite",
        "animation": "progress-bar-stripes 2s linear infinite"
    },
    "progress-bar-success": {
        "backgroundColor": "#2ab27b"
    },
    "progress-striped progress-bar-success": {
        "backgroundImage": "linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)"
    },
    "progress-bar-info": {
        "backgroundColor": "#8eb4cb"
    },
    "progress-striped progress-bar-info": {
        "backgroundImage": "linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)"
    },
    "progress-bar-warning": {
        "backgroundColor": "#cbb956"
    },
    "progress-striped progress-bar-warning": {
        "backgroundImage": "linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)"
    },
    "progress-bar-danger": {
        "backgroundColor": "#bf5329"
    },
    "progress-striped progress-bar-danger": {
        "backgroundImage": "linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)"
    },
    "media": {
        "marginTop": 15,
        "zoom": 1,
        "overflow": "hidden"
    },
    "media:first-child": {
        "marginTop": 0
    },
    "media-body": {
        "zoom": 1,
        "overflow": "hidden",
        "width": 10000,
        "display": "table-cell",
        "verticalAlign": "top"
    },
    "media-object": {
        "display": "block"
    },
    "media-objectimg-thumbnail": {
        "maxWidth": "none"
    },
    "media-right": {
        "paddingLeft": 10,
        "display": "table-cell",
        "verticalAlign": "top"
    },
    "media>pull-right": {
        "paddingLeft": 10
    },
    "media-left": {
        "paddingRight": 10,
        "display": "table-cell",
        "verticalAlign": "top"
    },
    "media>pull-left": {
        "paddingRight": 10
    },
    "media-middle": {
        "verticalAlign": "middle"
    },
    "media-bottom": {
        "verticalAlign": "bottom"
    },
    "media-heading": {
        "marginTop": 0,
        "marginBottom": 5
    },
    "media-list": {
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "list-group": {
        "marginBottom": 20,
        "paddingLeft": 0
    },
    "list-group-item": {
        "position": "relative",
        "display": "block",
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "marginBottom": -1,
        "backgroundColor": "#fff",
        "border": "1px solid #d3e0e9"
    },
    "list-group-item:first-child": {
        "borderTopRightRadius": 4,
        "borderTopLeftRadius": 4
    },
    "list-group-item:last-child": {
        "marginBottom": 0,
        "borderBottomRightRadius": 4,
        "borderBottomLeftRadius": 4
    },
    "alist-group-item": {
        "color": "#555"
    },
    "buttonlist-group-item": {
        "color": "#555",
        "width": "100%",
        "textAlign": "left"
    },
    "alist-group-item list-group-item-heading": {
        "color": "#333"
    },
    "buttonlist-group-item list-group-item-heading": {
        "color": "#333"
    },
    "alist-group-item:focus": {
        "textDecoration": "none",
        "color": "#555",
        "backgroundColor": "#f5f5f5"
    },
    "alist-group-item:hover": {
        "textDecoration": "none",
        "color": "#555",
        "backgroundColor": "#f5f5f5"
    },
    "buttonlist-group-item:focus": {
        "textDecoration": "none",
        "color": "#555",
        "backgroundColor": "#f5f5f5"
    },
    "buttonlist-group-item:hover": {
        "textDecoration": "none",
        "color": "#555",
        "backgroundColor": "#f5f5f5"
    },
    "list-group-itemdisabled": {
        "backgroundColor": "#eee",
        "color": "#777",
        "cursor": "not-allowed"
    },
    "list-group-itemdisabled:focus": {
        "backgroundColor": "#eee",
        "color": "#777",
        "cursor": "not-allowed"
    },
    "list-group-itemdisabled:hover": {
        "backgroundColor": "#eee",
        "color": "#777",
        "cursor": "not-allowed"
    },
    "list-group-itemdisabled list-group-item-heading": {
        "color": "inherit"
    },
    "list-group-itemdisabled:focus list-group-item-heading": {
        "color": "inherit"
    },
    "list-group-itemdisabled:hover list-group-item-heading": {
        "color": "inherit"
    },
    "list-group-itemdisabled list-group-item-text": {
        "color": "#777"
    },
    "list-group-itemdisabled:focus list-group-item-text": {
        "color": "#777"
    },
    "list-group-itemdisabled:hover list-group-item-text": {
        "color": "#777"
    },
    "list-group-itemactive": {
        "zIndex": 2,
        "color": "#fff",
        "backgroundColor": "#3097d1",
        "borderColor": "#3097d1"
    },
    "list-group-itemactive:focus": {
        "zIndex": 2,
        "color": "#fff",
        "backgroundColor": "#3097d1",
        "borderColor": "#3097d1"
    },
    "list-group-itemactive:hover": {
        "zIndex": 2,
        "color": "#fff",
        "backgroundColor": "#3097d1",
        "borderColor": "#3097d1"
    },
    "list-group-itemactive list-group-item-heading": {
        "color": "inherit"
    },
    "list-group-itemactive list-group-item-heading>small": {
        "color": "inherit"
    },
    "list-group-itemactive:focus list-group-item-heading": {
        "color": "inherit"
    },
    "list-group-itemactive:focus list-group-item-heading>small": {
        "color": "inherit"
    },
    "list-group-itemactive:hover list-group-item-heading": {
        "color": "inherit"
    },
    "list-group-itemactive:hover list-group-item-heading>small": {
        "color": "inherit"
    },
    "list-group-itemactive list-group-item-text": {
        "color": "#d7ebf6"
    },
    "list-group-itemactive:focus list-group-item-text": {
        "color": "#d7ebf6"
    },
    "list-group-itemactive:hover list-group-item-text": {
        "color": "#d7ebf6"
    },
    "list-group-item-success": {
        "color": "#3c763d",
        "backgroundColor": "#dff0d8"
    },
    "alist-group-item-success": {
        "color": "#3c763d"
    },
    "buttonlist-group-item-success": {
        "color": "#3c763d"
    },
    "alist-group-item-success list-group-item-heading": {
        "color": "inherit"
    },
    "buttonlist-group-item-success list-group-item-heading": {
        "color": "inherit"
    },
    "alist-group-item-success:focus": {
        "color": "#3c763d",
        "backgroundColor": "#d0e9c6"
    },
    "alist-group-item-success:hover": {
        "color": "#3c763d",
        "backgroundColor": "#d0e9c6"
    },
    "buttonlist-group-item-success:focus": {
        "color": "#3c763d",
        "backgroundColor": "#d0e9c6"
    },
    "buttonlist-group-item-success:hover": {
        "color": "#3c763d",
        "backgroundColor": "#d0e9c6"
    },
    "alist-group-item-successactive": {
        "color": "#fff",
        "backgroundColor": "#3c763d",
        "borderColor": "#3c763d"
    },
    "alist-group-item-successactive:focus": {
        "color": "#fff",
        "backgroundColor": "#3c763d",
        "borderColor": "#3c763d"
    },
    "alist-group-item-successactive:hover": {
        "color": "#fff",
        "backgroundColor": "#3c763d",
        "borderColor": "#3c763d"
    },
    "buttonlist-group-item-successactive": {
        "color": "#fff",
        "backgroundColor": "#3c763d",
        "borderColor": "#3c763d"
    },
    "buttonlist-group-item-successactive:focus": {
        "color": "#fff",
        "backgroundColor": "#3c763d",
        "borderColor": "#3c763d"
    },
    "buttonlist-group-item-successactive:hover": {
        "color": "#fff",
        "backgroundColor": "#3c763d",
        "borderColor": "#3c763d"
    },
    "list-group-item-info": {
        "color": "#31708f",
        "backgroundColor": "#d9edf7"
    },
    "alist-group-item-info": {
        "color": "#31708f"
    },
    "buttonlist-group-item-info": {
        "color": "#31708f"
    },
    "alist-group-item-info list-group-item-heading": {
        "color": "inherit"
    },
    "buttonlist-group-item-info list-group-item-heading": {
        "color": "inherit"
    },
    "alist-group-item-info:focus": {
        "color": "#31708f",
        "backgroundColor": "#c4e3f3"
    },
    "alist-group-item-info:hover": {
        "color": "#31708f",
        "backgroundColor": "#c4e3f3"
    },
    "buttonlist-group-item-info:focus": {
        "color": "#31708f",
        "backgroundColor": "#c4e3f3"
    },
    "buttonlist-group-item-info:hover": {
        "color": "#31708f",
        "backgroundColor": "#c4e3f3"
    },
    "alist-group-item-infoactive": {
        "color": "#fff",
        "backgroundColor": "#31708f",
        "borderColor": "#31708f"
    },
    "alist-group-item-infoactive:focus": {
        "color": "#fff",
        "backgroundColor": "#31708f",
        "borderColor": "#31708f"
    },
    "alist-group-item-infoactive:hover": {
        "color": "#fff",
        "backgroundColor": "#31708f",
        "borderColor": "#31708f"
    },
    "buttonlist-group-item-infoactive": {
        "color": "#fff",
        "backgroundColor": "#31708f",
        "borderColor": "#31708f"
    },
    "buttonlist-group-item-infoactive:focus": {
        "color": "#fff",
        "backgroundColor": "#31708f",
        "borderColor": "#31708f"
    },
    "buttonlist-group-item-infoactive:hover": {
        "color": "#fff",
        "backgroundColor": "#31708f",
        "borderColor": "#31708f"
    },
    "list-group-item-warning": {
        "color": "#8a6d3b",
        "backgroundColor": "#fcf8e3"
    },
    "alist-group-item-warning": {
        "color": "#8a6d3b"
    },
    "buttonlist-group-item-warning": {
        "color": "#8a6d3b"
    },
    "alist-group-item-warning list-group-item-heading": {
        "color": "inherit"
    },
    "buttonlist-group-item-warning list-group-item-heading": {
        "color": "inherit"
    },
    "alist-group-item-warning:focus": {
        "color": "#8a6d3b",
        "backgroundColor": "#faf2cc"
    },
    "alist-group-item-warning:hover": {
        "color": "#8a6d3b",
        "backgroundColor": "#faf2cc"
    },
    "buttonlist-group-item-warning:focus": {
        "color": "#8a6d3b",
        "backgroundColor": "#faf2cc"
    },
    "buttonlist-group-item-warning:hover": {
        "color": "#8a6d3b",
        "backgroundColor": "#faf2cc"
    },
    "alist-group-item-warningactive": {
        "color": "#fff",
        "backgroundColor": "#8a6d3b",
        "borderColor": "#8a6d3b"
    },
    "alist-group-item-warningactive:focus": {
        "color": "#fff",
        "backgroundColor": "#8a6d3b",
        "borderColor": "#8a6d3b"
    },
    "alist-group-item-warningactive:hover": {
        "color": "#fff",
        "backgroundColor": "#8a6d3b",
        "borderColor": "#8a6d3b"
    },
    "buttonlist-group-item-warningactive": {
        "color": "#fff",
        "backgroundColor": "#8a6d3b",
        "borderColor": "#8a6d3b"
    },
    "buttonlist-group-item-warningactive:focus": {
        "color": "#fff",
        "backgroundColor": "#8a6d3b",
        "borderColor": "#8a6d3b"
    },
    "buttonlist-group-item-warningactive:hover": {
        "color": "#fff",
        "backgroundColor": "#8a6d3b",
        "borderColor": "#8a6d3b"
    },
    "list-group-item-danger": {
        "color": "#a94442",
        "backgroundColor": "#f2dede"
    },
    "alist-group-item-danger": {
        "color": "#a94442"
    },
    "buttonlist-group-item-danger": {
        "color": "#a94442"
    },
    "alist-group-item-danger list-group-item-heading": {
        "color": "inherit"
    },
    "buttonlist-group-item-danger list-group-item-heading": {
        "color": "inherit"
    },
    "alist-group-item-danger:focus": {
        "color": "#a94442",
        "backgroundColor": "#ebcccc"
    },
    "alist-group-item-danger:hover": {
        "color": "#a94442",
        "backgroundColor": "#ebcccc"
    },
    "buttonlist-group-item-danger:focus": {
        "color": "#a94442",
        "backgroundColor": "#ebcccc"
    },
    "buttonlist-group-item-danger:hover": {
        "color": "#a94442",
        "backgroundColor": "#ebcccc"
    },
    "alist-group-item-dangeractive": {
        "color": "#fff",
        "backgroundColor": "#a94442",
        "borderColor": "#a94442"
    },
    "alist-group-item-dangeractive:focus": {
        "color": "#fff",
        "backgroundColor": "#a94442",
        "borderColor": "#a94442"
    },
    "alist-group-item-dangeractive:hover": {
        "color": "#fff",
        "backgroundColor": "#a94442",
        "borderColor": "#a94442"
    },
    "buttonlist-group-item-dangeractive": {
        "color": "#fff",
        "backgroundColor": "#a94442",
        "borderColor": "#a94442"
    },
    "buttonlist-group-item-dangeractive:focus": {
        "color": "#fff",
        "backgroundColor": "#a94442",
        "borderColor": "#a94442"
    },
    "buttonlist-group-item-dangeractive:hover": {
        "color": "#fff",
        "backgroundColor": "#a94442",
        "borderColor": "#a94442"
    },
    "list-group-item-heading": {
        "marginTop": 0,
        "marginBottom": 5
    },
    "list-group-item-text": {
        "marginBottom": 0,
        "lineHeight": 1.3
    },
    "panel": {
        "marginBottom": 22,
        "backgroundColor": "#fff",
        "border": "1px solid transparent",
        "borderRadius": 4,
        "WebkitBoxShadow": "0 1px 1px rgba(0,0,0,.05)",
        "boxShadow": "0 1px 1px rgba(0,0,0,.05)"
    },
    "panel-body": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "panel-body:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "panel-body:before": {
        "content": " ",
        "display": "table"
    },
    "panel-heading": {
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "borderBottom": "1px solid transparent",
        "borderTopRightRadius": 3,
        "borderTopLeftRadius": 3
    },
    "panel-heading>dropdown dropdown-toggle": {
        "color": "inherit"
    },
    "panel-title": {
        "color": "inherit",
        "marginTop": 0,
        "marginBottom": 0,
        "fontSize": 16
    },
    "panel-title>small": {
        "color": "inherit"
    },
    "panel-title>small>a": {
        "color": "inherit"
    },
    "panel-title>a": {
        "color": "inherit"
    },
    "panel-footer": {
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "backgroundColor": "#f5f5f5",
        "borderTop": "1px solid #d3e0e9",
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel>list-group": {
        "marginBottom": 0
    },
    "panel>panel-collapse>list-group": {
        "marginBottom": 0
    },
    "panel>list-group list-group-item": {
        "borderWidth": "1px 0",
        "borderRadius": 0
    },
    "panel>panel-collapse>list-group list-group-item": {
        "borderWidth": "1px 0",
        "borderRadius": 0
    },
    "panel>list-group:first-child list-group-item:first-child": {
        "borderTop": 0,
        "borderTopRightRadius": 3,
        "borderTopLeftRadius": 3
    },
    "panel>panel-collapse>list-group:first-child list-group-item:first-child": {
        "borderTop": 0,
        "borderTopRightRadius": 3,
        "borderTopLeftRadius": 3
    },
    "panel>list-group:last-child list-group-item:last-child": {
        "borderBottom": 0,
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel>panel-collapse>list-group:last-child list-group-item:last-child": {
        "borderBottom": 0,
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel>panel-heading+panel-collapse>list-group list-group-item:first-child": {
        "borderTopRightRadius": 0,
        "borderTopLeftRadius": 0
    },
    "list-group+panel-footer": {
        "borderTopWidth": 0
    },
    "panel-heading+list-group list-group-item:first-child": {
        "borderTopWidth": 0
    },
    "panel>panel-collapse>table": {
        "marginBottom": 0
    },
    "panel>table": {
        "marginBottom": 0
    },
    "panel>table-responsive>table": {
        "marginBottom": 0
    },
    "panel>panel-collapse>table caption": {
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "panel>table-responsive>table caption": {
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "panel>table caption": {
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "panel>table-responsive:first-child>table:first-child": {
        "borderTopRightRadius": 3,
        "borderTopLeftRadius": 3
    },
    "panel>table-responsive:first-child>table:first-child>tbody:first-child>tr:first-child": {
        "borderTopRightRadius": 3,
        "borderTopLeftRadius": 3
    },
    "panel>table-responsive:first-child>table:first-child>thead:first-child>tr:first-child": {
        "borderTopRightRadius": 3,
        "borderTopLeftRadius": 3
    },
    "panel>table:first-child": {
        "borderTopRightRadius": 3,
        "borderTopLeftRadius": 3
    },
    "panel>table:first-child>tbody:first-child>tr:first-child": {
        "borderTopRightRadius": 3,
        "borderTopLeftRadius": 3
    },
    "panel>table:first-child>thead:first-child>tr:first-child": {
        "borderTopRightRadius": 3,
        "borderTopLeftRadius": 3
    },
    "panel>table-responsive:first-child>table:first-child>tbody:first-child>tr:first-child td:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel>table-responsive:first-child>table:first-child>tbody:first-child>tr:first-child th:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel>table-responsive:first-child>table:first-child>thead:first-child>tr:first-child td:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel>table-responsive:first-child>table:first-child>thead:first-child>tr:first-child th:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel>table:first-child>tbody:first-child>tr:first-child td:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel>table:first-child>tbody:first-child>tr:first-child th:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel>table:first-child>thead:first-child>tr:first-child td:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel>table:first-child>thead:first-child>tr:first-child th:first-child": {
        "borderTopLeftRadius": 3
    },
    "panel>table-responsive:first-child>table:first-child>tbody:first-child>tr:first-child td:last-child": {
        "borderTopRightRadius": 3
    },
    "panel>table-responsive:first-child>table:first-child>tbody:first-child>tr:first-child th:last-child": {
        "borderTopRightRadius": 3
    },
    "panel>table-responsive:first-child>table:first-child>thead:first-child>tr:first-child td:last-child": {
        "borderTopRightRadius": 3
    },
    "panel>table-responsive:first-child>table:first-child>thead:first-child>tr:first-child th:last-child": {
        "borderTopRightRadius": 3
    },
    "panel>table:first-child>tbody:first-child>tr:first-child td:last-child": {
        "borderTopRightRadius": 3
    },
    "panel>table:first-child>tbody:first-child>tr:first-child th:last-child": {
        "borderTopRightRadius": 3
    },
    "panel>table:first-child>thead:first-child>tr:first-child td:last-child": {
        "borderTopRightRadius": 3
    },
    "panel>table:first-child>thead:first-child>tr:first-child th:last-child": {
        "borderTopRightRadius": 3
    },
    "panel>table-responsive:last-child>table:last-child": {
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel>table-responsive:last-child>table:last-child>tbody:last-child>tr:last-child": {
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel>table-responsive:last-child>table:last-child>tfoot:last-child>tr:last-child": {
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel>table:last-child": {
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel>table:last-child>tbody:last-child>tr:last-child": {
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel>table:last-child>tfoot:last-child>tr:last-child": {
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3
    },
    "panel>table-responsive:last-child>table:last-child>tbody:last-child>tr:last-child td:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel>table-responsive:last-child>table:last-child>tbody:last-child>tr:last-child th:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel>table-responsive:last-child>table:last-child>tfoot:last-child>tr:last-child td:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel>table-responsive:last-child>table:last-child>tfoot:last-child>tr:last-child th:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel>table:last-child>tbody:last-child>tr:last-child td:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel>table:last-child>tbody:last-child>tr:last-child th:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel>table:last-child>tfoot:last-child>tr:last-child td:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel>table:last-child>tfoot:last-child>tr:last-child th:first-child": {
        "borderBottomLeftRadius": 3
    },
    "panel>table-responsive:last-child>table:last-child>tbody:last-child>tr:last-child td:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel>table-responsive:last-child>table:last-child>tbody:last-child>tr:last-child th:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel>table-responsive:last-child>table:last-child>tfoot:last-child>tr:last-child td:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel>table-responsive:last-child>table:last-child>tfoot:last-child>tr:last-child th:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel>table:last-child>tbody:last-child>tr:last-child td:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel>table:last-child>tbody:last-child>tr:last-child th:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel>table:last-child>tfoot:last-child>tr:last-child td:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel>table:last-child>tfoot:last-child>tr:last-child th:last-child": {
        "borderBottomRightRadius": 3
    },
    "panel>panel-body+table": {
        "borderTop": "1px solid #ddd"
    },
    "panel>panel-body+table-responsive": {
        "borderTop": "1px solid #ddd"
    },
    "panel>table+panel-body": {
        "borderTop": "1px solid #ddd"
    },
    "panel>table-responsive+panel-body": {
        "borderTop": "1px solid #ddd"
    },
    "panel>table>tbody:first-child>tr:first-child td": {
        "borderTop": 0
    },
    "panel>table>tbody:first-child>tr:first-child th": {
        "borderTop": 0
    },
    "panel>table-bordered": {
        "border": 0
    },
    "panel>table-responsive>table-bordered": {
        "border": 0
    },
    "panel>table-bordered>tbody>tr>td:first-child": {
        "borderLeft": 0
    },
    "panel>table-bordered>tbody>tr>th:first-child": {
        "borderLeft": 0
    },
    "panel>table-bordered>tfoot>tr>td:first-child": {
        "borderLeft": 0
    },
    "panel>table-bordered>tfoot>tr>th:first-child": {
        "borderLeft": 0
    },
    "panel>table-bordered>thead>tr>td:first-child": {
        "borderLeft": 0
    },
    "panel>table-bordered>thead>tr>th:first-child": {
        "borderLeft": 0
    },
    "panel>table-responsive>table-bordered>tbody>tr>td:first-child": {
        "borderLeft": 0
    },
    "panel>table-responsive>table-bordered>tbody>tr>th:first-child": {
        "borderLeft": 0
    },
    "panel>table-responsive>table-bordered>tfoot>tr>td:first-child": {
        "borderLeft": 0
    },
    "panel>table-responsive>table-bordered>tfoot>tr>th:first-child": {
        "borderLeft": 0
    },
    "panel>table-responsive>table-bordered>thead>tr>td:first-child": {
        "borderLeft": 0
    },
    "panel>table-responsive>table-bordered>thead>tr>th:first-child": {
        "borderLeft": 0
    },
    "panel>table-bordered>tbody>tr>td:last-child": {
        "borderRight": 0
    },
    "panel>table-bordered>tbody>tr>th:last-child": {
        "borderRight": 0
    },
    "panel>table-bordered>tfoot>tr>td:last-child": {
        "borderRight": 0
    },
    "panel>table-bordered>tfoot>tr>th:last-child": {
        "borderRight": 0
    },
    "panel>table-bordered>thead>tr>td:last-child": {
        "borderRight": 0
    },
    "panel>table-bordered>thead>tr>th:last-child": {
        "borderRight": 0
    },
    "panel>table-responsive>table-bordered>tbody>tr>td:last-child": {
        "borderRight": 0
    },
    "panel>table-responsive>table-bordered>tbody>tr>th:last-child": {
        "borderRight": 0
    },
    "panel>table-responsive>table-bordered>tfoot>tr>td:last-child": {
        "borderRight": 0
    },
    "panel>table-responsive>table-bordered>tfoot>tr>th:last-child": {
        "borderRight": 0
    },
    "panel>table-responsive>table-bordered>thead>tr>td:last-child": {
        "borderRight": 0
    },
    "panel>table-responsive>table-bordered>thead>tr>th:last-child": {
        "borderRight": 0
    },
    "panel>table-bordered>tbody>tr:first-child>td": {
        "borderBottom": 0
    },
    "panel>table-bordered>tbody>tr:first-child>th": {
        "borderBottom": 0
    },
    "panel>table-bordered>tbody>tr:last-child>td": {
        "borderBottom": 0
    },
    "panel>table-bordered>tbody>tr:last-child>th": {
        "borderBottom": 0
    },
    "panel>table-bordered>tfoot>tr:last-child>td": {
        "borderBottom": 0
    },
    "panel>table-bordered>tfoot>tr:last-child>th": {
        "borderBottom": 0
    },
    "panel>table-bordered>thead>tr:first-child>td": {
        "borderBottom": 0
    },
    "panel>table-bordered>thead>tr:first-child>th": {
        "borderBottom": 0
    },
    "panel>table-responsive>table-bordered>tbody>tr:first-child>td": {
        "borderBottom": 0
    },
    "panel>table-responsive>table-bordered>tbody>tr:first-child>th": {
        "borderBottom": 0
    },
    "panel>table-responsive>table-bordered>tbody>tr:last-child>td": {
        "borderBottom": 0
    },
    "panel>table-responsive>table-bordered>tbody>tr:last-child>th": {
        "borderBottom": 0
    },
    "panel>table-responsive>table-bordered>tfoot>tr:last-child>td": {
        "borderBottom": 0
    },
    "panel>table-responsive>table-bordered>tfoot>tr:last-child>th": {
        "borderBottom": 0
    },
    "panel>table-responsive>table-bordered>thead>tr:first-child>td": {
        "borderBottom": 0
    },
    "panel>table-responsive>table-bordered>thead>tr:first-child>th": {
        "borderBottom": 0
    },
    "panel>table-responsive": {
        "border": 0,
        "marginBottom": 0
    },
    "panel-group": {
        "marginBottom": 22
    },
    "panel-group panel": {
        "marginBottom": 0,
        "borderRadius": 4
    },
    "panel-group panel+panel": {
        "marginTop": 5
    },
    "panel-group panel-heading": {
        "borderBottom": 0
    },
    "panel-group panel-heading+panel-collapse>list-group": {
        "borderTop": "1px solid #d3e0e9"
    },
    "panel-group panel-heading+panel-collapse>panel-body": {
        "borderTop": "1px solid #d3e0e9"
    },
    "panel-group panel-footer": {
        "borderTop": 0
    },
    "panel-group panel-footer+panel-collapse panel-body": {
        "borderBottom": "1px solid #d3e0e9"
    },
    "panel-default": {
        "borderColor": "#d3e0e9"
    },
    "panel-default>panel-heading": {
        "color": "#333",
        "backgroundColor": "#fff",
        "borderColor": "#d3e0e9"
    },
    "panel-default>panel-heading+panel-collapse>panel-body": {
        "borderTopColor": "#d3e0e9"
    },
    "panel-default>panel-heading badge": {
        "color": "#fff",
        "backgroundColor": "#333"
    },
    "panel-default>panel-footer+panel-collapse>panel-body": {
        "borderBottomColor": "#d3e0e9"
    },
    "panel-primary": {
        "borderColor": "#3097d1"
    },
    "panel-primary>panel-heading": {
        "color": "#fff",
        "backgroundColor": "#3097d1",
        "borderColor": "#3097d1"
    },
    "panel-primary>panel-heading+panel-collapse>panel-body": {
        "borderTopColor": "#3097d1"
    },
    "panel-primary>panel-heading badge": {
        "color": "#3097d1",
        "backgroundColor": "#fff"
    },
    "panel-primary>panel-footer+panel-collapse>panel-body": {
        "borderBottomColor": "#3097d1"
    },
    "panel-success": {
        "borderColor": "#d6e9c6"
    },
    "panel-success>panel-heading": {
        "color": "#3c763d",
        "backgroundColor": "#dff0d8",
        "borderColor": "#d6e9c6"
    },
    "panel-success>panel-heading+panel-collapse>panel-body": {
        "borderTopColor": "#d6e9c6"
    },
    "panel-success>panel-heading badge": {
        "color": "#dff0d8",
        "backgroundColor": "#3c763d"
    },
    "panel-success>panel-footer+panel-collapse>panel-body": {
        "borderBottomColor": "#d6e9c6"
    },
    "panel-info": {
        "borderColor": "#bce8f1"
    },
    "panel-info>panel-heading": {
        "color": "#31708f",
        "backgroundColor": "#d9edf7",
        "borderColor": "#bce8f1"
    },
    "panel-info>panel-heading+panel-collapse>panel-body": {
        "borderTopColor": "#bce8f1"
    },
    "panel-info>panel-heading badge": {
        "color": "#d9edf7",
        "backgroundColor": "#31708f"
    },
    "panel-info>panel-footer+panel-collapse>panel-body": {
        "borderBottomColor": "#bce8f1"
    },
    "panel-warning": {
        "borderColor": "#faebcc"
    },
    "panel-warning>panel-heading": {
        "color": "#8a6d3b",
        "backgroundColor": "#fcf8e3",
        "borderColor": "#faebcc"
    },
    "panel-warning>panel-heading+panel-collapse>panel-body": {
        "borderTopColor": "#faebcc"
    },
    "panel-warning>panel-heading badge": {
        "color": "#fcf8e3",
        "backgroundColor": "#8a6d3b"
    },
    "panel-warning>panel-footer+panel-collapse>panel-body": {
        "borderBottomColor": "#faebcc"
    },
    "panel-danger": {
        "borderColor": "#ebccd1"
    },
    "panel-danger>panel-heading": {
        "color": "#a94442",
        "backgroundColor": "#f2dede",
        "borderColor": "#ebccd1"
    },
    "panel-danger>panel-heading+panel-collapse>panel-body": {
        "borderTopColor": "#ebccd1"
    },
    "panel-danger>panel-heading badge": {
        "color": "#f2dede",
        "backgroundColor": "#a94442"
    },
    "panel-danger>panel-footer+panel-collapse>panel-body": {
        "borderBottomColor": "#ebccd1"
    },
    "embed-responsive": {
        "position": "relative",
        "display": "block",
        "height": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "overflow": "hidden"
    },
    "embed-responsive embed-responsive-item": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "bottom": 0,
        "height": "100%",
        "width": "100%",
        "border": 0
    },
    "embed-responsive embed": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "bottom": 0,
        "height": "100%",
        "width": "100%",
        "border": 0
    },
    "embed-responsive iframe": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "bottom": 0,
        "height": "100%",
        "width": "100%",
        "border": 0
    },
    "embed-responsive object": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "bottom": 0,
        "height": "100%",
        "width": "100%",
        "border": 0
    },
    "embed-responsive video": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "bottom": 0,
        "height": "100%",
        "width": "100%",
        "border": 0
    },
    "embed-responsive-16by9": {
        "paddingBottom": "56.25%"
    },
    "embed-responsive-4by3": {
        "paddingBottom": "75%"
    },
    "well": {
        "minHeight": 20,
        "paddingTop": 19,
        "paddingRight": 19,
        "paddingBottom": 19,
        "paddingLeft": 19,
        "marginBottom": 20,
        "backgroundColor": "#f5f5f5",
        "border": "1px solid #e3e3e3",
        "borderRadius": 4,
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.05)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.05)"
    },
    "well blockquote": {
        "borderColor": "rgba(0,0,0,.15)"
    },
    "well-lg": {
        "paddingTop": 24,
        "paddingRight": 24,
        "paddingBottom": 24,
        "paddingLeft": 24,
        "borderRadius": 6
    },
    "well-sm": {
        "paddingTop": 9,
        "paddingRight": 9,
        "paddingBottom": 9,
        "paddingLeft": 9,
        "borderRadius": 3
    },
    "close": {
        "float": "right",
        "fontSize": 21,
        "fontWeight": "700",
        "lineHeight": 1,
        "color": "#000",
        "textShadow": "0 1px 0 #fff",
        "opacity": 0.2,
        "filter": "alpha(opacity=20)"
    },
    "close:focus": {
        "color": "#000",
        "textDecoration": "none",
        "cursor": "pointer",
        "opacity": 0.5,
        "filter": "alpha(opacity=50)"
    },
    "close:hover": {
        "color": "#000",
        "textDecoration": "none",
        "cursor": "pointer",
        "opacity": 0.5,
        "filter": "alpha(opacity=50)"
    },
    "buttonclose": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "cursor": "pointer",
        "background": "transparent",
        "border": 0,
        "WebkitAppearance": "none"
    },
    "modal": {
        "overflow": "hidden",
        "display": "none",
        "position": "fixed",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "zIndex": 1050,
        "WebkitOverflowScrolling": "touch",
        "outline": 0
    },
    "modal-open": {
        "overflow": "hidden"
    },
    "modalfade modal-dialog": {
        "WebkitTransform": "translateY(-25%)",
        "transform": "translateY(-25%)",
        "WebkitTransition": "-webkit-transform .3s ease-out",
        "transition": "transform .3s ease-out,-webkit-transform .3s ease-out"
    },
    "modalin modal-dialog": {
        "WebkitTransform": "translate(0)",
        "transform": "translate(0)"
    },
    "modal-open modal": {
        "overflowX": "hidden",
        "overflowY": "auto"
    },
    "modal-dialog": {
        "position": "relative",
        "width": "auto",
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10
    },
    "modal-content": {
        "position": "relative",
        "backgroundColor": "#fff",
        "border": "1px solid rgba(0,0,0,.2)",
        "borderRadius": 6,
        "WebkitBoxShadow": "0 3px 9px rgba(0,0,0,.5)",
        "boxShadow": "0 3px 9px rgba(0,0,0,.5)",
        "backgroundClip": "padding-box",
        "outline": 0
    },
    "modal-backdrop": {
        "position": "fixed",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "zIndex": 1040,
        "backgroundColor": "#000"
    },
    "modal-backdropfade": {
        "opacity": 0,
        "filter": "alpha(opacity=0)"
    },
    "modal-backdropin": {
        "opacity": 0.5,
        "filter": "alpha(opacity=50)"
    },
    "modal-header": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "borderBottom": "1px solid #e5e5e5"
    },
    "modal-header:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "modal-header:before": {
        "content": " ",
        "display": "table"
    },
    "modal-header close": {
        "marginTop": -2
    },
    "modal-title": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 1.6
    },
    "modal-body": {
        "position": "relative",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "modal-footer": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "textAlign": "right",
        "borderTop": "1px solid #e5e5e5"
    },
    "modal-footer:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "modal-footer:before": {
        "content": " ",
        "display": "table"
    },
    "modal-footer btn+btn": {
        "marginLeft": 5,
        "marginBottom": 0
    },
    "modal-footer btn-group btn+btn": {
        "marginLeft": -1
    },
    "modal-footer btn-block+btn-block": {
        "marginLeft": 0
    },
    "modal-scrollbar-measure": {
        "position": "absolute",
        "top": -9999,
        "width": 50,
        "height": 50,
        "overflow": "scroll"
    },
    "tooltip": {
        "position": "absolute",
        "zIndex": 1070,
        "display": "block",
        "fontFamily": "Raleway,sans-serif",
        "fontStyle": "normal",
        "fontWeight": "400",
        "letterSpacing": "normal",
        "lineBreak": "auto",
        "lineHeight": 1.6,
        "textAlign": "start",
        "textDecoration": "none",
        "textShadow": "none",
        "textTransform": "none",
        "whiteSpace": "normal",
        "wordBreak": "normal",
        "wordSpacing": "normal",
        "wordWrap": "normal",
        "fontSize": 12,
        "opacity": 0,
        "filter": "alpha(opacity=0)"
    },
    "tooltipin": {
        "opacity": 0.9,
        "filter": "alpha(opacity=90)"
    },
    "tooltiptop": {
        "marginTop": -3,
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0
    },
    "tooltipright": {
        "marginLeft": 3,
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5
    },
    "tooltipbottom": {
        "marginTop": 3,
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0
    },
    "tooltipleft": {
        "marginLeft": -3,
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5
    },
    "tooltip-inner": {
        "maxWidth": 200,
        "paddingTop": 3,
        "paddingRight": 8,
        "paddingBottom": 3,
        "paddingLeft": 8,
        "color": "#fff",
        "textAlign": "center",
        "backgroundColor": "#000",
        "borderRadius": 4
    },
    "tooltip-arrow": {
        "position": "absolute",
        "width": 0,
        "height": 0,
        "borderColor": "transparent",
        "borderStyle": "solid"
    },
    "tooltiptop tooltip-arrow": {
        "bottom": 0,
        "left": "50%",
        "marginLeft": -5,
        "borderWidth": "5px 5px 0",
        "borderTopColor": "#000"
    },
    "tooltiptop-left tooltip-arrow": {
        "right": 5,
        "bottom": 0,
        "marginBottom": -5,
        "borderWidth": "5px 5px 0",
        "borderTopColor": "#000"
    },
    "tooltiptop-right tooltip-arrow": {
        "bottom": 0,
        "marginBottom": -5,
        "borderWidth": "5px 5px 0",
        "borderTopColor": "#000",
        "left": 5
    },
    "tooltipright tooltip-arrow": {
        "top": "50%",
        "left": 0,
        "marginTop": -5,
        "borderWidth": "5px 5px 5px 0",
        "borderRightColor": "#000"
    },
    "tooltipleft tooltip-arrow": {
        "top": "50%",
        "right": 0,
        "marginTop": -5,
        "borderWidth": "5px 0 5px 5px",
        "borderLeftColor": "#000"
    },
    "tooltipbottom tooltip-arrow": {
        "top": 0,
        "left": "50%",
        "marginLeft": -5,
        "borderWidth": "0 5px 5px",
        "borderBottomColor": "#000"
    },
    "tooltipbottom-left tooltip-arrow": {
        "top": 0,
        "right": 5,
        "marginTop": -5,
        "borderWidth": "0 5px 5px",
        "borderBottomColor": "#000"
    },
    "tooltipbottom-right tooltip-arrow": {
        "top": 0,
        "left": 5,
        "marginTop": -5,
        "borderWidth": "0 5px 5px",
        "borderBottomColor": "#000"
    },
    "popover": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "zIndex": 1060,
        "display": "none",
        "maxWidth": 276,
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1,
        "fontFamily": "Raleway,sans-serif",
        "fontStyle": "normal",
        "fontWeight": "400",
        "letterSpacing": "normal",
        "lineBreak": "auto",
        "lineHeight": 1.6,
        "textAlign": "start",
        "textDecoration": "none",
        "textShadow": "none",
        "textTransform": "none",
        "whiteSpace": "normal",
        "wordBreak": "normal",
        "wordSpacing": "normal",
        "wordWrap": "normal",
        "fontSize": 14,
        "backgroundColor": "#fff",
        "backgroundClip": "padding-box",
        "border": "1px solid rgba(0,0,0,.2)",
        "borderRadius": 6,
        "WebkitBoxShadow": "0 5px 10px rgba(0,0,0,.2)",
        "boxShadow": "0 5px 10px rgba(0,0,0,.2)"
    },
    "popovertop": {
        "marginTop": -10
    },
    "popoverright": {
        "marginLeft": 10
    },
    "popoverbottom": {
        "marginTop": 10
    },
    "popoverleft": {
        "marginLeft": -10
    },
    "popover-title": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 8,
        "paddingRight": 14,
        "paddingBottom": 8,
        "paddingLeft": 14,
        "fontSize": 14,
        "backgroundColor": "#f7f7f7",
        "borderBottom": "1px solid #ebebeb",
        "borderRadius": "5px 5px 0 0"
    },
    "popover-content": {
        "paddingTop": 9,
        "paddingRight": 14,
        "paddingBottom": 9,
        "paddingLeft": 14
    },
    "popover>arrow": {
        "position": "absolute",
        "display": "block",
        "width": 0,
        "height": 0,
        "borderColor": "transparent",
        "borderStyle": "solid",
        "borderWidth": 11
    },
    "popover>arrow:after": {
        "position": "absolute",
        "display": "block",
        "width": 0,
        "height": 0,
        "borderColor": "transparent",
        "borderStyle": "solid",
        "borderWidth": 10,
        "content": ""
    },
    "popovertop>arrow": {
        "left": "50%",
        "marginLeft": -11,
        "borderBottomWidth": 0,
        "borderTopColor": "rgba(0,0,0,.25)",
        "bottom": -11
    },
    "popovertop>arrow:after": {
        "content": " ",
        "bottom": 1,
        "marginLeft": -10,
        "borderBottomWidth": 0,
        "borderTopColor": "#fff"
    },
    "popoverright>arrow": {
        "top": "50%",
        "left": -11,
        "marginTop": -11,
        "borderLeftWidth": 0,
        "borderRightColor": "rgba(0,0,0,.25)"
    },
    "popoverright>arrow:after": {
        "content": " ",
        "left": 1,
        "bottom": -10,
        "borderLeftWidth": 0,
        "borderRightColor": "#fff"
    },
    "popoverbottom>arrow": {
        "left": "50%",
        "marginLeft": -11,
        "borderTopWidth": 0,
        "borderBottomColor": "rgba(0,0,0,.25)",
        "top": -11
    },
    "popoverbottom>arrow:after": {
        "content": " ",
        "top": 1,
        "marginLeft": -10,
        "borderTopWidth": 0,
        "borderBottomColor": "#fff"
    },
    "popoverleft>arrow": {
        "top": "50%",
        "right": -11,
        "marginTop": -11,
        "borderRightWidth": 0,
        "borderLeftColor": "rgba(0,0,0,.25)"
    },
    "popoverleft>arrow:after": {
        "content": " ",
        "right": 1,
        "borderRightWidth": 0,
        "borderLeftColor": "#fff",
        "bottom": -10
    },
    "carousel": {
        "position": "relative"
    },
    "carousel-inner": {
        "position": "relative",
        "overflow": "hidden",
        "width": "100%"
    },
    "carousel-inner>item": {
        "display": "none",
        "position": "relative",
        "WebkitTransition": "left .6s ease-in-out",
        "transition": "left .6s ease-in-out"
    },
    "carousel-inner>item>a>img": {
        "display": "block",
        "maxWidth": "100%",
        "height": "auto",
        "lineHeight": 1
    },
    "carousel-inner>item>img": {
        "display": "block",
        "maxWidth": "100%",
        "height": "auto",
        "lineHeight": 1
    },
    "carousel-inner>active": {
        "display": "block",
        "left": 0
    },
    "carousel-inner>next": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "width": "100%",
        "left": "100%"
    },
    "carousel-inner>prev": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "width": "100%",
        "left": "-100%"
    },
    "carousel-inner>nextleft": {
        "left": 0
    },
    "carousel-inner>prevright": {
        "left": 0
    },
    "carousel-inner>activeleft": {
        "left": "-100%"
    },
    "carousel-inner>activeright": {
        "left": "100%"
    },
    "carousel-control": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "bottom": 0,
        "width": "15%",
        "opacity": 0.5,
        "filter": "alpha(opacity=50)",
        "fontSize": 20,
        "color": "#fff",
        "textAlign": "center",
        "textShadow": "0 1px 2px rgba(0,0,0,.6)",
        "backgroundColor": "transparent"
    },
    "carousel-controlleft": {
        "backgroundImage": "linear-gradient(90deg,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001))",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#80000000\",endColorstr=\"#00000000\",GradientType=1)"
    },
    "carousel-controlright": {
        "left": "auto",
        "right": 0,
        "backgroundImage": "linear-gradient(90deg,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5))",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#00000000\",endColorstr=\"#80000000\",GradientType=1)"
    },
    "carousel-control:focus": {
        "outline": 0,
        "color": "#fff",
        "textDecoration": "none",
        "opacity": 0.9,
        "filter": "alpha(opacity=90)"
    },
    "carousel-control:hover": {
        "outline": 0,
        "color": "#fff",
        "textDecoration": "none",
        "opacity": 0.9,
        "filter": "alpha(opacity=90)"
    },
    "carousel-control glyphicon-chevron-left": {
        "position": "absolute",
        "top": "50%",
        "marginTop": -10,
        "zIndex": 5,
        "display": "inline-block",
        "left": "50%",
        "marginLeft": -10
    },
    "carousel-control glyphicon-chevron-right": {
        "position": "absolute",
        "top": "50%",
        "marginTop": -10,
        "zIndex": 5,
        "display": "inline-block",
        "right": "50%",
        "marginRight": -10
    },
    "carousel-control icon-next": {
        "position": "absolute",
        "top": "50%",
        "marginTop": -10,
        "zIndex": 5,
        "display": "inline-block",
        "right": "50%",
        "marginRight": -10,
        "width": 20,
        "height": 20,
        "lineHeight": 1,
        "fontFamily": "serif"
    },
    "carousel-control icon-prev": {
        "position": "absolute",
        "top": "50%",
        "marginTop": -10,
        "zIndex": 5,
        "display": "inline-block",
        "left": "50%",
        "marginLeft": -10,
        "width": 20,
        "height": 20,
        "lineHeight": 1,
        "fontFamily": "serif"
    },
    "carousel-control icon-prev:before": {
        "content": "\\2039"
    },
    "carousel-control icon-next:before": {
        "content": "\\203A"
    },
    "carousel-indicators": {
        "position": "absolute",
        "bottom": 10,
        "left": "50%",
        "zIndex": 15,
        "width": "60%",
        "marginLeft": "-30%",
        "paddingLeft": 0,
        "listStyle": "none",
        "textAlign": "center"
    },
    "carousel-indicators li": {
        "display": "inline-block",
        "width": 10,
        "height": 10,
        "marginTop": 1,
        "marginRight": 1,
        "marginBottom": 1,
        "marginLeft": 1,
        "textIndent": -999,
        "border": "1px solid #fff",
        "borderRadius": 10,
        "cursor": "pointer",
        "backgroundColor": "transparent"
    },
    "carousel-indicators active": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": 12,
        "height": 12,
        "backgroundColor": "#fff"
    },
    "carousel-caption": {
        "position": "absolute",
        "left": "15%",
        "right": "15%",
        "bottom": 20,
        "zIndex": 10,
        "paddingTop": 20,
        "paddingBottom": 20,
        "color": "#fff",
        "textAlign": "center",
        "textShadow": "0 1px 2px rgba(0,0,0,.6)"
    },
    "carousel-caption btn": {
        "textShadow": "none"
    },
    "clearfix:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "clearfix:before": {
        "content": " ",
        "display": "table"
    },
    "center-block": {
        "display": "block",
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "pull-right": {
        "float": "right!important"
    },
    "pull-left": {
        "float": "left!important"
    },
    "hide": {
        "display": "none!important"
    },
    "show": {
        "display": "block!important"
    },
    "invisible": {
        "visibility": "hidden"
    },
    "text-hide": {
        "font": "0/0 a",
        "color": "transparent",
        "textShadow": "none",
        "backgroundColor": "transparent",
        "border": 0
    },
    "hidden": {
        "display": "none!important"
    },
    "affix": {
        "position": "fixed"
    },
    "@-ms-viewport": {
        "width": "device-width"
    },
    "visible-lg": {
        "display": "none!important"
    },
    "visible-lg-block": {
        "display": "none!important"
    },
    "visible-lg-inline": {
        "display": "none!important"
    },
    "visible-lg-inline-block": {
        "display": "none!important"
    },
    "visible-md": {
        "display": "none!important"
    },
    "visible-md-block": {
        "display": "none!important"
    },
    "visible-md-inline": {
        "display": "none!important"
    },
    "visible-md-inline-block": {
        "display": "none!important"
    },
    "visible-sm": {
        "display": "none!important"
    },
    "visible-sm-block": {
        "display": "none!important"
    },
    "visible-sm-inline": {
        "display": "none!important"
    },
    "visible-sm-inline-block": {
        "display": "none!important"
    },
    "visible-xs": {
        "display": "none!important"
    },
    "visible-xs-block": {
        "display": "none!important"
    },
    "visible-xs-inline": {
        "display": "none!important"
    },
    "visible-xs-inline-block": {
        "display": "none!important"
    },
    "visible-print": {
        "display": "none!important"
    },
    "visible-print-block": {
        "display": "none!important"
    },
    "visible-print-inline": {
        "display": "none!important"
    },
    "visible-print-inline-block": {
        "display": "none!important"
    },
    "user": {
        "color": "blue"
    },
    "block": {
        "background": "#eee",
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1,
        "marginTop": 0.1,
        "marginRight": 0.1,
        "marginBottom": 0.1,
        "marginLeft": 0.1
    },
    "tweet": {
        "marginTop": 5
    }
});