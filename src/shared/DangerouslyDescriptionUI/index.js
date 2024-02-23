
const DangerouslyDescriptionUI = ({
  text,
  lineHeight,
  size,
  textAlign = "center",
  variant = 'white',
  classN = ''
}) => {


  return (
    <div
      style={{ lineHeight: lineHeight, fontSize: size, textAlign: textAlign }}
      dangerouslySetInnerHTML={{ __html: text }}
      className={{
        [variant]: true,
        [classN]: true
      }}
    />
  );
};

export default DangerouslyDescriptionUI;