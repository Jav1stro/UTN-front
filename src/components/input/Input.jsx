/* eslint-disable react/display-name */
import { forwardRef } from "react";
// import theme from "@theme/index";
import Icon from "../../assets/Icons";

//Forward Ref sirve para pasar referencias de un padre a hijo
export const Input = forwardRef(
  ({ label, type, placeholder, validations }, ref) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          marginBottom: "16px",
        }}
      >
        <label
          style={{
            fontWeight: "600",
            fontStyle: "normal",
            color: 'black',
            marginBottom: "8px",
          }}
        >
          {label}
        </label>

        <input
          ref={ref}
          placeholder={placeholder}
          type={type === false ? "password" : "text"}
          style={{
            border: '1px solid #c62828',
            borderRadius: "8px",
            backgroundColor:'white',
            width: "380px",
            height: "52px",
            padding: "12px",
            fontSize: "16px",
            color:'black',
          }}
        />

        {validations && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "380px",
            }}
          >
            <Icon name="AlertIcon" width={16} height={16} />
            <p
              style={{
                color: "#c62828",
                fontSize: "13.6px",
                paddingLeft: "8px",
                marginTop: "8px",
                marginBottom: "8px",
              }}
            >
              Por favor, revisá tu {label}
            </p>
          </div>
        )}
      </div>
    );
  }
);
