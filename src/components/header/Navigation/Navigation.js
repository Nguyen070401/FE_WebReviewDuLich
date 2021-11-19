import React from "react";
import classes from "./Navigation.module.css";
import Button from "../../helpers/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  function search() {}

  return (
    <nav className={classes.navbar}>
      {/*<img source="" alt="Logo Revigo" /> {/*ảnh logo*/}
      <div className={classes["middle-bar"]}>
        <a href="/">Trang chủ</a>
        <a href="/">Địa điểm</a>
        <a href="/">Bảng xếp hạng</a>
        <a href="/">Liên hệ</a>
        <input
          placeholder="Tìm kiếm"
          className={classes["input-search"]}
          type="search"
        />
        <Button
          className={classes.buttonsearch}
          id="search_button"
          onClick={search}
          type="submit"
        >
          <FontAwesomeIcon icon={faSearch}>search</FontAwesomeIcon>
        </Button>
      </div>

      <div className={classes["login-signup"]}>
        <a href="/">Đăng nhập</a>
        <p>|</p>
        <a href="/">Đăng ký</a>
      </div>
    </nav>
  );
}

export default Navigation;
