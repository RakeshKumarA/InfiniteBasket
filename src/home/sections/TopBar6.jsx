import React, { useState, useEffect } from "react";
import { debounce, classList } from "utils";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import { NavLink, useHistory } from "react-router-dom";
import ScrollTo from "../common/ScrollTo";
import { Button } from "@material-ui/core";

const TopBar6 = (props) => {
  const [isTop, setIsTop] = useState(true);
  const [isClosed, setIsClosed] = useState(true);

  const history = useHistory();

  let scrollableElement = document.querySelector(".scrollable-content");
  if (!scrollableElement) scrollableElement = window;

  let handleScrollRef = null;
  let toggleIcon = isClosed ? "menu" : "close";

  const handleScroll = () => {
    return debounce(({ target: { scrollTop } }) => {
      let isCurrentTop = scrollTop < 100 || scrollableElement.scrollY < 100;
      setIsTop(isCurrentTop);
    }, 20);
  };

  handleScrollRef = handleScroll();

  const close = () => {
    setIsClosed(false);
  };

  useEffect(() => {
    if (scrollableElement) {
      scrollableElement.addEventListener("scroll", handleScrollRef);
    }

    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener("scroll", handleScrollRef);
      }
    };
  }, [scrollableElement, handleScrollRef]);

  const clickhandler = () => {
    history.push("/");
  };

  return (
    <section
      className={classList({
        header: true,
        "header-fixed": !isTop,
        closed: isClosed,
      })}
    >
      <div className="container header-container">
        <div className="brand">
          <IconButton onClick={clickhandler}>
            <img src="./assets/images/InsureLeaguehd-rmbg.png" alt="" />
          </IconButton>
        </div>
        <ul className="navigation">
          <li>
            <ScrollTo to="intro6" onScroll={close}>
              Home
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="service2" onScroll={close}>
              Services
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="marketing1" onScroll={close}>
              Review
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="intro5" onScroll={close}>
              Team
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="contact1" onScroll={close}>
              Contact
            </ScrollTo>
          </li>
        </ul>
        <div className="m-auto" />
        <div className="navigation flex">
          <NavLink to="/about" className="mr-1">
            <Button
              className="box-shadow-none rounded px-6 hover-bg-primary capitalize"
              variant="outlined"
              color="primary"
            >
              About us
            </Button>
          </NavLink>
        </div>
        <IconButton
          className="header__toggle"
          onClick={() => {
            setIsClosed(!isClosed);
          }}
        >
          <Icon>{toggleIcon}</Icon>
        </IconButton>
      </div>
    </section>
  );
};

export default TopBar6;
