import React from "react";

export const ModalView = ({ showModal, setShowModal, filteredData }) => {
  return (
    <>
      {showModal && (
        <div className="modal">
          <h1>
            <span>{filteredData[0].user}</span> Kullanıcının Attığı Postlar
          </h1>
          <button onClick={() => setShowModal(false)}>Kapat</button>
          {
                filteredData.map(post=>(
               <div className="modal-post" key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.text}</p>
               </div>
                ))
          }
        </div>
      )}
    </>
  );
};
