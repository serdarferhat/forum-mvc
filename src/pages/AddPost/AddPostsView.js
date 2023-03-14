import React from "react";
import Header from "../../components/Header";

const AddPostsView = () => {
  return (
         <>   
         <Header main/>   
    <form>

      <fieldset>
        <label>User</label>
        <input type={"text"}></input>
      </fieldset>

      <fieldset>
        <label>Title</label>
        <input type={"text"}></input>
      </fieldset>

      <fieldset>
        <label>Text</label>
        <input type={"text"}></input>
      </fieldset>

      <button type="submit">Gönder</button>
    </form>
    </> 
  );
};

export default AddPostsView;
