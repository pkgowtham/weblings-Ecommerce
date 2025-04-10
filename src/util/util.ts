// import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import { theme } from "../theme/oceanBlueLight";

export const formatTimestamp = (timestamp: string) => {
  const dateObj = new Date(timestamp);
  const date = dateObj.toLocaleDateString();
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const time = dateObj.toLocaleTimeString(undefined, timeOptions);
  return { date, time };
};

type Field = {
  fieldName: string;
  key: string;
  type: string;
  placeholder: string;
  validation?: {
    regex: string;
    message: string;
  };
};

// Define the type for the structure of the fields prop
type FieldSection = {
  data: {
    [key: string]: Field[]; // Flexible structure to support any section
  };
};

// Define the types for formData and errors state
type FormData = {
  [key: string]: string; // Each field will be a key with a string value
};

type Errors = {
  [key: string]: string; // Each field can have an error message as a string
};

// Custom hook
export const useForm = (fields: FieldSection[]) => {
  // Construct the initial state dynamically from the fields provided
  const initialState: FormData = fields.reduce(
    (acc: FormData, section: FieldSection) => {
      Object.entries(section.data).forEach(([_, fieldGroup]) => {
        fieldGroup.forEach((field: Field) => {
          acc[field.key] = ""; // Set default empty string for each field
        });
      });
      return acc;
    },
    {}
  );

  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<Errors>({}); // For storing validation errors

  // Validate the input based on the regex provided in the field's validation
  const validateInput = (
    name: string,
    value: string,
    validation?: { regex: string; message: string }
  ) => {
    if (validation && validation.regex) {
      const regex = new RegExp(validation.regex);
      if (!regex.test(value)) {
        setErrors((prevErrors: Errors) => ({
          ...prevErrors,
          [name]: validation.message, // Store the error message if validation fails
        }));
      } else {
        setErrors((prevErrors: Errors) => {
          const { [name]: removedError, ...rest } = prevErrors;
          return rest; // Remove error if validation passes
        });
      }
    }
  };

  // Handle input change and validation
  const handleInputChange = (
    name: string,
    value: string,
    validation?: { regex: string; message: string }
  ) => {
    setFormData((prevState: FormData) => ({
      ...prevState,
      [name]: value,
    }));

    // Validate the input when it's changed
    if (validation) {
      validateInput(name, value, validation);
    }
  };

  return {
    formData,
    errors,
    handleInputChange,
  };
};

export function camelCaseToReadable(text: string) {
  // Step 1: Insert a space before each uppercase letter
  const spacedText = text.replace(/([A-Z])/g, " $1");

  // Step 2: Capitalize the first letter of each word
  const readableText = spacedText
    .toLowerCase() // Convert the whole string to lowercase first
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word

  return readableText.trim(); // Return the final result after trimming any leading spaces
}

// export const getSelectedBtnProps = (isSelected: boolean) =>
//   isSelected
//     ? {
//         backgroundColor: theme.color.neutral.surface.disabled,
//         variant: "solid",
//       }
//     : { backgroundColor: "transparent" };

export const getNestedValue = (obj:any, key:any) => obj?.[key];

export const deepGet = (obj:any, path:any, defaultValue = undefined) => {
  return path
    .split(".")
    .reduce(
      (acc:any, key:any) => (acc && acc[key] !== undefined ? acc[key] : defaultValue),
      obj
    );
};

export  const lightenColor = (hex:any, percent:any) => {
    // Remove the '#' if it exists
    hex = hex.replace(/^#/, "");

    // Parse the hex color into RGB components
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Lighten each RGB component by mixing with white
    const lighten = (color:any) =>
      Math.round(color + (255 - color) * (percent / 100));

    const lightenedR = lighten(r);
    const lightenedG = lighten(g);
    const lightenedB = lighten(b);

    // Convert the lightened RGB values back to hex
    const toHex = (color:any) => color.toString(16).padStart(2, "0");
    return `#${toHex(lightenedR)}${toHex(lightenedG)}${toHex(lightenedB)}`;
  };


export function convertTimeTo12HourFormat(time24:any) {
    // Split time into components: hours, minutes, seconds
    const [hours, minutes, seconds] = time24.split(':').map(Number);
  
    // Determine AM or PM
    const period = hours >= 12 ? 'PM' : 'AM';
  
    // Convert hours to 12-hour format
    const hours12 = hours % 12 === 0 ? 12 : hours % 12;
  
    // Format time as 12-hour with AM/PM
    const formattedTime = `${String(hours12).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${period}`;
  
    return formattedTime;
  }


export  const useOutsideClick = (ref:any, callback:any) => {
    useEffect(() => {
      const handleClickOutside = (event:any) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref, callback]);
  };
  
  export function useScrollToTop() {
    const location = useLocation();
    
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);
  }



  // font change code-------------- "fontFamily": "Open sans",