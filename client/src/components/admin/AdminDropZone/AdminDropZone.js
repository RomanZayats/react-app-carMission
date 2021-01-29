import React, { useCallback, useState, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { dropZone, previewStyles } from "./styles";

const AdminDropZone = ({ setFile, imgURL }) => {
  const [image, setImage] = useState({});

  const onDrop = useCallback(
    (acceptedFiles) => {
      const [image] = acceptedFiles;
      const file = new FormData();
      file.append("image", image);
      setFile(file);

      setImage(
        Object.assign(image, {
          preview: URL.createObjectURL(image),
        })
      );
    },
    [setFile]
  );

  const thumbs = (
    <div style={previewStyles.thumb}>
      <div style={previewStyles.thumbInner}>
        <img
          src={image.preview || imgURL}
          style={previewStyles.img}
          alt="preview"
        />
      </div>
    </div>
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    onDrop,
  });

  const style = useMemo(
    () => ({
      ...dropZone.baseStyle,
      ...(isDragActive ? dropZone.activeStyle : {}),
      ...(isDragAccept ? dropZone.acceptStyle : {}),
      ...(isDragReject ? dropZone.rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <div>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Перетащите файл или кликните для выбора файла</p>
      </div>
      <aside style={previewStyles.thumbsContainer}>{thumbs}</aside>
    </div>
  );
};

export default AdminDropZone;
