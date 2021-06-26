// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Theme from "../../lib/Theme.bs.js";
import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Css from "@emotion/css";

var link = Css.css({
      fontFamily: Theme.fontFamily,
      color: Theme.Colors.blue,
      fontSize: "2.0rem",
      position: "relative",
      cursor: "pointer",
      zIndex: 1,
      background: "transparent",
      transition: "100ms color",
      padding: "2px",
      "&:after": {
        zIndex: -1,
        content: " ",
        height: "2px",
        width: "100%",
        background: Theme.Colors.blue,
        position: "absolute",
        bottom: "-3px",
        left: 0,
        transition: "100ms height"
      },
      "&:hover": {
        transition: "100ms color",
        color: Theme.Colors.white,
        "&:after": {
          transition: "100ms height",
          height: "100%"
        }
      }
    });

function Link(Props) {
  var href = Props.href;
  var children = Props.children;
  var tmp = {
    className: link
  };
  if (href !== undefined) {
    tmp.href = Caml_option.valFromOption(href);
  }
  return React.createElement("a", tmp, children);
}

var make = Link;

export {
  link ,
  make ,
  
}
/* link Not a pure module */
