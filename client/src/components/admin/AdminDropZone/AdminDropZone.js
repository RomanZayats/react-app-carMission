import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const AdminDropZone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);
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
