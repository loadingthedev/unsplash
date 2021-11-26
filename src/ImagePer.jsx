const ImagePer = ({ Path, idx }) => {
  return (
    <div className="w-full">
      <img
        key={idx}
        src={Path}
        alt="idx"
        className="object-contain rounded-lg border-2 border-black"
      />
    </div>
  );
};

export default ImagePer;
