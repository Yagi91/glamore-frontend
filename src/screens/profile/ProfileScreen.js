import React from "react";
import { Link } from "react-router-dom";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { NavBar } from "../../layouts";
import { SearchURLContext } from "../../contexts";
import { ProductCard } from "../../components/cards";

const product = { name: "Cotton beige T-shirt", price: 700, currency: "XAF" };

const ProfileScreen = () => {
  return (
    <React.Fragment>
      <SearchURLContext.Provider value={{ searchUrl: "" }}>
        <NavBar />
      </SearchURLContext.Provider>
      <main>
        <section className="section-profile">
          <div className="profile">
            <figure>
              <img
                src={require("../../assets/images/profile.png")}
                alt="profile"
                className="profile__image"
              />
              <figcaption className="profile__name">nfor gift</figcaption>
            </figure>
            <div className="profile__links">
              <Link
                to="/edit-profile"
                className="btn btn--white profile__button"
              >
                <BorderColorOutlinedIcon className="profile__icon" />
                <span>edit profile</span>
              </Link>
              <Link
                to="/account-setting"
                className="btn btn--white ms-2 profile__button"
              >
                <SettingsOutlinedIcon className="profile__icon" />
                <span>account setting</span>
              </Link>
            </div>
          </div>
        </section>
        <section className="section-items">
          <h2 className="section-header">saved items</h2>
          <div className="product-items">
            {Array.from({ length: 20 }).map((_, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default ProfileScreen;
