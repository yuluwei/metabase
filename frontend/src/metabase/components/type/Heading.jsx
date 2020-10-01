import React from "react";
import Text from "metabase/components/type/Text";

const Heading = ({ children, color, ...props }) => (
  <Text mb="8px" {...props} fontSize="32px" fontWeight={900} color="dark">
    {children}
  </Text>
);

export default Heading;
