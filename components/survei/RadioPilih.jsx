import { Box, Divider, HStack, Text } from "@chakra-ui/layout";
import { useRadio, useRadioGroup } from "@chakra-ui/radio";

// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        textAlign="center"
        width={{ base: "120px", md: "150px", lg: "250px" }}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={3}
        py={3}
        mx="15px"
        my={5}
      >
        {props.children}
      </Box>
    </Box>
  );
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
function RadioPilih(props) {
  const { setTabVal } = props;

  const options = ["Puas", "Tidak Puas"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    defaultValue: "",
    onChange: (e) => {
      setTabVal(e);
    },
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            <Text fontWeight="bold">{value}</Text>
          </RadioCard>
        );
      })}
    </HStack>
  );
}
export default RadioPilih;
