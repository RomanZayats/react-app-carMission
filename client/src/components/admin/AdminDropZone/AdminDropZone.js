import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const AdminDropZone = ({ _id }) => {
  const onDrop = useCallback(
    async (acceptedFiles) => {
      const [image] = acceptedFiles;
      const file = new FormData();
      file.append("image", image);

      const res = await axios
        .post(`/api/work-stages/upload/${_id}`, file, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .catch((err) => console.log(err));
      console.log(res);
    },
    [_id]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Перетащите файл или кликните для выбора файла</p>
      )}
    </div>
  );
};

export default AdminDropZone;
