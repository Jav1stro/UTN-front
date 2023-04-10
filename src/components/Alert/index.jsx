import Icon from "../../assets/Icons";

export const Alert = ({
  type,
  width,
  height,
  text,
  margin
}) => {
  if (type === "danger") {
    return (
      <div
        style={{
          color: 'rgb(156, 23, 23)',
          backgroundColor: 'rgb(149, 102, 102)',
          width: width,
          height: height,
          border: '1px solid rgb(156, 23, 23)',
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          margin: margin
        }}
      >
        <div style={{ paddingLeft: "16px", paddingTop: "4px" }}>
          <Icon name="AlertXIcon" width={"16"} height={"16"} />
        </div>
        <div style={{ paddingLeft: "10px" }}>{text}</div>
      </div>
    );
  }
};
