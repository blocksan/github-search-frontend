import React from "react";
import { HeaderComponent } from "../HeaderComponent/HeaderComponent";
import { SearchComponent } from "../SearchComponent/SearchComponent";
import { SelectionComponent } from "../SelectionComponent/SelectionComponent";
import { IHeaderWrapperProps } from "../../shared/Interfaces";
import "./HeaderWrapperComponent.scss";

export const HeaderWrapperComponent = (props: IHeaderWrapperProps) => {
  return (
    <section className="headerWrapper">
      <section className="elementWrapper">
        <HeaderComponent></HeaderComponent>
        <article>
          <SearchComponent></SearchComponent>
          <SelectionComponent></SelectionComponent>
        </article>
      </section>
    </section>
  );
};
