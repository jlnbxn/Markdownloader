import { useState, useRef } from "react";
import Button, {
  ButtonInvisible,
  ButtonPrimary,
} from "@primer/components/lib/Button";
import Spinner from "@primer/components/lib/Spinner";
import Box from "@primer/components/lib/Box";
import Text from "@primer/components/lib/Text";
import TextInput from "@primer/components/lib/TextInput";
import Logo from "../assets/logo.svg";

const Input = ({
  setParentValue,
  onSubmit,
  value,
  isLoading,
  handleExample,
}) => {
  const inputEl = useRef(null);

  const [valid, setValid] = useState(true);
  const [shaking, setShaking] = useState("");

  const handleChange = (e) => {
    setValid(true);
    setParentValue(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi.test(value)
    ) {
      setValid(true);
      onSubmit(value);
    } else {
      setValid(false);
      setShaking(" url-invalid-shake");
      setTimeout(function () {
        setShaking("");
      }, 500);
    }
  };

  return (
    <>
      {isLoading ? (
        <Box
          style={{ height: "100vh" }}
          className=" d-flex flex-justify-center flex-items-center"
        >
          <Spinner size="large" />
        </Box>
      ) : (
        <Box className="wrapper">
          <img src={Logo} />
          <Text as="p" m={3} textAlign="center">
            Download & read articles as Markdown
          </Text>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div ref={inputEl} className={"input-container" + shaking}>
              <div className="link">
                <TextInput
                  mt="4"
                  className={
                    valid ? `source-input` : `source-input input-invalid`
                  }
                  aria-label="url"
                  onChange={(e) => handleChange(e.target.value)}
                  type="text"
                  value={value}
                  autoFocus
                  name="title"
                  variant="large"
                  minWidth="300px"
                  placeholder="Enter Article URL..."
                />
              </div>
            </div>
            <ButtonPrimary variant="large">Create Markdown</ButtonPrimary>
            <ButtonInvisible mt={3} onClick={() => handleExample()}>
              See an example ›
            </ButtonInvisible>
          </form>
        </Box>
      )}
    </>
  );
};

export default Input;
