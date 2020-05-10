import React from "react";
import Baacc from "../components/BarsAndAppreciationnCommonComponents";
import { Context } from "../utils/ContextState";

export default function AddArticle() {
  return (
    <div>
      <Context.Provider
        value={{
          headerName: "添加文章：",
          requiredBar: "封面图",
          CategoryBar:"分类",
          textArea:true
        }}
      >
        <Baacc/>
      </Context.Provider>
    </div>
  );
}
